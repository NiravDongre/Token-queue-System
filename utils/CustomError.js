

class PreferedError extends Error {
    constructor(message, status){
        const errorstatus = error.status || 500;
        const errormsg = error.message || "Server crashed"
    }
}