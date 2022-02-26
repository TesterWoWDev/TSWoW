import {
    addLootToCreature,
    addLootToCreatureSingleChance,
} from "../../functions/npc-functions";

import { harpyScroll } from "../champion-scrolls/harpy-champion-scroll";
import { quailboarScroll } from "../champion-scrolls/quailboar-champion-scroll";
import { WorgScroll } from "../champion-scrolls/ravaging-worg-champion-scroll";
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
    ShivanFeather,
    EyeofDestiny,
    LurkerCord,
    LurkerGrasp,
    LurkerBelt,
    LurkerGirdle,
    RavagerCuff,
    RavagerWrap,
    Ravagerband,
    Ravagerbracer,
    Gliderwrap,
    Gliderboots,
    Glidersabatons,
    Glidergreaves,
    LostTreads,
    Commendation,
    Contempt,
    FocusingCrystal,
    SunwellVial,
    VolatilePower,
    DragonscaleBlade,
    MiseryMace,
    HeartPit,
    OrbofPower,
} from "../item-manifest";
import {
    Zone3Creature1Loot,
    Zone3Creature3Loot,
    Zone3Creature2Loot,
    Zone3RareCreature1Loot,
    SavageWolfLoot,
    Zone3RareCreature2Loot,
} from "./zone-3-creatures";

/*Bags and Armor*/
addLootToCreature(
    Zone3Creature1Loot,
    [
        BloodiedPouch.ID,
        SilkyCape.ID,
        Carapace.ID,
        GluttonCleaver.ID,
        DeathmageSash.ID,
        MordeshEye.ID,
        FleshhideShoulders.ID,
        quailboarScroll.ID,
    ],
    [2, 2, 2, 2, 2, 2, 2, 1, 1],
    0
);
/*Weapons and Misc Drops - Group 1*/
addLootToCreature(
    Zone3Creature1Loot,
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
    Zone3Creature3Loot,
    [
        BloodiedPouch.ID,
        SilkyCape.ID,
        Carapace.ID,
        GluttonCleaver.ID,
        DeathmageSash.ID,
        MordeshEye.ID,
        FleshhideShoulders.ID,
        harpyScroll.ID,
    ],
    [2, 2, 2, 2, 2, 2, 2, 1, 1],
    0
);
/*Weapons and Misc Drops - Group 1*/
addLootToCreature(
    Zone3Creature3Loot,
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
    Zone3Creature2Loot,
    [
        BloodiedPouch.ID,
        SilkyCape.ID,
        Carapace.ID,
        GluttonCleaver.ID,
        DeathmageSash.ID,
        MordeshEye.ID,
        FleshhideShoulders.ID,
        quailboarScroll.ID,
    ],
    [2, 2, 2, 2, 2, 2, 2, 1, 1],
    0
);
/*Weapons and Misc Drops - Group 1*/
addLootToCreature(
    Zone3Creature2Loot,
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
    Zone3RareCreature1Loot,
    [
        BloodiedPouch.ID,
        SilkyCape.ID,
        Carapace.ID,
        GluttonCleaver.ID,
        DeathmageSash.ID,
        MordeshEye.ID,
        FleshhideShoulders.ID,
        ShivanFeather.ID,
        harpyScroll.ID,
        EyeofDestiny.ID,
    ],
    [2, 2, 2, 2, 2, 2, 2, 1, 5, 0.05],
    0
);
/*Weapons and Misc Drops - Group 1*/
addLootToCreature(
    Zone3RareCreature1Loot,
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
addLootToCreatureSingleChance(
    Zone3RareCreature1Loot,
    [
        LurkerCord.ID,
        LurkerGrasp.ID,
        LurkerBelt.ID,
        LurkerGirdle.ID,
        RavagerCuff.ID,
        RavagerWrap.ID,
        Ravagerband.ID,
        Ravagerbracer.ID,
        Gliderwrap.ID,
        Gliderboots.ID,
        Glidersabatons.ID,
        Glidergreaves.ID,
        LostTreads.ID,
        Commendation.ID,
        Contempt.ID,
        FocusingCrystal.ID,
        SunwellVial.ID,
        VolatilePower.ID,
        DragonscaleBlade.ID,
        MiseryMace.ID,
        HeartPit.ID,
    ],
    0.5,
    2
);
addLootToCreatureSingleChance(Zone3RareCreature1Loot, [OrbofPower.ID], 5, 3);

/*Bags and Armor*/
addLootToCreature(
    SavageWolfLoot,
    [
        BloodiedPouch.ID,
        SilkyCape.ID,
        Carapace.ID,
        GluttonCleaver.ID,
        DeathmageSash.ID,
        MordeshEye.ID,
        FleshhideShoulders.ID,
        WorgScroll.ID,
    ],
    [2, 2, 2, 2, 2, 2, 2, 1, 1],
    0
);
/*Weapons and Misc Drops - Group 1*/
addLootToCreature(
    SavageWolfLoot,
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
    Zone3RareCreature2Loot,
    [
        BloodiedPouch.ID,
        SilkyCape.ID,
        Carapace.ID,
        GluttonCleaver.ID,
        DeathmageSash.ID,
        MordeshEye.ID,
        FleshhideShoulders.ID,
        quailboarScroll.ID,
        EyeofDestiny.ID,
    ],
    [2, 2, 2, 2, 2, 2, 2, 5, 0.05],
    0
);
/*Weapons and Misc Drops - Group 1*/
addLootToCreature(
    Zone3RareCreature2Loot,
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
addLootToCreatureSingleChance(
    Zone3RareCreature2Loot,
    [
        LurkerCord.ID,
        LurkerGrasp.ID,
        LurkerBelt.ID,
        LurkerGirdle.ID,
        RavagerCuff.ID,
        RavagerWrap.ID,
        Ravagerband.ID,
        Ravagerbracer.ID,
        Gliderwrap.ID,
        Gliderboots.ID,
        Glidersabatons.ID,
        Glidergreaves.ID,
        LostTreads.ID,
        Commendation.ID,
        Contempt.ID,
        FocusingCrystal.ID,
        SunwellVial.ID,
        VolatilePower.ID,
        DragonscaleBlade.ID,
        MiseryMace.ID,
        HeartPit.ID,
    ],
    0.5,
    2
);
addLootToCreatureSingleChance(Zone3RareCreature2Loot, [OrbofPower.ID], 5, 3);
