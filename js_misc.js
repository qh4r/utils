// Array.prototype.slice works with strings - works like .split('')
// reduce is called with index as third operator
String.prototype.odd = function () {
 return Array.prototype.slice.call(this)
  .reduce((s, e, i) => i % 2 ? s + e : s)
}


// blok catch nie jest konieczny try finally tez uchroni nas przed bledem
function test(x){
 try{var res = 10/x
 } finally {
  return res
 }
}
test({data: 5}) //2
test() // undefined
