let spellsList = [
    [[0]], //must be here? I guess?
    [[0/*Warrior*/],
        [100,772,78,3127,6673,750],          // Charge (1),             Rend (1),               Heroic Strike (1),      Parry,                  Battle Shout (1),           Plate Mail
        [284,6546,355,71],                   // Heroic Strike (2),      Rend (2),      Taunt (1),          Defensive Stance
        [285,6343,845],                      // Heroic Strike (3),      Thunderclap (1),        Cleave(1)
        [34428,5308],                        // Victory Rush,           Execute (1)
        [5242,6178,7369],                    // Battle Shout (2),       Charge (2),             Cleave(2)
        [8198,6547],                         // Thunder Clap (2),       Rend(3),
        [1608,20658,11608],                  // Heroic Strike (4)       Execute (2)             Cleave(3)
        [8204,6548],                         // Thunder Clap (3),       Rend (4)
        [11564,6192,1719],                   // Heroic Strike (5),      Battle Shout (3),       Recklessness
        [20230,72,6572,2565,12678],          // Retaliation,            Shield Bash,            Revenge(1),             Shield Block,           Stance Mastery
        [8205,11565,11572,11609],            // Thunder Clap (4),       Heroic Strike (6),      Rend(5),                Cleave(4)
        [11578,20660,6574],                  // Charge (3),             Execute (3),            Revenge(2)
        [11566,11580,11573,7379],            // Heroic Strike (7),      Thunder Clap (5),       Rend(6),                Revenge(3)
        [11549,20661,11600,871],             // Battle Shout (4),       Execute (4),            Revenge(4),             Shield Wall
        [674,11567,11581,11550],             // Dual Wield,             Heroic Strike(8),       Thunder Clap (6),       Battle Shout (5)
        [20662,20569,23920,11601],           // Execute (5),            Cleave(5),              Spell Reflection,       Revenge(5)
        [25286,25264,11551,25231,25288],     // Heroic Strike (9),      Thunder Clap (7),       Battle Shout (6),       Cleave(6),              Revenge(6)
        [25234,47487],                       // Execute (6),            Shield Slam (1-7)
        [11574,25289,25236,47519,25269],     // Rend (7),               Battle Shout (7),       Execute (7),            Cleave(7),              Revenge(7)
        [29707,47436,47471,47520,64382],     // Heroic Strike (10),     Battle Shout (8+9),     Execute (8+9),          Cleave(8),              Shattering
    ],
    [[0/*Paladin*/],
        [3127,635,750,20271,35395],          // Parry,                  Holy Light (1),         Plate Mail,             Judgement of Light,     Crusader Strike
        [639,853,465,7294,62124,25780],                  // Holy Light (2),         Hammer of Justice (1),  Devotion Aura,          Retribution Aura,     Hand of Reckoning
        [26573,879],                         // Consecration (1),       Exorcism (1)
        [647,19750,24275],                   // Holy Light (3),         Flash of Light (1),     Hammer of Wrath (1)
        [1152,20165,5614],                   // Purify,                 Seal of Light,          Exorcism (2)
        [1026,19939,31935],                  // Holy Light (4),         Flash of Light (2),     Avenger's Shield (1)
        [20116,5615,5588],                   // Consecration (2),       Exorcism (3),           Hammer of Justice (2)
        [1042,19940,24274],                  // Holy Light (5),         Flash of Light (3),     Hammer of Wrath (2)
        [10312,54428,25780,31789],           // Exorcism (4),           Divine Plea,            Righteous Fury,         Righteous Defense
        [3472,19941,48950],                  // Holy Light (6),         Flash of Light (4),     Redemption (1-7)
        [10313,642,5589,24239],              // Exorcism (5),           Divine Shield,          Hammer of Justice (3),  Hammer of Wrath (3)
        [10328,19942,20922],                 // Holy Light (7),         Flash of Light (5),     Consecration (3)
        [10314,32699],                       // Exorcism (6),           Avenger's Shield (2)
        [10329,19943,10308,27180],           // Holy Light (8),         Flash of Light (6),     Hammer of Justice (4),  Hammer of Wrath (4)
        [27138,53385],                       // Exorcism (7),           Divine Storm
        [25292,27137,20923,20923],           // Holy Light (9),         Flash of Light (7),     Consecration (4)
        [48800,32700,48805],                 // Exorcism (8),           Avenger's Shield (3),   Hammer of Wrath (5)
        [27135,48784,20924],                 // Holy Light (10),        Flash of Light (8),     Consecration (5)
        [48801,27173,48806,54043],           // Exorcism (9),           Consecration (6),       Hammer of Wrath (6),    Retribution Aura (2-7)
        [27139,48785,48819,31884],           // Holy Light (11),        Flash of Light (9),     Consecration (7+8),     Avenging Wrath
    ],
    [[0/*Hunter*/],
        [3127,8737,1978,3044,982,1515,883,136,6691],// Parry,               Mail,                   Serpent Sting (1),      Arcane Shot (1),      Revive Pet,           Tame Beast,         Call Pet,       Feed Pet,       Mend Pet
        [136,13795],                                // Immolation Trap (1)
        [34026,13549,56641,14281],                  // Kill Command,        Serpent Sting (2),      Steady Shot (1),        Arcane Shot (2)
        [3111,781,5116],                            // Mend Pet (2),        Disengage,              Concussive Shot,
        [1499,14302,1510,14282],                    // Freezing Trap,       Immolation Trap (2),    Volley (1),             Arcane Shot (3)
        [3661,13550],                               // Mend Pet (3),        Serpent Sting (3),
        [14294,14283],                              // Volley (2),          Arcane Shot (4)
        [3662,13551],                               // Mend Pet (4),        Serpent Sting (4),
        [5384,14284,3045],                          // Feign Death,         Arcane Shot (5),        Rapid Fire
        [13542,674,13552,34120],                    // Mend Pet (5),        Dual Wield,             Serpent Sting (5),      Steady Shot (2)
        [14295,53351,14285],                        // Volley (3),          Kill Shot (1),          Arcane Shot (6)
        [13543,13553],                              // Mend Pet (6),        Serpent Sting (6),
        [14286,1543],                               // Arcane Shot (7),     Flare
        [13544,27022,19263],                        // Mend Pet (7),        Volley (4),             Deterrence
        [13809,14290,13554,14287],                  // Frost Trap,          Multi Shot (1-4),       Serpent Sting (7),      Arcane Shot (8)
        [27046,58431,61005],                        // Mend Pet (8),        Volley (5),             Kill Shot (2)
        [13555,49051,27019],                        // Serpent Sting (8),   Steady Shot (3),        Arcane Shot (9)
        [48989,49047,25295],                        // Mend Pet (9),        Multi Shot (5-7),       Serpent Sting (9),
        [58434,49044],                              // Volley (6),          Arcane Shot (10)
        [48990,49048,49001,61006,49052,49045],      // Mend Pet (10),       Multi Shot (8),         Serpent Sting (10-12),  Kill Shot (3),       Steady Shot (4),        Arcane Shot (11)
    ],
    [[0/*Rogue*/],
        [1752,2098,5171,703,1784],          // Sinister Strike (1),         Eviscerate (1),         Slice and Dice (1),         Garrote (1),        Stealth
        [8676,1943,6760],                   // Ambush (1),                  Rupture (1),            Eviscerate (2)
        [6761,8631,8724],                   // Eviscerate (3),              Garrote (2),            Ambush (2)
        [1833,8639,8632],                   // Cheap Shot,                  Rupture (2),            Garrote (3)
        [408,8623,1760],                    // Kidney Shot (1),             Eviscerate (4+5),       Sinister Strike (5)
        [53,26889],                         // Backstab (1),                Vanish (3)
        [3127],                             // Parry
        [5277,2983],                        // Evasion (1),                 Sprint (1)
        [1860],                             // Safe Fall
        [27441,2591],                       // Ambush (7),                  Backstab (4)
        [51723,31224],                      // Fan of Knives,               Cloak of Shadows
        [26862],                            // Sinister Strike (10)
        [1842],                             // Disarm Trap
        [48691,48671],                      // Ambush (10),                 Rupture (8)
        [11305],                            // Sprint (3)
        [1766,8647],                        // Kick,                        Expose Armor
        [2094,51724],                       // Blind,                       Sap (4)
        [48638,11281],                      // Sinister Strike (12),        Backstab (8)
        [48667],                            // Eviscerate (11)
        [48657],                            // Backstab (12)
    ],
    [[0/*Priest*/],
        [17,139,589,8092,2944],         // Power Word Shield (1),       Renew (1),              Shadow Word Pain (1),       Mind Blast (1),        Devouring Plague (1)
        [2061,14914],                   // Flash Heal (1),              Holy Fire (1)
        [598,8122],                     // Smite (3),                   Psychic Scream (1)
        [600,6075,992],                 // Power Word Shield (3),       Renew (3),              Shadow Word Pain (4)
        [15237,1004,8104],              // Holy Nova,                   Smite (5),              Mind Blast (4)
        [3747,15264,32379],             // Power Word Shield (4),       Holy Fire (4),          Shadow Word Death (1)
        [19238,19279],                  // Desperate Prayer (2),        Devouring Plague (5)
        [15431,48171],                  // Holy Nova (2),               Resurrection (7)
        [596,25367],                    // Prayer of Healing (1),       Shadow Word Pain (9)
        [10963,10947,48157],            // Greater Heal (2),            Mind Blast (9),         Shadow Word Death (3)
        [10898,27800],                  // Power Word Shield (7),       Holy Nova (5)
        [10927,15261,10933],            // Renew (7),                   Holy Fire (8),          Smite (7)
        [48161,48125],                  // Power Word Fort (8),         Shadow Word Pain (12)
        [10960,34433],                  // Prayer of Healing (3),       Shadowfiend
        [10900,27801],                  // Power Word Shield (9),       Holy Nova (6)
        [34863,48045],                  // Circle of Healing (2),       Mind Sear
        [25364,48158],                  // Smite (10),                  Shadow Word Death (4)
        [25218,48113],                  // Power Word Shield (12),      Prayer of Mending (3)
        [34866,48068],                  // Circle of Healing (5),       Renew (14)
        [48066,64843],                  // Power Word Shield (14),      Divine Hymn
    ],
    [[0/*Deathknight*/],
        [0],[0],[0],[0],[0],[0],[0],[0],[0],
        [49576,45477,45462,45902,47541],        // Death Grip,             Icy Touch (1),           Plague Strike (1),      Blood Strike (1),       Death Coil (1)
        [45524,49998,49917,49926,49892],        // Chains of Ice,          Death Strike (1),        Plague Strike (2),      Blood Strike (2),       Death Coil (2)
        [48265,48721,43265],                    // Unholy Presence,        Blood Boil (1),          Death and Decay (1),
        [49927],                                // Blood Strike (3)
        [49936,49918,56222,48263],              // Death and Decay (2),    Plague Strike (3),       Dark Command,           Frost Presence
        [49939,49893,49928,50842,49020],        // Blood Boil (2),         Death Coil (3),          Blood Strike (4),       Pestilence              Obliterate (1)
        [49940,49919],                          // Blood Boil (3),         Plague Strike (4)
        [49937,46584,48707,49909],              // Death and Decay (3)     Raise Dead,              Anti-Magic Shell,       Icy Touch (5)
        [49929,49920,51423],                    // Blood Strike (5),       Plague Strike (5),       Obliterate (2)
        [49938,49941,49894,51424],              // Death and Decay (4),    Blood Boil (4),          Death Coil (4),         Obliterate (3)
        [49895,49930,49921,51425,45529,47568],  // Death Coil (5),         Blood Strike (6),        Plague Strike (6),      Obliterate (4),         Blood Tap,        Empower Rune Weapon
    ],
    [[0/*Shaman*/],
        [8042,8050,8056,403,331,8737],     // Earth Shock (1),          Flame Shock (1),            Frost Shock (1),            Lightning Bolt (1),         Healing Wave (1),           Mail
        [915,324,8024,8033,10399],         // Lightning Bolt (4),       Lightning shield,           Flametongue Weapon (1),     Frostbrand Weapon (1),      Rockbiter Weapon (4)
        [943,8058,52127],                  // Lightning Bolt (5),       Frost Shock (2),            Water Shield
        [8046,8053,10466],                 // Earth Shock (4),          Flame Shock (3),            Lesser Healing Wave (4)
        [66843,6364,8075,8512,5675],       // Call of Ancestors,        Searing Totem (1),          Strength of Earth (1),      Windfury Totem (1),         Mana Spring Totem
        [421,10622,51991],                 // Chain Lightning (1),      Chain Heal (2),             Earthliving Weapon (3)
        [10431,16342],                     // Lightning Shield (6),     Flametongue Weapon (6)
        [15208],                           // Lightning Bolt (10)
        [2860,25567],                      // Chain Lightning (3),      Healing Stream Totem (6)
        [51505,16355,10413],               // Lava Burst,               Frostbrand Weapon (4),      Earth Shock (6)
        [2645,20608],                      // Ghost Wolf,               Reincarnation
        [10473,58704,58643,58744],         // Frost Shock (4),          Searing Totem (10),         Strength of Earth (8),      Mana Spring Totem (8)
        [2894,58785],                      // Fire Elemental Totem,     Flametongue Weapon (8)
        [25449,49233],                     // Lightning Bolt (12),      Flame Shock (9)
        [58796,49277],                     // Frostbrand Weapon (9),    Ancestral Spirit (7)
        [49271,61300],                     // Chain Lightning (8),      Riptide (3)
        [49238,49236],                     // Lightning Bolt (14),      Frost Shock (7)
        [60043,49231],                     // Lava Burst (2),           Earth Shock (10)
        [59158,49284],                     // Thunderstorm (3),         Earth Shield
        [51514,58804],                     // Hex,                      Windfury Weapon (8)    
    ],
    [[0/*Mage*/],
        [5504,587,2136,116],        // Conjure Water (1),           Conjure Food (1),           Fire Blast (1),             Frostbolt (1)
        [1463,122],                 // Mana Shield,                 Frost Nova (1)
        [1953,10],                  // Blink (1),                   Blizzard (1)
        [2139,1449],                // Counterspell,                Arcane Explosion (1)
        [118,8401,8407],            // Polymorph (1),               Fireball (6),               Frostbolt (6)
        [6127,6129],                // Conjure Water (4),           Conjure Food (4)
        [10157],                    // Arcane Intelligence (5)
        [30451,27075,8438],         // Arcane Blast (1),            Arcane Missiles (9),        Arcane Explosion (3)
        [12051],                    // Evocation
        [66,120],                   // Invisibility,                Cone of Cold (1)
        [27131],                    // Mana Shield (7)
        [10201],                    // Arcane Explosion (5)
        [10150,8492,10181],         // Fireball (10),               Cone of Cold (2),           Frostbolt (10)
        [10161],                    // Cone of Cold (5)
        [12826,30455],              // Polymorph (4),               Ice Lance (1)
        [42921],                    // Arcane Explosion (10)
        [42897,42931],              // Arcane Blast (4),            Cone of Cold (8)
        [44780,55342],              // Arcane Barrage (2),          Mirror Image, 
        [42833,42940,42842],        // Fireball (16),               Blizzard (9),               Frostbolt (16)
        [58659,44781,47610,42950],  // Ritual of Refreshment,       Arcane Barrage (3),         Frostfire Bolt (2),         Dragon's Breath (6)
    ],
    [[0/*Warlock*/],
        [172,688,348],          // Corruption (1),          Imp,                    Immolate (1) 
        [5782,6201,1120],       // Drain Soul(1),           Fear (1),                Healthstone
        [1454,1014,689],        // Life Tap (1),            Curse of Agony,         Drain Life (1)
        [5740,705],             // Rain of Fire,            Shadowbolt (3)
        [7648,1490,18868],      // Corruption (4),          Curse of Elements (1),  Shadowburn
        [11687,11665],          // Life Tap (4),            Immolate (5)
        [6217,29722],           // Curse of Agony (3),      Incinerate (1)
        [11729,6353,11660],     // Healthstone (4),         Soul Fire,              Shadowbolt (8)
        [11699],                // Drain Life (5)
        [27217],                // Drain Soul (5)
        [27218,25309],          // Curse of Agony (7),      Immolate (8)
        [693],                  // Soulstone,        
        [47820,47897],          // Rain of Fire (7),        Shadowflame
        [27209],                // Shadowbolt (11)
        [47809,47811],          // Shadowbolt (13),         Immolate (11)
        [48018,48020],          // Demon Summon,            Demon Teleport, 
        [47864],                // Curse of Agony (9)
        [47847],          // Shadowfury
        [47825],                //Soul Fire (6)
        [47867],                // Curse of Doom
    ],
    [[0]/*Empty Slot*/],
    [[0/*Druid*/],
        [8921,774,8936],                        // Moonfire (1),            Rejuvenation (1),       Regrowth (1)
        [339,5178,2921,5229],                   // Entangling Roots (1),    Wrath (3),              Starfire (1),           Enrage 
        [770,8925],                             // Faerie Fire,             Moonfire (3)
        [5211,768,1082,6808,5487,779,1079],     // Bash,                    Cat Form,               Claw,                   Maul,               Bear Form,      Swipe (Bear),       Rip (1)
        [16914,6780],                           // Hurricane (1),           Wrath (6),         
        [8928,8950,5188],                       // Moonfire (6),            Starfire (3),           Healing Touch (4)
        [5215,1822,5217,5221,1850],             // Prowl,                   Rake (1),               Tigers Fury (1),        Shred (1),          Dash (1)
        [9912,9835,2090],                       // Wrath (8),               Moonfire (10),          Rejuvenation (4)
        [5201,9745,8992,9493],                  // Claw (3),                Maul (5),               Shred (3),              Rip (3)
        [27012,9750,50763],                     // Hurricane (4),           Regrowth (6),           Revive (7)
        [26986,6787,62078],                     // Starfire (8),            Ravage (2),             Swipe Cat
        [9005,9634,22827],                      // Pounce,                  Dire Bear Form,         Ferocious Bite (2)
        [20719,9904,26997,9840],                // Feline Grace,            Rake (4),               Swipe Bear (6),         Rejuvenation (9)
        [9827,27001,740],                       // Pounce (3),              Shred (6),              Tranquility
        [22570,9896,9888,33763],                // Maim (1),                Rip (6),                Healing Touch (9),      Lifebloom (1)
        [48463,24248,25299],                    // Moonfire (14),           Ferocious Bite (6),     Rejuvenation (11)
        [48461,48574,48443],                    // Wrath (12),              Rake (7),               Regrowth (12)
        [48465,50464],                          // Starfire (10),           Nourish (1)
        [53308,49800],                          // Entangling Roots (8),    Rip (9)
        [48568,48572,48579,53251,48477,48447],  // Lacerate (3),            Shred (9),              Ravage (7),             Wild Growth (3),    Rebirth (7),    Tranquility (7)
    ],
]

