// Author: Shelagh Storla
// Date: 19 October 2018
// Course: CPNT 262
// FINAL PROJECT 

// Full Date in Footer
let getCurrentDate = (() => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dateDisplay = document.getElementById("current-date");
    let currentDate = new Date();
    dateDisplay.innerHTML = `${months[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
})();

// Mobile Nav Bar
let mobileNav = (() => {
const button = document.querySelector('#nav-btn-open');
const close = document.querySelector('#nav-btn-close');
const menu = document.querySelector('#menu');

let openMenu = () => {
  menu.className = 'mobile-nav-links';
  menu.setAttribute('aria-expanded', 'true');
};

let closeMenu = () => {
  menu.className = 'mobile-nav-links closed';
  menu.setAttribute('aria-expanded', 'false');
}

button.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);

})();

//Subsribe
let subscribe = () => {
  const mailerBtn = document.getElementById("mailer-submit");
  const mailer = document.querySelector(".mailer");
  const thanks = document.querySelector(".thank-you")

  mailerBtn.addEventListener("click", (event) => {
      let mailerEmail = document.getElementById("mailer-email").value;

      console.log(mailerEmail);
  
      if (mailerEmail) {
          event.preventDefault();   
          mailer.style.display = "none";
          thanks.style.display = "block";
      }

  });
};

//Team
let getTeam = () => {
const agents = ["Linda White", "Gabriella Otalie", "Denver Grupe", "Oskar Vichytova", "Julia Francenbaum"];
const phoneNum = ["555-555-4545", "555-555-1212", "555-555-2323", "555-555-8787", "555-555-6565"];

let teamList = document.getElementById("team-list");

for (var i = 0; i < agents.length; i++) {
  for (var j = 0; i < phoneNum.length; i++) {
    let agentListing = document.createElement("li");
    agentListing.innerHTML = `${agents[i]} - ${phoneNum[i]}`;
    teamList.appendChild(agentListing);
  }
}
};

//MouseOver Images
let imageChange = () => {
let nycPkg = document.getElementById("nyc-pkg");
let romePkg = document.getElementById("rome-pkg");
let shanghaiPkg = document.getElementById("shanghai-pkg");
let sydneyPkg = document.getElementById("sydney-pkg");
let venicePkg = document.getElementById("venice-pkg");

nycPkg.addEventListener("mouseover", () => {
  nycPkg.classList.remove("default-image");
  nycPkg.classList.add("nyc")
})
nycPkg.addEventListener("mouseout", () => {
  nycPkg.classList.remove("nyc");
  nycPkg.classList.add("default-image")
})

romePkg.addEventListener("mouseover", () => {
  romePkg.classList.remove("default-image");
  romePkg.classList.add("rome")
})
romePkg.addEventListener("mouseout", () => {
  romePkg.classList.remove("rome");
  romePkg.classList.add("default-image")
})

shanghaiPkg.addEventListener("mouseover", () => {
  shanghaiPkg.classList.remove("default-image");
  shanghaiPkg.classList.add("shanghai")
})
shanghaiPkg.addEventListener("mouseout", () => {
  shanghaiPkg.classList.remove("shanghai");
  shanghaiPkg.classList.add("default-image")
})

sydneyPkg.addEventListener("mouseover", () => {
  sydneyPkg.classList.remove("default-image");
  sydneyPkg.classList.add("sydney")
})
sydneyPkg.addEventListener("mouseout", () => {
  sydneyPkg.classList.remove("sydney");
  sydneyPkg.classList.add("default-image")
})

venicePkg.addEventListener("mouseover", () => {
  venicePkg.classList.remove("default-image");
  venicePkg.classList.add("venice")
})
venicePkg.addEventListener("mouseout", () => {
  venicePkg.classList.remove("venice");
  venicePkg.classList.add("default-image")
})

}

//Airplane
let airplaneFly = () => {
let direction = 0;

let airplane = () => {
    var img = document.getElementById('airplane');
    var currentLeft = parseInt(img.style.left);

    if (currentLeft > (window.innerWidth - img.width)) {
        direction = 0;
        img.style.transform = "scaleX(-1)";
    }

    if (currentLeft <= 0) {
        direction = 1;
        img.style.transform = "scaleX(1)";
    }
    
    if (direction) {
        img.style.left = (currentLeft + 10) + "px";
    } else {
        img.style.left = (currentLeft - 10) + "px";
    }
}
setInterval(airplane, 25);
}