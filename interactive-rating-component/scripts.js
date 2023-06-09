const button = document.getElementsByClassName('button')[0]
const card = document.getElementsByClassName('card')[0]
const submit_card = document.getElementsByClassName('submit-card')[0]
const scores = document.querySelectorAll('.score')
let doc_score = document.getElementById('_score')
let selected_score = 0;

// Add a click event listener to each score
scores.forEach((score, index) => {
    score.addEventListener('click', () => {
        selected_score = index + 1; // Update the selected score value
        // Reset style for all scores
        scores.forEach(score => score.style.backgroundColor = '');
        score.style.backgroundColor = 'var(--clr-light-grey)'
        score.style.color = 'var(--clr-white)'
    });
});

// Add a click event listener to the submit button
button.addEventListener('click', () => {
    console.log(selected_score)
    if (selected_score !== 0) {
        card.classList.toggle('hidden')
        submit_card.classList.toggle('hidden')
        doc_score.innerText = selected_score
    }else {
        alert('Please select a score')
    }
})
