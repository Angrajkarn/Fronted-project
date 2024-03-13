console.log("welcome to spotify");

//initalize the variables
let songindex=0;
let audioElement= new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songs=[
    {songName:"salam-e-ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"salam-e-ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"salam-e-ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"salam-e-ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"salam-e-ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"salam-e-ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
]
//audioElement.play();

//Handle play/pause click

