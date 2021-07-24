import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"
import { tierOneClothMaterial, tierOneLeatherMaterial, tierOneMailMaterial } from "../items/armor/tier1-set"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { AttachedLootSet } from "tswow-stdlib//Loot/Loot"
import { ItemTemplate } from "tswow-stdlib/Item/ItemTemplate"
import { GoldenBar1G } from "../items/currencies"

export let DQGiver01 = std.CreatureTemplates.create(MODNAME,'dqgiver01-mob',9274)//replace 2934 with parentCreature of a questgiver
DQGiver01.Name.enGB.set('Captain Rupert')
DQGiver01.Subname.enGB.set('Captain of the Guard')
DQGiver01.Level.set(20,20)
DQGiver01.Models.clearAll()
DQGiver01.Models.addIds(1738,1737)

export let DRQItemRequired01 = std.Items.create(MODNAME,'drqitemrequired01-item',22924)
DRQItemRequired01.Name.enGB.set('Tarnished Metal')
DRQItemRequired01.Description.enGB.set('This metal looks like it could be of value to the War Effort.')
DRQItemRequired01.Quality.setWhite()
DRQItemRequired01.MaxStack.set(500)

export let ResourceCacheReward = std.Items.create(MODNAME,'drqitemrequired01-item',54218) // Cache of Resources
ResourceCacheReward.Name.enGB.set('Cache of Resources')
ResourceCacheReward.Description.enGB.set('This cache contains various resources from the war effort.')
SQL.item_loot_template.add(ResourceCacheReward.ID,tierOneMailMaterial).Chance.set(33).MinCount.set(2).MaxCount.set(4).GroupId.set(0)
SQL.item_loot_template.add(ResourceCacheReward.ID,tierOneLeatherMaterial).Chance.set(33).MinCount.set(2).MaxCount.set(4).GroupId.set(0)
SQL.item_loot_template.add(ResourceCacheReward.ID,tierOneClothMaterial).Chance.set(33).MinCount.set(2).MaxCount.set(4).GroupId.set(0)
SQL.item_loot_template.add(ResourceCacheReward.ID,GoldenBar1G.ID).Chance.set(100).MinCount.set(1).MaxCount.set(2).GroupId.set(1)
//addLoot(ResourceCacheReward.ID,[tierOneMailMaterial,tierOneClothMaterial,tierOneLeatherMaterial],[33,33,33],0)

export let DRQ01 = std.Quests.create(MODNAME,'drq01-quest')
DRQ01.Text.Title.enGB.set('Supplies for the War Effort')
DRQ01.Flags.set(8)
DRQ01.MinLevel.set(1)
DRQ01.QuestLevel.set(1)
DRQ01.Objectives.Item.add(DRQItemRequired01.ID,15)
DRQ01.Questgiver.addBoth(DQGiver01.ID)
DRQ01.Rewards.Money.set(2130)
DRQ01.Rewards.Item.add(ResourceCacheReward.ID,1)


SQL.quest_template_addon.add(DRQ01.ID).SpecialFlags.set(1)
SQL.quest_request_items.add(DRQ01.ID).CompletionText.set('Dadanga looks up at you as you approach her. She seems to be hoping for something...$B$BShe\'s probably hungry!$B$BThere\'s got to be something growing in the crater that would be just the perfect snack for a large herbivore. Dadanga\'s a big girl; whatever you bring her, there would need to be a lot of it!')

//import
//addLootToItem(loot: AttachedLootSet<ItemTemplate> , items: number[], chances: number[],groupID?:number)