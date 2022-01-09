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
            local packet = MakeCustomPacket(____exports.spellValuesMessageID, 0)
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
            local packet = MakeCustomPacket(____exports.spellValuesFinishID, 0)
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
            local packet = MakeCustomPacket(____exports.spellValuesIncomingID, 0)
            packet:WriteUInt32(self.value)
            return packet
        end
        ____exports.attemptToCompleteID = 23
        ____exports.attemptToComplete = __TS__Class()
        local attemptToComplete = ____exports.attemptToComplete
        attemptToComplete.name = "attemptToComplete"
        function attemptToComplete.prototype.____constructor(self, msg)
            self.msg = 0
            self.msg = msg
        end
        function attemptToComplete.prototype.read(self, read)
            self.msg = read:ReadUInt32()
        end
        function attemptToComplete.prototype.write(self)
            local packet = MakeCustomPacket(____exports.attemptToCompleteID, 0)
            packet:WriteUInt32(self.msg)
            return packet
        end
        ____exports.questInfoID = 24
        ____exports.questInfo = __TS__Class()
        local questInfo = ____exports.questInfo
        questInfo.name = "questInfo"
        function questInfo.prototype.____constructor(self, reqType, reqID, reqCountTotal, reqCountCur, reqName, reqDescription, rewID, rewCount)
            self.reqType = 0
            self.reqID = 0
            self.reqCountTotal = 0
            self.reqCountCur = 0
            self.reqName = ""
            self.reqDescription = ""
            self.rewID = 0
            self.rewCount = 0
            self.reqType = reqType
            self.reqID = reqID
            self.reqCountTotal = reqCountTotal
            self.reqCountCur = reqCountCur
            self.reqName = reqName
            self.reqDescription = reqDescription
            self.rewID = rewID
            self.rewCount = rewCount
        end
        function questInfo.prototype.read(self, read)
            self.reqType = read:ReadUInt8()
            self.reqID = read:ReadUInt32()
            self.reqCountTotal = read:ReadUInt8()
            self.reqCountCur = read:ReadUInt8()
            self.reqName = read:ReadString()
            self.reqDescription = read:ReadString()
            self.rewID = read:ReadUInt32()
            self.rewCount = read:ReadUInt32()
        end
        function questInfo.prototype.write(self)
            local packet = MakeCustomPacket(____exports.questInfoID, 0)
            packet:WriteUInt8(self.reqType)
            packet:WriteUInt32(self.reqID)
            packet:WriteUInt8(self.reqCountTotal)
            packet:WriteUInt8(self.reqCountCur)
            packet:WriteString(self.reqName)
            packet:WriteString(self.reqDescription)
            packet:WriteUInt32(self.rewID)
            packet:WriteUInt32(self.rewCount)
            return packet
        end
        return ____exports
    end
)
