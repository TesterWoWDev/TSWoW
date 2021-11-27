--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
tstl_register_module(
    "TSAddons.addn-mod.shared.Messages",
    function()
        local ____exports = {}
        ____exports.creatureNameMessageID = 1
        ____exports.creatureNameMessage = __TS__Class()
        local creatureNameMessage = ____exports.creatureNameMessage
        creatureNameMessage.name = "creatureNameMessage"
        function creatureNameMessage.prototype.____constructor(self, isName, entry)
            self.isName = 1
            self.entry = "name"
            self.isName = isName
            self.entry = entry
        end
        function creatureNameMessage.prototype.read(self, read)
            self.isName = read:ReadUInt32()
            self.entry = read:ReadString()
        end
        function creatureNameMessage.prototype.write(self)
            local packet = MakeCustomPacket(____exports.creatureNameMessageID, 50)
            packet:WriteUInt32(self.isName)
            packet:WriteString(self.entry)
            return packet
        end
        ____exports.itemLootMessageID = 2
        ____exports.itemLootMessage = __TS__Class()
        local itemLootMessage = ____exports.itemLootMessage
        itemLootMessage.name = "itemLootMessage"
        function itemLootMessage.prototype.____constructor(self)
            self.size = 0
            self.entryID = 0
            self.arr = {{1, 1, 1, 1}}
            self.size = 0
            self.entryID = 0
            self.arr = {{1, 1, 1, 1}}
        end
        function itemLootMessage.prototype.read(self, read)
            table.remove(self.arr)
            self.size = read:ReadUInt32()
            self.entryID = read:ReadUInt32()
            do
                local i = 0
                while i < self.size do
                    local id = read:ReadDouble()
                    local min = read:ReadDouble()
                    local max = read:ReadDouble()
                    local dropChance = read:ReadDouble()
                    __TS__ArrayPush(self.arr, {id, min, max, dropChance})
                    i = i + 1
                end
            end
        end
        function itemLootMessage.prototype.write(self)
            local packet = MakeCustomPacket(____exports.itemLootMessageID, 0)
            packet:WriteUInt32(self.size)
            packet:WriteUInt32(self.entryID)
            do
                local i = 0
                while i < self.size do
                    packet:WriteDouble(self.arr[i + 1][1])
                    packet:WriteDouble(self.arr[i + 1][2])
                    packet:WriteDouble(self.arr[i + 1][3])
                    packet:WriteDouble(self.arr[i + 1][4])
                    i = i + 1
                end
            end
            return packet
        end
        ____exports.creatureNoExistMessageID = 4
        ____exports.creatureNoExistMessage = __TS__Class()
        local creatureNoExistMessage = ____exports.creatureNoExistMessage
        creatureNoExistMessage.name = "creatureNoExistMessage"
        function creatureNoExistMessage.prototype.____constructor(self, finish)
            self.finish = 0
            self.finish = finish
        end
        function creatureNoExistMessage.prototype.read(self, read)
            self.finish = read:ReadUInt32()
        end
        function creatureNoExistMessage.prototype.write(self)
            local packet = MakeCustomPacket(____exports.creatureNoExistMessageID, 0)
            packet:WriteUInt32(self.finish)
            return packet
        end
        ____exports.blackjackPlayerMessageID = 5
        ____exports.blackjackPlayerMessage = __TS__Class()
        local blackjackPlayerMessage = ____exports.blackjackPlayerMessage
        blackjackPlayerMessage.name = "blackjackPlayerMessage"
        function blackjackPlayerMessage.prototype.____constructor(self, value, bet)
            self.value = 0
            self.bet = 0
            self.value = value
            self.bet = bet
        end
        function blackjackPlayerMessage.prototype.read(self, read)
            self.value = read:ReadUInt32()
            self.bet = read:ReadUInt32()
        end
        function blackjackPlayerMessage.prototype.write(self)
            local packet = MakeCustomPacket(____exports.blackjackPlayerMessageID, 0)
            packet:WriteUInt32(self.value)
            packet:WriteUInt32(self.bet)
            return packet
        end
        ____exports.blackjackSendHandMessageID = 6
        ____exports.blackjackSendHandMessage = __TS__Class()
        local blackjackSendHandMessage = ____exports.blackjackSendHandMessage
        blackjackSendHandMessage.name = "blackjackSendHandMessage"
        function blackjackSendHandMessage.prototype.____constructor(self, cards, bet)
            self.cards = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0}
            self.bet = 0
            self.cards = cards
            self.bet = bet
        end
        function blackjackSendHandMessage.prototype.read(self, read)
            do
                local i = 0
                while i < 10 do
                    self.cards[i + 1] = read:ReadUInt32()
                    i = i + 1
                end
            end
            self.bet = read:ReadUInt32()
        end
        function blackjackSendHandMessage.prototype.write(self)
            local packet = MakeCustomPacket(____exports.blackjackSendHandMessageID, 0)
            do
                local i = 0
                while i < 10 do
                    packet:WriteUInt32(self.cards[i + 1])
                    i = i + 1
                end
            end
            packet:WriteUInt32(self.bet)
            return packet
        end
        ____exports.requestClassSpellsMessageID = 7
        ____exports.requestClassSpellsMessage = __TS__Class()
        local requestClassSpellsMessage = ____exports.requestClassSpellsMessage
        requestClassSpellsMessage.name = "requestClassSpellsMessage"
        function requestClassSpellsMessage.prototype.____constructor(self, value)
            self.value = 0
            self.value = value
        end
        function requestClassSpellsMessage.prototype.read(self, read)
            self.value = read:ReadUInt32()
        end
        function requestClassSpellsMessage.prototype.write(self)
            local packet = MakeCustomPacket(____exports.requestClassSpellsMessageID, 0)
            packet:WriteUInt32(self.value)
            return packet
        end
        ____exports.sendClassSpellsMessageID = 8
        ____exports.sendClassSpellsMessage = __TS__Class()
        local sendClassSpellsMessage = ____exports.sendClassSpellsMessage
        sendClassSpellsMessage.name = "sendClassSpellsMessage"
        function sendClassSpellsMessage.prototype.____constructor(self, level, spellID)
            self.level = 0
            self.spellID = 0
            self.level = level
            self.spellID = spellID
        end
        function sendClassSpellsMessage.prototype.read(self, read)
            self.level = read:ReadUInt32()
            self.spellID = read:ReadUInt32()
        end
        function sendClassSpellsMessage.prototype.write(self)
            local packet = MakeCustomPacket(____exports.sendClassSpellsMessageID, 0)
            packet:WriteUInt32(self.level)
            packet:WriteUInt32(self.spellID)
            return packet
        end
        return ____exports
    end
)
