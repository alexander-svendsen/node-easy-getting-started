# Easy getting started with node and sqlite3 example
An example how to setup an easy node project, using [express](http://expressjs.com/) for the web framework and [sqlite3](http://www.sqlitetutorial.net/) as the database.

This project is an example for how an simple guest list application can be setup

## Setup

- Install [node](https://nodejs.org/en/). Recommend latest version
- Install the libraries used in this project.
     - Go into this folder with your terminal and type `npm install`. Stay in this folder afterwards.
- Run the database migration to setup the example tmp.sqlite3 database.
    - Type `npm run migrate` into your terminal
- Start the node Server
    - Type `npm start` into your terminal
- Now you can open http://localhost:8080/ and see an example working guestlist application


## Explanation

The application is split into to parts. A backend application. Written in node. And a frontend application with html, css and javascript.


### Backend

- `package.json` is the setup file for our node project. It contains information about which libraries we are using and custom commands created. Its here the `migrate` and `start` commands are setup
- `migate.js` is the file containing our database migration. It creates our database, setups a guestlist table and inserts some sample data into it
- `app.js` is the file which setup and starts our node server. The following APIs are setup:
  - `GET /test` Returns a hello world string. You can test it out by opening http://localhost:8080/test in your browser
  - `GET /jsontest` Returns a hello world json message.
  - `GET /guestlist` It opens the database and reads the whole guestlist table and returns it as a json message.
  - All the files in the `/public` folder. So if you create a file name `foo.bar` you can open it by going to http://localhost:8080/foo.bar. In the `public` folder there is a single `index.html` file. It is this file which is opened when going to http://localhost:8080/.


### Frontend
- `public/index.html` Is the frontend to our application. Its what our users will see. It displays the currently stored guestlist by fetching the data from the backend api `/guestlist`.
