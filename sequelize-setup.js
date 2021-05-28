import Sequelize from 'sequelize';
import dbConfig from "./config/config.json";
import LectureModel from "./models/lecture-model.js";
import TeacherModel from "./models/teacher-model.js";
import StudentModel from "./models/student-model.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.lectures = LectureModel(sequelize, Sequelize);
db.teachers = TeacherModel(sequelize, Sequelize);
db.students = StudentModel(sequelize, Sequelize);

// create relationship
db.lectures.hasMany(db.teachers);

// use it to force to create the db from scratch 
// .sync({ force: true })
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

export default db;


