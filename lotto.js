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

// 당첨숫자를 당첨공(HTML)에 담기
var resultDiv = document.getElementById('result');
for(var i=0 ; i<luckyNum.length; i++){
    var luckyBall = document.createElement('div');
    luckyBall.textContent = luckyNum[i];
    resultDiv.appendChild(luckyBall);
}

// 보너스 숫자를 보너스공(HTML)에 담기
var bonusDiv = document.getElementsByClassName('bonus')[0];
var bonusBall = document.createElement('div');

bonusBall.textContent = bonusNum;
bonusDiv.appendChild(bonusBall);