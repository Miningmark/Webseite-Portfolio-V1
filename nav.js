//Show Menu after Scroll 75% VH down from Sitetop
let introHeight = window.innerHeight * 0.75;

window.addEventListener('scroll', function(){
    const currentScrollPos = window.scrollY;
    //console.log(introHeight);
    if(introHeight < currentScrollPos){
        this.document.querySelector('.nav-container').classList.add('show');
    }else{
        this.document.querySelector('.nav-container').classList.remove('show');
    }
    prevScrollPos = currentScrollPos;
});


var flag = false;
var sections = document.querySelectorAll('.scroll-section');

window.addEventListener('scroll', function () {
    //checkIfInView();
    if(!flag){
        sections = document.querySelectorAll('.scroll-section');
    }
    var maxVisibleSection = getMaxVisibleSection();
    updateActiveMenu(maxVisibleSection);
    //var rect = this.document.querySelector('.testtest').getBoundingClientRect();
});

function getMaxVisibleSection() {
    var maxVisibility = 0;
    var maxVisibleSection = null;
    sections.forEach(function (section) {
        var visibility = getVisibility(section);

        if (visibility > maxVisibility) {
            maxVisibility = visibility;
            maxVisibleSection = section;
        }
    });
    //console.log(maxVisibleSection);
    //console.log(maxVisibleSection);
    return maxVisibleSection;
}

function getVisibility(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;

    var visibleHeight = Math.min(rect.bottom, html.clientHeight) - Math.max(rect.top, 0);

    //console.log(element);
    //console.log(visibleHeight);
    return  visibleHeight;  
}

function updateActiveMenu(activeSection) {

    sections.forEach(function (section) {
        var iconId = section.dataset.icon;
        var iconElement = document.querySelector('#icon-' + iconId);
        var textElement = document.querySelector('#text-' + iconId);
        //console.log(iconId);
        //console.log(iconElement);

        if (section === activeSection) {
            iconElement.classList.add('menu-active');
            textElement.classList.add('menu-active');
        } else {
            iconElement.classList.remove('menu-active');
            textElement.classList.remove('menu-active');
        }
    });
}


/*

let careerAnimation = document.querySelector(".timeline");



function checkIfInView(){
    let windowHeight = window.innerHeight;
    let windowTopPosition = window.scrollY;
    let windowBottomPosition = windowHeight + windowTopPosition;

    let elementHeight = careerAnimation.getBoundingClientRect().height;
    let elementTopPosition = careerAnimation.getBoundingClientRect().top;
    let elementBottomPosition = elementHeight + elementTopPosition;

    console.log("----------------------------");
    console.log(elementHeight);
    console.log(elementTopPosition);
    console.log(elementBottomPosition);
    console.log(windowHeight);
    console.log(elementTopPosition);
    console.log(elementBottomPosition);

    if(elementTopPosition < (windowHeight / 2)){
        careerAnimation.classList.add("in-view");
        console.log("TRUE");
    }
 
}

*/