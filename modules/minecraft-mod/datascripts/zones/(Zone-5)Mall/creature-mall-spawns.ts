import { std } from "wow/wotlk";


import { creature2, creature3 } from "../(Zone-1)Bramblewood/zone-1-creatures";
import {
    setFaction,
    setName,
    setLevel,
    removeQuests,
    addLootToCreatureSingleChance,
    addLootToCreature,
} from "../../functions/npc-functions";
import {
    spawnMultipleNPCs,
    spawnMultipleNPCWithTimer,
    spawnNPC,
} from "../../functions/spawning-functions";

import { MODNAME } from "../../modname";
import {
    PulseStaff,
    Vindicator,
    SavageBlade,
    SpikyBearTrap,
    Edgeblade,
    Satchel,
    ItemReward07,
    ItemReward08,
    ItemReward09,
    ItemReward10,
    ItemReward11,
    ItemReward12,
    ItemReward13,
    ItemReward14,
    ItemReward15,
    ItemReward16,
    ItemReward17,
    ItemReward18,
    ItemReward19,
    ItemReward20,
    ItemReward21,
    ItemReward22,
    ItemReward23,
    ItemReward24,
    ItemReward25,
    ItemReward26,
    ItemReward27,
    ItemReward28,
    ItemReward29,
    ItemReward30,
    ItemReward31,
    ItemReward32,
    ItemReward33,
    ItemReward34,
    ItemReward35,
    ItemReward36,
    ItemReward37,
    ItemReward38,
    ItemReward39,
    ItemReward40,
    OrbofPower,
    OrganicMatter,
} from "../item-manifest";

let broadcastindex = 87000;

export let BattleGuard = std.CreatureTemplates.create(
    MODNAME,
    "battleguard-creature",
    14284
);
BattleGuard.Name.enGB.set("Battleguard");
BattleGuard.FactionTemplate.set(35);
spawnMultipleNPCWithTimer(
    BattleGuard.ID,
    0,
    0,
    [
        { map: 725, x: -8246.129883, y: -201.385513, z: 0.943805, o: 3.087709 },
        { map: 725, x: -8337.0625, y: -55.165085, z: 1.15186, o: 0.001092 },
        { map: 725, x: -8337.207031, y: -63.35054, z: 1.198126, o: 6.237155 },
        { map: 725, x: -8372.717773, y: -63.41214, z: 0.885744, o: 3.072 },
        { map: 725, x: -8372.501953, y: -55.224995, z: 0.885805, o: 3.115197 },
        { map: 725, x: -8409.826172, y: -122.740196, z: 0.149892, o: 5.373209 },
        { map: 725, x: -8416.585938, y: -128.293549, z: 0.001845, o: 5.428185 },
        { map: 725, x: -8431.292969, y: -232.009521, z: 12.774688, o: 2.208053 },
        { map: 725, x: -8389.239258, y: -200.071335, z: 0.106545, o: 2.266959 },
        { map: 725, x: -8390.032227, y: -168.663055, z: -0.087212, o: 4.68598 },
        { map: 725, x: -8152.58252, y: 23.930702, z: 0.072902, o: 2.380831 },
        { map: 725, x: -8292.00293, y: -248.637924, z: 0.547497, o: 1.636966 },
        { map: 725, x: -8316.910156, y: -243.636734, z: 2.057232, o: 6.278668 },
        { map: 725, x: -8266.698242, y: -243.84343, z: 2.058073, o: 3.156709 },
        { map: 725, x: -8265.654297, y: -278.217896, z: 2.058073, o: 1.8451 },
        { map: 725, x: -8291.262695, y: -252.23378, z: 2.058073, o: 4.676461 },
        { map: 725, x: -8314.996094, y: -278.051208, z: 2.058073, o: 1.534865 },
        { map: 725, x: -8291.503906, y: -255.427582, z: 10.878884, o: 4.703952 },
        { map: 725, x: -8313.773438, y: -270.558502, z: 10.878884, o: 6.156942 },
        { map: 725, x: -8283.709961, y: -254.647491, z: 15.980843, o: 2.198535 },
        { map: 725, x: -8300.814453, y: -255.210846, z: 15.980843, o: 0.714132 },
        { map: 725, x: -8301.608398, y: -272.228851, z: 17.274672, o: 0.784812 },
        { map: 725, x: -8282.695312, y: -272.893677, z: 17.274672, o: 2.328119 },
        { map: 725, x: -8160.52832, y: 31.296593, z: 0.077148, o: 5.553841 },
    ],
    10
);

