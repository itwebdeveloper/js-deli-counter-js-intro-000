function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(array) {
  array.shift();
  if (array.length == 0) return "There is nobody waiting to be served!";
  return array;
}
