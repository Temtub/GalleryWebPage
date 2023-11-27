const hamburguer=document.getElementById("hamburguer")
const navOpen= document.getElementById("navOpen")
const leftArrow=document.getElementById("leftArrow")

const lupa=document.getElementById("lupa")
const form=document.getElementById("form")
const form__fieldset=document.getElementById("form__fieldset")
const searcher=document.getElementById("searcher")

const openNavbar=()=>{
    navOpen.classList.remove("disNone")

    if(navOpen.classList.contains("navOpener")){
        navOpen.classList.remove("navOpener")
        navOpen.classList.add("navCloser")
        leftArrow.classList.add("leftArrowCloser")
    }
    else{
        navOpen.classList.add("navOpener")
        leftArrow.classList.add("leftArrowOpener")
        navOpen.classList.remove("navCloser")
        leftArrow.classList.remove("leftArrowCloser")
    }
}


const openSearch=()=>{
    
    if(form.classList.contains("form__searchOpen") ){
        form.classList.remove("form__searchOpen")
        form__fieldset.classList.remove("form__fieldsetOpen")
        searcher.classList.add("disNone")
        
    }
    else{
        form.classList.add("form__searchOpen")
        form__fieldset.classList.add("form__fieldsetOpen")
        searcher.classList.remove("disNone")
    }
}


hamburguer.addEventListener("click", openNavbar)
leftArrow.addEventListener("click", openNavbar)

lupa.addEventListener("click", openSearch)