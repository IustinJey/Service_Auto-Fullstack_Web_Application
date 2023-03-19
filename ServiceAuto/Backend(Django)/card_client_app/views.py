from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from card_client_app.models import CardClient
from serializers import CardClientSerializers
from tranzactie_app.models import Tranzactie


# Create your views here.
@csrf_exempt
def card_clientAPI(request, id=0):
    if request.method == 'GET':
        cards_clients = CardClient.objects.all()
        cards_clients_serializers = CardClientSerializers(instance = cards_clients, many = True)
        return JsonResponse(cards_clients_serializers.data, safe=False)

    elif request.method == 'POST':
        card_client_data = JSONParser().parse(request)
        card_client_serializer = CardClientSerializers(data = card_client_data)
        if card_client_serializer.is_valid():
            card_client_serializer.save()
            return JsonResponse(card_client_serializer.data, safe=False)
        return JsonResponse('Cardul de client nu a putut fi adaugat!', safe= False)

    elif request.method == 'PUT':
        card_client_data = JSONParser().parse(request)
        card_client = CardClient.objects.get(id_card_client = card_client_data['id_card_client'])
        card_client1 = CardClient.objects.get(id_card_client = card_client_data['id_card_client'])
        card_client_serializer = CardClientSerializers(card_client, data = card_client_data)
        card_client_serializer2 = CardClientSerializers(card_client1, many = False)
        if card_client_serializer.is_valid():
            card_client_serializer.save()
            return JsonResponse(card_client_serializer2.data, safe= False)
        return JsonResponse('Nu s-a putu modifica cardul de client!', safe= False)

    elif request.method =='DELETE':
        card_client = CardClient.objects.get(id_card_client = id)
        card_client_serializer = CardClientSerializers(card_client, many = False)
        card_client.delete()
        return JsonResponse(card_client_serializer.data, safe=False) #'Cardul de client a fost sters cu succes!'

def searchAPI(request, key):
    if request.method == 'GET':
        list = []
        cards = CardClient.objects.all()
        for card in cards:
            if str(card.id_card_client).find(key) != -1:
                list.append(card)
            elif str(card.nume_client).find(key) != -1:
                list.append(card)
            elif str(card.prenume_client).find(key) != -1:
                list.append(card)
            elif str(card.CNP_client).find(key) != -1:
                list.append(card)
            elif str(card.data_inregistrarii).find(key) != -1:
                list.append(card)
            elif str(card.data_nasterii).find(key) != -1:
                list.append(card)
        list = CardClientSerializers(list, many = True)
        return JsonResponse(list.data, safe= False)

def ordonare_dupa_manopera(request):
        if request.method == 'GET':
            rezultat = []
            tranzactii = Tranzactie.objects.all()
            tranzactii = sorted(tranzactii,
                                key=lambda tranzactie: tranzactie.suma_manopera,
                                reverse=True)
            for tranzactie in tranzactii:
                id_card_client = tranzactie.id_card_client
                if CardClient.objects.get(id_card_client = id_card_client) not in rezultat:
                    rezultat.append(CardClient.objects.get(id_card_client = id_card_client))

            rezultat = CardClientSerializers(rezultat, many = True)
            return JsonResponse(rezultat.data, safe=False)