module.exports = function(sequelize, DataTypes) {
  //Creates table "user" in pugs4life_db schema.
  var User = sequelize.define("User", {
  //creates "username" column in "users" table, cannot be NULL
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //creates "password" column in "user" table. Value is a string, cannot be NULL
    password: {
      type: DataTypes.STRING,
      allowNUll: true
    },
    //creates "email" column in "user" table, cannot be NULL
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //creates "name" column in "user" table
    name: {
      type: DataTypes.STRING, 
      allowNull: true
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
      allowNull: true
    },
    //creates "state" column in "user" table
    state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //creates "zipcode" column in "user" table
    zipcode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //creates "active" column in "user" table
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
  //creates association between two tables. The primary key from users table will be id(created column). user_id will be created in the users table as a foreign key
  User.associate = function(models) {
    // User.hasMany(models.Participation, {
    //   onDelete: "cascade"
    // });
    // User.belongsToMany(models.Events, {
    //   as: 'eventOwner', foreignKey: 'eventOwnerId',
    //   constraints: false,
    //   through: models.Participation,
    //   onDelete: "cascade"
    // });


    // Many to Many users thru partic to events
    User.belongsToMany(models.Events, {
      through: models.Participation,
      onDelete: "cascade"
    });

    // one to many relationship of user/owner to event created
    User.hasMany(models.Events, {
    })

  };

  return User;
};
  
