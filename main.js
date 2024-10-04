const contactDate = {
    contact: [
        {
            name: "Bob",
            phoneNumber: "+955232423",
            email: "bob@gmail.com"
        },
        {
            name: "Jony",
            phoneNumber: "+9323756723",
            email: "jony@gmail.com"
        },
        {
            name: "Adam",
            phoneNumber: "+933238973",
            email: "adam@gmail.com"
        },
    ],

    searchContactName(name) {
        return this.contact.find(contact => contact.name === name) || "Contact not found";
    },

    addContact(newContact) {
        this.contact.push(newContact);
    }
};

console.log(contactDate.searchContactName("Bob"));
console.log(contactDate.searchContactName("Max"));

contactDate.addContact({
    name: "David",
    phoneNumber: "+933323973",
    email: "david@gmail.com"
});

console.log(contactDate.contact);