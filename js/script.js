var modal_feedback = document.querySelector(".modal-feedback");
var modal_close = document.querySelector(".modal-close");

var feedback_form = modal_feedback.querySelector(".feedback-form");
var feedback_button = document.querySelector(".feedback-button");
var feedback_field_name = feedback_form.querySelector(".feedback-field-name");
var feedback_field_email = feedback_form.querySelector(".feedback-field-email");
var feedback_fiels_message = feedback_form.querySelector(".feedback-field-message");

var popup_login = document.querySelector(".popup-login"); 
var form_login = popup_login.querySelector(".login-form");
var field_login = form_login.querySelector(".login-field-email");
var field_password = form_login.querySelector(".login-field-password");

var newsletter_block = document.querySelector(".newsletter");
var newsletter_form = document.querySelector(".newsletter-form");
var newsletter_field = document.querySelector(".newsletter-field");

var storage = "";
var is_storage_support = true;
try {
    storage = localStorage.getItem("field_login"); 
} catch (error) {
    is_storage_support = false;
}

feedback_form.addEventListener("submit", function(evt) {
    if(!feedback_field_email.value || !feedback_fiels_message.value) {
        evt.preventDefault();
        modal_feedback.classList.add("modal-error");
    } else {
        if(is_storage_support) {
            localStorage.setItem("feedback_field_name", feedback_field_name.value);
            localStorage.setItem("feedback_field_email", feedback_field_email.value);
        }
    }
});

feedback_button.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_feedback.style.display  = "block";

    if(storage) {
        feedback_field_name.value = storage;
        feedback_field_email.focus();
    } else {
        feedback_field_name.focus();
    }
});

modal_close.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_feedback.style.visibility  = "hidden";
    modal_feedback.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
    if(evt.keyCode === 27) {
        if(modal_feedback.style.visibility  = "visible") {
            evt.preventDefault();
            modal_feedback.style.visibility  = "hidden";
            modal_feedback.classList.remove("modal-error");
        }
    }
})


form_login.addEventListener("submit", function(evt) {
    if(!field_login.value || !field_password.value) {
        evt.preventDefault();
        popup_login.classList.remove("modal-error");
        popup_login.offsetWidth = popup_login.offsetWidth;
        popup_login.classList.add("modal-error");
    } else {
        if(is_storage_support) {
            localStorage.setItem("field_login", field_login.value);
        }
    }
});

newsletter_form.addEventListener("submit", function(evt) {
    if(!newsletter_field.value) {
        evt.preventDefault();
        newsletter_block.classList.remove("modal-error");
        newsletter_block.offsetWidth = popup_login.offsetWidth;
        newsletter_block.classList.add("modal-error");
    } else {
        if(is_storage_support) {
            localStorage.setItem("field_login", field_login.value);
        }
    }
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