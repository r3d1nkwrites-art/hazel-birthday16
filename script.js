var step = 0;


/* =========================
   START
========================= */

function startBirthday() {

    step = 1;

    showQuestion();
}


/* =========================
   QUESTIONS
========================= */

function showQuestion() {

    var container = document.getElementById("mainContainer");


    if (step === 1) {

        container.innerHTML = `
            <div class="birthday-reveal">

                <div class="snoopy">🐶</div>

                <h1>WAIT. 😭</h1>

                <p>Are you REALLY ready?</p>

                <button id="yesButton">YES</button>

                <button id="noButton">NO</button>

            </div>
        `;
    }


    else if (step === 2) {

        container.innerHTML = `
            <div class="birthday-reveal">

                <div class="snoopy">🐶</div>

                <h1>🤨 REALLY?</h1>

                <p>You're sure about this?</p>

                <button id="yesButton">YES</button>

                <button id="noButton">NO</button>

            </div>
        `;
    }


    else if (step === 3) {

        container.innerHTML = `
            <div class="birthday-reveal">

                <div class="snoopy">🐶</div>

                <h1>HOLD ON. 😭</h1>

                <p>Like... REALLY REALLY sure?</p>

                <button id="yesButton">YES</button>

                <button id="noButton">NO</button>

            </div>
        `;
    }


    else if (step === 4) {

        container.innerHTML = `
            <div class="birthday-reveal">

                <div class="snoopy">🐶</div>

                <h1>Okay. 😐</h1>

                <p>Last chance.</p>

                <button id="yesButton">YES</button>

                <button id="noButton">NO</button>

            </div>
        `;
    }


    document.getElementById("yesButton").onclick = nextQuestion;

    document.getElementById("yesButton").onmouseover = moveYesButton;

    document.getElementById("noButton").onclick = noBirthday;
}


/* =========================
   MOVING YES BUTTON
========================= */

function moveYesButton() {

    var button = document.getElementById("yesButton");

    var moveX = (Math.random() * 100) - 50;

    var moveY = (Math.random() * 60) - 30;

    button.style.left = moveX + "px";

    button.style.top = moveY + "px";
}


/* =========================
   NEXT QUESTION
========================= */

function nextQuestion() {

    step++;

    if (step > 4) {

        birthdayReveal();

    } else {

        showQuestion();

    }
}


/* =========================
   NO BUTTON
========================= */

function noBirthday() {

    var container = document.getElementById("mainContainer");

    container.innerHTML = `
        <div class="birthday-reveal">

            <div class="snoopy">🐶</div>

            <h1>NO? 😭</h1>

            <p>Wow. Okay.</p>

            <p>I'll pretend I didn't see that.</p>

            <button onclick="startBirthday()">
                Try Again
            </button>

        </div>
    `;
}


/* =========================
   BIRTHDAY REVEAL
========================= */

function birthdayReveal() {

    var container = document.getElementById("mainContainer");

    container.innerHTML = `
        <div class="birthday-reveal">

            <div class="snoopy">🐶</div>

            <h1>🎉 HAPPY BIRTHDAY, HAZEL! 🎂</h1>

            <p class="big-message">
                You finally made it. 😭
            </p>

            <p>
                I hope your birthday is filled with happiness,
                good memories, and lots of cake! 💚
            </p>

            <p>
                You deserve a really, really good day. 🌷
            </p>

            <button onclick="videoSuspense()">
                🎁 Open your gift
            </button>

        </div>
    `;
}


/* =========================
   VIDEO SUSPENSE
========================= */

function videoSuspense() {

    var container = document.getElementById("mainContainer");

    container.innerHTML = `
        <div class="birthday-reveal">

            <div class="snoopy">🐶</div>

            <h1>Oh... 👀</h1>

            <p>You thought that was everything?</p>

            <p>Not quite.</p>

            <button onclick="readyForVideo()">
                Continue
            </button>

        </div>
    `;
}


/* =========================
   READY FOR VIDEO
========================= */

function readyForVideo() {

    var container = document.getElementById("mainContainer");

    container.innerHTML = `
        <div class="birthday-reveal">

            <div class="snoopy">🐶</div>

            <h1>Before you continue...</h1>

            <p>
                There is something I want you to see.
            </p>

            <p>
                Are you ready?
            </p>

            <button onclick="loadingVideo()">
                I'm ready
            </button>

        </div>
    `;
}


/* =========================
   LOADING
========================= */

function loadingVideo() {

    var container = document.getElementById("mainContainer");

    container.innerHTML = `
        <div class="birthday-reveal">

            <h1>⚠️ FINAL WARNING ⚠️</h1>

            <p>
                Preparing your birthday message...
            </p>

            <div class="loading-bar">

                <div class="loading-progress"></div>

            </div>

            <p id="loadingText">
                Loading...
            </p>

        </div>
    `;


    setTimeout(function() {

        document.getElementById("loadingText").innerHTML =
            "Almost there... 👀";

    }, 1500);


    setTimeout(function() {

        document.getElementById("loadingText").innerHTML =
            "Okay. Here we go.";

    }, 3000);


    setTimeout(function() {

        showVideo();

    }, 4500);
}


/* =========================
   VIDEO SCREEN
========================= */

function showVideo() {

    var container = document.getElementById("mainContainer");

    container.innerHTML = `
        <div class="birthday-reveal">

            <div class="snoopy">🐶</div>

            <h1>🎥 A MESSAGE FOR HAZEL</h1>

            <p>You made it.</p>

            <button onclick="playVideo()">
                ▶ Watch the video
            </button>

        </div>
    `;
}


/* =========================
   PLAY VIDEO
========================= */

function playVideo() {

    var container = document.getElementById("mainContainer");

    container.innerHTML = `
        <div class="birthday-reveal">

            <h1>💚 Happy Birthday, Hazel! 💚</h1>

            <video controls autoplay>

                <source
                    src="birthday-video.mp4"
                    type="video/mp4"
                >

                Your browser does not support video.

            </video>

        </div>
    `;
}