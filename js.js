'use strict';


document.getElementById('CLick').addEventListener('click',function(){
    this.style.display='none';
}
)

document.getElementById('dbClick').addEventListener('dblclick',function(){
    this.style.backgroundColor='pink';
}
)

document.getElementById('hover').addEventListener('mouseover',function(){
    this.textContent='убери'; this.style.backgroundColor='pink';
}
)

document.getElementById('hover').addEventListener('mouseout',function(){
    this.textContent='наведи на меня'; this.style.backgroundColor=' rgb(0, 255, 136)';
})

document.getElementById('move').addEventListener('mousemove',function(){
    this.style.transform='scale(1.1)';
})


document.addEventListener('keydown', function(event){
        const key = event.key.toLowerCase();
        if(key==='r'){
            document.getElementById('dd').style.backgroundColor='red';
        } else if (key==='b'){
            document.getElementById('dd').style.backgroundColor='blue';
        }else if (key==='g'){
            document.getElementById('dd').style.backgroundColor='green';
        }

}
);           



let block = document.getElementById('block');
let position = {
    x: 0, 
    y: 0 
};

function move() {
    block.style.left = position.x + 'px'; 
    block.style.top = position.y + 'px';
}

window.addEventListener('keydown', function (event) {
    switch (event.key.toLowerCase()) {
        case 'w': 
            position.y -= 3;
            break;
        case 's':
            position.y += 3;
            break;
        case 'a':
            position.x -= 3;
            break;
        case 'd':
            position.x += 3;
            break;
    }
    move(); 
});