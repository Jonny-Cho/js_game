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

// 비동기함수 클로저문제 해결
for(var i=0; i<luckyNum.length; i++){
    (function(j){
        setTimeout(function callback(){
            var luckyBall = document.createElement('div');
            luckyBall.textContent = luckyNum[j];
            var bg;
            if(luckyNum[j]<=10){
                bg = 'red';
            } else if (luckyNum[j]<=20) {
                bg = 'orange';
            } else if (luckyNum[j]<=30) {
                bg = 'yellow';
            } else if (luckyNum[j]<=40) {
                bg = 'blue';
            } else {
                bg = 'green';
            }
            luckyBall.style.background = bg;
            resultDiv.appendChild(luckyBall);
        }, j*1000);
    })(i);
}

// 보너스 숫자를 보너스공(HTML)에 담기

setTimeout(function(){
    var bonusDiv = document.querySelector('.bonus')[0];
    var bonusBall = document.createElement('div');
    bonusBall.textContent = bonusNum;
    var bg;
    if(bonusNum<=10){
        bg = 'red';
    } else if (bonusNum<=20) {
        bg = 'orange';
    } else if (bonusNum<=30) {
        bg = 'yellow';
    } else if (bonusNum<=40) {
        bg = 'blue';
    } else {
        bg = 'green';
    }
    bonusBall.style.background = bg;
    bonusDiv.appendChild(bonusBall);
}, 6000);