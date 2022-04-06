

// accordion section start here
$(document).ready(function(){

    $(".accordion__display__one").click(function(){
        $(".accordion__hidden__one").toggle("slow");
        $("#firsticon__for__one").toggleClass('fa-arrow-up-long');
    })

    $(".accordion__display__two").click(function(){
        $(".accordion__hidden__two").toggle("slow");
         $("#firstsicon__for__two").toggleClass('fa-arrow-up-long');
    })

    $(".accordion__display__three").click(function(){
        $(".accordion__hidden__three").toggle("slow");
        $("#firstsicon__for__three").toggleClass('fa-arrow-up-long');

    })

})
// accordion section start here
