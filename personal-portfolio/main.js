// Theme toggle
const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");
function getStored(){
    try {
        localStorage.setItem('feature_test', 'yes');
        if (localStorage.getItem('feature_test') === 'yes') {
            localStorage.removeItem('feature_test');
            return localStorage.getItem('theme')
        } else {
             console.error("Check privacy settings");
             return 0
        }
    } catch(e) {
        console.error("Check privacy settings",e);
        return 0
    } 
}

const themeIcon = document.querySelector(".theme-icon");
function shiftToLight(){
    themeIcon.innerText = "dark_mode"
    document.body.classList.remove("dark-theme")
    document.body.classList.add("light-theme")
  try{
        localStorage.setItem('theme', 'light')
   } catch(e){
     
   }
}
function shiftToDark(){
    themeIcon.innerText = "light_mode"
    document.body.classList.remove("light-theme")
    document.body.classList.add("dark-theme")
    try{
      localStorage.setItem('theme', 'dark')
    } catch(e){
      
    }
}
function switchTheme(){
    if(document.body.classList.contains("dark-theme")) shiftToLight()
    else shiftToDark()
}
function checkTheme(){
    if(!getStored()){
        if (prefersLightScheme.matches) shiftToLight()
        else shiftToDark()
    }
    else{
        if(getStored()=="light") shiftToLight()
        else  shiftToDark()
    }
}
checkTheme();
document.querySelector(".theme-toggle").addEventListener("click", switchTheme)