import { std } from "tswow-stdlib";
import { SQL } from "wotlkdata";
import {
    addLootToGobChest,
    addLootToGobChestMultiDrop,
} from "../functions/gob-functions";
import { makeResourceNode } from "../functions/resource-node-functions";
import {
    spawnMultiGobTimer,
    spawnNPC,
    spawnMultipleNPCWithTimer,
} from "../functions/spawning-functions";
import {
    tierOneClothMaterial,
    tierOneMailMaterial,
    tierOneLeatherMaterial,
    tierOneBaseResources,
    tierOneClothGear,
} from "../items/armor/tier1-set";
import {
    tierTwoClothMaterial,
    tierTwoMailMaterial,
    tierTwoLeatherMaterial,
} from "../items/armor/tier2-set";
import {
    tierThreeClothMaterial,
    tierThreeLeatherMaterial,
    tierThreeMailMaterial,
} from "../items/armor/tier3-set";
import { SmallSackofCoinswithBag } from "../items/currencies";
import { MODNAME } from "../modname";
import {
    startingZoneWolfBoss,
    questGiver01,
    questGiver02,
    questGiver03,
    BanditNpc,
    BanditBossNpc,
} from "./(Zone-0)Walk-of-Heroes/starting-zone-creatures";
import { creature4, creature5 } from "./(Zone-1)Bramblewood/zone-1-creatures";
import { Zone2Creature1 } from "./(Zone-2)HauntedHollows/zone-2-creatures";
import {
    DeathknightQuest01,
    DeathknightQuest02,
} from "./(Zone-5)Mall/ClassQuests/DeathKnightClassQuest";
import {
    DruidQuest01,
    DruidQuest02,
} from "./(Zone-5)Mall/ClassQuests/DruidClassQuest";
import {
    HunterQuest01,
    HunterQuest02,
} from "./(Zone-5)Mall/ClassQuests/HunterClassQuest";
import {
    MageQuest01,
    MageQuest02,
} from "./(Zone-5)Mall/ClassQuests/MageClassQuest";
import {
    PaladinQuest01,
    PaladinQuest02,
} from "./(Zone-5)Mall/ClassQuests/PaladinClassQuest";
import {
    PriestQuest01,
    PriestQuest02,
} from "./(Zone-5)Mall/ClassQuests/PriestClassQuest";
import {
    RogueQuest01,
    RogueQuest02,
} from "./(Zone-5)Mall/ClassQuests/RogueClassQuest";
import {
    ShamanQuest01,
    ShamanQuest02,
} from "./(Zone-5)Mall/ClassQuests/ShamanClassQuest";
import {
    WarlockQuest01,
    WarlockQuest02,
} from "./(Zone-5)Mall/ClassQuests/WarlockClassQuest";
import {
    WarriorQuest01,
    WarriorQuest02,
} from "./(Zone-5)Mall/ClassQuests/WarriorClassQuest";
import {
    StrangeEtherealCrate,
    EtherealPortalBag,
    VialofPoison,
    AgathasLockbox,
    startingResource01,
    SatchelofResources,
    OrbofPower,
    SatchelofPower,
    BoarSkin,
    BoarskinSatchel,
    ExpScroll,
    DarkSteel,
    DarkCloth,
    DarkLeather,
    ItemReward01,
    ItemReward02,
    ItemReward03,
    ItemReward04,
    ItemReward05,
    ItemReward06,
} from "./item-manifest";
import {
    DungeonMob01,
    DungeonMob02,
    DungeonBoss01,
    DungeonBoss02,
    DungeonBoss03,
} from "./open-world-dungeon-01";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                                      Quest Declaration Zone

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let BagQuest01 = std.Quests.create(MODNAME, "bagquest01-quest");
export let ExpTestQuest01 = std.Quests.create(MODNAME, "expquest01-quest");
export let startingQuest01 = std.Quests.create(
    MODNAME,
    "startingquest01-quest"
);
export let startingQuest02 = std.Quests.create(
    MODNAME,
    "startingquest02-quest"
);
export let startingQuest03 = std.Quests.create(
    MODNAME,
    "startingquest03-quest"
);
export let startingQuest04 = std.Quests.create(
    MODNAME,
    "startingquest04-quest"
);
export let startingQuest05 = std.Quests.create(
    MODNAME,
    "startingquest05-quest"
);
export let startingQuest06 = std.Quests.create(
    MODNAME,
    "startingquest06-quest"
);
export let startingQuest07 = std.Quests.create(
    MODNAME,
    "startingquest07-quest"
);
export let startingQuest08 = std.Quests.create(
    MODNAME,
    "startingquest08-quest"
);
export let startingQuest09 = std.Quests.create(
    MODNAME,
    "startingquest09-quest"
);
export let startingQuest10 = std.Quests.create(
    MODNAME,
    "startingquest10-quest"
);
export let startingQuest11 = std.Quests.create(
    MODNAME,
    "startingquest11-quest"
);
export let OpenWorldQuest01 = std.Quests.create(MODNAME, "openworldquest01");
export let OpenWorldQuest02 = std.Quests.create(MODNAME, "openworldquest02");
export let OpenWorldQuest03 = std.Quests.create(MODNAME, "openworldquest03");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                                      Quest Order Information

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
SQL.quest_template_addon
    .add(startingQuest01.ID)
    .NextQuestID.set(startingQuest02.ID)
    .PrevQuestID.set(0)
    .ExclusiveGroup.set(0);
SQL.quest_template_addon
    .add(startingQuest02.ID)
    .NextQuestID.set(startingQuest03.ID)
    .PrevQuestID.set(startingQuest01.ID)
    .ExclusiveGroup.set(0);
SQL.quest_template_addon
    .add(startingQuest03.ID)
    .NextQuestID.set(startingQuest04.ID)
    .PrevQuestID.set(startingQuest02.ID)
    .ExclusiveGroup.set(0);
SQL.quest_template_addon
    .add(startingQuest04.ID)
    .NextQuestID.set(startingQuest05.ID)
    .PrevQuestID.set(startingQuest03.ID)
    .ExclusiveGroup.set(0);
SQL.quest_template_addon
    .add(startingQuest05.ID)
    .NextQuestID.set(startingQuest06.ID)
    .PrevQuestID.set(startingQuest04.ID)
    .ExclusiveGroup.set(0);
SQL.quest_template_addon
    .add(startingQuest06.ID)
    .NextQuestID.set(startingQuest07.ID)
    .PrevQuestID.set(startingQuest05.ID)
    .ExclusiveGroup.set(0);
SQL.quest_template_addon
    .add(startingQuest07.ID)
    .NextQuestID.set(startingQuest08.ID)
    .PrevQuestID.set(startingQuest06.ID)
    .ExclusiveGroup.set(0);
SQL.quest_template_addon
    .add(startingQuest08.ID)
    .NextQuestID.set(startingQuest09.ID)
    .PrevQuestID.set(startingQuest07.ID)
    .ExclusiveGroup.set(0);
