--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
tstl_register_module(
    "TSAddons.modules.addon-mod.shared.Messages",
    function()
        local ____exports = {}
        ____exports.creatureNameMessage = __TS__Class()
        local creatureNameMessage = ____exports.creatureNameMessage
        creatureNameMessage.name = "creatureNameMessage"

function creatureNameMessage.GetID() return 1 end
function creatureNameMessage.prototype.GetID() return 1 end
function creatureNameMessage.prototype.GetSize() return 35 end
function creatureNameMessage.prototype.Read(self,r,o)
    self.entry = r:ReadString(o+0,30);
    self.isName = r:ReadU32(o+31);
end

function creatureNameMessage.prototype.Write(self,r,o)
    r:WriteString(0+o,self.entry,30);
    r:WriteU32(31+o,self.isName);
end

require('Events').addConstructor(creatureNameMessage);

        function creatureNameMessage.prototype.____constructor(self)
            self.entry = "name"
            self.isName = 1
        end
        __TS__Decorate(
            {
                MsgString(30)
            },
            creatureNameMessage.prototype,
            "entry",
            nil
        )
        __TS__Decorate({MsgPrimitive}, creatureNameMessage.prototype, "isName", nil)
        creatureNameMessage = __TS__Decorate({Message}, creatureNameMessage)
        ____exports.itemLootMessage = __TS__Class()
        local itemLootMessage = ____exports.itemLootMessage
        itemLootMessage.name = "itemLootMessage"

function itemLootMessage.GetID() return 2 end
function itemLootMessage.prototype.GetID() return 2 end
function itemLootMessage.prototype.GetSize() return 20 end
function itemLootMessage.prototype.Read(self,r,o)
    self.itemID = r:ReadU32(o+0);
    self.itemCountMin = r:ReadU32(o+4);
    self.itemCountMax = r:ReadU32(o+8);
    self.dropChance = r:ReadDouble(o+12);
end

function itemLootMessage.prototype.Write(self,r,o)
    r:WriteU32(0+o,self.itemID);
    r:WriteU32(4+o,self.itemCountMin);
    r:WriteU32(8+o,self.itemCountMax);
    r:WriteDouble(12+o,self.dropChance);
end

require('Events').addConstructor(itemLootMessage);

        function itemLootMessage.prototype.____constructor(self)
            self.itemID = 0
            self.itemCountMin = 0
            self.itemCountMax = 0
            self.dropChance = 0
        end
        __TS__Decorate({MsgPrimitive}, itemLootMessage.prototype, "itemID", nil)
        __TS__Decorate({MsgPrimitive}, itemLootMessage.prototype, "itemCountMin", nil)
        __TS__Decorate({MsgPrimitive}, itemLootMessage.prototype, "itemCountMax", nil)
        __TS__Decorate({MsgPrimitive}, itemLootMessage.prototype, "dropChance", nil)
        itemLootMessage = __TS__Decorate({Message}, itemLootMessage)
        ____exports.itemLootFinishMessage = __TS__Class()
        local itemLootFinishMessage = ____exports.itemLootFinishMessage
        itemLootFinishMessage.name = "itemLootFinishMessage"

function itemLootFinishMessage.GetID() return 3 end
function itemLootFinishMessage.prototype.GetID() return 3 end
function itemLootFinishMessage.prototype.GetSize() return 4 end
function itemLootFinishMessage.prototype.Read(self,r,o)
    self.finish = r:ReadU32(o+0);
end

function itemLootFinishMessage.prototype.Write(self,r,o)
    r:WriteU32(0+o,self.finish);
end

require('Events').addConstructor(itemLootFinishMessage);

        function itemLootFinishMessage.prototype.____constructor(self)
            self.finish = 0
        end
        __TS__Decorate({MsgPrimitive}, itemLootFinishMessage.prototype, "finish", nil)
        itemLootFinishMessage = __TS__Decorate({Message}, itemLootFinishMessage)
        ____exports.creatureNoExistMessage = __TS__Class()
        local creatureNoExistMessage = ____exports.creatureNoExistMessage
        creatureNoExistMessage.name = "creatureNoExistMessage"

function creatureNoExistMessage.GetID() return 4 end
function creatureNoExistMessage.prototype.GetID() return 4 end
function creatureNoExistMessage.prototype.GetSize() return 4 end
function creatureNoExistMessage.prototype.Read(self,r,o)
    self.finish = r:ReadU32(o+0);
end

function creatureNoExistMessage.prototype.Write(self,r,o)
    r:WriteU32(0+o,self.finish);
end

require('Events').addConstructor(creatureNoExistMessage);

        function creatureNoExistMessage.prototype.____constructor(self)
            self.finish = 0
        end
        __TS__Decorate({MsgPrimitive}, creatureNoExistMessage.prototype, "finish", nil)
        creatureNoExistMessage = __TS__Decorate({Message}, creatureNoExistMessage)
        ____exports.bagSlotMessage = __TS__Class()
        local bagSlotMessage = ____exports.bagSlotMessage
        bagSlotMessage.name = "bagSlotMessage"

function bagSlotMessage.GetID() return 5 end
function bagSlotMessage.prototype.GetID() return 5 end
function bagSlotMessage.prototype.GetSize() return 12 end
function bagSlotMessage.prototype.Read(self,r,o)
    self.Bag = r:ReadU32(o+0);
    self.Slot = r:ReadU32(o+4);
    self.itemID = r:ReadU32(o+8);
end

function bagSlotMessage.prototype.Write(self,r,o)
    r:WriteU32(0+o,self.Bag);
    r:WriteU32(4+o,self.Slot);
    r:WriteU32(8+o,self.itemID);
end

require('Events').addConstructor(bagSlotMessage);

        function bagSlotMessage.prototype.____constructor(self)
            self.Bag = 1
            self.Slot = 1
            self.itemID = 0
        end
        __TS__Decorate({MsgPrimitive}, bagSlotMessage.prototype, "Bag", nil)
        __TS__Decorate({MsgPrimitive}, bagSlotMessage.prototype, "Slot", nil)
        __TS__Decorate({MsgPrimitive}, bagSlotMessage.prototype, "itemID", nil)
        bagSlotMessage = __TS__Decorate({Message}, bagSlotMessage)
        ____exports.frameCloseMessage = __TS__Class()
        local frameCloseMessage = ____exports.frameCloseMessage
        frameCloseMessage.name = "frameCloseMessage"

function frameCloseMessage.GetID() return 6 end
function frameCloseMessage.prototype.GetID() return 6 end
function frameCloseMessage.prototype.GetSize() return 4 end
function frameCloseMessage.prototype.Read(self,r,o)
    self.Close = r:ReadU32(o+0);
end

function frameCloseMessage.prototype.Write(self,r,o)
    r:WriteU32(0+o,self.Close);
end

require('Events').addConstructor(frameCloseMessage);

        function frameCloseMessage.prototype.____constructor(self)
            self.Close = 1
        end
        __TS__Decorate({MsgPrimitive}, frameCloseMessage.prototype, "Close", nil)
        frameCloseMessage = __TS__Decorate({Message}, frameCloseMessage)
        ____exports.scrapMessage = __TS__Class()
        local scrapMessage = ____exports.scrapMessage
        scrapMessage.name = "scrapMessage"

function scrapMessage.GetID() return 7 end
function scrapMessage.prototype.GetID() return 7 end
function scrapMessage.prototype.GetSize() return 4 end
function scrapMessage.prototype.Read(self,r,o)
    self.Close = r:ReadU32(o+0);
end

function scrapMessage.prototype.Write(self,r,o)
    r:WriteU32(0+o,self.Close);
end

require('Events').addConstructor(scrapMessage);

        function scrapMessage.prototype.____constructor(self)
            self.Close = 1
        end
        __TS__Decorate({MsgPrimitive}, scrapMessage.prototype, "Close", nil)
        scrapMessage = __TS__Decorate({Message}, scrapMessage)
        return ____exports
    end
)
