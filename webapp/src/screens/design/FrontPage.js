import React from 'react';



const FrontPage = () => {
    return(
        <div>
            <h4>
                Use the buttons below to post an image of your physique,
                "Choose File" to find an image of yourself and then hit "Submit" 
                to upload this image to the server.

                The image shall then be displayed below, accompanied by a numeric prediction
                indicative of the likelihood between 0 and 1 that your physique was obtained naturally.
                This probability is not 100% accurate, as the prediction is made by an artificial neural 
                network and not a drug test. The training data included pictures of on-stage bodybuilders, 
                and assumed that 100% of them were enhanced via PED's. This is not necessarily true, as
                genetic "freaks" (this is a compliment) do exist in bodybuilding as well as powerlifting and
                similar sports.


                Do with the AI's prediction what you will, but please take this as a tongue-in-cheek exercise
                that demonstrates how cool applications of machine learning can be. 
            </h4>
        </div>
    )

}


export default FrontPage;