
let clicks = 0;
// let fruits = [];

// if (localStorage.products) {
//     console.log('what products');
// }

// const fruitsArray = JSON.parse(localStorage.)

//These are my instances of the new products that will run through my constructor function
const bag = new Product('bag', 'bag.jpg'); //img needs to be a string because we are passing it through the constructor function
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

const products = [bag,banana,bathroom,boots,breakfast,bubblegum,chair,cthulhu,dog,dragon,pen,pet,scissors,shark,sweep,tauntaun,unicorn,usb,water,wine];

console.log(products); //This is a good breakpoint


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
    // for (let i = 0; i < products.length; i++) {
    //     var img = [];
    //     image.parentNode.removenextSibling();

    // }
    // create a for loop to remove all of the images in the DOM
    // get all of the images
    //loop through all the images and inside of the loop I want to remove each individual image

    appendRandomProduct();


    clicks++;
    if (clicks >=  20 ) {
        endGame();
    }
}

// function appendRandomProduct (){
//     const game = document.getElementById('game');
//     const randomProduct = products[Math.floor(Math.random() * products.length)];
//     const randomProductEle = randomProduct.render(); //returns img element
//     game.appendChild(randomProductEle);
// }

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

//     for (let i = 0; i < 3; i++){
//         const randomProduct = products[Math.floor(Math.random() * products.length)];
//         if (tempArray.includes(randomProduct)){
//             i = i - 1;
//         }
//         else {
//             const randomProductEle = randomProduct.render();
//             game.appendChild(randomProductEle);
//             randomProduct.wasDisplayed();
//             tempArray.push(randomProduct);
            

//         }
//     }
// }




function endGame () {
    const game = document.getElementById('game');
    game.removeEventListener('click', clickHandler);
    
    console.table(products);
    drawChart(); //This will call the chart to create once the game ends. 
}


function drawChart () {


    const productNames = [];
    const votedData= [];

    for ( let i = 0; i < products.length; i++) {
        const product = products[i];
        console.log(product);
        productNames.push(product.type);
        votedData.push(product.voted);
    }
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


