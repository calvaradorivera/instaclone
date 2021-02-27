const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");

const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolvers");

require("dotenv").config({ path: ".env" });

mongoose.connect(
    process.env.BBDD, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
}, (err, _) => {
        if (err) {
            console.log("Error de Conexion con la DB Atlas");
        } else {
            // console.log("Conexion Exitosa con la DB Atlas");
            server();
        }
});

function server() {
    const serverApollo = new ApolloServer({
        typeDefs,
        resolvers,
    });

    serverApollo.listen().then(({url}) => {
        console.log("####################################");
        console.log(`Server ON en ${url}`);
        console.log("####################################");
    });
}