export let ClothArmorVendor01 = std.CreatureTemplates.create(
    MODNAME,
    "clothvendor01-creature",
    3562
);
ClothArmorVendor01.Name.enGB.set("Theresa Thatcher");
ClothArmorVendor01.FactionTemplate.set(35);
ClothArmorVendor01.Models.clearAll();
ClothArmorVendor01.Models.addIds(17664);
spawnMultipleNPCWithTimer(
    ClothArmorVendor01.ID,
    0,
    0,
    [{ map: 725, x: -8314.943359, y: -13.668065, z: 0.732581, o: 5.956327 }],
    10
);
export let ClothArmorVendor02 = std.CreatureTemplates.create(
    MODNAME,
    "clothvendor02-creature",
    3562
);
ClothArmorVendor02.Name.enGB.set("Artisan Geltrude");
ClothArmorVendor02.FactionTemplate.set(35);
ClothArmorVendor02.Models.clearAll();
ClothArmorVendor02.Models.addIds(17665);
spawnMultipleNPCWithTimer(
    ClothArmorVendor02.ID,
    0,
    0,
    [{ map: 725, x: -8311.923828, y: -15.273244, z: 0.732956, o: 2.488793 }],
    10
);
ClothArmorVendor02.AIName.SmartAI();
std.SQL.smart_scripts
    .add(ClothArmorVendor02.ID, 0, 2, 0)
    .event_type.set(61)
    .event_chance.set(100)
    .action_type.set(1)
    .action_param1.set(1)
    .target_type.set(1)
    .comment.set("Artisan Cloth NPC OUT OF COMBAT Text Scripts.");
std.SQL.creature_text
    .add(ClothArmorVendor02.ID, 1, 0)
    .Text.set(
        "I understand your concern, but I don't think they will notice. Just continue working and this will all be over shortly."
    )
    .BroadcastTextId.set(broadcastindex)
    .Probability.set(100)
    .Type.set(12);
std.SQL.broadcast_text
    .add(broadcastindex++)
    .Text.set(
        "I understand your concern, but I don't think they will notice. Just continue working and this will all be over shortly."
    )
    .Flags.set(1);
std.SQL.creature_text
    .add(ClothArmorVendor02.ID, 1, 1)
    .Text.set(
        "I have told you plenty of times, we are here to simply sell these items for a short period of time, now be quiet, before someone hears you."
    )
    .BroadcastTextId.set(broadcastindex)
    .Probability.set(100)
    .Type.set(12);
std.SQL.broadcast_text
    .add(broadcastindex++)
    .Text.set(
        "I have told you plenty of times, we are here to simply sell these items for a short period of time, now be quiet, before someone hears you."
    )
    .Flags.set(1);

export let LeatherArmorVendor01 = std.CreatureTemplates.create(
    MODNAME,
    "leathervendor01-creature",
    3562
);
LeatherArmorVendor01.Name.enGB.set("Susan Glenfiddich");
LeatherArmorVendor01.FactionTemplate.set(35);
LeatherArmorVendor01.Models.clearAll();
LeatherArmorVendor01.Models.addIds(17823);
spawnMultipleNPCWithTimer(
    LeatherArmorVendor01.ID,
    0,
    0,
    [{ map: 725, x: -8333.688477, y: -195.98877, z: 1.015851, o: 5.712859 }],
    10
);
export let LeatherArmorVendor02 = std.CreatureTemplates.create(
    MODNAME,
    "leathervendor02-creature",
    3562
);
LeatherArmorVendor02.Name.enGB.set("Artisan Signet");
LeatherArmorVendor02.FactionTemplate.set(35);
LeatherArmorVendor02.Models.clearAll();
LeatherArmorVendor02.Models.addIds(17824);
spawnMultipleNPCWithTimer(
    LeatherArmorVendor02.ID,
    0,
    0,
    [{ map: 725, x: -8331.398438, y: -197.823914, z: 1.013544, o: 2.3867 }],
    10
);
LeatherArmorVendor02.AIName.SmartAI();
std.SQL.smart_scripts
    .add(LeatherArmorVendor02.ID, 0, 2, 0)
    .event_type.set(61)
    .event_chance.set(100)
    .action_type.set(1)
    .action_param1.set(1)
    .target_type.set(1)
    .comment.set("Artisan Cloth NPC OUT OF COMBAT Text Scripts.");
