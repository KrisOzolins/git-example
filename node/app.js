global.translations = {
    en: {
        'log': 'Log'
    },
    lv: {
        'log': 'Ieraksts'
    }
};

const another_module = require('./another_module');
const and_another_module = require('./and_another_module');
const Logger = require('./logger');
const logger = new Logger();

logger.on('logEvent', (data) => {
    console.log(`Received logEvent event with data: ${data}`);
});
logger.log('Test log message from app. And set logger flag to true.');

console.log('Another module flag: ' + another_module.flag);
and_another_module.setFlagToTrue();
console.log('Another module flag: ' + another_module.flag);