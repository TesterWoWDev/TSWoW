--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
tstl_register_module(
    "TSAddons.testing.addon.custom-quest",
    function()
        local ____exports = {}
        local ____Messages = require("TSAddons.testing.shared.Messages")
        local attemptToComplete = ____Messages.attemptToComplete
        local questInfo = ____Messages.questInfo
        local questInfoID = ____Messages.questInfoID
        function ____exports.customQuest()
            local progressText, descriptionText, completeButton, rewardButton, rewardTex, rewardCount, updateQuestInfo
            function updateQuestInfo(reqType, reqID, reqCountTotal, reqCountCur, reqName, reqDescription, rewID, rewCount)
                if reqID > 0 then
                    local s = "Kill "
                    if reqType == 1 then
                        s = "Loot "
                    end
                    if reqCountCur >= reqCountTotal then
                        reqCountCur = reqCountTotal
                        completeButton:SetNormalTexture("Interface\\Buttons\\UI-DialogBox-Button-Up")
                    else
                        completeButton:SetNormalTexture("Interface\\Buttons\\UI-DialogBox-Button-Disabled")
                    end
                    progressText:SetText(
                        ((((tostring(s) .. tostring(reqName)) .. ": ") .. tostring(reqCountCur)) .. "/") .. tostring(reqCountTotal)
                    )
                    descriptionText:SetText(reqDescription)
                    rewardCount:SetText(
                        tostring(rewCount) .. ""
                    )
                    rewardTex:SetTexture(
                        GetItemIcon(rewID)
                    )
                    rewardButton:HookScript(
                        "OnEnter",
                        function(____self)
                            GameTooltip:ClearLines()
                            GameTooltip:SetOwner(rewardButton, "CENTER")
                            GameTooltip:SetHyperlink(
                                "item:" .. tostring(rewID)
                            )
                            GameTooltip:Show()
                        end
                    )
                    rewardButton:HookScript(
                        "OnLeave",
                        function()
                            GameTooltip:Hide()
                        end
                    )
                else
                    progressText:SetText("You have no quest!")
                    descriptionText:SetText("")
                    rewardCount:SetText("")
                    rewardTex:SetTexture("")
                    rewardButton:HookScript(
                        "OnEnter",
                        function(____self) return nil end
                    )
                    rewardButton:HookScript(
                        "OnLeave",
                        function() return nil end
                    )
                end
            end
            local shown = false
            local mframe = CreateFrame("Frame", "customQuest", UIParent)
            mframe:SetWidth(256)
            mframe:SetHeight(160)
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
            mframe:SetBackdrop({bgFile = "Interface\\AchievementFrame\\UI-Achievement-Parchment", edgeFile = "Interface/DialogFrame/UI-DialogBox-Border", tile = false, tileSize = 22, edgeSize = 22, insets = {left = 4, right = 4, top = 4, bottom = 4}})
            mframe:Hide()
            local exitButn = CreateFrame("Button", "exitBtn", mframe)
            exitButn:SetPoint("TOPRIGHT", mframe, "TOPRIGHT", -5, -5)
            exitButn:SetWidth(32)
            exitButn:SetHeight(32)
            local exittex = exitButn:CreateTexture("", "BACKGROUND")
            exittex:SetTexture("Interface\\BUTTONS\\UI-Panel-MinimizeButton-Up.blp")
            exittex:SetAllPoints(exitButn)
            exittex:SetPoint("CENTER", 0, 0)
            exitButn:HookScript(
                "OnClick",
                function(frame, evName, btnDown)
                    shown = false
                    mframe:Hide()
                end
            )
            local showBtn = CreateFrame("Button", "showBtn", UIParent)
            showBtn:SetWidth(22)
            showBtn:SetHeight(22)
            showBtn:SetPoint("TOPRIGHT", -5, -85)
            local showTex = showBtn:CreateTexture("", "BACKGROUND")
            showTex:SetTexture("Interface\\BUTTONS\\UI-GroupLoot-Dice-Up.blp")
            showTex:SetAllPoints(showBtn)
            showBtn:HookScript(
                "OnClick",
                function(frame, evName, btnDown)
                    if shown then
                        shown = false
                        mframe:Hide()
                    else
                        shown = true
                        mframe:Show()
                    end
                end
            )
            local nameText = mframe:CreateFontString("", "OVERLAY", "QuestTitleFont")
            nameText:SetText("Sidequest")
            nameText:SetPoint("TOP", mframe, "TOP", 0, -15)
            progressText = mframe:CreateFontString("", "OVERLAY", "QuestFont")
            progressText:SetText("")
            progressText:SetPoint("TOP", nameText, "TOP", 0, -20)
            descriptionText = mframe:CreateFontString("", "OVERLAY", "QuestFont")
            descriptionText:SetText("")
            descriptionText:SetPoint("TOP", progressText, "TOP", 0, -20)
            descriptionText:SetWidth(
                mframe:GetWidth() - 50
            )
            descriptionText:SetJustifyH("CENTER")
            completeButton = CreateFrame("Button", "", mframe)
            completeButton:SetSize(96, 32)
            completeButton:SetPoint("BOTTOMRIGHT", mframe, "BOTTOMRIGHT", -15, 5)
            local completeTex = completeButton:CreateTexture("", "BACKGROUND")
            completeTex:SetTexture("Interface\\BUTTONS\\UI-DialogBox-Button-Up")
            completeTex:SetAllPoints(completeButton)
            local completeText = completeButton:CreateFontString("", "OVERLAY", "GameTooltipText")
            completeText:SetText("Complete")
            completeText:SetPoint("CENTER", 0, 5)
            completeButton:HookScript(
                "OnClick",
                function(frame, evName, btnDown)
                    local pkt = __TS__New(attemptToComplete, 0)
                    pkt:write():Send()
                end
            )
            completeButton:Show()
            rewardButton = CreateFrame("Button", "", mframe)
            rewardButton:SetPoint("BOTTOMLEFT", mframe, "BOTTOMLEFT", 15, 13)
            rewardButton:SetWidth(40)
            rewardButton:SetHeight(40)
            rewardTex = rewardButton:CreateTexture("tex1", "BACKGROUND")
            rewardTex:SetTexture("")
            rewardTex:SetAllPoints(rewardButton)
            rewardCount = rewardButton:CreateFontString("", "OVERLAY", "GameTooltipText")
            rewardCount:SetText("")
            rewardCount:SetPoint("BOTTOMRIGHT", rewardButton, "BOTTOMRIGHT", -5, 5)
            OnCustomPacket(
                questInfoID,
                function(packet)
                    mframe:Show()
                    local msg = __TS__New(questInfo, 0, 0, 0, 0, "", "", 0, 0)
                    msg:read(packet)
                    updateQuestInfo(msg.reqType, msg.reqID, msg.reqCountTotal, msg.reqCountCur, msg.reqName, msg.reqDescription, msg.rewID, msg.rewCount)
                end
            )
        end
        return ____exports
    end
)
