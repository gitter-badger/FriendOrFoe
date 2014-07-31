function Display (board) {
    this.board = board;
}
 
Display.prototype.getBoardInSVG = function() {
    var squareWidth = 10;
    var squareHeigth = 10;
    var padding = 1;

    var maxWidth = 100;
    var maxHeigth = 100;

    var prisonners = this.board.getPrisonners();
    var richest = this.board.getExtreme()[1];

    var svg = "<svg width='1200' height='1200'>\n";

    for (var w = 0; w < maxWidth; w++) {
        x = w*(squareWidth+padding);
        svg = svg + "<g transform='translate("+ x +", 0) ''>\n";

        for (var h = 0; h < maxHeigth; h++) {
            y = h*(squareHeigth+padding);
            id = (w*maxHeigth)+h;
            prisonner = prisonners[id];
            color = prisonner.getColor(richest);
            infos = prisonner.getInfos();
            svg = svg + "  <rect id='"+ id +"' alt='"+ infos +"' width='"+ squareWidth +"' height='"+ squareHeigth +"' y='"+ y +"' style='fill: rgb"+ color +";'></rect>\n";
        };
        svg = svg + "</g>\n"
    };


    return svg;
};