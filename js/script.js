document.addEventListener('DOMContentLoaded', function () { // запуск функции только после полной загрузки контента страницы

//============Отображение инпута поиска==============

    $('.search__btn').on('click', function () {
        $('.search__block').toggle(100);
    });
//============Отображение инпута поиска==============

//============карусель в хедере==============

    $('.slider__item').owlCarousel({
        loop: true,
        autoplay: true,
        mouseDrag: false,
        touchDrag: false,
        margin: 0,
        nav: false,
        navText: [],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 1
            }

        }
    });
//============карусель в хедере==============
//============карусель игр==============

    $('.games__slider').owlCarousel({
        loop: true,
        margin: 0,
        mouseDrag: false,
        touchDrag: false,
        nav: true,
        dots: true,
        navText: [],
        responsive: {

            0: {

                items: 1,
                nav: false
            },
            768: {
                items: 1
            },
        }
    })
//============карусель игр==============
//============карусель трейлеров==============

    $('.trailers__slider').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: true,
        navText: [],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            480: {
                items: 2,
                nav: false
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
        }
    })
//============карусель трейлеров==============






//============слайдер новостей в хедере==============
    $('.headerBottom__element').on('click', function () {
        $('.headerBottom__element').removeClass('active');
        $(this).addClass('active');
        var num = $(this).data("news");
        $('.headerBottom__description').removeClass('active')
        var numberBlock = '.headerBottom__description_' + num;
        $(numberBlock).addClass('active');
    });
//============слайдер новостей в хедере==============













    function longHeaderTextSlider() {
        var str3 = "";
         str3 = $('.slider__text');
        str3.each((index, elem) => {
            if ($(elem).text().length > 120)
                $(elem).text(function (i, text) {
                    if ($(window).width() > 480) {
                        text = text.substring(0, 250);
                    }else {

                        text = text.substring(0, 120);
                    }
                    var lastIndex = text.lastIndexOf(" ");
                    text = text.substring(0, lastIndex) + '...';
                    $(this).text(text);
                });
        });
    }
    if ($(window).width() < 768) {
    longHeaderTextSlider();
    }
    $(window).resize(function() {
        longHeaderTextSlider();
    });


    var str5 = $('.slider__title');
    function longHeaderSliderTitle() {
        str5.each((index, elem) => {
            if ($(elem).text().length > 50)
                $(elem).text(function (i, text) {
                    text = text.substring(0, 50);
                    var lastIndex = text.lastIndexOf(" ");
                    text = text.substring(0, lastIndex) + '...';
                    $(this).text(text);
                });
        });
    }

        longHeaderSliderTitle();






    //============добавление троеточия в хедере==============




    var str4 = $('.description__title');
    function longHeaderTitle() {
        str4.each((index, elem) => {
            if ($(elem).text().length > 35)
                $(elem).text(function (i, text) {
                    text = text.substring(0, 35);
                    var lastIndex = text.lastIndexOf(" ");
                    text = text.substring(0, lastIndex) + '...';
                    $(this).text(text);
                });
        });
    }

    longHeaderTitle();







    var str2 = $('.description__text');

    function longHeaderText() {
        str2.each((index, elem) => {
            if ($(elem).text().length > 230)
                $(elem).text(function (i, text) {
                    text = text.substring(0, 230);
                    var lastIndex = text.lastIndexOf(" ");
                    text = text.substring(0, lastIndex) + '...';
                    $(this).text(text);
                });
        });
    }

    longHeaderText();
//============добавление троеточия в хедере==============




    //============добавление троеточия в новостях==============


    var str1 = $('.newsArea__text');

    function longGameText() {
        str1.each((index, elem) => {
            if ($(elem).text().length > 180)
                $(elem).text(function (i, text) {
                    if ($(window).width() > 668) {
                        text = text.substring(0, 230);
                    } else {
                        text = text.substring(0, 180);
                    }
                    var lastIndex = text.lastIndexOf(" ");
                    text = text.substring(0, lastIndex) + '...';
                    $(this).text(text);
                });
        });
    }

    longGameText();

    //============добавление троеточия в новостях==============
    //============добавление троеточия в описании игр==============


    var str = $('.games__text');

    function leng() {
        str.each((index, elem) => {
            if ($(elem).text().length > 160)
                //$(elem).addClass('long');
                $(elem).text(function (i, text) {
                    if ($(window).width() > 1199) {
                        text = text.substring(0, 230);
                    } else {
                        text = text.substring(0, 160);
                    }
                    var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
                    text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
                    $(this).text(text);
                });
        });
    }

    if ($(window).width() > 992) {
        leng();
    }



    //============добавление троеточия в описании игр==============






}, false);

