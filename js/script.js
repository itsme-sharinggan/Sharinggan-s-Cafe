$(document).ready(function(){
    $(".invisible-content").hide();
    $(document).on('click',"#btn",function(){
        var moreLessButton=$(".invisible-content").is(":visible")?'Read More':'Read Less';
        $(this).text(moreLessButton);
        $(this).parent(".blog-text").find(".invisible-content").toggle();
        $(this).parent(".blog-text").find(".visible-content").toggle();
        $(this).parent(".blog-text1").find(".invisible-content").toggle();
        $(this).parent(".blog-text1").find(".visible-content").toggle();
        $(this).parent(".blog-text2").find(".invisible-content").toggle();
        $(this).parent(".blog-text2").find(".visible-content").toggle();
    });
});