let animals = ['lion', 'bear', 'bird'];
animals.forEach((animal) => {
  console.log(animal);
});

animals.forEach((animal, index) => {
  console.log(`animals[${index}] : ${animal}`);
});

animals.forEach((animal, index, array) => {
  console.log(`[${array}][${index}] : ${animal}`);
});
