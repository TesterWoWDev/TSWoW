--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
tstl_register_module(
    "TSAddons.addn-mod.addon.to-be-learned",
    function()
        local ____exports = {}
        local ____Messages = require("TSAddons.addn-mod.shared.Messages")
        local requestClassSpellsMessage = ____Messages.requestClassSpellsMessage
        local sendClassSpellsMessage = ____Messages.sendClassSpellsMessage
        local sendClassSpellsMessageID = ____Messages.sendClassSpellsMessageID
        function ____exports.toBeLearnedSpellsPane()
            local curSpells = {}
            local mframe = CreateFrame("Frame", "spellpane", UIParent)
            mframe:SetWidth(512)
            mframe:SetHeight(768)
            mframe:SetPoint("CENTER", -100, 0)
            mframe:EnableMouse(true)
            mframe:RegisterForDrag("LeftButton")
            mframe:SetMovable(true)
            mframe:SetScript(
                "OnDragStart",
                function(____self)
                    ____self:StartMoving()
                end
            )
            mframe:SetScript(
                "OnDragStop",
                function(____self)
                    ____self:StopMovingOrSizing()
                end
            )
            mframe:SetBackdrop({bgFile = "Interface/TutorialFrame/TutorialFrameBackground", edgeFile = "Interface/DialogFrame/UI-DialogBox-Border", tile = true, tileSize = 22, edgeSize = 22, insets = {left = 4, right = 4, top = 4, bottom = 4}})
            mframe:SetBackdropColor(0, 0, 0, 1)
            mframe:Hide()
            local exitButn = CreateFrame("Button", "", mframe)
            exitButn:SetPoint("TOPRIGHT", mframe, "TOPRIGHT")
            exitButn:SetWidth(50)
            exitButn:SetHeight(50)
            local exittex = exitButn:CreateTexture("", "BACKGROUND")
            exittex:SetTexture("Interface\\BUTTONS\\UI-Panel-MinimizeButton-Up.blp")
            exittex:SetAllPoints(exitButn)
            exittex:SetPoint("CENTER", 0, 0)
            exitButn:HookScript(
                "OnClick",
                function(frame, evName, btnDown)
                    mframe:Hide()
                end
            )
            __TS__New(requestClassSpellsMessage, 0):write():Send()
            OnCustomPacket(
                sendClassSpellsMessageID,
                function(packet)
                    local customPacket = __TS__New(sendClassSpellsMessage, 0, 0)
                    customPacket:read(packet)
                    curSpells[customPacket.level + 1]:push(customPacket.spellID)
                end
            )
        end
        return ____exports
    end
)
