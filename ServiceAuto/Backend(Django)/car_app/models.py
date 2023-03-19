from django.db import models

# Create your models here
class Car(models.Model):
    id_car = models.AutoField(primary_key=True)
    model_car = models.CharField(max_length=50)
    an_achizitie_car = models.DateField()
    nr_km_car = models.IntegerField()
    garantie_car = models.CharField(max_length=50)  