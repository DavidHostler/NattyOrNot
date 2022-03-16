from rest_framework import serializers

from .models import ImageHandler, TestModel

class ImageSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:

        model = ImageHandler
        fields = ['image']


class TestSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:

        model = TestModel
        fields = ['name']