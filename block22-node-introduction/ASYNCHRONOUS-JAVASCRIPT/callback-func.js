// with a callback we can use it to get the result  of an asynchronous operation is ready.


// first script
function getUser(id, callback) { 
    setTimeout(()=> {
    console.log('Reading a user from a database...');
    callback({ id: id, gitHubUser: 'brenoMatias'}); // 'user-object'
 }, 2000);
     
}

//     (1, function(id, gitHubUser/user-object-above))
getUser(1, function(user) {
    console.log('User', user);

    //Get the repositories
    getRepositories(user.gitHubUser, (repos) =>  {
        console.log('Repos', repos)

    })
    // repos is the result of the async funct
});

// . A callback is a function that we are going to call when the result of an asynchronous operation is ready

//'callback'({user-object})



// once we read a user object from the database, then we're going to look at this property gitHubUse, and then we're going to call gitHub api, to get the list of repositories for the user.

function getRepositories(userName, callback) {
    setTimeout(() => {
        console.log('Reading repositories. Calling gitHub API');
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000 )
}





// In this program let's imagine once we read
// a user object from the database, then we're going to look at this property
// gitHubUsername, and then we're going to call gitHub api,
// to get the list of repositories for the user. So,
// we're going to create a function here, get
// Repositories. This function takes an argument,
// username, of a user on gitHub, and
// it's going to return an array with a list of repositories.
// So repo1, repo2, and repo3.