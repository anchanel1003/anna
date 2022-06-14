var btnOpen = document.querySelector(".header-left-tablet")
var modal = document.querySelector(".header-mobile")


function tonggleModal (e) {
    console.log(e.target);
    modal.classList.toggle('hide')
}
btnOpen.addEventListener('click', tonggleModal)
modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        tonggleModal()
    }
})





const buttons = document.querySelectorAll(".product-glass");
const contents = document.querySelectorAll(".content2-list .swiper-item");

contents.forEach((e, i) => {
  if (i > 0) e.classList.add("hide");
});

function deactivateText(arg) {
  buttons.forEach((e, i) => {
    contents[i].classList.add("hide");
  });
  activatetext(arg);
}

function activatetext(arg) {
  const contentData = arg.dataset.content;
  contents[contentData].classList.toggle("hide");
}





