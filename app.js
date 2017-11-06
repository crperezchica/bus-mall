
let clicks = 0;

const allProducts = [bag,banana,bathroom,boots,breakfast,bubblegum,chair,cthulhu,dog-duck,dragon,pen,pet-sweep,scissors,shark,sweep,tauntaun,unicorn,usb,water-can,wine-glass];

function Product() {
    this.name = name;
    this.src = src;
    this.votes = 0;
    this.display = 0;

    allProducts.push(this);
}

randomIndex: function {
    randomProduct=Products[Math.floor(Math.random() * products.length)];
}

const bag = new Product('bag', 'bag.jpg');
const banana = new Product('banana', 'banana.jpg');
const bathroom = new Product('bathroom', 'bathroom.jpg');
const boots = new Product('boots', 'boots.jpg');
const breakfast = new Product('breakfast', 'breakfast.jpg');
const bubblegum = new Product('bubblegum', 'bubblegum.jpg');
const chair = new Product('chair', 'chair.jpg');
const cthulhu = new Product ('cthulhu', 'cthulhu.jpg');
const dog = new Product('dog', 'dog-duck.jpg');
const dragon = new Product('dragon', 'dragon.jpg');
const pen = new Product('pen', 'pen.jpg');
const pet = new Product('pet', 'pet-sweep.jpg');
const scissors = new Product('scissors', 'scissors.jpg');
const shark = new Product('shark', 'shark.jpg');
const sweep = new Product('sweep', 'sweep.png');
const tauntaun = new Product('tauntaun', 'tauntaun.jpg');
const unicorn = new Product('unicorn', 'unicorn.jpg');
const usb = new Product ('usb', 'usb.gif');
const water = new Product ('water', 'water-can.jpg');
const wine = new Product ('wine', 'wine-glass.jpg');