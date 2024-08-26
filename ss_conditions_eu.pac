var __BLOCKEDSITES__ = [
  "*.ua",
  "*.10minutemail.com",
  "*.10minutemail.net",
  "*.15min.lt",
  "*.1lordserials.info",
  "*.24chasa.bg",
  "*.3dyuriki.com",
  "*.444.hu",
  "*.4freerussia.org",
  "*.4pda.ru",
  "9tv.co.il",
  "*.acf.international",
  "*.activatica.org",
  "*.ad.nl",
  "*.adguard.com",
  "*.adobe.com",
  "*.afp.com",
  "*.afpforum.com",
  "*.agenceurope.eu",
  "*.agents.media",
  "*.agentura.ru",
  "*.amnezia.org",
  "aws.amazon.com",
  "*.anime-portal.ru",
  "*.animedub.ru",
  "*.animego-online.org",
  "*.animego.today",
  "*.animelib.me",
  "*.animevost.tv",
  "*.antiwar.in",
  "*.antiwarcommittee.info",
  "*.apollo.lv",
  "*.appleinsider.ru",
  "*.appspot.com",
  "*.arbat.media",
  "*.archiveofourown.org",
  "*.arte.tv",
  "*.aussiedlerbote.de",
  "*.azathabar.com",
  "*.azattyq.com",
  "*.b1tv.ro",
  "*.backmarket.com",
  "*.barentsobserver.co",
  "*.bbc.com",
  "*.bbc.co.uk",
  "*.bbci.co.uk",
  "*.bellingcat.com",
  "*.belsat.eu",
  "*.belsat.pl",
  "*.bereg.io",
  "*.bergfreunde.eu",
  "*.berlingske.dk",
  "*.bfgcdn.com",
  "*.bild.de",
  "*.bing.com",
  "*.blackseanews.net",
  "*.buymeacoffee.com",
  "*.canva.com",
  "*.carousell.sg",
  "*.cdninstagram.com",
  "*.censortracker.org",
  "*.centre-t.com",
  "*.ceskatelevize.cz",
  "*.chatgpt.com",
  "*.cheapsms.ru",
  "*.cherta.media",
  "*.chess.com",
  "*.claude.ai",
  "*.cnews.fr",
  "*.colta.ru",
  "*.compromat.group",
  "*.compromat01.group",
  "*.coollib.net",
  "*.copilot.cx",

  "*.flibusta.is",
 
  "*.githubcopilot.com",


  "*.metamedia.zone",
  "*.metla.press",
  "copilot.microsoft.com",
  "designer.microsoft.com",


  "*.spotify.com",


  "*.plex.tv",
  "*.chat.openai.com",

  "*.tmetric.com",
  "*.app.tmetric.com",
  "*.gtmetrix.com",

  ".howlongtobeat.com",
  ".media.howlongtobeat.com",
  ".howlongtobeat.com",
  ".media.howlongtobeat.com",
  ".assets.howlongtobeat.com",
  ".ign.com",
  ".ntc.party.com",
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
