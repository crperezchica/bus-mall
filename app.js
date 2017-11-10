
let clicks = 0;
let displayed = 0;
let products = [];

if (localStorage.products) {
    console.log('what products');

    //if we have products in localStorage get them, instantiate them and put them in our products array
    //Products Array is an array of object literals - they are not products
    const productsArray = JSON.parse(localStorage.products);
    console.log('productsArray:', productsArray);

    for (let i = 0; i < productsArray.length; i++) {
        const product = new Product(productsArray[i].type, productsArray[i].src, productsArray[i].voted, productsArray[i].displayed);
        console.log('current product:', product);
        console.log('products array:', products);
        products.push(product);
    }
}
else {
    //These are my instances of the new products that will run through my constructor function
    const bag = new Product('bag', './images/bag.jpg'); //img needs to be a string because we are passing it through the constructor function
    const banana = new Product('banana', './images/banana.jpg');
    const bathroom = new Product('bathroom', '/images/bathroom.jpg');
    const boots = new Product('boots', './images/boots.jpg');
    const breakfast = new Product('breakfast', './images/breakfast.jpg');
    const bubblegum = new Product('bubblegum', './images/bubblegum.jpg');
    const chair = new Product('chair', './images/chair.jpg');
    const cthulhu = new Product ('cthulhu', './images/cthulhu.jpg');
    const dog = new Product('dog', './images/dog-duck.jpg');
    const dragon = new Product('dragon', './images/dragon.jpg');
    const pen = new Product('pen', './images/pen.jpg');
    const pet = new Product('pet', './images/pet-sweep.jpg');
    const scissors = new Product('scissors', './images/scissors.jpg');
    const shark = new Product('shark', './images/shark.jpg');
    const sweep = new Product('sweep', './images/sweep.png');
    const tauntaun = new Product('tauntaun', './images/tauntaun.jpg');
    const unicorn = new Product('unicorn', './images/unicorn.jpg');
    const usb = new Product ('usb', './images/usb.gif');
    const water = new Product ('water', './images/water-can.jpg');
    const wine = new Product ('wine', './images/wine-glass.jpg');

    // const products = [bag,banana,bathroom,boots,breakfast,bubblegum,chair,cthulhu,dog,dragon,pen,pet,scissors,shark,sweep,tauntaun,unicorn,usb,water,wine];
    products = [bag,banana,bathroom,boots,breakfast,bubblegum,chair,cthulhu,dog,dragon,pen,pet,scissors,shark,sweep,tauntaun,unicorn,usb,water,wine];
}



console.log(products); //This is a good breakpoint

//removed for loop because it was causing problems down in my clickHandler function
appendRandomProduct();


const game = document.getElementById('game');
game.addEventListener('click', clickHandler);

function clickHandler (e) {
    const clickedProduct = e.target;
    if (clickedProduct.id === 'game') return;
    for (let i = 0; i < products.length; i++) {
        const productClass = clickedProduct.classList.value;
        if (products[i].type === productClass) {
            products[i].wasVoted();
            console.log('number of votes', products[i].voted);
        }
    }

    clickedProduct.remove();
    
    let game = document.getElementById('game');
    while (game.firstChild) {
        game.removeChild(game.firstChild);
    }


    appendRandomProduct();


    clicks++;
    if (clicks >=  20 ) {
        endGame();
    }
}



function appendRandomProduct (){
    const tempArray = [];
    const game = document.getElementById('game');
    do {
        const randomProduct = products[Math.floor(Math.random() * products.length)];
        console.log ('randomProduct:', randomProduct);
        console.log('temparry:', tempArray);
        if (!tempArray.includes(randomProduct)) {
            const randomProductEle = randomProduct.render();
            game.appendChild(randomProductEle);
            randomProduct.wasDisplayed();
            tempArray.push(randomProduct);
        }
    } while (tempArray.length < 3);
}


function endGame () {
    const game = document.getElementById('game');
    game.removeEventListener('click', clickHandler);
    
    console.table(products);
    drawChart(); //This will call the chart to create once the game ends. 
    localStorage.setItem('products', JSON.stringify(products));
}


function drawChart () {


    const productNames = [];
    const votedData= [];

    for (let i = 0; i < products.length; i++){
        productNames.push(products[i].type);
        votedData.push(products[i].voted);
    }
    // for ( let i = 0; i < products.length; i++) {
    //     const product = products[i];
    //     console.log(product);
    //     productNames.push(product.type);
    //     votedData.push(product.voted);
    // }
    //Product {type: "bag", src: "./images/bag.jpg", voted: 0} 
    const chartCanvas = document.getElementById('chart');
    const chartCtx = chartCanvas.getContext('2d');

    const chart = new Chart (
        chartCtx,
        {
            type:'bar',
            data: {
                labels: productNames,
                datasets: [
                    {
                        label: 'Number of votes',
                        data: votedData,
                        backgroundColor: 'rgba(255,100,20,1)'
                    }
                ]
            },
            options: {
                title:{
                    display: true,
                    text: 'Products Voted'
                }
            }
        }
    );
}


