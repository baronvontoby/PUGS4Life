module.exports = function(sequelize, DataTypes) {
  //Creates table "user" in pugs4life_db schema.
  var Participation = sequelize.define("Participation", {
  // //creates "user_id" column in "Participation" table, cannot be NULL.
  //   user_id: {
  //   },
  //   //creates "event_id" column in "Participation" table. Value cannot be NULL.
  //   event_id: {
  //   }
  });
  //creates association between two tables.
  Participation.associate = function(models) {
    Participation.belongsTo(models.User, {
      foreignKey: {
        allowNUll:false
      }
    });
    Participation.belongsTo(models.Events, {
      foreignKey: {
        allowNull:false
      }
    });
  };

  return Participation;
};
      