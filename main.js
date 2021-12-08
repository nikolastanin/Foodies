// view MORE  functionality
let viewMoreBtn= document.getElementById("view-btn");
let element = document.getElementById("more-txt");
console.log(viewMoreBtn);
const viewLess = ()=>{
    element.style.display = "none";
    viewMoreBtn.innerHTML = "View More";
}
const viewMore =()=>{
    
    element.style.display = "block";
   
    viewMoreBtn.innerHTML = "View Less";
    viewMoreBtn.addEventListener("click",viewLess);
}

viewMoreBtn.addEventListener("click",viewMore);
// Scroll button functionality
let started_btn = document.getElementById("started-btn");
console.log(started_btn);

const scrollToFunc = () =>{
    document.getElementById("popular-food").scrollIntoView();
}
started_btn.addEventListener("click",scrollToFunc);

// sticky nav bar

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY >0);
})

//simple shoping cart functionality

// let btn1 = document.getElementById("btn-cart1");
// let btn2 = document.getElementById("btn-cart2");
// let btn3 = document.getElementById("btn-cart3");
// let cartNum = parseInt(document.getElementById("cart-num").innerHTML);
// console.log(cartNum);
//  let i = 0;
// const addItem = () =>{
     
//        i+=1;
       
//        console.log(i);
//        cartNum.innerHTML = i ; 
// }
// btn1.addEventListener("click",addItem);
// btn2.addEventListener("click",addItem);
// btn3.addEventListener("click",addItem);
// let arr = [];
// //check if local storage is empty if not display number of items
// const fetchData = localStorage.getItem("array");
// const fetchArray = JSON.parse(fetchData);
// if( fetchArray == null ||fetchArray.length == 0 ){
//     console.log("Local storage is empty");
    
// }
// else{
//     arr = fetchArray;
//       }


//       const setLocalStorage = () =>{
//         const stringifyArray = JSON.stringify(arr);
//         localStorage.setItem("array",stringifyArray);
//     }