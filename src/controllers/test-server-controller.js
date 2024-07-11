const { ServerConfig } = require('../../config');

const TestServer = () => {
    console.log(`Server has been started on port ${ServerConfig.PORT}`);
};

module.exports = TestServer;
