const playBtn = document.getElementById("play");
const previous = document.getElementById("previous");
const forward = document.getElementById("forward");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const container = document.querySelector(".container");
const musicVolume = document.querySelector("#music_volume");

const musics = [
  "Eminem - Mockingbird",
  "Eminem - Lose Yourself",
  "Bolalar - Kel Yashaylik Biz Birga",
  "Xcho - Ты и Я",
];

let currentMusicIndex = 0;

const currentMusic = (index) => {
  audio.src = `../music/${musics[index]}.mp3`;
  cover.src = `../images/${musics[index]}.jpg`;
  title.textContent = musics[index];
};

currentMusic(currentMusicIndex);

playBtn.addEventListener("click", () => {
  if (!container.classList.contains("play")) {
    container.classList.add("play");
    audio.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    audio.pause();
    container.classList.remove("play");
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
  play();
});

forward.addEventListener("click", () => {
  if (currentMusicIndex < musics.length - 1) {
    currentMusicIndex++;
    console.log("1");
  } else {
    currentMusicIndex = 0;
    console.log(currentMusicIndex);
  }
  currentMusic(currentMusicIndex);
  play();
});

previous.addEventListener("click", () => {
  if (currentMusicIndex > 0) {
    currentMusicIndex--;
    console.log("1");
  } else {
    currentMusicIndex = musics.length - 1;
    currentMusicIndex;
  }
  currentMusic(currentMusicIndex);
  play();
});

musicVolume.addEventListener("input", (e) => {
  audio.volume = m;
});
