module.exports = function(sequelize, DataTypes) {
  //Creates table "user" in pugs4life_db schema.
  var Events = sequelize.define("Events", {
  //creates "game_id" column in "Events" table, cannot be NULL.
    game_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
          len: [1, 20]
      }
    },
    //creates "isOutdood" column in "GameCategories" table. Value is a boolean and cannot be NULL.
    startDate: {
      type: DataTypes.STRING,
      allowNUll: false,
      validate: {
          len: [1, 20]
      }
    },
    startDate: {
      type: DataTypes.STRING,
      allowNUll: false,
      validate: {
          len: [1, 20]
      }
    },
    endDate: {
      type: DataTypes.STRING,
      allowNUll: false,
      validate: {
          len: [1, 20]
      }
    },
    eventTime: {
      type: DataTypes.STRING,
      allowNUll: false,
      validate: {
          len: [1, 20]
      }
    },
    eventCity: {
      type: DataTypes.STRING,
      allowNUll: false,
      validate: {
          len: [1, 20]
      }
    },
    eventState: {
      type: DataTypes.STRING,
      allowNUll: false,
      validate: {
          len: [1, 20]
      }
    },
    eventZipcode: {
      type: DataTypes.STRING,
      allowNUll: false,
      validate: {
          len: [1, 20]
      }
    },
    desciption: {
      type: DataTypes.STRING,
      allowNUll: false,
      validate: {
          len: [1, 1000]
      }
    },
  });
  //creates association between two tables. The primary key from GameCategories table will be id(created column). game_id will be created in the Event table as a foreign key
  Events.associate = function(models) {
    Events.hasMany(models.Participation, {
      onDelete: "cascade"
    });
  };
};
      