window.onscroll = function()
{
    var header = this.document.getElementById("header");
    var scrollPos = $(window).scrollTop();
    var el = document.getElementById("interesteddiv").offsetTop;
    if(el < scrollPos + 900)
    {
        var el2 = this.document.getElementById("nav");
        header.style.transform = "rotate(0)";
        header.style.marginTop = "45%";
        header.style.right = "45%";
        
    }
    else
    {
        header.style = null;
    }

}