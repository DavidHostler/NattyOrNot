from rest_framework import serializers

from .models import ImageHandler, TestModel, PredictionsModel

class ImageSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:

        model = ImageHandler
        fields = ['image']


class TestSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:

        model = TestModel
        fields = ['name']


class PredSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PredictionsModel
        fields = ['preds']
        