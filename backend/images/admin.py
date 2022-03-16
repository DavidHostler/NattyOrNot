from django.contrib import admin

# Register your models here.

from .models import ImageHandler, TestModel

admin.site.register(ImageHandler)

admin.site.register(TestModel)