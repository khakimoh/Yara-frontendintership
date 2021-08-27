stop = 0;
var state = new Array(3);
initGame = () => {
  for (let i = 0; i < state.length; i++) {
    state[i] = [];
  }
  resetResult();
};
roundCheck = () => {
  if (document.getElementById("round").innerHTML == "x") {
    document.getElementById("round").innerHTML = "o";
    return "x";
  } else {
    document.getElementById("round").innerHTML = "x";
    return "o";
  }
};
itemSet = (item) => {
  if (stop == 0) {
    document.getElementById("btn-x").style.visibility = "hidden";
    document.getElementById("btn-o").style.visibility = "hidden";
    document.getElementById("starter").style.visibility = "hidden";
    contentItem = document.getElementById(item).innerHTML;
    if (contentItem != "x" && contentItem != "o") {
      let roundcheck = roundCheck();
      document.getElementById(item).innerHTML = roundcheck;
      setState(item.slice(-1), roundcheck);
    }
    if (winnerCheck()) {
      document.getElementById("winner").innerHTML = "win";
      stop = 1;
    }
  }
};
winnerCheck = () => {
  let i = 0;
  let j = 0;
  for (i = 0; i < 3; i++) {
    j = 0;
    if (state[i][j] == state[i][j + 1]) {
      if (state[i][j + 1] == state[i][j + 2]) {
        return true;
      }
    }
  }
  for (i = 0; i < 3; i++) {
    j = 0;
    if (state[j][i] == state[j + 1][i]) {
      if (state[j + 1][i] == state[j + 2][i]) {
        return true;
      }
    }
  }
  if (state[0][0] == state[1][1]) {
    if (state[1][1] == state[2][2]) {
      return true;
    }
  }
  if (state[0][2] == state[1][1]) {
    if (state[1][1] == state[2][0]) {
      return true;
    }
  }
  return false;
};
setState = (item, xo) => {
  switch (item) {
    case "1":
      state[0][0] = xo;
      break;
    case "2":
      state[0][1] = xo;
      break;
    case "3":
      state[0][2] = xo;
      break;
    case "4":
      state[1][0] = xo;
      break;
    case "5":
      state[1][1] = xo;
      break;
    case "6":
      state[1][2] = xo;
      break;
    case "7":
      state[2][0] = xo;
      break;
    case "8":
      state[2][1] = xo;
      break;
    case "9":
      state[2][2] = xo;
      break;
    default:
      console.log("Alert Erorr set state array");
  }
};
resetResult = () => {
  index = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      index++;
      state[i][j] = index;
    }
  }
};
resetElement = () => {
  document.getElementById("item1").innerHTML = " ";
  document.getElementById("item2").innerHTML = " ";
  document.getElementById("item3").innerHTML = " ";
  document.getElementById("item4").innerHTML = " ";
  document.getElementById("item5").innerHTML = " ";
  document.getElementById("item6").innerHTML = " ";
  document.getElementById("item7").innerHTML = " ";
  document.getElementById("item8").innerHTML = " ";
  document.getElementById("item9").innerHTML = " ";
  document.getElementById("winner").innerHTML = " ";
  document.getElementById("btn-x").style.visibility = "visible";
  document.getElementById("btn-o").style.visibility = "visible";
  document.getElementById("starter").style.visibility = "visible";
};
resetGame = () => {
  resetElement();
  resetResult();
  stop = 0;
};
roundDeterminant = (id) => {
  if (id == "btn-x") {
    document.getElementById("round").innerHTML = "x";
    document.getElementById("btn-x").style.visibility = "hidden";
    document.getElementById("btn-o").style.visibility = "hidden";
    document.getElementById("starter").style.visibility = "hidden";
  }
  if (id == "btn-o") {
    document.getElementById("round").innerHTML = "o";
    document.getElementById("btn-x").style.visibility = "hidden";
    document.getElementById("btn-o").style.visibility = "hidden";
    document.getElementById("starter").style.visibility = "hidden";
  }
};
initGame();
