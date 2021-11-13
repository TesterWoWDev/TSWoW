--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
tstl_register_module(
    "TSAddons.testing.shared.Messages",
    function()
        local ____exports = {}
        ____exports.spellValuesMessageID = 20
        ____exports.spellValuesMessage = __TS__Class()
        local spellValuesMessage = ____exports.spellValuesMessage
        spellValuesMessage.name = "spellValuesMessage"
        function spellValuesMessage.prototype.____constructor(self, spellID, spellCt, spellName)
            self.spellID = -1
            self.spellCt = -1
            self.spellName = ""
            self.spellID = spellID
            self.spellCt = spellCt
            self.spellName = spellName
        end
        function spellValuesMessage.prototype.read(self, read)
            self.spellID = read:ReadUInt32()
            self.spellCt = read:ReadUInt32()
            self.spellName = read:ReadString()
        end
        function spellValuesMessage.prototype.write(self)
            local packet = MakeCustomPacket(____exports.spellValuesMessageID, 70)
            packet:WriteUInt32(self.spellID)
            packet:WriteUInt32(self.spellCt)
            packet:WriteString(self.spellName)
            return packet
        end
        ____exports.spellValuesFinishID = 21
        ____exports.spellValuesFinish = __TS__Class()
        local spellValuesFinish = ____exports.spellValuesFinish
        spellValuesFinish.name = "spellValuesFinish"
        function spellValuesFinish.prototype.____constructor(self, value)
            self.value = 0
            self.value = value
        end
        function spellValuesFinish.prototype.read(self, read)
            self.value = read:ReadUInt32()
        end
        function spellValuesFinish.prototype.write(self)
            local packet = MakeCustomPacket(____exports.spellValuesFinishID, 5)
            packet:WriteUInt32(self.value)
            return packet
        end
        ____exports.spellValuesIncomingID = 22
        ____exports.spellValuesIncoming = __TS__Class()
        local spellValuesIncoming = ____exports.spellValuesIncoming
        spellValuesIncoming.name = "spellValuesIncoming"
        function spellValuesIncoming.prototype.____constructor(self, value)
            self.value = 0
            self.value = value
        end
        function spellValuesIncoming.prototype.read(self, read)
            self.value = read:ReadUInt32()
        end
        function spellValuesIncoming.prototype.write(self)
            local packet = MakeCustomPacket(____exports.spellValuesIncomingID, 5)
            packet:WriteUInt32(self.value)
            return packet
        end
        return ____exports
    end
)
