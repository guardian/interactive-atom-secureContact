console.log("app running");

var cardsArr;

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
        el.addEventListener('click', () => toggleActiveNavItem(el));
    });

    [].slice.apply(document.querySelectorAll('.gv-chiclet')).forEach(el => {
        //var data = el.className.replace('share-','');
        el.addEventListener('click', () => scrollCardIntoView(el));
    });
}


function scrollCardIntoView(el){

    if (el.classList.contains("selected")) {
        document.getElementById("cardHolder"+el.getAttribute("card-ref")).scrollIntoView({block: "end", behavior: "smooth"})
    }

}


function clickReadMore(a) {

    let b = a.getAttribute("target-div");

    [].slice.apply(document.querySelectorAll('.gv-read-more')).forEach(c => {
        let d = c.getAttribute("div-ref");
        if (b == d) { toggleActive(c) }
    });
}

function toggleActive(a) {

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


function toggleActiveNavItem(a) {
    let b = a.getAttribute("nav-level");

    if (b == "L1") {
        [].slice.apply(document.querySelectorAll('.nav-one-item')).forEach(el => {
            el.classList.remove("selected");
            el.classList.add("unselected");
        });
        a.classList.remove("unselected");
        a.classList.add("selected");
        document.querySelector('.nav-step-two').classList.remove("inactive");
        document.querySelector('.nav-step-three').classList.add("inactive");

        document.getElementById("levelTwoNavHolder").scrollIntoView({block: "end", behavior: "smooth"});
    }

    if (b == "L2") {
        [].slice.apply(document.querySelectorAll('.nav-one-item')).forEach(el => {

            let c = el.getAttribute("nav-level");


            if (c == b) {
                el.classList.remove("selected");
                el.classList.add("unselected");
            }

        });
        getCardsArr(a.getAttribute("target-cards"))
        a.classList.remove("unselected");
        a.classList.add("selected");

        document.querySelector('.nav-step-three').classList.remove("inactive");

        document.getElementById("cardsHolder").scrollIntoView({block: "end", behavior: "smooth"});
    }


}

function getCardsArr(a) {
    var b = a.split("---");

    var c = [];

    for (var d = 0; d < b.length; d++) {
        if (b[d]) {
            c.push(b[d]);
        }
    }

    displayCards(c)

}

function displayCards(a) {

    let b = document.querySelectorAll(".gv-card");

    for (var d = 0; d < b.length; d++) {
        b[d].classList.remove("active");
        b[d].classList.add("inactive");
    }

    for (var c = 0; c < a.length; c++) {
        console.log(a[c]);
        for (var d = 0; d < b.length; d++) {
            //console.log(b[d])

            if (a[c] == b[d].getAttribute("card-ref")) {
                console.log(b[d])

                b[d].classList.remove("inactive");
                b[d].classList.add("active");

            }


        }



    }

    displayPips(a)

}


function displayPips(a) {

    let b = document.querySelectorAll(".gv-chiclet");

    for (var d = 0; d < b.length; d++) {
        b[d].classList.remove("selected");
        b[d].classList.add("unselected");
    }


    for (var c = 0; c < a.length; c++) {
        console.log(a[c]);
        for (var d = 0; d < b.length; d++) {
            //console.log(b[d])

            if (a[c] == b[d].getAttribute("card-ref")) {
                console.log(b[d])

                b[d].classList.remove("unselected");
                b[d].classList.add("selected");

            }


        }



    }



}


init();