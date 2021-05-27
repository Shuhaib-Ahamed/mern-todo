# Full stack MERN todo app (typescript)
The app includes the following features Adding a todo, Deleting a todo, Prompting the user before deleting, warning the user on todo not completed, and git pre-commit hooks to ensure code quality, prettier is used to format the codebase before every commit.

### TASKLIST
![alt text](https://firebasestorage.googleapis.com/v0/b/shuhaib-ahamed.appspot.com/o/TASKLIST.png?alt=media&token=84300567-973f-49b8-9317-16fdaa365e96)

Client
type the following in the CMD
`cd mern-todo-app`
then run the command,
`yarn` or `npm install`


Server (Node js, Express.js)

RUN the following commands
`cd mern-todo-api`,
`npm install`

Note: Provide mongoDB URI and the credentials in `src/nodemon.json`

`{
  "env": {
    "MONGODB_ATLAS_USERNAME": "userName",
    "MONGODB_ATLAS_PASSWORD": "userPassword",
    "MONGODB_ATLAS_DBNAME": "DatabaseName"
  }
}
`

## References
https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/
