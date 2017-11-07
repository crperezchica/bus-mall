
// let clicks = 0;


const bag = new Product('bag', 'bag.jpg');
const banana = new Product('banana', 'banana.jpg');
const bathroom = new Product('bathroom', 'bathroom.jpg');

const products = [bag,banana,bathroom];

function Product(type, src) {
    this.type = type;
    this.src = './images/' + src;
    this.vote = 0;
    this.display = 0;

    // allProducts.push(this);
}


// randomIndex: function {
//     randomProduct=Products[Math.floor(Math.random() * products.length)];
// }
Product.prototype.wasVote = function (){
    this.vote += 1;
};

Product.prototype.wasDisplay = function (){
    this.display += 1;
};

Product.prototype.render = function (){
    const ele = document.createElement('img');
    ele.src = this.src;
    ele.name=this.name;
    // ele.classList.add(this.type);
    return ele;
};





// for (let i = 0; i < 3; i++){
//     appendProduct();
// }

const focusgroup = document.getElementById('focusgroup');

function appendRandomProduct (){
    const focusGroup = document.getElementById('focusGroup');
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const randomProductEle = randomProduct.render(); //returns img element
    focusgroup.appendChild(randomProductEle);
}



appendRandomProduct();


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