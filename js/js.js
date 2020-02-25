/**
 * file: js.js
 * purpose: interactivity
 * inspration from: https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_video_js_prop
 **/

var myVideo = document.getElementById("myVideo");
myVideo.width = 1950;
myVideo.controls = true;

function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}

function makeBig() {
    myVideo.width = 1000;
}

function makeSmall() {
    myVideo.width = 200;
}

function makeNormal() {
    myVideo.width = 420;
}

var myVideo = document.getElementById("findus");
myVideo.width = 850;
myVideo.controls = true;

function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}

function makeBig() {
    myVideo.width = 1000;
}

function makeSmall() {
    myVideo.width = 200;
}

function makeNormal() {
    myVideo.width = 420;
}








console.log('Stardate 235678.89: JavaScript from js.js is up and running.');

//paste your java script here **/
// the image names should be real image names
var myGallery = [
  "pattern1.jpg",
  "pattern2.jpg",
  "pattern3.jpg",
  "pattern4.jpg",
  "pattern5.jpg",
  "img_8583.jpg",
    "carpets1.jpg",
  "carpets2.jpg"
  
];

//create the html **/
for (i = 0; i < myGallery.length; i++) {
	// note the shorthand code below
  exhibition.innerHTML += '<img src="images/'
  +myGallery[i]
  +'"alt="From my gallery">';
}
