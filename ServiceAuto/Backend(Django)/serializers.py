from rest_framework import serializers
from tranzactie_app.models import Tranzactie
from car_app.models import Car
from card_client_app.models import CardClient

class CarSerializers(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ('id_car',
                  'model_car',
                  'an_achizitie_car',
                  'nr_km_car',
                  'garantie_car')

class CardClientSerializers(serializers.ModelSerializer):
    class Meta:
        model = CardClient
        fields = ('id_card_client',
                  'nume_client',
                  'prenume_client',
                  'CNP_client',
                  'data_inregistrarii',
                  'data_nasterii')

class TranzactieSerializers(serializers.ModelSerializer):
    class Meta:
        model = Tranzactie
        fields = ('id_tranzactie',
                  'id_masina',
                  'id_card_client',
                  'suma_piese',
                  'suma_manopera',
                  'data',
                  'suma_totala')

