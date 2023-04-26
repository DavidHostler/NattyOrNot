# NattyOrNot
This is a project born of gym-bro humour and a general love of software development.



![alt text](https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2009/09/Building-a-Bodybuilder-Back.jpg)



This project is a full stack web application that permits users to upload an image of their physique and get a response as to whether they 
are Natty or not. The app uses React to submit the image from your personal files to a Python/Django rest framework backend, which saves
the image to a stack of images. A neural network pops the most recent file off the stack and predicts whether the image is of a "natty" 
or natural physique, i.e. a non-steroid user, or of a steroid enhanced individual.

The response is saved as a binary response "Natty" or "Not" and is rendered in React, alongside the image posted, and the probability of whether this individual is chemically enhanced.

## MOTIVATION

The primary motivation for this project is mostly from an inside joke in the bodybuilding community. While I do have a background in mathematical physics and machine learning, I am not 
Greg Doucette (an individual famous for his ability to identify whether somebody is a natural lifter!)
Some suspect that Coach Greg is himself, not unlike my program, an artificial intelligence designed to classify physiques.
Of course, the neural network I've trained was trained on data that I combed through based on what type of physique looks roided and which one does not.
Given that my judgment is imperfect, this should not be taken seriously as a way of identifying "fake natties"!

## DISCLAIMER:

There are natural physiques which are amazing, and there are mediocre physiques created with the use of PED's. So please don't take the app as certainty 
if it accuses you of being on chemicals.
The primary goal of this app is to showcase a complete web application with machine-learning powered capabilities.

It demonstrates not just how easy basic web development is with Python and Javascript- but also how to make use of a binary classifier network using Tensorflow.
Additionally, this project is run 100% locally on the hardware of any user who clones this repo. This means that when you upload pictures, I cannot see them because they are still on your device and have no way of reaching the internet. I feel that this should be obvious, but I'd like to make laypersons comfortable with this project too for the sake of spreading the novelty. 


## HOW IT WORKS:

You start up the webpage and run the server, preferably on two separate terminal windows. The instructions for this are examined below under "STEPS".
One program will run the Django server in Python within the virtual environment, and is accessible on port 8000 by default. Likewise, since NodeJS applications usually run on port 3000 by default, the React webpage will run locally on port 3000 as well, since pretty much any Javascript compiled outside of a browser is going to be running Node.

