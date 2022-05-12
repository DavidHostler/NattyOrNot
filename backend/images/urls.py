"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from images import views

#To show images ( TL;DR: IT BLOODY WORKED!!!C :) )
from django.conf import settings
from django.conf.urls.static import static


from images import models

router = routers.DefaultRouter()    
router.register('images', views.ImageViewSet, basename='images')
router.register('tests', views.TestViewSet, basename='tests')
router.register('predictions', views.PredsViewSet, basename='preds')


urlpatterns = [
    path('', include(router.urls)),
    #path('tests/', views.TestViewSet.as_view()),
    #path('images/', views.ImageViewSet.as_view()),
    #path('tests/', views.TestView.as_view(), name='tests'),
    #path('preds/', views.Preds.as_view(), name='preds'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)