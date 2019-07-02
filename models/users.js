module.exports = function(sequelize, DataTypes) {
  //Creates table "user" in pugs4life_db schema.
  var User = sequelize.define("User", {
  //creates "username" column in "users" table, cannot be NULL, must have between 1 and 20 characters
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true,
      // validate: {
      //     len: [1, 20]
      // }
    },
    //creates "password" column in "user" table. Value is a string, cannot be NULL, and needs a length of 1-20 characters
    password: {
      type: DataTypes.STRING,
      allowNUll: false,
      // validate: {
      //     len: [1, 20]
      // }
    },
    //creates "email" column in "user" table, cannot be NULL, must have between 1 and 20 characters
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true,
      // validate: {
      //   len: [1, 20]
      // }
    },
    //creates "name" column in "user" table
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true,
      // validate: {
      //     len: [1, 20]
      // }
    },
    //creates "imagelink" column in "user" table
    image_link: {
      type: DataTypes.STRING,
      allowNull: true,
      // unique: false,
      // validate: {
      //     len: [1, 20]
      // }
    },
    //creates "phone_num" column in "user" table
    phone_num: {
      type: DataTypes.STRING,
      allowNull: true,
      // unique: false,
      // validate: {
      //     len: [10]
      // }
    },
    //creates "city" column in "user" table
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: false,
      // validate: {
      //     len: [1, 40]
      // }
    },
    //creates "state" column in "user" table
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: false,
      // validate: {
      //     len: [1, 40]
      // }
    },
    //creates "zipcode" column in "user" table
    zipcode: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: false,
      // validate: {
      //     len: [5]
      // }
    },
    //creates "active" column in "user" table
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      // unique: false,
    }
  });
  //creates association between two tables. The primary key from users table will be id(created column). user_id will be created in the horses table as a foreign key
  User.associate = function(models) {
    User.hasMany(models.Participation, {
      onDelete: "cascade"
    });
    User.hasMany(models.Events, {
      onDelete: "cascade"
    });
  };

  return User;
};
  