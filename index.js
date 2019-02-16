var recipes = {"key" : "value"};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]; {
    return object;
  }
}


function updateObjectWithKeyAndValue(recipes, key, value) {
   var recipesMore = Object.assign({}, recipes, {["key"]: "value"});
   return recipesMore;
}
