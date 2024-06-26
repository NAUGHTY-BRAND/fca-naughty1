const logger = require("../logger");
module.exports = function() {
    var Logger = global.Fca.Require.logger;
    switch (process.platform) {
        case 'win32': return Logger.Warning(global.Fca.Require.Language.ExtraUpTime.NotSupport);
        case 'darwin': return Logger.Warning(global.Fca.Require.Language.ExtraUpTime.NotSupport);
        case 'linux':
            if (process.env.REPL_SLUG) {
                var Value = global.Fca.Require.ConfigNaughty;
                var Fetch = global.Fca.Require.Fetch;
                    if (Value.Uptime) {
                        logger.Normal(global.Fca.Require.Language.ExtraUpTime.Uptime);//
                        return setInterval(function() {
                            Fetch.get(`https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`);
                        },10*1000);
                    }
                else return;
            }
            else { 
                Logger.Warning(global.Fca.Require.Language.ExtraUpTime.NotSupport);
            }  
            break;
        default:
        Logger.Warning(global.Fca.Require.Language.ExtraUpTime.NotSupport);
    }
};
