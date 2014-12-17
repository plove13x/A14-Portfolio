'use strict';

// $(document).ready(function(){

    var imageArray = new Array("images/headerImg25.jpg", "images/headerImg26.jpg", "images/headerImg3.jpg", "images/headerImg2.jpg", "images/headerImg1.jpg", "images/headerImg4.jpg", "images/headerImg5.jpg", "images/headerImg7.jpg", "images/headerImg8.jpg", "images/headerImg9.jpg", "images/headerImg28.jpg", "images/headerImg14.jpg", "images/headerImg11.jpg", "images/headerImg27.jpg", "images/headerImg15.jpg", "images/headerImg10.jpg", "images/headerImg19.jpg", "images/headerImg18.jpg", "images/headerImg13.jpg", "images/headerImg29.jpg", "images/headerImg24.jpg", "images/headerImg30.jpg");
    
    $(window).load(function(){

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
    });


$(document).ready(function(){

    $('.rollIt').hover(
        function(){
            // alert('*Have you ever tired of plain old Lemon-Lime or Fruit Punch and opted for a Gatorade X-Factor instead? You can thank the National Hybrid Research Team (NHRT) for that. No, we didn\'t reap the financial rewards of such a stroke of mixology brilliance - the idealists we were in high school couldn\'t have been less concerned with intellectual property rights and patents - but we got some serious traffic for a while and then all of a sudden Gatorade started producing their own "hybrids". Unfortunately the site is no longer accessible to due to an overhaul of the Tripod free hosting program, but long live the memories and keep on mixing!');
            $('.onRoll').css({display: "block"});
        },
        function(){
            $('.onRoll').css({display: "none"});
        }
    );


    // $('.SSContainerRight').on('mouseover', function() {
    //     $('.blackRollUp').removeClass('hidden');
    //     // $(this).addClass('showing');
    // });

    // $('.SSContainerRight').on('mouseout', function() {
    //     $('.blackRollUp').addClass('hidden');
    // });


    $('.blackRollUp').hide();

    $('.SSContainer').on('mouseover', function() {
        $(this).find('.blackRollUp').fadeIn(1000).stop();
    });

    $('.SSContainer').on('mouseout', function() {
        $(this).find('.blackRollUp').fadeOut(2000);
    });


    $('.shrunkPic').on('mouseover', function() {
        $(this).find('.blackRollUp').fadeIn(1000).stop();
    });

    $('.shrunkPic').on('mouseout', function() {
        $(this).find('.blackRollUp').fadeOut(2000);
    });


//     $('.projectRC').bind('touchstart touchend', function() {
//         // var hoverP = $(this).find('.blackRollUp');
//         // // hoverP.toggleClass('hover_effect');
//         // hoverP.fadeIn(1000).stop();
//         $(this).find('.blackRollUp').fadeIn(1000).stop();
//     });

    $('.projectRC').on({ 'touchstart' : function(){ 
        $(this).find('.blackRollUp').show();
        // fadeIn(1500).stop();
        } 
    });

    $('.projectRC').on({ 'touchmove' : function(){ 
        $(this).find('.blackRollUp').show();
        // fadeIn(1500).stop();
        } 
    });

    $(' .leftM, .rightM').on({ 'touchmove' : function(){ 
        $(this).next('.blackRollUp').show();
        // fadeIn(1500).stop();
        } 
    });



    $('.projectRC').on({ 'touchend' : function(){ 
        $(this).find('.blackRollUp').fadeOut(2500);
        } 
    });

    // $('.SSContainerLeft').on('mouseover', function() {
    //     $(this).find('.blackRollUp').fadeIn(1000).stop();
    // });

    // $('.SSContainerLeft').on('mouseout', function() {
    //     $(this).find('.blackRollUp').fadeOut(2000);
    // });



    // $('.fFact').each(function(index){
    //     $(this).hide().delay(2500 * index).fadeIn(1000);
    // });


    // $('.fFact').each(function(index){
    //      var that = $(this);
    //      $(this).hide().delay(12000 * index).fadeIn(2500).animate({
    //          paddingLeft: '+=500'
    //      }, 3500, function() {
    //          console.log('yo');
    //      });
    //  }); 

    var funFacts = [

    '<span class="purps2">*</span>At the top of the page I mentioned making my first website (NHRT) in high school...Well, have you ever gotten bored with plain old Lemon-Lime or Fruit Punch and opted for a Gatorade X-Factor instead? You can thank NHRT (National Hybrid Research Team) for that. No, we didn\'t reap the financial rewards of such a stroke of mixology brilliance - the idealists we were in high school couldn\'t have been less concerned with intellectual property rights and patents - but we got some serious traffic for a while and then all of a sudden Gatorade started producing their own "hybrids". Unfortunately, the site (www.areyoumixing.com) is no longer accessible due to an overhaul of the Tripod free hosting program, but long live the memories and keep on mixing!',
    'Speaking of high school, I (thanks to some timely self-deprecating humor) was elected as both junior and senior class president of my high school class and gave our graduation speech. I also served as Managing Editor of our high school newspaper that won 1st place at the <em>Dallas Morning News\’</em> Journalism Day competition. Dork!',
    'I love basketball and once tried out for an American Basketball Association team. Ultimately I wasn\'t offered a contract, but on the plus side, I was invited back for another tryout. On the not-so-plus side, one large man who was already under contract chose to refer to me exclusively as "Little Man". This was the first and only time in my life this has happened.',
    'Some might say in my younger years I could be a bit of a problem child, but I wasn\'t the <em>Problem Child</em>. However, since some of the movie\'s birthday party scene was filmed at our house, a keen eye will notice young me in a lion costume. Any Oscar noms went to my Mom though for her role as "woman gets pinned on the ass". Check it out on YouTube: <a target="_blank" href="https://www.youtube.com/watch?v=KhAg5po8InY"><em>Problem Child</em> party scene clip</a>',
    'My junior high (5th-8th grade) holds an annual schoolwide spelling bee, and somehow I won the whole thing twice (6th and 8th grade)!'
    ];

    var counterFF = 0;

    $('.funFacts button').on('click', function(){
        if ($(this).hasClass('forward')) {
            counterFF = (counterFF + 1);
        } else {
            counterFF = (counterFF - 1);
        }

        var fFP = $('.fFact p:first');
        fFP.fadeOut(600, function() {
            if (counterFF >= 5) { counterFF = 0 }
            if (counterFF < 0) { counterFF = 4 }
            fFP.html(funFacts[counterFF]);
            fFP.fadeIn(3000);
        });

    });

    // $('.funFacts button').on('click', function(){
    //     console.log('Yo');
    //     counterFF = (counterFF + 1);
    //     console.log(counterFF);
    //     console.log(funFacts[counterFF]);
    //     $('.fFact').animate({                   // Just use fade out?
    //         opacity: 0.0,
    //         paddingLeft: '+=100'
    //     }, 2500, function() {
    //          console.log('yo');
    //     });
    //     $('.fFact p').textContent = funFacts[counterFF];
    //     console.log($('.fFact'));

    // });


    var $window = $(window);
    var $document = $(document);
    var docHeight = $(document).height();
    var $sideNav = $('.sideNav');
    var noShow = $('.contactInfo').offset().top - $window.height();

    $window.on('scroll', function() {
        // console.log(docHeight);
        // console.log(noShow);
        // console.log( (docHeight - $window.scrollTop()) );

        if ( (docHeight - noShow - 100) > (docHeight - $window.scrollTop()) ) {
            $sideNav.hide();
        } else {
            $sideNav.show();
        }
    });

});

