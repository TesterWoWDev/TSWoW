const itemClassInfo: TSArray<TSArray<TSArray<float>>> = [//class,subclass,invType,statMult
    [//ARMOR
        //cloth
        [4, 1, 1, 0.8125],//head
        [4, 1, 3, 0.75],//shoulder
        [4, 1, 5, 1],//chest
        [4, 1, 6, 0.5625],//waist
        [4, 1, 7, 0.875],//legs
        [4, 1, 8, 0.6875],//boots
        [4, 1, 9, 0.4375],//wrist
        [4, 1, 10, 0.625],//hands
        //leather
        [4, 2, 1, 0.8125],//head
        [4, 2, 3, 0.75],//shoulder
        [4, 2, 5, 1],//chest
        [4, 2, 6, 0.5625],//waist
        [4, 2, 7, 0.875],//legs
        [4, 2, 8, 0.6875],//boots
        [4, 2, 9, 0.4375],//wrist
        [4, 2, 10, 0.625],//hands
        //mail
        [4, 3, 1, 0.8125],//head
        [4, 3, 3, 0.75],//shoulder
        [4, 3, 5, 1],//chest
        [4, 3, 6, 0.5625],//waist
        [4, 3, 7, 0.875],//legs
        [4, 3, 8, 0.6875],//boots
        [4, 3, 9, 0.4375],//wrist
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

const qualityMultiplier = [
    0.5,//no quality 0
    0.6,//common
    0.7,//uncommon
    0.8,//rare
    0.9,//epic
    1//legendary
]

let mana = 0
let hp = 1
let agi = 3
let str = 4
let intl = 5
let spi = 6
let stam = 7
let hit = 31
let crit = 32
let haste = 36
let expertise = 37
let ap = 38
let apen = 44
let sp = 45
let spen = 47


const statGroups: TSArray<TSArray<TSArray<float>>> = <TSArray<TSArray<TSArray<float>>>>[//statgroups
    //str groups
    [
        [str, stam],//primary statIDs
        [haste, hit]//secondary statIDs
    ],
    [
        [str, stam],
        [ap, expertise]
    ],
    [
        [str, stam],
        [hp, crit]
    ],
    [
        [str, stam],
        [apen, hit]
    ],

    //agi groups
    [
        [agi, stam],//primary statIDs
        [haste, hit]//secondary statIDs
    ],
    [
        [agi, stam],
        [ap, expertise]
    ],
    [
        [agi, stam],
        [hp, crit]
    ],
    [
        [agi, stam],
        [apen, hit]
    ],

    //int groups
    [
        [intl, spi],//primary statIDs
        [haste, hit]//secondary statIDs
    ],
    [
        [intl],
        [spi, spen]
    ],
    [
        [intl, stam],
        [crit, haste]
    ],
    [
        [intl, mana],
        [spen, hit]
    ],
]

const startID = 200000
const templateItemID = 38

export function itemCreate(events: TSEvents) {
    events.Player.OnCommand((player, command, found) => {
        const cmd = command.get().split(' ')
        if (cmd[0] == 'createitem') {
            found.set(true)
            let temp: TSItemTemplate = CreateItem(templateItemID, 1).GetTemplateCopy()
            //make changes
            const entry = getOpenID()
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

function setupItem(temp: TSItemTemplate, playerLevel: uint32): TSItemTemplate {
    const itemLevel: uint32 = (playerLevel / 4) * qualityMultiplier[temp.GetQuality()]
    temp.SetItemLevel(itemLevel);
    temp.SetRequiredLevel(playerLevel)
    temp.SetQuality(GetRandQuality())
    temp.SetStatCount(temp.GetQuality() - 1)

    const itemInfo: TSArray<float> = chooseItemType()
    temp.SetClass(itemInfo[0])
    temp.SetSubClass(itemInfo[1])
    temp.SetInventoryType(itemInfo[2])

    if (temp.GetClass() == 4)//if armor
    {
        temp.SetArmor(<uint32>(10 * itemLevel * itemInfo[3] * qualityMultiplier[temp.GetQuality()]))
    } else {//setup weapon swing damage
        temp.SetDamageMinA(<uint32>(10 * itemLevel * itemInfo[3] * qualityMultiplier[temp.GetQuality()]))
        temp.SetDamageMaxA(<uint32>(20 * itemLevel * itemInfo[3] * qualityMultiplier[temp.GetQuality()]))
        if (temp.GetQuality() == 5) {
            temp.SetDamageMinB(<uint32>(3 * itemLevel * itemInfo[3] * qualityMultiplier[temp.GetQuality()]))
            temp.SetDamageMaxB(<uint32>(5 * itemLevel * itemInfo[3] * qualityMultiplier[temp.GetQuality()]))
        }
        if (itemInfo[2] == 13) {//1h
            temp.SetDelay(1700 + (getRandNumber(5) * 100))
        } else if (itemInfo[2] == 17) {//2h
            temp.SetDelay(2500 + (getRandNumber(5) * 100))
        } else if (itemInfo[2] == 26) {//ranged
            temp.SetDelay(1800 + (getRandNumber(5) * 100))
        }
    }
    temp.SetName(getName(itemInfo, temp.GetQuality()))
    temp.SetDisplayInfoID(getDisplayID(itemInfo, temp.GetQuality()))

    temp = generateStats(itemLevel,temp,itemInfo[3])

    return temp
}


function getOpenID(): uint32 {
    //we start our custom items at 200k//perhaps QueryWorld('SELECT MAX(entry) FROM item_template') and saved as const at top of file
    let id = startID
    let q = QueryCharacters('SELECT MAX(entry) FROM custom_item_template')
    while (q.GetRow()) {
        id = q.GetUInt32(0) + 1
        if (id < startID)
            id = startID
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
        return itemClassInfo[0][getRandNumber(itemClassInfo[0].length)]
    } else {//weapon
        return itemClassInfo[1][getRandNumber(itemClassInfo[1].length)]
    }
}

function getRandNumber(max: uint32): uint32 {
    return Math.floor(Math.random() * max)
}

function getDisplayID(itemInfoArr: TSArray<float>, quality: uint32): uint32 {
    let display = 1
    let q = QueryCharacters('SELECT displayid FROM custom_item_template_displays WHERE quality = ' + quality + ' AND class = ' + itemInfoArr[0] + ' AND subclass = ' + itemInfoArr[1] + ' AND invtype = ' + itemInfoArr[2] + ' ORDER BY RAND() LIMIT 1')
    while (q.GetRow()) {
        display = q.GetUInt32(0)
    }
    return display
}

function getName(itemInfoArr: TSArray<float>, quality: uint32): string {
    let name = ""
    //base name
    let q = QueryCharacters('SELECT name FROM custom_item_template_names WHERE nametype = 2 AND class = ' + itemInfoArr[0] + ' AND subclass = ' + itemInfoArr[1] + ' AND invtype = ' + itemInfoArr[2] + ' ORDER BY RAND() LIMIT 1')
    while (q.GetRow()) {
        name = q.GetString(0)
    }

    if (quality > 2) {//prefix
        let q = QueryCharacters('SELECT name FROM custom_item_template_names WHERE nametype = 1 ORDER BY RAND() LIMIT 1')
        while (q.GetRow()) {
            name = q.GetString(0) + " " + name
        }
    }

    if (quality == 4 || quality == 5) {//suffix
        q = QueryCharacters('SELECT name FROM custom_item_template_names WHERE  nametype = 3 AND class = ' + itemInfoArr[0] + ' AND subclass = ' + itemInfoArr[1] + ' AND invtype = ' + itemInfoArr[2] + ' ORDER BY RAND() LIMIT 1')
        while (q.GetRow()) {
            name += " " + q.GetString(0)
        }
    }
    return name
}

function generateStats(itemLevel: uint32, temp: TSItemTemplate, slotMult: float): TSItemTemplate {
    let group = statGroups[getRandNumber(statGroups.length)]
    let totalStats = itemLevel * 20 * qualityMultiplier[temp.GetQuality()] + getRandNumber(temp.GetQuality()) * slotMult
    let statsPrimary: uint32 = totalStats*.7
    let statsSecondary: uint32 = totalStats*.3
    let flat1 = statsPrimary * .1//forced value to each stat
    let flat2 = statsSecondary * .1//forced value to each stat
    let stats = CreateDictionary<uint32, int32>({})
    //apply flats
    for (let i = 0; i < group.length; i++) {
        for (let j = 0; j < group[i].length; j++) {
            if (i == 0) {
                stats[group[i][j]] = flat1
                statsPrimary -= flat1
            }
            if (i == 1) {
                stats[group[i][j]] = flat2
                statsSecondary -= flat2
            }
        }
    }
    //distribute primary stats
    while (statsPrimary > 0) {
        stats[group[0][getRandNumber(group[0].length)]]++
        statsPrimary--
    }
    //distribute secondary stats
    while (statsSecondary > 0) {
        stats[group[1][getRandNumber(group[1].length)]]++
        statsSecondary--
    }
    //apply stats to item
    let index = 0
    stats.forEach((key, val) => {
        temp.SetStatType(index, key)
        temp.SetStatValue(index, val)
        index++
    })
    temp.SetStatCount(index)
    return temp
}
