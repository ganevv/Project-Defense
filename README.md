# Project-Defense - PC Generator

PC Generator app made for educational purpose, created with Angular as Front-End, Node.js as Back-End and MongoDB as a database.

- The app's purpose is to create or buy your dream PC.
- Guest users are able to see only Home Page, Our Offers, Login and Register.
- Login users can create new PC offers, update and delete them. 
- They can also buy (add to cart) other offers and add them to their own Profile Page.


How to setup:

1. Start the REST API server in your terminal:
- cd ./backend
- npm install / npm i
- npm start
- The server will start listening on port 3000.

2. To run the project you must open new terminal and type:
- cd ./frontend
- npm install / npm i
- ng serve / ng s 
- The app will be available at https://localhost:4200 in your browser!


Technologies:

    Client
        Angular CLI: 15.0.1
        TypeScript: 4.8.2
    Server
        Node: 18.11.11
        ExpressJS: 4.18.2
        bcrypt: 5.1.0
        cookie-parser: 1.4.6
        express: 4.18.2
        express-handlebars: 6.0.6
        jsonwebtoken: 8.5.1
        mongoose: 6.8.0
