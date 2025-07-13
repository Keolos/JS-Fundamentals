function add(a, b, c) {
  return a + b + c;
}

const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);
const c = parseInt(process.argv[4]);
console.log(add(a, b, c));
