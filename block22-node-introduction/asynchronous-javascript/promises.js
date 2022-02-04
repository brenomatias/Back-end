// A promise is an object that holds the eventual result of an asynchronous
// operation. So when an asynchronous operation completes,
// it can either result in a value or an error

// Initially when we create a promise object, it will be in the pending state.
// At this point, we can pick up some asynchronous operation
// when the results are ready, the promise can either be fulfilled or
// resolved, which basically means the operation completed successfully.


// (promise Object)
const promise = new Promise((resolve, reject) => {
    // Kick off some async work
    // ...(acces a dataBase, call up a web service, start timer )
    setTimeout(() => { // assync operation/this call back functi will be called after two seconds

        resolve(1);// pending => resolved, fulfilled
        reject(new Error('message')); // pending => rejected

    }, 2000);

});


// in this case result is this 1 that we are resolving here
// CONSUME THE PROMISE HERE
promise
        .then(promiseResult => console.log('Result', promiseResult))
        .catch(error => console.log('Error', error.message));

// promiseResult = resolve(d), fulfiled action


// when creating a new promise, we should pass a function with two parameters, resolve and reject (THEY ARE FUNCTIONS). Or we can use the arrow function syntax and make this a little bit simpler

// So somewhere in the code WE'RE GOING TO CONSUME this promise

// we are using a result to send this value 
// to the consumers of this promise object

// I need to produce 1 as
// the result. In a real world application, instead of 1 perhaps we're going to have a user object that you read from a database, So that is the result of our asynchronous operation.

// the error message that we pass here will be stored in a property called message