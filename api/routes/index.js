const
    express = require('express'),
    router = express.Router(),
    jwt = require('express-jwt')
//var auth = jwt({
//  secret: process.env.secret,
//  userProperty: 'payload'
//});

//var ctrlProfile = require('../controllers/profile');
//var ctrlAuth = require('../controllers/authentication');
const
    ctrlNews = require('../controllers/newshandling'),
    ctrlActivities = require('../controllers/activitieshandling'),
    ctrlSelective = require('../controllers/selectivehandling'),
    ctrlResult = require('../controllers/resulthandling'),
    ctrlIntro = require('../controllers/introhandling'),
    ctrlCalendar = require('../controllers/calendarhandling'),
    ctrlForms = require('../controllers/clientform'),
    ctrlStreets = require('../controllers/streethandling'),
    ctrlGarbages = require('../controllers/garbagehandling'),
    ctrlRequests = require('../controllers/requestshandling')
//const ctrlStream = require('../controllers/stream')



router.get('/news', ctrlNews.sendNews)
router.get('/archives', ctrlNews.sendArchive)
router.post('/upload', ctrlNews.Addnews)
router.post('/userform', ctrlForms.sendClientForm)

router.get('/intro', ctrlIntro.sendIntro)
router.get('/activities', ctrlActivities.sendActivities)
router.post('/play', ctrlResult.result)
router.post('/checkname', ctrlResult.checkName)
router.post('/checkpass', ctrlResult.checkPass)

//router.post('/updateact', ctrlActivities.updateActivities)
router.post('/updateintro', ctrlIntro.updateIntro)
router.post('/selectiveupdate', ctrlSelective.updateSelective)
router.get('/cal', ctrlCalendar.saveCal)
router.get('/cal-zeg-single', ctrlCalendar.calZegSingle)
router.get('/cal-zeg-multi', ctrlCalendar.calZegMulti)
router.get('/cal-videk', ctrlCalendar.calVidek)
router.get('/results', ctrlResult.retrieveTop)
router.post('/streets', ctrlStreets.sendStreets)
router.get('/areas', ctrlStreets.sendAreas)
router.get('/garbages', ctrlGarbages.sendGarbages)
router.post('/requests', ctrlRequests.saveRequests)
router.get('/requests', ctrlRequests.sendRequests)

//router.post('/result', ctrlResult.retrieveOwn);
//router.post('/signup', ctrlAuth.register);
//router.post('/signin', ctrlAuth.login);
//router.post('/play', ctrlResult.result);

module.exports = router;
