// get unique values as strings
Array.prototype.getUniqe = function(){ return Object.keys(this
        .reduce((keys, elem) =>
          Object.assign({}, keys, {[elem]: 0}), {})
        )}

// generates range starting with 0 and capped by argument
function generateRange(length = 0) {
	return Array.from({length}).map((_,i) => i)
}
