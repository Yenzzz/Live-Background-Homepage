// Video Sliders
let videoIndex = localStorage.getItem("videoIndex");
console.log(videoIndex);
const videoArray = [
  ".\\video-bg\\winter.mp4",
  ".\\video-bg\\amapola.mp4",
  ".\\video-bg\\cosmos.mp4",
  ".\\video-bg\\tree.mp4",
  ".\\video-bg\\tulips.mp4",
];
setBackground(videoArray[videoIndex]);
const bgContainer = document.querySelector(".bg-container");
const ul = document.createElement("ul");
ul.classList.add("hide");
bgContainer.appendChild(ul);

function videoSlider(links) {
  document.querySelector(`.slider`).src = links;
}

function setBackground(bgImg) {
  let videoElement = document.querySelector(".slider");
  videoElement.src = `${bgImg}`;
  videoElement.setAttribute("autoplay", "");
}

for (let i = 0; i < videoArray.length; i++) {
  let li = document.createElement("li");

  let video = document.createElement("video");
  video.onclick = () => {
    video.className = "bg-vid";
    setBackground(videoArray[i]);
    videoIndex = i;
    localStorage.setItem("videoIndex", videoIndex);
  };
  video.src = videoArray[i];

  li.appendChild(video);
  ul.appendChild(li);
}

// Setting background reveal on click

const settingBtn = document.querySelector(".setting");

settingBtn.addEventListener("click", () => {
  if (ul.classList.contains("hide")) {
    ul.classList.remove("hide");
  } else {
    ul.classList.add("hide");
  }
});

// ================= Digital Clock with Date/Day =============================

let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function updateClock() {
  let currentTime = new Date();

  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes();
  let second = currentTime.getSeconds();

  // let timeString = hour + ":" + minute + " ";
  let timeString = `${hour === 0 ? 12 : hour < 13 ? hour : hour - 12}:${minute < 10 ? "0" + minute : minute} ${hour < 12 ? "AM" : "PM"}`;


  // display the appropriate greeting based on the current time

  if (hour < 12) {
    document.getElementById("greeting").innerHTML = "Good Morning!";
  } else if (hour > 11 && hour <= 18) {
    document.getElementById("greeting").innerHTML = "Good Afternoon!";
  } else if (hour >= 17 && hour > 0) {
    document.getElementById("greeting").innerHTML = "Good Evening!";
  }

  // Day and Date

  let dayNumber = currentTime.getDay();
  let date = currentTime.getDate();
  let month = currentTime.getMonth();
  let year = currentTime.getFullYear();

  month += 1;

  let dayName = dayNames[dayNumber];

  let dayString = dayName;
  let dateString = month + "/" + date;

  document.getElementById("clock").innerHTML = timeString;
  document.getElementById("date").innerHTML = dayString + " - " + dateString + "/" + year;
}

setInterval(updateClock, 1000);

// Search Engine

function search() {
  const selectedEngine = document.getElementById("select").value;
  const searchText = document.querySelector(".search-input").value;

  if (selectedEngine === "duck") {
    window.location.href = `https://www.duckduckgo.com/?q=${searchText}`;
  } else if (selectedEngine === "google") window.location.href = `https://www.google.com/search?q=${searchText}`;
}

const inputBox = document.querySelector(".search-input");
inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".click-search").click();
  }
});

const searchButton = document.querySelector(".click-search").addEventListener("click", search);
