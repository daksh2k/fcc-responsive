// Theme toggle
const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");
const storedTheme =  localStorage.getItem('theme');
const themeIcon = document.querySelector(".theme-icon");
function shiftToLight(){
    themeIcon.innerText = "light_mode"
    document.body.classList.remove("dark-theme")
    document.body.classList.add("light-theme")
    localStorage.setItem('theme', 'light')
}
function shiftToDark(){
    themeIcon.innerText = "dark_mode"
    document.body.classList.remove("light-theme")
    document.body.classList.add("dark-theme")
    localStorage.setItem('theme', 'dark')
}
function switchTheme(){
    console.log("clicked")
    if(document.body.classList.contains("dark-theme")) shiftToLight()
    else shiftToDark()
}
function checkTheme(){
    if(!storedTheme){
        if (prefersLightScheme.matches) shiftToLight()
        else shiftToDark()
    }
    else{
        if(storedTheme=="light") shiftToLight()
        else  shiftToDark()
    }
}
// checkTheme();
document.querySelector(".theme-toggle").addEventListener("click", switchTheme)