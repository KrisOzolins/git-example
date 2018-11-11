const another_module = require('./another_module');

module.exports.setFlagToTrue = function () {
    another_module.flag = true;
};