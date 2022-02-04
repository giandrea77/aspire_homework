var serverConfig = {

    local: {
        port: 56565
    },
    default: {
        port: 56565
    }    

}

exports.get = function get(env) {

    if ( env == null || env == undefined ) {
        console.log("Use NODE_ENV={local | dev | test | production} node server.js")
        process.exit(0);
    } 
    
    return serverConfig[env] || serverConfig.default;
    
}