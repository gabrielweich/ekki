const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cpf: {
            type: DataTypes.STRING,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            hooks: {
                beforeSave: async (user) => {
                    user.password = await bcrypt.hash(user.password, 8);
                },
            },
        })

    User.prototype.validPassword = function () {
        return bcrypt.compare(password, this.password);
    }

    User.associate = (models) => {
        User.hasOne(models.Account)
    }
    return User;
}