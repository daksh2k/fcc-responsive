(function updateLinks(){
    let i=0;
    for(const ele of document.querySelectorAll(".sec-heading")){
        const link = ele.textContent.replaceAll(" ","_").replace("#","")
        console.log(link)
        document.querySelectorAll(".nav-link")[i].href="#"+link;
        document.querySelectorAll(".nav-link")[i].innerText= ele.innerText.replace("#","");
        document.querySelectorAll(".hash")[i].href="#"+link;
        document.querySelectorAll(".main-section")[i].id= link;
        i+=1
    }
})();

const but = document.querySelector(".collapse")
function toggleNav(){
    document.querySelectorAll(".nav-link").forEach((ele)=>{
        if (ele.classList.contains("hide")){
            ele.classList.remove("hide");
            but.style.transform = "rotate(270deg)"     
    }
    else{
        ele.classList.add("hide");
        but.style.transform = "rotate(90deg)" 
    }
})
}
document.addEventListener("click",(evt)=>{
    if(window.matchMedia( "(max-width: 700px)" ).matches){
      if(!but.contains(evt.target)){
          document.querySelectorAll(".nav-link").forEach((ele)=>{
              ele.classList.add("hide");
              but.style.transform = "rotate(90deg)" 
      })
      }
    }
    else{
        document.querySelectorAll(".nav-link").forEach((ele)=> ele.classList.remove("hide"))
    }
})