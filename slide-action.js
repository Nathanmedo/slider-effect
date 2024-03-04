
let listofItems = document.querySelector(".list")
let carousel = document.querySelector(".carousel");
let thumbnailContainer = document.querySelector(".thumbnails");

let nextBtn = document.getElementById("next");
let nextBtnhtml = document.querySelector(".next");
let prevBtn = document.getElementById("prev")
console.log(prevBtn, nextBtn);

let autoRun;

autoRun = setInterval(()=>{
    sliderDirection('next-page');
    let removeType = setTimeout(()=>{
        carousel.classList.remove("next-page");
        carousel.classList.remove("prev-page")
    },1500)
}, 7000);
function stopAutorun(){
    clearInterval(autoRun);
}

function sliderDirection(type){
    let thumbnail = document.querySelectorAll(".thumbnail-item");
    let items = document.querySelectorAll(".item");
    if(type=='next-page'){
        listofItems.appendChild(items[0]);
        thumbnailContainer.appendChild(thumbnail[0]);
        carousel.classList.add("next-page");
        
    }
    if(type=='prev-page'){
        let lastItem = items.length - 1
        listofItems.prepend(items[lastItem]);
        thumbnailContainer.prepend(thumbnail[lastItem]);
        carousel.classList.add("prev-page");
       
    }
    let removeType;
    clearTimeout(removeType)
    removeType = setTimeout(()=>{
        carousel.classList.remove(type);
    },1500)
    
    
}
// runTimeOut = setInterval(()=>{
//     sliderDirection('next-page');
//     removeType = setTimeout(()=>{
//         carousel.classList.remove('next-page')
//     },2000)
// }, 7000)

