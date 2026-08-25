// 10-Photo Swapper Loop
let currentPhotoIndex = 1;
const totalPhotos = 10;

function swapPhoto() {
  const photo = document.getElementById('interactive-photo');
  
  // Advance to the next photo, or loop back to 1 after reaching 10
  currentPhotoIndex = (currentPhotoIndex % totalPhotos) + 1;
  
  // Update photo source dynamically
  photo.src = `assets/images/photo${currentPhotoIndex}.jpg`;
}
// Digicam Photo Array
const digicamPhotos = [
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
  "P1080451.JPG", "P1080459.JPG", "P1080463.JPG", "P1080480.JPG", "P1080483.JPG"
];

// Shuffle array randomly
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Build Vertical Infinite Scroll Track
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("cam-gallery-track");
  if (!track) return;

  const shuffledList = shuffleArray(digicamPhotos);
  
  // Duplicate list to create continuous infinite loop
  const fullList = [...shuffledList, ...shuffledList];

  fullList.forEach((filename) => {
    const img = document.createElement("img");
    img.src = `assets/images/${filename}`;
    img.alt = "Digicam Photograph";
    img.className = "digicam-img";

    // Interactive Random Tilt & Bounce Effect on Click
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
