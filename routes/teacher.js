import express from 'express';
var router = express.Router();
import * as service from '../service/teacher-service.js'

router.post('/:id/rent', function(req, res, next) {
    let lectureId = req.params.id;
    service.createLectureTeacher(lectureId, req.body);
    res.status(200).send({});
});


export default router;