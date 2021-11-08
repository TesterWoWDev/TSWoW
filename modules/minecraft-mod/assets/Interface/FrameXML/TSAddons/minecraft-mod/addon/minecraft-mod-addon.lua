--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
local ____exports = {}
local ____Messages = require("TSAddons.minecraft-mod.shared.Messages")
local craftMessage = ____Messages.craftMessage
local returnCraftItemMessage = ____Messages.returnCraftItemMessage
local bagSlotCombo = ____Messages.bagSlotCombo
local showScreen = ____Messages.showScreen
local ____AddonMessage = require("AddonMessage")
local SendCompiledServerMessage = ____AddonMessage.SendCompiledServerMessage
local ____Events = require("Events")
local Events = ____Events.Events
local choices, itemIDs, buttons, enchants, latestBagSlot, mframe, showBtn, showTex, showText, frameToggle, buttonCreate, select, deselect, updateProduct, closeAll, pasTime, waitFrame, waiter
function buttonCreate()
    do
        local i = 0
        while i < 9 do
            local slot = CreateFrame(
                "Button",
                tostring(i),
                mframe
            )
            slot:SetSize(64, 64)
            slot:SetPoint(
                "TOPLEFT",
                mframe,
                "TOPLEFT",
                50 + ((slot:GetWidth() + 5) * math.floor(i % 3)),
                -40 - ((slot:GetHeight() + 5) * math.floor(i / 3))
            )
            slot:RegisterForClicks("AnyDown")
            slot:SetBackdrop({edgeFile = "Interface/DialogFrame/UI-DialogBox-Border", tile = true, tileSize = 22, edgeSize = 22, insets = {left = 4, right = 4, top = 4, bottom = 4}})
            slot:SetBackdropColor(0, 0, 0, 1)
            local texture = slot:CreateTexture("", "BACKGROUND")
            texture:SetTexture("")
            texture:SetSize(60, 60)
            texture:SetPoint("CENTER", 0, 0)
            slot:SetScript(
                "OnClick",
                function(frame, button, down)
                    if button == "LeftButton" then
                        select(frame)
                        updateProduct(0)
                    elseif button == "RightButton" then
                        deselect(frame)
                        updateProduct(0)
                    end
                end
            )
            __TS__ArrayPush(buttons, {slot, texture})
            i = i + 1
        end
    end
end
function select(frame)
    local itemid = ({
        GetCursorInfo()
    })[2]
    if itemid ~= nil then
        local info = {
            GetItemInfo(itemid)
        }
        if info ~= nil then
            buttons[__TS__Number(
                frame:GetName()
            ) + 1][2]:SetTexture(info[10])
            local m = __TS__New(bagSlotCombo)
            m.bagslot = latestBagSlot
            choices[__TS__Number(
                frame:GetName()
            ) + 1] = m
            itemIDs[__TS__Number(
                frame:GetName()
            ) + 1] = itemid
            local itemstring = ({
                GetCursorInfo()
            })[3]
            buttons[__TS__Number(
                frame:GetName()
            ) + 1][1]:SetScript(
                "OnEnter",
                function(____self)
                    GameTooltip:ClearLines()
                    GameTooltip:SetOwner(____self, "CENTER")
                    GameTooltip:SetHyperlink(itemstring)
                    GameTooltip:Show()
                end
            )
            buttons[__TS__Number(
                frame:GetName()
            ) + 1][1]:SetScript(
                "OnLeave",
                function()
                    GameTooltip:Hide()
                end
            )
            if frame:GetName() == "4" then
                local arr = __TS__StringSplit(itemstring, ":")
                enchants = {
                    __TS__Number(arr[3]),
                    __TS__Number(arr[4]),
                    __TS__Number(arr[5]),
                    __TS__Number(arr[6])
                }
            end
        end
    end
end
function deselect(frame)
    buttons[__TS__Number(
        frame:GetName()
    ) + 1][2]:SetTexture("")
    choices[__TS__Number(
        frame:GetName()
    ) + 1] = __TS__New(bagSlotCombo)
    itemIDs[__TS__Number(
        frame:GetName()
    ) + 1] = 0
    buttons[__TS__Number(
        frame:GetName()
    ) + 1][1]:SetScript("OnEnter", nil)
    buttons[__TS__Number(
        frame:GetName()
    ) + 1][1]:SetScript("OnLeave", nil)
    GameTooltip:Hide()
end
function updateProduct(purchase)
    local pkt = __TS__New(craftMessage)
    pkt.itemIDs = itemIDs
    pkt.positions = choices
    pkt.purchase = purchase
    pkt.enchants = enchants
    SendCompiledServerMessage(pkt)
