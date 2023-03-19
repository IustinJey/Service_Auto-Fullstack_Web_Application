import re
from django.db.models.fields import json
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
import time
from datetime import date, datetime

from car_app.models import Car
from tranzactie_app.models import Tranzactie
from serializers import CarSerializers, TranzactieSerializers

# Create your views here.
@csrf_exempt
def tranzactieAPI(request, id=0):
    if request.method == 'GET':
        tranzactii = Tranzactie.objects.all()
        tranzactii_serializers = TranzactieSerializers(tranzactii, many = True)
        return JsonResponse(tranzactii_serializers.data, safe=False)

    elif request.method == 'POST':
        tranzactie_data = JSONParser().parse(request)

        # VERIFICARI
        car = Car.objects.get(id_car = tranzactie_data['id_masina'])
        if car.garantie_car == 'True':
            tranzactie_data['suma_piese'] = 0
        if tranzactie_data['id_card_client'] != 'None':
            tranzactie_data['suma_manopera'] -= 0.1 * tranzactie_data['suma_manopera']
        tranzactie_data['suma_totala'] = tranzactie_data['suma_piese'] + tranzactie_data['suma_manopera']
        
        
    
        tranzactie_serialier = TranzactieSerializers(data = tranzactie_data)
        if tranzactie_serialier.is_valid():
            tranzactie_serialier.save()
            return JsonResponse(tranzactie_serialier.data, safe=False)
        return JsonResponse("Tranzactia nu a putut fi adaugata!", safe=False)
    
    elif request.method == 'PUT':
        tranzactie_data = JSONParser().parse(request)
        tranzactie = Tranzactie.objects.get(id_tranzactie = tranzactie_data['id_tranzactie'])
        tranzactie1 = Tranzactie.objects.get(id_tranzactie = tranzactie_data['id_tranzactie'])
        tranzactie_serialier = TranzactieSerializers(tranzactie, data= tranzactie_data)
        tranzactie_serialier1 = TranzactieSerializers(tranzactie1, many = False)
        if tranzactie_serialier.is_valid():
            tranzactie_serialier.save()
            return JsonResponse(tranzactie_serialier1.data, safe=False)
        return JsonResponse("Trazactia nu a putut fi modificata!", safe=False)

    elif request.method == 'DELETE':
        tranzactie = Tranzactie.objects.get(id_tranzactie = id)
        tranzactie_serialier = TranzactieSerializers(tranzactie, many = False)
        tranzactie.delete()
        return JsonResponse(tranzactie_serialier.data, safe=False) #"Tranzactie stearsa cu succes!"

def intervalAPI(request, a=0, b=0):
    if request.method == 'GET':
        in_interval = []
        tranzactii = Tranzactie.objects.all()
        for tranzactie in tranzactii:
            if tranzactie.suma_totala > int(a):
                if tranzactie.suma_totala < int(b):
                    in_interval.append(tranzactie)
        in_interval = TranzactieSerializers(in_interval, many = True)
        return JsonResponse(in_interval.data, safe=False)

@csrf_exempt
def sterge_interval(request, data1, data2):
    if request.method == 'DELETE':
        tranzactii = Tranzactie.objects.all()
        for tran in tranzactii:
            if tran.data > datetime.strptime(data1, "%Y-%m-%d").date():
                if tran.data < datetime.strptime(data2, "%Y-%m-%d").date():
                    tran.delete()
    return JsonResponse("Trazactii sterse cu succes!", safe=False)
    
    """ [summary]
    """