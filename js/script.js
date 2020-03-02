var feedback_button = document.querySelector(".feedback-button");
var modal_feedback = document.querySelector(".modal-feedback");
var modal_close = document.querySelector(".modal-close");

feedback_button.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_feedback.style.display = "block";
});

modal_close.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_feedback.style.display = "none";
});

/* PRODUCT CARD */
const cards = document.querySelectorAll('.card');
Array.prototype.forEach.call(cards, card => {
    let down, up, link = card.querySelector('h3 a');
    card.onmousedown = () => down = +new Date();
    card.onmouseup = () => {
        up = +new Date();
        if ((up - down) < 200) {
            link.click();
        }
    }
});