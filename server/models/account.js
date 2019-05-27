module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('Account', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        balance: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        limit: {
            type: DataTypes.DOUBLE
        }
    })

    Account.associate = (models) => {
        Account.belongsTo(models.User, { foreingKey: 'userId' })
    }

    return Account;
}