from django.db import models
from django.core.validators import RegexValidator

# Create your models here.
class CardClient(models.Model):
    id_card_client = models.AutoField(primary_key=True)
    nume_client = models.CharField(max_length=50)
    prenume_client = models.CharField(max_length=50)
    CNP_client = models.CharField(
        max_length=13,
        validators=[RegexValidator(
            regex=r'^[0-9]{13}$',
            message='CNP-ul nu poate avea o lungime diferita de 13',
            code='nomatch'
        )],
        unique=True
    )
    data_inregistrarii = models.DateField(max_length=30)
    data_nasterii = models.DateField(max_length=30)