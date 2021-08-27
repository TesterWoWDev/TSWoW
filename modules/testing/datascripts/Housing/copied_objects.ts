import { std } from "tswow-stdlib";

type SpawnableObject = {
    model: string;
    icon: string;
    idString: string;
    name: string;
};

export let all_objects:SpawnableObject[][] = [];

export let baseHousingItem = std.Items.create("TLRHousing", "base-housing-item", 44606)
    baseHousingItem.Name.enGB.set("base item")
    .Quality.setWhite()
    .Bonding.setNoBounds()
    .Description.enGB.set("Used in houses.")
    .Spells.clearAll()

export let baseHousingSpell = std.Spells.create("TLRHousing", "base-housing-spell", 61031);
    baseHousingSpell.Name.enGB.set("base spell")
    .Description.enGB.set('Used in houses.')
    .CastTime.set(0,0,0)
    .Duration.set(1000, 0, 1000)
    .Range.set(0, 10, 0, 10)