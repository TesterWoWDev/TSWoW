import { std } from "tswow-stdlib";
import { MODNAME } from "../../../modname";
import { questGiver03 } from "../../(Zone-0)Walk-of-Heroes/starting-zone-creatures";
import {
    addWaypoint,
    spawnGob,
    spawnNPC,
    spawnNPCWithTimer,
} from "../../../functions/spawning-functions";
import { setFaction } from "../../../functions/npc-functions";
import {
    Amulet01,
    Amulet02,
    Amulet03,
    Amulet04,
    Amulet05,
} from "../../item-manifest";

spawnNPC(questGiver03.ID, 0, 0, {
    map: 725,
    x: -8292.411133,
    y: -271.135468,
    z: 17.274445,
    o: 1.4686858,
}); //Quest Giver 3 Spawn

//spawnNPC(22060,0,0,[-8144.066406,21.116680,0.641976,3.220194]) //Rogue Ganker

export let AmuletVendor = std.CreatureTemplates.create(
    MODNAME,
    "druid01-creature",
    3562
);
AmuletVendor.Name.enGB.set("Maggie the Wise");
AmuletVendor.FactionTemplate.set(35);
AmuletVendor.Vendor.add(Amulet01.ID, 2, 5, 3600);
AmuletVendor.Vendor.add(Amulet02.ID, 2, 5, 3600);
AmuletVendor.Vendor.add(Amulet03.ID, 2, 5, 3600);
AmuletVendor.Vendor.add(Amulet04.ID, 2, 5, 3600);
AmuletVendor.Vendor.add(Amulet05.ID, 2, 5, 3600);

spawnNPC(3562, 0, 0, {
    map: 725,
    x: -8186.291504,
    y: 13.517035,
    z: 0.115301,
    o: 5.435018,
}); //Reagent Vendor at City Exit
setFaction(3562, 35);
spawnNPC(AmuletVendor.ID, 0, 0, {
    map: 725,
    x: -8182.976074,
    y: 16.767733,
    z: 0.099456,
    o: 5.533191,
}); //Amulet Vendor at City Exit

spawnGob(532751, {
    map: 725,
    x: -8299.083008,
    y: 20.426346,
    z: 12.764252,
    o: 0.761878,
}); //NpcSpawnPortal

export let AdventurerMageTower = std.CreatureTemplates.create(
    MODNAME,
    "adventurermagetower-creature",
    39686
);
AdventurerMageTower.Name.enGB.set("Foreign Adventurer");
AdventurerMageTower.Subname.enGB.set("");
AdventurerMageTower.FactionTemplate.set(31);
AdventurerMageTower.Models.clearAll();
AdventurerMageTower.Models.addIds(30859, 30987, 30861, 30862);
AdventurerMageTower.Level.set(1, 3);
let AdventurerMageTowerGUID = spawnNPCWithTimer(
    AdventurerMageTower.ID,
    0,
    0,
    { map: 725, x: -8299.083008, y: 20.426346, z: 12.764252, o: 0.761878 },
    10
);
addWaypoint(AdventurerMageTowerGUID, [
    [-8299.083008, 20.426346, 12.764252, 0.761878, 0],
    [-8293.52832, 24.700512, 12.764252, 5.906237, 0],
    [-8266.353516, 9.681848, 12.674788, 5.764865, 0],
    [-8231.514648, -11.710628, 4.428009, 5.729524, 0],
    [-8201.644531, -18.149355, 0.264162, 6.118293, 0],
    [-8140.579102, 42.0308, 0.426499, 0.79722, 0],
    [-8102.019531, 70.905174, 1.228998, 0.624432, 0],
]);