SQL.quest_template_addon
    .add(startingQuest09.ID)
    .NextQuestID.set(startingQuest10.ID)
    .PrevQuestID.set(startingQuest08.ID)
    .ExclusiveGroup.set(0);
SQL.quest_template_addon
    .add(startingQuest10.ID)
    .NextQuestID.set(startingQuest11.ID)
    .PrevQuestID.set(startingQuest09.ID)
    .ExclusiveGroup.set(0);
// Class Quest Zone
SQL.quest_template_addon
    .add(DeathknightQuest01.ID)
    .NextQuestID.set(DeathknightQuest02.ID)
    .PrevQuestID.set(startingQuest05.ID)
    .ExclusiveGroup.set(0)
    .AllowableClasses.set(32);
SQL.quest_template_addon
    .add(DruidQuest01.ID)
    .NextQuestID.set(DruidQuest02.ID)
    .PrevQuestID.set(startingQuest05.ID)
    .ExclusiveGroup.set(0)
    .AllowableClasses.set(1024);
SQL.quest_template_addon
    .add(HunterQuest01.ID)
    .NextQuestID.set(HunterQuest02.ID)
    .PrevQuestID.set(startingQuest05.ID)
    .ExclusiveGroup.set(0)
    .AllowableClasses.set(4);
SQL.quest_template_addon
    .add(MageQuest01.ID)
    .NextQuestID.set(MageQuest02.ID)
    .PrevQuestID.set(startingQuest05.ID)
    .ExclusiveGroup.set(0)
    .AllowableClasses.set(128);
SQL.quest_template_addon
    .add(PaladinQuest01.ID)
    .NextQuestID.set(PaladinQuest02.ID)
    .PrevQuestID.set(startingQuest05.ID)
    .ExclusiveGroup.set(0)
    .AllowableClasses.set(2);
SQL.quest_template_addon
    .add(PriestQuest01.ID)
    .NextQuestID.set(PriestQuest02.ID)
    .PrevQuestID.set(startingQuest05.ID)
    .ExclusiveGroup.set(0)
    .AllowableClasses.set(16);
SQL.quest_template_addon
    .add(RogueQuest01.ID)
    .NextQuestID.set(RogueQuest02.ID)
    .PrevQuestID.set(startingQuest05.ID)
    .ExclusiveGroup.set(0)
    .AllowableClasses.set(8);
SQL.quest_template_addon
    .add(ShamanQuest01.ID)
    .NextQuestID.set(ShamanQuest02.ID)
    .PrevQuestID.set(startingQuest05.ID)
    .ExclusiveGroup.set(0)
    .AllowableClasses.set(64);
SQL.quest_template_addon
    .add(WarlockQuest01.ID)
    .NextQuestID.set(WarlockQuest02.ID)
    .PrevQuestID.set(startingQuest05.ID)
    .ExclusiveGroup.set(0)
    .AllowableClasses.set(256);
SQL.quest_template_addon
    .add(WarriorQuest01.ID)
    .NextQuestID.set(WarriorQuest02.ID)
    .PrevQuestID.set(startingQuest05.ID)
    .ExclusiveGroup.set(0)
    .AllowableClasses.set(1);

SQL.quest_template_addon
    .add(DeathknightQuest02.ID)
    .NextQuestID.set(0)
    .PrevQuestID.set(DeathknightQuest01.ID)
    .ExclusiveGroup.set(0)
    .AllowableClasses.set(32)
    .SpecialFlags.set(1);
SQL.quest_template_addon
    .add(DruidQuest02.ID)
    .NextQuestID.set(0)
    .PrevQuestID.set(DruidQuest01.ID)
    .ExclusiveGroup.set(0)
    .AllowableClasses.set(1024)
    .SpecialFlags.set(1);
SQL.quest_template_addon
    .add(HunterQuest02.ID)
    .NextQuestID.set(0)
    .PrevQuestID.set(HunterQuest01.ID)
    .ExclusiveGroup.set(0)
    .AllowableClasses.set(4)
    .SpecialFlags.set(1);
SQL.quest_template_addon
    .add(MageQuest02.ID)
    .NextQuestID.set(0)
    .PrevQuestID.set(MageQuest01.ID)
    .ExclusiveGroup.set(0)
    .AllowableClasses.set(128)
    .SpecialFlags.set(1);
SQL.quest_template_addon
    .add(PaladinQuest02.ID)
    .NextQuestID.set(0)
    .PrevQuestID.set(PaladinQuest01.ID)
    .ExclusiveGroup.set(0)
    .AllowableClasses.set(2)
    .SpecialFlags.set(1);
SQL.quest_template_addon
    .add(PriestQuest02.ID)
    .NextQuestID.set(0)
    .PrevQuestID.set(PriestQuest01.ID)
    .ExclusiveGroup.set(0)
    .AllowableClasses.set(16)
    .SpecialFlags.set(1);
SQL.quest_template_addon
    .add(RogueQuest02.ID)
    .NextQuestID.set(0)
    .PrevQuestID.set(RogueQuest01.ID)
    .ExclusiveGroup.set(0)
    .AllowableClasses.set(8)
    .SpecialFlags.set(1);
SQL.quest_template_addon
    .add(ShamanQuest02.ID)
    .NextQuestID.set(0)
    .PrevQuestID.set(ShamanQuest01.ID)
    .ExclusiveGroup.set(0)
    .AllowableClasses.set(64)
    .SpecialFlags.set(1);
SQL.quest_template_addon
    .add(WarlockQuest02.ID)
    .NextQuestID.set(0)
    .PrevQuestID.set(WarlockQuest01.ID)
    .ExclusiveGroup.set(0)
    .AllowableClasses.set(256)
    .SpecialFlags.set(1);
SQL.quest_template_addon
    .add(WarriorQuest02.ID)
    .NextQuestID.set(0)
    .PrevQuestID.set(WarriorQuest01.ID)
    .ExclusiveGroup.set(0)
    .AllowableClasses.set(1)
    .SpecialFlags.set(1);

//Side Quests
SQL.quest_template_addon
    .add(BagQuest01.ID)
    .NextQuestID.set(0)
    .PrevQuestID.set(startingQuest05.ID)
    .ExclusiveGroup.set(0)
    .SpecialFlags.set(1);
SQL.quest_template_addon
    .add(ExpTestQuest01.ID)
    .NextQuestID.set(0)
    .PrevQuestID.set(startingQuest05.ID)
    .ExclusiveGroup.set(0)
    .SpecialFlags.set(1);
SQL.quest_template_addon
    .add(OpenWorldQuest01.ID)
    .NextQuestID.set(0)
    .PrevQuestID.set(startingQuest09.ID)
    .ExclusiveGroup.set(0)
    .SpecialFlags.set(1);
