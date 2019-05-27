const { Contact, User } = require('../models');

exports.post = async (req, res) => {
    try {
        const { userId } = req.session;
        const { cpf } = req.body;

        if (!(await User.findOne({ where: { userId } })))
            return res.status(400).send({ error: 'User not found.' });

        const userContact = await User.findOne({ where: { cpf } })
        if (!userContact)
            return res.status(400).send({ error: 'Contact user not found.' });

        if (await Contact.findOne({ where: { contactId: userContact.id, userId } }))
            return res.status(400).send({ error: 'Already is a contact.' });

        const contact = await Contact.create({ contactId: userContact.id, userId })

        res.status(201).send({ data: contact });
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Internal server error' })
    }
}


exports.getAll = async (req, res) => {
    try {
        const { userId } = req.session;

        const contacts = await Contact.findAll({ where: { userId } })
        res.status(200).send({ data: contacts });
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Internal server error' })
    }
}