end
function closeAll()
    do
        local i = 0
        while i < #buttons do
            buttons[i + 1][1]:Hide()
            buttons[i + 1][1]:SetScript("OnEnter", nil)
            buttons[i + 1][1]:SetScript("OnLeave", nil)
            buttons[i + 1][2]:SetTexture("")
            i = i + 1
        end
    end
    showTex:SetTexture("")
    showText:SetText("")
    showBtn:SetScript("OnEnter", nil)
    showBtn:SetScript("OnLeave", nil)
    buttons = {}
    choices = {
        __TS__New(bagSlotCombo),
        __TS__New(bagSlotCombo),
        __TS__New(bagSlotCombo),
        __TS__New(bagSlotCombo),
        __TS__New(bagSlotCombo),
        __TS__New(bagSlotCombo),
        __TS__New(bagSlotCombo),
        __TS__New(bagSlotCombo),
        __TS__New(bagSlotCombo)
    }
    itemIDs = {0, 0, 0, 0, 0, 0, 0, 0, 0}
    mframe:Hide()
end
function waiter(delay)
    waitFrame = CreateFrame("Frame", "WaitFrame", UIParent)
    waitFrame:SetScript(
        "OnUpdate",
        function(____self, elapse)
            pasTime = pasTime + elapse
            if delay <= pasTime then
                frameToggle:Click()
                ____self:SetScript("OnUpdate", nil)
                pasTime = 0
            end
        end
    )
