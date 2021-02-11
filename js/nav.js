$(function(){
    alert('제이쿼리 실행');
});
// jQuery(function{

// });
;(function($){ // 매개변수(받을인자)

})(jQuery);    // 아규먼트(전달인자)



var nav = {
    init:function(){
        this.navFn();
    },
    navFn:function(){
        var $mainBtn = document.getElementsByClassName('main-btn');
        var $sub     = document.getElementsByClassName('sub');
        var $navArea = document.getElementsByClassName('nav-area');

            //1. $mainBtn 요소 배열처리 : [].slice.call($mainBtn)
            //2. 배열 변수에 대입
            $mainBtn = [].slice.call($mainBtn);

            //3. forEach(function(1요소,2인덱스,3배열){})
            // $mainBtn.forEach();
            // $mainBtn.forEach(function(){});
            $mainBtn.forEach(function(el,idx,arr){
                $mainBtn[idx].addEventListener('mouseenter',function(event){
                    event.preventDefault();
                    // this.classList.add('on');   // 제이쿼리 : addClass('on')
                    for (i=0;i<=3;i++){
                        $mainBtn[i].classList.remove('on');
                        $sub[i].classList.remove('on');
                        }
        
                        $mainBtn[idx].classList.add('on'); 
                        $sub[idx].classList.add('on');
                    
                },false);
    
            });


            // 마우스 이벤트로 반복문 처리 안된다.
            // 그래서 li.$navArea 영역 개체를 객체 배열처리 한다.
            // 객체를 배열로 처리하는건 Array.prototype.slice.call(객체)
            //      ㄴ 같은 말 :                    [].slice.call(객체)
            // 그리고 객체 배열 반복문(forEach())을 활용한다.

            // var obj = {irum:'김유신'}; // 객체 선언 리터럴 방식
            // var arr = ['김유신','이순신','김좌진']; // 배열 선언 리터럴 방식
            //     console.log(arr[0]);

            // li .$navArea 영역을 떠나면 메인메뉴, 서브메뉴 모든 클래스 삭제

            // 1. 배열처리 [].slice.call(클래스요소);   
            
            $navArea = [].slice.call($navArea); // 클래스 요소 배열처리
            console.log($navArea); // 배열 결과 값 확인

            // 2. 반복 처리 배열처리된변수.forEach(function(){});
            $navArea.forEach(function(el, idx){
                $navArea[idx].addEventListener('mouseleave',function(){
                    $mainBtn[idx].classList.remove('on');
                    $sub[idx].classList.remove('on');
                     },false);
            });





    }
};

nav.init();





var nav = {
    init:function(){
        this.navFn();
        this.forFn();
    },
    navFn:function(){
    },
    forFn:function(){ // 반복문 알고리즘
            // 1~100 까지 출력하는 반복문 n씩 증가
            for( var i=1; i<=100; i+=3 ){
            console.log( i );
        }
        //짝수(Even)
        for( var i=2; i<=100; i+=2 ){ // 2 4 6 ... 100
            console.log( '짝수 :' + i );
        }
        //홀수(Odd)
        for( var i=1; i<=100; i+=2 ){ // 1 3 5 ... 99
            console.log( '홀수 :' + i );
        }

        //5의 배수
        for(var i=5; i<=100; i+=5 ){
            console.log( `5의배수 : ${ i }` );
        }

        // //구구단 2단
        // for(var i=1; i<=9; i++){
        //     console.log( `2 * ${i} = ${2*1}` );
        //     // console.log( '2 * ' + i + ' = ' + (2*1) );
        // }

        // //구구단 3단
        // for(var i=1; i<=9; i++){
        //     console.log( `3 * ${i} = ${3*1}` );
        //     // console.log( '3 * ' + i + ' = ' + (3*1) );
        // }

        var cnt = 0;
        var txt = '';
        var $outTable = document.querySelector('#out-table');

        // 구구단 2~9단
        for(var i=2; i<=9; i++){     //2   3   4   ... 9
            txt = txt + `<tr><th> ${i} 단 </th></tr>`;
            // txt = txt + '<tr><td>' + i + '단</td></tr>';
            for(var j=1; j<=9; j++){ //1~9 1~9 1~9 ... 1~9
                cnt++; // 반복 횟수 누적 합
                var x = (i*j) < 10 ? ('0' + (i*j)) : (i*j);
                
                txt += `<tr><td> ${i} * ${j} = ${x} </td></tr>`;
                // txt += '<tr><td>' + i + '*' + j + '=' + x + '</td></tr>';
            }
        }

        // console.log(txt);
        // $outTable.innerHTML = txt;

        txt=''; // 변수 내용 삭제

        // 구구단 2 ~ 9 가로 출력
        for(var j=1; j<=9; j++){     // 1 ~ 9 : 줄시작
            txt+='<tr>';
            for(var i=2; i<=9; i++){ // 2 ~ 9 : 8칸 
                var x = (i*j) < 10 ? ('0'+(i*j)) : (i*j);
                txt += '<td>' + i + '*' + j + '=' + (x) + '</td>';
            }
            txt+='</tr>'; // 줄끝
        }
        // $outTable.innerHTML = txt;
    }
};


nav.init(); //로딩시
