from django.test import TestCase
from rest_framework.parsers import JSONParser
from card_client_app.models import CardClient
from datetime import datetime

from serializers import CardClientSerializers

class CarTestCase(TestCase):
    def setUp(self):
        CardClient.objects.create(id_card_client = 0, nume_client = "Alex", prenume_client = "Bobitza", CNP_client = "12341451513123", data_inregistrarii = "2001-12-12", data_nasterii = "2001-12-12")

    def test_car_create(self):
        card_client = CardClient.objects.get(id_card_client = 0)
        self.assertEqual(card_client.nume_client, "Alex")
        self.assertEqual(card_client.prenume_client, "Bobitza")
        self.assertEqual(card_client.CNP_client, "12341451513123")
        self.assertEqual(card_client.data_inregistrarii, datetime.strptime("2001-12-12", "%Y-%m-%d").date())
        self.assertEqual(card_client.data_nasterii, datetime.strptime("2001-12-12", "%Y-%m-%d").date())
    """
    def test_card_client_delete(self): 
        card_client = CardClient.objects.get(model_car = "Logan")
        response = card_client.delete('http://127.0.0.1:8000'+'/card_client/'+ str(card_client.id_card_client))
        self.assertEqual(response.status_code, 204)
    """
    def test_car_update(self):
        
        card_client = CardClient.objects.get(id_card_client = 0)
        card_client_updated = {'id_card_client': 0,
                       'nume_client': "Alexu",
                       'prenume_client':"Bobitza",
                       'CNP_client': "12341451513123",
                       'data_inregistrarii': "2001-12-12",
                       'data_nasterii': "2001-12-12"}
        card_client_serializer = CardClientSerializers(card_client, data = card_client_updated)
        if card_client_serializer.is_valid():
            card_client_serializer.save()
        card_client = CardClient.objects.get(id_card_client = 0)
        self.assertEqual(card_client.nume_client, "Alexu")
        
    