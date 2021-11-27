import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata"
import { spawnGob } from "../../functions/spawning-functions"
import { MODNAME } from "../../modname"

export let FortHopePortal = std.Spells.create(MODNAME,'forthopeportal-spell',17334)
SQL.spell_target_position.add(FortHopePortal.ID,0).MapID.set(725).PositionX.set(-8329.507).PositionY.set(1792.111).PositionZ.set(-71.16).Orientation.set(4.7550)

export let PortaltoFortHope = std.GameObjectTemplates.Plain.create(MODNAME,'forthope-object',183325)
PortaltoFortHope.row.Data0.set(FortHopePortal.ID)
PortaltoFortHope.Display.set(5231)
PortaltoFortHope.Name.enGB.set('Portal to Fort Hope')
spawnGob(PortaltoFortHope.ID,{map:725,x:-8300.282,y:45.823,z:47.236,o:0.305})    // Portal to Fort Hope


export let DauntlessPortal = std.Spells.create(MODNAME,'dauntlessportal-spell',17334)
SQL.spell_target_position.add(DauntlessPortal.ID,0).MapID.set(725).PositionX.set(-7944.937).PositionY.set(-361.08).PositionZ.set(64.7468).Orientation.set(0.00)

export let PortaltoDauntless = std.GameObjectTemplates.Plain.create(MODNAME,'dauntless-object',183325)
PortaltoDauntless.row.Data0.set(DauntlessPortal.ID)
PortaltoDauntless.Display.set(6831)
PortaltoDauntless.Name.enGB.set('Portal to the Dauntless Hideout')
spawnGob(PortaltoDauntless.ID,{map:725,x:-8314.533,y:19.98,z:47.236,o:0.305})    // Portal to the Dauntless Hideout



export let ApothecaryPortal = std.Spells.create(MODNAME,'apothecaryportal-spell',17334)
SQL.spell_target_position.add(ApothecaryPortal.ID,0).MapID.set(725).PositionX.set(-9002.322).PositionY.set(-90.86).PositionZ.set(-6.1379).Orientation.set(4.76)

export let PortaltoApothecary = std.GameObjectTemplates.Plain.create(MODNAME,'apothecary-object',183325)
PortaltoApothecary.row.Data0.set(ApothecaryPortal.ID)
PortaltoApothecary.Display.set(4398)
PortaltoApothecary.Name.enGB.set('Portal to the Apothecary')
spawnGob(PortaltoApothecary.ID,{map:725,x:-8274.409,y:31.319,z:47.236,o:0.305})    // Portal to the Apothecary



export let StoneCirclePortal = std.Spells.create(MODNAME,'stonecircleportal-spell',17334)
SQL.spell_target_position.add(StoneCirclePortal.ID,0).MapID.set(725).PositionX.set(-8857.813).PositionY.set(411.334).PositionZ.set(5.50).Orientation.set(4.955)

export let PortaltoStoneCircle = std.GameObjectTemplates.Plain.create(MODNAME,'stonecircle-object',183325)
PortaltoStoneCircle.row.Data0.set(StoneCirclePortal.ID)
PortaltoStoneCircle.Display.set(7848)
PortaltoStoneCircle.row.Data2.set(0)
PortaltoStoneCircle.Name.enGB.set('Portal to the Stone Circle')
spawnGob(PortaltoStoneCircle.ID,{map:725,x:-8288.521,y:4.945,z:47.236,o:0.305})    // Portal to the Stone Circle



export let JeweloftheSeaPortal = std.Spells.create(MODNAME,'seajewelportal-spell',17334)
SQL.spell_target_position.add(JeweloftheSeaPortal.ID,0).MapID.set(725).PositionX.set(-8344.869).PositionY.set(-395.718).PositionZ.set(42.1914).Orientation.set(2.211)

export let PortaltoJewelofSea = std.GameObjectTemplates.Plain.create(MODNAME,'jewelofsea-object',183325)
PortaltoJewelofSea.row.Data0.set(JeweloftheSeaPortal.ID)
PortaltoJewelofSea.Display.set(84510)
PortaltoJewelofSea.Name.enGB.set('Jewel of the Sea')
spawnGob(PortaltoJewelofSea.ID,{map:725,x:-8352.683,y:-279.542,z:0.277,o:1.440})    // Jewel of the Sea