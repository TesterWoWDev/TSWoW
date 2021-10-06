import { std } from "tswow-stdlib"
import { addLootToCreature, addLootToCreatureSingleChance } from "../../functions/npc-functions"
import { MODNAME } from "../../modname"
import { HeavenlyPurpose, PrimalFury, Introspection, FuryOffhand, NaturalRegenHelm, Mojoshield, Bulwarkshield, Advocate, Avalanche, DancingBlades, rohk, Crusher, Eyepatch, Medivh01, Medivh02, Medivh03, Medivh04, Valanyr } from "./champion-scroll-loot"
import { harpyCreatureLoot } from "./harpy-champion-scroll"
import { KoboldChampionCreatureLoot } from "./kobold-champion-scroll"
import { MurlocChampionCreatureLoot } from "./murloc-champion-scroll"
import { quailboarCreatureLoot } from "./quailboar-champion-scroll"
import { WorgChampionCreatureLoot } from "./ravaging-worg-champion-scroll"

/*Item Creation - Champion Boss Loot*/
export let ChampionsSatchel = std.Items.create(MODNAME,'championsatchel',805)
ChampionsSatchel.Quality.setBlue()
ChampionsSatchel.ContainerSlots.set(24)

//Worg Loot
addLootToCreature(WorgChampionCreatureLoot,[
    ChampionsSatchel.ID,               
],[10],0)
addLootToCreatureSingleChance(WorgChampionCreatureLoot,[
    HeavenlyPurpose.ID,         PrimalFury.ID,              Introspection.ID,
    FuryOffhand.ID,             NaturalRegenHelm.ID,        Mojoshield.ID,
    Bulwarkshield.ID,           Advocate.ID,                Avalanche.ID,  
    DancingBlades.ID,           rohk.ID,                    Crusher.ID,
    Eyepatch.ID,                Medivh01.ID,                Medivh02.ID,
    Medivh03.ID,                Medivh04.ID,                Valanyr.ID
],0.5,1)
//Murloc Loot
addLootToCreature(MurlocChampionCreatureLoot,[
    ChampionsSatchel.ID,               
],[10],0)
addLootToCreatureSingleChance(MurlocChampionCreatureLoot,[
    HeavenlyPurpose.ID,         PrimalFury.ID,              Introspection.ID,
    FuryOffhand.ID,             NaturalRegenHelm.ID,        Mojoshield.ID,
    Bulwarkshield.ID,           Advocate.ID,                Avalanche.ID,  
    DancingBlades.ID,           rohk.ID,                    Crusher.ID,
    Eyepatch.ID,                Medivh01.ID,                Medivh02.ID,
    Medivh03.ID,                Medivh04.ID,                Valanyr.ID
],0.5,1)
//Kobold Loot
addLootToCreature(KoboldChampionCreatureLoot,[
    ChampionsSatchel.ID,               
],[10],0)
addLootToCreatureSingleChance(KoboldChampionCreatureLoot,[
    HeavenlyPurpose.ID,         PrimalFury.ID,              Introspection.ID,
    FuryOffhand.ID,             NaturalRegenHelm.ID,        Mojoshield.ID,
    Bulwarkshield.ID,           Advocate.ID,                Avalanche.ID,  
    DancingBlades.ID,           rohk.ID,                    Crusher.ID,
    Eyepatch.ID,                Medivh01.ID,                Medivh02.ID,
    Medivh03.ID,                Medivh04.ID,                Valanyr.ID
],0.5,1)
//Harpy Loot
addLootToCreature(harpyCreatureLoot,[
    ChampionsSatchel.ID,               
],[10],0)
addLootToCreatureSingleChance(harpyCreatureLoot,[
    HeavenlyPurpose.ID,         PrimalFury.ID,              Introspection.ID,
    FuryOffhand.ID,             NaturalRegenHelm.ID,        Mojoshield.ID,
    Bulwarkshield.ID,           Advocate.ID,                Avalanche.ID,  
    DancingBlades.ID,           rohk.ID,                    Crusher.ID,
    Eyepatch.ID,                Medivh01.ID,                Medivh02.ID,
    Medivh03.ID,                Medivh04.ID,                Valanyr.ID
],0.5,1)
//Quailboar Loot
addLootToCreature(quailboarCreatureLoot,[
    ChampionsSatchel.ID,               
],[10],0)
addLootToCreatureSingleChance(quailboarCreatureLoot,[
    HeavenlyPurpose.ID,         PrimalFury.ID,              Introspection.ID,
    FuryOffhand.ID,             NaturalRegenHelm.ID,        Mojoshield.ID,
    Bulwarkshield.ID,           Advocate.ID,                Avalanche.ID,  
    DancingBlades.ID,           rohk.ID,                    Crusher.ID,
    Eyepatch.ID,                Medivh01.ID,                Medivh02.ID,
    Medivh03.ID,                Medivh04.ID,                Valanyr.ID
],0.5,1)