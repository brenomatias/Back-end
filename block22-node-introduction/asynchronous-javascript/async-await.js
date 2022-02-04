// anytime we're calling a function that returns a promise
// you can await the result of that function
// and then get the actual result just like calling a
// synchronous function. So here we can get the result
// and store it in the user object.

const { get } = require("express/lib/response");



console.log('Before');

async function displayCommits() {
    try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
}
   catch(err) {
       console.log('Error', err)
   };
}   
displayCommits();


console.log('After');



function getUser(id) {
  return new Promise((resolve, reject) => {
    // Kick off some async work 
    setTimeout(() => {
      console.log('Reading a user from a database...');
      resolve({ id: id, gitHubUsername: 'mosh' });
    }, 2000);
  });
}

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
      resolve(['resolve getCommits']);
    }, 2000);
  });
}