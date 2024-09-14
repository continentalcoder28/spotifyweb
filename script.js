console.log("welcome to spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Salam-e-ishq", filepath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "two", filepath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Bhula Dena", filepath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Salae laler", filepath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "bhaiya ji", filepath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "pandey ji", filepath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "beintaha", filepath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "tere bin", filepath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "kaha raja bhoj", filepath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "tere bin", filepath: "songs/10.mp3", coverPath: "covers/10.jpg" }
];

// Update song items display
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log("timeupdate");

    // Update seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log("progress");
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

// Handle song item play/pause click
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        element.classList.remove("fa-play-circle");
        element.classList.add("fa-pause-circle");

        songIndex = i; // Update the song index
        audioElement.src = songs[songIndex].filepath; // Correctly set the song path
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    });
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src='songs/${songIndex+1}.mp3';
    audioElement.currentTime=0;
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-play-circle')
})


document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src='songs/${songIndex+1}.mp3';
    audioElement.currentTime=0;
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-play-circle')
})




