board = new Board();

board.init(10000);

for (var i = 0; i < 20; i++) {
    board.play();
};

display = new Display(board);

$( document ).ready(function() {
   jQuery('.people-grid').html(display.getBoardInSVG());
});