let classIcons = ["","|TInterface/icons/INV_Sword_27.png:13|t","|TInterface/icons/INV_Hammer_01.png:13|t", "|TInterface/icons/INV_Weapon_Bow_07.png:13|t","|TInterface/icons/INV_ThrowingKnife_04.png:13|t","|TInterface/icons/INV_Staff_30.png:13|t", "|TInterface/icons/Spell_Deathknight_ClassIcon.png:13|t", "|TInterface/icons/inv_jewelry_talisman_04.png:13|t",  "|TInterface/icons/inv_staff_13.png:13|t", "|TInterface/icons/spell_nature_drowsy.png:13|t", "","|TInterface/icons/Ability_Druid_Maul.png:13|t",]
let levelColors = ["","F000FF","BA00FF","7100FF","3B00FF","0005FF","0067FF","00B1FF","00E2FF","00FFE2","00FFA7","00FF67","FF0000","00FF19","3BFF00","EBFF00","FFBF00","FF8900","FF5800","FF3B00","FF0000","FF005D"]
let colors = ["","C79C6E","F58CBA","ABD473","FFF569","FFFFFF","C41F3B","0070DE","69CCF0","9482C9","","FF7D0A"]

export function onLevelup(events:TSEventHandlers){
    events.Player.OnLevelChanged((player,oldLevel)=>{
        if(player.GetLevel() <= 20)
        learnSpells(player)

        if(player.GetLevel()%5 == 0)
        SendWorldMessage('[' +classIcons[player.GetClass()] + '|r] '+'|cff'+ colors[player.GetClass()] + "|Hplayer:" + player.GetName() + "|h["+player.GetName() + ']|h|r' + ' has reached level [' + '|cff'+levelColors[player.GetLevel()] +player.GetLevel()+ '|r].')
    })
    events.Player.OnLogin((player,first)=>{
        learnSpells(player)
    })
}

function learnSpells(player:TSPlayer){
    for(let j=0;j<=player.GetLevel();j++){
        let spells = spellsList[player.GetClass()][j]
        for(let i=0;i<spells.length;i++){
            if(spells[i] != 0)
            player.LearnSpell(spells[i])
        }
    }
}