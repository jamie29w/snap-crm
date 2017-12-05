//Uncomment secret when user auth is implemented

module.exports = {
    port: process.env.PORT || 8900,
    secret: process.env.SECRET || "blue kangaroo slippers riot fans",
    db: process.env.DB || "mongodb://localhost/clients"
};
