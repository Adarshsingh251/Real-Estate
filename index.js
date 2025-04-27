let btn = document.querySelector(".nav-btn");
let ctn = document.querySelector(".contact");
let closebox = document.querySelector("#customAlert")
let ok_button = document.querySelector(".close-alert");

btn.addEventListener("click", () => {
    alert("SuccessFully Listed Your Room");
})

ctn.addEventListener("click", () => {
    gsap.to("#customAlert", {
        scale: 1,
        duration: 1.5,
        left: 0
    });

    // closebox.style.scale = 1;
    // count = 1;
});

ok_button.addEventListener("click", () => {
    gsap.to("#customAlert", {
        scale: 0,
        duration: 1.5,
        left: "700px",
    })
    // closebox.style.scale = 0;
})

/* swiper js code*/

var swipe = new Swiper(".swiper", {
    loop: true,
    autoplay: {
        delay: 2500,
    },
    effect: "coverflow",
    slidesPerView: 2.8,
    spaceBetween: 20,
    speed: 1000,
})

var slide = new Swiper(".service_detail",{
    loop: true,
    autoplay: {
        delay:2500,
    },
    effect: "cube",
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 2000,
})
/* about image shower*/

const images1 = ["https://plus.unsplash.com/premium_photo-1677127493606-6a42696241dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1568932166062-012821503ca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1728229682185-4c53a4019560?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1623867827722-c470af3f1078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1608196948101-286ba040a5ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1bGRpbmd8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1686511704301-d1865aabb6e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
];
const imgElement = document.querySelector('.imageBox');

let index = 0;

setInterval(() => {
    imgElement.src = images1[index];
    index++;
    if (index >= images1.length) {
        // Reset to first image
        index = 0;
    }
}, 2500);

const images2 = ["https://images.unsplash.com/photo-1672257895774-5b5bfa3f9eb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVsZGluZyUyMHRvd2VyfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1700573127836-a24c4ada9cbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1bGRpbmclMjB0b3dlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1608196948101-286ba040a5ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1bGRpbmclMjB0b3dlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1625411976972-b4cbd901d8e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJ1bGRpbmclMjB0b3dlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1603793765877-b2576a717416?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1655455303460-0db251721fa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
];
const imgElement2 = document.querySelector('.imageBox2');
let index2 = 0;

setInterval(() => {
    imgElement2.src = images2[index];
    index2++;
    if (index2 >= images2.length) {
        // Reset to first image
        index2 = 0;
    }
}, 2500); 

function call(){
    alert("Call Us :- (+91) 7738-275-113")
}