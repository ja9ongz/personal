// Define the starting point of the game

// Function to display text and options to the player
function displayScene(scene) {
    // Clear previous content
    document.getElementById('game').innerHTML = "";
    // Display scene description
    let sceneText = scenes[scene].text;
    let sceneDiv = document.createElement('div');
    sceneDiv.textContent = sceneText;
    document.getElementById('game').appendChild(sceneDiv);

    
    // Display options
    let options = scenes[scene].options;
    for (let option in options) {
        let optionButton = document.createElement('button');
        optionButton.textContent = options[option].text;
        optionButton.addEventListener('click', function() {
            chooseOption(options[option].nextScene);
        });

        document.getElementById('game').appendChild(optionButton);
    }

    if(scene == 'swipeRight'){
        var img = new Image();
        img.src = 'swipe.jpg';
        document.getElementById('game').appendChild(img);
    }

    if(scene == 'swipeLeft'){
        var img = new Image();
        img.src = 'missedout.gif';
        document.getElementById('game').appendChild(img);
    }

    if(scene == 'keepChatting'){
        var img = new Image();
        img.src = 'awkward.png';
        document.getElementById('game').appendChild(img);
    }

    if(scene == 'meetInPerson'){
        var img = new Image();
        img.src = 'connected.jpg';
        document.getElementById('game').appendChild(img);
    }

    if (scene == 'getTogether'){
        let videoplayer = document.createElement('video');
        videoplayer.setAttribute("src","love.mp4");
        videoplayer.setAttribute("type","video/mp4");
        videoplayer.setAttribute("autoplay","autoplay");
        videoplayer.setAttribute("muted","muted");
        videoplayer.setAttribute("width","100%");

        console.log(videoplayer);
        document.getElementById('game').appendChild(videoplayer);
    }
}

// Function to handle player's choice
function chooseOption(nextScene) {
    currentScene = nextScene;
    displayScene(currentScene);
}

// Define scenes and options
const scenes = {
    start: {
        text: "You're browsing through CMB and come across a profile that catches your eye. Do you swipe right?",
        options: {
            yes: { text: "Yes", nextScene: "swipeRight" },
            no: { text: "No", nextScene: "swipeLeft" }
        }
    },
    swipeRight: {
        text: "You swipe right on the profile, and to your delight, it's a match! You start chatting and hit it off. Do you suggest meeting in person?",
        options: {
            suggestMeeting: { text: "Yes", nextScene: "meetInPerson" },
            keepChatting: { text: "No, keep chatting", nextScene: "keepChatting" }
        }
    },
    swipeLeft: {
        text: "I see.......you wna swipe left!",
        options: {
        }
    },
    meetInPerson: {
        text: "You suggest meeting in person, and your match agrees. You decide to meet on Christmas day. The date goes incredibly well, and you both feel a strong connection.",
        options: {
            getTogether: { text: "Get together", nextScene: "getTogether" }
        }
    },
    keepChatting: {
        text: "You continue chatting with your match for a while longer, getting to know each other better. Eventually, you suggest meeting in person.",
        options: {
            suggestMeeting: { text: "Suggest meeting", nextScene: "meetInPerson" }
        }
    },
    getTogether: {
        text: "After a few more dates, you officially become a couple. Fast forward to this year, and you're celebrating your second Valentine's Day together!",
        options: {
            
        }
    }
};

// Start the game
displayScene(currentScene);

