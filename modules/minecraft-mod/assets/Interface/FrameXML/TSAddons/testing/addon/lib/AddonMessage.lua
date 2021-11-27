--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
tstl_register_module(
    "TSAddons.testing.addon.lib.AddonMessage",
    function()
        local ____exports = {}
        local ____BinReader = require("BinReader")
        local BinReader = ____BinReader.BinReader
        ____exports.TSFragmentHeader = {}
        ____exports.TSFragmentHeader.MAGIC = 0
        ____exports.TSFragmentHeader[____exports.TSFragmentHeader.MAGIC] = "MAGIC"
        ____exports.TSFragmentHeader.MESSAGE_ID = 2
        ____exports.TSFragmentHeader[____exports.TSFragmentHeader.MESSAGE_ID] = "MESSAGE_ID"
        ____exports.TSFragmentHeader.CHANNEL = 3
        ____exports.TSFragmentHeader[____exports.TSFragmentHeader.CHANNEL] = "CHANNEL"
        ____exports.TSFragmentHeader.FRAGMENT_ID = 4
        ____exports.TSFragmentHeader[____exports.TSFragmentHeader.FRAGMENT_ID] = "FRAGMENT_ID"
        ____exports.TSFragmentHeader.TOTAL_FRAGMENTS = 6
        ____exports.TSFragmentHeader[____exports.TSFragmentHeader.TOTAL_FRAGMENTS] = "TOTAL_FRAGMENTS"
        ____exports.TSFragmentHeader.END = 8
        ____exports.TSFragmentHeader[____exports.TSFragmentHeader.END] = "END"
        local MESSAGE_MAGIC = 17688
        local ENCODED_HEADER_SIZE = math.ceil(____exports.TSFragmentHeader.END / 3) * 4
        ____exports.BufferedMessage = __TS__Class()
        local BufferedMessage = ____exports.BufferedMessage
        BufferedMessage.name = "BufferedMessage"
        function BufferedMessage.prototype.____constructor(self, channel, totalFragments)
            self.fragmentCtr = 0
            self.messageId = 0
            self.fragments = {}
            self.channel = channel
            self.fragmentCtr = totalFragments
            do
                local i = 0
                while i < totalFragments do
                    __TS__ArrayPush(self.fragments, "")
                    i = i + 1
                end
            end
        end
        function BufferedMessage.prototype.receiveFragment(self, fragmentId, fragment)
            if (fragmentId < 0) or (fragmentId >= #self.fragments) then
                return "OUT_OF_BOUNDS"
            end
            if #self.fragments[fragmentId + 1] ~= 0 then
                return "DUPLICATE_FRAGMENT"
            end
            self.fragments[fragmentId + 1] = fragment
            self.fragmentCtr = self.fragmentCtr - 1
            return ((self.fragmentCtr == 0) and "FINISHED") or "SUCCESS"
        end
        function BufferedMessage.prototype.build(self)
            return table.concat(self.fragments, "" or ",")
        end
        ____exports.MessageBuffer = __TS__Class()
        local MessageBuffer = ____exports.MessageBuffer
        MessageBuffer.name = "MessageBuffer"
        function MessageBuffer.prototype.____constructor(self, maxFragmentSize, incomingPrefixLength)
            self.messages = {}
            self.messageId = 0
            self.incomingPrefixLength = 0
            self.handlers = {}
            self.maxFragmentSize = ((math.floor(3 * (maxFragmentSize / 4)) - 2) - ENCODED_HEADER_SIZE) - incomingPrefixLength
            if self.maxFragmentSize < 1 then
                error(
                    __TS__New(Error, "Too small maximum: can't fit a single character!"),
                    0
                )
            end
            self.incomingPrefixLength = incomingPrefixLength
        end
        function MessageBuffer.prototype.receiveFragment(self, fragment)
            if #fragment < ENCODED_HEADER_SIZE then
                return
            end
            fragment = __TS__StringSubstring(fragment, self.incomingPrefixLength)
            local str = base64_decode(fragment)
            if #str < ____exports.TSFragmentHeader.END then
                return
            end
            local reader = __TS__New(BinReader, str)
            if reader:ReadU16(____exports.TSFragmentHeader.MAGIC) ~= MESSAGE_MAGIC then
                return
            end
            local messageId = reader:ReadU8(____exports.TSFragmentHeader.MESSAGE_ID)
            local channelId = reader:ReadU8(____exports.TSFragmentHeader.CHANNEL)
            local fragmentId = reader:ReadU16(____exports.TSFragmentHeader.FRAGMENT_ID)
            local totalFragments = reader:ReadU16(____exports.TSFragmentHeader.TOTAL_FRAGMENTS)
            if not self.messages[messageId] then
                self.messages[messageId] = __TS__New(____exports.BufferedMessage, channelId, totalFragments)
            end
            local msg = self.messages[messageId]
            if msg:receiveFragment(
                fragmentId,
                __TS__StringSubstring(str, ____exports.TSFragmentHeader.END)
            ) == "FINISHED" then
                self:onFinished(
                    msg.channel,
                    msg:build()
                )
                self.messages[messageId] = nil
            end
        end
        function MessageBuffer.prototype.RegisterListener(self, handler)
            __TS__ArrayPush(self.handlers, handler)
        end
        function MessageBuffer.prototype.sendFragment(self, str)
            SendAddonMessage(
                "",
                str,
                "WHISPER",
                GetUnitName("player", false)
            )
        end
        function MessageBuffer.prototype.onFinished(self, channel, str)
            __TS__ArrayForEach(
                self.handlers,
                function(____, x) return x(channel, str) end
            )
        end
        function MessageBuffer.prototype.sendMessage(self, channel, message)
            local fragCount = math.ceil(#message / self.maxFragmentSize)
            local messageId = (function()
                local ____tmp = self.messageId
                self.messageId = ____tmp + 1
                return ____tmp
            end)() % 255
            local offset = 0
            do
                local i = 0
                while i < fragCount do
                    local fragmentSize = math.min(self.maxFragmentSize, #message - offset)
                    local bin = __TS__New(BinReader, ____exports.TSFragmentHeader.END)
                    bin:WriteU16(____exports.TSFragmentHeader.MAGIC, MESSAGE_MAGIC)
                    bin:WriteU8(____exports.TSFragmentHeader.CHANNEL, channel)
                    bin:WriteU8(____exports.TSFragmentHeader.MESSAGE_ID, messageId)
                    bin:WriteU16(____exports.TSFragmentHeader.FRAGMENT_ID, i)
                    bin:WriteU16(____exports.TSFragmentHeader.TOTAL_FRAGMENTS, fragCount)
                    local msgFragment = tostring(bin.str) .. tostring(
                        __TS__StringSubstring(message, offset, offset + fragmentSize)
                    )
                    self:sendFragment(
                        base64_encode(msgFragment)
                    )
                    offset = offset + fragmentSize
                    i = i + 1
                end
            end
        end
        ____exports.Messages = __TS__New(____exports.MessageBuffer, 250, 0)
        local function buildMessage(value)
            local bin = __TS__New(
                BinReader,
                value:GetSize() + 6
            )
            bin:WriteU32(0, 1007688)
            bin:WriteU16(
                4,
                value:GetID()
            )
            value:Write(bin, 6)
            return base64_encode(bin.str)
        end
        function ____exports.SendCompiledServerMessage(message)
            SendAddonMessage(
                "",
                buildMessage(message),
                "WHISPER",
                GetUnitName("player", false)
            )
        end
        function ____exports.SendLongServerMessage(channel, message)
            ____exports.Messages:sendMessage(channel, message)
        end
        return ____exports
    end
)
