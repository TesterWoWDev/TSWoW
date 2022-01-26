import { spellValuesMessage, spellValuesMessageID } from "../shared/Messages"

export function thorgast() {
    let spellInfo = []
    let buttons = []
    let mframe = CreateFrame('Frame', 'torghast', UIParent)
    mframe.SetWidth(512)
    mframe.SetHeight(768)
    mframe.SetPoint("TOPRIGHT", 60, -120)


    OnCustomPacket(spellValuesMessageID, (packet) => {
        hideOldSpells()

        let customPacket = new spellValuesMessage(0, [0], [0])
        customPacket.read(packet);
        for (let i = 0; i < customPacket.size; i++) {
            spellInfo.push([customPacket.spellIDs[i], customPacket.spellCts[i]])
        }
        showSpells()
    })


    function showSpells() {
        for (let i = 0; i < spellInfo.length; i++) {
            let button = CreateFrame('Button', spellInfo[i][1], mframe)
            button.SetSize(40, 40)
            button.SetPoint('CENTER', mframe, 'TOP', 0 - (button.GetWidth() * (i % 6)), 0 - (Math.floor(i / 6) * button.GetHeight()))

            // button.SetBackdrop({
            //     bgFile: "Interface/TutorialFrame/TutorialFrameBackground",
            //     edgeFile: "Interface/DialogFrame/UI-DialogBox-Border",
            //     tile: true, tileSize: 10, edgeSize: 10,
            //     insets: { left: 2, right: 2, top: 2, bottom: 2 }
            // });
            // button.SetBackdropColor(0, 0, 0, 1);
            let spInfo = GetSpellTexture(spellInfo[i][1],BOOKTYPE_SPELL)
            button.SetNormalTexture(spInfo.toString())

            let countText = button.CreateFontString('', 'OVERLAY', 'GameFontNormal')
            countText.SetPoint("BOTTOMRIGHT", -5, 5)
            countText.SetText(spellInfo[i][2])

            button.HookScript("OnEnter", (self) => {
                GameTooltip.ClearLines()
                GameTooltip.SetOwner(button, 'CENTER')
                GameTooltip.SetHyperlink("spell:" + self.GetName())
                GameTooltip.Show()
            })

            button.HookScript("OnLeave", () => {
                GameTooltip.Hide()
            })
            buttons.push(button)
        }
    }

    function hideOldSpells() {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].Hide()
        }
        buttons = []
        spellInfo = []
    }
}