const EventEmitter = require('events');

class Logger extends EventEmitter {
    constructor() {
        super();
        this.logCount = 0;
        this.someFlag = false;
        this.url = 'https://logger.test/log';
    }
    log(message) {
        // Send HTTP request to the API
        this.logCount++;
        console.log(`[${this.logCount}] ${translations.en.log}: ${message}`);
        this.emit('logEvent', message);
    }
}

module.exports = Logger;