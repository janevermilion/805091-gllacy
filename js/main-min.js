var modalSearch=document.querySelector(".modal-search");var searchLink=document.querySelector(".search-hover");var loginLink=document.querySelector(".login-hover");var modalLogin=document.querySelector(".modal-login");var bucketLink=document.querySelector(".bucket-hover");var modalBucket=document.querySelector(".modal-bucket");var contactButton=document.querySelector(".contact-form-button");var modalFeedback=document.querySelector(".modal-feedback");var modalclose=document.querySelector(".modal-close");var email=document.querySelector(".user-email");var form=document.querySelector(".login-form");var feedbackForm=document.querySelector(".feedback-form");var feedname=feedbackForm.querySelector("[name=name]");var feedMail=feedbackForm.querySelector("[name=email]");var feedText=feedbackForm.querySelector("[name=feedback-text]");var password=document.querySelector(".user-password");var overlay=document.querySelector(".overlay");var isStorageSupport=true;var storage="";try{storage=localStorage.getItem("email")}catch(err){isStorageSupport=false}searchLink.addEventListener("click",function(a){a.preventDefault();modalSearch.classList.add("modal-show-search")});window.addEventListener("keydown",function(a){if(a.keyCode===27){a.preventDefault();if(modalSearch.classList.contains("modal-show-search")){modalSearch.classList.remove("modal-show-search");modalSearch.classList.remove("modal-error")}}});loginLink.addEventListener("click",function(a){a.preventDefault();modalLogin.classList.add("modal-show-login")});form.addEventListener("submit",function(a){if(!email.value||!password.value){a.preventDefault();form.classList.remove("modal-error");form.offsetWidth=form.offsetWidth;form.classList.add("modal-error");if(storage){email.value=storage;password.focus()}else{password.focus()}}else{if(isStorageSupport){localStorage.setItem("email",email.value)}}});window.addEventListener("keydown",function(a){if(a.keyCode===27){a.preventDefault();if(modalLogin.classList.contains("modal-show-login")){modalLogin.classList.remove("modal-show-login");modalLogin.classList.remove("modal-error")}}});bucketLink.addEventListener("click",function(a){a.preventDefault();modalBucket.classList.add("modal-show-bucket")});window.addEventListener("keydown",function(a){if(a.keyCode===27){a.preventDefault();if(modalBucket.classList.contains("modal-show-bucket")){modalBucket.classList.remove("modal-show-bucket");modalBucket.classList.remove("modal-show-bucket")}}});contactButton.addEventListener("click",function(a){a.preventDefault();modalFeedback.classList.add("modal-show-feedback");overlay.classList.add("overlay-show")});feedbackForm.addEventListener("submit",function(a){if(!feedname.value||!feedMail.value||!feedText.value){a.preventDefault();feedbackForm.classList.remove("modal-error");feedbackForm.offsetWidth=form.offsetWidth;feedbackForm.classList.add("modal-error")}});modalclose.addEventListener("click",function(a){a.preventDefault();modalFeedback.classList.remove("modal-show-feedback");overlay.classList.remove("overlay-show")});