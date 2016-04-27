var turn = true;

var evalutionMap = [{
    id: 1,
    winningPath: [[1,2,3],[1,4,7]]
},{
    id: 2,
    winningPath: [[1,2,3],[2,5,8]]
},{
    id: 3,
    winningPath: [[1,2,3],[3,5,7],[3,6,9]]
},{
    id: 4,
    winningPath: [[1,4,7],[4,5,6]]
},{
    id: 5,
    winningPath: [[4,5,6],[2,5,8],[1,5,9],[3,5,7]]
},{
    id: 6,
    winningPath: [[3,6,9],[4,5,6]]
},{
    id: 7,
    winningPath: [[1,4,7],[3,5,7],[7,8,9]]
},{
    id: 8,
    winningPath: [[2,5,8],[7,8,9]]
},{
    id: 9,
    winningPath: [[3,6,9],[7,8,9]]
}];

$(document).ready(function() {
    $(".tic").click(function(e) {
        e.preventDefault();
        if ($(this).val() !=== "+") {
            $(this).val(turn ? "0" : "X");
            if (checkGameOver()) { alert("Se acabo el juego no hay mas que marcar"); }
            if (checkWinner($(this)) { alert("Ganaste!");}
            turn = !turn;
        }
    });
});

function checkWinner(element) {
    var result = true;
    var elementId = parseInt(element.attr("id"));
    $.each(function(index,evalutionRoute) {
        if (evalutionRoute.id === elementId) {
            $.each(evalutionRoute.winningPath, function(index, path) {
                $.each(path,function(index, elem) {
                    result = result && $("#"+elem).val() === element.val();
                });   
            });
        }
    });
    return result;
}