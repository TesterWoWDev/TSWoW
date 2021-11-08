--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
tstl_register_module(
    "TSAddons.testing.shared.Messages",
    function()
        local ____exports = {}
        ____exports.spellValuesMessage = __TS__Class()
        local spellValuesMessage = ____exports.spellValuesMessage
        spellValuesMessage.name = "spellValuesMessage"

function spellValuesMessage.GetID() return 13 end
function spellValuesMessage.prototype.GetID() return 13 end
function spellValuesMessage.prototype.GetSize() return 59 end
function spellValuesMessage.prototype.Read(self,r,o)
    self.spellID = r:ReadU32(o+0);
    self.spellCt = r:ReadU32(o+4);
    self.spellName = r:ReadString(o+8,50);
end

function spellValuesMessage.prototype.Write(self,r,o)
    r:WriteU32(0+o,self.spellID);
    r:WriteU32(4+o,self.spellCt);
    r:WriteString(8+o,self.spellName,50);
end

require('Events').addConstructor(spellValuesMessage);

        function spellValuesMessage.prototype.____constructor(self)
            self.spellID = -1
            self.spellCt = -1
            self.spellName = ""
        end
        __TS__Decorate({MsgPrimitive}, spellValuesMessage.prototype, "spellID", nil)
        __TS__Decorate({MsgPrimitive}, spellValuesMessage.prototype, "spellCt", nil)
        __TS__Decorate(
            {
                MsgString(50)
            },
            spellValuesMessage.prototype,
            "spellName",
            nil
        )
        spellValuesMessage = __TS__Decorate({Message}, spellValuesMessage)
        ____exports.spellValuesFinish = __TS__Class()
        local spellValuesFinish = ____exports.spellValuesFinish
        spellValuesFinish.name = "spellValuesFinish"

function spellValuesFinish.GetID() return 14 end
function spellValuesFinish.prototype.GetID() return 14 end
function spellValuesFinish.prototype.GetSize() return 4 end
function spellValuesFinish.prototype.Read(self,r,o)
    self.finish = r:ReadU32(o+0);
end

function spellValuesFinish.prototype.Write(self,r,o)
    r:WriteU32(0+o,self.finish);
end

require('Events').addConstructor(spellValuesFinish);

        function spellValuesFinish.prototype.____constructor(self)
            self.finish = -1
        end
        __TS__Decorate({MsgPrimitive}, spellValuesFinish.prototype, "finish", nil)
        spellValuesFinish = __TS__Decorate({Message}, spellValuesFinish)
        ____exports.spellValuesIncoming = __TS__Class()
        local spellValuesIncoming = ____exports.spellValuesIncoming
        spellValuesIncoming.name = "spellValuesIncoming"

function spellValuesIncoming.GetID() return 15 end
function spellValuesIncoming.prototype.GetID() return 15 end
function spellValuesIncoming.prototype.GetSize() return 4 end
function spellValuesIncoming.prototype.Read(self,r,o)
    self.finish = r:ReadU32(o+0);
end

function spellValuesIncoming.prototype.Write(self,r,o)
    r:WriteU32(0+o,self.finish);
end

require('Events').addConstructor(spellValuesIncoming);

        function spellValuesIncoming.prototype.____constructor(self)
            self.finish = -1
        end
        __TS__Decorate({MsgPrimitive}, spellValuesIncoming.prototype, "finish", nil)
        spellValuesIncoming = __TS__Decorate({Message}, spellValuesIncoming)
        return ____exports
    end
)
