--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
tstl_register_module(
    "TSAddons.minecraft-mod.shared.Messages",
    function()
        local ____exports = {}
        ____exports.craftMessageID = 11
        ____exports.empty = {0, 0}
        ____exports.craftMessage = __TS__Class()
        local craftMessage = ____exports.craftMessage
        craftMessage.name = "craftMessage"
        function craftMessage.prototype.____constructor(self, itemIDs, positions, purchase, enchants)
            self.itemIDs = {0, 0, 0, 0, 0, 0, 0, 0, 0}
            self.positions = {____exports.empty, ____exports.empty, ____exports.empty, ____exports.empty, ____exports.empty, ____exports.empty, ____exports.empty, ____exports.empty, ____exports.empty}
            self.purchase = 0
            self.enchants = {0, 0, 0, 0, 0}
            self.itemIDs = itemIDs
            self.positions = positions
            self.purchase = purchase
            self.enchants = enchants
        end
        function craftMessage.prototype.read(self, read)
            do
                local i = 0
                while i < 9 do
                    self.itemIDs[i + 1] = read:ReadUInt32()
                    i = i + 1
                end
            end
            do
                local i = 0
                while i < 9 do
                    local val1 = read:ReadUInt32()
                    local val2 = read:ReadUInt32()
                    local bag = {val1, val2}
                    self.positions[i + 1] = bag
                    i = i + 1
                end
            end
            self.purchase = read:ReadUInt32()
            do
                local i = 0
                while i < 4 do
                    self.enchants[i + 1] = read:ReadUInt32()
                    i = i + 1
                end
            end
        end
        function craftMessage.prototype.write(self)
            local packet = MakeCustomPacket(____exports.craftMessageID, 0)
            do
                local i = 0
                while i < 9 do
                    packet:WriteUInt32(self.itemIDs[i + 1])
                    i = i + 1
                end
            end
            do
                local i = 0
                while i < 9 do
                    packet:WriteUInt32(self.positions[i + 1][1])
                    packet:WriteUInt32(self.positions[i + 1][2])
                    i = i + 1
                end
            end
            packet:WriteUInt32(self.purchase)
            do
                local i = 0
                while i < 4 do
                    packet:WriteUInt32(self.enchants[i + 1])
                    i = i + 1
                end
            end
            return packet
        end
        ____exports.returnCraftItemMessageID = 12
        ____exports.returnCraftItemMessage = __TS__Class()
        local returnCraftItemMessage = ____exports.returnCraftItemMessage
        returnCraftItemMessage.name = "returnCraftItemMessage"
        function returnCraftItemMessage.prototype.____constructor(self, craftItem, craftItemCount, enchantNum)
            self.craftItem = 0
            self.craftItemCount = 0
            self.enchantNum = {0, 0, 0, 0, 0}
            self.craftItem = craftItem
            self.craftItemCount = craftItemCount
            self.enchantNum = enchantNum
        end
        function returnCraftItemMessage.prototype.read(self, read)
            self.craftItem = read:ReadUInt32()
            self.craftItemCount = read:ReadUInt32()
            do
                local i = 0
                while i < 5 do
                    self.enchantNum[i + 1] = read:ReadUInt32()
                    i = i + 1
                end
            end
        end
        function returnCraftItemMessage.prototype.write(self)
            local packet = MakeCustomPacket(____exports.returnCraftItemMessageID, 0)
            packet:WriteUInt32(self.craftItem)
            packet:WriteUInt32(self.craftItemCount)
            do
                local i = 0
                while i < 5 do
                    packet:WriteUInt32(self.enchantNum[i + 1])
                    i = i + 1
                end
            end
            return packet
        end
        ____exports.showScreenID = 13
        ____exports.showScreen = __TS__Class()
        local showScreen = ____exports.showScreen
        showScreen.name = "showScreen"
        function showScreen.prototype.____constructor(self, value)
            self.value = 0
            self.value = value
        end
        function showScreen.prototype.read(self, read)
            self.value = read:ReadUInt32()
        end
        function showScreen.prototype.write(self)
            local packet = MakeCustomPacket(____exports.showScreenID, 0)
            packet:WriteUInt32(self.value)
            return packet
        end
        return ____exports
    end
)
