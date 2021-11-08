--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
local ____exports = {}
local ____Messages = require("TSAddons.testing.shared.Messages")
local spellValuesFinish = ____Messages.spellValuesFinish
local spellValuesIncoming = ____Messages.spellValuesIncoming
local spellValuesMessage = ____Messages.spellValuesMessage
local ____Events = require("Events")
local Events = ____Events.Events
local spellInfo, buttons, mframe, showSpells, hideOldSpells
function showSpells()
    do
        local i = 0
        while i < #spellInfo do
            local button = CreateFrame("Button", spellInfo[i + 1][1], mframe)
            button:SetSize(40, 40)
            button:SetPoint(
                "CENTER",
                mframe,
                "TOP",
                0 - (button:GetWidth() * (i % 6)),
                0 - (math.floor(i / 6) * button:GetHeight())
            )
            button:SetBackdrop({bgFile = "Interface/TutorialFrame/TutorialFrameBackground", edgeFile = "Interface/DialogFrame/UI-DialogBox-Border", tile = true, tileSize = 10, edgeSize = 10, insets = {left = 2, right = 2, top = 2, bottom = 2}})
            button:SetBackdropColor(0, 0, 0, 1)
            local searchText = button:CreateFontString("", "OVERLAY", "GameFontNormal")
            searchText:SetPoint("BOTTOMRIGHT", -5, 5)
            searchText:SetText(spellInfo[i + 1][2])
            button:HookScript(
                "OnEnter",
                function(____self)
                    GameTooltip:ClearLines()
                    GameTooltip:SetOwner(button, "CENTER")
                    GameTooltip:SetHyperlink(
                        "spell:" .. tostring(
                            ____self:GetName()
                        )
                    )
                    GameTooltip:Show()
                end
            )
            button:HookScript(
                "OnLeave",
                function()
                    GameTooltip:Hide()
                end
            )
            __TS__ArrayPush(buttons, button)
            i = i + 1
        end
    end
end
function hideOldSpells()
    do
        local i = 0
        while i < #buttons do
            buttons[i + 1]:Hide()
            i = i + 1
        end
    end
    buttons = {}
    spellInfo = {}
end
spellInfo = {}
buttons = {}
mframe = CreateFrame("Frame", "mainaddon", UIParent)
mframe:SetWidth(512)
mframe:SetHeight(768)
mframe:SetPoint("TOPRIGHT", 60, -120)
Events.AddOns:OnMessage(
    mframe,
    spellValuesIncoming,
    function(msg)
        hideOldSpells()
    end
)
Events.AddOns:OnMessage(
    mframe,
    spellValuesMessage,
    function(msg)
        __TS__ArrayPush(spellInfo, {msg.spellID, msg.spellCt, msg.spellName})
    end
)
Events.AddOns:OnMessage(
    mframe,
    spellValuesFinish,
    function(msg)
        showSpells()
    end
)
return ____exports
