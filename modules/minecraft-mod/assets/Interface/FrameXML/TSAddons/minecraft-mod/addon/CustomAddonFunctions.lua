--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
tstl_register_module(
    "TSAddons.minecraft-mod.addon.CustomAddonFunctions",
    function()
        local ____exports = {}
        local turnSpeed = 34
        local dragSpeed = 100
        local zoomSpeed = 0.5
        function ____exports.SetupModelZoomDragRotation(model)
            model:SetPosition(0, 0, 0)
            model:EnableMouse(true)
            model:EnableMouseWheel(true)
            model:SetScript(
                "OnMouseDown",
                function(____self, button)
                    local startPos = {
                        GetCursorPosition()
                    }
                    if button == "LeftButton" then
                        model:SetScript(
                            "OnUpdate",
                            function(____self)
                                local curX = ({
                                    GetCursorPosition()
                                })[1]
                                ____self:SetFacing(
                                    ((curX - startPos[1]) / turnSpeed) + ____self:GetFacing()
                                )
                                startPos[1] = curX
                            end
                        )
                    elseif button == "RightButton" then
                        model:SetScript(
                            "OnUpdate",
                            function(____self)
                                local cursorPos = {
                                    GetCursorPosition()
                                }
                                local pos = {
                                    ____self:GetPosition()
                                }
                                pos[2] = ((cursorPos[1] - startPos[1]) / dragSpeed) + pos[2]
                                pos[3] = ((cursorPos[2] - startPos[2]) / dragSpeed) + pos[3]
                                ____self:SetPosition(pos[1], pos[2], pos[3])
                                startPos[1] = cursorPos[1]
                                startPos[2] = cursorPos[2]
                            end
                        )
                    end
                end
            )
            model:SetScript(
                "OnMouseUp",
                function(____self, button)
                    ____self:SetScript("OnUpdate", nil)
                end
            )
            model:SetScript(
                "OnMouseWheel",
                function(____self, zoom)
                    local pos = {
                        model:GetPosition()
                    }
                    if zoom == 1 then
                        pos[1] = pos[1] + zoomSpeed
                    else
                        pos[1] = pos[1] - zoomSpeed
                    end
                    ____self:SetPosition(pos[1], pos[2], pos[3])
                end
            )
        end
        return ____exports
    end
)
