import app from "./index";
import systemUtils from "./utils/system-utils";

app.listen(systemUtils.getServerPort(), () => {
    console.log("SERVER STATUS: RUNNING");
    console.log("SERVER PORT: " + systemUtils.getServerPort());
    console.log("SERVER ENVIRONMENT: " + systemUtils.getServerEnvironment());
});