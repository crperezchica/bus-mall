
function Product(type, src) {
    this.type = type;
    this.src = './images/' + src;
    this.vote = 0;
    // this.display = 0;

    // allProducts.push(this);
}

Product.prototype.wasVote = function (){
    this.vote += 1;
};

// Product.prototype.wasDisplay = function (){
//     this.display += 1;
// };

Product.prototype.render = function (){
    const ele = document.createElement('img');
    ele.src = this.src;
    ele.type=this.type;
    ele.classList.add(this.type);
    return ele;
};