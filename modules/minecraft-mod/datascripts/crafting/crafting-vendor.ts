import { std } from "wow/wotlk";
import { Pos } from "wow/wotlk/std/Misc/Position";
import { torghastEndCurrency } from "../dungeons/torghast-master-script-entities";
import { MODNAME } from "../modname";
import { stringItem, tierOneBaseResources, tierOneClothGear, tierOneClothMaterial, tierOneLeatherGear, tierOneLeatherMaterial, tierOneMailGear, tierOneMailMaterial } from "./tier-gear/tier1";

std.DBC.ItemExtendedCost.add(7000)
    .ItemCount.fill(0).ItemCount.set([5])
    .ItemID.fill(0).ItemID.set([torghastEndCurrency.ID])
    .HonorPoints.set(0).ArenaPoints.set(0)

export let craftingVendor = std.CreatureTemplates.create(MODNAME, "crafting-vendor", 3562);
craftingVendor.Name.enGB.set("Crafting Vendor");
craftingVendor.Subname.enGB.set("All Powerful");
craftingVendor.FactionTemplate.set(35);
craftingVendor.Vendor.add(stringItem.ID, 7000);

tierOneBaseResources.forEach(element => {
    craftingVendor.Vendor.add(element, 7000);
});
craftingVendor.Vendor.add(tierOneMailMaterial, 7000);
craftingVendor.Vendor.add(tierOneLeatherMaterial, 7000);
craftingVendor.Vendor.add(tierOneClothMaterial, 7000);
craftingVendor.Spawns.add(MODNAME,'craft-spawn',{map: 725, x: -8737, y: -68.5, z: 31.35, o: 3.23});

export let torghastStartObj = std.GameObjectTemplates.Rituals.create(
    MODNAME,
    "torghaststartobj",
    177193
);
torghastStartObj.Name.enGB.set("Mystical Starting Stone");
torghastStartObj.Spawns.add(MODNAME,'start-spawn',{map: 725, x: -8739.3, y: -62.6, z: 31.14, o: 4.13});
