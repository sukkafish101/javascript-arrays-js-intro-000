var chocolateBars = ['snicker', 'hundred grand', 'kitkat', 'skittles'];


function addElementToBeginningOfArray(array, element){
  return (element, ...array)
}

function destructivelyAddElemtnToBeginningOfArray(array, element){
  array.unshift(element)
}
