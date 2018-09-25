var utility = require('../utility');
var validationSchema = require('../validation/validation_schema');
var indexController = require('../controllers/indexController');

module.exports = function (server, User) {

    server.get('/', function(req, res) {
        indexController.getAllUsers(req, res, User);
    });

    server.post('/', utility.validateRequest(validationSchema.user), function(req, res){
        indexController.saveNewUser(req, res, User);
    });

    server.put('/:id', utility.validateRequest(validationSchema.user), function(req, res){
        indexController.updateUser(req, res, User);
    });

    server.del('/:id', function(req, res) {
        indexController.deleteUser(req, res, User);
    });

    return this;

};