$(function() {

var $infoPlace = ['Для зала', 'Для гостиной', 'Для кухни', 'Для гостиной'];
var $price = ['50', '60', '70', '80'];
var $places = ['спальня-1s.jpg', 'гостиная-2s.jpg', 'кухня-2s.jpg', 'гостиная-1.jpg'];
var $navRight = $('.nav-right');
var $navLeft = $('.nav-left');
var i = 0;

    $navRight.on('click', function() {

        $('.checkbox-nav li').eq(i).removeClass('checkbox-nav-active');
        i++;
        $('.checkbox-nav li').eq(i).addClass('checkbox-nav-active');
        $('.info-place span').text($infoPlace[i]);
        $('.info-price span').text($price[i]);
        $('.slider-block').css('backgroundImage', 'url(img/' + $places[i] + ')');

        $navLeft.removeAttr('disabled');

        if (i >= ($infoPlace.length - 1)) {
            $navRight.attr('disabled', 'true');
        }
    });

    function goBack() {
        $('.checkbox-nav li').eq(i).removeClass('checkbox-nav-active');
        i--;
        $('.checkbox-nav li').eq(i).addClass('checkbox-nav-active');
        $('.info-place span').text($infoPlace[i]);
        $('.info-price span').text($price[i]);
        $('.slider-block').css('backgroundImage', 'url(img/' + $places[i] + ')');
        $navRight.removeAttr('disabled');
    }

    $navLeft.on('click', function() {
        if (i == -1) {
            i = 3;
            goBack();
        } else {
            goBack();
        }
        if (i == 0) {
            $navLeft.attr('disabled', 'true');
        }
    });

    var playSlider = (function() {
        setInterval(function() {
            $navRight.trigger('click');

            if (i >= ($infoPlace.length - 1)) {
                i = -1;
                $navRight.removeAttr('disabled');
            }
        }, 6000)
      })();

});    