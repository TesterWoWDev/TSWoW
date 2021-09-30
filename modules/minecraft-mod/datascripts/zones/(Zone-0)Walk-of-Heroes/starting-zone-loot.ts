import { addLootToCreature } from "../../functions/npc-functions";
import { SmallSackofCoins } from "../../items/currencies";
import { DRQItemRequired01 } from "../../quests/Repeatable-Daily-Quest-Test";
import { WorgScroll } from "../champion-scrolls/ravaging-worg-champion-scroll";
import { SmallRedPouch, SmallBluePouch, SmallBlackPouch, SmallGreenPouch, BrownLeatherSatchel, DarnassianBleu, ShinyRedApple, RefreshingSpringWater, Dirk, TornNote } from "../(Zone-1)Bramblewood/zone-1-items";
import { startingZoneWolfBossLoot } from "./starting-zone-creatures";

// Creature 1 = Ravaging Worg
addLootToCreature(startingZoneWolfBossLoot,[
    SmallRedPouch.ID,               SmallBluePouch.ID,                  SmallBlackPouch.ID,
    SmallGreenPouch.ID,             BrownLeatherSatchel.ID,             DarnassianBleu.ID,
    ShinyRedApple.ID,               RefreshingSpringWater.ID
],[1,1,0.5,0.5,0,10,10,18],0)
/*Champion Scroll Loot - Group 1*/
addLootToCreature(startingZoneWolfBossLoot,[
    WorgScroll.ID
],[2],1)
/*Quest Requirements - Group 8*/
addLootToCreature(startingZoneWolfBossLoot,[
    DRQItemRequired01.ID,           SmallSackofCoins.ID
],[5,1],8)    
