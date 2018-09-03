//X:1, O:2
var option = 1;
var board = [
	[0,0,0],
	[0,0,0],
	[0,0,0]
];
var part = document.getElementsByClassName("part");

function check(){
	if(board[0][0] == 2 && board[0][1] == 2 && board[0][2] == 2){
		alert("Winner: Player 2");
	}else if(board[1][0] == 2 && board[1][1] == 2 && board[1][2] == 2){
		alert("Winner: Player 2");
	}else if(board[2][0] == 2 && board[2][1] == 2 && board[2][2] == 2){
		alert("Winner: Player 2");
	}else if(board[0][0] == 2 && board[1][0] == 2 && board[2][0] == 2){
		alert("Winner: Player 2");
	}else if(board[0][1] == 2 && board[1][1] == 2 && board[2][1] == 2){
		alert("Winner: Player 2");
	}else if(board[0][2] == 2 && board[1][2] == 2 && board[2][2] == 2){
		alert("Winner: Player 2");
	}else if(board[0][0] == 2 && board[1][1] == 2 && board[2][2] == 2){
		alert("Winner: Player 2");
	}else if(board[0][2] == 2 && board[1][1] == 2 && board[2][0] == 2){
		alert("Winner: Player 2");
	}else if(board[0][0] == 1 && board[0][1] ===1 && board[0][2] === 1){
		alert("Winner: Player 1");
	}else if(board[1][0] == 1 && board[1][1] == 1 && board[1][2] == 1){
		alert("Winner: Player 1");
	}else if(board[2][0] == 1 && board[2][1] == 1 && board[2][2] == 1){
		alert("Winner: Player 1");
	}else if(board[0][0] == 1 && board[1][0] == 1 && board[2][0] == 1){
		alert("Winner: Player 1");
	}else if(board[0][1] == 1 && board[1][1] == 1 && board[2][1] == 1){
		alert("Winner: Player 1");
	}else if(board[0][2] == 1 && board[1][2] == 1 && board[2][2] == 1){
		alert("Winner: Player 1");
	}else if(board[0][0] == 1 && board[1][1] == 1 && board[2][2] == 1){
		alert("Winner: Player 1");
	}else if(board[0][2] == 1 && board[1][1] == 1 && board[2][0] == 1){
		alert("Winner: Player 1");
	}
}

for (var i = 0; i < part.length; i++) {
	part[i].addEventListener("click",function() {

		var divClass = this.className;
		var partClass = divClass.replace("part ","");
		var partClass1 = divClass.replace("part part","");
		var x = Number(partClass1[0]) -1;
		var y = Number(partClass1[1])-1;

		if(board[x][y] == 0){
			if(option == 1){
				board[x][y] = 1
				var t = document.createTextNode("X");
				option = 2;
			}else {
				board[x][y] = 2
				var t = document.createTextNode("O");
				option = 1;
			}
			document.getElementsByClassName(partClass)[0].appendChild(t);
			check();
		}	
	},false);
}