You first click the "choose file" button, which will bring up your system's file directory, from which you can click on and choose any image (.JPG, PNG or .JPEG) file that you can access on your machine locally. If you're using a solid state drive or flash drive, then that will also be accessible.
Hit "Submit" and the button press will trigger a POST request from the button to the server, specifically the URL endpoint containing the images of 
the project. The data in the image is sent through the REST API and stored on the SQL database (in this case we'll stick with SQLite3 although I prefer 
Postgres... Django comes with SQLite3 already, so why fix it if it's not broken?)

The image is then read by the python script using OpenCV into a numpy array, which is a really cool data structure built on the Fortran language and used heavily in image processing and machine learning applications. The array is reshaped into a 1 x N sized vector, and its inputs are fed into a Convolutional Neural Network (CNN) built in Python using Tensorflow and the Keras API. 

If you understand machine learning in-depth, skip this paragraph. Neural networks are trained on hundreds (for silly ones like this) to tens of thousands or even millions of images (e.g. think of Tesla's attempts at self-driving using end-to-end deep learning).
Given a batch of images labelled in one way, e.g. "Natty" and "Not" by a data scientist, a CNN would be trained to recognize which images from each are "Natty" and which ones are "Not" through a clever algorithm called "Gradient Descent". If you're into multivariable calculus, it means that the network attempts to minimize a loss function (i.e. the error in each prediction) by updating the weights and biases of each of its layers by a certain timestep size multiplied by the gradient (Del operator) of the loss function. 
Each layer of course, is a linear transformation  on the input x of the form 
y = Ax + b, and outputs an activation function value of output = f(y) = f(Ax + b).Since the gradient in multivariable calculus represents the path of steepest descent down a 3D surface, the weights and biases are being updated in such a way to reach the global minimum of the loss function F(x,y) in the fastest way possible. Hopefully my days as a Multivariable Calc TA allowed me to write that in a semi-digestible way. 
The output layer of a binary classifier network (I.e. this network which outputs either a 1 (Natty) or 0 (Not)) is going to be a softmax layer, so it yields a single floating point prediction between 0.00 and 1.00. If the prediction is closer to 1.00 (i.e. >= 0.50) then the network predicts that you
are in fact "Natty". Otherwise, it thinks you're on PED's (if you get <0.50). This prediction is the probability that you are natty in the first place.
Hopefully, the reader can appreciate how a computer algorithm based off of calculus and linear algebra neatly converges to yield a straightforward probability as trivial to understand as a heads-or-tails coin flip!

Once the predict.py file predicts your natty status, it uses a requests library to programmatically make a POST request from the file using Python back to another url endpoint of the Django RESTful API. This decimal result is of course stored in the database in SQLite3 automatically since that's the whole point of using a web API, and then this result is retrieved from the endpoint along with the actual image.

The prediction and the image are displayed on the webpage in ReactJS using a library called axios. It's not necessary to always use such an Http library in Javascript frameworks, but I find that it saves me a good amount of trouble. Making use of the useState and useEffect hooks in React, the data becomes displayed on the webpage. It will show you the percentage likelihood that you're natty, and the pic of yourself (or whomever) that you uploaded.





## STEPS


Obviously, first

### git clone https://github.com/DavidHostler/NattyOrNot.git

and then open it wherever you decided to clone the repository.

Then, 

### cd NattyOrNot

Access the backend folder, and then activate the virtual environment ("natty")

### cd backend && source natty/bin/activate 

You should now see "(natty)" to the left of your terminal filepath.

Proceed to install the required Python dependencies for the environment

### pip install -r requirements.txt

The reason for this step is that if I had included all libraries pre-installed, then the project's size would likely swell to way over what Github

would allow users to upload or download, and that would suck. Therefore, run the above script to install any dependencies you'll need (e.g. Tensorflow, 

numpy, psycopg2, Django Cors Headers, and OpenCV. These are altogether massive).

Additionally, when I get around to Dockerizing and beautifying parts of the project, the above install script will be included in the Dockerfile, 

as will all other bash scripts in this tutorial. That should make life easier for you whether you're a developer who doesn't lift, a bodybuilder who 

doesn't code, or someone like me who is passionate about both. Or maybe you're none of the above and you got lost on the internet. If so, that's ok, give 

NattyOrNot a whirl anyway!

There are a few that I will add later to requirements.txt to save users a little time adding any additional installs, but please bear with me til then!

You should have everything in Python set up to use the Django REST Framework; next we will update our ReactJS dependencies!

Exit backend and access webapp, our frontend web app

### cd .. && cd webapp

Add any missing node modules:

### npm i


You can run the Python/Django server by going into backend and activating the server like so:

### cd backend && python manage.py runserver

which you can access at url localhost:8000.


You could run the React Javascript server on localhost:3000 likewise by typing the following in the main project folder:

### cd webapp && npm start

Currently, this repository is not fully completed, so apologies if a few of the described features are currently missing. 

The app should be fully functional before the end of March.

Additionally, at the time of this first commit, it has been barely a week since I started this project, so trust that it won't take long to make the 

app totally functional.

Additionally, if I get enough good feedback from people , then I will develop a mobile version with React-Native for use on cell phones just 

to show off that I'm pretty good at mobile development too, and furthermore to show how easy it is to recreate an app from a webpage if you understand

what data is being passed to and from it, as well as the design layout thereof.


I sincerely hope that you enjoy this pet project, and that it inspires you to acquire more gainz!!! :)






### STATUS UPDATE 

The basic fullstack project is complete, I just need to beautify the remaining css so that this doesn't look like a site from 1998.
Most work I've had time to do was in dealing with data (i.e. backend development, preprocessing, machine learning, and fetching said data in the webpage)
I need to wireframe and then code a handsome looking design once I find the time given that times are quite hectic.






 





