
import { questGiver03 } from "../../(Zone-0)Walk-of-Heroes/starting-zone-creatures"
import { spawnGob, spawnNPC } from "../../../functions/spawning-functions"
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
    