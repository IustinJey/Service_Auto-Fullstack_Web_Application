from django.test import TestCase
from rest_framework.parsers import JSONParser
from tranzactie_app.models import Tranzactie
from datetime import datetime

from serializers import TranzactieSerializers

class CarTestCase(TestCase):
    def setUp(self):
        Tranzactie.objects.create(id_tranzactie = 0, id_masina = 0, id_card_client = 0, suma_piese = 1000, suma_manopera = 2000, data = "2001-12-12", suma_totala = 3000)
 
    def test_tranzactie_create(self):
        tranzactie = Tranzactie.objects.get(id_tranzactie = 0)
        self.assertEqual(tranzactie.id_masina, "0")
        self.assertEqual(tranzactie.id_card_client, "0")
        self.assertEqual(tranzactie.suma_piese, 1000)
        self.assertEqual(tranzactie.suma_manopera, 2000)
        self.assertEqual(tranzactie.data, datetime.strptime("2001-12-12", "%Y-%m-%d").date())
        self.assertEqual(tranzactie.suma_totala, 3000)

    def test_tranzactie_delete(self): 
        tranzactie = Tranzactie.objects.get(id_tranzactie = 0)
        response = tranzactie.delete('http://127.0.0.1:8000'+'/tranzactie/'+ str(tranzactie.id_tranzactie))
        self.assertEqual(response.status_code, 204)
    
    def test_tranzactie_update(self):
        
        tranzactie = Tranzactie.objects.get(id_tranzactie = 0)
        tranzactie_updated = {'id_tranzactie': 0, 'id_masina': 0,
                              'id_card_client': 0,
                              'suma_piese': 3000,
                              'suma_manopera': 2000,
                              'data': "2001-12-12",
                              'suma_totala': 3000}
        tranzactie_serializer = TranzactieSerializers(tranzactie, data = tranzactie_updated)
        if tranzactie_serializer.is_valid():
            tranzactie_serializer.save()
        tranzactie = Tranzactie.objects.get(id_tranzactie = 0)
        self.assertEqual(tranzactie.suma_piese, 3000)
        
    