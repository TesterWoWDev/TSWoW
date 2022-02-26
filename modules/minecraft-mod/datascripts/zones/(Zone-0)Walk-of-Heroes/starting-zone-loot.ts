import { addLootToCreature } from "../../functions/npc-functions";
import { SmallSackofCoins } from "../currencies";
import { WorgScroll } from "../champion-scrolls/ravaging-worg-champion-scroll";
import {
    SmallRedPouch,
    SmallBluePouch,
    SmallBlackPouch,
    SmallGreenPouch,
    BrownLeatherSatchel,
    DarnassianBleu,
    ShinyRedApple,
    RefreshingSpringWater,
    BoarSkin,
    ExpScroll,
} from "../item-manifest";
import {
    startingZoneWolfBossLoot,
    Boar01Loot,
} from "./starting-zone-creatures";

// Creature 1 = Ravaging Worg
addLootToCreature(
    startingZoneWolfBossLoot,
    [
        SmallRedPouch.ID,
        SmallBluePouch.ID,
        SmallBlackPouch.ID,
        SmallGreenPouch.ID,
        BrownLeatherSatchel.ID,
        DarnassianBleu.ID,
        ShinyRedApple.ID,
        RefreshingSpringWater.ID,
    ],
    [1, 1, 0.5, 0.5, 0, 10, 10, 18],
    0
);
/*Champion Scroll Loot - Group 1*/
addLootToCreature(startingZoneWolfBossLoot, [WorgScroll.ID], [2], 1);
/*Quest Requirements - Group 8*/
addLootToCreature(startingZoneWolfBossLoot, [SmallSackofCoins.ID], [1], 8);

//Boar Loot
addLootToCreature(Boar01Loot, [BoarSkin.ID, ExpScroll.ID], [100, 3], 7);
