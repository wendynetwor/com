$(document).ready(function(){
  // returnTop
  $('#returnTop').click(function(){
    $("html,body").animate({scrollTop:0},500);
  })

  // tab切换
  document.querySelectorAll('.selfTabMenu').forEach((menu, i) => {
    menu.querySelectorAll('.selfTabItem').forEach((item, j) => {
      // if(j == 0) $(item).addClass('curr')
      item.setAttribute('selfTab', 'selfTab-' + i + j);
    })
  });
  document.querySelectorAll('.selfTabContBox').forEach((menu, i) => {
    menu.querySelectorAll('.selfTabCont').forEach((item, j) => {
      // if(j !== 0) $(item).hide();
      item.setAttribute('selfTab', 'selfTab-' + i + j);
    })
    if($(`.selfTabCont[selfTab=${'selfTab-' + i + '0'}] .messageSwiper`).length > 0){
      const messageSwiper = new Swiper(`.selfTabCont[selfTab=${'selfTab-' + i + '0'}] .messageSwiper`, {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        scrollbar: {
          el: `.selfTabCont[selfTab=${'selfTab-' + i + '0'}] .messageScrollbar.swiper-scrollbar`,
          draggable: true,
          snapOnRelease: false
        },
        mousewheel: true,
      });
    }
  });
  $('.selfTabItem').hover(function(){
    $(this).parent().find('.curr').removeClass('curr');
    $(this).addClass('curr');
    const selfTabNo = this.getAttribute('selfTab');
    $(`.selfTabCont[selfTab=${selfTabNo}]`).parent().find('.selfTabCont').hide();
    $(`.selfTabCont[selfTab=${selfTabNo}]`).show();
    if($(`.selfTabCont[selfTab=${selfTabNo}]`).find('.swiper').length !== 0){
      const messageSwiper = new Swiper(`.selfTabCont[selfTab=${selfTabNo}] .messageSwiper`, {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        scrollbar: {
          el:`.selfTabCont[selfTab=${selfTabNo}] .messageScrollbar.swiper-scrollbar`,
          draggable: true,
          snapOnRelease: false
        },
        mousewheel: true,
      });
    }
  })
})