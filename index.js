var recipes = {"key" : "value"};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.key="value";
}





/*
function updateObjectWithKeyAndValue(object, key, value) {
  object.key="value"; {
  return object.assign({}, object, {[key]: value});
  }
}
*/