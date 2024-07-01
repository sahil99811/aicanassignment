const express = require('express');
const router = express.Router();
const { addTeacher, getAllTeacher } = require('../controllers/Teacher');
const { auth } = require('../middlewares/Auth');
const { addClass, getAllClass, classAnalytics, classAnalytic } = require('../controllers/Class');
const { getAnalysis } = require('../controllers/School');
const { addStudent } = require('../controllers/Student');

// Route to add a new teacher, requires authentication
router.post('/addteacher', auth, addTeacher);

// Route to get all teachers, requires authentication
router.get('/getallteacher', auth, getAllTeacher);

// Route to add a new student, requires authentication
router.post('/addstudent', auth, addStudent);

// Route to add a new class, requires authentication
router.post('/addclass', auth, addClass);

// Route to get all classes, requires authentication
router.get('/getallclass', auth, getAllClass);

// Route to get class analytics, requires authentication
router.get('/classanalytics', auth, classAnalytics);

// Route to get specific class analytic, requires authentication
router.get('/classAnalytic/:id', auth, classAnalytic);

// Route to get school analysis, requires authentication
router.get('/analysis', auth, getAnalysis);

module.exports = router;
