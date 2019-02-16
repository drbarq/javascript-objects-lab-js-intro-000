var recipes = {"key" : "value"};


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = "value";
  return recipes;
}
