var __BLOCKEDSITES__ = [
  "*.copilot.cx",
  "*.chatgpt.com",
  "*.flibusta.is",
  "*.githubcopilot.com",
  "*.openai.com",
  "*.metamedia.zone",
  "*.metla.press",
  "*.copilot.microsoft.com",
  "*.designer.microsoft.com",
  "*.spotify.com",
  "*.plex.tv",
  "*.chat.openai.com",
  "*.tmetric.com",
  "*.app.tmetric.com",
  "*.gtmetrix.com",
  "*.howlongtobeat.com",
  "*.media.howlongtobeat.com",
  "*.howlongtobeat.com",
  "*.media.howlongtobeat.com",
  "*.assets.howlongtobeat.com",
  "*.ign.com",
  "*.ntc.party.com",
  "*.zomro.com"

];

var proxy;
var direct;

if (typeof __PROXY__ === "undefined") {
    proxy = "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080";
    direct = "DIRECT";
} else {
    proxy = __PROXY__;
    direct = "DIRECT;";
}

var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (__BLOCKEDSITES__.some(function(blockedSite) {
            return new RegExp((blockedSite.startsWith("*") ? "(?:^|\\.)" : "^") + blockedSite.replace(/\./g, "\\.").replace(/^\*\\\./, "") + "$").test(host);
        })) {
            return "+proxy";
        }
        return "DIRECT";
    },
    "+proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host) || /^192\.168\.[0-9]{1-3}\.[0-9]{1-3}$/.test(host)) {
            return direct;
        }
        return proxy;
    }
});