SQL.quest_template_addon
    .add(OpenWorldQuest02.ID)
    .NextQuestID.set(0)
    .PrevQuestID.set(startingQuest09.ID)
    .ExclusiveGroup.set(0)
    .SpecialFlags.set(1);
SQL.quest_template_addon
    .add(OpenWorldQuest03.ID)
    .NextQuestID.set(0)
    .PrevQuestID.set(startingQuest09.ID)
    .ExclusiveGroup.set(0);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                              Creature and Object Spawning

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let EtherealCrate = makeResourceNode(
    "Ethereal Crate",
    75964,
    57,
    "etherealcrate-chest"
);
SQL.gameobject_loot_template
    .add(EtherealCrate.ID, StrangeEtherealCrate.ID)
    .QuestRequired.set(1);
EtherealCrate.Size.set(1);
addLootToGobChest(EtherealCrate, [StrangeEtherealCrate.ID], [100], 1);
addLootToGobChest(EtherealCrate, [EtherealPortalBag.ID], [15], 2);

spawnMultiGobTimer(
    EtherealCrate.ID,
    [
        { map: 725, x: -7957.128906, y: 237.430008, z: -37.3708, o: 4.547691 },
        { map: 725, x: -7964.02002, y: 228.326645, z: -37.041145, o: 4.940389 },
        { map: 725, x: -7971.256836, y: 226.169128, z: -36.605244, o: 1.900899 },
        { map: 725, x: -7973.173828, y: 234.330338, z: -36.624226, o: 1.437514 },
        { map: 725, x: -7966.296387, y: 253.61795, z: -38.353725, o: 1.190113 },
        { map: 725, x: -7974.653809, y: 258.668427, z: -38.075672, o: 2.191496 },
        { map: 725, x: -7971.496582, y: 268.120178, z: -36.161861, o: 6.220588 },
        { map: 725, x: -7957.182617, y: 251.01738, z: -36.566978, o: 1.186188 },
        { map: 725, x: -7940.236328, y: 249.470932, z: -36.530128, o: 5.596198 },
        { map: 725, x: -7941.429688, y: 242.442841, z: -36.74329, o: 5.113184 },
        { map: 725, x: -7945.03125, y: 222.2771, z: -37.645897, o: 5.1014 },
        { map: 725, x: -7944.44043, y: 220.052277, z: -37.916874, o: 0.271199 },
        { map: 725, x: -7932.15332, y: 214.145721, z: -39.814037, o: 5.965335 },
        { map: 725, x: -7930.696777, y: 212.498489, z: -38.889015, o: 3.067212 },
        { map: 725, x: -7949.067383, y: 188.072586, z: -46.544342, o: 3.632698 },
        { map: 725, x: -7972.292969, y: 192.637115, z: -43.754292, o: 5.026778 },
        { map: 725, x: -7970.023926, y: 192.633804, z: -44.096935, o: 5.124952 },
        { map: 725, x: -7970.529785, y: 186.888824, z: -44.392811, o: 4.355266 },
        { map: 725, x: -7955.104492, y: 172.695648, z: -44.393047, o: 5.788609 },
        { map: 725, x: -7953.729492, y: 172.017166, z: -43.316292, o: 4.335625 },
        { map: 725, x: -7935.241699, y: 155.095856, z: -47.17701, o: 0.970187 },
        { map: 725, x: -7921.680176, y: 141.577286, z: -45.178108, o: 4.347403 },
        { map: 725, x: -7921.549316, y: 137.958069, z: -44.927856, o: 1.893034 },
        { map: 725, x: -7905.825195, y: 159.503204, z: -45.347172, o: 2.242537 },
        { map: 725, x: -7914.552734, y: 161.529678, z: -43.369339, o: 3.514882 },
        { map: 725, x: -7895.453613, y: 148.694336, z: -46.092865, o: 0.491095 },
        { map: 725, x: -7886.416016, y: 159.265869, z: -44.413834, o: 1.382522 },
        { map: 725, x: -7890.655273, y: 160.090881, z: -44.676987, o: 1.378595 },
        { map: 725, x: -7889.769531, y: 137.806137, z: -44.667465, o: 3.656256 },
        { map: 725, x: -7900.470215, y: 115.185318, z: -46.313339, o: 3.648405 },
        { map: 725, x: -7928.28418, y: 117.710625, z: -50.676533, o: 1.512121 },
        { map: 725, x: -7926.455078, y: 120.523079, z: -50.65554, o: 1.574953 },
        { map: 725, x: -7929.417969, y: 126.765778, z: -48.228886, o: 4.052886 },
        { map: 725, x: -7877.225098, y: 136.992264, z: -44.073559, o: 5.552999 },
        { map: 725, x: -7859.605957, y: 125.683487, z: -37.768921, o: 0.074845 },
        { map: 725, x: -7842.160156, y: 128.177979, z: -37.799294, o: 6.126339 },
        { map: 725, x: -7837.504395, y: 133.695862, z: -38.695011, o: 0.993761 },
        { map: 725, x: -7839.62207, y: 145.271942, z: -37.517063, o: 2.533142 },
        { map: 725, x: -7859.950684, y: 155.153458, z: -36.663605, o: 2.018706 },
        { map: 725, x: -7853.986328, y: 187.541779, z: -31.652126, o: 0.656037 },
        { map: 725, x: -7843.263672, y: 187.526016, z: -32.403973, o: 0.762066 },
        { map: 725, x: -7842.726562, y: 189.357864, z: -31.328278, o: 5.804324 },
        { map: 725, x: -7842.836914, y: 181.89743, z: -32.180656, o: 3.141825 },
        { map: 725, x: -7862.0625, y: 183.280777, z: -30.448784, o: 2.615608 },
        { map: 725, x: -7874.550781, y: 192.139999, z: -25.705698, o: 2.776615 },
        { map: 725, x: -7906.943359, y: 206.072174, z: -26.782949, o: 2.006925 },
        { map: 725, x: -7937.27832, y: 207.32048, z: -27.398716, o: 4.041109 },
        { map: 725, x: -7937.97168, y: 206.01004, z: -26.570238, o: 3.30676 },
        { map: 725, x: -7939.544922, y: 207.780823, z: -26.705162, o: 1.406095 },
        { map: 725, x: -7946.977051, y: 223.171875, z: -28.635015, o: 1.539613 },
        { map: 725, x: -7951.078613, y: 225.666779, z: -28.772329, o: 1.936239 },
        { map: 725, x: -7958.072266, y: 231.702042, z: -28.843103, o: 2.164004 },
        { map: 725, x: -7964.905762, y: 231.263275, z: -28.84149, o: 2.23469 },
        { map: 725, x: -7913.546387, y: 175.172394, z: -25.887861, o: 5.242771 },
        { map: 725, x: -7912.062988, y: 170.784012, z: -25.261095, o: 5.768984 },
        { map: 725, x: -7909.398438, y: 163.040161, z: -25.930382, o: 2.92978 },
        { map: 725, x: -7904.158691, y: 151.963135, z: -26.79089, o: 4.276741 },
        { map: 725, x: -7911.77832, y: 147.428726, z: -27.089058, o: 3.232162 },
        { map: 725, x: -7915.924805, y: 151.452896, z: -27.870016, o: 0.9388 },
        { map: 725, x: -7889.249023, y: 144.248825, z: -26.954319, o: 0.004172 },
        { map: 725, x: -7889.256348, y: 146.005814, z: -27.035995, o: 6.279504 },
        { map: 725, x: -7887.859863, y: 144.286667, z: -26.050179, o: 2.709869 },
        { map: 725, x: -7887.103516, y: 129.012939, z: -22.460749, o: 1.724188 },
        { map: 725, x: -7876.991211, y: 146.09845, z: -23.177647, o: 1.072307 },
        { map: 725, x: -7849.847656, y: 163.151505, z: -25.594839, o: 0.318325 },
        { map: 725, x: -7837.82373, y: 157.406403, z: -27.554106, o: 0.015947 },
        { map: 725, x: -7840.44873, y: 169.324524, z: -24.605524, o: 5.937851 },
        { map: 725, x: -7831.480469, y: 165.753174, z: -26.19128, o: 5.160311 },
        { map: 725, x: -7833.29541, y: 158.632385, z: -27.252964, o: 2.572427 },
    ],
    60
);

