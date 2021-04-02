--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
tstl_register_module(
    "TSAddons.modules.addon-mod.addon.scrapper",
    function()
        local ____exports = {}
        local ____Events = require("Events")
        local Events = ____Events.Events
        local SendToServer = ____Events.SendToServer
        local ____Messages = require("TSAddons.addon-mod.shared.Messages")
        local bagSlotMessage = ____Messages.bagSlotMessage
        local frameCloseMessage = ____Messages.frameCloseMessage
        local scrapMessage = ____Messages.scrapMessage
        function ____exports.scrapper()
            local itemsInFrame, buttons, mframe, removeButtons, makeButtons
            function removeButtons()
                do
                    local i = 0
                    while i < #buttons do
                        buttons[i + 1]:Hide()
                        i = i + 1
                    end
                end
            end
            function makeButtons()
                removeButtons()
                do
                    local i = 0
                    while i < #itemsInFrame do
                        local icon = GetItemIcon(itemsInFrame[i + 1])
                        local button = CreateFrame("Button", itemsInFrame[i + 1], mframe)
                        local x = i + 1
                        button:SetPoint(
                            "CENTER",
                            mframe,
                            "CENTER",
                            -90 + ((60 * i) - (math.floor(i / 4) * 240)),
                            100 + (60 - (60 * math.ceil(x / 4)))
                        )
                        button:SetWidth(50)
                        button:SetHeight(50)
                        local tex = button:CreateTexture("", "BACKGROUND")
                        tex:SetTexture(icon)
                        tex:SetAllPoints(button)
                        tex:SetPoint("CENTER", 0, 0)
                        button:HookScript(
                            "OnEnter",
                            function(____self)
                                GameTooltip:ClearLines()
                                GameTooltip:SetOwner(button, "CENTER")
                                GameTooltip:SetHyperlink(
                                    "item:" .. tostring(
                                        __TS__ParseInt(
                                            ____self:GetName()
                                        )
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
                        button:HookScript(
                            "OnEnter",
                            function(____self)
                                GameTooltip:ClearLines()
                                GameTooltip:SetOwner(button, "CENTER")
                                GameTooltip:SetHyperlink(
                                    "item:" .. tostring(
                                        __TS__ParseInt(
                                            ____self:GetName()
                                        )
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
            itemsInFrame = {}
            buttons = {}
            local gossip = true
            mframe = CreateFrame("Frame", "Scrapper", UIParent)
            mframe:SetWidth(350)
            mframe:SetHeight(400)
            mframe:SetBackdrop({bgFile = "Interface/TutorialFrame/TutorialFrameBackground", edgeFile = "Interface/DialogFrame/UI-DialogBox-Border", tile = true, tileSize = 22, edgeSize = 22, insets = {left = 4, right = 4, top = 4, bottom = 4}})
            mframe:SetBackdropColor(0, 0, 0, 1)
            mframe:SetPoint("CENTER", 0, 0)
            mframe:Hide()
            local exitbutn = CreateFrame("Button", "", mframe)
            exitbutn:SetPoint("TOPRIGHT", mframe, "TOPRIGHT", 0, 0)
            exitbutn:SetWidth(50)
            exitbutn:SetHeight(50)
            local extex = exitbutn:CreateTexture("", "BACKGROUND")
            extex:SetTexture("Interface\\BUTTONS\\UI-Panel-MinimizeButton-Up.blp")
            extex:SetAllPoints(exitbutn)
            extex:SetPoint("CENTER", 0, 0)
            exitbutn:HookScript(
                "OnClick",
                function(frame, evName, btnDown)
                    SendToServer(
                        __TS__New(frameCloseMessage)
                    )
                    removeButtons()
                    itemsInFrame = {}
                    buttons = {}
                    mframe:Hide()
                end
            )
            local scrapButn = CreateFrame("Button", "", mframe)
            scrapButn:SetPoint("CENTER", mframe, "CENTER", 0, -100)
            scrapButn:SetWidth(150)
            scrapButn:SetHeight(60)
            local scraptex = scrapButn:CreateTexture("", "BACKGROUND")
            scraptex:SetTexture("Interface\\BUTTONS\\UI-DialogBox-Button-Up.blp")
            scraptex:SetAllPoints(scrapButn)
            scraptex:SetPoint("CENTER", 0, 0)
            local searchText = scrapButn:CreateFontString("", "OVERLAY", "GameFontNormalHuge")
            searchText:SetPoint("CENTER", 0, 10)
            searchText:SetText("Scrap")
            scrapButn:HookScript(
                "OnClick",
                function(frame, evName, btnDown)
                    SendToServer(
                        __TS__New(scrapMessage)
                    )
                    removeButtons()
                    itemsInFrame = {}
                    buttons = {}
                end
            )
            Events.Container:OnBagUpdate(
                mframe,
                function(bagID)
                    local packet = __TS__New(frameCloseMessage)
                    SendToServer(packet)
                    removeButtons()
                    itemsInFrame = {}
                    buttons = {}
                    mframe:Hide()
                end
            )
            if gossip then
                Events.Container:OnItemLocked(
                    mframe,
                    function(bag, slot)
                        local pkt = __TS__New(bagSlotMessage)
                        pkt.Bag = bag
                        pkt.Slot = slot
                        pkt.itemID = __TS__Number(
                            ({
                                GetCursorInfo()
                            })[2]
                        )
                        SendToServer(pkt)
                        mframe:Show()
                    end
                )
            end
            Events.AddOns:OnMessage(
                mframe,
                bagSlotMessage,
                function(msg)
                    if msg.itemID > 0 then
                        __TS__ArrayPush(itemsInFrame, msg.itemID)
                        makeButtons()
                    end
                end
            )
        end
        return ____exports
    end
)
