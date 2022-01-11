// Now, sometimes you want to run a few asynchronous
// operations in parallel, and when they all complete,
// you want to do something after. For example, you may call
// different api's like Facebook api and twitter api, and when the result
// of both these asynchronous operations are ready, then you
// want to return something to the client




const p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log('Async operation 1...');
        // resolve(1);
        reject(new Error('because something failed'));
    }, 2000);

});
// let's say this is a simulation for calling Facebook api




const p2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(3);
    }, 2000);

});
// let's say this is a simulation for calling another api


// START THE PROMISES AFTER THEY ALL DONE
// Now, we want to kick off both these
// asynchronous operations, and when they both complete




Promise.all([p1, p2])
   .then(promiseResults => console.log(promiseResults))
   .catch(error => console.log('Error', error.message));

// [p1, p2] = array of promises
// this method will return a new promise that will
// resolved when all the promises in this array
// are resolved

// Sometimes, you may want to kick off multiple asynchronous
// operations, but you want to do something as soon as one of these asynchronous operations
// completes. So you don't want to wait for all of them to complete, you just
// want to do something as soon as the first operation completes

// instead of promise.all you use
// Promise.race
// promise is resolved as soon as the first asynchronous operation
// completed


//NOTES:

// we don't have multi threading, we're still dealing with one thread but
// that single thread is kicking off multiple asynchronous operations
// almost at the same time, it's not exactly at the same time, first
// it starts first asynchronous operation, the thread is
// released, so immediately after it starts the second asynchronous
// operation. We are not waiting for the result of the first
// asynchronous operation to be ready in order to kick off the second
// asynchronous operation

//In this implementation, both these asynchronous operations are started almost 
// at the same time.


// the result will be available as an array