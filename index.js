//navbar effects
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li ");
let isActive = false;

burger.addEventListener("click", function () {
  isActive = true;
  this.classList.toggle("rotate");
  nav.classList.toggle("active");
  menu.classList.toggle("active");
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = "navAnimation  1s forwards " + index / 15 + "s";
    }
  });
});

var mainLinks = document.querySelectorAll(".menu li a");
mainLinks.forEach((mainLink) => {
  mainLink.addEventListener("click", function () {
    burger.classList.toggle("rotate");
    nav.classList.toggle("active");
    menu.classList.toggle("active");
    links.forEach((link) => {
      link.style.animation = "";
    });
  });
});
//project pop up
const projectsArray = [
  {
    name: "Cold Chain",
    image: "./assets/projects-screens/cold-chain.png",
    description:
      "This project is a cross platform mobile application that was developed during my tow months internship at OPENSNZ TECHNOLOGY agency, this application helps  the technicians to get up to speed with the temperature of some assets in different agencies. ",
    implementation:
      "This project was built using React Native, Redux to handel the state of the application and axios to consume a REST API.",
    githubLink: "",
  },
  {
    name: "Product Hunt",
    image: "./assets/projects-screens/product-hunt.png",
    description:
      "This project is a simple version of Product Hunt web site which is a space when users can get to find the most innovate project with the ability to upvote for the project if it gets their attention.",
    implementation:
      "This project was built using React with Javascript, Tailwind CSS for styling, Context API for sharing data between components and Firebase to get the list of products and also to implement Google Authentication.",
    githubLink: "",
  },
  {
    name: "Take Notes",
    image: "./assets/projects-screens/take-notes.png",
    description:
      "This project is a cross platform mobile application for taking notes, but in a more organized way which means that the user can create folders for a each specific type of notes.",
    implementation:
      "This project was built using React Native, Context API for sharing data between components and SQLite for data storage.",
    githubLink: "",
  },
  {
    name: "Car Driving Game",
    image: "./assets/projects-screens/car-game.png",
    description:
      "This project just like its name indicates is a simple car driving game, in which the user should avoid the collision with the other cars in the road, this last has the ability to control the car's speed also to stop or continue the game.",
    implementation:
      "This project was built using pure HTML, CSS and JavaScript. Most important elements used are : Infinite loop using requestAnimationFrame to move cars, checking collisions using getBoundingClientRect of each element. ",
    githubLink: "",
  },
  {
    name: "Music Player",
    image: "../assets/projects-screens/media.png",
    description:
      "This project is a simple offline Music player that allows one to enjoy music in any browser.",
    implementation:
      "This project was built using pure HTML, CSS and JavaScript. It uses audio HTML element from the HTMLMediaElement interface to play the audio files and JavaScript features for playing and stopping the music as well as the possibility of controlling the progress bar.",
    githubLink: "",
  },
];
const projects = document.querySelectorAll(".project");
const projectPopUp = document.querySelector(".project-pop-up");
const projectName = projectPopUp.querySelector(".project-pop-up h3");
const projectDescription = projectPopUp.querySelector(
  ".project-pop-up .description"
);
const projectImage = projectPopUp.querySelector(".project-screens .image img");
const projectImplementation = projectPopUp.querySelector(
  ".project-pop-up .implementation"
);
const cancel = document.querySelector(".cancel");

projects.forEach((project, index) => {
  project.addEventListener("click", () => {
    // projectImage.style.backgroundImage = `url('${projectsArray[index].image}')`;
    projectImage.src = `${projectsArray[index].image}`;
    projectName.textContent = projectsArray[index].name;
    projectDescription.textContent = projectsArray[index].description;
    projectImplementation.textContent = projectsArray[index].implementation;
    projectPopUp.style.display = "flex";
  });
});
cancel.addEventListener("click", () => {
  projectPopUp.style.display = "none";
});
//setting the date of creation
let date = document.querySelector(".creation-date");
date.textContent = new Date().getFullYear();
//////////////////////////////////////////////////////////////////////
/*---------------------------animations section----------------------*/
//////////////////////////////////////////////////////////////////////
/*----------------------------home----------------------------------*/
const myName = document.querySelector("#home h1");
const nameTextContent = myName.textContent;
const splitText = nameTextContent.split("");
myName.textContent = "";

