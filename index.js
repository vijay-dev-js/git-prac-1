// let user1 = {
//     name: 'vijaya sekhar',
//     score: 10,
//     increment: function () {

//     }
// }

// let user2 = {
//     name: 'sekhar',
//     score: 10,
//     increment: function () {

//     }
// }

// let user3 = {
//     name: 'vijay',
//     score: 10,
//     increment: function () {

//     }
// }


function userCreator(name, score) {
    let newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function () {

    }
    return newUser;
}

const user1 = userCreator('vijaya sekhar', 10);
user1.increment();
console.dir(user1);