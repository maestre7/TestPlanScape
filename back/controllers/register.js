const { FindClient, CreateClient } = require("../managers/ClientManager");

async function register(req, res) {
    try {
        const { userLogin, userPass } = req.body;

        const client = await FindClient({"name": userLogin});

        if (!client) {
            await CreateClient({"name":userLogin, "pass":userPass});
            res.json()
        } else {
            res.status(400).json("Invalid Login");
        } 
    } catch (err) {
        res.status(500).json("Server Error");
    }   
}

module.exports = register;