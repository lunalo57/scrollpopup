window.addEventListener('scroll', () => {
    //Navbar
    if(window.scrollY > 50){
        navbar.style.height = "45px"
    }else{
        navbar.style.height = "90px"
    }
    // Image
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    if(scrollValue > 0.33){
        imgImprovise.style.opacity = 1;
        imgImprovise.style.transform = "translateX(0px)";
    }
    // popup
    if(scrollValue > 0.85){
        popup.style.opacity = 1;
        popup.style.transform = "translateX(0px)";
    }
});

closeBtn.addEventListener('click', () => {
    popup.style.opacity = 0;
    popup.style.transform = "translateX(500px)";
});