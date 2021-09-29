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
    ctrlRequests = require('../controllers/requestshandling'),
    ctrlContact = require('../controllers/contactshandling')
//const ctrlStream = require('../controllers/stream')


// NEWS:
router.get('/news', ctrlNews.sendNews)
router.get('/active-news', ctrlNews.sendActiveNews)
router.post('/update-news', ctrlNews.updateNews)
router.post('/update-news-activity', ctrlNews.updateNewsActivity)
router.post('/archive-news', ctrlNews.archiveNews)
router.post('/delete-news', ctrlNews.deleteNews)

// CONTACT:
router.get('/contact', ctrlContact.sendContact)
router.post('/save-contact', ctrlContact.saveContact)
router.post('/delete-contact', ctrlContact.deleteContact)
router.post('/update-contact', ctrlContact.updateContact)

// router.post('/update-news', ctrlNews.updateNews)
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
router.get('/lom-dates', ctrlStreets.sendAreasWithDates)
router.get('/garbages', ctrlGarbages.sendGarbages)
router.get('/active-garbages', ctrlGarbages.sendActiveGarbages)
router.post('/requests', ctrlRequests.saveRequests)
router.get('/requests', ctrlRequests.sendRequests)
router.post('/updaterequest', ctrlRequests.updateRequests)
router.post('/update-garbage', ctrlGarbages.updateGarbage)
router.post('/add-garbage', ctrlGarbages.saveGarbage)
router.post('/delete-garbage', ctrlGarbages.deleteGarbage)

//temporary
router.post('/update-street-dates', ctrlStreets.updateStreets)

//router.post('/result', ctrlResult.retrieveOwn);
//router.post('/signup', ctrlAuth.register);
//router.post('/signin', ctrlAuth.login);
//router.post('/play', ctrlResult.result);

module.exports = router;