std.SQL.creature_text
    .add(LeatherArmorVendor02.ID, 1, 0)
    .Text.set(
        "I understand your concern, but I don't think they will notice. Just continue working and this will all be over shortly."
    )
    .BroadcastTextId.set(broadcastindex)
    .Probability.set(100)
    .Type.set(12);
std.SQL.broadcast_text
    .add(broadcastindex++)
    .Text.set(
        "I understand your concern, but I don't think they will notice. Just continue working and this will all be over shortly."
    )
    .Flags.set(1);
std.SQL.creature_text
    .add(LeatherArmorVendor02.ID, 1, 1)
    .Text.set(
        "I have told you plenty of times, we are here to simply sell these items for a short period of time, now be quiet, before someone hears you."
    )
    .BroadcastTextId.set(broadcastindex)
    .Probability.set(100)
    .Type.set(12);
std.SQL.broadcast_text
    .add(broadcastindex++)
    .Text.set(
        "I have told you plenty of times, we are here to simply sell these items for a short period of time, now be quiet, before someone hears you."
    )
    .Flags.set(1);

export let PlateArmorVendor01 = std.CreatureTemplates.create(
    MODNAME,
    "platevendor01-creature",
    3562
);
PlateArmorVendor01.Name.enGB.set("Todd Macallan");
PlateArmorVendor01.FactionTemplate.set(35);
PlateArmorVendor01.Models.clearAll();
PlateArmorVendor01.Models.addIds(17661);
spawnMultipleNPCWithTimer(
    PlateArmorVendor01.ID,
    0,
    0,
    [{ map: 725, x: -8439.629883, y: -249.348618, z: 14.019466, o: 1.510978 }],
    10
);
export let PlateArmorVendor02 = std.CreatureTemplates.create(
    MODNAME,
    "platevendor02-creature",
    3562
);
PlateArmorVendor02.Name.enGB.set("Artisan Empress");
PlateArmorVendor02.FactionTemplate.set(35);
PlateArmorVendor02.Models.clearAll();
PlateArmorVendor02.Models.addIds(17662);
spawnMultipleNPCWithTimer(
    PlateArmorVendor02.ID,
    0,
    0,
    [{ map: 725, x: -8439.367188, y: -246.66153, z: 14.019466, o: 4.632934 }],
    10
);
PlateArmorVendor02.AIName.SmartAI();
std.SQL.smart_scripts
    .add(PlateArmorVendor02.ID, 0, 2, 0)
    .event_type.set(61)
    .event_chance.set(100)
    .action_type.set(1)
    .action_param1.set(1)
    .target_type.set(1)
    .comment.set("Artisan Cloth NPC OUT OF COMBAT Text Scripts.");
std.SQL.creature_text
    .add(PlateArmorVendor02.ID, 1, 0)
    .Text.set(
        "I understand your concern, but I don't think they will notice. Just continue working and this will all be over shortly."
    )
    .BroadcastTextId.set(broadcastindex)
    .Probability.set(100)
    .Type.set(12);
std.SQL.broadcast_text
    .add(broadcastindex++)
    .Text.set(
        "I understand your concern, but I don't think they will notice. Just continue working and this will all be over shortly."
    )
    .Flags.set(1);
std.SQL.creature_text
    .add(PlateArmorVendor02.ID, 1, 1)
    .Text.set(
        "I have told you plenty of times, we are here to simply sell these items for a short period of time, now be quiet, before someone hears you."
    )
    .BroadcastTextId.set(broadcastindex)
    .Probability.set(100)
    .Type.set(12);
std.SQL.broadcast_text
    .add(broadcastindex++)
    .Text.set(
        "I have told you plenty of times, we are here to simply sell these items for a short period of time, now be quiet, before someone hears you."
    )
    .Flags.set(1);

