import { std } from "wow/wotlk";
import { ItemTemplate } from "wow/wotlk/std/Item/ItemTemplate";
import { MODNAME } from "../modname";

var manaTemplate = [0, 5];
var healthTemplate = [1, 3];
var agilityTemplate = [3, 1];
var strengthTemplate = [4, 1];
var intellectTemplate = [5, 1];
var spiritTemplate = [6, 2];
var staminaTemplate = [7, 2];
var critTemplate = [32, 1];
var hasteTemplate = [36, 1];
var attackPowerTemplate = [38, 1];
var spellPowerTemplate = [45, 1];

var stamIntTemplate = joinTemplates([staminaTemplate, intellectTemplate], 1);
var stamAgiTemplate = joinTemplates([staminaTemplate, agilityTemplate], 1);

var item = std.Items.load(25);
useTemplates(item, 1, [stamIntTemplate, stamAgiTemplate]);

function joinTemplates(statTemplates: number[][], modifier: number) {
    statTemplates.forEach((val, index, arr) => {
        val[1] *= modifier;
    });
    return statTemplates;
}

function useTemplates(
    item: ItemTemplate,
    modifier: number,
    templateArray: number[][][]
): number[] {
    var IDs: number[] = [];
    templateArray.forEach((v, i, arr) => {
        var curItem = std.Items.create(MODNAME, item.Name.enGB.get() + i, item.ID);
        curItem.Stats.clearAll();
        v.forEach((value) => curItem.Stats.add(value[0], value[1] * modifier));
        IDs.push(curItem.ID);
    });
    return IDs;
}
