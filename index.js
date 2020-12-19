const superagent = require("superagent");

function hug() {
    var {
        body
    } = await superagent.get("https://nekos.life/api/v2/img/hug");
    var gif = body.url;
    return gif;
}
function kiss(){
    var {
        body
    } = await superagent.get("https://nekos.life/api/kiss");
    var gif = body.url;
    return gif;
}
function pat(){
    var {
        body
    } = await superagent.get("https://nekos.life/api/v2/img/pat");
    var gif = body.url;
    return gif;
}
function poke(){
    var {
        body
    } = await superagent.get("https://nekos.life/api/v2/img/poke");
    var gif = body.url;
    return gif;
}
function slap(){
    var {
        body
    } = await superagent.get("https://nekos.life/api/v2/img/slap");
    var gif = body.url;
    return gif;
}
function tickle(){
    var {
        body
    } = await superagent.get("https://nekos.life/api/v2/img/tickle");
    var gif = body.url;
    return gif;
}
function smug(){
    var {
        body
    } = await superagent.get("https://nekos.life/api/v2/img/smug");
    var gif = body.url;
    return gif;
}

module.exports.hug = hug;
module.exports.kiss = kiss;
module.exports.poke = poke;
module.exports.pat = pat;
module.exports.slap = slap;
module.exports.tickle = tickle;
module.exports.smug = smug;