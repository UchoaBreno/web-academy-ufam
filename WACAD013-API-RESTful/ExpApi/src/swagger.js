const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Web Academy API",
      version: "1.0.0",
      description: "Documentação"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },

  apis: [
    "./src/routes/*.js",
    "./src/resources/**/*.js"
  ]
};

module.exports = swaggerJsdoc(options);