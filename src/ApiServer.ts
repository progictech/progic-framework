import {ServerLoader} from "@tsed/common";
import {ServerConfig} from "./server/ServerConfig";
import {Constant} from "./constant/Constant";
import {Log} from "./service/Log";

export class ApiServer{
    static server:ServerLoader;
    static async initAndStart(){
        const initialize=await this.init();
        if(initialize===Constant.FAILED){
            return Constant.FAILED;
        }
        const starter=await this.start();
        if(initialize===Constant.FAILED){
            return Constant.FAILED;
        }
        return Constant.SUCCESS;
    }
    static async init(){
        this.server = await ServerLoader.bootstrap(ServerConfig);
        return Constant.SUCCESS;
    }
    static async start(){
        if(!this.server){
            return Constant.FAILED;
        }
        try {
            await this.server.listen()
            return Constant.SUCCESS;
        } catch (e) {
            return Constant.FAILED;
        }
    }
}

ApiServer.initAndStart().then(value=>{
    // Log.info(value);
    Log.info("Hello world!");
});
