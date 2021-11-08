--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
tstl_register_module(
    "TSAddons.minecraft-mod.shared.Messages",
    function()
        local ____exports = {}
        ____exports.bagSlotCombo = __TS__Class()
        local bagSlotCombo = ____exports.bagSlotCombo
        bagSlotCombo.name = "bagSlotCombo"

function bagSlotCombo.GetID() return 9 end
function bagSlotCombo.prototype.GetID() return 9 end
function bagSlotCombo.prototype.GetSize() return 9 end
function bagSlotCombo.prototype.Read(self,r,o)
    r:ReadArray(o+0,self.bagslot,4,2,function(oo) return r:ReadI32(oo) end);
end

function bagSlotCombo.prototype.Write(self,r,o)
    r:WriteArray(0+o,self.bagslot,4,2,function(oo,v) return r:WriteI32(oo,v) end);
end

require('Events').addConstructor(bagSlotCombo);

        function bagSlotCombo.prototype.____constructor(self)
            self.bagslot = {0, 0}
        end
        __TS__Decorate(
            {
                MsgPrimitiveArray(2)
            },
            bagSlotCombo.prototype,
            "bagslot",
            nil
        )
        bagSlotCombo = __TS__Decorate({Message}, bagSlotCombo)
        ____exports.craftMessage = __TS__Class()
        local craftMessage = ____exports.craftMessage
        craftMessage.name = "craftMessage"

function craftMessage.GetID() return 10 end
function craftMessage.prototype.GetID() return 10 end
function craftMessage.prototype.GetSize() return 140 end
function craftMessage.prototype.Read(self,r,o)
    r:ReadArray(o+0,self.itemIDs,4,9,function(oo) return r:ReadI32(oo) end);
    r:ReadClassArray(o+37,self.positions,9,9,function() return __TS__New(bagSlotCombo) end);
    self.purchase = r:ReadU32(o+119);
    r:ReadArray(o+123,self.enchants,4,4,function(oo) return r:ReadI32(oo) end);
end

function craftMessage.prototype.Write(self,r,o)
    r:WriteArray(0+o,self.itemIDs,4,9,function(oo,v) return r:WriteI32(oo,v) end);
    r:WriteClassArray(37+o,self.positions,9,9);
    r:WriteU32(119+o,self.purchase);
    r:WriteArray(123+o,self.enchants,4,4,function(oo,v) return r:WriteI32(oo,v) end);
end

require('Events').addConstructor(craftMessage);

        function craftMessage.prototype.____constructor(self)
            self.itemIDs = {0, 0, 0, 0, 0, 0, 0, 0, 0}
            self.positions = {
                __TS__New(____exports.bagSlotCombo),
                __TS__New(____exports.bagSlotCombo),
                __TS__New(____exports.bagSlotCombo),
                __TS__New(____exports.bagSlotCombo),
                __TS__New(____exports.bagSlotCombo),
                __TS__New(____exports.bagSlotCombo),
                __TS__New(____exports.bagSlotCombo),
                __TS__New(____exports.bagSlotCombo),
                __TS__New(____exports.bagSlotCombo)
            }
            self.purchase = 0
            self.enchants = {0, 0, 0, 0, 0}
        end
        __TS__Decorate(
            {
                MsgPrimitiveArray(9)
            },
            craftMessage.prototype,
            "itemIDs",
            nil
        )
        __TS__Decorate(
            {
                MsgClassArray(9)
            },
            craftMessage.prototype,
            "positions",
            nil
        )
        __TS__Decorate({MsgPrimitive}, craftMessage.prototype, "purchase", nil)
        __TS__Decorate(
            {
                MsgPrimitiveArray(4)
            },
            craftMessage.prototype,
            "enchants",
            nil
        )
        craftMessage = __TS__Decorate({Message}, craftMessage)
        ____exports.returnCraftItemMessage = __TS__Class()
        local returnCraftItemMessage = ____exports.returnCraftItemMessage
        returnCraftItemMessage.name = "returnCraftItemMessage"

function returnCraftItemMessage.GetID() return 11 end
function returnCraftItemMessage.prototype.GetID() return 11 end
function returnCraftItemMessage.prototype.GetSize() return 25 end
function returnCraftItemMessage.prototype.Read(self,r,o)
    self.craftItem = r:ReadU32(o+0);
    self.craftItemCount = r:ReadU32(o+4);
    r:ReadArray(o+8,self.enchantNum,4,4,function(oo) return r:ReadI32(oo) end);
end

function returnCraftItemMessage.prototype.Write(self,r,o)
    r:WriteU32(0+o,self.craftItem);
    r:WriteU32(4+o,self.craftItemCount);
    r:WriteArray(8+o,self.enchantNum,4,4,function(oo,v) return r:WriteI32(oo,v) end);
end

require('Events').addConstructor(returnCraftItemMessage);

        function returnCraftItemMessage.prototype.____constructor(self)
            self.craftItem = 0
            self.craftItemCount = 0
            self.enchantNum = {0, 0, 0, 0, 0}
        end
        __TS__Decorate({MsgPrimitive}, returnCraftItemMessage.prototype, "craftItem", nil)
        __TS__Decorate({MsgPrimitive}, returnCraftItemMessage.prototype, "craftItemCount", nil)
        __TS__Decorate(
            {
                MsgPrimitiveArray(4)
            },
            returnCraftItemMessage.prototype,
            "enchantNum",
            nil
        )
        returnCraftItemMessage = __TS__Decorate({Message}, returnCraftItemMessage)
        ____exports.showScreen = __TS__Class()
        local showScreen = ____exports.showScreen
        showScreen.name = "showScreen"

function showScreen.GetID() return 12 end
function showScreen.prototype.GetID() return 12 end
function showScreen.prototype.GetSize() return 0 end
function showScreen.prototype.Read(self,r,o)
end

function showScreen.prototype.Write(self,r,o)
end

require('Events').addConstructor(showScreen);

        function showScreen.prototype.____constructor(self)
        end
        showScreen = __TS__Decorate({Message}, showScreen)
        return ____exports
    end
)