for (let index = 0; index < splitText.length; index++) {
  myName.innerHTML += "<span>" + splitText[index] + "</span>";
}
let char = 0;
let timer = setInterval(() => {
  var span = myName.querySelectorAll("span")[char];
  span.style.opacity = 1;
  char++;
  if (char === splitText.length) {
    clearInterval(timer);
    return;
  }
}, 50);
//////////////////////////////////////////////////////////////////////
/*--------------------defining some impacting points--------------------*/
const firstImpactingPoint = 1190;
const secondImpactingPoint = 900;
//////////////////////////////////////////////////////////////////////
/*----------------------------titles----------------------------------*/
const titles = document.querySelectorAll(".section-title");
let isFirstColored = false;
window.addEventListener("scroll", () => {
  if (this.scrollY > 280) {
    titles[0].style.animation = "fade-in-top 1s ease forwards";
  }
  if (this.innerWidth > firstImpactingPoint) {
    if (this.scrollY > 1400) {
      titles[1].style.animation = "fade-in-top 1s ease forwards";
    }
    if (this.scrollY > 2000) {
      titles[2].style.animation = "fade-in-top 1s ease forwards";
    }
    if (this.scrollY > 2570) {
      titles[3].style.animation = "fade-in-top 1s ease forwards";
    }
    if (this.scrollY > 3430) {
      titles[4].style.animation = "fade-in-top 1s ease forwards";
    }
  } else if (this.innerWidth >= secondImpactingPoint) {
    if (this.scrollY > 1630) {
      titles[1].style.animation = "fade-in-top 1s ease forwards";
    }
    if (this.scrollY > 2290) {
      titles[2].style.animation = "fade-in-top 1s ease forwards";
    }
    if (this.scrollY > 3080) {
      titles[3].style.animation = "fade-in-top 1s ease forwards";
    }
    if (this.scrollY > 4090) {
      titles[4].style.animation = "fade-in-top 1s ease forwards";
    }
  } else {
    if (this.scrollY > 2380) {
      titles[1].style.animation = "fade-in-top 1s ease forwards";
    }
    if (this.scrollY > 3380) {
      titles[2].style.animation = "fade-in-top 1s ease forwards";
    }
    if (this.scrollY > 4730) {
      titles[3].style.animation = "fade-in-top 1s ease forwards";
    }
    if (this.scrollY > 5790) {
      titles[4].style.animation = "fade-in-top 1s ease forwards";
    }
  }
});
//////////////////////////////////////////////////////////////////////
/*----------------------------work----------------------------------*/
const coldChain = document.querySelector(".cold");
const productHunt = document.querySelector(".hunt");
const takeNotes = document.querySelector(".notes");
const carGame = document.querySelector(".car");
const mediaPlayer = document.querySelector(".media");
//depends on the scroll event
window.addEventListener("scroll", () => {
  console.log(this.scrollY);
  if (this.innerWidth > firstImpactingPoint) {
    if (this.scrollY > 400) {
      coldChain.style.animation = "fade-in-left 1s forwards ease";
      productHunt.style.animation = "fade-in-top 1s forwards ease";
      takeNotes.style.animation = "fade-in-right 1s forwards ease";
    }
    if (this.scrollY > 800) {
      carGame.style.animation = "fade-in-left 1s forwards ease";
      mediaPlayer.style.animation = "fade-in-bottom 1s forwards ease";
    }
  } else if (this.innerWidth >= secondImpactingPoint) {
    if (this.scrollY > 430) {
      coldChain.style.animation = "fade-in-left 1s forwards ease";
      productHunt.style.animation = "fade-in-top 1s forwards ease";
    }
    if (this.scrollY > 800) {
      takeNotes.style.animation = "fade-in-bottom 1s forwards ease";
      carGame.style.animation = "fade-in-right 1s forwards ease";
    }
    if (this.scrollY > 1190) {
      mediaPlayer.style.animation = "fade-in-left 1s forwards ease";
    }
  } else {
    if (this.scrollY > 420) {
      coldChain.style.animation = "fade-in-left 1s forwards ease";
    }
    if (this.scrollY > 800) {
      productHunt.style.animation = "fade-in-right 1s forwards ease";
    }
    if (this.scrollY > 1180) {
      takeNotes.style.animation = "fade-in-left 1s forwards ease";
    }
    if (this.scrollY > 1560) {
      carGame.style.animation = "fade-in-right 1s forwards ease";
    }
    if (this.scrollY > 1950) {
      mediaPlayer.style.animation = "fade-in-left 1s forwards ease";
    }
  }
});
//////////////////////////////////////////////////////////////////////
/*----------------------------services----------------------------------*/
const web = document.querySelector(".web");
const mobile = document.querySelector(".mobile");
window.addEventListener("scroll", () => {
  if (this.innerWidth > firstImpactingPoint) {
    if (this.scrollY > 1490) {
      web.style.animation = "rotateLeft 1s forwards ease";
      mobile.style.animation = "rotateRight 1s forwards ease";
    }
  } else if (this.innerWidth >= secondImpactingPoint) {
    if (this.scrollY > 1890) {
      web.style.animation = "rotateLeft 1s forwards ease";
      mobile.style.animation = "rotateRight 1s forwards ease";
    }
  } else {
    if (this.scrollY > 2580) {
      web.style.animation = "rotateLeft 1s forwards ease";
    }
    if (this.scrollY > 2940) {
      mobile.style.animation = "rotateRight 1s forwards ease";
    }
  }
});
//////////////////////////////////////////////////////////////////////
/*----------------------------skills----------------------------------*/
const skills = document.querySelectorAll(".skill");
window.addEventListener("scroll", () => {
  if (this.innerWidth > firstImpactingPoint) {
    const scrollYRef = 2090;
    const difference = 185;
    if (this.innerWidth > 1260) {
      if (this.scrollY > scrollYRef) {
        for (let i = 0; i < 7; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
      if (this.scrollY > scrollYRef + difference) {
        for (let i = 7; i < skills.length; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
    } else {
      if (this.scrollY > scrollYRef) {
        for (let i = 0; i < 6; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
      if (this.scrollY > scrollYRef + difference) {
        for (let i = 6; i < skills.length; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
    }
  } else if (this.innerWidth >= secondImpactingPoint) {
    const scrollYRef = 2430;
    const difference = 185;
    if (this.innerWidth > 1080) {
      if (this.scrollY > scrollYRef) {
        for (let i = 0; i < 6; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
      if (this.scrollY > scrollYRef + difference) {
        for (let i = 6; i < skills.length; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
    } else {
      if (this.scrollY > scrollYRef) {
        for (let i = 0; i < 5; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
      if (this.scrollY > scrollYRef + difference) {
        for (let i = 5; i < skills.length; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
    }
  } else {
    const scrollYRef = 4050;
    const difference = 185;
    if (this.innerWidth > 680) {
      if (this.scrollY > scrollYRef) {
        for (let i = 0; i < 5; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
      if (this.scrollY > scrollYRef + difference) {
        for (let i = 5; i < 10; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
      if (this.scrollY > scrollYRef + 2 * difference) {
        for (let i = 10; i < skills.length; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
    } else if (this.innerWidth > 690) {
      if (this.scrollY > scrollYRef) {
        for (let i = 0; i < 4; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
      if (this.scrollY > scrollYRef + difference) {
        for (let i = 4; i < 8; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
      if (this.scrollY > scrollYRef + 2 * difference) {
        for (let i = 8; i < skills.length; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
    } else if (this.innerWidth > 490) {
      if (this.scrollY > scrollYRef) {
        for (let i = 0; i < 3; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
      if (this.scrollY > scrollYRef + difference) {
        for (let i = 3; i < 6; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
      if (this.scrollY > scrollYRef + 2 * difference) {
        for (let i = 6; i < 9; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
      if (this.scrollY > scrollYRef + 3 * difference) {
        for (let i = 9; i < skills.length; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
    } else {
      const scrollYRef = 3500;
      if (this.scrollY > scrollYRef) {
        for (let i = 0; i < 2; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
      if (this.scrollY > scrollYRef + difference) {
        for (let i = 2; i < 4; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
      if (this.scrollY > scrollYRef + 2 * difference) {
        for (let i = 4; i < 6; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
      if (this.scrollY > scrollYRef + 3 * difference) {
        for (let i = 6; i < 8; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
      if (this.scrollY > scrollYRef + 4 * difference) {
        for (let i = 8; i < 10; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
      if (this.scrollY > scrollYRef + 5 * difference) {
        for (let i = 10; i < skills.length; i++) {
          skills[i].style.animation = "up 1s forwards ease";
        }
      }
    }
  }
});
//////////////////////////////////////////////////////////////////////
/*----------------------------about----------------------------------*/
const myImage = document.querySelector(".my-img");
const samury = document.querySelector(".samury");
window.addEventListener("scroll", () => {
  if (this.innerWidth > firstImpactingPoint) {
    if (this.scrollY > 2880) {
      myImage.style.animation = "fade-in-left .5s forwards ease";
      samury.style.animation = "fade-in-right  .5s forwards ease";
    }
  } else if (this.innerWidth >= secondImpactingPoint) {
    if (this.innerWidth > 1100) {
      if (this.scrollY > 3350) {
        myImage.style.animation = "fade-in-left .5s forwards ease";
        samury.style.animation = "fade-in-right  .5s forwards ease";
      }
    } else {
      if (this.scrollY > 3200) {
        myImage.style.animation = "fade-in-left .5s forwards ease";
      }
      if (this.scrollY > 3600) {
        samury.style.animation = "fade-in-right  .5s forwards ease";
      }
    }
  } else {
    if (this.scrollY > 5070) {
      myImage.style.animation = "fade-in-left .5s forwards ease";
    }
    if (this.scrollY > 5240) {
      samury.style.animation = "fade-in-right  .5s forwards ease";
    }
  }
});
//////////////////////////////////////////////////////////////////////
/*----------------------------contact----------------------------------*/
const form = document.querySelector("form");
const contact = document.querySelector(".contacts");
window.addEventListener("scroll", () => {
  if (this.scrollY > 140) {
    titles[0].style.animation = "fade-in-top 1s ease forwards";
  }
  if (this.innerWidth > firstImpactingPoint) {
    if (this.scrollY > 3730) {
      form.style.animation = "ninjaLeft 1s ease forwards";
      contact.style.animation = "ninjaRight 1s ease forwards";
    }
  } else if (this.innerWidth >= secondImpactingPoint) {
    if (this.scrollY > 4700) {
      form.style.animation = "ninjaLeft 1s ease forwards";
      contact.style.animation = "ninjaRight 1s ease forwards";
    }
  } else {
    if (this.scrollY > 5970) {
      form.style.animation = "ninjaLeft 1s ease forwards";
    }
    if (this.scrollY > 6330) {
      contact.style.animation = "ninjaRight 1s ease forwards";
    }
  }
});
//////////////////////////////////////////////////////////////////////
/*----------------------------footer----------------------------------*/
const footer = document.querySelector("footer p");
window.addEventListener("scroll", () => {
  if (this.innerWidth > firstImpactingPoint) {
    if (this.scrollY >= 3860) {
      footer.style.animation = "show 2s .5s ease   forwards";
    }
  } else if (this.innerWidth >= secondImpactingPoint) {
    if (this.scrollY >= 4830) {
      footer.style.animation = "show 2s .5s ease   forwards";
    }
  } else {
    if (this.scrollY >= 6550) {
      footer.style.animation = "show 1s .5s ease   forwards";
    }
  }
});