export let MailArmorVendor01 = std.CreatureTemplates.create(
    MODNAME,
    "mailvendor01-creature",
    3562
);
MailArmorVendor01.Name.enGB.set("Timmy Shellsdrop");
MailArmorVendor01.FactionTemplate.set(35);
MailArmorVendor01.Models.clearAll();
MailArmorVendor01.Models.addIds(17623);
spawnMultipleNPCWithTimer(
    MailArmorVendor01.ID,
    0,
    0,
    [{ map: 725, x: -8407.692383, y: -220.831329, z: 1.08318, o: 2.539855 }],
    10
);
export let MailArmorVendor02 = std.CreatureTemplates.create(
    MODNAME,
    "mailvendor02-creature",
    3562
);
MailArmorVendor02.Name.enGB.set("Artisan Links");
MailArmorVendor02.Models.clearAll();
MailArmorVendor02.Models.addIds(17733);
MailArmorVendor02.FactionTemplate.set(35);
spawnMultipleNPCWithTimer(
    MailArmorVendor02.ID,
    0,
    0,
    [{ map: 725, x: -8410.368164, y: -219.129791, z: 1.08318, o: 5.983823 }],
    10
);
MailArmorVendor02.AIName.SmartAI();
std.SQL.smart_scripts
    .add(MailArmorVendor02.ID, 0, 2, 0)
    .event_type.set(61)
    .event_chance.set(100)
    .action_type.set(1)
    .action_param1.set(1)
    .target_type.set(1)
    .comment.set("Artisan Cloth NPC OUT OF COMBAT Text Scripts.");
std.SQL.creature_text
    .add(MailArmorVendor02.ID, 1, 0)
    .Text.set(
        "I understand your concern, but I don't think they will notice. Just continue working and this will all be over shortly."
    )
    .BroadcastTextId.set(broadcastindex)
    .Probability.set(100)
    .Type.set(12);
std.SQL.broadcast_text
    .add(broadcastindex++)
    .Text.set(
        "I understand your concern, but I don't think they will notice. Just continue working and this will all be over shortly."
    )
    .Flags.set(1);
std.SQL.creature_text
    .add(MailArmorVendor02.ID, 1, 1)
    .Text.set(
        "I have told you plenty of times, we are here to simply sell these items for a short period of time, now be quiet, before someone hears you."
    )
    .BroadcastTextId.set(broadcastindex)
    .Probability.set(100)
    .Type.set(12);
std.SQL.broadcast_text
    .add(broadcastindex++)
    .Text.set(
        "I have told you plenty of times, we are here to simply sell these items for a short period of time, now be quiet, before someone hears you."
    )
    .Flags.set(1);

export let OrbOfPowerVendor = std.CreatureTemplates.create(
    MODNAME,
    "powerorbvendor-creature",
    3562
);
OrbOfPowerVendor.Name.enGB.set("Zerok the Orb Collector");
OrbOfPowerVendor.Models.clearAll();
OrbOfPowerVendor.Models.addIds(21891);
OrbOfPowerVendor.FactionTemplate.set(35);
spawnMultipleNPCWithTimer(
    OrbOfPowerVendor.ID,
    0,
    0,
    [{ map: 725, x: -8302.053711, y: -267.736298, z: 17.274397, o: 6.243299 }],
    10
);
std.DBC.ItemExtendedCost.add(5000)
    .ItemID.set([OrbofPower.ID])
    .ItemCount.set([10])
    .HonorPoints.set(0)
    .ArenaPoints.set(0);
std.DBC.ItemExtendedCost.add(5002)
    .ItemID.set([OrbofPower.ID])
    .ItemCount.set([3])
    .HonorPoints.set(0)
    .ArenaPoints.set(0);
OrbOfPowerVendor.Vendor.add(34170, 0, 0, 5000);
OrbOfPowerVendor.Vendor.add(ItemReward07.ID, 0, 0, 5000);
OrbOfPowerVendor.Vendor.add(ItemReward08.ID, 0, 0, 5000);
OrbOfPowerVendor.Vendor.add(ItemReward09.ID, 0, 0, 5000);
OrbOfPowerVendor.Vendor.add(ItemReward10.ID, 0, 0, 5000);
OrbOfPowerVendor.Vendor.add(ItemReward11.ID, 0, 0, 5000);
OrbOfPowerVendor.Vendor.add(ItemReward12.ID, 0, 0, 5000);
OrbOfPowerVendor.Vendor.add(ItemReward13.ID, 0, 0, 5000);
OrbOfPowerVendor.Vendor.add(ItemReward14.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward15.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward16.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward17.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward18.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward19.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward20.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward21.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward22.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward23.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward24.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward25.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward26.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward27.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward28.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward29.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward30.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward31.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward32.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward33.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward34.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward35.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward36.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward37.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward38.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward39.ID, 0, 0, 5002);
OrbOfPowerVendor.Vendor.add(ItemReward40.ID, 0, 0, 5002);

