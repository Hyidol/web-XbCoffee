$(function () {

    var banOffTop = $(".nav").offset().top;//获取到距离顶部的垂直距离
    var scTop = 0;//初始化垂直滚动的距离
    $(document).scroll(function () {
        scTop = $(this).scrollTop();//获取到滚动条拉动的距离
        // console.log(scTop);//查看滚动时，垂直方向上，滚动条滚动的距离
        if (scTop >= banOffTop+500) {
            //核心部分：当滚动条拉动的距离大于等于导航栏距离顶部的距离时，添加指定的样式
            $(".nav").addClass("navFix");
        } else {
            $(".nav").removeClass("navFix");
        }

    })

    //  //无点击效果
    //  $('.menus0 li').each(function(){
    //     $('.menus0 li').mouseover(function(){
    //         var index = $(this).index();
    //         $('.menus0 .bg').css('left',(index-1)*100+'px');
    //         $('.menus0 li').css('color','#000');
    //         $(this).css('color','#fff');
    //     });
    //     $('.menus0 li').mouseout(function(){
    //         $('.menus0 li').css('color','#000');
    //         $('.menus0 .bg').css('left','0');
    //         $('.menus0 li').eq(0).css('color','#fff');
    //     });
    // })

    // //菜单形式
    // $('.menus1 li').each(function(){
    //     var flag = 0;
    //     var i = 0;
    //     $('.menus1 li').mouseover(function(){
    //         var index = $(this).index();
    //         $('.menus1 .bg').css('left',(index-1)*100+'px');
    //         $('.menus1 li').css('color','#000');
    //         $(this).css('color','#fff');
    //         $('.menus1 li').click(function(){
    //             $('.menus1 .bg').css('left',(index-1)*100+'px');
    //             flag = (index-1)*100;
    //             i=$(this).index()-1;
    //             $(this).css('color','#fff');
    //         })
    //         $('.menus1 li').mouseout(function(){
    //             $('.menus1 .bg').css('left',flag+'px');
    //             $('.menus1 li').css('color','#000');
    //             $('.menus1 li').eq(i).css('color','#fff');
    //         });
    //     });
    // })


    // //点击选项卡形式
    // $('.menus2 li').each(function(){
    //     var flag = 0;
    //     var i = 0;
    //     $('.menus2 li').mouseover(function(){
    //         var index = $(this).index();
    //         $('.menus2 .bg').css('left',(index-1)*100+'px');
    //         $('.menus2 li').css('color','#000');
    //         $(this).css('color','#fff');
    //         $('.menus2 li').click(function(){
    //             $('.menus2 .bg').css('left',(index-1)*100+'px');
    //             flag = (index-1)*100;
    //             i=$(this).index()-1;
    //             $(this).css('color','#fff');
    //             $('.menus2 .menus-list').removeClass('show')
    //             $('.menus2 .menus-list').eq(index-1).addClass('show')
    //             $('.tab1').removeClass('show')
    //             $('.tab1').eq(index-1).addClass('show')
    //         })
    //         $('.menus2 li').mouseout(function(){
    //             $('.menus2 .bg').css('left',flag+'px');
    //             $('.menus2 li').css('color','#000');
    //             $('.menus2 li').eq(i).css('color','#fff');
    //         });
    //     });
    // })

    // //移入型选项卡
    // $('.menus3 li').each(function(){
    //     $('.menus3 li').mouseover(function(){
    //         var index = $(this).index();
    //         $('.menus3 .bg').css('left',(index-1)*100+'px');
    //         $('.menus3 li').css('color','#000');
    //         $(this).css('color','#fff');
    //         $('.tab2').removeClass('show')
    //         $('.tab2').eq(index-1).addClass('show')
    //     });
    // })
})