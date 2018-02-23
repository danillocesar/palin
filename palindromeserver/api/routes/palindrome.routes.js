module.exports = function(app) {
    var palindrome = require('../controllers/palindrome.controller.js');
    app.get('/isPalindrome/:text', palindrome.isPalindrome);
}