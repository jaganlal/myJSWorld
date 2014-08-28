var thoppesJS = thoppesJS || {};

thoppesJS.CollectionClass = {
  HashMap: function() {
    this.myHashMap = [];
  }
}

thoppesJS.CollectionClass.HashMap.prototype.set = function(k, v) {
  this.myHashMap[k] = v;
}

thoppesJS.CollectionClass.HashMap.prototype.get = function(k) {
  return this.myHashMap[k];
}

thoppesJS.CollectionClass.HashMap.prototype.remove = function(k) {
  delete this.myHashMap[k];
}

thoppesJS.CollectionClass.HashMap.prototype.showAll = function() {
  for(var key in this.myHashMap) {
    if (this.myHashMap.hasOwnProperty(key) === false) {
        continue;
      } //hasOwnProperty
      
      thoppesJS.console.log("Key & Value is "+key+" & "+this.myHashMap[key]);
  } //for loop
}


