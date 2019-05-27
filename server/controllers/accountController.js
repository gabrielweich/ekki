const { Account } = require('../models');


exports.get = async (req, res) => {
    try {
        const { userId } = req.session;
        const account = await Account.findOne({ where: { UserId: userId } })

        if (!account)
            return res.status(400).send({ error: 'Account not found' });

        res.status(201).send({ data: account });

    }
    catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Internal server error' })
    }
}