import { std } from "tswow-stdlib";
import { MODNAME } from "../modname";

let names = [
    "empty",
    "Scout",
    "Grunt",
    "Sergeant",
    "Senior Sergeant",
    "First Sergeant",
    "Stone Guard",
    "Blood Guard",
    "Legionnaire",
    "Centurion",
    "Champion",
    "Lieutenant Commander",
    "Commander",
    "Lieutenant General",
    "General",
    "Warlord",
    "High Warlord",
];

for (let i = 1; i <= 15; i++) {
    let spell = std.Spells.create(MODNAME, "killstreak-spell-" + i, 168);
    spell.Name.enGB.set(names[i]);
    spell.Description.enGB.set("You are a " + names[i]);
    spell.AuraDescription.enGB.set(
        "You are a " +
        names[i] +
        ". You have a bounty of an extra " +
        i * 5 +
        " honor on your head."
    );
    spell.Effects.clearAll();
    spell.Effects.addMod((eff) => {
        eff.Type.APPLY_AURA.set();
        eff.ImplicitTargetA.SRC_CASTER.set();
        eff.DieSides.set(1);
    });
    spell.Duration.set(21);
    spell.Visual.set(0);
    spell.row.Attributes.set(0x80000000);
    spell.Icon.setPath("Achievement_PVP_H_" + padLeadingZeros(i, 2));
}

function padLeadingZeros(num: number, size: number) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}
