"use strict";

const typed = new Typed(".typing", {
  strings: ["Youssef Mohamed", "Graphic Designer"],
  startDelay: 600,
  typeSpeed: 50,
  backSpeed: 40,
  loop: true,
});

const tabs = document.querySelectorAll(".tab-pane");

window.addEventListener("contextmenu", (e) => e.preventDefault());

const allImages = [
  [
    "https://i.postimg.cc/FHBT6CBw/01.jpg",
    "https://i.postimg.cc/ydWWkp9m/6.jpg",
    "https://i.postimg.cc/HWStWR6P/03.jpg",
    // "https://i.postimg.cc/qM7FB844/04.jpg",
    "https://i.postimg.cc/vmKVyxSH/7.jpg",
    "https://i.postimg.cc/SK4PLcL2/adidas.jpg",
    // "https://i.postimg.cc/ZKykm8J2/botetos.jpg",
    "https://i.postimg.cc/RCkRrhWT/EVO.jpg",
    "https://i.postimg.cc/HW74W4L1/1.jpg",
    "https://i.postimg.cc/KYvRKFrg/image.jpg",
  ],
  [
    "https://i.postimg.cc/mgG12GwC/6.jpg",
    "https://i.postimg.cc/xd9sNnYL/last-coffee.jpg",
    "https://i.postimg.cc/Pqk9rRd9/ICECREEM.jpg",
    "https://i.postimg.cc/gkcs1hSB/starbucks.jpg",
    "https://i.postimg.cc/LsB3SH4Y/2.jpg",
    "https://i.postimg.cc/05m2ybRB/3.jpg",
    "https://i.postimg.cc/jjpc4jY2/JOE-LOGO.jpg",
  ],
  [
    "https://i.postimg.cc/tCLbB9DJ/fruit-salad.jpg",
    "https://i.postimg.cc/x84cLcBF/image.jpg",
    "https://i.postimg.cc/MpnLzfgc/4.jpg",
    "https://i.postimg.cc/W45nx7ZD/MRAZE.jpg",
    "https://i.postimg.cc/vHLRt51q/NIKE.jpg",
    "https://i.postimg.cc/zfCb4DRV/image.jpg",
    "https://i.postimg.cc/13gD7ZHq/image.jpg",
    "https://i.postimg.cc/L5wRy3jS/02.jpg",
  ],
];
const allmarketing = [
  [
    "https://i.postimg.cc/FHBT6CBw/01.jpg",
    "https://i.postimg.cc/HWStWR6P/03.jpg",
    "https://i.postimg.cc/SK4PLcL2/adidas.jpg",
  ],
  [
    "https://i.postimg.cc/xd9sNnYL/last-coffee.jpg",
    "https://i.postimg.cc/Pqk9rRd9/ICECREEM.jpg",
    "https://i.postimg.cc/gkcs1hSB/starbucks.jpg",
  ],
  [
    "https://i.postimg.cc/tCLbB9DJ/fruit-salad.jpg",
    "https://i.postimg.cc/vHLRt51q/NIKE.jpg",
    "https://i.postimg.cc/L5wRy3jS/02.jpg",
  ],
];
const allcards = [
  "https://i.postimg.cc/ydWWkp9m/6.jpg",
  "https://i.postimg.cc/vmKVyxSH/7.jpg",
];
const allposters = [
  "https://i.postimg.cc/mgG12GwC/6.jpg",
  "https://i.postimg.cc/RCkRrhWT/EVO.jpg",
  "https://i.postimg.cc/W45nx7ZD/MRAZE.jpg",
];
const alllogos = [
  [
    "https://i.postimg.cc/jjpc4jY2/JOE-LOGO.jpg",
    "https://i.postimg.cc/zfCb4DRV/image.jpg",
    "https://i.postimg.cc/x84cLcBF/image.jpg",
    "https://i.postimg.cc/13gD7ZHq/image.jpg",
  ],
];
const allfreeArt = [
  [
    "https://i.postimg.cc/HW74W4L1/1.jpg",
    "https://i.postimg.cc/MpnLzfgc/4.jpg",
  ],
  "https://i.postimg.cc/LsB3SH4Y/2.jpg",
  "https://i.postimg.cc/05m2ybRB/3.jpg",
];

function addClasses(ele, classes) {
  classes = classes.split(" ");
  for (let i = 0; i < classes.length; i++) {
    ele.classList.add(classes[i]);
  }
}

