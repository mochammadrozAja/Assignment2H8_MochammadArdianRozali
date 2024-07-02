function updateProfile() {
  let input_name=document.querySelector("#input_name");
  let input_role=document.querySelector("#input_role");
  let input_availability=document.querySelector("#input_availability");
  let input_age=document.querySelector("#input_age");
  let input_location=document.querySelector("#input_location");
  let input_experience=document.querySelector("#input_experience");
  let input_email=document.querySelector("#input_email");
  
  let output_name=document.querySelector("#output_name");
  let output_role=document.querySelector("#output_role");
  let output_availability=document.querySelector("#output_availability");
  let output_age=document.querySelector("#output_age");
  let output_location=document.querySelector("#output_location");
  let output_experience=document.querySelector("#output_experience");
  let output_email=document.querySelector("#output_email");

  output_name.innerText=input_name.value;
  output_role.innerText=input_role.value;
  output_availability.innerText=input_availability.value;
  output_age.innerText=input_age.value;
  output_location.innerText=input_location.value;
  output_experience.innerText=input_experience.value;
  output_email.innerText=input_email.value;
  
  let form_el = document.querySelector("#viewForm");
  form_el.style.display = "none";
}

function view_form() {
  let form_el = document.querySelector("#viewForm");

  form_el.style.display = "block";
  let input_experience=document.querySelector("#input_experience");
  let input_email=document.querySelector("#input_email");
  console.log(output_email.value);
  console.log(input_email.value);
}