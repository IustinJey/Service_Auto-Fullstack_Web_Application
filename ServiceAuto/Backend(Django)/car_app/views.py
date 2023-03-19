from datetime import datetime
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.fields import SerializerMethodField
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from tranzactie_app.models import Tranzactie
from car_app.models import Car
from serializers import CarSerializers
import random



# Create your views here.
@csrf_exempt
def carAPI(request, id=0):
    if request.method == 'GET':
        cars = Car.objects.all()
        cars_serializer = CarSerializers(cars, many = True)
        return JsonResponse(cars_serializer.data, safe= False)

    elif request.method == 'POST':  
        car_data = JSONParser().parse(request)
        car_serializer = CarSerializers(data=car_data)
        if car_serializer.is_valid():
            obj = car_serializer.save()
            return JsonResponse(car_serializer.data, safe=False)
        return JsonResponse("Masina nu a putut fi adaugata!", safe=False)

    elif request.method == "PUT":
        car_data = JSONParser().parse(request)
        car = Car.objects.get(id_car=car_data['id_car'])
        car1 = Car.objects.get(id_car=car_data['id_car'])
        car_serializer = CarSerializers(car, data = car_data)
        car_serializer1 = CarSerializers(car1, many = False)
        if car_serializer.is_valid():
            car_serializer.save()
            return JsonResponse(car_serializer1.data, safe=False)
        return JsonResponse('Masina nu a putut fi modificata!', safe=False)

    elif request.method == 'DELETE':
        car = Car.objects.get(id_car = id)
        car_serializer = CarSerializers(car, many = False)
        tranzactii = Tranzactie.objects.filter(id_masina = id)
        tranzactii.delete()
        car.delete()
        return JsonResponse(car_serializer.data, safe=False)

@csrf_exempt
def searchAPI(request, key):
    if request.method == 'GET':
        list = []
        cars = Car.objects.all()
        for car in cars:
            if str(car.id_car).find(key) != -1:
                list.append(car)
            elif str(car.model_car).find(key) != -1:
                list.append(car)
            elif str(car.an_achizitie_car).find(key) != -1:
                list.append(car)
            elif str(car.nr_km_car).find(key) != -1:
                list.append(car)
            elif str(car.garantie_car).find(key) != -1:
                list.append(car)
        list = CarSerializers(list, many = True)
        return JsonResponse(list.data, safe= False)

    
@csrf_exempt
def ordonare_dupa_manopera(request):
        if request.method == 'GET':
            rezultat = []
            tranzactii = Tranzactie.objects.all()
            tranzactii = sorted(tranzactii,
                                key=lambda tranzactie: tranzactie.suma_manopera,
                                reverse=True)
            for tranzactie in tranzactii:
                id_car = tranzactie.id_masina
                if Car.objects.get(id_car = id_car) not in rezultat:
                    rezultat.append(Car.objects.get(id_car = id_car))

            rezultat = CarSerializers(rezultat, many = True)
            return JsonResponse(rezultat.data, safe=False)


@csrf_exempt
def actualizare_garantie(request):
    if request.method == 'GET':
        cars = Car.objects.all()
        for car in cars:
            today = datetime.today().strftime("%Y/%m/%d")
            an_achizitie = car.an_achizitie_car
            t_data = datetime.strptime(today, "%Y/%m/%d")
            years = abs((t_data.date() - an_achizitie))
            if int(years.days)//365 > 3 or car.nr_km_car > 60000:
                car.garantie_car = 'False'
                car.save()
    return JsonResponse("Garantia masinilor a fost modificata!", safe=False)

def generare_aleatorie(request, n):
    if request.method == 'GET':
        for x in range(int(n)):
            models = [
                'Tesla Model S', 'Tesla Model 3',
                'Tesla Model X', 'Tesla Model Y',
                'Audi e-tron GT quattro', 'Audi RS e-tron GT',
                'Audi A1', 'Audi A3 ',
                'BMW X5', 'BMW X6',
                'BMW Z4', 'BMW iX3',
                'Chevrolet Blazer', 'Chevrolet Equinox',
                'Chevrolet Trax', 'Chevrolet Tahoe',
                'Maserati Ghibli', 'Maserati Levante',
                'Maserati Quattroporte', 'Maserati MC20',
                'Porsche 718 Cayman', 'Porsche 911 Carrera',
                'Porsche 911 GT3', 'Porsche Taycan',
                'Volkswagen Golf ', 'Volkswagen Passat',
                'Volkswagen Polo', 'Volkswagen Tiguan',
            ]
            dates = ['2001-12-01', '2004-03-01' , '1994-03-19' , '2009-04-10' , '2017-03-02', '2019-03-21',
                    '2011-11-28', '2002-02-22']
        
            garantie = ['True', 'False']

            Car.objects.create(model_car = random.choice(models), an_achizitie_car = random.choice(dates),
                            nr_km_car = random.randint(20000, 300000), garantie_car =  random.choice(garantie))
    
    return JsonResponse("Obiecte create cu succes!", safe=False)