let spellsList = [//skip first index, cause 0
    [//warrior
        [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
    ],
    [//paladin
        [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
    ],
    [//hunter
        [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
    ],
    [//rogue
        [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
    ],
    [//priest
        [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
    ],
    [//dk
        [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
    ],
    [//shaman
        [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
    ],
    [//mage
        [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
    ],
    [//lock
        [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
    ],
    [],//empty
    [//druid
        [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
    ],
]
export function onLevelup(events:TSEventHandlers){
    events.Player.OnLevelChanged((player,oldLevel)=>{
        learnSpells(player)
    })
    events.Player.OnCreate((player)=>{
        learnSpells(player)
    })
}

function learnSpells(player:TSPlayer){
    let spells = spellsList[player.GetClass()][player.GetLevel()]
    for(let i=0;i<spells.length;i++){
        player.LearnSpell(spells[i])
    }
}