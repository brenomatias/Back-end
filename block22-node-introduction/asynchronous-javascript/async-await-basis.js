

// An async function is a function declared with the async keyword, and the await keyword is permitted within them. The async and await keywords enable asynchronous,PROMISE-BASED behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

// Async functions may also be defined as expressions.

 function resolveAfter2Seconds() {

    return new Promise(resolve => {

      setTimeout(() => {
        resolve('resolved');
      }, 2000);

    });
  }


//   anytime we're calling a function that returns a promise
//   you can await the result of that function
//   and then get the actual result just like calling a
//   synchronous function

  async function asyncCall() {
    console.log('calling');

    const result = await resolveAfter2Seconds();

    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();
  