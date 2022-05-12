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


    
class PredictionsModel(models.Model):
    #preds = models.CharField(max_length=101)
    preds= models.DecimalField(max_digits = 4, decimal_places=2, default = 0.00000)
    #models.DecimalField(max_digits = 13, decimal_places=5, default = 0.00000)

    class Meta:
        def __str__(self):
            return self.preds


    