import express from 'express';
var router = express.Router();
import * as service from '../service/lecture-service.js'

/* GET lectures listing. */
router.get('/', async function(req, res, next) {
  const allLectures = await service.getAllLectures();
  res.send(allLectures);
});

/** Add a new movie */
router.post('/', async function(req, res, next) {
  const newLecture = req.body; 
  const createdLecture = await service.createLecture(newLecture);
  res.status(201).send(createdLecture);
});

/** get a movie by id */
router.get('/:id', async function(req, res, next) {
  let lectureId = req.params.id;
  const lecture = await service.getLecturesbyId(lectureId)
  res.send(lecture);
});


/** delete a movie by id */
router.delete('/:id', async function(req, res, next) {
  let lectureId = req.params.id;
  await service.deleteLecture(lectureId);
  res.status(200).send({});
});

/** update a movie by id */
router.put('/:id', async function(req, res, next) {
  let lectureId = req.params.id;
  let lectureToBeUpdated = req.body;
  let updatedLecture = await service.updateLecture(lectureId, lectureToBeUpdated);
  res.status(200).send(updatedLecture);
});

export default router;