end
choices = {
    __TS__New(bagSlotCombo),
    __TS__New(bagSlotCombo),
    __TS__New(bagSlotCombo),
    __TS__New(bagSlotCombo),
    __TS__New(bagSlotCombo),
    __TS__New(bagSlotCombo),
    __TS__New(bagSlotCombo),
    __TS__New(bagSlotCombo),
    __TS__New(bagSlotCombo)
}
itemIDs = {0, 0, 0, 0, 0, 0, 0, 0, 0}
buttons = {}
enchants = {0, 0, 0, 0}
latestBagSlot = {0, 0}
local frameToggleCheck = 0
mframe = CreateFrame("Frame", "minecraftMframe", UIParent)
mframe:SetWidth(300)
mframe:SetHeight(400)
mframe:EnableMouse(true)
mframe:SetMovable(true)
mframe:RegisterForDrag("LeftButton")
mframe:SetScript(
    "OnDragStart",
    function(____self, button)
        ____self:StartMoving()
    end
)
mframe:SetScript(
    "OnDragStop",
    function(____self, button)
        ____self:StopMovingOrSizing()
    end
)
mframe:SetBackdrop({bgFile = "Interface/TutorialFrame/TutorialFrameBackground", edgeFile = "Interface/DialogFrame/UI-DialogBox-Border", tile = true, tileSize = 22, edgeSize = 22, insets = {left = 4, right = 4, top = 4, bottom = 4}})
mframe:SetBackdropColor(0, 0, 0, 0.1)
local mtex = mframe:CreateTexture("tex", "BACKGROUND")
mtex:SetPoint("CENTER", mframe, "CENTER")
mtex:SetSize(293, 393)
mtex:SetTexture("Interface/AchievementFrame/UI-Achievement-StatsBackground")
mframe:SetPoint("CENTER", 0, 0)
mframe:Hide()
local exitbutn = CreateFrame("Button", "exitbtn", mframe)
exitbutn:SetPoint("TOPRIGHT", mframe, "TOPRIGHT", 0, 0)
exitbutn:SetWidth(50)
exitbutn:SetHeight(50)
local extex = exitbutn:CreateTexture("exittex", "BACKGROUND")
extex:SetTexture("Interface\\BUTTONS\\UI-Panel-MinimizeButton-Up.blp")
extex:SetAllPoints(exitbutn)
extex:SetPoint("CENTER", 0, 0)
exitbutn:HookScript(
    "OnClick",
    function(frame, evName, btnDown)
        closeAll()
    end
)
local craftBtn = CreateFrame("Button", "craftbtn", mframe)
craftBtn:SetPoint("CENTER", mframe, "CENTER", 0, -80)
craftBtn:SetWidth(150)
craftBtn:SetHeight(60)
local craftTex = craftBtn:CreateTexture("", "BACKGROUND")
craftTex:SetTexture("Interface\\BUTTONS\\UI-DialogBox-Button-Up.blp")
craftTex:SetAllPoints(craftBtn)
craftTex:SetPoint("CENTER", 0, 0)
local craftText = craftBtn:CreateFontString("", "OVERLAY", "GameFontNormalHuge")
craftText:SetPoint("CENTER", 0, 10)
craftText:SetText("Craft")
craftBtn:HookScript(
    "OnClick",
    function(frame, evName, btnDown)
        PlaySoundFile("Sound\\Interface\\GM_ChatWarning.wav")
        updateProduct(1)
        choices = {
            __TS__New(bagSlotCombo),
            __TS__New(bagSlotCombo),
            __TS__New(bagSlotCombo),
            __TS__New(bagSlotCombo),
            __TS__New(bagSlotCombo),
            __TS__New(bagSlotCombo),
            __TS__New(bagSlotCombo),
            __TS__New(bagSlotCombo),
            __TS__New(bagSlotCombo)
        }
        itemIDs = {0, 0, 0, 0, 0, 0, 0, 0, 0}
        enchants = {0, 0, 0, 0}
        do
            local i = 0
            while i < 9 do
                buttons[i + 1][2]:SetTexture("")
                buttons[i + 1][1]:SetScript("OnEnter", nil)
                buttons[i + 1][1]:SetScript("OnLeave", nil)
                i = i + 1
            end
        end
        showTex:SetTexture("")
        showText:SetText("")
    end
)
showBtn = CreateFrame("Button", "showframe", mframe)
showBtn:SetSize(64, 64)
showBtn:SetPoint("CENTER", mframe, "BOTTOM", 0, 60)
showBtn:SetBackdrop({edgeFile = "Interface/DialogFrame/UI-DialogBox-Border", tile = true, tileSize = 22, edgeSize = 22, insets = {left = 4, right = 4, top = 4, bottom = 4}})
showBtn:SetBackdropColor(0, 0, 0, 1)
showTex = showBtn:CreateTexture("", "BACKGROUND")
showTex:SetTexture("")
showTex:SetSize(60, 60)
showTex:SetPoint("CENTER", 0, 0)
showText = showBtn:CreateFontString("", "OVERLAY", "GameFontNormalHuge")
showText:SetPoint("BOTTOMRIGHT", -10, 10)
showText:SetTextColor(1, 1, 1, 1)
showText:SetText("")
frameToggle = CreateFrame("Button", "toggleframe", UIParent)
frameToggle:SetSize(25, 25)
frameToggle:SetPoint("CENTER", UIParent, "TOPRIGHT", -150, -50)
local frameTex = frameToggle:CreateTexture("", "BACKGROUND")
frameTex:SetTexture("Interface/PAPERDOLLINFOFRAME/UI-EquipmentManager-Toggle")
frameTex:SetAllPoints()
frameToggle:SetScript(
    "OnClick",
    function(frame, button, down)
        ClearCursor()
        if mframe:IsShown() then
            closeAll()
        end
        mframe:Show()
        buttonCreate()
    end
)
Events.AddOns:OnMessage(
    mframe,
    returnCraftItemMessage,
    function(message)
        if message.craftItem ~= 0 then
            showTex:SetTexture(
                ({
                    GetItemInfo(message.craftItem)
                })[10]
            )
            if message.craftItemCount == 0 then
                showText:SetText("")
            else
                showText:SetText(
                    tostring(message.craftItemCount)
                )
            end
            showBtn:SetScript(
                "OnEnter",
                function(____self)
                    GameTooltip:ClearLines()
                    GameTooltip:SetOwner(showBtn, "CENTER")
                    GameTooltip:SetHyperlink(
                        ((((((((((("item:" .. tostring(message.craftItem)) .. ":") .. tostring(message.enchantNum[1])) .. ":0:") .. tostring(message.enchantNum[2])) .. ":") .. tostring(message.enchantNum[3])) .. ":") .. tostring(message.enchantNum[4])) .. ":") .. tostring(message.enchantNum[5])) .. ":0"
                    )
                    GameTooltip:Show()
                end
            )
            showBtn:SetScript(
                "OnLeave",
                function()
                    GameTooltip:Hide()
                end
            )
        else
            showTex:SetTexture("")
            showText:SetText("")
            showBtn:SetScript("OnEnter", nil)
            showBtn:SetScript("OnLeave", nil)
        end
    end
)
Events.Item:OnDeleteItemConfirm(
    mframe,
    function(itemname, qual, bond, questWarn)
        closeAll()
    end
)
Events.MerchantFrame:OnMerchantShow(
    mframe,
    function()
        closeAll()
    end
)
Events.MerchantFrame:OnMerchantUpdate(
    mframe,
    function()
        closeAll()
    end
)
Events.Container:OnBagUpdate(
    mframe,
    function(bagid)
        closeAll()
        if frameToggleCheck == 1 then
            waiter(0.1)
            frameToggleCheck = 0
        end
    end
)
Events.Container:OnItemLocked(
    mframe,
    function(bag, slot)
        if mframe:IsShown() then
            if (slot == nil) or (bag == nil) then
                closeAll()
                print("Put that item into your bags!")
            else
                latestBagSlot = {bag, slot}
            end
        end
    end
)
Events.AddOns:OnMessage(
    mframe,
    showScreen,
    function(msg)
        frameToggleCheck = 1
    end
)
pasTime = 0
waitFrame = nil
local mat = "INV_Misc_WartornScrap_Plate"
local gem = "INV_Misc_Gem_Diamond_01"
local epulet = "INV_Armor_Shoulder_Plate_Naxxramas_RaidWarrior_C_01"
local chain = "INV_Belt_18"
local metal = "INV_Gizmo_MithrilCasing_01"
local reinforcedMetal = "INV_Gizmo_MithrilCasing_02"
local stick = "INV_Fishingpole_06"
local ____string = "INV_Misc_Thread_01"
local dust = "INV_Enchant_DustArcane"
local unrefinedGem = "INV_Enchant_ShardShadowfrostLarge"
local recipes = {{mat, mat, mat, mat, "", mat, "", "", ""}, {mat, chain, mat, mat, gem, mat, "", mat, ""}, {epulet, "", epulet, mat, "", mat, "", "", ""}, {mat, chain, mat, mat, mat, mat, "", "", ""}, {mat, "", mat, mat, mat, mat, mat, mat, mat}, {"", mat, "", mat, "", mat, "", mat, ""}, {mat, "", mat, mat, "", mat, "", "", ""}, {"", "", "", mat, mat, mat, "", "", ""}, {mat, mat, mat, mat, "", mat, mat, "", mat}, {"", "", "", mat, "", mat, mat, "", mat}, {"", gem, "", mat, "", mat, "", mat, ""}, {"", mat, "", mat, gem, mat, "", mat, ""}, {"", metal, "", "", metal, "", "", stick, ""}, {"", "", "", "", metal, metal, "", stick, ""}, {"", "", "", "", metal, "", "", stick, metal}, {"", "", "", "", metal, "", "", stick, ""}, {"", reinforcedMetal, "", "", reinforcedMetal, "", "", stick, ""}, {"", "", "", "", reinforcedMetal, reinforcedMetal, "", stick, ""}, {"", "", "", "", reinforcedMetal, "", "", stick, reinforcedMetal}, {"", "", reinforcedMetal, "", reinforcedMetal, "", stick, "", ""}, {"", gem, "", "", stick, "", "", stick, ""}, {"", stick, "", metal, "", metal, "", "", ""}, {"", stick, "", "", ____string, stick, "", stick, ""}, {stick, "", stick, "", reinforcedMetal, "", stick, "", stick}, {"", dust, "", dust, unrefinedGem, dust, "", dust, ""}, {"", "", "", stick, stick, "", gem, stick, ""}, {"", "", "", "", gem, "", "", stick, ""}, {"skipforblank"}}
local recipeIcons = {"INV_Misc_Desecrated_PlateHelm", "INV_Jewelry_Necklace_06", "INV_Misc_Desecrated_PlateShoulder", "INV_Misc_Cape_19", "INV_Misc_Desecrated_PlateChest", "INV_Misc_Desecrated_PlateBracer", "INV_Misc_Desecrated_PlateGloves", "INV_Misc_Desecrated_PlateBelt", "INV_Misc_Desecrated_PlatePants", "INV_Misc_Desecrated_PlateBoots", "INV_Jewelry_Ring_03", "INV_Jewelry_Talisman_01", "INV_Sword_01", "INV_Mace_03", "INV_Axe_03", "INV_Weapon_ShortBlade_14", "INV_Sword_2H_Blacksmithing_03", "INV_Mace_84", "INV_Axe_60", "INV_Weapon_Halberd15", "INV_Staff_13", "INV_Weapon_Hand_01", "INV_Weapon_Bow_01", "INV_Shield_17", "INV_Enchant_FormulaEpic_01", "INV_Misc_Book_01", "INV_Wand_07"}
local mframeRecipe = CreateFrame("Frame", "mframerecipe", mframe)
mframeRecipe:SetWidth(260)
mframeRecipe:SetHeight(400)
mframeRecipe:SetPoint("RIGHT", mframe, "LEFT")
mframeRecipe:Hide()
mframeRecipe:SetBackdrop({bgFile = "Interface/TutorialFrame/TutorialFrameBackground", edgeFile = "Interface/DialogFrame/UI-DialogBox-Border", tile = true, tileSize = 22, edgeSize = 22, insets = {left = 4, right = 4, top = 4, bottom = 4}})
mframeRecipe:SetBackdropColor(0, 0, 0, 0.1)
local mtexRecipe = mframeRecipe:CreateTexture("recipetex", "BACKGROUND")
mtexRecipe:SetPoint("CENTER", mframeRecipe, "CENTER")
mtexRecipe:SetSize(
    mframeRecipe:GetWidth() - 7,
    mframeRecipe:GetHeight() - 7
)
mtexRecipe:SetTexture("Interface/AchievementFrame/UI-Achievement-StatsBackground")
local exitbutnRecipe = CreateFrame("Button", "exitbtnrec", mframe)
exitbutnRecipe:SetPoint("TOPLEFT", mframe, "TOPLEFT", 5, -5)
exitbutnRecipe:SetWidth(50)
exitbutnRecipe:SetHeight(50)
local extexRecipe = exitbutnRecipe:CreateTexture("exittexrec", "BACKGROUND")
extexRecipe:SetTexture("Interface\\Calendar\\EventNotification.blp")
extexRecipe:SetAllPoints(exitbutnRecipe)
extexRecipe:SetPoint("CENTER", 0, 0)
exitbutnRecipe:HookScript(
    "OnClick",
    function(frame, evName, btnDown)
        if mframeRecipe:IsShown() then
            mframeRecipe:Hide()
        else
            mframeRecipe:Show()
        end
    end
)
__TS__ArrayForEach(
    recipes,
    function(____, value, index)
        local button = CreateFrame("Button", "recipebut", mframeRecipe)
        button:SetSize(45, 45)
        button:SetPoint(
            "CENTER",
            mframeRecipe,
            "TOPLEFT",
            55 + ((button:GetWidth() + 5) * math.floor(index % 4)),
            -50 - ((button:GetHeight() + 5) * math.floor(index / 4))
        )
        local ____ = button.CreateTexture
        local butRecipe = button:CreateTexture("tex", "BACKGROUND")
        butRecipe:SetAllPoints(button)
        butRecipe:SetTexture(
            "Interface/Icons/" .. tostring(recipeIcons[index + 1])
        )
        button:SetScript(
            "OnClick",
            function(frame, button, down)
                choices = {
                    __TS__New(bagSlotCombo),
                    __TS__New(bagSlotCombo),
                    __TS__New(bagSlotCombo),
                    __TS__New(bagSlotCombo),
                    __TS__New(bagSlotCombo),
                    __TS__New(bagSlotCombo),
                    __TS__New(bagSlotCombo),
                    __TS__New(bagSlotCombo),
                    __TS__New(bagSlotCombo)
                }
                itemIDs = {0, 0, 0, 0, 0, 0, 0, 0, 0}
                enchants = {0, 0, 0, 0}
                latestBagSlot = {0, 0}
                __TS__ArrayForEach(
                    buttons,
                    function(____, element, i)
                        element[2]:SetTexture("")
                        element[2]:SetTexture(
                            "Interface/Icons/" .. tostring(value[i + 1])
                        )
                        if value[i + 1] ~= "" then
                            local tooltip = ""
                            if value[i + 1] == mat then
                                tooltip = "Material"
                            elseif value[i + 1] == gem then
                                tooltip = "Gem"
                            elseif value[i + 1] == epulet then
                                tooltip = "Epulet"
                            elseif value[i + 1] == chain then
                                tooltip = "Chain"
                            elseif value[i + 1] == metal then
                                tooltip = "Metal"
                            elseif value[i + 1] == reinforcedMetal then
                                tooltip = "Reinforced Metal"
                            elseif value[i + 1] == stick then
                                tooltip = "Stick"
                            elseif value[i + 1] == ____string then
                                tooltip = "String"
                            elseif value[i + 1] == dust then
                                tooltip = "Enchantment Dust"
                            elseif value[i + 1] == unrefinedGem then
                                tooltip = "Enchantment Gem"
                            end
                            element[1]:SetScript(
                                "OnEnter",
                                function(____self)
                                    GameTooltip:ClearLines()
                                    GameTooltip:SetOwner(element[1], "CENTER")
                                    GameTooltip:SetText(tooltip)
                                    GameTooltip:Show()
                                end
                            )
                            element[1]:SetScript(
                                "OnLeave",
                                function()
                                    GameTooltip:Hide()
                                end
                            )
                        else
                            element[1]:SetScript("OnEnter", nil)
                            element[1]:SetScript("OnLeave", nil)
                        end
                    end
                )
            end
        )
    end
)
return ____exports
