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
   return Object.assign({}, object, {[key]:value});
}

/*

function deleteFromObjectByKey(object, key) {
   return Object.assign({}, object, {key}); {
     delete object[key];
   }
   return object
}
*/


function deleteFromObjectByKey(object, key) {
  var recipeMore = Object.assign({}, object, {[key]}); {
    delete object.key;
  }
  return recipeMore;
}
