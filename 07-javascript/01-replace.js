const replaceItems = (input) => {
  input = input.replace(/gold/gi, 'SHINY')
  input = input.replace(/wander/gi, 'roam');
  return input;
};

console.log(replaceItems('All that is gold does not glitter'));
// expected: 'All that is SHINY does not glitter'
console.log(replaceItems('Wisdom is better than silver or GOLD.'));
// expected: 'Wisdom is better than silver or SHINY.'
console.log(replaceItems('Not all those who Wander are lost'));
// expected: 'Not all those who roam are lost'
