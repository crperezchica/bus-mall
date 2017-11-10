
//constructor function for product options
function Product(type, src, voted) {
    this.type = type;
    // this.src = './images/' + src;
    this.src = src;
    this.voted = voted || 0;
    // this.voted = 0;
    this.displayed = 0;

    // allProducts.push(this);
}

Product.prototype.wasVoted = function (){
    this.voted += 1;
};

Product.prototype.wasDisplayed = function (){
    this.displayed += 1;
};

Product.prototype.render = function (){
    // const selectSurvey = document.getElementById('game');
    const ele = document.createElement('img');
    ele.src = this.src;
    ele.type=this.type;
    ele.classList.add(this.type);
    // selectSurvey.appendChild('img');
    return ele;
};



























