let buttonWidth = 48
export function talentSystem() {
    let mframe = CreateFrame("Frame", "talentSystem", UIParent);
    mframe.SetWidth(256);
    mframe.SetHeight(512);
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
        bgFile: "Interface\\AchievementFrame\\UI-Achievement-Parchment",
        edgeFile: "Interface/DialogFrame/UI-DialogBox-Border",
        tile: false,
        tileSize: 22,
        edgeSize: 22,
        insets: { left: 4, right: 4, top: 4, bottom: 4 },
    });

    let mframe_title = mframe.CreateFontString('', "OVERLAY", "GameFontNormal");
    mframe_title.SetPoint("TOP", 0, -15);
    mframe_title.SetText("Talent System");

    let mframe_close = CreateFrame("Button", "talentSystem_close", mframe, "UIPanelCloseButton");
    mframe_close.SetPoint("TOPRIGHT", -5, -5);

    let mframe_open = CreateFrame("Button", "talentSystem_open", UIParent);
    mframe_open.SetPoint("CENTER", 5, 5);
    mframe_open.SetSize(32, 32)
    mframe_open.SetNormalTexture("Interface\\Buttons\\UI-SpellbookIcon-NextPage-Up");
    mframe_open.SetScript("OnClick", () => {
        mframe.Show();
    });

    function addTalentButton(talentId, row, column, spellID, currentRank,MaxRank) {
        let button = CreateFrame("Button", "talentSystem_button_" + spellID, mframe, "SecureActionButtonTemplate");
        button.SetSize(buttonWidth, buttonWidth);
        let info = GetSpellInfo(spellID);
        button.SetNormalTexture(info[2]);
        button.RegisterForClicks("AnyDown")
        button.SetPoint("TOPLEFT", buttonWidth + column*(buttonWidth+8), -(row*(buttonWidth+16)) - 64);

        let rankText = button.CreateFontString('', "OVERLAY", "GameFontNormal");
        rankText.SetPoint("BOTTOM", 0, -10);
        rankText.SetText(currentRank + "/" + MaxRank);

        button.SetScript("OnClick", (frame,button) => {
            //LearnTalent(talentId);
            print(button)
            if(button == "LeftButton"){
            print("Learned talent " + spellID + " (" + talentId + ")");
            }
            else if(button == "RightButton")
            {
                print("Unlearned talent " + spellID + " (" + talentId + ")");
            }

        })
        button.SetScript("OnEnter", () => {
            GameTooltip.SetOwner(button, "ANCHOR_RIGHT");
            GameTooltip.SetHyperlink("spell:" + spellID);
        });
        button.SetScript("OnLeave", () => {
            GameTooltip.Hide();
        });
    }

    addTalentButton("1",  0, 0, 23881,0,1);
    addTalentButton("2", 0, 1, 1159,2,2);
    addTalentButton("3",  0, 2, 20577,0,2);
    addTalentButton("4",  1, 0, 12318,3,4);
    addTalentButton("5",  2, 0, 12292,0,1);
    addTalentButton("6", 2, 1, 29590,1,2)

}