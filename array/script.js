let array = [0, 1, 2, 3, 4, 5];

let max = array[0];
let min = array[0];
let sum = 0;
let odd = [];
let even = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
  if (array[i] < min) {
    min = array[i];
  }
  sum += array[i];
  if (array[i] % 2 == 0) {
    even.push(array[i]);
  } else {
    odd.push(array[i]);
  }
}
let i = 0;
let j = array.length - 1;

while (i <= j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;

  i++;
  j--;
}

console.log(array, max, min, sum, even, odd);
