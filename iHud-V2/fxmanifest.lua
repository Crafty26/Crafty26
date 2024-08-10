fx_version "adamant"
game "gta5"
author "dakom#7549"
sell_by "https://adns-tech.fr"
description "only sell by adns-tech.fr !"
version "1.0.0"

ui_page "NUI/index.html"

lua54 "yes";

files({
    "NUI/index.html",
    "NUI/src/css/reset.css",
    "NUI/src/css/style.css",
    "NUI/src/images/*.png",
    "NUI/src/js/config.js",
    "NUI/src/js/index.js",
    "NUI/src/js/events.js"
})

shared_script "config.lua"
client_script "client/*.lua";

escrow_ignore {
	'config.lua'
}
dependency '/assetpacks'