#Machine learning related imports 

#Activate with a Tensorflow-based environment

import tensorflow as tf
import numpy as np
from tensorflow import keras
import os
import cv2
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import(Dense, Dropout, Activation, Flatten)
from tensorflow.keras.layers import Conv2D, MaxPooling2D
import matplotlib.pyplot as plt

#To perform Http requests to update data 
import requests


ROOT = os.getcwd()
#Load Tensorflow model
#Load model 
WEIGHTS = os.path.join(ROOT, 'machine_learning/.ipynb_checkpoints/nattyornot.h5')
model = keras.models.load_model(WEIGHTS)



#Where we store the images in the Django project folder
MEDIA = ROOT + '/media/images/'


images_folder = os.listdir(MEDIA)
most_recent_upload_filename = images_folder.pop(0)
most_recent_upload = (MEDIA + most_recent_upload_filename)
most_recent_upload = cv2.imread(most_recent_upload,  cv2.IMREAD_GRAYSCALE)

#Input size of keras model is 75 * 75 pixels
data = cv2.resize(most_recent_upload, (75, 75))

def predict(data, model):
    IMG_SIZE = model.layers[0].input_shape[1] #Get size of input layer
    resized_image = cv2.resize(data, (IMG_SIZE, IMG_SIZE))
    #data = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    data = np.expand_dims(data, axis=0)
    prediction_ = model.predict(data)
    print_statement = None
    
    
    return float(prediction_)#, print_statement


result = predict(data, model)
result *= 10000 #multiply by 10000
result //= 1 #get the integer number of times it's divisible by 1
result /= 100 #divide by 100 to get the percentage


#We're running the server locally. 
r = requests.post('http://127.0.0.1:8000/predictions/', 
                  json={"preds": result}
                 )
print(r.status_code) #You want the code 201