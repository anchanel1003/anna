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