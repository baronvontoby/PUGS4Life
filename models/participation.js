module.exports = function(sequelize, DataTypes) {
  //Creates table "user" in pugs4life_db schema.
  var Participation = sequelize.define("Participation", {
  });
  participation.associate = function(models) {
    participation.belongsTo(models.user,{
      foreignKey: {
        allowNull:false
      }
    });
    participation.belongsTo(models.events, {
      foreignKey: {
        allowNull:false
      }
    })
  }

  return participation;

};
      