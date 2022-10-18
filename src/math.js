const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

//you can only have one export default
export default pi;

//creates a list of functions you want to export
export { doublePi, triplePi };
