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

var newSlider = new Slider(imageArray, '.slider-images', 2000, 0);

