/*ProjectNav*/
$(document).ready(function() {

    $(".projects a").click(function() {
        var project = $(this).attr('href');
        $(".project-item").removeClass("is-visible");
        $(project + '').addClass("is-visible");


    });



    //------- SCROLL ---------//
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });



});

//BOTTOM SLIDING

function displaypanelleft() {
    document.getElementById("left").style.height = "100%";
}

function displaypanelright() {
    document.getElementById("right").style.height = "100%";
}


//ENDLESS SCROLLING

var insideright, content, test;
var number = 0

var max = 5


// this is the scroll event handler
function scroller() {
    // print relevant scroll info
    console.log(wrapper.scrollTop + " + " + wrapper.offsetHeight + " + 100 > " + newimage.offsetHeight);

    // add more contents if user scrolled down enough
    if (wrapper.scrollTop + wrapper.offsetHeight + 100 > newimage.offsetHeight) {
        newimage.innerHTML += ' <img class="picture" src="images/' + number + '.png" > ';;
        number++;
        //console.log(number)
        if (number >= max) {
            number = 0;
        } // NK: Here you can make an Ajax call and fetch content to append to content.innerHTML
    }
}

wrapper = document.getElementById("sleepwalking");
newimage = document.getElementById("scrollpicture");


//content.innerHTML = more = ' <img class="picture" src="images/' + number + '.png" > ';;

// hook the scroll handler to scroll event
if (wrapper.addEventListener) // NK: Works on all new browsers
    wrapper.addEventListener("scroll", scroller, false);

else if (wrapper.attachEvent) // NK: Works on old IE
    wrapper.attachEvent("onscroll", scroller);