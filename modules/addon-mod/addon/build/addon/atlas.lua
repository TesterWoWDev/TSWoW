--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
tstl_register_module(
    "TSAddons.modules.addon-mod.addon.atlas",
    function()
        local ____exports = {}
        local ____Messages = require("TSAddons.addon-mod.shared.Messages")
        local creatureNameMessage = ____Messages.creatureNameMessage
        local creatureNoExistMessage = ____Messages.creatureNoExistMessage
        local itemLootFinishMessage = ____Messages.itemLootFinishMessage
        local itemLootMessage = ____Messages.itemLootMessage
        local ____Events = require("Events")
        local Events = ____Events.Events
        local SendToServer = ____Events.SendToServer
        function ____exports.atlas()
            local itemArray, allButtons, page, columns, rows, mframe, pageCt, searchBox, searchLoot, resetFrames, createButtons, clearButtons
            function searchLoot()
                local pkt = __TS__New(creatureNameMessage)
                pkt.entry = searchBox:GetText()
                if #pkt.entry > 0 then
                    if __TS__Number(pkt.entry) > 0 then
                        pkt.isName = 0
                        pkt.entry = tostring(
                            __TS__Number(pkt.entry)
                        )
                    end
                    resetFrames()
                    pageCt:SetText("Page 1/1")
                    SendToServer(pkt)
                end
            end
            function resetFrames()
                page = 0
                clearButtons()
                itemArray = {}
            end
            function createButtons()
                local length = columns * rows
                if #itemArray < ((columns * rows) * (page + 1)) then
                    length = #itemArray % (columns * rows)
                end
                do
                    local i = 0
                    while i < length do
                        local item = itemArray[(i + ((columns * rows) * page)) + 1]
                        local icon = GetItemIcon(item[1])
                        local button = CreateFrame("Button", item[1], mframe)
                        button:SetPoint(
                            "TOPLEFT",
                            mframe,
                            "TOPLEFT",
                            55 + ((i % columns) * 120),
                            -50 + (-90 * (math.floor(i / columns) + 1))
                        )
                        button:SetWidth(40)
                        button:SetHeight(40)
                        local tex = button:CreateTexture("tex1", "BACKGROUND")
                        tex:SetTexture(icon)
                        tex:SetAllPoints(button)
                        tex:SetPoint("CENTER", 0, 0)
                        local text1 = button:CreateFontString("", "OVERLAY", "GameTooltipText")
                        text1:SetPoint("CENTER", 0, 30)
                        if item[2] == item[3] then
                            text1:SetText(
                                "Drop #: " .. tostring(item[2])
                            )
                        else
                            text1:SetText(
                                (("Drop #: " .. tostring(item[2])) .. "-") .. tostring(item[3])
                            )
                        end
                        local text2 = button:CreateFontString("", "OVERLAY", "GameTooltipText")
                        text2:SetPoint("CENTER", 0, -30)
                        text2:SetText(
                            ("Drop %: " .. tostring(item[4])) .. "%"
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
                        __TS__ArrayPush(allButtons, button)
                        i = i + 1
                    end
                end
            end
            function clearButtons()
                do
                    local i = 0
                    while i < #allButtons do
                        allButtons[i + 1]:Hide()
                        i = i + 1
                    end
                end
                allButtons = {}
            end
            itemArray = {}
            allButtons = {}
            page = 0
            columns = 4
            rows = 7
            local shown = false
            mframe = CreateFrame("Frame", "atlas", UIParent)
            mframe:SetWidth(512)
            mframe:SetHeight(768)
            mframe:SetPoint("CENTER", 0, 0)
            mframe:SetBackdrop({bgFile = "Interface/TutorialFrame/TutorialFrameBackground", edgeFile = "Interface/DialogFrame/UI-DialogBox-Border", tile = true, tileSize = 22, edgeSize = 22, insets = {left = 4, right = 4, top = 4, bottom = 4}})
            mframe:SetBackdropColor(0, 0, 0, 1)
            mframe:Hide()
            pageCt = mframe:CreateFontString("", "OVERLAY", "GameTooltipText")
            pageCt:SetPoint("TOPLEFT", 110, -82)
            pageCt:SetText(
                (("Page " .. tostring(page + 1)) .. "/") .. 1
            )
            local frameLine = CreateFrame("Frame", "", mframe)
            frameLine:SetWidth(560)
            frameLine:SetHeight(8)
            frameLine:SetPoint("LEFT", mframe, "TOPLEFT", 8, -115)
            local lineTex = frameLine:CreateTexture("", "BACKGROUND")
            lineTex:SetTexture("Interface\\AchievementFrame\\UI-Achievement-MetalBorder-Top.blp")
            lineTex:SetAllPoints(frameLine)
            local showBtn = CreateFrame("Button", "show", UIParent)
            showBtn:SetWidth(22)
            showBtn:SetHeight(22)
            showBtn:SetPoint("TOPRIGHT", -5, -105)
            local showTex = showBtn:CreateTexture("", "BACKGROUND")
            showTex:SetTexture("Interface\\BUTTONS\\UI-GroupLoot-Dice-Up.blp")
            showTex:SetAllPoints(showBtn)
            showBtn:HookScript(
                "OnClick",
                function(frame, evName, btnDown)
                    if shown then
                        shown = false
                        mframe:Hide()
                        searchBox:Hide()
                    else
                        shown = true
                        mframe:Show()
                        searchBox:Show()
                        searchBox:SetFocus()
                    end
                end
            )
            local exitButn = CreateFrame("Button", "", mframe)
            exitButn:SetPoint("TOPRIGHT", mframe, "TOPRIGHT", 0, 0)
            exitButn:SetWidth(50)
            exitButn:SetHeight(50)
            local exittex = exitButn:CreateTexture("", "BACKGROUND")
            exittex:SetTexture("Interface\\BUTTONS\\UI-Panel-MinimizeButton-Up.blp")
            exittex:SetAllPoints(exitButn)
            exittex:SetPoint("CENTER", 0, 0)
            exitButn:HookScript(
                "OnClick",
                function(frame, evName, btnDown)
                    shown = false
                    mframe:Hide()
                    searchBox:Hide()
                end
            )
            local lastPageButn = CreateFrame("Button", "", mframe)
            lastPageButn:SetPoint("LEFT", mframe, "TOPLEFT", 70, -90)
            lastPageButn:SetWidth(35)
            lastPageButn:SetHeight(35)
            local lasttex = lastPageButn:CreateTexture("", "BACKGROUND")
            lasttex:SetTexture("Interface\\BUTTONS\\UI-SpellbookIcon-PrevPage-Up.blp")
            lasttex:SetAllPoints(lastPageButn)
            lasttex:SetPoint("CENTER", 0, 0)
            lastPageButn:HookScript(
                "OnClick",
                function(frame, evName, btnDown)
                    if page > 0 then
                        page = page - 1
                        pageCt:SetText(
                            (("Page " .. tostring(page + 1)) .. "/") .. tostring(
                                math.ceil(#itemArray / (columns * rows))
                            )
                        )
                    end
                    clearButtons()
                    createButtons()
                end
            )
            local nextPageButn = CreateFrame("Button", "", mframe)
            nextPageButn:SetPoint("LEFT", mframe, "TOPLEFT", 170, -90)
            nextPageButn:SetWidth(35)
            nextPageButn:SetHeight(35)
            local nexttex = nextPageButn:CreateTexture("", "BACKGROUND")
            nexttex:SetTexture("Interface\\BUTTONS\\UI-SpellbookIcon-NextPage-Up.blp")
            nexttex:SetAllPoints(nextPageButn)
            nexttex:SetPoint("CENTER", 0, 0)
            nextPageButn:HookScript(
                "OnClick",
                function(frame, evName, btnDown)
                    if #itemArray > ((columns * rows) * (page + 1)) then
                        page = page + 1
                        pageCt:SetText(
                            (("Page " .. tostring(page + 1)) .. "/") .. tostring(
                                math.ceil(#itemArray / (columns * rows))
                            )
                        )
                    end
                    clearButtons()
                    createButtons()
                end
            )
            searchBox = CreateFrame("EditBox", "", UIParent)
            searchBox:SetSize(115, 30)
            searchBox:SetPoint("RIGHT", mframe, "TOPRIGHT", -100, -90)
            searchBox:SetFont("Fonts\\ARIALN.TTF", 14)
            searchBox:SetMaxLetters(30)
            searchBox:SetMultiLine(false)
            local searchtexBox = searchBox:CreateTexture("", "BACKGROUND")
            searchtexBox:SetTexture("Interface\\COMMON\\Common-Input-Border.blp")
            searchtexBox:SetPoint("CENTER", searchBox, "CENTER", -5, -5)
            searchtexBox:SetSize(115, 30)
            searchBox:SetScript(
                "OnEnterPressed",
                function(frame)
                    searchBox:ClearFocus()
                    searchLoot()
                end
            )
            searchBox:SetScript(
                "OnEscapePressed",
                function(frame)
                    searchBox:ClearFocus()
                end
            )
            searchBox:Hide()
            local searchButn = CreateFrame("Button", "", mframe)
            searchButn:SetPoint("LEFT", searchBox, "RIGHT", 0, -5)
            searchButn:SetWidth(60)
            searchButn:SetHeight(35)
            local searchtex = searchButn:CreateTexture("", "BACKGROUND")
            searchtex:SetTexture("Interface\\BUTTONS\\UI-DialogBox-Button-Up.blp")
            searchtex:SetAllPoints(searchButn)
            searchtex:SetPoint("CENTER", 0, 0)
            local searchText = searchButn:CreateFontString("", "OVERLAY", "GameTooltipText")
            searchText:SetPoint("CENTER", 0, 6)
            searchText:SetText("Search")
            searchButn:HookScript(
                "OnClick",
                function(frame, evName, btnDown)
                    searchLoot()
                end
            )
            Events.AddOns:OnMessage(
                mframe,
                itemLootMessage,
                function(msg)
                    __TS__ArrayPush(itemArray, {msg.itemID, msg.itemCountMin, msg.itemCountMax, msg.dropChance})
                end
            )
            Events.AddOns:OnMessage(
                mframe,
                itemLootFinishMessage,
                function(msg)
                    pageCt:SetText(
                        (("Page " .. tostring(page + 1)) .. "/") .. tostring(
                            math.ceil(#itemArray / (columns * rows))
                        )
                    )
                    createButtons()
                end
            )
            Events.AddOns:OnMessage(
                mframe,
                creatureNoExistMessage,
                function(msg)
                    print("DOES NOT EXIST!!!")
                end
            )
        end
        return ____exports
    end
)
