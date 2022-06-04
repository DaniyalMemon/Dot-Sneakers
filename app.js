const firebaseConfig = {
  apiKey: "AIzaSyD2IZyjnCQEij8Tq1VWyOpLJzribHlDZo0",
  authDomain: "dot-sneakers.firebaseapp.com",
  projectId: "dot-sneakers",
  storageBucket: "dot-sneakers.appspot.com",
  messagingSenderId: "996413026257",
  appId: "1:996413026257:web:13c4f48af881fa843dbaf0",
  measurementId: "G-NTV0R7R5HR"
};

const app = firebase.initializeApp(firebaseConfig);
console.log(app)

function getdata(){
  var username = document.getElementById("name").value
  var phonenumber = document.getElementById("phone").value
  var address = document.getElementById("address").value
  var cardnum = document.getElementById("card").value
if(username=="" || phonenumber=="" || address=="" || cardnum==""){
  alert("PLEASE FILL OUT THE INFORMATION")
}
else{
  
  alert("your Response Has Been Submited \r\n THANKS FOR SHOPPING " +  username.toLocaleUpperCase())
  app.database().ref('/Buyers').push({Username : username , PhoneNum : phonenumber , UserAddress : address , CardNum : cardnum })

}
  
  document.getElementById("name").value = ""
document.getElementById("phone").value = ""
document.getElementById("address").value = ""
document.getElementById("card").value = ""
}



const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")


const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./images/air.png",
        },
        {
          code: "darkblue",
          img: "./images/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./images/jordan.png",
        },
        {
          code: "green",
          img: "./images/jordan la green.png " ,
          
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./images/blazer.png",
        },
        {
          code: "green",
          img: "./images/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./images/crater.png",
        },
        {
          code: "lightgray",
          img: "./images/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./images/hippie.png",
        },
        {
          code: "black",
          img: "./images/hippie2.png",
        },
      ],
    },
  ];
  

  let choosenProduct = products[0];

  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");





menuItems.forEach((item,index)=>{
    item.addEventListener("click" ,()=>{
        // change the current slide
        wrapper.style.transform=`translateX(${-100 * index}vw)`;

         //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //  assin colors

     currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });

     });
});

currentProductColors.forEach((color,index)=>{
  color.addEventListener("click" , ()=>{
    currentProductImg.src = choosenProduct.colors[index].img
  })
})

currentProductSizes.forEach((size,index)=>{
  size.addEventListener("click" , ()=>{
    currentProductSizes.forEach(size=>{
      size.style.backgroundColor = "white"
    size.style.color = "black"
    })
    size.style.backgroundColor = "black"
    size.style.color = "white"

  })
})


const ProductButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

ProductButton.addEventListener("click",()=>{
  payment.style.display="flex"
})
close.addEventListener("click",()=>{
  payment.style.display="none"
})
