const Middleware = require("./src/Middleware.js");
global.DB = require('./modules/DB');

const dotenv = require('dotenv');
dotenv.config({path: './.env'});
console.log(process.env.DB_USER);
const fs = require('fs');

fs.readFile('packages/gamemode/config/commands.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let commands = JSON.parse(data);
    let middleware = new Middleware();


    let info = {
        player: undefined,
        args: [100],
        role: "user"
    }
    middleware.handle(["login", "user", info]);


    for(let i in commands) {
        mp.events.addCommand(commands[i].command, (player) => {
            let info = {
                player: player,
                args: [100],
                role: "user"
            }
            middleware.handle([commands[i].command, commands[i].role, info]);
        });
    }
});