const songs = [
    { title: "Blinding Lights", artist: "The Weeknd", src: "The Weeknd - Blinding Lights (Official Audio) - Copy.mp3", cover: "https://tse1.mm.bing.net/th?id=OIP.ixGAHrJZ4Yl_2vPYNSI2ogHaHa&pid=Api&P=0&h=220" },
    { title: "Shape of You", artist: "Ed Sheeran", src: "Shape Of You - Ed Sheeran - Copy.mp3", cover: "https://tse2.mm.bing.net/th?id=OIP.J-z8JrhX2EhcIfugldA8sQHaHa&pid=Api&P=0&h=220" },
    { title: "Levitating", artist: "Dua Lipa", src: "y2mate.com - 和訳Dua LipaLevitating feat DaBaby公式_360p - Copy.mp4", cover: "https://tse2.mm.bing.net/th?id=OIP.FKpRZjNNf7KGGDVdrcKWnAHaJQ&pid=Api&P=0&h=220" },
    { title: "Senorita", artist: "Shawn Mendes, Camila Cabello", src: "Camila Cabello & Shawn Mendes - Señorita.mp3", cover: "https://tse2.mm.bing.net/th?id=OIP.TiFFnktrrs-w7sLCg8u_NwHaEK&pid=Api&P=0&h=220" },
   { title: "Someone like You", artist: "Adele", src: "11SomeoneLikeYou.mp3", cover: "https://tse2.mm.bing.net/th?id=OIP.sDgJbK124MYcI6t7ZD_6_AHaEK&pid=Api&P=0&h=220" },
];

let currentIndex = 0;
let playlist = [];
const audio = new Audio(songs[currentIndex].src);
const playBtn = document.getElementById("play");
const songsList = document.querySelector(".songs-list");
const playlistContainer = document.querySelector(".playlist-list");

// Load songs dynamically
songs.forEach((song, index) => {
    let songElement = document.createElement("div");
    songElement.classList.add("song");
    songElement.innerHTML = `<img src="${song.cover}" alt="${song.title}">
                             <p>${song.title}</p>`;
    songElement.addEventListener("click", () => loadSong(index));
    songsList.appendChild(songElement);
});

function loadSong(index) {
    currentIndex = index;
    audio.src = songs[currentIndex].src;
    document.getElementById("cover").src = songs[currentIndex].cover;
    document.getElementById("title").textContent = songs[currentIndex].title;
    document.getElementById("artist").textContent = songs[currentIndex].artist;
    playSong();
}

function playSong() {
    audio.play();
    playBtn.innerHTML = `<i class="fa fa-pause"></i>`;
}

playBtn.addEventListener("click", () => {
    audio.paused ? playSong() : audio.pause();
});

// Sidebar Navigation
function showSection(section) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.add('hidden'));
    document.getElementById(section).classList.remove('hidden');
}

// Add to Playlist (With Animation)
document.getElementById("add-to-playlist").addEventListener("click", () => {
    if (!playlist.includes(songs[currentIndex])) {
        playlist.push(songs[currentIndex]);
        let songElement = document.createElement("p");
        songElement.textContent = songs[currentIndex].title;
        songElement.classList.add("playlist-song");
        playlistContainer.appendChild(songElement);
    }
});

// Search Songs with Animation
function searchSongs() {
    let filter = document.getElementById("search-bar").value.toLowerCase();
    songsList.childNodes.forEach(song => {
        if (song.textContent.toLowerCase().includes(filter)) {
            song.style.display = "block";
            song.style.animation = "fadeIn 0.5s";
        } else {
            song.style.display = "none";
        }
    });
}