export let BoarQuestGiver01 = std.CreatureTemplates.create(
    MODNAME,
    "boarquestgiver01-creature",
    30368
);
BoarQuestGiver01.Name.enGB.set("Jethel Salisbury");
BoarQuestGiver01.Models.clearAll();
BoarQuestGiver01.Models.addIds(2200);
BoarQuestGiver01.Level.set(10, 10);
BoarQuestGiver01.FactionTemplate.set(35);
BoarQuestGiver01.DamageSchool.Normal.set();
BoarQuestGiver01.Stats.ArmorMod.set(1);
BoarQuestGiver01.Stats.DamageMod.set(1);
BoarQuestGiver01.Stats.ExperienceMod.set(1);
BoarQuestGiver01.Stats.HealthMod.set(1);
BoarQuestGiver01.Stats.ManaMod.set(1);
BoarQuestGiver01.NPCFlags.QUEST_GIVER.set(true);
spawnNPC(BoarQuestGiver01.ID, 0, 0, {
    map: 725,
    x: -8263.85,
    y: -122.315,
    z: 0.9015,
    o: 2.32,
});

export let questGiver04 = std.CreatureTemplates.create(
    MODNAME,
    "questgiver04-creature",
    30368
);
questGiver04.Name.enGB.set("Apothecary Vargan");
questGiver04.Models.clearAll();
questGiver04.Models.addIds(21988);
questGiver04.Level.set(10, 10);
questGiver04.FactionTemplate.set(35);
questGiver04.DamageSchool.Normal.set();
questGiver04.Stats.ArmorMod.set(1);
questGiver04.Stats.DamageMod.set(1);
questGiver04.Stats.ExperienceMod.set(1);
questGiver04.Stats.HealthMod.set(1);
questGiver04.Stats.ManaMod.set(1);
questGiver04.NPCFlags.QUEST_GIVER.set(true);
spawnMultipleNPCWithTimer(
    questGiver04.ID,
    0,
    0,
    [{ map: 725, x: -8928.21875, y: -99.776024, z: 27.458458, o: 3.448763 }],
    10
);

/*Object Creation Zone*/
export let PoisonBottleObj = makeResourceNode(
    "Vial of Poison",
    228,
    57,
    "poisonvial-chest"
);
PoisonBottleObj.Size.set(1);
addLootToGobChestMultiDrop(
    PoisonBottleObj,
    [VialofPoison.ID],
    [100],
    [1],
    [1],
    1
);

spawnMultiGobTimer(
    PoisonBottleObj.ID,
    [
        { map: 725, x: -8988.163086, y: -141.082596, z: 14.330687, o: 4.367677 },
        { map: 725, x: -8983.921875, y: -142.913757, z: 14.330687, o: 4.304846 },
        { map: 725, x: -8986.696289, y: -149.340439, z: 14.330687, o: 4.304846 },
        { map: 725, x: -8983.746094, y: -152.986572, z: 14.330687, o: 5.392619 },
        { map: 725, x: -8982.263672, y: -147.513885, z: 14.330687, o: 6.020936 },
        { map: 725, x: -8976.652344, y: -149.020142, z: 14.330687, o: 6.020936 },
        { map: 725, x: -8973.101562, y: -151.957657, z: 14.330687, o: 5.329789 },
        { map: 725, x: -8974.070312, y: -156.613739, z: 14.330687, o: 4.375533 },
        { map: 725, x: -8980.602539, y: -147.480392, z: 14.330423, o: 2.192127 },
        { map: 725, x: -8990.356445, y: -146.135773, z: 14.330423, o: 2.400257 },
        { map: 725, x: -8996.448242, y: -139.19899, z: 14.712682, o: 2.207835 },
        { map: 725, x: -9004.008789, y: -142.126099, z: 15.026042, o: 2.145003 },
        { map: 725, x: -9005.342773, y: -135.520309, z: 16.496626, o: 1.622713 },
        { map: 725, x: -9001.095703, y: -137.666763, z: 15.295957, o: 4.304847 },
        { map: 725, x: -9003.844727, y: -144.104294, z: 14.613109, o: 4.308774 },
        { map: 725, x: -9006.722656, y: -149.096588, z: 14.80743, o: 4.088863 },
        { map: 725, x: -9006.117188, y: -154.726547, z: 14.695174, o: 4.956729 },
        { map: 725, x: -9006.990234, y: -160.451965, z: 14.57667, o: 4.477637 },
        { map: 725, x: -9001.774414, y: -166.666824, z: 14.696093, o: 5.4908 },
        { map: 725, x: -8998.449219, y: -169.973831, z: 14.997774, o: 5.376917 },
        { map: 725, x: -8992.110352, y: -119.588486, z: 15.013979, o: 5.934549 },
        { map: 725, x: -8984.952148, y: -122.190147, z: 14.32996, o: 0.000865 },
        { map: 725, x: -8979.264648, y: -116.054047, z: 14.32996, o: 0.562425 },
        { map: 725, x: -8973.630859, y: -116.246445, z: 14.945486, o: 5.863863 },
        { map: 725, x: -8971.349609, y: -113.117737, z: 15.482199, o: 1.292845 },
        { map: 725, x: -8974.691406, y: -108.572617, z: 14.711975, o: 1.347823 },
        { map: 725, x: -8966.782227, y: -109.091225, z: 16.5658, o: 6.001308 },
        { map: 725, x: -8962.533203, y: -113.054489, z: 17.326694, o: 5.526144 },
        { map: 725, x: -8955.09375, y: -120.359879, z: 15.609655, o: 5.133445 },
        { map: 725, x: -8952.486328, y: -131.626816, z: 14.332898, o: 4.387318 },
        { map: 725, x: -8954.048828, y: -131.725266, z: 15.350592, o: 3.66868 },
        { map: 725, x: -8948.09082, y: -142.95369, z: 14.331187, o: 2.404188 },
        { map: 725, x: -8948.253906, y: -150.426605, z: 14.480653, o: 3.535162 },
        { map: 725, x: -8953.395508, y: -149.993347, z: 14.731019, o: 3.209222 },
        { map: 725, x: -8956.549805, y: -160.47226, z: 14.652415, o: 3.806124 },
        { map: 725, x: -8966.603516, y: -163.034485, z: 14.62237, o: 3.189587 },
    ],
    10
);

