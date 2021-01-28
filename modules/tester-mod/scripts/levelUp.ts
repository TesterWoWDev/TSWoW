var spellPre15:TSArray<TSArray<TSArray<float>>> = [
    [//12
        [1,1],[5,1]//level requirement,spellID
    ],
    [//13
        [1,1],[5,1]//level requirement,spellID
    ],
    [//14
        [1,1],[5,1]//level requirement,spellID
    ],

]

var spellsPast15:TSArray<TSArray<TSArray<TSArray<float>>>>=[
    [//12
        [//spec1
            [16,1],[18,1]//level requirement, spellID
        ],
        [//spec2
            [16,1],[18,1]//level requirement, spellID
        ],
        [//spec3
            [16,1],[18,1]//level requirement, spellID
        ],
        [//spec4
            [16,1],[18,1]//level requirement, spellID
        ]
    ],
    [//13
        [//spec1
            [16,1],[18,1]
        ],
        [//spec2
            [16,1],[18,1]//level requirement, spellID
        ],
        [//spec3
            [16,1],[18,1]//level requirement, spellID
        ],
        [//spec4
            [16,1],[18,1]//level requirement, spellID
        ]
    ],
    [//14
        [//spec1
            [16,1],[18,1]
        ],
        [//spec2
            [16,1],[18,1]//level requirement, spellID
        ],
        [//spec3
            [16,1],[18,1]//level requirement, spellID
        ],
        [//spec4
            [16,1],[18,1]//level requirement, spellID
        ]
    ]
]

var hasItemToSpec:TSArray<TSArray<float>> = [//itemID,specID
    [1,0],[2,1],[3,2],[3,2],//class 12
    [1,0],[2,1],[3,2],[3,2],//class 13
    [1,0],[2,1],[3,2],[3,2]//class 14
]
export function onLevel(events: TSEventHandlers) {
    events.Player.OnLevelChanged((player,oldLevel)=>{
        const classID = player.GetClass()-12
        if(player.GetLevel() > 15){
            let specID = 0
            for (let i=0;i<hasItemToSpec.length;i++){
                if(player.HasItem(hasItemToSpec.get(i).get(0),1,true)){
                    specID = hasItemToSpec.get(i).get(1)
                    break
                }
            }
            const spellsToTest = spellsPast15.get(classID).get(specID)
            for (let i=0;i<spellsToTest.length;i++){
                if(player.GetLevel() >= spellsToTest.get(i).get(0)){
                    player.LearnSpell(spellsToTest.get(i).get(1))
                }
            }
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