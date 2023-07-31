
const blocks = document.getElementsByClassName('color-block');

const hexa = '0123456789ABCDEF';

function getRandomColor() {
    let randomColor = '';
    for (let i = 0; i < 6; i++) {
        const randomElem = Math.floor(Math.random() * 16);
        randomColor += hexa[randomElem];
    } 
    return '#' + randomColor;
}

function addColors() {
    for(let i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = getRandomColor();
        blocks[i].innerText = getRandomColor();  
        blocks[i].addEventListener('click', () => {
            const colorValue = blocks[i].innerText;
            copyToClipboard(colorValue);
            alert(`${colorValue} was copied to clipboard!`);
        }); 
    }
}
addColors();

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

function startShaking(event) {
  const block = event.target;
  block.classList.add('shake-animation');
  block.removeEventListener('mouseover', startShaking);
  block.removeEventListener('mouseleave', stopShaking);

  setTimeout(() => {
    block.classList.remove('shake-animation');
    block.addEventListener('mouseover', startShaking);
    block.addEventListener('mouseleave', stopShaking);
  }, 2000);
}

function stopShaking(event) {
    const block = event.target;
    block.classList.remove('shake-animation');
}

for (const block of blocks) {
    block.addEventListener('mouseover', startShaking);
    block.addEventListener('mouseleave', stopShaking);
}



  