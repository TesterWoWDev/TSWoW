import { spellChoice, spellChoices, spellChoicesID, spellValuesMessage, spellValuesMessageID } from "../shared/Messages"

export function thorgast() {
    let spellInfo = []
    let buttons = []
    let choiceSpells = []
    let choiceButtons = []
    let mframe = CreateFrame('Frame', 'torghast', UIParent)
    mframe.SetWidth(512)
    mframe.SetHeight(768)
    mframe.SetPoint("TOPRIGHT", 60, -120)

    let mframe2 = CreateFrame('Frame', 'torghastChoices', UIParent)
    mframe2.SetWidth(512)
    mframe2.SetHeight(768)
    mframe2.SetPoint("TOPRIGHT", 60, -120)
    mframe2.SetBackdrop({
        bgFile: "Interface/TutorialFrame/TutorialFrameBackground",
        edgeFile: "Interface/DialogFrame/UI-DialogBox-Border",
        tile: true, tileSize: 10, edgeSize: 10,
        insets: { left: 2, right: 2, top: 2, bottom: 2 }
    });
    mframe2.SetBackdropColor(0, 0, 0, 1);

    OnCustomPacket(spellChoicesID, (packet) => {
        let customPacket = new spellChoices([0])
        customPacket.read(packet);
        for (let i = 0; i < 2; i++) {
            choiceSpells.push(customPacket.spellIDs[i])
        }
        showSpellChoiceUI()
    })

    function showSpellChoiceUI() {
        for (let i = 0; i < 2; i++) {
            let spellButton = CreateFrame('Button', choiceSpells[i], mframe2)
            spellButton.SetSize(64, 64)
            spellButton.SetPoint('CENTER', mframe2, 'CENTER', -50 + ((spellButton.GetWidth() + 30) * i), 0)
            spellButton.SetNormalTexture(GetSpellTexture(choiceSpells[i], BOOKTYPE_SPELL).toString())

            spellButton.HookScript("OnEnter", (self) => {
                GameTooltip.ClearLines()
                GameTooltip.SetOwner(spellButton, 'CENTER')
                GameTooltip.SetHyperlink("spell:" + self.GetName())
                GameTooltip.Show()
            })
            spellButton.HookScript("OnLeave", () => {
                GameTooltip.Hide()
            })

            let button = CreateFrame('Button', 'choice' + i, mframe2)
            spellButton.SetPoint('CENTER', spellButton, 'CENTER', 0, -40)
            button.SetNormalTexture('')//make red button
            button.HookScript('OnClick', (frame, button, down) => {
                onChoice(i)
            })
            choiceButtons.push(spellButton)
            choiceButtons.push(button)
        }
    }

    function onChoice(index) {
        for (let i = 0; i < choiceButtons.length; i++) {
            choiceButtons[i].Hide()
        }
        choiceButtons = []

        let pkt = new spellChoice(index)
        pkt.write().Send()
        if (choiceSpells.length >= 3) {
            showSpellChoiceUI()
        }
    }

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
            button.SetNormalTexture( GetSpellTexture(spellInfo[i][1], BOOKTYPE_SPELL).toString())

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