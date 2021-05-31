var selected_page
var url_front_pic
var all_title_des = document.querySelectorAll('#title-i', '#description-i')
var all_pages = document.querySelectorAll(".ProjectGrid-container")
var all_menu = document.querySelectorAll(".MenuGrid-item")
var plus;
var minus;
var all_phone = document.querySelectorAll(".phone")
var all_centerdiv = document.querySelectorAll("#center-i")
var main_url
    //check if mobile
$(window).resize(isMobile);

$(document).ready(function() {
    //  main_url = document.location.href.split('#')[0];
    //show menu page
    $(".MenuMaster").addClass("visible");
    //hide other pages 
    $(all_pages).removeClass("visible");
    isMobile()



    $(".MenuGrid-item").on("click", function(event) {
        isMobile()
        selected_page = $(this).attr('href');
        //go to selected page on click
        matchallImg();
        gotoPage(selected_page);

    });

    $(all_centerdiv).on("click", function(event) {
        //swipe image gallery
        $(this).addClass("slide")
        selected_page = "#" + $(this).parent().attr('id');
        // console.log("selected page id" + selected_page)
        setTimeout(function() {
            scrollimg(plus)
        }, 300);


    });


    $(".all-arrows").on("click", function(event) {
        if ($(this).attr('id') == "arrow-top") {
            $(selected_page).addClass("slide-top")
        }
        if ($(this).attr('id') == "arrow-bottom") {
            $(selected_page).addClass("slide-bottom")
        }
        if ($(this).attr('id') == "arrow-left") {
            $(selected_page).addClass("slide-left")
        }
        if ($(this).attr('id') == "arrow-right") {
            $(selected_page).addClass("slide-right")
        }



        // $(selected_page).addClass("slide")
        isMobile()


        // go home button
        if ($(this).attr('href') == "#home") {
            setTimeout(function() {
                gobacktoOverview()
            }, 500);
        } else {
            selected_page = $(this).attr('href');

            setTimeout(function() {
                sidePage(selected_page)
            }, 500);
        }

    });



});



function gotoPage(selected_page) {
    noSlide()

    $(".MenuMaster").removeClass("visible");
    $(".ProjectMaster").addClass("visible");
    $(all_pages).removeClass("visible");
    $(selected_page).addClass("visible");


}

function sidePage(selected_page) {
    noSlide()

    $(".MenuMaster").removeClass("visible");
    $(".ProjectMaster").addClass("visible");
    $(all_pages).removeClass("visible");
    $(selected_page).addClass("visible");



}

function scrollimg(dir) {

    noSlide()

    image_container = $(selected_page).children('#center-i')[0]
    main_url = document.location.href.split('#')[0].replace("index.html", "");

    cur_pic = $(image_container).css('background-image');
    //console.log("image container" + image_container + "current pic " + cur_pic)
    var new_url = cur_pic.split("/")
    console.log(main_url);
    var cur_num = parseInt(new_url[5].slice(0, 1));
    var max_num = parseInt(new_url[5].slice(2, 3));
    var end_url = new_url[5].slice(3)
    console.log(end_url, cur_num)
    if (dir === plus) { cur_num++ } else if (dir === minus) { cur_num-- }
    if (cur_num > max_num) { cur_num = 1 } else if (cur_num < 1) { cur_num = max_num }

    var cur_pic = "" + 'url("' + main_url + "assets/projects/" + cur_num + "_" + max_num + end_url

    $(image_container).css('background-image', cur_pic)
}



//look for each image front image 
function matchallImg() {
    for (let i = 0; i < all_pages.length; i++) {
        var cur_id = "#" + all_pages[i].id
        url_front_pic = $('a[href="' + cur_id + '"]').css('background-image');;
        image_container = $(cur_id).children('#center-i')[0]
        $(image_container).css('background-image', url_front_pic);
    };

}

function gobacktoOverview() {
    noSlide()

    $(".ProjectMaster").removeClass("visible");
    $(all_pages).removeClass("visible");
    $(".MenuMaster").addClass("visible");

}

function isMobile() {
    if ($('#north-i').css('display') == "none") {
        console.log("mobile")
            //change back content (full bio or not)
        $('#m-item-text1').html($("#full_bio").html());
        $('#1-1 #center-i').html($("#full_bio").html());;

        matchallImg()
        $(all_pages).addClass("visible");
        //hides all non img div on phone
        document.getElementById("1-2").classList.remove("visible")
        document.getElementById("1-3").classList.remove("visible")
        document.getElementById("1-4").classList.remove("visible")
        document.getElementById("1-5").classList.remove("visible")
        document.getElementById("2-5").classList.remove("visible")
        document.getElementById("4-5").classList.remove("visible")
        document.getElementById("5-1").classList.remove("visible")
        document.getElementById("5-2").classList.remove("visible")
        document.getElementById("5-3").classList.remove("visible")
        document.getElementById("5-5").classList.remove("visible")

        return true
    } else {
        console.log("not-mobile")
            //change back content (full bio or not)
        $('#m-item-text1').html("This website is a Work In Progress (last update April 2021).");
        $('#1-1 #center-i').html("This website is a Work In Progress (last update April 2021).");;
        $(all_pages).removeClass("visible");
        $(selected_page).addClass("visible");

        return false
    }

}


function noSlide() {
    $(".all-arrows").removeClass("slide")
    $(all_pages).removeClass("slide-left")
    $(all_pages).removeClass("slide-right")
    $(all_pages).removeClass("slide-top")
    $(all_pages).removeClass("slide-bottom")
    $(all_centerdiv).removeClass("slide")
}