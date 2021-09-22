import * as app from "tns-core-modules/application";
import { DemoConfig } from "./DemoConfig";

const config = new DemoConfig;

if (DemoConfig.signedIn){
    app.run({ moduleName: "app-root" });
}
else{
    app.run({ moduleName: "Login/Login-page" });
}

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
