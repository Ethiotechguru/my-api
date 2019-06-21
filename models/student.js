'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    fieldOfStudy: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {});
  student.associate = function(models) {
    // associations can be defined here
  };
  return student;
};