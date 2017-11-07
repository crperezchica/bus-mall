
let clicks = 0;


const bag = new Product('bag', 'bag.jpg');
const banana = new Product('banana', 'banana.jpg');
const bathroom = new Product('bathroom', 'bathroom.jpg');

const products = [bag,banana,bathroom];

for (let i = 0; i < 6; i++){
    appendRandomProduct();
}

const game = document.getElementById('game');
game.addEventListener('click', clickHandler);

function clickHandler (e) {
    const clickedProduct = e.target;
    if (clickedProduct.id === 'focusgroup') return;
    for (let i = 0; i < products.length; i++) {
        const productClass = clickedProduct.classList.value;
        if (products[i].type === productClass) {
            products[i].wasVote();
            console.log('number of votes', products[i].vote);
        }
    }

}

clickedProduct.remove();

appendRandomProduct();

clicks++;
if (clicks >=5) {
    endGame();
}

function appendRandomProduct (){
    const game = document.getElementById('game');
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const randomProductEle = randomProduct.render(); //returns img element
    game.appendChild(randomProductEle);
}


function endGame () {
    const game = document.getElementById('game');
    game.removeEventListener('click', clickHandler);
    console.table(products);
}



// boots,breakfast,bubblegum,chair,cthulhu,dog,dragon,pen,pet,scissors,shark,sweep,tauntaun,unicorn,usb,water,wine

// const boots = new Product('boots', 'boots.jpg');
// const breakfast = new Product('breakfast', 'breakfast.jpg');
// const bubblegum = new Product('bubblegum', 'bubblegum.jpg');
// const chair = new Product('chair', 'chair.jpg');
// const cthulhu = new Product ('cthulhu', 'cthulhu.jpg');
// const dog = new Product('dog', 'dog-duck.jpg');
// const dragon = new Product('dragon', 'dragon.jpg');
// const pen = new Product('pen', 'pen.jpg');
// const pet = new Product('pet', 'pet-sweep.jpg');
// const scissors = new Product('scissors', 'scissors.jpg');
// const shark = new Product('shark', 'shark.jpg');
// const sweep = new Product('sweep', 'sweep.png');
// const tauntaun = new Product('tauntaun', 'tauntaun.jpg');
// const unicorn = new Product('unicorn', 'unicorn.jpg');
// const usb = new Product ('usb', 'usb.gif');
// const water = new Product ('water', 'water-can.jpg');
// const wine = new Product ('wine', 'wine-glass.jpg');