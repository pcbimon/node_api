export function ResultFormated(resultcode:string,resultmsg:string,resultdata:object) {
    let retjson = {};
    if(resultcode == "EREQUEST"){
        resultcode = "1";
    }
    retjson = {
        "code":resultcode,
        "message" : resultmsg,
        "data": resultdata
    };
    return (retjson);
}
