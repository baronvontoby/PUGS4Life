module.exports = function(sequelize, DataTypes) {
  //Creates table "user" in pugs4life_db schema.
  var Events = sequelize.define("Events", {
  //creates "game_id" column in "Events" table, cannot be NULL.
    start_date: {
      type: DataTypes.STRING,
      allowNUll: false,
      validate: {
          len: [1, 20]
      }
    },
    end_date: {
      type: DataTypes.STRING,
      allowNUll: false,
      validate: {
          len: [1, 20]
      }
    },
    event_time: {
      type: DataTypes.STRING,
      allowNUll: false,
      validate: {
          len: [1, 20]
      }
    },
    event_city: {
      type: DataTypes.STRING,
      allowNUll: false,
      validate: {
          len: [1, 20]
      }
    },
    event_state: {
      type: DataTypes.STRING,
      allowNUll: false,
      validate: {
          len: [1, 20]
      }
    },
    event_zipcode: {
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
    Events.belongsTo(models.GameCategory, {
      foreignKey: {
        allowNUll:false
      }
    });
    Events.hasMany(models.Participation, {
      onDelete: "cascade"
    });
  };
  return Events;
};
      