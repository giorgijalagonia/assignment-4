function sortUsersAge(users) {
    return users.sort((a, b) => a.age - b.age);
}

const users = [
    { name: 'Lasha', age: 30 },
    { name: 'Saba', age: 20 }
];

console.log(sortUsersByAge(users));
