
let introHeight = window.innerHeight * 0.75;

window.addEventListener('scroll', function(){
    const currentScrollPos = window.scrollY;
    console.log(introHeight);
    if(introHeight < currentScrollPos){
        this.document.querySelector('.nav-container').classList.add('show');
    }else{
        this.document.querySelector('.nav-container').classList.remove('show');
    }
    prevScrollPos = currentScrollPos;
});