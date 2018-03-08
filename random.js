const array = ["🤗", "💩", "🌈", 6, null, {}, [{}], undefined, [[[]]]];


function randomItem(items) {
  if (!Array.isArray(items)) {
    // Alert please give me an array
    throw new Error("Error, give me an array. What am I supposed to do with a " + typeof items);
  }
  const randomIndex = Math.floor(Math.random()*items.length);
  return items[randomIndex];
}

console.log(randomItem(array));

let item;
try {
  item = randomItem(1);
} catch (error) {
  console.log(error.message);
  // throw error;
}

try {
  asdf.someFunc();
} catch (erro) {
  console.log(erro.message);
}

console.log(item);

