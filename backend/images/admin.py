from django.contrib import admin

# Register your models here.

from .models import ImageHandler, TestModel, PredictionsModel

admin.site.register(ImageHandler)

admin.site.register(TestModel)

admin.site.register(PredictionsModel)