export let OpenWorldDungeonQuestGiver01 = std.CreatureTemplates.create(
    MODNAME,
    "openworldquestgiver01",
    30368
);
OpenWorldDungeonQuestGiver01.Name.enGB.set("Mitch Powers");
OpenWorldDungeonQuestGiver01.Models.clearAll();
OpenWorldDungeonQuestGiver01.Models.addIds(12911);
OpenWorldDungeonQuestGiver01.Level.set(13, 13);
OpenWorldDungeonQuestGiver01.FactionTemplate.set(35);
OpenWorldDungeonQuestGiver01.DamageSchool.Normal.set();
OpenWorldDungeonQuestGiver01.Stats.ArmorMod.set(1);
OpenWorldDungeonQuestGiver01.Stats.DamageMod.set(214);
OpenWorldDungeonQuestGiver01.Stats.ExperienceMod.set(1);
OpenWorldDungeonQuestGiver01.Stats.HealthMod.set(155);
OpenWorldDungeonQuestGiver01.Stats.ManaMod.set(1);
OpenWorldDungeonQuestGiver01.NPCFlags.QUEST_GIVER.set(true);
spawnMultipleNPCWithTimer(
    OpenWorldDungeonQuestGiver01.ID,
    0,
    0,
    [{ map: 725, x: -8786.554, y: 561.652, z: 10.753, o: 2.7496 }],
    3600
);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                                      Main Quest Chain

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
startingQuest01.Flags.set(1);
startingQuest01.MinLevel.set(1);
startingQuest01.QuestLevel.set(5);
startingQuest01.Objectives.Entity.add(startingZoneWolfBoss.ID, 1); //kill quest
startingQuest01.Objectives.Item.add(AgathasLockbox.ID, 1); //return item quest
startingQuest01.Questgiver.addCreatureBoth(questGiver01.ID, false);
startingQuest01.Rewards.ChoiceItem.add(tierOneClothMaterial, 2);
startingQuest01.Rewards.ChoiceItem.add(tierOneMailMaterial, 2);
startingQuest01.Rewards.ChoiceItem.add(tierOneLeatherMaterial, 2);
startingQuest01.Rewards.Item.add(SmallSackofCoinswithBag.ID, 1);
startingQuest01.Rewards.Money.set(216);
startingQuest01.Text.Objective.enGB.set(
    "You have proven your worth as a combatant in previous battles, no doubt hero. However you are about to embark on an adventure like no other.$B$BTo make sure that you are up to the task at hand, I require you to return the belongings of the.. uh.. previously unsuccessful hero to me at once. They are guarded by a wolf, to make things worse. Do this and you shall prove your worth."
);
startingQuest01.Text.Incomplete.enGB.set(
    "I know that this may seem like a daunting challenge hero, but I emplore you. Without these resources, you can not progress."
);
startingQuest01.Text.Description.enGB.set(
    "Slay the Worg and return to the Elder with Agatha's belongings."
);
startingQuest01.Text.Reward.enGB.set(
    "Oh good, you've made it out alive! I could have sworn that was supposed to be challenging. I'm truly glad that you've managed to defeat that savage worg.$B$BHere hero, claim your rewards."
);
startingQuest01.Text.Title.enGB.set("A Grim Fate");

startingQuest02.Flags.set(1);
startingQuest02.MinLevel.set(1);
startingQuest02.QuestLevel.set(5);
startingQuest02.Questgiver.addCreatureBoth(questGiver01.ID, false);
startingQuest02.Objectives.Item.add(startingResource01.ID, 10);
startingQuest02.Rewards.ChoiceItem.add(tierOneBaseResources[0], 2);
startingQuest02.Rewards.ChoiceItem.add(tierOneBaseResources[2], 2);
startingQuest02.Rewards.ChoiceItem.add(tierOneBaseResources[3], 2);
startingQuest02.Rewards.ChoiceItem.add(tierOneBaseResources[4], 2);
startingQuest02.Rewards.ChoiceItem.add(tierOneBaseResources[5], 2);
startingQuest02.Rewards.Money.set(416);
startingQuest02.Text.Objective.enGB.set(
    "Slaying monsters is not all you need to be prepared for hero, we like to use our hands to collect materials and craft our own gear, and a valuable lesson you will learn is how to gather resources for your crafting recipes.$B$BI want you to venture around the Walk of Heroes and gather 10 peacelillies. You can utilize the track resource node feature on your minimap if you have any difficulties."
);
startingQuest02.Text.Incomplete.enGB.set(
    "Fear not hero, if you are having difficulties finding the lillies, utilize the resource node tracker on your minimap! I have faith in you."
);
startingQuest02.Text.Description.enGB.set(
    "Collect 10 Everlillies from the surrounding Walk of Heroes area."
);
startingQuest02.Text.Reward.enGB.set(
    "Gathering is one of the main ways for players to obtain resources on the server. It is important to remember that you can switch between finding nodes on your minimap to help you find valuable ores to create upgraded armor, or herbs to create powerful potions!"
);
startingQuest02.Text.Title.enGB.set("Gathering : a Tutorial");

startingQuest03.Flags.set(1);
startingQuest03.MinLevel.set(1);
startingQuest03.QuestLevel.set(5);
startingQuest03.Questgiver.addCreatureStarter(questGiver01.ID);
startingQuest03.Questgiver.addCreatureEnder(questGiver02.ID, false);
startingQuest03.Rewards.Money.set(86);
startingQuest03.Text.Objective.enGB.set(
    "Your duties have consequences, it is time you learned of the price that we pay by existing in this land. Seek out the arcanist Fractal Spem near the tree of destiny. He shall guide your journey further, with righteousness. Thank you for your time hero.$B$BMay the light be with you."
);
startingQuest03.Text.Incomplete.enGB.set(
    "My suggestion would be to look by the lake for the man in blue."
);
startingQuest03.Text.Description.enGB.set("Find Arcanist Fractal Spem");
startingQuest03.Text.Reward.enGB.set(
    "You must be the hero that I've heard so much about. It's been a pleasure to watch you walk around and trample on the creatures of this forest."
);
startingQuest03.Text.Title.enGB.set("Fractal Spem");

