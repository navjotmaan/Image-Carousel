const images = [
    {
        src: './images/andy-ramos-kr9HOdBFjuk-unsplash.jpg',
        credit: 'Photo by <a href="https://unsplash.com/@origamiguy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Andy Ramos</a> on <a href="https://unsplash.com/photos/silhouette-of-trees-near-body-of-water-during-sunset-kr9HOdBFjuk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
    },
    {
        src: './images/joel-holland-TRhGEGdw-YY-unsplash.jpg',
        credit: 'Photo by <a href="https://unsplash.com/@joelholland?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Joel Holland</a> on <a href="https://unsplash.com/photos/aerial-photography-of-flowers-at-daytime-TRhGEGdw-YY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
    },
    {
        src: './images/peter-muscutt-pkg77ZtBCmg-unsplash.jpg',
        credit: 'Photo by <a href="https://unsplash.com/@peterm4988372?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Peter Muscutt</a> on <a href="https://unsplash.com/photos/green-grass-field-with-trees-during-daytime-pkg77ZtBCmg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
    },
    {
        src: './images/stenedit-kVsgWVPyo8E-unsplash.jpg',
        credit: 'Photo by <a href="https://unsplash.com/@stenedit?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">stenedit</a> on <a href="https://unsplash.com/photos/a-river-with-rocks-and-trees-kVsgWVPyo8E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
    },
    {
        src: 'images/seb-zurcher-h04c2IAyXp8-unsplash.jpg',
        credit: 'Photo by <a href="https://unsplash.com/@seb_zr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Seb Zurcher</a> on <a href="https://unsplash.com/photos/white-flowers-on-green-grass-field-near-lake-and-mountains-under-blue-sky-and-white-clouds-h04c2IAyXp8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
    },
    {
        src: 'images/evan-clark-dZJyCgSO7n8-unsplash.jpg',
        credit: 'Photo by <a href="https://unsplash.com/@iamevanclark?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Evan Clark</a> on <a href="https://unsplash.com/photos/a-wooden-walkway-leading-to-a-body-of-water-dZJyCgSO7n8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
    },
    {
        src: 'images/damiano-baschiera-d4feocYfzAM-unsplash.jpg',
        credit: 'Photo by <a href="https://unsplash.com/@damiano_baschiera?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Damiano Baschiera</a> on <a href="https://unsplash.com/photos/bed-of-orange-flowers-d4feocYfzAM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
    },
    {
        src: 'images/casey-horner-4rDCa5hBlCs-unsplash.jpg',
        credit: 'Photo by <a href="https://unsplash.com/@mischievous_penguins?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Casey Horner</a> on <a href="https://unsplash.com/photos/low-angle-photography-of-trees-at-daytime-4rDCa5hBlCs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
    }
];

let currentIndex = 0;


const pic = document.querySelector('#image-cover');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const credits= document.querySelector('#credit');
const dots = document.querySelectorAll('.dot');
const slider = document.querySelector('.img-slide');

next.addEventListener('click', () => {
    nextPic();
    resetTimer();
});

prev.addEventListener('click', () => {
    prevPic();
    resetTimer();
});

function nextPic() {
    currentIndex++;
    if (currentIndex >= images.length) currentIndex = 0;
    loadPic(currentIndex);
}

function prevPic() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = images.length - 1;
    loadPic(currentIndex);
}

function loadPic(index) {
    pic.src = images[index].src;
    credits.innerHTML = images[index].credit;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        loadPic(i);
        currentIndex = i;
        resetTimer();
    });
});

let slideTimer = setInterval(nextPic, 5000);

function resetTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(nextPic, 5000);
}

slider.addEventListener('mouseenter', () => clearInterval(slideTimer));
slider.addEventListener('mouseleave', resetTimer);

loadPic(currentIndex);