$(function(){

    var timeout = false;
    var myTimeout;
    $('body').on('click', '.js-add-favorite', function (e) {
        e.preventDefault();

        $(this).toggleClass('is-selected')

        if ($(this).hasClass('is-selected')) {
            $('.js-site-msgs span').first().text('Закупка добавлена в «Избранное»');
        } else {
            $('.js-site-msgs span').first().text('Закупка удалена');
        }

        $('.js-site-msgs').addClass('is-show');

        if (timeout) {
            clearTimeout(myTimeout);
            myTimeout = null;
            myTimeout = setTimeout(hideMessage, 10000);
            timeout = true;

        } else {
            myTimeout = setTimeout(hideMessage, 10000);
            timeout = true;
        }

        function hideMessage() {
            $('.js-site-msgs').addClass('is-animate-hide');
            setTimeout(function(e) {
                $('.js-site-msgs').removeClass('is-animate-hide is-show');
            }, 210)
        }
    })

    var timeout2 = false;
    var myTimeout2;
    $('body').on('click', '.js-remove-saved-searches', function (e) {
        e.preventDefault();
        $('.js-site-msgs span').first().text('Шаблон удален');
        $('.js-site-msgs').addClass('is-show');

        if (timeout2) {
            clearTimeout(myTimeout2);
            myTimeout2 = null;
            myTimeout2 = setTimeout(hideMessage2, 10000);
            timeout2 = true;

        } else {
            myTimeout2 = setTimeout(hideMessage2, 10000);
            timeout2 = true;
        }

        function hideMessage2() {
            $('.js-site-msgs').addClass('is-animate-hide');
            setTimeout(function(e) {
                $('.js-site-msgs').removeClass('is-animate-hide is-show');
            }, 210)
        }
    })

    $('body').on('click', '.js-language', function (e) {
        e.preventDefault();
        $('.js-language-list').fadeToggle()
        $('<div class="language-overlay js-language-close"></div>').appendTo('body');
    })

    $('body').on('click', '.js-language-close', function (e) {
        console.log('11')
        e.preventDefault();
        $('.js-language-list').fadeToggle()
        $('.js-language-close').remove()
    })

    $('body').on('click', '.js-settings', function(e){
        e.preventDefault();
        $('.js-sidebar').toggleClass('is-opened');
    })

    var timeout3 = false;
    var myTimeout3;
    $('body').on('click', '.js-mobile-save-search-template' ,function(e){
        e.preventDefault();
        $('.js-site-msgs').toggleClass('is-show');
        if ($(this).hasClass('is-added')) {
            $(this).toggleClass('is-added')
        } else {
            $(this).toggleClass('is-added')
        }

        if (timeout3) {
            clearTimeout(myTimeout3);
            myTimeout3 = null;
            myTimeout3 = setTimeout(hideMessage3, 10000);
            timeout3 = true;

        } else {
            myTimeout3 = setTimeout(hideMessage3, 10000);
            timeout3 = true;
        }

        function hideMessage3() {
            $('.js-site-msgs').addClass('is-animate-hide');
            setTimeout(function(e) {
                $('.js-site-msgs').removeClass('is-animate-hide is-show');
            }, 210)
        }
    })


    var timeout4 = false;
    var myTimeout4;
    $('body').on('click', '.js-save-search-template' ,function(e){
        e.preventDefault();
        $('.js-site-msgs').toggleClass('is-show');
        if ($(this).hasClass('is-added')) {
            $(this).toggleClass('is-added')
            $(this).removeClass('btn-white').addClass('btn-blue');
            $(this).html('<span class="icon icon-star-white"></span> Сохранить шаблон поиска')
        } else {
            $(this).toggleClass('is-added')
            $(this).removeClass('btn-blue btn-blue-gradient').addClass('btn-white')
            $(this).html('Шаблон сохранен')
        }

        if (timeout4) {
            clearTimeout(myTimeout4);
            myTimeout4 = null;
            myTimeout4 = setTimeout(hideMessage4, 10000);
            timeout4 = true;

        } else {
            myTimeout4 = setTimeout(hideMessage4, 10000);
            timeout4 = true;
        }

        function hideMessage4() {
            $('.js-site-msgs').addClass('is-animate-hide');
            setTimeout(function(e) {
                $('.js-site-msgs').removeClass('is-animate-hide is-show');
            }, 210)
        }
    })


    var timeout5 = false;
    var myTimeout5;
    $('body').on('click', '.js-save-favorite' ,function(e){
        e.preventDefault();
        if ($(this).hasClass('is-added')) {
            $(this).toggleClass('is-added')
            $(this).removeClass('btn-white').addClass('btn-blue')
            $(this).html('<span class="icon icon-star-white"></span> Добавить в избранное')
        } else {
            $(this).toggleClass('is-added')
            $(this).removeClass('btn-blue').addClass('btn-white')
            $(this).html('В избранном')
        }

        $('.js-site-msgs').addClass('is-show');

        if ($(this).hasClass('is-added')) {
            $('.js-site-msgs span').first().text('Закупка добавлена в «Избранное»');
        } else {
            $('.js-site-msgs span').first().text('Закупка удалена');
        }


        if (timeout5) {
            clearTimeout(myTimeout5);
            myTimeout5 = null;
            myTimeout5 = setTimeout(hideMessage5, 10000);
            timeout5 = true;

        } else {
            myTimeout5 = setTimeout(hideMessage5, 10000);
            timeout5 = true;
        }

        function hideMessage5() {
            $('.js-site-msgs').addClass('is-animate-hide');
            setTimeout(function(e) {
                $('.js-site-msgs').removeClass('is-animate-hide is-show');
            }, 210)
        }
    })

    $('body').on('click', '.js-close-site-message', function(e){
        $('.js-site-msgs').addClass('is-animate-hide');
        setTimeout(function(e) {
            $('.js-site-msgs').removeClass('is-animate-hide is-show');
        }, 210)
    })

    $('body').on('click', '.js-alerts', function(e) {
        e.preventDefault();
        $(this).toggleClass('is-selected');
        if ($(this).hasClass('is-selected')) {
            $(this).text('Выключить уведомления')
        } else {
            $(this).text('Включить уведомления')
        }
    })


    // GROUP FIELDS
    $('body').on('focus', '.js-group-fields input', function (e) {
        $(this).parents('.js-group-fields').addClass('is-focused')
    })

    $('body').on('focusout', '.js-group-fields input', function (e) {
        $(this).parents('.js-group-fields').removeClass('is-focused')
    })

    $('body').on('keyup', '.js-group-fields input', function (e) {
        if ($(this).val() != '') {
            $(this).next('.js-clear-input').addClass('is-active')
        } else {
            $(this).next('.js-clear-input').removeClass('is-active')
        }
    })

    $('body').on('change', '.js-group-fields input', function (e) {
        if ($(this).val() != '') {
            $(this).next('.js-clear-input').addClass('is-active')
        } else {
            $(this).next('.js-clear-input').removeClass('is-active')
        }
    })

    $('body').on('click', '.js-clear-input', function (e) {
        e.preventDefault();
        $(this).prev('input').val('')
        $(this).removeClass('is-active')
    })

    // Popup
    $('body').on('click', '.js-popup-link', function(e){
        e.preventDefault();
        let popupID = $(this).data('popup-id');
        $('.js-popup[data-popup-id="' + popupID + '"]').addClass('is-opened');
        if (popupID == 'filter') {
            $('.popup__title').text('Фильтры');
        } else {
            $('.popup__title').text('Вход или регистрация');
        }
        $('body').addClass('is-popup-opened');
    })

    $('body').on('click', '.js-popup-close', function(e){
        e.preventDefault();
        $('body').addClass('is-popup-closed'); 
        setTimeout(function(e){
            $('body').removeClass('is-popup-opened is-popup-closed'); 
            $('.js-popup').removeClass('is-opened');
            if ($('.js-auth-steps').length) {
                $('.js-auth-steps').removeClass('is-active');
                $('.js-auth-step-1').addClass('is-active')
                $('.popup__title').text('Вход');
            }
        }, 250)
    })

    $('body').on('click', '.js-popup-filter-reset', function(e){
        e.preventDefault();
        $('.filter-form').trigger('reset')
    })


    // profile form
    $('.js-profile-form').on('keyup', function(e) {
        $('.js-profile-form input').each(function(e){
            if ($(this).val() == '') {
                $('.js-profile-form-btn').attr('disabled', 'disabled')
                return false;
            } else {
                $('.js-profile-form-btn').attr('disabled', false)
            }
        })
    })


    // notify form
    $('.js-notify-form').on('change', function(e){
        $('.js-notify-btn').attr('disabled', false)
    })


    // password form
    $('.js-password-form').on('keyup', function(e){
        if ($('.js-old-password').val() != '') {
            let newPass = $('.js-new-password').val();
            let repeatPass = $('.js-repeat-password').val();

            if (newPass == repeatPass) {
                $('.js-password-btn').attr('disabled', false);
            } else {
                $('.js-password-btn').attr('disabled', 'disabled');
            }
        }
    })


    // show pass
    $('body').on('click', '.js-show-pass', function(e){
        if ($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
            $(this).prev('input').prop('type','password')
        } else {
            $(this).prev('input').prop('type','text');
            $(this).addClass('is-active');
        }
    });


    // AUTH
    $('body').on('click', '.js-auth-login', function(e){
        e.preventDefault();
        $('.js-auth-steps').removeClass('is-active');
        $('.js-auth-step-auth-1').addClass('is-active');
        $('.popup__title').text('Вход');
        $('.js-auth-steps.is-active').find('input').first().focus();
    })

    $('body').on('click', '.js-auth-login-password', function(e){
        e.preventDefault();
        if ($('#auth-email').val() == 'startsevdev@gmail.com') {
            $('.js-auth-steps').removeClass('is-active');
            $('.js-auth-step-auth-2-1').addClass('is-active');
            $('.popup__title').text('Регистрация');
            $('.js-auth-steps.is-active').find('input').first().focus();
        } else {
            $('.js-auth-steps').removeClass('is-active');
            $('.js-auth-step-auth-2').addClass('is-active');
            $('.popup__title').text('Вход');
            $('.js-auth-steps.is-active').find('input').first().focus();
        }
    })

    $('body').on('click', '.js-password-recovery', function(e) {
        e.preventDefault();
        $('.js-auth-steps').removeClass('is-active');
        $('.js-password-recovery-1').addClass('is-active');
        $('.js-auth-steps.is-active').find('input').first().focus();
        $('.popup__title').text('Восстановление доступа');
    });
    
    $('body').on('click', '.js-auth-register', function(e) {
        e.preventDefault();
        $('.js-auth-steps').removeClass('is-active');
        $('.js-reg-step-1').addClass('is-active');
        $('.js-auth-steps.is-active').find('input').first().focus();
        $('.popup__title').text('Регистрация');
    });

    $('body').on('click', '.js-reg-password', function(e) {
        e.preventDefault();
        $('.js-auth-steps').removeClass('is-active');
        $('.js-reg-step-2').addClass('is-active');
        $('.js-auth-steps.is-active').find('input').first().focus();
    });

    $('body').on('click', '.js-reg-finish', function(e) {
        e.preventDefault();
        $('.js-auth-steps').removeClass('is-active');
        $('.js-reg-step-3').addClass('is-active');
        $('.js-auth-steps.is-active').find('input').first().focus();
    });

    
    


    $('.js-auth-login-form').on('keyup', function(e){
        $('.js-auth-login-form input').each(function(e){
            if ($(this).val() == '') {
                $('.js-auth-login-password').attr('disabled', 'disabled')
                return false;
            } else {
                $('.js-auth-login-password').attr('disabled', false)
            }
        })
    })

    $('.js-auth-login-form-password').on('keyup', function(e){
        $('.js-auth-login-form-password input').each(function(e){
            if ($(this).val() == '') {
                $('.js-auth-login-finish').attr('disabled', 'disabled')
                return false;
            } else {
                $('.js-auth-login-finish').attr('disabled', false)
            }
        })
    })

    $('.js-reg-form').on('keyup', function(e){
        $('.js-reg-form input').each(function(e){
            if ($(this).val() == '') {
                $('.js-reg-password').attr('disabled', 'disabled')
                return false;
            } else {
                $('.js-reg-password').attr('disabled', false)
            }
        })
    })

    $('.js-reg-form-password').on('keyup', function(e){
        $('.js-reg-form input').each(function(e){
            if ($(this).val() == '') {
                $('.js-reg-finish').attr('disabled', 'disabled')
                return false;
            } else {
                $('.js-reg-finish').attr('disabled', false)
            }
        })
    })

    $('body').on('click', '.js-search-btn', function (e){
        $('.js-tender-search').find('input').focus()
    })


    if ($('.js-select').length) {
        $('.js-select').each(function (){
            $(this).select2({
                minimumResultsForSearch: -1,
                placeholder: $(this).data('placeholder')
            });
        })
    }

    if ($('.js-popup .js-date-from').length) {
        $('.js-popup .js-date-from').datepicker({dateFormat: 'dd.mm.yy'});
        $('.js-popup .js-date-to').datepicker({dateFormat: 'dd.mm.yy'});
        $('.js-popup .js-date-2-from').datepicker({dateFormat: 'dd.mm.yy'});
        $('.js-popup .js-date-2-to').datepicker({dateFormat: 'dd.mm.yy'});

        $('.js-popup .js-date-2-from').on('change', function (e) {
            let dateFrom = $('.js-popup .js-date-2-from').val();
            $('.js-popup .js-date-2-to').datepicker('option', 'minDate', dateFrom);
            $('.js-popup .js-date-from').datepicker('option', 'maxDate', dateFrom);
            $('.js-popup .js-date-to').datepicker('option', 'maxDate', dateFrom);
        })

        $('.js-popup .js-date-from').on('change', function (e) {
            let dateFrom = $('.js-popup .js-date-from').val();
            $('.js-popup .js-date-to').datepicker('option', 'minDate', dateFrom);
        })

        $('.js-popup .js-date-to').on('change', function (e) {
            let dateFrom = $('.js-popup .js-date-from').val();
            $('.js-popup .js-date-from').datepicker('option', 'maxDate', dateFrom);
            $('.js-popup .js-date-2-to').datepicker('option', 'maxDate', dateFrom);
            $('.js-popup .js-date-2-from').datepicker('option', 'maxDate', dateFrom);
        })

        $('.js-popup .js-date-2-to').on('change', function (e) {
            let dateFrom = $('.js-popup .js-date-2-to').val();
            $('.js-popup .js-date-2-from').datepicker('option', 'maxDate', dateFrom);
        })
    }

    if ($('.js-sidebar .js-date-from').length) {
        $('.js-sidebar .js-date-from').datepicker({dateFormat: 'dd.mm.yy'});
        $('.js-sidebar .js-date-to').datepicker({dateFormat: 'dd.mm.yy'});
        $('.js-sidebar .js-date-2-from').datepicker({dateFormat: 'dd.mm.yy'});
        $('.js-sidebar .js-date-2-to').datepicker({dateFormat: 'dd.mm.yy'});

        $('.js-sidebar .js-date-2-from').on('change', function (e) {
            let dateFrom = $('.js-sidebar .js-date-2-from').val();
            $('.js-sidebar .js-date-2-to').datepicker('option', 'minDate', dateFrom);
            $('.js-sidebar .js-date-from').datepicker('option', 'maxDate', dateFrom);
            $('.js-sidebar .js-date-to').datepicker('option', 'maxDate', dateFrom);
        })

        $('.js-sidebar .js-date-from').on('change', function (e) {
            let dateFrom = $('.js-sidebar .js-date-from').val();
            $('.js-sidebar .js-date-to').datepicker('option', 'minDate', dateFrom);
        })

        $('.js-sidebar .js-date-to').on('change', function (e) {
            let dateFrom = $('.js-sidebar .js-date-from').val();
            $('.js-sidebar .js-date-from').datepicker('option', 'maxDate', dateFrom);
            $('.js-sidebar .js-date-2-to').datepicker('option', 'maxDate', dateFrom);
            $('.js-sidebar .js-date-2-from').datepicker('option', 'maxDate', dateFrom);
        })

        $('.js-sidebar .js-date-2-to').on('change', function (e) {
            let dateFrom = $('.js-sidebar .js-date-2-to').val();
            $('.js-sidebar .js-date-2-from').datepicker('option', 'maxDate', dateFrom);
        })
    }

    const appHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight)
    appHeight();


    if ($(document).width() > 992) {
        if ($('.js-more-wrap').length) {
            $('.js-more-wrap').on('scroll', function (){
                let scrollTop = $('.js-more-wrap').scrollTop();
                let jsMore = $('.js-more-last').offset().top;
                if ($(this).hasClass('js-more-favorites')) {
                    if (jsMore < 400) {
                        let template = '<div class="tenders-loaded-more js-more">\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite is-selected"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite is-selected"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite is-selected"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite is-selected"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite is-selected"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite is-selected"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite is-selected"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite is-selected"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite is-selected"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite is-selected"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                        </div>'

                        $(template).insertAfter('.js-more');
                        $('.js-more').removeClass('js-more-last')
                        $('.js-more').last().addClass('js-more-last')
                    }
                } else {
                    if (jsMore < 400) {
                        let template = '<div class="tenders-loaded-more js-more">\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                        </div>'

                        $(template).insertAfter('.js-more');
                        $('.js-more').removeClass('js-more-last')
                        $('.js-more').last().addClass('js-more-last')
                    }
                }
            })
        }

    } else {
        if ($('.js-more-wrap').length) {
            $(window).on('scroll', function () {
                let scrollTop = $(window).scrollTop();
                let jsMore = $('.js-more-last').offset().top;

                if ($(this).hasClass('js-more-favorites')) {
                    if (jsMore - scrollTop < 200) {
                        let template = '<div class="tenders-loaded-more js-more">\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite is-selected"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite is-selected"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite is-selected"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite is-selected"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite is-selected"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite is-selected"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite is-selected"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite is-selected"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite is-selected"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite is-selected"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                        </div>'

                        $(template).insertAfter('.js-more-last');
                        $('.js-more').removeClass('js-more-last')
                        $('.js-more').last().addClass('js-more-last')
                    }
                } else {
                    if (jsMore - scrollTop < 200) {
                        let template = '<div class="tenders-loaded-more js-more">\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="tender-item">\n' +
                            '                                <a href="purchases_12345.html" class="tender-item__link"></a>\n' +
                            '                                <div class="tender-item__info">\n' +
                            '                                    <div class="tender-item__company">АО OLMALIQ KON-METALLURGIYA KOMBINATI</div>\n' +
                            '                                    <div class="tender-item__title">Организация питания в объекте Рудоуправление «Ангрен» </div>\n' +
                            '                                    <div class="tender-item__meta">\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Тип:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Аукцион</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Завершится:</div>\n' +
                            '                                            <div class="tender-item__meta-info">07.04.2022 в 16:14</div>\n' +
                            '                                        </div>\n' +
                            '\n' +
                            '                                        <div class="tender-item__meta-item">\n' +
                            '                                            <div class="tender-item__meta-title">Страна:</div>\n' +
                            '                                            <div class="tender-item__meta-info">Узбекистан</div>\n' +
                            '                                        </div>\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__price-mobile">\n' +
                            '                                        12,739,356,000 UZS\n' +
                            '                                    </div>\n' +
                            '                                    <div class="tender-item__url">\n' +
                            '                                        <a href="https://tenderweek.com" target="_blank">tenderweek.com</a>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__price">\n' +
                            '                                    12,739,356,000 UZS\n' +
                            '                                    <div>Сумма контракта</div>\n' +
                            '                                </div>\n' +
                            '                                <div class="tender-item__favorite">\n' +
                            '                                    <button class="btn btn-favorite js-add-favorite"></button>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                        </div>'

                        $(template).insertAfter('.js-more-last');
                        $('.js-more').removeClass('js-more-last')
                        $('.js-more').last().addClass('js-more-last')
                    }
                }
            })
        }
    }


    $('.header-search').parents('form').on('submit', function (e) {
        e.preventDefault();
        window.location.replace("purchases.html");
    })
})

// AUTOCOMPLETE
$( function() {
    var availableTags = [
        "Какао",
        "Клавиатура",
        "Кофе",
        "Кресло",
        "Канада",
    ];
    $( ".header-search" ).autocomplete({
        source: availableTags,
        position: { my: "left top+4", at: "left bottom", collision: "none" }
    });
} );

// SHOW HIDE PASS
$(function () {
    $('body').on('click', '.js-show-hide-password', function (e) {
        e.preventDefault();
        if ($(this).hasClass('is-active')) {
            $('.js-field-pass').attr('type','password')
            $(this).removeClass('is-active')
        } else {
            $('.js-field-pass').attr('type','text')
            $(this).addClass('is-active')
        }
    })
})