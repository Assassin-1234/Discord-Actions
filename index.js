const superagent = require("superagent");

function hug() {
    async function my(){
    var {
        body
    } = await superagent.get("https://nekos.life/api/v2/img/hug");
    var gif = body.url;
    return gif;}
    my()
}
function kiss(){
    async function my(){
    var {
        body
    } = await superagent.get("https://nekos.life/api/kiss");
    var gif = body.url;
    return gif;}
    my()
}
function pat(){
    async function my(){
    var {
        body
    } = await superagent.get("https://nekos.life/api/v2/img/pat");
    var gif = body.url;
    return gif;}
    my()
}
function poke(){
    async function my(){
    var {
        body
    } = await superagent.get("https://nekos.life/api/v2/img/poke");
    var gif = body.url;
    return gif;}
    my()
}
function slap(){
    async function my(){
    var {
        body
    } = await superagent.get("https://nekos.life/api/v2/img/slap");
    var gif = body.url;
    return gif;}
    my()
}
function tickle(){
    async function my(){
    var {
        body
    } = await superagent.get("https://nekos.life/api/v2/img/tickle");
    var gif = body.url;
    return gif;}
    my()
}
function smug(){
    async function my(){
    var {
        body
    } = await superagent.get("https://nekos.life/api/v2/img/smug");
    var gif = body.url;
    return gif;}
    my()
}

module.exports.hug = hug;
module.exports.kiss = kiss;
module.exports.poke = poke;
module.exports.pat = pat;
module.exports.slap = slap;
module.exports.tickle = tickle;
module.exports.smug = smug;