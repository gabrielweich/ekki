module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define('Contact', {

    })

    Contact.associate = (models) => {
        Contact.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
        Contact.belongsTo(models.User, { foreignKey: 'contactId', as: 'contact' });
    }

    return Contact;
}