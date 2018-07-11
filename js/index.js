/*
* @Author: Marte
* @Date:   2018-07-11 18:17:44
* @Last Modified by:   Marte
* @Last Modified time: 2018-07-11 18:37:54
*/

 var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical',
        loop: true,
        // slidesPerView: 3,
        // spaceBetween: 30,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })