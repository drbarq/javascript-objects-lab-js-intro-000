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
  recipes.assign({}, object, {[key]: value});
}
