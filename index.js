const moleElements = document.querySelectorAll('.mole');
const scoreEle = document.getElementById('score');
let isGameInProgress = false;
let score = 0;
let gameInterval;

document.addEventListener('click', ({ target }) => {
    if (target.tagName !== 'IMG') {
        return;
    }
    target.style.display = 'none';
    score += 1;
    scoreEle.lastElementChild.lastElementChild.textContent =  score;  
});

function hideMole(ele) {
    setTimeout(() => {
        ele.style.display = 'none';
    }, getRandomTimoout())
}

function getRandomTimoout() {
   return Math.floor(Math.random() * 1000);
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

function startGame() {
    if(isGameInProgress) {
        return;
    }
    isGameInProgress = true;
     gameInterval =  setInterval(() => {
        const moleElement = moleElements[getRandomNumber()];
        if(!moleElement) {
            return;
        }
        const img = moleElement.lastElementChild;
        if(img.style.display === 'block') {
            img.style.display = 'none';
        } else {
            img.style.display = 'block'; 
        }
    }, 1500);
}
function stopGame() {
    if(!gameInterval) {
     return;
    }
    isGameInProgress = false;
    clearInterval(gameInterval);
}


function resetGame() {
    stopGame();
    score = 0;
    scoreEle.lastElementChild.lastElementChild.textContent =  score;  
    moleElements.forEach(element => {
        element.lastElementChild.style.display = 'none';
    });
}