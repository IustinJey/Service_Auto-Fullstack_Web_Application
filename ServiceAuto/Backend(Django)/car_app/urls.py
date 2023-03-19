from django.conf.urls import url
from car_app import views

urlpatterns = [
    url(r'^car/$', views.carAPI),
    url(r'^actualizare_garantie/$', views.actualizare_garantie),
    url(r'^car_ordonare/$', views.ordonare_dupa_manopera),
    url(r'^car_search/(?P<key>\w{0,50})/$', views.searchAPI), 
    url(r'^car/([0-9]+)$', views.carAPI),
    url(r'^generare_aleatorie/([1-50]+)$', views.generare_aleatorie)
]
