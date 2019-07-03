module.exports = function(sequelize, DataTypes) {
  //Creates table "user" in pugs4life_db schema.
  var Events = sequelize.define("Events", {
  //creates "game_id" column in "Events" table, cannot be NULL.
    event_name: {
      type: DataTypes.STRING,
      allowNUll: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNUll: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNUll: false
    },
    event_time: {
      type: DataTypes.TIME,
      allowNUll: false
    },
    event_city: {
      type: DataTypes.STRING,
      allowNUll: false
    },
    event_state: {
      type: DataTypes.STRING,
      allowNUll: false
    },
    event_zipcode: {
      type: DataTypes.STRING,
      allowNUll: false
    },
    description: {
      type: DataTypes.STRING,
      allowNUll: false
    },
  });
  //creates association between two tables. The primary key from GameCategories table will be id(created column). game_id will be created in the Event table as a foreign key
  Events.associate = function(models) {
    Events.belongsTo(models.GameCategory, {
      foreignKey: {
        allowNUll:false
      }
    });


    // Events.hasMany(models.Participation, {
    //   onDelete: "cascade"
    // });


    Events.belongsToMany(models.User, { 
      through: models.Participation, 
    });

    Events.belongsTo(models.User, {
    })
  };
  return Events;
};
      