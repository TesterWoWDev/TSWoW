import {
    addLootToCreature,
    addLootToCreatureSingleChance,
} from "../../functions/npc-functions";
import {
    BloodiedPouch,
    SilkyCape,
    Carapace,
    GluttonCleaver,
    DeathmageSash,
    MordeshEye,
    FleshhideShoulders,
    FerventHelm,
    AwarenessHelm,
    SatyrBow,
    ShadowMistGloves,
    CleverHat,
    PotencyRing,
    GuileRing,
    ExpScroll,
    EyeofDestiny,
    OrbofPower,
} from "../item-manifest";
import {
    Zone2Creature5Loot,
    Zone2RareCreature2Loot,
    Zone2RareCreature1Loot,
    Zone2Creature1Loot,
} from "./zone-2-creatures";

/*Bags and Armor*/
addLootToCreature(
    Zone2Creature5Loot,
    [
        BloodiedPouch.ID,
        SilkyCape.ID,
        Carapace.ID,
        GluttonCleaver.ID,
        DeathmageSash.ID,
        MordeshEye.ID,
        FleshhideShoulders.ID,
    ],
    [2, 2, 2, 2, 2, 2, 2, 1],
    0
);
/*Weapons and Misc Drops - Group 1*/
addLootToCreature(
    Zone2Creature5Loot,
    [
        FerventHelm.ID,
        AwarenessHelm.ID,
        SatyrBow.ID,
        ShadowMistGloves.ID,
        CleverHat.ID,
        PotencyRing.ID,
        GuileRing.ID,
        ExpScroll.ID,
    ],
    [2, 2, 2, 2, 2, 2, 2, 2],
    1
);


/*Bags and Armor*/
addLootToCreature(
    Zone2RareCreature2Loot,
    [
        BloodiedPouch.ID,
        SilkyCape.ID,
        Carapace.ID,
        GluttonCleaver.ID,
        DeathmageSash.ID,
        MordeshEye.ID,
        FleshhideShoulders.ID,
        EyeofDestiny.ID,
    ],
    [10, 10, 10, 10, 10, 10, 10, 20, 0.05],
    0
);
/*Weapons and Misc Drops - Group 1*/
addLootToCreature(
    Zone2RareCreature2Loot,
    [
        FerventHelm.ID,
        AwarenessHelm.ID,
        SatyrBow.ID,
        ShadowMistGloves.ID,
        CleverHat.ID,
        PotencyRing.ID,
        GuileRing.ID,
        ExpScroll.ID,
    ],
    [10, 10, 10, 10, 10, 10, 10, 10],
    1
);
addLootToCreatureSingleChance(Zone2RareCreature2Loot, [OrbofPower.ID], 3, 3);


/*Bags and Armor*/
addLootToCreature(
    Zone2RareCreature1Loot,
    [
        BloodiedPouch.ID,
        SilkyCape.ID,
        Carapace.ID,
        GluttonCleaver.ID,
        DeathmageSash.ID,
        MordeshEye.ID,
        FleshhideShoulders.ID,
        EyeofDestiny.ID,
    ],
    [10, 10, 10, 10, 10, 10, 10, 20, 0.05],
    0
);
/*Weapons and Misc Drops - Group 1*/
addLootToCreature(
    Zone2RareCreature1Loot,
    [
        FerventHelm.ID,
        AwarenessHelm.ID,
        SatyrBow.ID,
        ShadowMistGloves.ID,
        CleverHat.ID,
        PotencyRing.ID,
        GuileRing.ID,
        ExpScroll.ID,
    ],
    [10, 10, 10, 10, 10, 10, 10, 10],
    1
);
addLootToCreatureSingleChance(Zone2RareCreature1Loot, [OrbofPower.ID], 3, 3);
/*Bags and Armor*/
addLootToCreature(
    Zone2Creature1Loot,
    [
        BloodiedPouch.ID,
        SilkyCape.ID,
        Carapace.ID,
        GluttonCleaver.ID,
        DeathmageSash.ID,
        MordeshEye.ID,
        FleshhideShoulders.ID,
    ],
    [1, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 10],
    0
);
/*Weapons and Misc Drops - Group 1*/
addLootToCreature(
    Zone2Creature1Loot,
    [
        FerventHelm.ID,
        AwarenessHelm.ID,
        SatyrBow.ID,
        ShadowMistGloves.ID,
        CleverHat.ID,
        PotencyRing.ID,
        GuileRing.ID,
        ExpScroll.ID,
    ],
    [1, 1, 1, 1, 1, 1, 1, 1],
    1
);