export default (sequelize, Sequelize) => {
    const Lecture = sequelize.define("lectures", {
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Lecture;
  };