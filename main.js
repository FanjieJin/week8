function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.image = "cat.png";
  this.image_alt = "A cat ";
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.image = "dog.png"
  this.image_alt = "A dog";
}

function Fish(name, age) {
  this.name = name;
  this.age = age;
  this.image = "fish.png";
  this.image_alt = "A fish";
}

let animals = [new Cat(), new Dog(), new Fish()];
let names = ["tom", "jack", "mark", "mary", "linda"];

function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function generateRandomAnimal() {
  let randomIdx = getRandomIndex(animals.length);
  let randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Cat) 
  {
    return new Cat(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Dog) 
  {
    return new Dog(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Fish) 
  {
    return new Fish(generateRandomName(), generateRandomAge());
  }
}

function generateRandomName() {
  let randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

function generateRandomAge() {
  return getRandomIndex(5);
}

function onLoad() {
  var animal = JSON.parse(localStorage.getItem("savedAnimal"));

  var hasSavedAnimal = false;

  if (animal === null) 
  {
    document.getElementById("button-storage").textContent = "Save Animal";

    animal = generateRandomAnimal();
  } 
  else 
  {
    document.getElementById("button-storage").textContent = "Clear Animal";

    hasSavedAnimal = true;
  }

  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
  document.getElementById("animal-img").setAttribute("src", animal.image);


  document.getElementById("button-storage").addEventListener("click", function() {
    if (hasSavedAnimal) 
    {
      localStorage.removeItem("savedAnimal");

      document.getElementById("button-storage").style.display = "none";
      document.getElementById("button-action-text").textContent = "Cleared!";
      document.getElementById("button-action-text").style.display = "block";
    }

    else 
    {
      localStorage.setItem("savedAnimal", JSON.stringify(animal));

      document.getElementById("button-storage").style.display = "none";
      document.getElementById("button-action-text").textContent = "Saved!";
      document.getElementById("button-action-text").style.display = "block";
    }
  });

};















