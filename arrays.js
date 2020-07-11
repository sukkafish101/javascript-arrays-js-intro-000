var chocolateBars = ['snicker', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray(pickle, cheese) {
  return (cheese, ...pickle)
}

function destructivelyAddElementToBeginningOfArray(pickle, cheese) {
  pickle.unshift(cheese)
  return pickle
}
