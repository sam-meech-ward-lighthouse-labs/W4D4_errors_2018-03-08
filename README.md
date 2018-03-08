## Throwing Exceptions & Errors

* It can break your code. It can crash your application. 
* There's different types of Errors and exceptions.
* They have messages. 

* To tell us we Effed up.

If something happens that we don't want, dont' expect, isn't acceptable behavior. 


Handling error conditions with a callback

```js
function randomItem(items, callback) {
  if (!Array.isArray(items)) {
    // Alert please give me an array
    callback("Error, give me an array. What am I supposed to do with a "+ typeof items);
    return;
  }
  const randomIndex = Math.floor(Math.random()*items.length);
  return items[randomIndex];
}

console.log(randomItem(array));
console.log(randomItem(1, (message) => {
  // there was an error
  console.log(message);
}));
```

## Async & Callbacks

* Async:
  * stuff that happens now, and stuff that doesn't happen now.
  * Multitasking, or at least the appearance of multitasking.
  * Allows you to breakup tasks and execute them in "parallel".
  * Examples:
    - AJAx stuff. 
    - 


Callback:
* A function that you pass to another function that gets called by that function at some point.


Downsides to using callbacks:

* callback hell
  * Deeply nested callbacks
  * Error callback

```js
runMarathon((err) => {
  if (err) {

  }
  runMarathon((err) => {
    if (err) {
    
    }
    runMarathon((err) => {
      if (err) {
    
      }
      runMarathon(somefunc)
    });
  });
});
```

Nothing stopping a callback from being called multiple times.

```js
encryptPassword((err, encrypted) => {
  let user = new User();
  user.password = encrypted;
  user.saveToDatabase((err) => {

  });
});
```

## Promises

* resolve some of the async issues we have when using callbacks.

* Promises handle errors


```js
function randomItemAfterDelay(items, delaySeconds) {
  return new Promise((resolve, reject) => {
    
    if (delaySeconds < 0) {
      // We can manually reject the current promise
      reject(new Error("I can't delay into the past"));
      return;

      // Or we could throw an error and it will be caught by the promise and rejected.
      throw new Error("I can't delay into the past")
    }

    // we can call a function that throws an error and it will be caught by the promise and rejected.
    const item = randomItem(items);

    setTimeout(() => {

      // But if an error gets thrown in a callback function that happens later on, outside of the promise, you will have to manually catch it and reject the promise
      // This is where I messed up in class. 
      try {
        randomItem(items);
      } catch (error) {
        reject(error);
      }

      resolve(item);
    }, delaySeconds*1000);
  });
}
```

* Remember:
  * every `.then()` returns a new promise that you can call `.then()` on 
  * `Promise.all()` takes in an array of promises and returns a single promise
  * a promise will always execute asynchronously
  * if you return a promise inside a `.then`, it will be the next promise in the chain. So the following will have the same result:
    ```js
      promise
      .then(() => {
        return otherPromise();
      })
      .then(() => {
        console.log("done");
      });
    ```

    ```js
      promise
      .then(() => {
        otherPromise()
        .then(() => {
        console.log("done");
      });
    ```
  * You can also return a _normal_ value instead of a promise, and it will get wrapped inside a promise. So you can do this:
    ```js
      promise
      .then(() => {
        return 42
      })
      .then((value) => {
        console.log(value); // 42
      });
    ```
  * always put a `.catch()` at then end of your `.then()`s to catch any errors that may have occurred. (this is in addition to any other `.catch` methods you have)

Look at the `random-async.js` for examples of promises.