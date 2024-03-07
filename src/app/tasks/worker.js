const celery = require('celery-node');
const celeryConfig=require('./config')
const mailer=require('./mailer')
const worker = celery.createWorker(
  celeryConfig.BROKER_URL,
  celeryConfig.CELERY_RESULT_BACKEND,
  celeryConfig.QUEUE 
);




worker.register("tasks.add", (a, b) => a + b);
worker.register("tasks.mailer",mailer)
worker.start();