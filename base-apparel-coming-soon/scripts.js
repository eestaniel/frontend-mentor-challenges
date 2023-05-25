const button = document.querySelector('.form__button');
const error = document.querySelector('.form__email-error');
const email = document.querySelector('.form__email');
button.addEventListener('click', (e) => {
    e.preventDefault()
    //check if email is valid
    if (!email.validity.valid) {
        error.classList.remove('hidden')
        email.classList.add('email-border-error')
    }
    else {
        error.classList.add('hidden')
        email.classList.remove('email-border-error')
    }
})