export let OrganicMatterVendor = std.CreatureTemplates.create(
    MODNAME,
    "organicmob-creature",
    3562
);
OrganicMatterVendor.Name.enGB.set("Organic Tim");
OrganicMatterVendor.Models.clearAll();
OrganicMatterVendor.Models.addIds(21891);
OrganicMatterVendor.FactionTemplate.set(35);
spawnMultipleNPCWithTimer(
    OrganicMatterVendor.ID,
    0,
    0,
    [{ map: 725, x: -8166.573, y: -2.096447, z: 0.082, o: 2.345 }],
    10
);
std.DBC.ItemExtendedCost.add(5001)
    .ItemID.set([OrganicMatter.ID])
    .ItemCount.set([1])
    .HonorPoints.set(0)
    .ArenaPoints.set(0);


spawnMultipleNPCWithTimer(
    28951,
    0,
    0,
    [{ map: 725, x: -8465.184, y: -147.926, z: 0.538401, o: 5.6 }],
    10
);
setFaction(28951, 35);

spawnMultipleNPCWithTimer(
    29491,
    0,
    0,
    [{ map: 725, x: -8465.306, y: -176.7459, z: 0.66, o: 1.25 }],
    10
);
setFaction(29491, 35);

export let GrizzlyBen = std.CreatureTemplates.create(MODNAME, "oldben", 17347);
GrizzlyBen.Name.enGB.set("Grizzled Ben");
GrizzlyBen.Level.set(15, 15);
GrizzlyBen.FactionTemplate.set(32);
GrizzlyBen.DamageSchool.Normal.set();
GrizzlyBen.Stats.ArmorMod.set(25);
GrizzlyBen.Stats.DamageMod.set(120);
GrizzlyBen.Stats.ExperienceMod.set(5);
GrizzlyBen.Stats.HealthMod.set(95);
GrizzlyBen.Stats.ManaMod.set(25);
GrizzlyBen.Scale.set(2);
GrizzlyBen.Rank.ELITE.set();
export let GrizzlyBenLoot = GrizzlyBen.NormalLoot;

/*Bags and Armor*/
addLootToCreatureSingleChance(
    GrizzlyBenLoot,
    [
        PulseStaff.ID,
        Vindicator.ID,
        SavageBlade.ID,
        SpikyBearTrap.ID,
        Edgeblade.ID,
    ],
    1,
    0
);
addLootToCreatureSingleChance(GrizzlyBenLoot, [Satchel.ID], 100, 5);
spawnMultipleNPCWithTimer(
    GrizzlyBen.ID,
    0,
    0,
    [{ map: 725, x: -8378.534, y: 1.4655, z: 0.611, o: 4.908 }],
    300
);

export let fish = std.CreatureTemplates.create(MODNAME, "fish", 905);
fish.Level.set(3, 3);
fish.FactionTemplate.set(32);

