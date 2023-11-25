const burguerButton = document.getElementById("burguerButton")
const burguerNav = document.getElementById("burguerNav")
const arrowLeft = document.getElementById("arrowLeft")
const burguerNav__navBar = document.getElementById("burguerNav__navBar")

const openAndCloseNavbar=()=>{
    
    burguerNav.classList.remove("disNone")

    if(burguerNav__navBar.classList.contains("openSectionAnimation") ){
        burguerNav__navBar.classList.remove("openSectionAnimation")
        burguerNav__navBar.classList.add("closeSection")

        burguerNav__navBar.classList.remove("openNavBarAnimation")
        burguerNav__navBar.classList.add("closeNavBarAnimation")
    }
    else{
        burguerNav__navBar.classList.remove("closeSection")
        burguerNav__navBar.classList.add("clocloseSectionse")

    }
}


// burguerButton.addEventListener("click", openAndCloseNavbar)
// arrowLeft.addEventListener("click", openAndCloseNavbar)