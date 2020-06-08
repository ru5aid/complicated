let num = 266219;
let str = num + '';
let arr = str.split('');
let result = arr.reduce(function(sum, current) {
  return sum * current;
} );

console.log(result);
console.log(result ** 3);

let data = result ** 3;
let res = String(data);

alert(res.substring(0,2));
