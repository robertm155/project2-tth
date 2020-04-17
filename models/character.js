module.exports = function(sequelize, DataTypes) {
  var character = sequelize.define("characters", {
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
    
    },

    Class: {
      type: DataTypes.STRING,
      allowNull: true,
      
    },
   
    Strength: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
    },
    Defense: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
    },

    Magic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
    },
    Speed: {
      type: DataTypes.STRING,
      allowNull: true,
    }
    
  });

  //Post.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
   // Post.belongsTo(models.Author, {
     // foreignKey: {
        //allowNull: false
      //}
   // });
 // };

  return character;
};
