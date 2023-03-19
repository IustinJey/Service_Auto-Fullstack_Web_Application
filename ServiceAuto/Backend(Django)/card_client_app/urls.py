from django.conf.urls import url
from card_client_app import views

urlpatterns = [
    url(r'^card_client/$', views.card_clientAPI),
    url(r'^carduri_ordonare/$', views.ordonare_dupa_manopera), 
    url(r'^card_client_search/(?P<key>\w{0,50})/$', views.searchAPI), 
    url(r'^card_client/([0-9]+)$', views.card_clientAPI)
]
