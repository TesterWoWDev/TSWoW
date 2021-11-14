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
            local packet = MakeCustomPacket(____exports.creatureNameMessageID, 40)
            packet:WriteUInt32(self.isName)
            packet:WriteString(self.entry)
            return packet
        end
        ____exports.itemLootMessageID = 2
        ____exports.itemLootMessage = __TS__Class()
        local itemLootMessage = ____exports.itemLootMessage
        itemLootMessage.name = "itemLootMessage"
        function itemLootMessage.prototype.____constructor(self, itemID, itemCountMin, itemCountMax, dropChance)
            self.itemID = 0
            self.itemCountMin = 0
            self.itemCountMax = 0
            self.dropChance = 0
            self.itemID = itemID
            self.itemCountMin = itemCountMin
            self.itemCountMax = itemCountMax
            self.dropChance = dropChance
        end
        function itemLootMessage.prototype.read(self, read)
            self.itemID = read:ReadUInt32()
            self.itemCountMin = read:ReadUInt32()
            self.itemCountMax = read:ReadUInt32()
            self.dropChance = read:ReadDouble()
        end
        function itemLootMessage.prototype.write(self)
            local packet = MakeCustomPacket(____exports.itemLootMessageID, 20)
            packet:WriteUInt32(self.itemID)
            packet:WriteUInt32(self.itemCountMin)
            packet:WriteUInt32(self.itemCountMax)
            packet:WriteDouble(self.dropChance)
            return packet
        end
        ____exports.itemLootFinishMessageID = 3
        ____exports.itemLootFinishMessage = __TS__Class()
        local itemLootFinishMessage = ____exports.itemLootFinishMessage
        itemLootFinishMessage.name = "itemLootFinishMessage"
        function itemLootFinishMessage.prototype.____constructor(self, entry)
            self.entry = 0
            self.entry = entry
        end
        function itemLootFinishMessage.prototype.read(self, read)
            self.entry = read:ReadUInt32()
        end
        function itemLootFinishMessage.prototype.write(self)
            local packet = MakeCustomPacket(____exports.itemLootFinishMessageID, 5)
            packet:WriteUInt32(self.entry)
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
            local packet = MakeCustomPacket(____exports.creatureNoExistMessageID, 5)
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
            local packet = MakeCustomPacket(____exports.blackjackPlayerMessageID, 40)
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
            local packet = MakeCustomPacket(____exports.blackjackSendHandMessageID, 40)
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
            local packet = MakeCustomPacket(____exports.requestClassSpellsMessageID, 5)
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
            local packet = MakeCustomPacket(____exports.sendClassSpellsMessageID, 5)
            packet:WriteUInt32(self.level)
            packet:WriteUInt32(self.spellID)
            return packet
        end
        return ____exports
    end
)
