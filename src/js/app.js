import animatedScrollTo from "animated-scrollto";

var cardsArr;
const globalTimer = 1000;

function init() {

    addListeners();

    textAni("navOneTitle");

    revealButtons(".nav-zero-item", "opacity-low");


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

function textAni(s) {
    let a = document.getElementById(s);
    let b = a.getAttribute("str");
    a.innerHTML = "";

    showText(a, b, 0);
}

let showText = function(target, message, index) {
    let interval = globalTimer / message.length;

    if (index < message.length) {
        target.append(message[index++]);
        setTimeout(function() { showText(target, message, index, interval); }, interval);
    }
}

let revealButtons = function(target, removeClass) {
    let delay = globalTimer * 2;
    let shim = globalTimer / 3;
    let i = 1;
    [].slice.apply(document.querySelectorAll(target)).forEach(el => {
        setTimeout(function() { el.classList.remove(removeClass) }, delay + (i * shim));
        i++;
    });
}




function scrollCardIntoView(el) {

    if (el.classList.contains("selected")) {
        console.log(document.getElementById("cardHolder" + el.getAttribute("card-ref")).offsetTop)
        animatedScrollTo(
            document.body, // element to scroll with (most of times you want to scroll with whole <body>)
            document.getElementById("cardHolder" + el.getAttribute("card-ref")).offsetTop+document.getElementById("cardsHolder").offsetTop, // target scrollY (0 means top of the page)
            globalTimer/3, // duration in ms
            function() { // callback function that runs after the animation (optional)
                console.log('done!')
            }
        );
        //document.getElementById("cardHolder" + el.getAttribute("card-ref")).scrollIntoView({ block: "end", behavior: "smooth" })
    }

}


function clickReadMore(a) {

    let b = a.getAttribute("target-div");

    [].slice.apply(document.querySelectorAll('.gv-read-more')).forEach(c => {
        let d = c.getAttribute("div-ref");
        if (b == d) { toggleActive(c) }

        if (a.classList.contains("show-more")) {
            a.classList.remove("show-more");
            a.classList.add("show-less");
        } else if (a.classList.contains("show-less")) {
            a.classList.remove("show-less");
            a.classList.add("show-more");
        }
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

        //document.querySelector('.nav-step-two').classList.remove("inactive");
        document.querySelector('.nav-step-three').classList.add("inactive");
        document.querySelector('.cards-placeholder').classList.add("active");
        document.querySelector('.cards-placeholder').classList.remove("inactive");

        animatedScrollTo(
            document.body, // element to scroll with (most of times you want to scroll with whole <body>)
            document.getElementById("levelTwoNavHolder").offsetTop, // target scrollY (0 means top of the page)
            globalTimer/3, // duration in ms
            function() { // callback function that runs after the animation (optional)
                console.log('done!')
            }
        );



        //document.getElementById("levelTwoNavHolder").scrollIntoView({ block: "end", behavior: "smooth" });

        textAni("navTwoTitle")

        revealButtons(".nav-two-item", "opacity-low");
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

        document.querySelector('.gv-cards-heading').innerHTML = "Here's how to send " + a.getAttribute("list-ref") + "…";
        document.querySelector('.nav-step-three').classList.remove("inactive");
        document.querySelector('.cards-placeholder').classList.remove("active");
        document.querySelector('.cards-placeholder').classList.add("inactive");


        animatedScrollTo(
            document.body, // element to scroll with (most of times you want to scroll with whole <body>)
            document.getElementById("cardsHolder").offsetTop, // target scrollY (0 means top of the page)
            globalTimer/3, // duration in ms
            function() { // callback function that runs after the animation (optional)
                console.log('done!')
            }
        );


        //document.getElementById("cardsHolder").scrollIntoView({ block: "end", behavior: "smooth" });
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
            if (a[c] == b[d].getAttribute("card-ref")) {
                console.log(b[d])

                b[d].classList.remove("unselected");
                b[d].classList.add("selected");

            }

        }

    }


}


init();