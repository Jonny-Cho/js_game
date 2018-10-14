// 후보군 숫자 45개 생성하기
var num45 = Array(45)
    .fill()
    .map(function(element, index){
        return index+1;
    });
console.log(num45);

// 섞기
var shuffle = [];
while(num45.length>0){
    var moveNum = num45.splice(Math.floor(Math.random() * num45.length),1)[0];
    shuffle.push(moveNum);
}
console.log(shuffle);

// 보너스 숫자
var bonusNum = shuffle[shuffle.length - 1];

// 당첨숫자 (오름차순 정렬)
var luckyNum = shuffle.slice(0, 6);
console.log('당첨숫자', luckyNum.sort((p,c)=>(p-c)), '보너스', bonusNum);

// 당첨숫자를 당첨공(HTML)에 담기 1초에 하나씩
var resultDiv = document.querySelector('#result');

// for(var i=0 ; i<luckyNum.length; i++){
//     setTimeout(function callback(){
//         var luckyBall = document.createElement('div');
//         luckyBall.textContent = luckyNum[i];
//         resultDiv.appendChild(luckyBall);
//     }, 1000);
// }

function colorize(num, element){
    var bg;
    if(num<=10){
        bg = 'red';
    } else if (num<=20) {
        bg = 'orange';
    } else if (num<=30) {
        bg = 'yellow';
    } else if (num<=40) {
        bg = 'skyblue';
    } else {
        bg = 'green';
    }
    element.style.background = bg;
}

// 비동기함수 클로저문제 해결
for(var i=0; i<luckyNum.length; i++){
    (function(j){
        setTimeout(function callback(){
            var luckyBall = document.createElement('div');
            luckyBall.textContent = luckyNum[j];
            colorize(luckyNum[j], luckyBall);
            resultDiv.appendChild(luckyBall);
        }, j*1000);
    })(i);
}

// 보너스 숫자를 보너스공(HTML)에 담기

var bonusDiv = document.querySelector('.bonus');
setTimeout(function(){
    var bonusBall = document.createElement('div');
    bonusBall.textContent = bonusNum;
    colorize(bonusNum, bonusBall);
    bonusDiv.appendChild(bonusBall);
}, 6000);