--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
tstl_register_module(
    "TSAddons.minecraft-mod.addon.lib.BinReader",
    function()
        local ____exports = {}
        local function ____or(a, b)
            local p = 1
            local c = 0
            while (a + b) > 0 do
                local ra = a % 2
                local rb = b % 2
                if (ra + rb) > 0 then
                    c = c + p
                end
                a = (a - ra) / 2
                b = (b - rb) / 2
                p = p * 2
            end
            return c
        end
        local function ____and(a, b)
            local p = 1
            local c = 0
            while (a + b) > 0 do
                local ra = a % 2
                local rb = b % 2
                if (ra + rb) > 1 then
                    c = c + p
                end
                a = (a - ra) / 2
                b = (b - rb) / 2
                p = p * 2
            end
            return c
        end
        ____exports.BinReader = __TS__Class()
        local BinReader = ____exports.BinReader
        BinReader.name = "BinReader"
        function BinReader.prototype.____constructor(self, size)
            if type(size) == "string" then
                self.str = size
            else
                self.str = ""
                do
                    local i = 0
                    while i < size do
                        self.str = tostring(self.str) .. tostring(
                            string.char(1)
                        )
                        i = i + 1
                    end
                end
            end
        end
        function BinReader.prototype.insert(self, offset, str)
            self.str = (tostring(
                __TS__StringSubstring(self.str, 0, offset)
            ) .. tostring(str)) .. tostring(
                __TS__StringSubstring(self.str, offset + #str, #self.str)
            )
        end
        function BinReader.prototype.WriteU8(self, offset, val)
            self:insert(
                offset,
                string.char(val)
            )
        end
        function BinReader.prototype.WriteI8(self, offset, val)
            self:insert(
                offset,
                string.char(
                    (((val < 0) and (function() return 256 + val end)) or (function() return val end))()
                )
            )
        end
        function BinReader.prototype.WriteU16(self, offset, val)
            local v2 = math.floor(val / 256)
            local v1 = ____and(val, 255)
            self:insert(
                offset,
                string.char(v1, v2)
            )
        end
        function BinReader.prototype.WriteI16(self, offset, val)
            self:WriteU16(
                offset,
                (((val < 0) and (function() return 65536 + val end)) or (function() return val end))()
            )
        end
        function BinReader.prototype.WriteU32(self, offset, val)
            local v4 = math.floor(
                ____and(val, 4278190080) / 16777216
            )
            local v3 = math.floor(
                ____and(val, 16711680) / 65536
            )
            local v2 = math.floor(
                ____and(val, 65280) / 256
            )
            local v1 = ____and(val, 255)
            self:insert(
                offset,
                string.char(v1, v2, v3, v4)
            )
        end
        function BinReader.prototype.WriteI32(self, offset, val)
            self:WriteU32(
                offset,
                (((val < 0) and (function() return 4294967296 + val end)) or (function() return val end))()
            )
        end
        function BinReader.prototype.ReadU8(self, offset)
            return __TS__StringCharCodeAt(self.str, offset)
        end
        function BinReader.prototype.ReadI8(self, offset)
            local val = self:ReadU8(offset)
            return (((val > 127) and (function() return val - 256 end)) or (function() return val end))()
        end
        function BinReader.prototype.ReadU16(self, offset)
            local v2 = __TS__StringCharCodeAt(self.str, offset)
            local v1 = __TS__StringCharCodeAt(self.str, offset + 1)
            local vout = v1 * 256
            vout = ____or(vout, v2)
            return vout
        end
        function BinReader.prototype.ReadI16(self, offset)
            local val = self:ReadU16(offset)
            return (((val > 32767) and (function() return val - 65536 end)) or (function() return val end))()
        end
        function BinReader.prototype.ReadU32(self, offset)
            local v4 = __TS__StringCharCodeAt(self.str, offset)
            local v3 = __TS__StringCharCodeAt(self.str, offset + 1)
            local v2 = __TS__StringCharCodeAt(self.str, offset + 2)
            local v1 = __TS__StringCharCodeAt(self.str, offset + 3)
            local vout = v1 * 16777216
            vout = ____or(vout, v2 * 65536)
            vout = ____or(vout, v3 * 256)
            vout = ____or(vout, v4)
            return vout
        end
        function BinReader.prototype.ReadI32(self, offset)
            local val = self:ReadU32(offset)
            return (((val > 2147483647) and (function() return val - 4294967296 end)) or (function() return val end))()
        end
        function BinReader.prototype.WriteDouble(self, offset, value)
            local disc = math.floor(value)
            local frac = math.floor(((value - disc) * 100000) + 0.5)
            self:WriteI32(offset, disc)
            self:WriteI32(offset + 4, frac)
        end
        function BinReader.prototype.ReadDouble(self, offset)
            local disc = self:ReadI32(offset)
            local frac = self:ReadI32(offset + 4) / 100000
            return disc + frac
        end
        function BinReader.prototype.WriteArray(self, offset, value, ind_size, max, func)
            local len = math.min(#value, max)
            self:WriteU8(offset, len)
            do
                local i = 0
                while i < len do
                    func((offset + 1) + (i * ind_size), value[i + 1])
                    i = i + 1
                end
            end
        end
        function BinReader.prototype.ReadArray(self, offset, value, ind_size, max, func)
            local len = math.min(
                self:ReadU8(offset),
                max
            )
            do
                local i = 0
                while i < len do
                    value[i + 1] = func((offset + 1) + (i * ind_size))
                    i = i + 1
                end
            end
            value[len + 1] = nil
        end
        function BinReader.prototype.WriteString(self, offset, str, max)
            local len = math.min(#str, max)
            self:WriteU8(offset, len)
            self:insert(
                offset + 1,
                __TS__StringSubstring(str, 0, len)
            )
        end
        function BinReader.prototype.ReadString(self, offset, max)
            local len = math.min(
                max,
                self:ReadU8(offset)
            )
            return __TS__StringSubstring(self.str, offset + 1, (offset + len) + 1)
        end
        function BinReader.prototype.WriteStringArray(self, offset, strs, ind_size, max)
            local len = math.min(#strs, max)
            self:WriteU8(offset, len)
            do
                local i = 0
                while i < len do
                    self:WriteString((offset + 1) + (i * (ind_size + 1)), strs[i + 1], ind_size)
                    i = i + 1
                end
            end
        end
        function BinReader.prototype.ReadStringArray(self, offset, strs, ind_size, max)
            local len = math.min(
                max,
                self:ReadU8(offset)
            )
            do
                local i = 0
                while i < len do
                    strs[i + 1] = self:ReadString((offset + 1) + (i * (ind_size + 1)), ind_size)
                    i = i + 1
                end
            end
            strs[len + 1] = nil
        end
        function BinReader.prototype.ReadClass(self, offset, fun)
            local g = fun()
            g:Read(self, offset)
            return g
        end
        function BinReader.prototype.WriteClass(self, offset, cls)
            cls:Write(self, offset)
        end
        function BinReader.prototype.ReadClassArray(self, offset, cls, ind_size, max, fun)
            local len = math.min(
                self:ReadU8(offset),
                max
            )
            do
                local i = 0
                while i < len do
                    cls[i + 1] = self:ReadClass((offset + 1) + (i * ind_size), fun)
                    i = i + 1
                end
            end
            cls[len + 1] = nil
        end
        function BinReader.prototype.WriteClassArray(self, offset, cls, ind_size, max)
            local len = math.min(#cls, max)
            self:WriteU8(offset, len)
            do
                local i = 0
                while i < len do
                    self:WriteClass((offset + 1) + (i * ind_size), cls[i + 1])
                    i = i + 1
                end
            end
        end
        return ____exports
    end
)
