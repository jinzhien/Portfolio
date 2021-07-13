$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $anchor.parent().addClass('on').siblings().removeClass('on'); 

    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});

$(window).scroll(function(){
    var scrollTopPos = $(window).scrollTop();
        if(scrollTopPos > 0){ 
        $("body").addClass('scroll');
    }
        else{ 
        $("body").removeClass('scroll');
    }
});

//고정 컨택 사라지게
$(function () {
    var $sec4 = $('#sec3').offset().top +100;

    $(window).scroll(function () {
        var scrollTopPos = $(window).scrollTop();
        if (scrollTopPos >= $sec4){
            $("#contact_fixed").addClass("on");
        }
        else if (scrollTopPos < $sec4){
            $("#contact_fixed").removeClass("on");
        }
    });
});

// 인터뷰
var dtnum = 0;

$("#interview dt").click(function(){
    clearInterval(autoDt);
    dtnum= $(this).data("num");
    interview(dtnum);
});

var autoDt = setInterval(function(){
                        dtnum++;
                        dtnum = dtnum % 5;
                        interview(dtnum);
                    }, 3000);

function interview(num){
    $("#interview dt").eq(num).toggleClass('on').siblings().removeClass('on');
};

// 모바일 gnb
$(document).ready(function(){
    $(".xi-bars").on('click', function(){
        $("#gnb").stop().slideToggle()
    })
})

//스크롤시 해당 메뉴바 색상 변경
/* $(function () {
    var $sec1 = $('#sec1').offset().top - 50;
    var $sec2 = $('#sec2').offset().top - 50;
    var $sec3 = $('#sec3').offset().top - 50;
    var $sec4 = $('#sec4').offset().top - 50;

    $(window).scroll(function () {
        var scrollTopPos = $(window).scrollTop();
        if (scrollTopPos >= 0 && scrollTopPos < $sec1) {
            $(".sec1_btn").removeClass("on").siblings().removeClass("on");
        }
        else if (scrollTopPos >= $sec1 && scrollTopPos < $sec2) {
            $(".sec1_btn").addClass("on").siblings().removeClass("on");
        }
        else if (scrollTopPos >= $sec2 && scrollTopPos < $sec3) {
            $(".sec2_btn").addClass("on").siblings().removeClass("on");
        }
        else if (scrollTopPos >= $sec3 && scrollTopPos < $sec4){
            $(".sec3_btn").addClass("on").siblings().removeClass("on");
        }
        else if (scrollTopPos >= $sec4){
            $(".sec4_btn").addClass("on").siblings().removeClass("on");
        }
    });
}); */


 // 배너 타이핑 애니메이션
$(function(){
    var typingBool = false; 
    var typingIdx=0; 
    var liIndex = 0;
    var liLength = $(".typing_txt>ul>li").length;
    
    // 타이핑될 텍스트를 가져온다 
    var typingTxt = $(".typing_txt>ul>li").eq(liIndex).text(); 
    //liIndex 인덱스로 구분해 한줄씩 가져옴
    
    typingTxt=typingTxt.split(""); // 한글자씩 잘라 배열로만든다
    
    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
        typingBool=true; 
        var tyInt = setInterval(typing,100); // 반복동작 
    } 
         
    function typing(){ 
      $(".typing ul li").removeClass("on");
       $(".typing ul li").eq(liIndex).addClass("on");
      //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.
      
      if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
         $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
         typingIdx++; 
       } else{ //한문장이끝나면
         if(liIndex<liLength-1){
         //다음문장으로 가기위해 인덱스를 1증가
           liIndex++; 
         //다음문장을 타이핑하기위한 셋팅
            typingIdx=0;
            typingBool = false; 
            typingTxt = $(".typing_txt>ul>li").eq(liIndex).text(); 
           
         //다음문장 타이핑전 1초 쉰다
             clearInterval(tyInt);
              //타이핑종료
         
             setTimeout(function(){
               //1초후에 다시 타이핑 반복 시작
               tyInt = setInterval(typing,100);
             },1000);
            } else if(liIndex==liLength-1){
              
             //마지막 문장까지 써지면 반복종료
               clearInterval(tyInt);
              
              //1초후
              setTimeout(function(){
                //사용했던 변수 초기화
                typingBool = false; 
                liIndex=0;
                typingIdx=-0;
                
                //첫번째 문장으로 셋팅
                typingTxt = $(".typing_txt>ul>li").eq(liIndex).text(); 
                //타이핑 결과 모두 지우기
                $(".typing ul li").html("")
                
                //반복시작
                tyInt = setInterval(typing,100);
              }, 1000);
            }
        } 
    }  
});



