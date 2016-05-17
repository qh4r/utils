if(!Object.create){
	Object.create = function(obj){
		function F(){};
		F.prototype = o;
		return new F();
	}
}