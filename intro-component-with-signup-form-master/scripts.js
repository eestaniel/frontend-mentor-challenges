document.addEventListener("DOMContentLoaded", function(){
    // get the button and input elements
    const button = document.querySelector(".button");
    const firstNameInput = document.querySelector("#first-name");
    const lastNameInput = document.querySelector("#last-name");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");

    const inputs = [firstNameInput, lastNameInput, emailInput, passwordInput];

    button.addEventListener("click", function(event){
        // prevent the form from submitting
        event.preventDefault();

        // check all inputs
        for(let input of inputs){
            // get the parent element
            const parent = input.parentElement;

            // check if input is empty or email is not valid
            if(input.value === "" || (input === emailInput && !validateEmail(input.value))){
                // add error text and icon if not already added
                if(!parent.querySelector(".form__error-text")){
                    // create and append error text
                    const errorText = document.createElement("div");
                    errorText.classList.add("form__error-text");
                    if(input.value === ""){
                        errorText.innerText = input.placeholder + " cannot be empty!";
                    } else if(input === emailInput){
                        errorText.innerText = "Looks likes this is an invalid email.";
                    }
                    parent.appendChild(errorText);

                    // create and append error icon
                    const errorIcon = document.createElement("div");
                    errorIcon.classList.add("form__error-icon");
                    parent.appendChild(errorIcon);
                }

                // Apply the 'input-invalid' class.
                input.classList.remove('input-valid');
                input.classList.add('input-invalid');
            } else {
                // remove error text and icon if they exist
                const errorText = parent.querySelector(".form__error-text");
                const errorIcon = parent.querySelector(".form__error-icon");

                if(errorText){
                    parent.removeChild(errorText);
                }
                if(errorIcon){
                    parent.removeChild(errorIcon);
                }

                // Apply the 'input-valid' class.
                input.classList.remove('input-invalid');
                input.classList.add('input-valid');
            }
        }
    });

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
