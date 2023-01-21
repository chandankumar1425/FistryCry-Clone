let image=document.createElement("img");
let maindiv=document.getElementById("slideshow")
maindiv.append(image)
let c=0


// Use the following data for slideshow
var movieImages = [
  "https://cdn.fcglcdn.com/brainbees/banners/desktop1673679228453.webp",
  "https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_diapers_10thjan1673720541174.webp",
  "https://cdn.fcglcdn.com/brainbees/banners/hp_dp_mpp_up45_x5_jan_994x3991673594508897.webp",
  "https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_superhit_fashion_brands_soi_desktop1673084834194.webp",
  "https://cdn.fcglcdn.com/brainbees/banners/baby_hug-pro_newdesktop-banner-baby-994-x-399px1673003568870.gif",
  "https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_soi_au_14thjan_(2)1673637336390.gif",
  "https://cdn.fcglcdn.com/brainbees/banners/giveaway_desktop1673609020535.webp",
  "https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_bgn_15thjan1673768515822.webp",
  "https://cdn.fcglcdn.com/brainbees/banners/merchf_roi_hp_1201231673600853019.webp",
  "https://cdn.fcglcdn.com/brainbees/banners/dekstop_hp_merch_p10_books_atiba_default1673600337500.webp",
  "https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p11_prc35_desktop1673499522420.gif"
]

slideshowFun(movieImages)
function slideshowFun(images){

     image.setAttribute("src",images[c]);

  if(c==images.length-1){
    c=0
  }else{
    c++
  }


}

window.addEventListener("load", function () {
setInterval(slideshowFun,2000,movieImages)

  // add event-listeners;
});

const totalPro = document.getElementById("count") ;
  let Cart= JSON.parse(localStorage.getItem("cart"))||[];
    let count=0;
for(let i=0;i<Cart.length;i++)
{
  count+=Cart[i].quantity;
}

totalPro.textContent=count;