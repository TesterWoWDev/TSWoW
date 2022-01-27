import { spellChoice, spellChoices, spellChoicesID } from "../shared/Messages"

export function thorgast() {
    let choiceSpells = []
    let choiceButtons = []
    let mframe = CreateFrame('Frame', 'torghast', UIParent)
    mframe.SetWidth(512)
    mframe.SetHeight(768)
    mframe.SetPoint("TOPRIGHT", 60, -120)
    mframe.Hide()

    let mframe2 = CreateFrame('Frame', 'torghastChoices', UIParent)
    mframe2.SetWidth(300)
    mframe2.SetHeight(128)
    mframe2.SetPoint("CENTER", 0, 0)
    mframe2.SetBackdrop({
        bgFile: "Interface/TutorialFrame/TutorialFrameBackground",
        edgeFile: "Interface/DialogFrame/UI-DialogBox-Border",
        tile: true, tileSize: 10, edgeSize: 10,
        insets: { left: 2, right: 2, top: 2, bottom: 2 }
    });
    mframe2.SetBackdropColor(0, 0, 0, 1);
    mframe2.Hide()

    OnCustomPacket(spellChoicesID, (packet) => {
        let customPacket = new spellChoices([])
        customPacket.read(packet);
        for (let i = 0; i < 3; i++) {
            choiceSpells.push(customPacket.spellIDs[i])
        }
        showSpellChoiceUI()
    })

    function showSpellChoiceUI() {
        mframe2.Show()
        let buttonIndex = 2
        for (let i = 0; i < 3; i++) {
            let spellButton = CreateFrame('Button', choiceSpells[i], mframe2)
            spellButton.SetSize(64, 64)
            spellButton.SetPoint('CENTER', mframe2, 'CENTER', -94 + ((spellButton.GetWidth() + 30) * i), 15)
            let info = GetSpellInfo(choiceSpells[i])
            spellButton.SetNormalTexture(info[2])
            spellButton.Show()
            spellButton.HookScript("OnEnter", (self) => {
                GameTooltip.ClearLines()
                GameTooltip.SetOwner(spellButton, 'CENTER')
                GameTooltip.SetHyperlink("spell:" + self.GetName())
                GameTooltip.Show()
            })
            spellButton.HookScript("OnLeave", () => {
                GameTooltip.Hide()
            })

            let button = CreateFrame('Button', buttonIndex.toString(), mframe2)
            button.SetSize(128,42)
            button.SetPoint('CENTER', spellButton, 'BOTTOM', 25, -30)
            button.SetNormalTexture('Interface\\BUTTONS\\UI-Panel-Button-Up')
            let buttonText = button.CreateFontString('', 'OVERLAY', 'GameFontNormal')
            buttonText.SetPoint("TOP", -25, -8)
            buttonText.SetText("Choose!")
            button.HookScript('OnClick', (frame, button, down) => {
                onChoice(frame.GetName())
            })
            choiceButtons.push(spellButton)
            choiceButtons.push(button)
            buttonIndex--
        }
    }

    function onChoice(index) {
        if(choiceSpells.length > 3){
            choiceSpells = choiceSpells.splice(0,3)
        }else{
            choiceSpells = []
        }
        
        for (let i = 0; i < choiceButtons.length; i++) {
            choiceButtons[i].Hide()
        }
        choiceButtons = []
        mframe2.Hide()

        let pkt = new spellChoice(index)
        pkt.write().Send()
        if (choiceSpells.length >= 3) {
            showSpellChoiceUI()
        }
    }
}