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
                        completeButton:Show()
                    else
                        completeButton:Hide()
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
                    completeButton:Hide()
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
            mframe:SetBackdrop({bgFile = "Interface/TutorialFrame/TutorialFrameBackground", edgeFile = "Interface/DialogFrame/UI-DialogBox-Border", tile = true, tileSize = 22, edgeSize = 22, insets = {left = 4, right = 4, top = 4, bottom = 4}})
            mframe:SetBackdropColor(0, 0, 0, 1)
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
            local nameText = mframe:CreateFontString("", "OVERLAY", "GameTooltipText")
            nameText:SetText("SideQuest")
            nameText:SetPoint("TOP", mframe, "TOP", 0, -10)
            progressText = mframe:CreateFontString("", "OVERLAY", "GameTooltipText")
            progressText:SetText("")
            progressText:SetPoint("TOP", nameText, "TOP", 0, -20)
            descriptionText = mframe:CreateFontString("", "OVERLAY", "GameTooltipText")
            descriptionText:SetText("")
            descriptionText:SetPoint("TOP", progressText, "TOP", 0, -20)
            descriptionText:SetWidth(
                mframe:GetWidth() - 20
            )
            descriptionText:SetJustifyH("CENTER")
            completeButton = CreateFrame("Button", "", mframe)
            completeButton:SetSize(62, 32)
            completeButton:SetPoint("BOTTOMRIGHT", mframe, "BOTTOMRIGHT", -10, 10)
            local completeTex = completeButton:CreateTexture("", "BACKGROUND")
            completeTex:SetTexture("Interface\\BUTTONS\\UI-Panel-MinimizeButton-Up.blp")
            completeTex:SetAllPoints(completeButton)
            local completeText = completeButton:CreateFontString("", "OVERLAY", "GameTooltipText")
            completeText:SetText("Complete")
            completeText:SetAllPoints(completeButton)
            completeButton:HookScript(
                "OnClick",
                function(frame, evName, btnDown)
                    local pkt = __TS__New(attemptToComplete, 0)
                    pkt:write():Send()
                end
            )
            completeButton:Hide()
            rewardButton = CreateFrame("Button", "", mframe)
            rewardButton:SetPoint("BOTTOMLEFT", mframe, "BOTTOMLEFT", 15, 10)
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