startingQuest04.Flags.set(1);
startingQuest04.MinLevel.set(1);
startingQuest04.QuestLevel.set(5);
startingQuest04.Questgiver.addCreatureStarter(questGiver02.ID);
startingQuest04.Questgiver.addCreatureEnder(questGiver02.ID, false);
startingQuest04.Rewards.ChoiceItem.add(tierOneClothMaterial, 2);
startingQuest04.Rewards.ChoiceItem.add(tierOneMailMaterial, 2);
startingQuest04.Rewards.ChoiceItem.add(tierOneLeatherMaterial, 2);
startingQuest04.Rewards.Money.set(586);
startingQuest04.Objectives.Item.add(tierOneClothGear[6], 1);
startingQuest04.StartItem.set(SatchelofResources.ID);
startingQuest04.Text.Objective.enGB.set(
    "It is here at this lake, that I have found peace in doing the most mundane tasks. Fortunately, you are not a scripted NPC and you have free will. There is an icon on your minimap that looks like a piece of armor, click that and craft a pair of gloves for me."
);
startingQuest04.Text.Incomplete.enGB.set(
    "Hero, please open the crafting menu on your minimap; it is the icon that looks like a piece of body armor."
);
startingQuest04.Text.Description.enGB.set(
    "Craft a pair of bracers for Fractal Spem using the Crafting Menu on your minimap."
);
startingQuest04.Text.Reward.enGB.set(
    "Very good hero, you have learned the basics of utilizing the crafting menu. You will gather many resources on your journey, and that crafting menu will be your best friend!"
);
startingQuest04.Text.Title.enGB.set("Crafting : a Tutorial");

startingQuest05.Flags.set(1);
startingQuest05.MinLevel.set(1);
startingQuest05.QuestLevel.set(5);
startingQuest05.Questgiver.addCreatureStarter(questGiver02.ID);
startingQuest05.Questgiver.addCreatureEnder(questGiver03.ID, false);
startingQuest05.Rewards.ChoiceItem.add(tierOneClothMaterial, 2);
startingQuest05.Rewards.ChoiceItem.add(tierOneMailMaterial, 2);
startingQuest05.Rewards.ChoiceItem.add(tierOneLeatherMaterial, 2);
startingQuest05.Rewards.Money.set(286);
startingQuest05.Text.Objective.enGB.set(
    "Your journey is almost over hero, and it may feel like it has already begun. Head to the town hall outside of the Walk of Heroes and speak to the Knight Captain in the barracks. He shall guide you on what you must do next. You are always welcomed here."
);
startingQuest05.Text.Incomplete.enGB.set(
    "Did you manage to speak to the Knight Captain in the barracks? You should leave through the cave and speak to him at once!"
);
startingQuest05.Text.Description.enGB.set(
    "Speak to the Knight Captain in the barracks of Shandralis, outside of the Walk of Heroes."
);
startingQuest05.Text.Reward.enGB.set(
    "Ah yes, you must be $c. We have been waiting for you. Welcome."
);
startingQuest05.Text.Title.enGB.set("Shandralis");

startingQuest06.Flags.set(1);
startingQuest06.MinLevel.set(1);
startingQuest06.QuestLevel.set(5);
startingQuest06.Questgiver.addCreatureStarter(questGiver03.ID);
startingQuest06.Questgiver.addCreatureEnder(questGiver03.ID, false);
startingQuest06.Rewards.ChoiceItem.add(tierOneClothMaterial, 5);
startingQuest06.Rewards.ChoiceItem.add(tierOneMailMaterial, 5);
startingQuest06.Rewards.ChoiceItem.add(tierOneLeatherMaterial, 5);
startingQuest06.Rewards.Money.set(4025);
startingQuest06.Objectives.Entity.add(BanditNpc.ID, 15);
startingQuest06.Objectives.Entity.add(BanditBossNpc.ID, 3);
startingQuest06.Rewards.Item.add(OrbofPower.ID, 1);
startingQuest06.Text.Objective.enGB.set(
    "Thank you for coming again hero, we need you here. We are currently dealing with a bandit problem and they are stealing all of the food from poor Gertrude and her cats... Please end this problem once and for all. I don't like to resort to violence but this is an exception I guess. Slay 15 bandits and 3 unruly bandits and return to me for your reward."
);
startingQuest06.Text.Incomplete.enGB.set(
    "We must work with haste hero, the bandits will not remain around for long."
);
startingQuest06.Text.Description.enGB.set(
    "Slay 15 Bandits and 3 Unruly bandits."
);
startingQuest06.Text.Reward.enGB.set(
    "You have truly been a great help to your town."
);
startingQuest06.Text.Title.enGB.set("A Thief in the Night");

startingQuest07.Flags.set(1);
startingQuest07.MinLevel.set(1);
startingQuest07.QuestLevel.set(5);
startingQuest07.Questgiver.addCreatureStarter(questGiver03.ID);
startingQuest07.Questgiver.addCreatureEnder(questGiver03.ID, false);
startingQuest07.Rewards.ChoiceItem.add(tierOneClothMaterial, 5);
startingQuest07.Rewards.ChoiceItem.add(tierOneMailMaterial, 5);
startingQuest07.Rewards.ChoiceItem.add(tierOneLeatherMaterial, 5);
startingQuest07.Rewards.Money.set(3025);
startingQuest07.Objectives.Entity.add(creature4.ID, 10);
startingQuest07.Objectives.Entity.add(creature5.ID, 10);
startingQuest07.Objectives.Item.add(StrangeEtherealCrate.ID, 15);
startingQuest07.Rewards.Item.add(OrbofPower.ID, 1);
startingQuest07.Text.Objective.enGB.set(
    "Your work with the bandits will not go unnoticed hero. Right now we must continue to press on. Please exit the city and continue to push for the purg~~ safety of our town. I need you to enter the Kobold Mines and return to me with blood on your hands and some ethereal crates. Quickly, no time for questions!"
);
startingQuest07.Text.Incomplete.enGB.set(
    "I understand your concern hero, but this is to protect our town. Quickly, we must make haste."
);
startingQuest07.Text.Description.enGB.set(
    "Slay 10 Kobold Foreman, 10 Kobold Miners, and collect 15 Strange Ethereal Crates."
);
startingQuest07.Text.Reward.enGB.set(
    "You have truly been a great help to your town."
);
startingQuest07.Text.Title.enGB.set("Meddlesome Affairs");

