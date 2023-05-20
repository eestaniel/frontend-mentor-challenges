const button = document.getElementsByClassName('button')[0]
const card = document.getElementsByClassName('card')[0]
const submit_card = document.getElementsByClassName('submit-card')[0]
const scores = document.querySelectorAll('.score')

let did_submit = false;
let selected_score = 0;

// Add a click event listener to each score
scores.forEach((score, index) => {
    score.addEventListener('click', () => {
        selected_score = index + 1; // Update the selected score value
        console.log('Selected Score:', selected_score); // Log the selected score
    });
});

// Add a click event listener to the submit button
button.addEventListener('click', () => {
    console.log(selected_score)
    if (selected_score !== 0) {
        card.classList.toggle('hidden')
        submit_card.classList.toggle('hidden')
    }
})
