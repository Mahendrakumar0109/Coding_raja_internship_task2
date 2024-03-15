document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseBtn = document.getElementById("play-pause-btn");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const songList = document.getElementById("songList");
    const cardSongs = {
        teluguCard: [
            { title: 'Sureyede godugu patti....', url: './assests/salar-song1.mp3' },
            { title: 'Song 2', url: '' },
            // Add more songs as needed
        ],
        hindiCard: [
            { title: 'Song 1', url: '' },
            { title: 'Song 2', url: '' },
            // Add more songs as needed
        ],
        englishCard: [
            { title: 'Song 1', url: '' },
            { title: 'Song 2', url: '' },
            // Add more songs as needed
        ],
        tamilCard: [
            { title: 'Song 1', url: '' },
            { title: 'Song 2', url: '' },
            // Add more songs as needed
        ],
        // Add more cards with their respective song lists
    };

    let isPlaying = !audioPlayer.paused;
    let currentCardId = 'teluguCard'; // Default card ID
    let currentTrackIndex = 0;

    playPauseBtn.addEventListener("click", function() {
        if (isPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    });

    prevBtn.addEventListener("click", function() {
        currentTrackIndex = (currentTrackIndex - 1 + cardSongs[currentCardId].length) % cardSongs[currentCardId].length;
        playCurrentTrack();
    });

    nextBtn.addEventListener("click", function() {
        currentTrackIndex = (currentTrackIndex + 1) % cardSongs[currentCardId].length;
        playCurrentTrack();
    });

    function playAudio() {
        audioPlayer.play();
        isPlaying = true;
        playPauseBtn.innerHTML = "<i class='fas fa-pause'></i>"; // Change button icon to pause symbol
    }

    function pauseAudio() {
        audioPlayer.pause();
        isPlaying = false;
        playPauseBtn.innerHTML = "<i class='fas fa-play'></i>"; // Change button icon to play symbol
    }

    function playCurrentTrack() {
        const track = cardSongs[currentCardId][currentTrackIndex];
        audioPlayer.src = track.url;
        playAudio();
    }

    // Function to generate the song list for a given card ID
    function generateSongList(cardId) {
        const songListContainer = document.getElementById('songList');
        songListContainer.innerHTML = ''; // Clear previous content

        const songs = cardSongs[cardId];
        if (songs) {
            songs.forEach((song, index) => {
                const songElement = document.createElement('li');
                songElement.classList.add('song');
                songElement.textContent = `${index + 1}. ${song.title}`; // Display song title with index
                // Add click event listener to play the selected song
                songElement.addEventListener('click', () => {
                    currentTrackIndex = index;
                    playCurrentTrack();
                });
                songListContainer.appendChild(songElement);
            });
        }
    }
// Hide all cards initially except the first five
const cards = cardContainer.querySelectorAll('.col');
for (let i = 5; i < cards.length; i++) {
    cards[i].style.display = "none";
}

// Function to toggle display of cards
function toggleCards(displayValue) {
    cards.forEach(card => {
        card.style.display = displayValue;
    });
}

// Add event listener to "Show all" button
showAllBtn.addEventListener("click", function() {
    toggleCards("block");
    showAllBtn.style.display = "none"; // Hide the "Show all" button
    showLessDiv.style.display = "block"; // Show the "Show less" link
});

// Add event listener to "Show less" link
showLessBtn.addEventListener("click", function() {
    toggleCards("none");
    showAllBtn.style.display = "block"; // Show the "Show all" button
    showLessDiv.style.display = "none"; // Hide the "Show less" link
});

    // Populate song list for the initial card
    generateSongList(currentCardId);
});
