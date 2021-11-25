// COllapsible
let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");

        let content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });

}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
    ampm = hours >= 12 ? 'pm' : 'am';

    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
       hours = 12;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes + ' ' + ampm;
    return time;
}

function firstBotMessage() {
    let firstMessage = "Hello! I am a bot designed to tell you the compatibility of red blood cells. Type the blood type you are interested in finding compatibility information about."
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime;

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntroView(false);
}

firstBotMessage();

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>'
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I forgot to type a valid response."
    }

    let userHtml = '<p class="userText"><span' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 500)

}

function buttonSendText(sampleText) {
    let userhtml = '<p class="userText"><span' + sampleText + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Thank you!")
}

$("#textInput").keypress(function(e) {
    if(e.key == 13) {
        getResponse();
    }
});