spawnNPC(6367, 0, 0, {
    map: 725,
    x: -8265.167,
    y: -116.997,
    z: 0.901,
    o: 3.106,
}); //crazy cat lady
setFaction(6367, 35);
spawnMultipleNPCs(2442, 5, 0, [
    { map: 725, x: -8263.618, y: -130.911, z: 0.292, o: 3.539 },
    { map: 725, x: -8266.467, y: -137.773, z: 0.342, o: 2.008 },
]); //crazy cat lady cows
spawnMultipleNPCs(6368, 10, 0, [
    { map: 725, x: -8277.286, y: -116.715, z: 0.34, o: 1.084 },
    { map: 725, x: -8276.01, y: -132.329, z: 0.779, o: 1.05 },
    { map: 725, x: -8264.912, y: -135.45, z: 0.312, o: 0.733 },
    { map: 725, x: -8251.872, y: -124.874, z: 2.546, o: 1.889 },
    { map: 725, x: -8258.828, y: -108.123, z: 0.274, o: 2.27 },
    { map: 725, x: -8276.425, y: -107.866, z: 1.566, o: 5.68 },
]); //crazy cat lady cats
spawnNPC(23754, 0, 0, {
    map: 725,
    x: -8373.211,
    y: -166.998,
    z: 0.017,
    o: 0.698,
}); //murloc
setName(23754, 'Remmy \\"The Murky Murloc\\" Jones');
spawnNPC(3561, 0, 0, {
    map: 725,
    x: -8297.441,
    y: -261.479,
    z: -5.098,
    o: 3.122,
}); // Poison Supplies
setFaction(3561, 35);
setLevel(3561, 20);
//start zone vendors
spawnNPC(1213, 0, 0, {
    map: 725,
    x: -8702.677,
    y: -64.117,
    z: 31.134,
    o: 1.227,
});
setFaction(1213, 35);
spawnNPC(5060, 0, 0, { map: 725, x: -8411.075, y: -228.606, z: 1.077, o: 0.9 }); //banker