/* displaying the All tab */
{
  let column1 = document.createElement("div");
  addClasses(column1, "row m-0 p-0 g-4 col-md-6 col-lg-4");
  for (let i = 0; i < allImages[0].length; i++) {
    //creating the main item
    let item = document.createElement("div");
    addClasses(item, "port-item col-12");

    // creating the itemChild that will directly contain the image
    let itemChild = document.createElement("div");
    addClasses(
      itemChild,
      "parent shadow d-flex justify-content-center align-items-center rounded-2 overflow-hidden"
    );

    // creating the image and styling it
    let image = document.createElement("img");
    addClasses(image, "rounded-2 w-100");
    image.src = allImages[0][i];

    // compiling the image into the itemChild
    itemChild.appendChild(image);
    //and then compiling the itemChild ito the parent item
    item.appendChild(itemChild);

    // and finaly conpiling the item into the main column
    column1.appendChild(item);
  }
  let column2 = document.createElement("div");
  addClasses(column2, "row m-0 p-0 g-4 col-md-6 col-lg-4");
  for (let i = 0; i < allImages[1].length; i++) {
    let item = document.createElement("div");
    addClasses(item, "port-item col-12");
    let itemChild = document.createElement("div");
    addClasses(
      itemChild,
      "parent shadow d-flex justify-content-center align-items-center rounded-2 overflow-hidden"
    );
    let image = document.createElement("img");
    addClasses(image, "rounded-2 w-100");
    image.src = allImages[1][i];
    itemChild.appendChild(image);
    item.appendChild(itemChild);
    column2.appendChild(item);
  }
  let column3 = document.createElement("div");
  addClasses(column3, "row m-0 p-0 g-4 col-md-6 col-lg-4");
  for (let i = 0; i < allImages[2].length; i++) {
    let item = document.createElement("div");
    addClasses(item, "port-item col-12");
    let itemChild = document.createElement("div");
    addClasses(
      itemChild,
      "parent shadow d-flex justify-content-center align-items-center rounded-2 overflow-hidden"
    );
    let image = document.createElement("img");
    addClasses(image, "rounded-2 w-100");
    image.src = allImages[2][i];
    itemChild.appendChild(image);
    item.appendChild(itemChild);
    column3.appendChild(item);
  }
  tabs[0].firstElementChild.appendChild(column1);
  tabs[0].firstElementChild.appendChild(column2);
  tabs[0].firstElementChild.appendChild(column3);
}

/* displaying the Marketing tab */

{
  let column1 = document.createElement("div");
  addClasses(column1, "row m-0 p-0 g-4 col-md-6 col-lg-4");
  for (let i = 0; i < allmarketing[0].length; i++) {
    //creating the main item
    let item = document.createElement("div");
    addClasses(item, "port-item col-12");

    // creating the itemChild that will directly contain the image
    let itemChild = document.createElement("div");
    addClasses(
      itemChild,
      "parent shadow d-flex justify-content-center align-items-center rounded-2 overflow-hidden"
    );

    // creating the image and styling it
    let image = document.createElement("img");
    addClasses(image, "rounded-2 w-100");
    image.src = allmarketing[0][i];

    // compiling the image into the itemChild
    itemChild.appendChild(image);
    //and then compiling the itemChild ito the parent item
    item.appendChild(itemChild);

    // and finaly conpiling the item into the main column
    column1.appendChild(item);
  }
  let column2 = document.createElement("div");
  addClasses(column2, "row m-0 p-0 g-4 col-md-6 col-lg-4");
  for (let i = 0; i < allmarketing[1].length; i++) {
    let item = document.createElement("div");
    addClasses(item, "port-item col-12");
    let itemChild = document.createElement("div");
    addClasses(
      itemChild,
      "parent shadow d-flex justify-content-center align-items-center rounded-2 overflow-hidden"
    );
    let image = document.createElement("img");
    addClasses(image, "rounded-2 w-100");
    image.src = allmarketing[1][i];
    itemChild.appendChild(image);
    item.appendChild(itemChild);
    column2.appendChild(item);
  }
  let column3 = document.createElement("div");
  addClasses(column3, "row m-0 p-0 g-4 col-md-6 col-lg-4");
  for (let i = 0; i < allmarketing[2].length; i++) {
    let item = document.createElement("div");
    addClasses(item, "port-item col-12");
    let itemChild = document.createElement("div");
    addClasses(
      itemChild,
      "parent shadow d-flex justify-content-center align-items-center rounded-2 overflow-hidden"
    );
    let image = document.createElement("img");
    addClasses(image, "rounded-2 w-100");
    image.src = allmarketing[2][i];
    itemChild.appendChild(image);
    item.appendChild(itemChild);
    column3.appendChild(item);
  }
  tabs[1].firstElementChild.appendChild(column1);
  tabs[1].firstElementChild.appendChild(column2);
  tabs[1].firstElementChild.appendChild(column3);
}

/* displaying the Cards tab */
{
  for (let i = 0; i < allcards.length; i++) {
    //creating the main item
    let item = document.createElement("div");
    addClasses(item, "port-item col-md-6 col-lg-4");

    // creating the itemChild that will directly contain the image
    let itemChild = document.createElement("div");
    addClasses(
      itemChild,
      "parent d-flex justify-content-center align-items-center rounded-2 overflow-hidden"
    );

    // creating the image and styling it
    let image = document.createElement("img");
    addClasses(image, "rounded-2 w-100");
    image.src = allcards[i];

    // compiling the image into the itemChild
    itemChild.appendChild(image);
    //and then compiling the itemChild ito the parent item
    item.appendChild(itemChild);

    // and finaly conpiling the item into the main row
    tabs[2].firstElementChild.appendChild(item);
  }
}

/* displaying the Marketing tab */

{
  for (let i = 0; i < allposters.length; i++) {
    //creating the main item
    let item = document.createElement("div");
    addClasses(item, "port-item col-md-6 col-lg-4");

    // creating the itemChild that will directly contain the image
    let itemChild = document.createElement("div");
    addClasses(
      itemChild,
      "parent d-flex justify-content-center align-items-center rounded-2 overflow-hidden"
    );

    // creating the image and styling it
    let image = document.createElement("img");
    addClasses(image, "rounded-2 w-100");
    image.src = allposters[i];

    // compiling the image into the itemChild
    itemChild.appendChild(image);
    //and then compiling the itemChild ito the parent item
    item.appendChild(itemChild);

    // and finaly conpiling the item into the main row
    tabs[3].firstElementChild.appendChild(item);
  }
}

$(window).on("load", function () {
  $(".loading-screen").fadeOut(function () {
    $("body").css("overflow", "auto");
  });
});
