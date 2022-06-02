

#Use "chmod +x start.sh" in the terminal to provide permissions necessary to run the file

#This script will automate both the neural network and our django python server concurrently;
#the result is we can run multiple programs simultaneously without having to work very hard.
echo "Hello dolan"
python manage.py runserver & 
python machine_learning/predict.py &