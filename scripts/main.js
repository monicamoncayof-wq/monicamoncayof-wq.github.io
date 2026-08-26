/* ==========================================
   DIGICAM PHOTO GALLERY & CLICK SWAPPER
   ========================================== */

// Complete Master List of ALL Digicam Photos (Old + 37 New)
const digicamPhotos = [
  // Original Photos
  "P1070928.JPG", "P1070929.JPG", "P1070967.JPG", "P1070982.JPG", "P1070992.JPG",
  "P1070993.JPG", "P1080005.JPG", "P1080014.JPG", "P1080021.JPG", "P1080026.JPG",
  "P1080054.JPG", "P1080058.JPG", "P1080059.JPG", "P1080061.JPG", "P1080090.JPG",
  "P1080101.JPG", "P1080130.JPG", "P1080134.JPG", "P1080163.JPG", "P1080176.JPG",
  "P1080177.JPG", "P1080191.JPG", "P1080192.JPG", "P1080196.JPG", "P1080197.JPG",
  "P1080203.JPG", "P1080205.JPG", "P1080206.JPG", "P1080224.JPG", "P1080227.JPG",
  "P1080232.JPG", "P1080233.JPG", "P1080241.JPG", "P1080244.JPG", "P1080268.JPG",
  "P1080308(1).JPG", "P1080310(1).JPG", "P1080312(1).JPG", "P1080344.JPG", "P1080345.JPG",
  "P1080346.JPG", "P1080349.JPG", "P1080350.JPG", "P1080353.JPG", "P1080354.JPG",
  "P1080356.JPG", "P1080357.JPG", "P1080359.JPG", "P1080362.JPG", "P1080363.JPG",
  "P1080390.JPG", "P1080392.JPG", "P1080394.JPG", "P1080430.JPG", "P1080434.JPG",
  "P1080440.JPG", "P1080443.JPG", "P1080444.JPG", "P1080446.JPG", "P1080448.JPG",
  "P1080451.JPG", "P1080459.JPG", "P1080463.JPG", "P1080480.JPG", "P1080483.JPG",
  
  // New Photos Added
  "P1080484.JPG", "P1080485.JPG", "P1080486.JPG", "P1080488.JPG", "P1080492.JPG",
  "P1080496.JPG", "P1080498.JPG", "P1080502.JPG", "P1080504.JPG", "P1080505.JPG",
  "P1080506.JPG", "P1080508.JPG", "P1080509.JPG", "P1080510.JPG", "P1080511.JPG",
  "P1080512.JPG", "P1080513.JPG", "P1080515.JPG", "P1080517.JPG", "P1080521.JPG",
  "P1080522.JPG", "P1080523.JPG", "P1080525.JPG", "P1080534.JPG", "P1080541.JPG",
  "P1080542.JPG", "P1080543.JPG", "P1080544.JPG", "P1080547.JPG", "P1080548.JPG",
  "P1080553.JPG", "P1080555.JPG", "P1080559.JPG", "P1080563.JPG", "P1080568.JPG",
  "P1080570.JPG", "P1080571.JPG"
];

/* ==========================================
   LEFT COLUMN 10-PHOTO CLICK SWAPPER
   ========================================== */

let currentSidebarPhotoIndex = 1;
const totalSidebarPhotos = 10;

function swapPhoto() {
  const photo = document.getElementById("interactive-photo");
  if (!photo) return;

  // Loop through photo1.jpg to photo10.jpg
  currentSidebarPhotoIndex = (currentSidebarPhotoIndex % totalSidebarPhotos) + 1;

  photo.style.opacity = "0.3";
  photo.style.transform = "scale(0.92) rotate(-3deg)";

  setTimeout(() => {
    photo.src = `assets/images/photo${currentSidebarPhotoIndex}.jpg`;
    photo.style.opacity = "1";
    photo.style.transform = "scale(1) rotate(0deg)";
  }, 180);
}

