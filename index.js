var recipes = {"ingredient" : "amount"};


function destructivelyUpdateObjectWithKeyAndValue(recipe, ingredient, amount) {
  recipes.ingredient = "amount";
  return recipes;
}
