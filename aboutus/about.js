const stars = document.querySelectorAll('.stars span');
const ratingResult = document.getElementById('rating-result');
let selectedRating = 0;

// Add click event to stars
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach((star) => star.classList.remove('selected'));
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('selected');
        }
        selectedRating = index + 1;
    });
});

// Submit rating
document.getElementById('submit-rating').addEventListener('click', () => {
    if (selectedRating > 0) {
        ratingResult.textContent = `You rated this app ${selectedRating} out of 5 stars.`;
    } else {
        ratingResult.textContent = 'Please select a star rating.';
    }
});
