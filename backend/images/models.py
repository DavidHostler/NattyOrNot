from django.db import models

# Create your models here.

class ImageHandler(models.Model):
    #id = models.CharField(primary_key = True, max_length = 10, default=0)
    image = models.ImageField(upload_to='images')
    

    class Meta:
        
        def __str__(self):
            return self.id

class TestModel(models.Model):
    name = models.CharField(max_length=101)

    class Meta:
        def __str__(self):

            return self.name