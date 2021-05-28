import * as studentRepository from '../persistency/students-repository.js'
import config from '../config/config.json';


export async function createStudent(pStudent){
    return await studentRepository.create(pStudent);
}

export async function deleteStudent(pId){
    return await studentRepository.remove(pId);
}

export async function getAllStudents(){
    return await studentRepository.getAll();
}

export async function getStudentById(pId){
    let lecture = await studentRepository.findById(pId)
    return lecture;
}

export async function updateStudent(pId, pUpdateMovie){
    let lecture = await studentRepository.updateLecture(pId, pUpdateMovie);
    return lecture;
}


setInterval(function(){
    //populate students by using fakerjs
    console.log('you can populate students')
}, config.populationTimeOutInterval)

//let newMovie = JSON.parse(JSON.stringify(movie))
//Object.assign({}, movie)