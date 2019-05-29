const { Contact, User } = require('../models');

exports.post = async (req, res) => {
    try {
        const { userId } = req.session;
        const { contactId } = req.body;

        if (!(await User.findOne({ where: { id: userId } })))
            return res.status(400).send({ error: 'Usuário não encontrado' });

        const userContact = await User.findOne({ where: { id: contactId } })
        if (!userContact)
            return res.status(400).send({ error: 'Contato não encontrado' });

        if (await Contact.findOne({ where: { contactId, userId } }))
            return res.status(400).send({ error: 'Usuário informado já é um contato.' });

        const contact = await Contact.create({ contactId, userId })

        res.status(201).send({ data: contact });
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Erro desconhecido no servidor' })
    }
}


exports.getAll = async (req, res) => {
    try {
        const { userId } = req.session;
        const contacts = await Contact.findAll({ where: { userId }, include: [{ model: User, as: 'contact', attributes: ['name'] }] })
        console.log(contacts)
        res.status(200).send({ data: contacts });
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Erro desconhecido no servidor' })
    }
}


exports.delete = async (req, res) => {
    try {
        const { userId } = req.session;
        const contactId = req.params.id;
        console.log({ userId, contactId })
        await Contact.destroy({ where: { userId, contactId } })
        res.status(200).send({ data: { userId, contactId } });

    }
    catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Erro desconhecido no servidor' })
    }
}