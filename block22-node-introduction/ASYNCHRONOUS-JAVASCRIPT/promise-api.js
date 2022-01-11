// we're going to explore the API
// of promise object in JavaScript in more detail
// api: Application Programming Interface
//é um conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado na Web

// Sometimes you want to create a promise
// that is ALREADY RESOLVED. This is particularly useful when
// writing unit tests(UNIT TESTS).


//want to simulate a scenario where
//an asynchronous operation like calling a web service
// completes successfully

//In your unit test, you want to create a 
// promise that is already resolved

const promise = Promise.resolve({ id:1 });
promise.then(result => console.log(result));

// this promise is already resolved
// o que vai dentro de resolve é o resultado no
// retorno de then





const p = Promise.reject(new Error('reason for rejection...'));
p.catch(error => console.log(error));
// promise already rejected