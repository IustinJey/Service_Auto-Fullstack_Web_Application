from django.http.request import HttpRequest
from django.test import TestCase
from rest_framework.parsers import JSONParser
from car_app.models import Car
from datetime import datetime
from django.utils import unittest
from django.test.client import RequestFactory

from serializers import CarSerializers

class CarTestCase(TestCase):
    def setUp(self):
        Car.objects.create(id_car = 0, model_car = "Mertss", an_achizitie_car = "2001-12-12", nr_km_car = "1000", garantie_car = "True")

    def test_car_create(self):
        car = Car.objects.get(model_car = "Logan")
        self.assertEqual(car.model_car, "Logan")
        self.assertEqual(car.an_achizitie_car, datetime.strptime("2001-12-12", "%Y-%m-%d").date())
        self.assertEqual(car.nr_km_car, 1000)
        self.assertEqual(car.garantie_car, "True")
    
    def test_car_delete(self): 
        car = Car.objects.get(model_car = "Logan")
        response = car.delete('http://127.0.0.1:8000'+'/car/'+ str(car.id_car))
        self.assertEqual(response.status_code, 204)
    
    def test_car_update(self):
        
        car = Car.objects.get(id_car = 0)
        car_updated = { 'model_car': "Dacia",
                        'an_achizitie_car': "2001-12-12",
                        'nr_km_car': 1000,
                        'garantie_car': "True" }
        car_serializer = CarSerializers(car, data = car_updated)
        if car_serializer.is_valid():
            car_serializer.save()
        car = Car.objects.get(id_car = 0)
        self.assertEqual(car.model_car, "Dacia")
        
    