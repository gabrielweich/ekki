const { User, Account } = require('../models');

DEFAULT_BALANCE = 1000
DEFAULT_LIMIT = 500

exports.post = async (req, res) => {

    try {
        const { cpf, name, password, phone } = req.body;

        if (await User.findOne({ where: { cpf } }))
            return res.status(400).send({ error: 'User already exists' });

        const user = await User.create({ cpf, name, password, phone });
        const account = await Account.create({ userId: user.id, balance: DEFAULT_BALANCE, limit: DEFAULT_LIMIT })
        req.session.userId = user.id
        res.status(201).send({ data: user });
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Internal server error' })
    }

}

exports.login = async (req, res) => {
    try {
        const { cpf, password } = req.body;
        const user = await User.findOne({ where: { cpf } })
        if (!user || !(await user.validPassword(password)))
            return res.status(401).send({ error: 'Invalid credentials' })

        req.session.userId = user.id
        res.status(201).send({ data: user });
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Internal server error' })
    }
}


