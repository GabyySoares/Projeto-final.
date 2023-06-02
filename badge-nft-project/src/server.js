const express = require("express");
const { badgeRouter } = require("./routes/badge.routes");
const { metadataRouter } = require("./routes/metadata.routes");

const main = () => {

    const app = express();

    const port = 8080;

    app.use(express.json());

    app.use(badgeRouter);
    app.use(metadataRouter);

    app.listen(port, () => console.log("Server ON"));
};

main();