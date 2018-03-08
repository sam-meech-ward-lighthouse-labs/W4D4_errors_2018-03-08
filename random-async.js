// const array = ["🤗", "💩", "🌈", 6, null, {}, [{}], undefined, [[[]]]];

// function randomItem(items) {
//   if (!Array.isArray(items)) {
//     // Alert please give me an array
//     throw new Error("Error, give me an array. What am I supposed to do with a " + typeof items);
//   }
//   const randomIndex = Math.floor(Math.random()*items.length);
//   return items[randomIndex];
// }

// function randomItemAfterDelay(items, delaySeconds) {
//   return new Promise((fullfill, reject) => {
    
//     if (delaySeconds < 0) {
//       reject(new Error("I can't delay into the past"));
//       return;
//     }

//     const item = randomItem(items);

//     setTimeout(() => {
//       fullfill(item);
//     }, delaySeconds*1000);
//   });
// }


// randomItemAfterDelay(array, 1)
// .then((item) => {
//   console.log(item);
//   return randomItemAfterDelay(array, 1);
// }).then((item) => {
//   console.log(item);
//   return randomItemAfterDelay(array, 1);
// }).then((item) => {
//   console.log(item);
//   return randomItemAfterDelay(array, 1);
// }).then((item) => {
//   console.log(item);
//   return randomItemAfterDelay(1, 1);
// }).catch((error) => {
//   console.log(error.message);
// }).then((item) => {
//   console.log(item);
//   return randomItemAfterDelay(array, 1);
// }).then((item) => {
//   console.log(item);
//   return randomItemAfterDelay(array, 1);
// }).catch((error) => {
//   console.log(error.message);
// });


// // console.log("🤗🤗🤗🤗");

// const promises = [
//   randomItemAfterDelay(array, 1),
// randomItemAfterDelay(array, 1),
// randomItemAfterDelay(array, 1),
// randomItemAfterDelay(array, 1),
// randomItemAfterDelay(array, 1)];

// Promise.all(promises)
// .then((things) => {
//   console.log(things);
// }).catch((error) => {
//   console.log("Error", error.message);
// });

// Promise.resolve(12).then((value) => console.log(value)).catch((error) => console.log(error));

var message = () => {
  return "hello there"
};