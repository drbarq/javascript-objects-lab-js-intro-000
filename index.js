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


function updateObjectWithKeyAndValue(object, key, value) {
   var recipesMORE = object.assign({}, object, {["key"]: "value"});
}
