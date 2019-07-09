module.exports = function(sequelize, DataTypes) {
  //Creates table "user" in pugs4life_db schema.
  var Participation = sequelize.define("Participation", {
  });
  Participation.associate = function(models) {
    Participation.belongsTo(models.User,{
      foreignKey: {
        allowNull:false
      }
    });
    Participation.belongsTo(models.Events, {
      foreignKey: {
        allowNull:false
      }
    })
  }

  return Participation;

};
      