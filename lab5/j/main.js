/** @format */

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
var myTimer = false;


// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId: "ks6ZP8EbCOo",
        playerVars: {
            playsinline: 1,
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
        },
    });
}


// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    console.log('playerReady');
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for 15 seconds and then stop.

function onPlayerStateChange(event) {

    if (event.data == YT.PlayerState.PLAYING) {
        console.log('starting timer');
        myTimer = setInterval(getTime, 1000, event);

    } else if (event.data !== YT.PlayerState.PLAYING) {
        if (!myTimer) {
            console.log('no timer?');
        } else {
            clearInterval(myTimer);
            console.log('stopping timer');

        }
    }
}

function getTime(event) {
    time = Math.floor(event.target.getCurrentTime());
    manageCues(time);
}

function manageCues(time) {
    console.log(time);

    if (time == 24) {
        showInfo2();
        player.pauseVideo();
        setTimeout('player.playVideo();', 6000);
        setTimeout(() => info.classList.toggle('hide'), 6000);
    }

    if (time == 29) {
        showInfo3();
        player.pauseVideo();
        setTimeout('player.playVideo();', 6000);
        setTimeout(() => info.classList.toggle('hide'), 6000);

    }

    if (time == 90) {
        player.loadVideoById({
            'videoId': '54act3rLNUM',
            'startSeconds': 0,
            'endSeconds': 10
        });
    }

}


function showInfo2() {
    let info = document.getElementById('info');
    let div1 = document.createElement('DIV');
    div1.classList.add('myframe2');
    div1.innerHTML = "Hayden Valley";
    info.appendChild(div1);
}


function showInfo3() {
    let info2 = document.getElementById('info');
    let div2 = document.createElement('DIV');
    div2.classList.add('myframe3');
    div2.innerHTML = "Canary Spring";
    info2.appendChild(div2);
    info2.classList.toggle('hide')
}



// Helper functions for controlling the video element.

function playVideo() {
    player.playVideo();
}

function pauseVideo() {
    player.pauseVideo();
}

function playRate() {
    var rate = player.getPlaybackRate();
    player.setPlaybackRate(rate + 0.25);
}

function slow_motion() {
    var rate = player.getPlaybackRate();
    if (rate > 0.25) {
        player.setPlaybackRate(rate - 0.25);
    }
}

function go() {
    player.seekTo(70, true);
}