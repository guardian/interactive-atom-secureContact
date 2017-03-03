console.log("app running");

function init() {
    addListeners();
}

function addListeners() {

    [].slice.apply(document.querySelectorAll('.gv-read-more-btn')).forEach(el => {
        //var data = el.className.replace('share-','');
        el.addEventListener('click', () => clickReadMore(el));
    });

    [].slice.apply(document.querySelectorAll('.nav-one-item')).forEach(el => {
        //var data = el.className.replace('share-','');
        el.addEventListener('click', () => clickActivateNavItem(el));
    });
}

function clickReadMore(a) {

    let b = a.getAttribute("target-div");

    [].slice.apply(document.querySelectorAll('.gv-read-more')).forEach(c => {
        let d = c.getAttribute("div-ref");
        if (b == d) { clickActivate(c) }
    });
}

function clickActivate(a) {

    if (a.classList.contains("active")) {
        a.classList.remove("active");
        a.classList.add("inactive");
    } else if (a.classList.contains("inactive")) {
        a.classList.add("active");
        a.classList.remove("inactive");
    } else if (a.classList.contains("selected")) {
        a.classList.remove("selected");
        a.classList.add("unselected");
    } else {
        a.classList.add("selected");
        a.classList.remove("unselected");
    }

}


function clickActivateNavItem(a){
    let b = a.getAttribute("nav-level");

    if (b == "L1") { 
            [].slice.apply(document.querySelectorAll('.nav-one-item')).forEach(el => {
            el.classList.remove("selected");
            el.classList.add("unselected");
        });
        a.classList.remove("unselected");
        a.classList.add("selected");
    }

    if (b == "L2") { 
            [].slice.apply(document.querySelectorAll('.nav-one-item')).forEach(el => {

            let c = el.getAttribute("nav-level");


                
            if (c == b) {
                el.classList.remove("selected");
                el.classList.add("unselected");
            }   
            
        });
        console.log(a.getAttribute("target-cards")) 
        a.classList.remove("unselected");
        a.classList.add("selected");
    }


}



init();