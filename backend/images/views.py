from django.shortcuts import render

# Create your views here.



from rest_framework import viewsets, generics 
from rest_framework.response import Response
from rest_framework.decorators import api_view 

from rest_framework.views import APIView

from .models import ImageHandler, TestModel
from .serializers import ImageSerializer, TestSerializer


class ImageViewSet(viewsets.ModelViewSet):
    queryset = ImageHandler.objects.all()
    serializer_class = ImageSerializer

  

#@api_view(['GET', 'POST'])
# class TestViewSet(viewsets.ModelViewSet):
#     queryset = TestModel.objects.all()
#     serializer_class = TestSerializer


    

#     def post(self, request):
#         if request.method == 'POST':
#             if request.data is not None:
#                 return Response({'response': request.data[0]})

#api_view(['GET', 'POST'])
class TestViewSet(viewsets.ModelViewSet):
    queryset = TestModel.objects.all().order_by('name')
    serializer_class = TestSerializer

    