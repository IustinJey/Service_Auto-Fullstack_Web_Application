from django.db import models
from django.db.models.base import Model

# Create your models here.
class Tranzactie(models.Model):
    id_tranzactie = models.AutoField(primary_key=True)
    id_masina = models.IntegerField()
    id_card_client = models.IntegerField()
    suma_piese = models.DecimalField(decimal_places=2, max_digits=10)
    suma_manopera = models.DecimalField(decimal_places=2, max_digits=10)
    data = models.DateField()
    suma_totala = models.DecimalField(decimal_places=2, max_digits=10) 

