module.exports = function(sequelize, DataTypes) {
  //Creates table "user" in pugs4life_db schema.
  var User = sequelize.define("User", {
  //creates "username" column in "users" table, cannot be NULL, must have between 1 and 20 characters
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //creates "password" column in "user" table. Value is a string, cannot be NULL
    password: {
      type: DataTypes.STRING,
      allowNUll: false
    },
    //creates "email" column in "user" table, cannot be NULL
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //creates "name" column in "user" table
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //creates "imagelink" column in "user" table
    image_link: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //creates "phone_num" column in "user" table
    phone_num: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //creates "city" column in "user" table
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //creates "state" column in "user" table
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //creates "zipcode" column in "user" table
    zipcode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //creates "active" column in "user" table
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
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
  