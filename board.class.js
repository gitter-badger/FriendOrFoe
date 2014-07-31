function Board (prisonners) {
    this.prisonners = prisonners;
    this.matrix = { 
        "friend,friend" : [5,     5],
        "friend,foe"    : [0,    10],
        "foe,friend"    : [10,    0],
        "foe,foe"       : [0,     0]
    };
    this.richest = 0;
    this.poorest = 0;
}

Board.prototype.init = function(nbPrisonners) {
    var prisonners = [];
    var strategies = ['friend', 'foe', 'foe', 'foe'];

    for (var i = 0; i < nbPrisonners; i++) {
        var choosenStrategy = strategies[randomIntFromInterval(0, (strategies.length-1))];
        var prisonner = new Prisonner(i, choosenStrategy);

        prisonners.push(prisonner);
    };

    this.prisonners = prisonners;
};    

Board.prototype.getPrisonners = function() {
    return this.prisonners;
};

Board.prototype.play = function() {
    var prisonners = shuffle(this.prisonners);
    var res = [];

    maxLength = prisonners.length;
    for (var i = 0; i < maxLength > 0; i = i + 2) {
        playerA = prisonners[i];
        playerB = prisonners[i+1];
        rewards = this.fight(playerA, playerB);

        playerA.increaseAmount(rewards[0]);
        playerB.increaseAmount(rewards[1]);

        rewards = this.setExtreme(playerA, playerB);
 
        res.push(playerA);
        res.push(playerB);
    }

    this.prisonners = res;
}

Board.prototype.fight = function(playerA, playerB) {

    return this.matrix[playerA.getStrategy()+','+playerB.getStrategy()]
}

Board.prototype.setExtreme = function(playerA, playerB){
    amountA = playerA.getAmount();
    amountB = playerB.getAmount();

    if (this.poorest > amountA){
        this.poorest = amountA;
    }

    if (this.poorest > amountB){
        this.poorest = amountB;
    }

    if (this.richest < amountA){
        this.richest = amountA;
    }

    if (this.richest < amountB){
        this.richest = amountB;
    }
}

Board.prototype.getExtreme = function(){
    return [this.poorest, this.richest];
}

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function randomIntFromInterval(min, max) {
    var res = Math.floor(Math.random()*(max-min+1)+min);

    return res;
}


