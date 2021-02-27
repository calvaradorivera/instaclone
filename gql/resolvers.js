// const User = require("../models/User");

const resolvers = {
    Query: {
        // User
        getUser: () => {
            console.log("Obteniendo usuario");
            return null;
        },
    },
    Mutation: {
        // User
        register: (_, { input }) => {
            console.log("Registrando Usuario");
            console.log(input);
            // const newUser = input;
            return null;            
        },
    },
};

module.exports = resolvers;