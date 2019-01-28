process.env.NODE_ENV = 'test';

const request = require('supertest');
const config = require('../config');
const logger = require('../logger.js');
const app = require('../index.js')(logger);
const deploymentTaks=require('../deploymentTasks');

let server;
let authenticatedUser

beforeAll(async () => {
    authenticatedUser = await request.agent(app);
});

beforeEach(async () => {
    server = await app.listen(config.port, () => {
        //Generate 4 qr codes at the deployment of the app
        deploymentTaks.generateQRCodes();
        deploymentTaks.generateRegisterForQrCodes();
        console.log(`Server listening on port ${config.port}...`);
    });
});

test('#GET main page /display ', (done) => {
    return authenticatedUser
        .get('/display')
        .expect(200, done);
});




