var winutil = require('../')

var msgid = winutil().RegisterWindowMessage('TaskbarCreated')
console.info('msgid:', msgid)