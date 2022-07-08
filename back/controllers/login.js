const { FindClient } = require("../managers/ClientManager");

async function login(req, res) {
    try {
        const { userLogin, userPass } = req.body;

        const client = await FindClient({"name": userLogin});

        if (client) {
            if (client.pass === userPass) {
                res.json()
            } else {
                res.status(400).json("Invalid Password");
            }
        } else {
            res.status(404).json("Invalid Login");
        }

    } catch (err) {
        res.status(500).json("Server Error");
    }   
}

module.exports = login;