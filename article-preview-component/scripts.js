const share_button = document.querySelector(".article__share-circle");
const share_icon = document.querySelector(".article__share-icon-color");
const share_box = document.querySelector(".share__flex_group");
const square = document.querySelector(".square");



function handleShareButton() {
    share_box.classList.toggle("hidden");
    square.classList.toggle("hidden");
    share_button.classList.toggle("toggle");
    share_icon.classList.toggle("toggle");

}


share_button.addEventListener("click", () => {
    handleShareButton();
});
