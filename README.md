# NattyOrNot
This is a project I'm doing for fun and humour, more or less.


This project is a full stack web application that permits users to upload an image of their physique and get a response as to whether they 
are Natty or not. The app uses React to submit the image from your personal files to a Python/Django rest framework backend, which saves
the image to a stack of images. A neural network pops the most recent file off the stack and predicts whether the image is of a "natty" 
or natural physique, i.e. a non-steroid user, or of a steroid enhanced individual.

The response is saved as a binary response "Natty" or "Not" and is rendered in React, alongside the image posted, and the percentage likelihood 
that this person is enhanced.

## MOTIVATION

The primary motivation for this project is mostly from an inside joke in the bodybuilding community . While I do have a background in mathematical physics and machine learning, I am not 
Greg Doucette (an individual famous for his ability to identify whether somebody is a natural lifter!)
Some suspect that Coach Greg is himself, not unlike my program, an artificial intelligence designed to classify physiques.
Of course, the neural network I've trained was trained on data that I combed through based on what type of physique looks roided and which one does not.
Given that my judgment is imperfect, this should not be taken seriously as a way of identifying "fake natties"!

## DISCLAIMER:

There are natural physiques which are amazing, and there are mediocre physiques created with the use of PED's. So please don't take the app as certainty 
if it accuses you of being on chemicals.
The primary goal of this app is to showcase a complete web application with machine-learning powered capabilities.

It demonstrates not just how easy basic web development is with Python and Javascript- but also how to make use of a binary classifier network using Tensorflow.


## STEPS


Obviously, first

# git clone https://github.com/DavidHostler/NattyOrNot.git

and then open it wherever you decided to clone the repository.

Then, 

# cd NattyOrNot

Access the backend folder, and then activate the virtual environment ("natty")

# cd backend && source natty/bin/activate 

You should now see "(natty)" to the left of your terminal filepath.

Proceed to install the required Python dependencies for the environment

# pip install -r requirements.txt

There are a few that I will add later to requirements.txt to save users a little time adding any additional installs, but please bear with me til then!

You should have everything in Python set up to use the Django REST Framework; next we will update our ReactJS dependencies!

Exit backend and access webapp, our frontend web app

# cd .. && cd webapp

Add any missing node modules:

# npm i


You can run the Python/Django server by going into backend and activating the server like so:

# cd backend && python manage.py runserver

which you can access at url localhost:8000.


You could run the React Javascript server on localhost:3000 likewise by typing the following in the main project folder:

# cd webapp && npm start



















