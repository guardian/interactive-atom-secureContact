console.log("app running");

function init(){
    setListeners();
}

function setListeners(){
 

    document.querySelectorAll('.gv-read-more-btn show-more').addEventListener('click',toggleReadMore(this));
  
}

function toggleReadMore(el){
    console.log(el)
}