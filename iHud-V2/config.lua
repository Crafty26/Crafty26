Config = {
    -- if you want log on your console for debug this script then active this options on = true
    DEBUG = false,

    -- Method For get esx object
    ESX_method = "function", --[[ "function" for get esx with function exported from es_extended or "event" for get esx with ]]

    -- event Name for get esx object
    eventNameESX = "esx:getSharedObject",
    
    -- extended Resource Name (default: es_extended)
    extendedName = "es_extended",

    -- Not fonctionaly
    -- "legacy" = USE "es_extended legacy" version OR "final" = USE es_extended v1 final version or others extended version
    VERSION_ESX = "final",

    -- Event name for status update (example: https://prnt.sc/tH4lMmbF4dZx)
    statusEventName = "esx_customui:updateStatus",
    
    ACTIVED = {
        -- Toogle or not JOB
        JOB = true,

        -- Toogle or not JOB2
        JOB2 = true,

        -- Toogle or not MONEY
        MONEY = true,

        -- Toogle or not black_money
        BLACK_MONEY = true,

        -- Toogle or not micro captions hud
        MICRO = true
    }
}