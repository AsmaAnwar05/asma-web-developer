const githubbutton=document.getElementById("githubbtn")
githubbutton.addEventListener('click', function() {
        window.open("https://github.com/AsmaAnwar05", "_blank");
    });

let tablinks=document.getElementsByClassName("tab-links");
let tabcontents =document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink1 of tablinks){
        tablink1.classList.remove("active-link");
    }
    for(tabcontent1 of tabcontents){
        tabcontent1.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
/*------------------------------service card extra see more------------------------*/

const seeMoreBtn = document.getElementById('seeMoreBtn');
const extraServices = document.querySelectorAll('.service-card-extra');

seeMoreBtn.addEventListener('click', () => {
  const isHidden = getComputedStyle(extraServices[0]).display === 'none';

  if (isHidden) {
    // Show extra services
    extraServices.forEach(service => service.style.display = 'block');
    seeMoreBtn.textContent = 'See Less';
  } else {
    // Hide extra services
    extraServices.forEach(service => service.style.display = 'none');
    seeMoreBtn.textContent = 'See More';
  }
});


/*------------------------------work button------------------------*/


const workbtn=document.getElementById('wrkbtn');
const hiddenwrk=document.querySelectorAll('.hidden-work');
workbtn.addEventListener('click', () => {
  const isHidden = getComputedStyle(hiddenwrk[0]).display === 'none';

   if (isHidden) {
    // Show extra works
    hiddenwrk.forEach(item => item.style.display = 'block');
    workbtn.textContent = 'See Less';
  } else {
    // Hide extra works
    hiddenwrk.forEach(item => item.style.display = 'none');
    workbtn.textContent = 'See More';
  }
});


//-------------------------------------form----------------------------------------------------------

  const contactForm = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_portfolio", "template_036bvgk", this)
      .then(function () {
        console.log("Email sent successfully!");
        successMsg.style.display = "block";
        contactForm.reset();
      }, function (error) {
        console.error("Email sending failed:", error);
      });
  });