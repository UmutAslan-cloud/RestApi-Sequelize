export default (sequelize, Sequelize) => {
    const Teacher = sequelize.define("Teacher", {
        firstname: {
            type: Sequelize.STRING
          },
          lastname: {
            type: Sequelize.STRING
          },
        });
      
  
    return Teacher;
  };
