const schedule = require('node-schedule');

//secomd, minute, hour, day of month, month, day of week
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds());
});

setTimeout(function () {
    tarefa1.cancel();
    console.log('Cancelando Tarefa 1!');
}, 20000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(0, 6)];
regra.hour = 18;
regra.minute = 30;

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds());
});
