function sumArgs (argv_array) {
  var sum = 0;
  for (i = 2; i < argv_array.length; i++) {
    sum += +argv_array[i];
  }
  return sum;
}

console.log(sumArgs(process.argv));