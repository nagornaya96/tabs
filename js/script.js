// window.addEventListener('load'); //js будет прогружаться, после html
window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    //Функция к/рая будет скрывать табы
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    //Скрывает все элементы кроме первого
    hideTabContent(1);

    
    function showTabContent(b) {
        //Проверяем есть ли класс hide с помощью contains
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;

        //Если мы кликнули четко на класс info-header-tab
        if (target && target.classList.contains('info-header-tab')) {

            //Цикл закончится, когда закончатся табы
            for (let i = 0; i < tab.length; i++) {

                if (target == tab[i]) {
                    //Скрываем все табы
                    hideTabContent(0);
                    //TabContent совпадает с табом
                    showTabContent(i)
                    break;
                }
            }
        }
    });
    


});