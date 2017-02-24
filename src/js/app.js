import toggleClass from '../lib/toggleClass';


function init(){

	addXpandListeners();

	addScrollListener();

}

function addXpandListeners(){

	var buttonEls = document.getElementsByClassName('btn-xpand');

		for (var i = 0; i < buttonEls.length; i++) {
		    	buttonEls[i].addEventListener('click', function new_class() {
				
				    var tempEls = this.parentNode.getElementsByClassName('other-paras');

				    for (var k = 0; k<tempEls.length; k++){
				    	toggleXpandClass(tempEls[k])
				    }

				    //toggle button class here

				    toggleButtonClass(this)

				});
		}
	
}

function toggleXpandClass(el){
	el.className == 'other-paras active' ? el.className = "other-paras" :  el.className = "other-paras active";
}

function toggleButtonClass(el){
	el.innerHTML == "show more" ? el.innerHTML = "show less" : el.innerHTML = "show more" ;
	el.className == 'btn-xpand show-more' ? el.className = "btn-xpand show-less" :  el.className = "btn-xpand show-more";
}



function addScrollListener(){
        var el = document.querySelector(".nav-slice-fixed");
        var elMob = document.querySelector(".gv-back-top-button");
        //console.log(el.scrollTop)
        // var el = .style.display = 'none';

        
        window.onscroll=function(){ checkElScroll(el, "none-mobile") };
        window.onresize=function(){ checkElScroll(el, "none-mobile") };

        window.onscroll=function(){ checkElScroll(elMob, "mobile") };
        window.onresize=function(){ checkElScroll(elMob, "mobile") };
}

function checkElScroll(el, s)
{
    
    var docViewTop = document.body.scrollTop;
    var docViewBottom = docViewTop + window.height;

    console.log(s, s=="mobile", "look here on Monday")


        if(isElementVisible(document.querySelector(".standy-two")))
        {
            s=="mobile" ? hideNavElementMobile(el) : hideNavElement(el);
   
        }else{            
            s=="mobile" ? showNavElementMobile(el) : showNavElement(el);
            
        }


    
}




function hideNavElement(el){
     el.classList.remove("active-none-mobile");
     el.classList.add("inactive");
}

function showNavElement(el){
     el.classList.remove("inactive");
     el.classList.add("active-none-mobile");
}

function hideNavElementMobile(el){
     el.classList.remove("active-mobile");
     el.classList.add("inactive");
}

function showNavElementMobile(el){
     el.classList.remove("inactive");
     el.classList.add("active-mobile");
}





function hideElement(el){
     el.classList.remove("active");
     el.classList.add("inactive");

    }

function showElement(el){
     el.classList.remove("inactive");
     el.classList.add("active");
    }



    
function isElementVisible(el) {
    var rect = el.getBoundingClientRect(),
    vWidth = window.innerWidth || doc.documentElement.clientWidth,
    vHeight = window.innerHeight || doc.documentElement.clientHeight,
    efp = function (x, y) { return document.elementFromPoint(x, y) };     

    return(rect.height * -1 < rect.top)

        // // Return false if it's not in the viewport
        // if (rect.right < 0 || rect.bottom < 0 
        //         || rect.left > vWidth || rect.top > vHeight)
        //     return false;

        // // Return true if any of its four corners are visible
        // return (
        //       el.contains(efp(rect.left,  rect.top))
        //   ||  el.contains(efp(rect.right, rect.top))
        //   ||  el.contains(efp(rect.right, rect.bottom))
        //   ||  el.contains(efp(rect.left,  rect.bottom))
        // );
}


function unfixElement(el)
    {
     el.classList.remove("dig-slice_fixed");
     el.classList.add("dig-slice_relative");
    }   



// attachEvent(window, "scroll", updateNavView);
// attachEvent(window, "resize", updateNavView);
// updateNavView();


init();