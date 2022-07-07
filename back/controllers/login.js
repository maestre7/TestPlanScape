

async function login(req, res) {
    try {
        const { userLogin, userPass } = req.body;

        /* if userLogin existe en ddbb
            if passddbb === userPass
                res.json()
            } else {
                res.status(400).json("Invalid Password");
            }
        } else {
            res.status(400).json("Invalid Login");
        } */

    } catch (err) {
        res.status(500).json("Server Error");
    }
    
}

module.exports = login;