startingQuest08.Flags.set(1);
startingQuest08.MinLevel.set(1);
startingQuest08.QuestLevel.set(10);
startingQuest08.Questgiver.addCreatureStarter(questGiver03.ID);
startingQuest08.Questgiver.addCreatureEnder(questGiver03.ID, false);
startingQuest08.Rewards.ChoiceItem.add(tierTwoClothMaterial, 3);
startingQuest08.Rewards.ChoiceItem.add(tierTwoMailMaterial, 3);
startingQuest08.Rewards.ChoiceItem.add(tierTwoLeatherMaterial, 3);
startingQuest08.Rewards.Money.set(4059);
startingQuest08.Objectives.Entity.add(Zone2Creature1.ID, 25);
startingQuest08.Rewards.Item.add(OrbofPower.ID, 1);
startingQuest08.Text.Objective.enGB.set(
    "An excellent feat has been accomplished today with your work destroying the kobold menace. I have no doubt that has put some hair on your chest, and you will need it for this next task. Head back into town, and enter the blacksmith. Behind the blacksmith is a cave that has plagued us for a long time.$B$BEnter this cave and clear out the menace that lurks beyond."
);
startingQuest08.Text.Incomplete.enGB.set(
    "I understand your concern hero, but this is to protect our town. Quickly, we must make haste."
);
startingQuest08.Text.Description.enGB.set(
    "Slay 25 Posessed Spiderlings behind the Blacksmith in Shandralis"
);
startingQuest08.Text.Reward.enGB.set(
    "You have truly been a great help to your town."
);
startingQuest08.Text.Title.enGB.set("Spooky... Scary...");

startingQuest09.Flags.set(1);
startingQuest09.MinLevel.set(1);
startingQuest09.QuestLevel.set(1);
startingQuest09.Questgiver.addCreatureStarter(questGiver03.ID);
startingQuest09.Questgiver.addCreatureEnder(questGiver04.ID, false);
startingQuest09.Rewards.Money.set(4059);
startingQuest09.Text.Objective.enGB.set(
    "I appreciate your assistance with clearing out the spiders behind the blacksmith. Unfortunately, I neglected to mention that I need a very special potion from an apothecary that was once in that zone. Please return and find the apothecary. He shall show you what I require."
);
startingQuest09.Text.Incomplete.enGB.set(
    "Hi there :) This isn't supposed to be here."
);
startingQuest09.Text.Description.enGB.set(
    "Speak to Apothecary Vargan behind the blacksmith."
);
startingQuest09.Text.Reward.enGB.set("You're... alive?");
startingQuest09.Text.Title.enGB.set("Forgotten Requests");

startingQuest10.Flags.set(1);
startingQuest10.MinLevel.set(1);
startingQuest10.QuestLevel.set(10);
startingQuest10.Questgiver.addCreatureStarter(questGiver04.ID);
startingQuest10.Questgiver.addCreatureEnder(questGiver03.ID, false);
startingQuest10.Rewards.ChoiceItem.add(tierTwoClothMaterial, 3);
startingQuest10.Rewards.ChoiceItem.add(tierTwoMailMaterial, 3);
startingQuest10.Rewards.ChoiceItem.add(tierTwoLeatherMaterial, 3);
startingQuest10.Rewards.Money.set(4059);
startingQuest10.Objectives.Item.add(VialofPoison.ID, 10);
startingQuest10.Rewards.Item.add(OrbofPower.ID, 1);
startingQuest10.Text.Objective.enGB.set(
    "I am impressed that you made it this far hero, but this is where most adventurer journeys end. As you can see, the grounds have been plagued with an experiment gone wrong, and I know that your council member wishes for you to return with the poison that has corrupted these citizens he sent me before... Very well, if you wish to die, be my guest."
);
startingQuest10.Text.Incomplete.enGB.set(
    "I understand your concern hero, but this is to protect our town. Quickly, we must make haste."
);
startingQuest10.Text.Description.enGB.set("Collect 10 Vials of Poison");
startingQuest10.Text.Reward.enGB.set(
    "You must really care for this town... pity."
);
startingQuest10.Text.Title.enGB.set("Experiment Gone Wrong");

startingQuest11.Flags.set(1);
startingQuest11.MinLevel.set(1);
startingQuest11.QuestLevel.set(10);
startingQuest11.Questgiver.addCreatureStarter(questGiver03.ID);
startingQuest11.Questgiver.addCreatureEnder(questGiver03.ID, false);
startingQuest11.Rewards.Item.add(SatchelofPower.ID, 1);
startingQuest11.Rewards.Item.add(OrbofPower.ID, 1);
startingQuest11.Text.Objective.enGB.set(
    "You have done well hero, and it is time that you are given a... bone of sorts. I will provide you with a powerful item that will assist you as you continue to assist us on our journey. Just be weary, never betray your duty..."
);
startingQuest11.Text.Incomplete.enGB.set("Truly, this is for you.");
startingQuest11.Text.Description.enGB.set("Claim your duty and your bag.");
startingQuest11.Text.Reward.enGB.set(
    "Yes... all yours... no strings attached."
);
startingQuest11.Text.Title.enGB.set("No Strings Attached");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                                      Side Quests

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
BagQuest01.Flags.set(8);
BagQuest01.MinLevel.set(1);
BagQuest01.QuestLevel.set(5);
SQL.quest_template_addon.add(BagQuest01.ID).SpecialFlags.set(1);
BagQuest01.Questgiver.addCreatureStarter(BoarQuestGiver01.ID);
BagQuest01.Questgiver.addCreatureEnder(BoarQuestGiver01.ID, false);
BagQuest01.Rewards.Money.set(2525);
BagQuest01.Objectives.Item.add(BoarSkin.ID, 25);
BagQuest01.Rewards.Item.add(BoarskinSatchel.ID, 1);
BagQuest01.Rewards.Difficulty.DIFFICULTY_6.set(); // Testing EXP on Quest Reward
BagQuest01.Text.Objective.enGB.set(
    "I understand that it can be quite difficult to continue on your journey without ample room to carry supplies, hero. I have a deal for you. If you can bring me 25 Boarskins from the boars in the surrounding area, I can fashion them into a bag for you so that you can carry more materials in the future. What do you say? Do we have a deal?"
);
BagQuest01.Text.Incomplete.enGB.set(
    "Have you managed to get the boar skins that I require to fashion into a bag?"
);
BagQuest01.Text.Description.enGB.set("Bring 25 Boar Skins to Jethel.");
BagQuest01.Text.Reward.enGB.set(
    "Oh these will be perfect, just give me one moment and I'll be ready for you!"
);
BagQuest01.Text.Title.enGB.set("Useful Little Boars");

