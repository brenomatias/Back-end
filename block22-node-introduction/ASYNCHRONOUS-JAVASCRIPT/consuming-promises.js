const { get } = require("express/lib/response");

console.log('Before');
getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repos[0], (commits) => {
      console.log(commits);
    })
  })
});
console.log('After');




// CALLBACK APPROACH
// function getUser(id, callback) {
//   setTimeout(() => {
//     console.log('Reading a user from a database...');
//     callback({ id: id, gitHubUsername: 'mosh' });
//   }, 2000);
// }

// CALLBACK APPROACH


// PROMISE APPROACH

function getUser(id) {
    return new Promise((resolve, reject) => {
        //kick off some async work
        setTimeout(() => {
            console.log('Reading a user from a database....')
            resolve({id:id, gitHubUsername: 'breno'})
        }, 2000);
    })
};
// PROMISE APPROACH

//CONSUMING PROMISES
getUser(3)
         .then(userObject => getRepositories(userObject.gitHubUsername))
         .then(repos => getCommits(repos[0]))
         .then(commits => console.log('commits', commits))
         .catch(error => console.log('Erro', error.messsage));
//CONSUMING PROMISES




function getRepositories(username) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Calling GitHub API...');
        resolve(['repo1', 'repo2', 'repo3']);
      }, 2000);
  });
}

function getCommits(repo) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
          }, 2000);  
    });
}