// Shuffle Utility Function
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Infinite Scroll Track Generator
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("cam-gallery-track");
  if (!track) return;

  const shuffledList = shuffleArray(digicamPhotos);
  const fullList = [...shuffledList, ...shuffledList];

  fullList.forEach((filename) => {
    const img = document.createElement("img");
    img.src = `assets/images/${filename}`;
    img.alt = "Digicam Photograph";
    img.className = "digicam-img";

    img.addEventListener("click", () => {
      const angles = [-12, -8, -5, 5, 8, 12];
      const randomAngle = angles[Math.floor(Math.random() * angles.length)];
      const randomScale = 1.05 + Math.random() * 0.08;

      img.style.transform = `rotate(${randomAngle}deg) scale(${randomScale})`;

      setTimeout(() => {
        img.style.transform = "rotate(0deg) scale(1)";
      }, 1200);
    });

    track.appendChild(img);
  });
});
function renderCalendar() {
  const monthTitle = document.getElementById('calendar-month-title');
  const calendarGrid = document.getElementById('calendar-grid');
  
  if (!monthTitle || !calendarGrid) return;

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Set header text
  monthTitle.textContent = `${monthNames[currentMonth]} ${currentYear}`;

  // Clear existing cells
  calendarGrid.innerHTML = '';

  // Render Day Headers
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysOfWeek.forEach((day, index) => {
    const headerEl = document.createElement('span');
    headerEl.className = `day-header ${index === 0 || index === 6 ? 'weekend' : ''}`;
    headerEl.textContent = day;
    calendarGrid.appendChild(headerEl);
  });

  // Calculate day offsets
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Add empty leading spaces
  for (let i = 0; i < firstDayIndex; i++) {
    const emptyCell = document.createElement('span');
    emptyCell.className = 'day empty';
    calendarGrid.appendChild(emptyCell);
  }

  // Populate actual month days
  for (let dayNum = 1; dayNum <= totalDays; dayNum++) {
    const dayCell = document.createElement('span');
    dayCell.className = 'day';
    dayCell.textContent = dayNum;

    // Highlight active date automatically
    if (dayNum === currentDate) {
      dayCell.classList.add('active-day');
    }

    calendarGrid.appendChild(dayCell);
  }
}

// Run calendar builder when DOM content loads
document.addEventListener('DOMContentLoaded', renderCalendar);

/* ==========================================
   KITTY CORNER PET COUNTER & LOVE METER JS
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
  let petCount = 0;
  const countDisplay = document.getElementById("pet-count");
  const meterFill = document.getElementById("love-meter-fill");
  const catStickers = document.querySelectorAll(".cat-sticker");

  catStickers.forEach((cat) => {
    cat.addEventListener("click", (e) => {
      petCount++;
      if (countDisplay) countDisplay.textContent = petCount;

      // Fill love meter (maxes out at 20 pets)
      const fillPercentage = Math.min((petCount / 20) * 100, 100);
      if (meterFill) meterFill.style.height = `${fillPercentage}%`;

      // Floating heart particle animation on click
      createFloatingHeart(e.clientX, e.clientY);
    });
  });

  function createFloatingHeart(x, y) {
    const heart = document.createElement("span");
    heart.textContent = "💖";
    heart.style.position = "fixed";
    heart.style.left = `${x - 10}px`;
    heart.style.top = `${y - 10}px`;
    heart.style.fontSize = "1.2rem";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.transition = "transform 0.8s ease-out, opacity 0.8s ease-out";
    
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.style.transform = `translateY(-35px) scale(1.3)`;
      heart.style.opacity = "0";
    }, 20);

    setTimeout(() => heart.remove(), 850);
  }
});
/* ==========================================
   FORTUNE COOKIE JAR JS INTERACTION
   ========================================== */

const fortunes = [
  "🥠 Great inspiration awaits you today!",
  "✨ A lucky artistic moment is coming!",
  "🌸 Rest well and stay soft.",
  "🎀 Small steps lead to big dreams!",
  "⭐ Your creativity is glowing!",
  "🎧 Good tunes and sweet vibes today!"
];

function getCookieFortune(event) {
  const fortuneText = document.getElementById("fortune-text");
  if (!fortuneText) return;

  // Pick a random fortune
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  fortuneText.textContent = fortunes[randomIndex];

  // Show fortune bubble
  fortuneText.classList.add("show");

  // Spawn floating cookie sticker
  createFloatingCookie(event.clientX, event.clientY);

  // Hide message after 3.5 seconds
  setTimeout(() => {
    fortuneText.classList.remove("show");
  }, 3500);
}

