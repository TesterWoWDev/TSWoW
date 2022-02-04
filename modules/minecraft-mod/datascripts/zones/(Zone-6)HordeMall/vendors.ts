import { std } from "tswow-stdlib";
import { spawnMultipleNPCWithTimer } from "../../functions/spawning-functions";
import { MODNAME } from "../../modname";
import {
    c2ClothItem01,
    c2ClothItem02,
    c2ClothItem03,
    c2ClothItem04,
    c2ClothItem05,
    c2ClothItem06,
    c2ClothItem07,
    c2ClothItem08,
    c2ClothItem09,
    c2ClothItem10,
    c2ClothItem11,
    c2ClothItem12,
    c2LeatherItem01,
    c2LeatherItem02,
    c2LeatherItem03,
    c2LeatherItem04,
    c2LeatherItem05,
    c2LeatherItem06,
    c2LeatherItem07,
    c2LeatherItem08,
    c2LeatherItem09,
    c2LeatherItem10,
    c2LeatherItem11,
    c2LeatherItem12,
    c2LeatherItem13,
    c2PlateItem01,
    c2PlateItem02,
    c2PlateItem03,
    c2PlateItem04,
    c2PlateItem05,
    c2PlateItem06,
    c2PlateItem07,
    c2PlateItem08,
    c2PlateItem09,
    c2PlateItem10,
    c2PlateItem11,
    c2PlateItem12,
    c2PlateItem13,
} from "../item-manifest";

export let C2ClothArmorVendor01 = std.CreatureTemplates.create(
    MODNAME,
    "c2clothvendor01-creature",
    3562
);
C2ClothArmorVendor01.Name.enGB.set("Theresa Thatcher");
C2ClothArmorVendor01.FactionTemplate.set(35);
C2ClothArmorVendor01.Models.clearAll();
C2ClothArmorVendor01.Models.addIds(17664);
spawnMultipleNPCWithTimer(
    C2ClothArmorVendor01.ID,
    0,
    0,
    [{ map: 725, x: -8914.242, y: 172.291, z: 22.407, o: 2.4266 }],
    10
);
C2ClothArmorVendor01.Vendor.add(c2ClothItem01.ID, 0, 0, 0);
C2ClothArmorVendor01.Vendor.add(c2ClothItem02.ID, 0, 0, 0);
C2ClothArmorVendor01.Vendor.add(c2ClothItem03.ID, 0, 0, 0);
C2ClothArmorVendor01.Vendor.add(c2ClothItem04.ID, 0, 0, 0);
C2ClothArmorVendor01.Vendor.add(c2ClothItem05.ID, 0, 0, 0);
C2ClothArmorVendor01.Vendor.add(c2ClothItem06.ID, 0, 0, 0);
C2ClothArmorVendor01.Vendor.add(c2ClothItem07.ID, 0, 0, 0);
C2ClothArmorVendor01.Vendor.add(c2ClothItem08.ID, 0, 0, 0);
C2ClothArmorVendor01.Vendor.add(c2ClothItem09.ID, 0, 0, 0);
C2ClothArmorVendor01.Vendor.add(c2ClothItem10.ID, 0, 0, 0);
C2ClothArmorVendor01.Vendor.add(c2ClothItem11.ID, 0, 0, 0);
C2ClothArmorVendor01.Vendor.add(c2ClothItem12.ID, 0, 0, 0);

export let C2LeatherArmorVendor01 = std.CreatureTemplates.create(
    MODNAME,
    "c2leathervendor01-creature",
    3562
);
C2LeatherArmorVendor01.Name.enGB.set("Theresa Thatcher");
C2LeatherArmorVendor01.FactionTemplate.set(35);
C2LeatherArmorVendor01.Models.clearAll();
C2LeatherArmorVendor01.Models.addIds(17664);
spawnMultipleNPCWithTimer(
    C2LeatherArmorVendor01.ID,
    0,
    0,
    [{ map: 725, x: -8961.963, y: 210.574, z: 22.407, o: 5.25 }],
    10
);
C2LeatherArmorVendor01.Vendor.add(c2LeatherItem01.ID, 0, 0, 0);
C2LeatherArmorVendor01.Vendor.add(c2LeatherItem02.ID, 0, 0, 0);
C2LeatherArmorVendor01.Vendor.add(c2LeatherItem03.ID, 0, 0, 0);
C2LeatherArmorVendor01.Vendor.add(c2LeatherItem04.ID, 0, 0, 0);
C2LeatherArmorVendor01.Vendor.add(c2LeatherItem05.ID, 0, 0, 0);
C2LeatherArmorVendor01.Vendor.add(c2LeatherItem06.ID, 0, 0, 0);
C2LeatherArmorVendor01.Vendor.add(c2LeatherItem07.ID, 0, 0, 0);
C2LeatherArmorVendor01.Vendor.add(c2LeatherItem08.ID, 0, 0, 0);
C2LeatherArmorVendor01.Vendor.add(c2LeatherItem09.ID, 0, 0, 0);
C2LeatherArmorVendor01.Vendor.add(c2LeatherItem10.ID, 0, 0, 0);
C2LeatherArmorVendor01.Vendor.add(c2LeatherItem11.ID, 0, 0, 0);
C2LeatherArmorVendor01.Vendor.add(c2LeatherItem12.ID, 0, 0, 0);
C2LeatherArmorVendor01.Vendor.add(c2LeatherItem13.ID, 0, 0, 0);

export let C2PlateArmorVendor01 = std.CreatureTemplates.create(
    MODNAME,
    "c2platevendor01-creature",
    3562
);
C2PlateArmorVendor01.Name.enGB.set("Theresa Thatcher");
C2PlateArmorVendor01.FactionTemplate.set(35);
C2PlateArmorVendor01.Models.clearAll();
C2PlateArmorVendor01.Models.addIds(17664);
spawnMultipleNPCWithTimer(
    C2PlateArmorVendor01.ID,
    0,
    0,
    [{ map: 725, x: -8970.884, y: 159.149, z: 18.494, o: 4.727 }],
    10
);

C2PlateArmorVendor01.Vendor.add(c2PlateItem01.ID, 0, 0, 0);
C2PlateArmorVendor01.Vendor.add(c2PlateItem02.ID, 0, 0, 0);
C2PlateArmorVendor01.Vendor.add(c2PlateItem03.ID, 0, 0, 0);
C2PlateArmorVendor01.Vendor.add(c2PlateItem04.ID, 0, 0, 0);
C2PlateArmorVendor01.Vendor.add(c2PlateItem05.ID, 0, 0, 0);
C2PlateArmorVendor01.Vendor.add(c2PlateItem06.ID, 0, 0, 0);
C2PlateArmorVendor01.Vendor.add(c2PlateItem07.ID, 0, 0, 0);
C2PlateArmorVendor01.Vendor.add(c2PlateItem08.ID, 0, 0, 0);
C2PlateArmorVendor01.Vendor.add(c2PlateItem09.ID, 0, 0, 0);
C2PlateArmorVendor01.Vendor.add(c2PlateItem10.ID, 0, 0, 0);
C2PlateArmorVendor01.Vendor.add(c2PlateItem11.ID, 0, 0, 0);
C2PlateArmorVendor01.Vendor.add(c2PlateItem12.ID, 0, 0, 0);
C2PlateArmorVendor01.Vendor.add(c2PlateItem13.ID, 0, 0, 0);
