module.exports = function(sequelize, DataTypes) {
  //Creates table "user" in pugs4life_db schema.
  var GameCategories = sequelize.define("GameCategories", {
  //creates "name" column in "GameCategories" table, cannot be NULL, must have between 1 and 20 characters
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
          len: [1, 20]
      }
    },
    //creates "isOutdood" column in "GameCategories" table. Value is a boolean and cannot be NULL.
    password: {
      type: DataTypes.STRING,
      allowNUll: false,
      validate: {
          len: [1, 20]
      }
    }
  });
  //creates association between two tables. The primary key from GameCategories table will be id(created column). game_id will be created in the Event table as a foreign key
  GameCategories.associate = function(models) {
    GameCategories.hasMany(models.Events, {
      onDelete: "cascade"
    });
  };
};
    