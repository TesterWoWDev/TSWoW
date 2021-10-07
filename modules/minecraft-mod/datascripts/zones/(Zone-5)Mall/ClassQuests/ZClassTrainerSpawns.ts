
import { std } from "tswow-stdlib"
import { MODNAME } from "../../../modname"
import { questGiver03 } from "../../(Zone-0)Walk-of-Heroes/starting-zone-creatures"
import { addWaypoint, spawnGob, spawnNPC, spawnNPCWithTimer } from "../../../functions/spawning-functions"
import { DeathknightQuestGiver01 } from "./DeathKnightClassQuest"
import { DruidQuestGiver01 } from "./DruidClassQuest"
import { HunterQuestGiver01 } from "./HunterClassQuest"
import { MageQuestGiver01 } from "./MageClassQuest"
import { PaladinQuestGiver01 } from "./PaladinClassQuest"
import { PriestQuestGiver01 } from "./PriestClassQuest"
import { RogueQuestGiver01 } from "./RogueClassQuest"
import { ShamanQuestGiver01 } from "./ShamanClassQuest"
import { WarlockQuestGiver01 } from "./WarlockClassQuest"
import { WarriorQuestGiver01 } from "./WarriorClassQuest"
import { setFaction } from "../../../functions/npc-functions"

spawnNPC(questGiver03.ID,0,0,[-8292.411133,-271.135468,17.274445,1.4686858]) //Quest Giver 3 Spawn

spawnNPC(WarlockQuestGiver01.ID,0,0,[-8499.652344,-202.778442,-6.027380,2.038107])//Warlock

spawnNPC(HunterQuestGiver01.ID,0,0,[-8331.346680,-41.606926,0.549585,1.441206]) //Hunter

spawnNPC(RogueQuestGiver01.ID,0,0,[-8283.104492,-264.669922,-5.097000,1.967425])//Rogue

spawnNPC(PaladinQuestGiver01.ID,0,0,[-8398.767578,-153.386414,0.806448,4.205809]) //Paladin

spawnNPC(PriestQuestGiver01.ID,0,0,[-8210.161133,-209.308029,3.408000,2.847071]) //Priest

spawnNPC(DruidQuestGiver01.ID,0,0,[-8269.039062,83.824928,0.233742,4.873403]) //Druid

spawnNPC(MageQuestGiver01.ID,0,0,[-8296.487305,28.826851,12.764000,5.423173]) //Mage

spawnNPC(WarriorQuestGiver01.ID,0,0,[-8435.265625,-283.853180,13.002136,5.792310]) //Warrior

spawnNPC(ShamanQuestGiver01.ID,0,0,[-8364.425781,-266.700806,10.418685,1.767146]) //Shaman

spawnNPC(DeathknightQuestGiver01.ID,0,0,[-8325.328125,-121.336845,0.852532,5.242542]) //Deathknight

spawnNPC(33251,0,0,[-8326.202148,-124.327225,0.852532,0.117808]) //Deathknight Trainer
spawnGob(190557, [-8326.202148,-124.327225,0.852532,0.117808])//runeforge
//spawnNPC(22060,0,0,[-8144.066406,21.116680,0.641976,3.220194]) //Rogue Ganker

export let Amulet01 = std.Items.create(MODNAME,'newamulet01',21712)
Amulet01.Quality.setBlue()
Amulet01.Price.set(151211,359521,1)
Amulet01.RequiredLevel.set(7)

export let Amulet02 = std.Items.create(MODNAME,'newamulet02',7722)
Amulet02.Quality.setGreen()
Amulet02.Price.set(79523,91517,1)
Amulet02.RequiredLevel.set(5)

export let Amulet03 = std.Items.create(MODNAME,'newamulet03',9641)
Amulet03.Quality.setGreen()
Amulet03.Price.set(22692,25326,1)
Amulet03.RequiredLevel.set(1)

export let Amulet04 = std.Items.create(MODNAME,'newamulet04',1443)
Amulet04.Quality.setBlue()
Amulet04.Price.set(121256,192526,1)
Amulet04.RequiredLevel.set(7)

export let Amulet05 = std.Items.create(MODNAME,'newamulet05',10711)
Amulet05.Quality.setBlue()
Amulet05.Price.set(34546,39636,1)
Amulet05.RequiredLevel.set(1)



export let AmuletVendor = std.CreatureTemplates.create(MODNAME,'druid01-creature',3562)
AmuletVendor.Name.enGB.set('Maggie the Wise')
AmuletVendor.FactionTemplate.set(35)
AmuletVendor.addVendorItem(Amulet01.ID,2,3600,0)
AmuletVendor.addVendorItem(Amulet02.ID,2,3600,0)
AmuletVendor.addVendorItem(Amulet03.ID,2,3600,0)
AmuletVendor.addVendorItem(Amulet04.ID,2,3600,0)
AmuletVendor.addVendorItem(Amulet05.ID,2,3600,0)

spawnNPC(3562,0,0,[-8186.291504,13.517035,0.115301,5.435018]) //Reagent Vendor at City Exit
setFaction(3562,35)
spawnNPC(AmuletVendor.ID,0,0,[-8182.976074,16.767733,0.099456,5.533191]) //Amulet Vendor at City Exit

spawnGob(532751, [-8299.083008,20.426346,12.764252,0.761878])//NpcSpawnPortal

export let AdventurerMageTower = std.CreatureTemplates.create(MODNAME,'adventurermagetower-creature',39686)
AdventurerMageTower.Name.enGB.set('Foreign Adventurer')
AdventurerMageTower.Subname.enGB.set('')
AdventurerMageTower.FactionTemplate.set(31)
AdventurerMageTower.Models.clearAll()
AdventurerMageTower.Models.addIds(30859,30987,30861,30862)
AdventurerMageTower.Level.set(1,3)
let AdventurerMageTowerGUID = spawnNPCWithTimer(AdventurerMageTower.ID,0,0,
    [-8299.083008,20.426346,12.764252,0.761878],10)
addWaypoint(AdventurerMageTowerGUID,[
    [-8299.083008,20.426346,12.764252,0.761878,0],
    [-8293.528320,24.700512,12.764252,5.906237,0],
    [-8266.353516,9.681848,12.674788,5.764865,0],
    [-8231.514648,-11.710628,4.428009,5.729524,0],
    [-8201.644531,-18.149355,0.264162,6.118293,0],
    [-8140.579102,42.030800,0.426499,0.797220,0],
    [-8102.019531,70.905174,1.228998,0.624432,0]])
        