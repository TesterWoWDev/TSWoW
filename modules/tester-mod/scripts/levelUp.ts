var spellPre15:TSArray<TSArray<TSArray<float>>> = 
[
    [//caster
        [1,1],[5,1]//level requirement,spellID
    ],
    [//melee
        [1,1],[5,1]//level requirement,spellID
    ],
    [//ranged
        [1,1],[5,1]//level requirement,spellID
    ],

]

var spellsPast15:TSArray<TSArray<TSArray<TSArray<float>>>>=
[
    [//caster
        [//Death
            [16,1],[18,1]//level requirement, spellID
        ],
        [//Arcane
            [16,1],[18,1]//level requirement, spellID
        ],
        [//Fire
            [16,1],[18,1]//level requirement, spellID
        ],
        [//Frost
            [16,1],[18,1]//level requirement, spellID
        ],
        [//Life
            [16,1],[18,1]//level requirement, spellID
        ]
    ],
    [//melee
        [//Juggernaut
            [16,1],[18,1]
        ],
        [//Knight
            [16,1],[18,1]//level requirement, spellID
        ],
        [//Defender
            [16,1],[18,1]//level requirement, spellID
        ],
        [//Assassination
            [16,1],[18,1]//level requirement, spellID
        ]
    ],
    [//ranged
        [//Beastiary
            [16,1],[18,1]
        ],
        [//Trapper
            [16,1],[18,1]//level requirement, spellID
        ],
        [//Marksman
            [16,1],[18,1]//level requirement, spellID
        ],
        [//Amazonian
            [16,1],[18,1]//level requirement, spellID
        ]
    ]
]

var hasItemToSpec:TSArray<TSArray<float>> = [//itemID,specID
    [1,0],[2,1],[3,2],[3,2],//class 12caster
    [1,0],[2,1],[3,2],[3,2],//class 13melee
    [1,0],[2,1],[3,2],[3,2]//class 14ranged
]
export function onLevel(events: TSEventHandlers) {
    events.Player.OnLevelChanged((player,oldLevel)=>{
        const classID = player.GetClass()-12
        if(player.GetLevel() > 15){
            addSpellBySpecID(player,getSpecID(player))
        }
        else if(player.GetLevel() < 15){
            const spellsToTest = spellPre15.get(classID)
            for (let i=0;i<spellsToTest.length;i++){
                if(player.GetLevel() >= spellsToTest.get(i).get(0)){
                    player.LearnSpell(spellsToTest.get(i).get(1))
                }
            }
        }
        else{
            //do something at 15 for specs
        }
    })
}

function getSpecID(player:TSPlayer):float{
    for (let i=0;i<hasItemToSpec.length;i++){
        if(player.HasItem(hasItemToSpec.get(i).get(0),1,true)){
            return hasItemToSpec.get(i).get(1)
        }
    }
    return 0//default 0 if spec not found
}

function removeSpells(player:TSPlayer){
    const classID = player.GetClass()-12
    for(let x =0;x<spellsPast15.get(classID).length;x++){
        const spellsToTest = spellsPast15.get(classID).get(x)
        for (let i=0;i<spellsToTest.length;i++){
            player.RemoveSpell(spellsToTest.get(i).get(1),false,false)
        }
    }
}

function addSpellBySpecID(player:TSPlayer,specID:float){
    const classID = player.GetClass()-12
    const spellsToTest = spellsPast15.get(classID).get(specID)
    for (let i=0;i<spellsToTest.length;i++){
        if(player.GetLevel() >= spellsToTest.get(i).get(0)){
            player.LearnSpell(spellsToTest.get(i).get(1))
        }
    }
}

