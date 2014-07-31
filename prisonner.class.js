function Prisonner (id, strategy) {
    this.id = id;
    this.strategy = strategy;
    this.amount = 0;
    this.nbMatch = 0;
    this.color = '(255, 255, 255)';
}
 
Prisonner.prototype.getId = function() {
    return this.id;
};

Prisonner.prototype.setStrategy = function(strategy) {
    this.strategy = strategy;
};

Prisonner.prototype.getStrategy = function() {
    return this.strategy;
};

Prisonner.prototype.getAmount = function() {
    return this.amount;
};

Prisonner.prototype.increaseAmount = function(gain) {
    this.amount = this.amount + gain;
    this.nbMatch = this.nbMatch + 1;

    return this.amount;
};

Prisonner.prototype.getColor = function(max) {
    color = 255 - ((255 / max) * this.getAmount());
    color = color - color % 1;

    return '('+ color +', '+ color +', 255)';
}

Prisonner.prototype.getInfos = function() {
    return this.id + ' has ' +  this.amount + ' money and his strategy is : ' + this.strategy;
}
