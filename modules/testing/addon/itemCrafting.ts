export function itemCrafting() {
    let ichoice = 0
    let gems = [0, 0, 0, 0, 0, 0]
    let curSkill = 0
    let maxSkill = 100
    let maxILvl = 10
    let curILvl = 3

    let buttons = []
    let buttonsCreated = false

    let mframe = CreateFrame("Frame", "atlas", UIParent);
    mframe.SetWidth(400);
    mframe.SetHeight(270);
    mframe.SetPoint("CENTER", -100, 0);
    mframe.EnableMouse(true);
    mframe.RegisterForDrag("LeftButton");
    mframe.SetMovable(true);
    mframe.SetScript("OnDragStart", (self) => {
        self.StartMoving();
    });
    mframe.SetScript("OnDragStop", (self) => {
        self.StopMovingOrSizing();
    });
    mframe.SetBackdrop({
        bgFile: "Interface/TutorialFrame/TutorialFrameBackground",
        edgeFile: "Interface/DialogFrame/UI-DialogBox-Border",
        tile: true,
        tileSize: 22,
        edgeSize: 22,
        insets: { left: 4, right: 4, top: 4, bottom: 4 },
    });
    mframe.SetBackdropColor(0, 0, 0, 1);
    mframe.Show()
    createButtons()

    let mframeTitle = mframe.CreateFontString('', "OVERLAY", "GameFontNormal")
    mframeTitle.SetPoint("TOP", 0, -15)
    mframeTitle.SetText("Item Crafting")

    let exitbutn = CreateFrame("Button", "exitbtn", mframe);
    exitbutn.SetPoint("TOPRIGHT", mframe, "TOPRIGHT", -5, -5);
    exitbutn.SetWidth(32);
    exitbutn.SetHeight(32);
    let extex = exitbutn.CreateTexture("exittex", "BACKGROUND");
    extex.SetTexture("Interface\\BUTTONS\\UI-Panel-MinimizeButton-Up.blp");
    extex.SetAllPoints(exitbutn);
    extex.SetPoint("CENTER", 0, 0);
    exitbutn.HookScript("OnClick", (frame, evName, btnDown) => {
        mframe.Hide()
        clearAll()
    });

    let choiceButton = CreateFrame("Button", "ichoice", mframe)
    choiceButton.SetSize(64, 64);
    choiceButton.SetPoint("TOPLEFT", mframe, "TOPLEFT", 30, -30);
    choiceButton.RegisterForClicks("AnyDown");
    choiceButton.SetBackdrop({
        edgeFile: "Interface/DialogFrame/UI-DialogBox-Border",
        tile: true,
        tileSize: 22,
        edgeSize: 22,
        insets: { left: 4, right: 4, top: 4, bottom: 4 },
    });
    choiceButton.SetBackdropColor(0, 0, 0, 1);
    choiceButton.SetScript("OnClick", (frame, button, down) => {
        if (button == "LeftButton") {
            select(frame);
            updateProduct(0);
        } else if (button == "RightButton") {
            deselect(frame);
            updateProduct(0);
        }
    });

    let resultButton = CreateFrame("Button", "result", mframe)
    resultButton.SetSize(64, 64);
    resultButton.SetPoint("TOPRIGHT", mframe, "TOPRIGHT", -30, -30);
    resultButton.RegisterForClicks("AnyDown");
    resultButton.SetBackdrop({
        edgeFile: "Interface/DialogFrame/UI-DialogBox-Border",
        tile: true,
        tileSize: 22,
        edgeSize: 22,
        insets: { left: 4, right: 4, top: 4, bottom: 4 },
    });
    resultButton.SetBackdropColor(0, 0, 0, 1);

    let ilvlStatusBar = CreateFrame("StatusBar", '', mframe)
    ilvlStatusBar.SetPoint("TOP", mframe, "TOP", 0, -35)
    ilvlStatusBar.SetWidth(100)
    ilvlStatusBar.SetHeight(18)
    ilvlStatusBar.SetStatusBarTexture("Interface\\TARGETINGFRAME\\UI-StatusBar")
    ilvlStatusBar.SetStatusBarColor(0, 0.65, 0, 1)
    ilvlStatusBar.SetMinMaxValues(0, maxILvl)
    ilvlStatusBar.SetValue(curILvl)

    let ilvlStatusBarBg = ilvlStatusBar.CreateTexture('', "BACKGROUND")
    ilvlStatusBarBg.SetTexture("Interface\\TARGETINGFRAME\\UI-StatusBar")
    ilvlStatusBarBg.SetAllPoints()
    ilvlStatusBarBg.SetVertexColor(0, 0.35, 0)

    let ilvlStatusBarValue = ilvlStatusBar.CreateFontString('', "OVERLAY")
    ilvlStatusBarValue.SetPoint("CENTER")
    ilvlStatusBarValue.SetFont("Fonts\\FRIZQT__.TTF", 12, "OUTLINE")
    ilvlStatusBarValue.SetText(curILvl + ' /' + maxILvl + ' iLvL')

    let skillStatusBar = CreateFrame("StatusBar", '', mframe)
    skillStatusBar.SetPoint("TOP", mframe, "TOP", 0, -50)
    skillStatusBar.SetWidth(100)
    skillStatusBar.SetHeight(18)
    skillStatusBar.SetStatusBarTexture("Interface\\TARGETINGFRAME\\UI-StatusBar")
    skillStatusBar.SetStatusBarColor(0, 0, 0.65, 1)
    skillStatusBar.SetMinMaxValues(0, maxSkill)
    skillStatusBar.SetValue(curSkill)

    let skillStatusBarBg = skillStatusBar.CreateTexture('', "BACKGROUND")
    skillStatusBarBg.SetTexture("Interface\\TARGETINGFRAME\\UI-StatusBar")
    skillStatusBarBg.SetAllPoints()
    skillStatusBarBg.SetVertexColor(0, 0, 0.35)

    let skillStatusBarValue = skillStatusBar.CreateFontString('', "OVERLAY")
    skillStatusBarValue.SetPoint("CENTER")
    skillStatusBarValue.SetFont("Fonts\\FRIZQT__.TTF", 12, "OUTLINE")
    skillStatusBarValue.SetText(curSkill + ' /' + maxSkill + ' Skill')


    function createButtons() {
        buttonsCreated = true
        for (let i = 0; i < 6; i++) {
            let button = CreateFrame("Button", i.toString(), mframe)
            button.SetSize(64, 64);
            button.SetPoint("LEFT", mframe, "LEFT", 100 + 69 * Math.floor(i % 3), -10 - 69 * Math.floor(i / 3));
            button.RegisterForClicks("AnyDown");
            button.SetBackdrop({
                edgeFile: "Interface/DialogFrame/UI-DialogBox-Border",
                tile: true,
                tileSize: 22,
                edgeSize: 22,
                insets: { left: 4, right: 4, top: 4, bottom: 4 },
            });
            button.SetBackdropColor(0, 0, 0, 1);
            button.SetScript("OnClick", (frame, button, down) => {
                if (button == "LeftButton") {
                    select(frame);
                    updateProduct(i);
                } else if (button == "RightButton") {
                    deselect(frame);
                    updateProduct(i);
                }
            });
            buttons.push(button)
        }
    }

    function select(frame: WoWAPI.Frame) {
        let itemid = GetCursorInfo()[1];
        if (itemid != null) {
            let info = GetItemInfo(itemid);
            if (info != null) {
                if (frame.GetName() == "ichoice") {
                    ichoice = itemid;
                } else {
                    gems[Number(frame.GetName())] = itemid;
                }

                let itemstring: string = GetCursorInfo()[2];
                (frame as WoWAPI.Button).SetNormalTexture(info[9].toString());
                frame.SetScript("OnEnter", (self) => {
                    GameTooltip.ClearLines();
                    GameTooltip.SetOwner(self, "ANCHOR_CURSOR");
                    GameTooltip.SetHyperlink(itemstring);
                    GameTooltip.Show();
                });
                frame.SetScript("OnLeave", () => {
                    GameTooltip.Hide();
                });
            }
        }
    }
    function deselect(frame: WoWAPI.Frame) {
        buttons[Number(frame.GetName())].SetNormalTexture("");
        buttons[Number(frame.GetName())].SetScript("OnEnter", null);
        buttons[Number(frame.GetName())].SetScript("OnLeave", null);
        GameTooltip.Hide();
    }

    function clearAll() {
        ichoice = 0
        gems = [0, 0, 0, 0, 0, 0]
        for (let i = 0; i < buttons.length; i++) {
            deselect(buttons[i]);
        }
        deselect(choiceButton)

    }

    function updateProduct(purchase: uint32) {
        //new message(ichoice, gems, purchase).write().Send();
    }
}