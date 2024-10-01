const user = {
    name: "Bob",
    age: 77,
    location: "Las Vegas",

    getUserInfo: function () {
        return `Name: ${this.name}, Age: ${this.age}, Location: ${this.location}`;
    }
};

console.log(user.getUserInfo());
