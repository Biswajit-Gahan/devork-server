const systemUtils = {
    getServerPort() {
        return process.env.PORT
            ? parseInt(process.env.PORT)
            : 9000;
    },

    getServerEnvironment() {
        return process.env.NODE_ENV
            ? process.env.NODE_ENV.toUpperCase()
            : "PRODUCTION";
    },

    isDevelopmentServer() {
        return process.env.NODE_ENV
            ? process.env.NODE_ENV.trim().toLowerCase() === "development"
            : false;
    }
};

export default systemUtils;