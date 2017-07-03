function game() {
  var x;
  var y =["paper", "ciseaux", "stone"];
  var ordi =0;
  var z;

  // choix ordi
  function choixOrdi(){
    z = Math.floor((Math.random() * 3));
    ordi = y[z];
  }


  choixOrdi();
  // choix user
  x =prompt("game");

  while (x == ordi){
    alert("equal");
    choixOrdi();
    x =prompt("game");
  }


    // if (x ==="paper" && ordi ===y[2]){
    //   alert("you win");
    // }
    //
    // else if (x ==="ciseaux" && ordi ===y[0]){
    //   alert("you win");
    // }
    // else if (x ==="ciseaux"  && ordi ===y[2]){
    //   alert("you lost");
    // }
    //
    // else if (x ==="paper" && ordi ===y[1]){
    //   alert("you lost");
    // }
    // else if (x === "stone" && ordi ===y[0]){
    //   alert("you lost");
    // }
    // else if (x ==="stone" && ordi ===y[1]){
    //   alert("you win");
    // }
}
