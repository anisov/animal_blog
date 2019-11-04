 //get browser window scroolwidth
 function getScrollWidth() {
     /*  var div = document.createElement('div');

       div.style.overflowY = 'scroll';
       div.style.width = '50px';
       div.style.height = '50px';

       // при display:none размеры нельзя узнать
       // нужно, чтобы элемент был видим,
       // visibility:hidden - можно, т.к. сохраняет геометрию
       div.style.visibility = 'hidden';

       document.body.appendChild(div);
       var scrollWidth = div.offsetWidth - div.clientWidth;
       document.body.removeChild(div);*/
     return (0);

 }
 //get browser window scroolwidth -end




 // ClearForm
 function clearForm(form) {
     $(':input', form).each(function() {
         var type = this.type;
         var tag = this.tagName.toLowerCase();
         if (type == 'text' || type == 'password' || tag == 'textarea') $(this).val('');
         else if (type == 'checkbox' || type == 'radio') this.checked = false;
         else if (tag == 'select') this.selectedIndex = -1;
     });
 }
 // ClearForm - end



 //phone mask
 $(document).on("focus", "input[name=phone]", function() {
     $.mask.definitions[9] = '';
     $.mask.definitions.d = '[0-9]';
     $("input[name=phone]").mask("+d (ddd) ddd-dd-dd", { placeholder: "_" });
 });
 //phone mask - end




 //check phone
 var phoneError = false;

 function checkPhone(phoneInp) {
     var lengt = phoneInp.val().length;
     if (lengt === 0) {
         phoneError = true;
     } else {
         phoneError = false;
     }
     return phoneError;
 }
 //check phone - end





 // YandexGoal
 function goal(goal_id) {
     yaCounter36635055.reachGoal(goal_id);
 }

 function goal(goal_id) {
     yaCounter37737740.reachGoal(goal_id);
 }

 $(".goalButton").on('click', function() {
     var goal_id = $(this).data('goal');
     goal(goal_id);
 });
 // YandexGoal - end






 //scroolTop functions
 /* $('.top-menu a, .header a, .logo a').click(function() {
      var isOpera = !!window.opera;
      if (isOpera) {
          top = 'html';
      } else {
          top = 'html, body';
      }
      var id = $(this).attr('href').replace('#', '');
      var offset = $('#' + id).offset().top - 84;

      $(top).animate({
          scrollTop: offset
      }, 1000);
      return false;
  });*/


 $(document).on('click', '.scroll', function() {
     var top = '.mfp-wrap';

     $(top).animate({
         scrollTop: 553
     }, 500);
     return false;
 });
 //scroolTop functions - end






 //top menu fisxing init
 function topMenuInit(hlnHeight) {
     if ($(window).scrollTop() > hlnHeight) {
         $('.hln').addClass('fixed');
     } else {
         $('.hln').removeClass('fixed');
     }
 }

 topMenuInit($('.hln').height());

 var scrollTimeout;

 window.addEventListener('scroll', function(evt) {
     clearTimeout(scrollTimeout);
     scrollTimeout = setTimeout(topMenuInit($('.hln').height()), 50);
 });
 //top menu fisxing init - end






 //Popups
 $('.mfp-button').magnificPopup({
     type: 'inline',
     removalDelay: 300,
     mainClass: 'mfp-fade',
     overflowY: "scroll",
     callbacks: {
         open: function() {
             $('.hln').css('padding-right', 17);
         },
         close: function() {
             $('.hln').css('padding-right', 0);
         }
     }
 });


 $(".btn-write").magnificPopup({
     type: 'inline',
     removalDelay: 300,
     mainClass: 'mfp-fade',
     overflowY: "scroll",
     callbacks: {
         open: function() {
             $('.hln').css('padding-right', 17);
             $("#popup").find('form').find('input[type="text"]').val('');
             $("#popup").find('form').find('textarea').val('');

         },
         close: function() {
             $('.hln').css('padding-right', 0);
         }
     }
 });

 $(".work .work-hover>a").magnificPopup({
     type: 'ajax',
     removalDelay: 300,
     mainClass: 'mfp-fade',
     callbacks: {
         beforeOpen: function() {
             var goal_id = this.st.el.data('goal');
             goal(goal_id);
         },
         open: function() {
             $('.hln').css('padding-right', 17);
         },
         close: function() {
             $('.hln').css('padding-right', 0);
         }
     }
     // modal:true
 });

 $(".btn.btn-more").click(function(event) {
     if ($(".hidden-works").css('display') == 'none') {
         $(".hidden-works").slideDown("slow");
         $(".hidden-works-wr").addClass('opened');
         $(this).hide('slow');
     } else {
         $(".hidden-works").slideUp("slow", function() {
             $(".hidden-works-wr").removeClass('opened');
         });
     }
     return false;
 });

 $('.serts a').magnificPopup({
     type: 'image',
     gallery: {
         enabled: true
     },
     callbacks: {
         open: function() {
             $('.hln').css('padding-right', 17);
         },
         close: function() {
             $('.hln').css('padding-right', 0);
         }
     }
 });
 $('.clients_item_cert a').magnificPopup({
     type: 'image',
     callbacks: {
         open: function() {
             $('.hln').css('padding-right', 17);
         },
         close: function() {
             $('.hln').css('padding-right', 0);
         }
     }
 });
 $('.amo_cert_left_side a').magnificPopup({
     type: 'image',
     callbacks: {
         open: function() {
             $('.hln').css('padding-right', 17);
         },
         close: function() {
             $('.hln').css('padding-right', 0);
         }
     }
 });
 //Popups - end



 //rotation slider
 var rotval = 0,
     rotvall = 0,
     rotvalll = 0;


 setTimeout(function() {
     if ($('.rotate_slider').length) {
         var bigbxslider = $('.rotate_slider').bxSlider({
             // auto: true,
             pagerCustom: '#bx-pager',
             adaptiveHeight: true,
             autoControls: true,
             pager: true,
             onSlideBefore: function() {
                 $(".links-ss .ss").each(function(index, el) {

                     if ($(this).hasClass('s-1')) {
                         rotval += 45;
                         $(this).css('transform', 'rotate(' + rotval + 'deg)');
                     }
                     if ($(this).hasClass('s-2')) {
                         rotvall += 87;
                         $(this).css('transform', 'rotate(' + rotval + 'deg)');
                     }
                     if ($(this).hasClass('s-3')) {
                         rotvalll += 97;
                         $(this).css('transform', 'rotate(' + rotvalll + 'deg)');
                     }

                 });
             }
         });
     }

 }, 500);
 //rotation slider end




 //slider init

 //stand alone - dont need responsive
 if ($('.rotate_slider2').length) {
     var rotate_slider2 = $('.rotate_slider2').bxSlider({
         adaptiveHeight: true,
         autoControls: true,
         pager: true,
     });
 }
 //stand alone - dont need responsive - end




 //slider init - end





 // Responsive js foundation
 var zoneFlag = 0;
 var config = {};

 config['toolsSlider'] = {};
 config['slider3'] = {};
 config['clients_slider'] = {};
 config['clients_about'] = {};
 config['asd'] = {};


 function changeWhenResize() {

     var documentWidth = $(window).width() - getScrollWidth();

     if (documentWidth >= 1000 && (zoneFlag === 0 || zoneFlag != 'lg')) {

         zoneFlag = `lg`;
         //do something
         console.log('lg');

         config['toolsSlider'] = {
             slideWidth: 420,
             minSlides: 2,
             maxSlides: 2,
             moveSlides: 1,
             adaptiveHeight: true,
             pager: false,
             slideMargin: 58,
             preventDefaultSwipeY: false
         };
         config['slider3'] = {
             minSlides: 3,
             maxSlides: 3,
             slideWidth: 290,
             adaptiveHeight: true,
             slideMargin: 23,
             preventDefaultSwipeY: false
         };
         config['clients_slider'] = {
             slideWidth: 200,
             minSlides: 5,
             maxSlides: 5,
             moveSlides: 1,
             adaptiveHeight: true,
             pager: false,
             preventDefaultSwipeY: false

         };
         config['clients_about'] = {
             minSlides: 1,
             maxSlides: 1,
             moveSlides: 1,
             adaptiveHeight: true,
             pager: false,
             preventDefaultSwipeY: false
         };
         config['asd'] = {
             pager: false, // отключаем индикатор количества слайдов
             nextText: '', // отключаем текст кнопки Next
             prevText: '', // отключаем текст кнопки Prev
             minSlides: 5,
             maxSlides: 5,
             slideWidth: 138,
             preventDefaultSwipeY: false,
             controls: false,
             touchEnabled: false
         }

         if (!toolsSlider) {
             if ($('.tools-slider').length) {
                 var toolsSlider = $('.tools-slider').bxSlider(config.toolsSlider);
             }
         } else {
             toolsSlider.reloadSlider(config.toolsSlider);
         }

         if (!slider3) {
             if ($('.slider3').length) {
                 var slider3 = $('.slider3').bxSlider(config.slider3);
             }
         } else {
             slider3.reloadSlider(config.slider3);

         }
         if (!clients_slider) {

             if ($('#clients_slider').length) {
                 var clients_slider = $('#clients_slider').bxSlider(config.clients_slider);

             }
         } else {
             clients_slider.reloadSlider(config.clients_slider);
         }

         if (!clients_about) {
             if ($('#clients_about').length) {
                 var clients_about = $('#clients_about').bxSlider(config.clients_about);
             }
         } else {
             clients_about.reloadSlider(config.clients_about);
         }

         if (!asd) {
             if ($('.asd').length) {
                 var asd = $('.asd').bxSlider(config.asd);

             }
         } else {
             asd.reloadSlider(config.asd);
         }


     }
     if (documentWidth < 1000 && documentWidth > 700 && (zoneFlag === 0 || zoneFlag != 'md')) {

         zoneFlag = 'md';
         //do something
         console.log('md');

         config['toolsSlider'] = {
             slideWidth: 420,
             minSlides: 2,
             maxSlides: 2,
             moveSlides: 1,
             adaptiveHeight: true,
             pager: false,
             slideMargin: 58,
             preventDefaultSwipeY: false
         };
         config['slider3'] = {
             minSlides: 2,
             maxSlides: 2,
             slideWidth: 310,
             adaptiveHeight: true,
             slideMargin: 23,
             preventDefaultSwipeY: false
         };
         config['asd'] = {
             pager: false, // отключаем индикатор количества слайдов
             nextText: '', // отключаем текст кнопки Next
             prevText: '', // отключаем текст кнопки Prev
             minSlides: 4,
             maxSlides: 4,
             slideWidth: 138,
             preventDefaultSwipeY: false
         };
         config['clients_about'] = {
             minSlides: 1,
             maxSlides: 1,
             moveSlides: 1,
             adaptiveHeight: true,
             pager: false,
             preventDefaultSwipeY: false
         };
         config['clients_slider'] = {
             slideWidth: 200,
             minSlides: 5,
             maxSlides: 5,
             moveSlides: 1,
             adaptiveHeight: true,
             pager: false,
             preventDefaultSwipeY: false
         };

         if (!toolsSlider) {
             if ($('.tools-slider').length) {
                 var toolsSlider = $('.tools-slider').bxSlider(config.toolsSlider);

             }
         } else {

             toolsSlider.reloadSlider(config.toolsSlider);

         }

         if (!slider3) {
             if ($('.slider3').length) {
                 var slider3 = $('.slider3').bxSlider(config.slider3);
             }

         } else {

             slider3.reloadSlider(config.slider3);

         }

         if (!asd) {
             if ($('.asd').length) {
                 var asd = $('.asd').bxSlider(config.asd);
             }

         } else {

             asd.reloadSlider(config.asd);

         }
         if (!clients_about) {
             if ($('#clients_about').length) {
                 var clients_about = $('#clients_about').bxSlider(config.clients_about);
             }

         } else {

             clients_about.reloadSlider(config.clients_about);

         }
         if (!clients_slider) {

             if ($('#clients_slider').length) {
                 var clients_slider = $('#clients_slider').bxSlider(config.clients_slider);

             }

         } else {

             clients_slider.reloadSlider(config.clients_slider);

         }



     }

     if (documentWidth <= 700 && documentWidth > 500 && (zoneFlag === 0 || zoneFlag != 'sm')) {

         zoneFlag = 'sm';
         //do something
         console.log('sm');

         config['toolsSlider'] = {
             slideWidth: 420,
             minSlides: 2,
             maxSlides: 2,
             moveSlides: 1,
             adaptiveHeight: true,
             pager: false,
             slideMargin: 58,
             preventDefaultSwipeY: false
         };
         config['slider3'] = {
             minSlides: 1,
             maxSlides: 1,
             slideWidth: 380,
             adaptiveHeight: true,
             slideMargin: 0,
             preventDefaultSwipeY: false
         };
         config['asd'] = {
             pager: false, // отключаем индикатор количества слайдов
             nextText: '', // отключаем текст кнопки Next
             prevText: '', // отключаем текст кнопки Prev
             minSlides: 3,
             maxSlides: 3,
             slideWidth: 138,
             preventDefaultSwipeY: false
         };
         config['clients_about'] = {
             minSlides: 1,
             maxSlides: 1,
             moveSlides: 1,
             adaptiveHeight: true,
             pager: false,
             preventDefaultSwipeY: false
         };
         config['clients_slider'] = {
             slideWidth: 200,
             minSlides: 3,
             maxSlides: 3,
             moveSlides: 1,
             adaptiveHeight: true,
             pager: false,
             preventDefaultSwipeY: false
         };



         if (!toolsSlider) {
             if ($('.tools-slider').length) {
                 var toolsSlider = $('.tools-slider').bxSlider(config.toolsSlider);
             }

         } else {

             toolsSlider.reloadSlider(config.toolsSlider);
         }

         if (!slider3) {
             if ($('.slider3').length) {
                 var slider3 = $('.slider3').bxSlider(config.slider3);
             }

         } else {

             slider3.reloadSlider(config.slider3);
         }

         if (!asd) {
             if ($('.asd').length) {
                 var asd = $('.asd').bxSlider(config.asd);
             }

         } else {

             asd.reloadSlider(config.asd);

         }
         if (!clients_about) {
             if ($('#clients_about').length) {
                 var clients_about = $('#clients_about').bxSlider(config.clients_about);

             }

         } else {

             clients_about.reloadSlider(config.clients_about);
         }

         if (!clients_slider) {

             if ($('#clients_slider').length) {
                 var clients_slider = $('#clients_slider').bxSlider(config.clients_slider);
             }

         } else {

             clients_slider.reloadSlider(config.clients_slider);
         }
     }

     if (documentWidth <= 500 && (zoneFlag === 0 || zoneFlag != 'xs')) {

         zoneFlag = 'xs';
         //do something
         console.log('xs');

         config['toolsSlider'] = {
             minSlides: 1,
             maxSlides: 1,
             moveSlides: 1,
             adaptiveHeight: true,
             slideMargin: 0,
             preventDefaultSwipeY: false
         };
         config['asd'] = {
             minSlides: 1,
             maxSlides: 1,
             slideWidth: 350,
             slideMargin: 10,
             preventDefaultSwipeY: false
         };
         config['slider3'] = {
             minSlides: 1,
             maxSlides: 1,
             slideWidth: 350,
             adaptiveHeight: true,
             slideMargin: 0,
             preventDefaultSwipeY: false
         };
         config['clients_slider'] = {
             slideWidth: 350,
             minSlides: 2,
             maxSlides: 2,
             moveSlides: 1,
             adaptiveHeight: true,
             preventDefaultSwipeY: false
         };
         config['clients_about'] = {
             minSlides: 1,
             maxSlides: 1,
             moveSlides: 1,
             adaptiveHeight: true,
             slideMargin: 15,
             preventDefaultSwipeY: false
         };



         if (!toolsSlider) {
             if ($('.tools-slider').length) {
                 var toolsSlider = $('.tools-slider').bxSlider(config.toolsSlider);

             }

         } else {

             toolsSlider.reloadSlider(config.toolsSlider);
         }
         if (!asd) {
             if ($('.asd').length) {
                 var asd = $('.asd').bxSlider(config.asd);

             }

         } else {

             asd.reloadSlider(config.asd);
         }
         if (!slider3) {
             if ($('.slider3').length) {
                 var slider3 = $('.slider3').bxSlider(config.slider3);
             }

         } else {

             slider3.reloadSlider(config.slider3);
         }

         if (!clients_slider) {
             if ($('#clients_slider').length) {
                 var clients_slider = $('#clients_slider').bxSlider(config.clients_slider);
             }

         } else {

             clients_slider.reloadSlider(config.clients_slider);

         }
         if (!clients_about) {
             if ($('#clients_about').length) {


                 var clients_about = $('#clients_about').bxSlider(config.clients_about);
             }

         } else {

             clients_about.reloadSlider(config.clients_about);
         }



     }

     if (documentWidth <= 400 && (zoneFlag === 0 || zoneFlag != 'xxs')) {
         zoneFlag = 'xxs';
         //do something
         console.log('xxs');

         config['asd'] = {
             minSlides: 1,
             maxSlides: 1,
             slideWidth: 300,
             lideMargin: 0,
             preventDefaultSwipeY: false
         };
         config['clients_slider'] = {
             slideMargin: 15,
             minSlides: 1,
             maxSlides: 1,
             moveSlides: 1,
             adaptiveHeight: true,
             preventDefaultSwipeY: false
         };

         if (!asd) {
             if ($('.asd').length) {

                 var asd = $('.asd').bxSlider(config.asd);

             }

         } else {

             asd.reloadSlider(config.asd);
         }
         if (!clients_slider) {
             if ($('#clients_slider').length) {

                 var clients_slider = $('#clients_slider').bxSlider(config.clients_slider);
             }

         } else {

             clients_slider.reloadSlider(config.clients_slider);
         }

     }


 }
 // Responsive js foundation - end


 var myMap;
 $(document).on('ready', function() {

     //mobile menu

     var slideout = new Slideout({
         'panel': document.getElementById('panel'),
         'menu': document.getElementById('menu'),
         'padding': 256,
         'tolerance': 70,
         'touch': false
     });
     $('#hamburger').on('click', function() {
         slideout.toggle();
     });
     $('#close_hamb').on('click', function() {
         slideout.toggle();
     });
     if ($('.hln').length) {
         var fixed = document.querySelector('.hln');
     }
     if ($('.hln_static').length) {
         var fixed = document.querySelector('.hln_static');
         var fixed2;
     }


     slideout.on('translate', function(translated) {
         fixed.style.transform = 'translateX(' + translated + 'px)';
         fixed2 = document.getElementById('rc-phone');
         if (fixed2) {
             fixed2.style.transform = 'translateX(' + translated + 'px)';
         }
     });

     slideout.on('beforeopen', function() {
         fixed.style.transition = 'transform 300ms ease';
         fixed.style.transform = 'translateX(256px)';

         fixed2 = document.getElementById('rc-phone');
         if (fixed2) {
             fixed2.style.transition = 'transform 300ms ease';
             fixed2.style.transform = 'translateX(256px)';
         }

     });

     slideout.on('beforeclose', function() {
         fixed.style.transition = 'transform 300ms ease';
         fixed.style.transform = 'translateX(0px)';
         fixed.style.transform = 'none';

         fixed2 = document.getElementById('rc-phone');
         if (fixed2) {
             fixed2.style.transition = 'transform 300ms ease';
             fixed2.style.transform = 'translateX(0px)';
             fixed2.style.transform = 'none';
         }
     });

     slideout.on('open', function() {
         fixed.style.transition = '';
     });

     slideout.on('close', function() {
         fixed.style.transition = '';


     });

     //mobile menu - end



     //top sale block init
     var saleOffVal = localStorage.getItem('saleOff');

     if ($('.sale').length && !saleOffVal) {

         var saleHeight = $('.sale').data('height');
         $('.sale').height(saleHeight);
     }
     $('#sale_close').on('click', function() {
         $('.sale').height(0);
         localStorage.setItem('saleOff', 1);
     });

     //top sale block button scroolTo

     var topElemHeight = $('.hln').outerHeight() - $('.hln').find('.sale').height();
     $('.to_pluses').on('click', function(e) {

         var toElem = $(this).attr('href');
         $('.sale').height(0);
         var scrolltop = $(toElem).offset().top - topElemHeight;

         $(top).animate({
             scrollTop: scrolltop
         }, 1000);
         localStorage.setItem('saleOff', 1);
         e.preventDefault();
     });


     $('.spoiler-head').click(function() {
         var par = $(this).parent();
         if (par.hasClass('active')) {
             par.removeClass('active');
             par.children('.spoiler-body').slideUp('slow');
         } else {
             par.addClass('active');
             par.children('.spoiler-body').slideDown('slow');
         }
     });
     //top sale block init - end

     $('#go_top').on('click', function(e) {

         $(top).animate({
             scrollTop: 0
         }, 1000);
         e.preventDefault();

     });

     //yandex map
     if ($('#map').length) {

         ymaps.ready(function() {

             myMap = new ymaps.Map('map', {
                 center: [55.769174, 37.58829],
                 zoom: 16,
                 controls: ['zoomControl']

             }, {
                 searchControlProvider: 'yandex#search'
             });
             myMap.behaviors.disable('scrollZoom');
             myMap.geoObjects
                 .add(new ymaps.Placemark([55.769174, 37.58829], {
                     balloonContent: '',
                     hintContent: ''
                 }, {
                     preset: 'islands#dotIcon',
                     iconColor: '#eb4146'
                 }));

             var documentWidth = $(window).width();

             if (documentWidth <= 1000) {

                 var position = myMap.getGlobalPixelCenter();
                 myMap.setGlobalPixelCenter([position[0] - 100, position[1]]);

             }


         });

     }

     //yandex map - end

     changeWhenResize();




 });




 $(window).on('resize', function() {

     changeWhenResize()

 });



 //thanks msgs
 function showMsg() {
     $.magnificPopup.open({
         items: {
             src: '<div id=\"thanks\" class=\"mfp-with-anim form-popup mf_popup\"><p>Спасибо, ваше сообщение отправлено. Наш менеджер скоро свяжется с вами</p></div>'
         },
         type: 'inline',
         removalDelay: 300,
         mainClass: 'mfp-fade'
     }, 0);
 }

 function showMsg2() {
     $.magnificPopup.open({
         items: {
             src: 'http://soroka-marketing.ru/spasibo.html'
         },
         type: 'ajax',
         removalDelay: 300,
         mainClass: 'mfp-fade'
     }, 0);
 }
 //thanks msgs - end

 var timer;

 $(document).on('af_complete', function(event, response) {

     if (response.success) {

         yaCounter37737740.reachGoal('SEND_MAIL');

         var form = response.form;
         // Если у формы определённый id
         if (form.attr('id') == 'case_form') {

             showMsg2();
             clearTimeout(timer);
             timer = setTimeout(function() { $.magnificPopup.close(); }, 2500);

         } else {
             showMsg();
             clearTimeout(timer);
             timer = setTimeout(function() { $.magnificPopup.close(); }, 2500);
         }



     }

 });
