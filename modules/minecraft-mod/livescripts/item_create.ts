let itemClassInfo: TSArray<TSArray<TSArray<float>>> = [//class,subclass,invType,statMult
    [//ARMOR
        //cloth
        [4, 1, 1, 0.8125],//head
        [4, 1, 3, 0.75],//shoulder
        [4, 1, 5, 1],//chest
        [4, 1, 6, 0.5625],//waist
        [4, 1, 7, 0.875],//legs
        [4, 1, 80.6875],//boots
        [4, 1, 90.4375],//wrist
        [4, 1, 10, 0.625],//hands
        //leather
        [4, 2, 1, 0.8125],//head
        [4, 2, 3, 0.75],//shoulder
        [4, 2, 5, 1],//chest
        [4, 2, 6, 0.5625],//waist
        [4, 2, 7, 0.875],//legs
        [4, 2, 80.6875],//boots
        [4, 2, 90.4375],//wrist
        [4, 2, 10, 0.625],//hands
        //mail
        [4, 3, 1, 0.8125],//head
        [4, 3, 3, 0.75],//shoulder
        [4, 3, 5, 1],//chest
        [4, 3, 6, 0.5625],//waist
        [4, 3, 7, 0.875],//legs
        [4, 3, 80.6875],//boots
        [4, 3, 90.4375],//wrist
        [4, 3, 10, 0.625],//hands
        //extras
        [4, 0, 2, 0.5],//neck
        [4, 0, 11, 0.5],//ring
        [4, 0, 12, 0.5],//trinket
        [4, 1, 16, 0.48],//cloak
    ],
    [//WEAPONS
        [2, 0, 13, 0.6],//1h axe
        [2, 1, 17, 1],//2h axe
        [2, 2, 26, 0.8],//bow
        [2, 3, 26, 0.8],//gun
        [2, 4, 13, 0.6],//1h mace
        [2, 5, 17, 1],//2h mace
        [2, 6, 17, 1],//polearm
        [2, 7, 13, 0.6],//1h sword
        [2, 8, 17, 1],//2h sword
        [2, 10, 17, 1],//staff
        [2, 13, 13, 0.6],//first weapon
        [2, 15, 13, 0.5],//dagger
        [2, 19, 26, 0.6],//wand

        [4, 0, 23, 0.4],//offhand tome
        [4, 6, 14, 0.4],//shield
    ]
];



export function itemCreate(events: TSEvents) {
    events.Player.OnCommand((player, command, found) => {
        let cmd = command.get().split(' ')
        if (cmd[0] == 'createitem') {
            found.set(true)
            let templateItemID = 25
            let temp: TSItemTemplate = CreateItem(templateItemID, 1).GetTemplateCopy()
            //make changes
            let entry = getOpenID()
            temp.SetEntry(entry)

            temp = setupItem(temp, player.GetLevel())

            //save
            temp.SaveItemTemplate()
            //apply
            ReloadSingleItemTemplateObject(temp)
            //add
            player.AddItem(entry, 1)
            //cache//not needed with exe mod?
            player.SendItemQueryPacketWithTemplate(temp)
        }
    })
}

function getOpenID(): uint32 {
    let id = 200000//we start our custom items at 200k
    let q = QueryCharacters('SELECT MAX(entry) FROM custom_item_template')
    while (q.GetRow()) {
        id = q.GetUInt32(0) + 1
        if (id < 200000)
            id = 200000
    }
    return id;
}

function GetRandQuality(): number {
    let qualityCheck = getRandNumber(100)
    if (qualityCheck < 50) {//uncommon
        return 2
    } else if (qualityCheck < 80) {//rare
        return 3
    } else if (qualityCheck < 95) {//epic
        return 4
    } else {//legendary
        return 5
    }
}

function chooseItemType(): TSArray<float> {
    let qualityCheck = getRandNumber(100)
    if (qualityCheck < 80) {//armor
        return itemClassInfo[0][getRandNumber(itemClassInfo[0].length + 1)]
    } else {//weapon
        return itemClassInfo[1][getRandNumber(itemClassInfo[1].length + 1)]
    }
}

function getRandNumber(max: uint32): uint32 {
    return Math.floor(Math.random() * max)
}

function setupItem(temp: TSItemTemplate, playerLevel: uint32): TSItemTemplate {
    let itemLevel: uint32 = playerLevel / 4
    temp.SetItemLevel(itemLevel);

    temp.SetQuality(GetRandQuality())
    temp.SetStatCount(temp.GetQuality() - 1)

    let itemInfo = chooseItemType()
    temp.SetClass(itemInfo[0])
    temp.SetSubClass(itemInfo[1])
    temp.SetInventoryType(itemInfo[2])

    if (temp.GetClass() == 4)//if armor
    {
        let armor: int32 = (((25 - 1) / 10) + 1) * itemLevel;
        temp.SetArmor(armor)
    }

    return temp
}