ExpTestQuest01.Flags.set(8);
ExpTestQuest01.MinLevel.set(1);
ExpTestQuest01.QuestLevel.set(20);
SQL.quest_template_addon.add(ExpTestQuest01.ID).SpecialFlags.set(1);
ExpTestQuest01.Questgiver.addCreatureStarter(BoarQuestGiver01.ID);
ExpTestQuest01.Questgiver.addCreatureEnder(BoarQuestGiver01.ID, false);
ExpTestQuest01.Rewards.Money.set(-10000);
ExpTestQuest01.Objectives.Item.add(ExpScroll.ID, 1);
ExpTestQuest01.Rewards.Difficulty.DIFFICULTY_7.set(); // Testing EXP on Quest Reward
ExpTestQuest01.Text.Objective.enGB.set(
    "One of the biggest challenges that you will face is growing in power, and in this case, I may be able to help you. If you can find me experience scrolls, I happen to know how to read them and I can transfer the experience to you... for a fee."
);
ExpTestQuest01.Text.Incomplete.enGB.set(
    "Have you managed to find a scroll of experience?"
);
ExpTestQuest01.Text.Description.enGB.set(
    "Bring 1 Experience Scroll to the quest giver."
);
ExpTestQuest01.Text.Reward.enGB.set(
    "Experience shall give you power beyond your wildest dreams. This will help me as much as it shall help you."
);
ExpTestQuest01.Text.Title.enGB.set("Experience is Key");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                                      Dungeon Quests

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
OpenWorldQuest01.Flags.set(1);
OpenWorldQuest01.MinLevel.set(1);
OpenWorldQuest01.QuestLevel.set(40);
OpenWorldQuest01.Questgiver.addCreatureStarter(OpenWorldDungeonQuestGiver01.ID);
OpenWorldQuest01.Questgiver.addCreatureEnder(
    OpenWorldDungeonQuestGiver01.ID,
    false
);
OpenWorldQuest01.Objectives.Entity.add(DungeonMob01.ID, 25);
OpenWorldQuest01.Objectives.Entity.add(DungeonMob02.ID, 10);
OpenWorldQuest01.Objectives.Entity.add(DungeonBoss01.ID, 1);
OpenWorldQuest01.Rewards.Money.set(52532);
OpenWorldQuest01.Rewards.ChoiceItem.add(tierThreeClothMaterial, 5);
OpenWorldQuest01.Rewards.ChoiceItem.add(tierThreeLeatherMaterial, 5);
OpenWorldQuest01.Rewards.ChoiceItem.add(tierThreeMailMaterial, 5);
OpenWorldQuest01.Rewards.Item.add(OrbofPower.ID, 1);
OpenWorldQuest01.Text.Objective.enGB.set(
    "I am impressed that you managed to venture out this way $c, and it is time for you to do what I was unable to do. If you can manage it, please enter the dungeon and dispatch the enemies within."
);
OpenWorldQuest01.Text.Incomplete.enGB.set(
    "Destroy the menace within the dungeon."
);
OpenWorldQuest01.Text.Description.enGB.set(
    "Enter the dungeon and slay 25 demonspawns, 10 banshees, and Argan the Destroyer"
);
OpenWorldQuest01.Text.Reward.enGB.set(
    "Ah yes, you must be $c. We have been waiting for you. Welcome."
);
OpenWorldQuest01.Text.Title.enGB.set("Entering the Dungeon");

OpenWorldQuest02.Flags.set(1);
OpenWorldQuest02.MinLevel.set(1);
OpenWorldQuest02.QuestLevel.set(80);
OpenWorldQuest02.Questgiver.addCreatureStarter(OpenWorldDungeonQuestGiver01.ID);
OpenWorldQuest02.Questgiver.addCreatureEnder(
    OpenWorldDungeonQuestGiver01.ID,
    false
);
OpenWorldQuest02.Objectives.Entity.add(DungeonBoss01.ID, 3);
OpenWorldQuest02.Objectives.Entity.add(DungeonBoss02.ID, 3);
OpenWorldQuest02.Objectives.Entity.add(DungeonBoss03.ID, 3);
OpenWorldQuest02.Rewards.Money.set(253696);
OpenWorldQuest02.Rewards.ChoiceItem.add(DarkSteel.ID, 1);
OpenWorldQuest02.Rewards.ChoiceItem.add(DarkCloth.ID, 1);
OpenWorldQuest02.Rewards.ChoiceItem.add(DarkLeather.ID, 1);
OpenWorldQuest02.Rewards.Item.add(OrbofPower.ID, 5);
OpenWorldQuest02.Text.Objective.enGB.set(
    "I am impressed that you managed to venture out this way $c, and it is time for you to do what I was unable to do. If you can manage it, please enter the dungeon and dispatch the enemies within."
);
OpenWorldQuest02.Text.Incomplete.enGB.set(
    "Destroy the menace within the dungeon."
);
OpenWorldQuest02.Text.Description.enGB.set(
    "Enter the dungeon and slay the bosses within."
);
OpenWorldQuest02.Text.Reward.enGB.set(
    "This is proven to be a difficult challenge, but I am glad that you have prevailed."
);
OpenWorldQuest02.Text.Title.enGB.set("Dungeon Mastery");

OpenWorldQuest03.Flags.set(1);
OpenWorldQuest03.MinLevel.set(1);
OpenWorldQuest03.QuestLevel.set(80);
OpenWorldQuest03.Questgiver.addCreatureStarter(OpenWorldDungeonQuestGiver01.ID);
OpenWorldQuest03.Questgiver.addCreatureEnder(
    OpenWorldDungeonQuestGiver01.ID,
    false
);
OpenWorldQuest03.Objectives.Entity.add(DungeonBoss01.ID, 1);
OpenWorldQuest03.Objectives.Entity.add(DungeonBoss02.ID, 1);
OpenWorldQuest03.Objectives.Entity.add(DungeonBoss03.ID, 1);
OpenWorldQuest03.Rewards.Money.set(153696);
OpenWorldQuest03.Rewards.ChoiceItem.add(ItemReward01.ID, 1);
OpenWorldQuest03.Rewards.ChoiceItem.add(ItemReward02.ID, 1);
OpenWorldQuest03.Rewards.ChoiceItem.add(ItemReward03.ID, 1);
OpenWorldQuest03.Rewards.ChoiceItem.add(ItemReward04.ID, 1);
OpenWorldQuest03.Rewards.ChoiceItem.add(ItemReward05.ID, 1);
OpenWorldQuest03.Rewards.ChoiceItem.add(ItemReward06.ID, 1);
OpenWorldQuest03.Rewards.Item.add(OrbofPower.ID, 1);
OpenWorldQuest03.Text.Objective.enGB.set(
    "I am impressed that you managed to venture out this way $c, and it is time for you to do what I was unable to do. If you can manage it, please enter the dungeon and dispatch the enemies within."
);
OpenWorldQuest03.Text.Incomplete.enGB.set(
    "Destroy the menace within the dungeon."
);
OpenWorldQuest03.Text.Description.enGB.set(
    "Enter the dungeon and slay the bosses within."
);
OpenWorldQuest03.Text.Reward.enGB.set(
    "This is proven to be a difficult challenge, but I am glad that you have prevailed."
);
OpenWorldQuest03.Text.Title.enGB.set("Dungeoneering Pioneer");
