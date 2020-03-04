"use strict";
var modal_feedback = document.querySelector(".modal-feedback");
var modal_close = document.querySelector(".modal-close");

var feedback_form = document.querySelector(".feedback-form");
var feedback_button = document.querySelector(".feedback-button");
var feedback_field_name = document.querySelector(".feedback-field-name");
var feedback_field_email = document.querySelector(".feedback-field-email");
var feedback_field_message = document.querySelector(".feedback-field-message");

var popup_login = document.querySelector(".popup-login"); 
var form_login = document.querySelector(".login-form");
var field_login = document.querySelector(".login-field-email");
var field_password = document.querySelector(".login-field-password");

var newsletter_block = document.querySelector(".newsletter");
var newsletter_form = document.querySelector(".newsletter-form");
var newsletter_field = document.querySelector(".newsletter-field");

var fix_ie_use_strict = 1;

var storage = "";
var is_storage_support = true;
try {
    storage = localStorage.getItem("field_login"); 
} catch (error) {
    is_storage_support = false;
}

if(modal_feedback) {
    feedback_form.addEventListener("submit", function(evt) {
        if(!feedback_field_email.value || !feedback_field_message.value) {
            if(!feedback_field_email.value) {
                feedback_field_email.classList.add("field-error");
            }  else {
                feedback_field_email.classList.remove("field-error");
            }
            if(!feedback_field_message.value) {
                feedback_field_message.classList.add("field-error");
            } else {
                feedback_field_message.classList.remove("field-error");
            }
            evt.preventDefault();
            modal_feedback.classList.remove("modal-error");
            modal_feedback.width = modal_feedback.offsetWidth;
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
        modal_feedback.classList.add("modal-show");
    
        if(storage) {
            feedback_field_name.value = storage;
            feedback_field_email.focus();
        } else {
            feedback_field_name.focus();
        }
    });

    modal_close.addEventListener("click", function(evt) {
        evt.preventDefault();
        modal_feedback.classList.remove("modal-show");
        modal_feedback.classList.remove("modal-error");
    });

    window.addEventListener("keydown", function(evt) {
        if(evt.keyCode === 27) {
            if(modal_feedback.classList.contains("modal-show")) {
                evt.preventDefault();
                modal_feedback.classList.remove("modal-show");
                modal_feedback.classList.remove("modal-error");
            }
        }
    });
}

if(popup_login) {
    form_login.addEventListener("submit", function(evt) {
        if(!field_login.value || !field_password.value) {
            if(!field_login.value) {
                field_login.classList.add("field-error");
            } else {
                field_login.classList.remove("field-error");
            }
            if(!field_password.value) {
                field_password.classList.add("field-error");
            } else {
                field_password.classList.remove("field-error");
            }
            evt.preventDefault();
            popup_login.classList.remove("modal-error");
            popup_login.width = popup_login.offsetWidth;
            popup_login.classList.add("modal-error");
        }
    });
}

if(newsletter_block) {
    newsletter_form.addEventListener("submit", function(evt) {
        if(!newsletter_field.value) {
            if(!newsletter_field.value) {
                newsletter_field.classList.add("field-error");
            } else {
                newsletter_field.classList.remove("field-error");
            }
            evt.preventDefault();
            newsletter_block.classList.remove("modal-error");
            newsletter_block.width = newsletter_block.offsetWidth;
            newsletter_block.classList.add("modal-error");
        } else {
            if(is_storage_support) {
                localStorage.setItem("field_login", field_login.value);
            }
        }
    });
}

/* PRODUCT CARD */
var cards = document.querySelectorAll('.card');
Array.prototype.forEach.call(cards, function (card) {
  var down,
      up,
      link = card.querySelector('h3 a');

  card.onmousedown = function () {
    return down = +new Date();
  };

  card.onmouseup = function () {
    up = +new Date();

    if (up - down < 200) {
      link.click();
    }
  };
});