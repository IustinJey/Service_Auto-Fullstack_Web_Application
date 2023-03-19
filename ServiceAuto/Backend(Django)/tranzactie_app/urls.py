from django.conf.urls import url
from tranzactie_app import views

urlpatterns = [
    url(r'^tranzactie/$', views.tranzactieAPI),
    url(r'^interval_tranzactie/(?P<a>\w{0,50})/(?P<b>\w{0,50})/$', views.intervalAPI), 
    url(r'^sterge_tranzactii/(?P<data1>.*)/(?P<data2>.*)/$', views.sterge_interval), 
    url(r'^tranzactie/([0-9]+)$', views.tranzactieAPI)
]
