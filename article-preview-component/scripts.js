const share_button = document.querySelector(".article__share-circle");
const share_icon = document.querySelector(".article__share-icon-color");
const share_box = document.querySelector(".share__flex_group");
const square = document.querySelector(".square");

let desktop = window.matchMedia("(min-width: 500px)");


function handleShareButton() {
    share_box.classList.toggle("hidden");
    square.classList.toggle("hidden");
    share_icon.classList.toggle("toggle");
    share_button.classList.toggle("toggle");


    if (!desktop.matches) {
        share_button.classList.toggle("share__toggle");

    }
}


share_button.addEventListener("click", () => {
    handleShareButton();
});
