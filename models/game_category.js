module.exports = function(sequelize, DataTypes) {
  //Creates table "user" in pugs4life_db schema.
  var GameCategory = sequelize.define("GameCategory", {
  //creates "name" column in "GameCategories" table, cannot be NULL
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //creates "isOutdoor" column in "GameCategories" table. Value is a boolean and cannot be NULL.
    is_outdoor: {
      type: DataTypes.BOOLEAN,
      allowNUll: false,
    }
  });
  //creates association between two tables. The primary key from GameCategories table will be id(created column). game_id will be created in the Event table as a foreign key
  GameCategory.associate = function(models) {
    GameCategory.hasMany(models.Events, {
      onDelete: "cascade"
    });
  };

  return GameCategory;
};
    