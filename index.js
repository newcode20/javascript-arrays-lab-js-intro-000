var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
kittens.unshift(name);
return kittens;
}

function destructivelyRemoveLastKitten(name){
  kittens.pop();
  return kittens;
}
function desructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
