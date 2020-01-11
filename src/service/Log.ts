import {$log} from "@tsed/common";

export class Log{
    static info(...data: any[]){
        $log.info(data);
    }
}
