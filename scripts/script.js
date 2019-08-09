window.onscroll = function()
{
    var scrollPos = $(window).scrollTop();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + window.innerHeight;
    var height = $(window).height();

    var i = (viewportTop/height);
    i = ((viewportTop*(1-i) + viewportBottom*(i))/height);

    $('.aboutmeinfo').colorCalcInv();
    $('.skillsdiv').colorCalc();

    $('#grid').find('div').each(function () {
        let red = 0 * (1-i) + 121 * (i);
        let blue = 0 * (1-i) + 206 * (i);
        let green = 0 * (1-i) + 255 * (i);
        let val = "1px solid rgba("+ red + ", " + green + ", " + blue + ", 0.3)";
        
       $(this).css('border-left', val)
    });


    let header = this.document.getElementById("header");
    let nav2 = this.document.getElementById("footer");
    let el = document.getElementById("interesteddiv").offsetTop;
    if(el < scrollPos + 1200)
    {
        $('#header').css('animation', '0.5s ease-out 0s 1 fadeOutText');
        $('#header').fadeOut();
        
    }
    else
    {
        $('#header').css('animation', '2s ease-out 0s 1 fadeintext');
        $('#header').fadeIn();
    }

}

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + window.innerHeight;

    return elementBottom > viewportTop && elementTop < viewportBottom;
};
let lasti = 0;
$.fn.colorCalc = function () {
    if ($(this).isInViewport() == true){
        var elementTop = $(this).offset().top;
        elementTop = elementTop;
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + window.innerHeight;
        lasti = (elementTop/viewportBottom);
        var i = (elementTop/viewportBottom) - (1-lasti) * 0.7;
         
        let red = 255 * i + 121 * (1 - i);
        let blue = 82 * i + 206 * (1 - i);
        let green = 82 * i + 255 * (1 - i);
        let val = "1px solid rgba("+ red + ", " + green + ", " + blue + ", 0.15)";
        $(this).css("border", val);
    }
}
$.fn.colorCalcInv = function () {
    if ($(this).isInViewport() == true){
        var elementTop = $(this).offset().top;
        elementTop = elementTop;
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + window.innerHeight;
        lasti = (elementTop/viewportBottom);
        var i = (elementTop/viewportBottom) - (1-lasti) * 0.7;
         
        let red = 255 * (1 - i) + 121 * i;
        let blue = 82 * (1 - i) + 206 *  i;
        let green = 82 * (1 - i) + 255 * i;
        let val = "1px solid rgba("+ red + ", " + green + ", " + blue + ", 0.15)";
        $(this).css("border", val);
    }
}