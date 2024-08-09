// задание 1
const caps = document.querySelectorAll('.cup');
const ball = document.getElementById('ball');
const correct = document.getElementById('correct');
//const incorrect = document.getElementById('incorrect');
const resultField = document.getElementById('result');
let positionBall;
let score = 0;

resultField.value = 0;

function changeBall() {
    let heightCap = document.getElementById('height').value;
    let widthCap = document.getElementById('width').value;
    let diameter = document.getElementById('diameter').value;
    if (widthCap*heightCap/1000> diameter ) {
        ball.style.width = diameter + 'px';
        ball.style.height = diameter + 'px';
    } else  {
        alert("Шарик слишком большой");
        ball.style.width = widthCap*heightCap/1000 + 'px';
        ball.style.height = widthCap*heightCap/1000 + 'px';
    }
}

function changeCap() {
    let heightCap = document.getElementById('height').value;
    let widthCap = document.getElementById('width').value;

    for( i = 0; i < 3; i ++){
        caps[i].style.width = widthCap + 'px';
        caps[i].style.height = heightCap + 'px';
    }
}

function save(){
    changeBall();
    changeCap();
    changePos();
    return true;
}

function reset(){
    correct.style.opacity = 0;
    changePos();
}

function changePos(){
    for(i = 0; i < 3; i ++)
        caps[i].querySelector('img').style.transform = '';
    positionBall = Math.floor(Math.random() * 3);
}
changePos();

caps.forEach(cap => {
    cap.addEventListener('click', function(event) {
        caps[positionBall].appendChild(ball);
       this.querySelector('img').style.transform = `translatey(${parseInt(ball.offsetWidth)*(-1) -40 + 'px'})`;
       if(this == caps[positionBall]){
            correct.textContent = "ВЕРНО";
            correct.style.color = "green";
            correct.style.opacity = 1;
            score ++;
        }
        else{
            score --;
            correct.textContent = "НЕВЕРНО";
            correct.style.color = "red";
            correct.style.opacity = 1;
        }
        resultField.value = score;
       setTimeout(reset, 1000);
    });
});


function refreshPage() {
    location.reload();
}
