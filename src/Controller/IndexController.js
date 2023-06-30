module.exports = function () {
    this.armor = function (request, response) {
        request.player.armour = request.args[0];
        return response;
    }

    this.login = async function (request, response) {
        await DB.connect();
        // await DB.transact(async function () {
        //     const users = await DB.query("SELECT * FROM users WHERE username = ?;", ["kek"]);
        //     console.log(users[0]);
        // });
    }
}