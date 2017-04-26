// Array.prototype.slice works with strings - works like .split('')
// reduce is called with index as third operator
String.prototype.odd = function () {
 return Array.prototype.slice.call(this)
  .reduce((s, e, i) => i % 2 ? s + e : s)
}
