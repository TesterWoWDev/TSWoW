// import { std } from "tswow-stdlib";
// import { SQL } from "wotlkdata";

//  const REMOVALS = [
//     190549, // Thunderbluff -> Orgrimmar
//     176310, // Stormwind Harbor and Auberdine, Darkshore ("Ship (The Bravery)")
//     190536, // Stormwind Harbor and Valiance Keep, Borean Tundra ("The Kraken")
//     181646, // Valaar's Berth, Azuremyst Isle and Auberdine, Darkshore ("Elune's Blessing")
//     181688, // Menethil Harbor, Wetlands and Valgarde, Howling Fjord ("Northspear")
//     181689, // Undercity, Tirisfal Glades and Vengeance Landing, Howling Fjord ("Zeppelin, Horde (Cloudkisser)")
//     186238, // Orgrimmar, Durotar and Warsong Hold, Borean Tundra ("Zeppelin, Horde (The Mighty Wind)")
//     186371, // Westguard Keep in Howling Fjord to bombard pirate ("Zeppelin")
//     187038, // Not Boardable - Cyrcling in Howling Fjord ("Sister Mercy")
//     187568, // Unu'pe, Borean Tundra and Moa'ki Harbor, Dragonblight ("Turtle (Walker of Waves)")
//     188511, // Moa'ki Harbor and Kamagua ("Turtle (Green Island)")
//     192241, // Horde gunship patrolling above Icecrown ("Orgrim's Hammer")
//     192242, // Alliance gunship patrolling above Icecrown ("The Skybreaker")
//     176495, // Undercity, Tirisfal Glades and Grom'gol Base Camp, Stranglethorn Vale ("The Purple Princess")
//     176244, // Rut'theran Village, Teldrassil and Auberdine, Darkshore ("The Moonspray")
//     176231, // Menethil Harbor, Wetlands and Theramore Isle, Dustwallow Marsh ("The Lady Mehley")
//     175080, // Orgrimmar, Durotar and Grom'gol Base Camp, Stranglethorn Vale ("The Iron Eagle")
//     164871, // Orgrimmar, Durotar and Undercity, Tirisfal Glades ("The Thundercaller")
//     20808,  // Steamwheedle Cartel ports, Ratchet and Booty Bay ("The Maiden's Fancy")
//     177233, // The Forgotten Coast, Feralas and Feathermoon Stronghold, Sardor Isle, Feralas ("Feathermoon Ferry")
// ];

// REMOVALS.forEach((value) => {
//     let transport = std.GameObjectTemplates.Ships.load(value);
//     transport.TaxiPath.getRef().delete();
//     transport.TaxiPath.set(0);
//     transport.row.delete();
//     SQL.Databases.world_dest.write(`DELETE FROM transports WHERE entry = ${value};`);
// });

//  std.Maps.load(0).InstanceType.RAID.set();
//  std.Maps.load(1).InstanceType.RAID.set();
//  std.Maps.load(530).InstanceType.RAID.set();
//  std.Maps.load(571).InstanceType.RAID.set();
// SQL.Databases.world_dest.write('DELETE FROM battlefield_template WHERE TypeId = 1;')

// std.SQL.outdoorpvp_template.find({ ScriptName: 'outdoorpvp_ep' }).delete();
// std.SQL.outdoorpvp_template.find({ ScriptName: 'outdoorpvp_si' }).delete();
// std.SQL.outdoorpvp_template.find({ ScriptName: 'outdoorpvp_hp' }).delete();
// std.SQL.outdoorpvp_template.find({ ScriptName: 'outdoorpvp_na' }).delete();
// std.SQL.outdoorpvp_template.find({ ScriptName: 'outdoorpvp_tf' }).delete();
// std.SQL.outdoorpvp_template.find({ ScriptName: 'outdoorpvp_zm' }).delete();