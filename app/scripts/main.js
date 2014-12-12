var imageArray = new Array("images/headerImg1.jpg", "images/headerImg2.jpg", "images/headerImg3.jpg", "images/headerImg4.jpg", "images/headerImg5.jpg", "images/headerImg7.jpg", "images/headerImg8.jpg", "images/headerImg9.jpg", "images/headerImg14.jpg", "images/headerImg11.jpg", "images/headerImg15.jpg", "images/headerImg10.jpg", "images/headerImg19.jpg");

function Slider(array, location, interval, fade) {
    var imageCount = array.length,
    counter = 1;
    if (!$.isArray(array)){
        throw new Error ('Thats not an array');
    } else if (array.length <= 0) {
        throw new Error ('Array must have content');
    } else {
        $(location).attr('src', array[0]);
            setInterval(function() {
                $(location).fadeOut(fade, function() {
                $(this).attr('src', array[counter]).fadeIn(fade);
                counter = counter == imageCount - 1 ? 0 : counter += 1;
            });
        }, interval);
    };
};

var newSlider = new Slider(imageArray, '.slider-images', 3000, 0);




$('.rollIt').hover(
    function(){
        // alert('*Have you ever tired of plain old Lemon-Lime or Fruit Punch and opted for a Gatorade X-Factor instead? You can thank the National Hybrid Research Team (NHRT) for that. No, we didn\'t reap the financial rewards of such a stroke of mixology brilliance - the idealists we were in high school couldn\'t have been less concerned with intellectual property rights and patents - but we got some serious traffic for a while and then all of a sudden Gatorade started producing their own "hybrids". Unfortunately the site is no longer accessible to due to an overhaul of the Tripod free hosting program, but long live the memories and keep on mixing!');
        $('.onRoll').css({display: "block"});
    },
    function(){
        $('.onRoll').css({display: "none"});
    }
);