spawnNPC(190, 0, 0, {
    map: 725,
    x: -8692.114,
    y: -63.498,
    z: 31.134,
    o: 2.118,
});
setFaction(190, 35);
spawnNPC(152, 0, 0, {
    map: 725,
    x: -8695.802,
    y: -63.248,
    z: 31.134,
    o: 1.568,
});
setFaction(152, 35);
std.SQL.npc_vendor.add(152, 46978, 0);
// spawnNPC(78,0,0,[-8699.836,-63.277,31.134,1.627])
//     setFaction(78,35)
//end start zone vendors
//trainers
spawnNPC(17252, 0, 0, {
    map: 725,
    x: -8501.809,
    y: -198.425,
    z: -6.026,
    o: 4.009,
}); //Warlock
setFaction(17252, 35);
setLevel(17252, 20);
spawnNPC(9980, 0, 0, {
    map: 725,
    x: -8448.728,
    y: -197.267,
    z: 0.722,
    o: 0.0435,
}); //Stable Master
setFaction(9980, 35);
setLevel(9980, 20);
spawnNPC(2878, 0, 0, { map: 725, x: -8328.205, y: -33.192, z: 0.54, o: 3.521 }); //Pet Trainer
setFaction(2878, 35);
setLevel(2878, 20);
spawnNPC(1231, 0, 0, { map: 725, x: -8333.356, y: -39.987, z: 0.547, o: 0.33 }); //Hunter
setFaction(1231, 35);
setLevel(1231, 20);
spawnNPC(3599, 0, 0, {
    map: 725,
    x: -8284.079,
    y: -261.396,
    z: -5.097,
    o: 3.968,
}); //Rogue
setFaction(3599, 35);
setLevel(3599, 20);
spawnNPC(23128, 0, 0, {
    map: 725,
    x: -8402.127,
    y: -153.164,
    z: 0.805,
    o: 4.701,
}); //Paladin
setFaction(23128, 35);
setLevel(23128, 20);
spawnNPC(376, 0, 0, {
    map: 725,
    x: -8209.984,
    y: -204.098,
    z: 3.408,
    o: 3.175,
}); //Priest
setFaction(376, 35);
setLevel(376, 20);
spawnNPC(3036, 0, 0, { map: 725, x: -8278.701, y: 83.673, z: 0.122, o: 5.192 }); //Druid
setFaction(3036, 35);
setLevel(3036, 20);
spawnNPC(1228, 0, 0, {
    map: 725,
    x: -8298.356,
    y: 26.519,
    z: 12.764,
    o: 5.507,
}); //Mage
setFaction(1228, 35);
setLevel(1228, 20);
spawnNPC(4565, 0, 0, {
    map: 725,
    x: -8499.998,
    y: -195.186,
    z: -6.026,
    o: 4.293,
}); //Warlock
setFaction(4565, 35);
setLevel(4565, 20);
spawnNPC(3353, 0, 0, {
    map: 725,
    x: -8431.496,
    y: -285.787,
    z: 12.884,
    o: 1.567,
}); //Warrior
setFaction(3353, 35);
setLevel(3353, 20);
spawnNPC(20407, 0, 0, {
    map: 725,
    x: -8366.64,
    y: -265.466,
    z: 10.033,
    o: 1.447,
}); //Shaman
setFaction(20407, 35);
setLevel(20407, 20);
//end of trainers
spawnNPC(6735, 0, 0, {
    map: 725,
    x: -8484.953,
    y: -201.464,
    z: 1.141,
    o: 0.114,
}); //innkeeper
setFaction(6735, 35);
removeQuests(6735);
spawnMultipleNPCs(32545, 0, 0, [
    { map: 725, x: -8448.821, y: -290.646, z: 12.556, o: 1.241673 },
    { map: 725, x: -8454.936, y: -288.826, z: 12.604, o: 1.24798 },
    { map: 725, x: -8460.871, y: -286.662, z: 12.489, o: 1.232272 },
    { map: 725, x: -8468.846, y: -284.679, z: 11.54, o: 1.614707 },
    { map: 725, x: -8467.742, y: -285.981, z: 11.81, o: 1.599 },
    { map: 725, x: -8469.701, y: -286.037, z: 11.32, o: 1.599 },
]); //training dummy
setLevel(32545, 1);
spawnMultipleNPCs(385, 10, 0, [
    { map: 725, x: -8247.038, y: -161.718, z: 0.689, o: 3.551 },
    { map: 725, x: -8257.065, y: -178.713, z: 0.597, o: 1.783 },
    { map: 725, x: -8264.946, y: -92.037, z: 0.242, o: 2.67 },
]); //horse
spawnMultipleNPCs(fish.ID, 10, 0, [
    { map: 725, x: -8368.467, y: -177.513, z: -7.155, o: 3.55 },
    { map: 725, x: -8370.414, y: -185.265, z: -8.868, o: 3.621 },
    { map: 725, x: -8374.633, y: -181.112, z: -4.493, o: 3.147 },
    { map: 725, x: -8374.742, y: -164.985, z: -4.493, o: 3.147 },
    { map: 725, x: -8366.719, y: -179.946, z: -6.378, o: 3.171 },
    { map: 725, x: -8373.545, y: -189.623, z: -7.256, o: 1.964 },
    { map: 725, x: -8379.233, y: -177.452, z: -4.29, o: 5.787 },
    { map: 725, x: -8370.93, y: -183.825, z: -12.522, o: 1.77 },
    { map: 725, x: -8363.018, y: -184.564, z: -5.241, o: 2.41 },
]); //sharptooth frenzy
spawnMultipleNPCs(26816, 0, 0, [
    { map: 725, x: -8260.887, y: 2.013, z: 9.905, o: 5.782 },
    { map: 725, x: -8256.459, y: 8.896, z: 9.851, o: 5.711 },
    { map: 725, x: -8255.001953, y: 2.961, z: 9.627, o: 5.719 },
]); //focus wizard
setLevel(26816, 20);
setFaction(26816, 35);
spawnNPC(31454, 0, 0, {
    map: 725,
    x: -8300.252,
    y: 16.922,
    z: 47.169,
    o: 0.924,
}); //bound water elemental
setFaction(31454, 475);
setLevel(31454, 12);
setName(31454, "Bound Water Elemental");
spawnMultipleNPCs(1889, 5, 0, [
    { map: 725, x: -8298.559, y: 19.434, z: 47.136, o: 0.97 },
    { map: 725, x: -8298.939, y: 41.677, z: 47.233, o: 5.132 },
    { map: 725, x: -8310.538, y: 25.416, z: 47.227, o: 0 },
]); //Dalaran Wizard
setFaction(1889, 35);
spawnNPC(5794, 0, 0, {
    map: 725,
    x: -8210.519,
    y: -198.697,
    z: 3.408,
    o: 4.088,
}); //Thurmonde the Devout
setFaction(5794, 35);
spawnMultipleNPCs(14284, 0, 0, [
    { map: 725, x: -8285.886, y: -203.843, z: 0.828, o: 1.543 },
    { map: 725, x: -8298.244, y: -203.508, z: 0.76, o: 1.543 },
]); //Stormpike Battleguard
setLevel(14284, 20);
setFaction(14284, 35);