function createFloatingCookie(x, y) {
  const cookie = document.createElement("img");
  cookie.src = "assets/images/cookie-sticker.png"; // Your cookie PNG!
  cookie.style.position = "fixed";
  cookie.style.left = `${x - 15}px`;
  cookie.style.top = `${y - 15}px`;
  cookie.style.width = "30px";
  cookie.style.height = "auto";
  cookie.style.pointerEvents = "none";
  cookie.style.zIndex = "9999";
  cookie.style.transition = "transform 0.8s ease-out, opacity 0.8s ease-out";
  
  document.body.appendChild(cookie);

  setTimeout(() => {
    cookie.style.transform = `translateY(-45px) rotate(20deg) scale(1.2)`;
    cookie.style.opacity = "0";
  }, 20);

  setTimeout(() => cookie.remove(), 850);
}
/* ==========================================
   Y2K MAGAZINE TITLE RANDOM TILT EFFECT
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
  const magLetters = document.querySelectorAll(".mag-letter");

  magLetters.forEach((letter) => {
    letter.addEventListener("click", () => {
      const randomAngle = (Math.random() * 20 - 10).toFixed(1);
      letter.style.transform = `scale(1.2) rotate(${randomAngle}deg)`;
      setTimeout(() => {
        letter.style.transform = "";
      }, 400);
    });
  });
});
/* ==========================================
   Y2K AVATAR CYCLER (NO BACK-TO-BACK ROBLOX)
   ========================================== */

// Explicitly ordered list: 1st monica-monica, 2nd duolingo, then non-repeating mix
const avatarList = [
  { src: "assets/images/monica-monica.jpg", label: "✦ real me ✦" },
  { src: "assets/images/duolingo-monica.png", label: "✦ duolingo ✦" },
  { src: "assets/images/ponytown-monica.png", label: "✦ ponytown ✦" },
  { src: "assets/images/roblox-main-monica.jpg", label: "✦ roblox main ✦" },
  { src: "assets/images/vintage-monica.png", label: "✦ vintage ✦" },
  { src: "assets/images/roblox-gredl-monica.png", label: "✦ roblox gredl ✦" },
  { src: "assets/images/hyperpigmentation-monica.jpg", label: "✦ polaroid ✦" },
  { src: "assets/images/roblox-keyli-monica.png", label: "✦ roblox keyli ✦" },
  { src: "assets/images/P1080090.JPG", label: "✦ lumix photo ✦" },
  { src: "assets/images/roblox-monica-monica.png", label: "✦ roblox monica ✦" },
  { src: "assets/images/P1080359.JPG", label: "✦ lumix memory ✦" }
];

let currentAvatarIndex = 0;

function cycleY2KAvatar() {
  const avatarImg = document.getElementById("y2k-avatar-img");
  const avatarLabel = document.getElementById("avatar-label-tag");
  if (!avatarImg) return;

  // Next index
  currentAvatarIndex = (currentAvatarIndex + 1) % avatarList.length;
  const current = avatarList[currentAvatarIndex];

  // Smooth bounce animation
  avatarImg.style.transform = "scale(0.8) rotate(10deg)";
  avatarImg.style.opacity = "0.4";

  setTimeout(() => {
    avatarImg.src = current.src;
    if (avatarLabel) avatarLabel.textContent = current.label;
    avatarImg.style.transform = "scale(1) rotate(0deg)";
    avatarImg.style.opacity = "1";
  }, 150);
}
/* ==========================================
   RETRO TV CHANNEL SWITCHER WITH CRT FLICKER
   ========================================== */

const tvChannels = [
  "assets/images/un_poeta.jpg",
  "assets/images/un_poeta1.jpg",
  "assets/images/un_poeta2.jpg",
  "assets/images/un_poeta3.jpg",
  "assets/images/un_poeta4.jpg",
  "assets/images/un_poeta5.jpg",
  "assets/images/un_poeta6.jpg",
  "assets/images/un_poeta7.jpg",
  "assets/images/un_poeta8.jpg",
  "assets/images/un_poeta9.jpg"
];

let currentChannelIndex = 0;

function nextTvChannel() {
  const tvDisplay = document.getElementById("tv-photo-display");
  if (!tvDisplay) return;

  // Trigger CRT Flicker
  tvDisplay.classList.add("crt-flicker");

  setTimeout(() => {
    currentChannelIndex = (currentChannelIndex + 1) % tvChannels.length;
    tvDisplay.src = tvChannels[currentChannelIndex];
  }, 100);

  setTimeout(() => {
    tvDisplay.classList.remove("crt-flicker");
  }, 220);
}
