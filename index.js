let movies = [
  {
    name: "O2",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inciduntitaque debitis provident ab cumque reprehenderit?",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/687/1280687-h-0b90e870875c"
  },
  {
    name: "Mr & Mrs Chinnathirai",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inciduntitaque debitis provident ab cumque reprehenderit?",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1569/1291569-h-403188414941"
  },
  {
    name: "Traitor",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inciduntitaque debitis provident ab cumque reprehenderit?",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7740/1287740-h-a3b8d8bf2fca"
  },
  {
    name: "2AM",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inciduntitaque debitis provident ab cumque reprehenderit?",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2455/1282455-h-b33f09f2b539"
  },
  {
    name: "Zodiac",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inciduntitaque debitis provident ab cumque reprehenderit?",
    image:
      "https://shifu.hotstarext.com/SOURCE/VOD/cd-2021-12-17/PreethiCosmo_Desktop-c6ca75c3-bf96-4911-998c-3e389113df62.jpg"
  }
];

const caraousel = document.querySelector(".caraousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //creating elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //Attaching elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  caraousel.appendChild(slide);

  //setting up image elemnts
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting element classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//video cards

const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth + 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth - 200;
  });
});
