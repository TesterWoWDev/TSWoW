import { MODNAME } from "quests-mod"
import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { tierOneBaseResources, tierOneClothMaterial } from "../../items/armor/tier1-set"

export let AgathasLockbox = std.Items.create(MODNAME,'agathaslockbox',4632)
AgathasLockbox.Name.enGB.set('Agatha\'s Lockbox')
AgathasLockbox.Quality.setBlue()
AgathasLockbox.Bonding.setQuestItem()
AgathasLockbox.Spells.clearAll()

export let SatchelofResources = std.Items.create(MODNAME,'resourcecache',5335)
SatchelofResources.Name.enGB.set('Fractal\'s Resource Cache')
SatchelofResources.Quality.setGreen()
SatchelofResources.Bonding.setQuestItem()
SatchelofResources.Spells.clearAll()
SQL.item_loot_template.add(SatchelofResources.ID,tierOneClothMaterial).Chance.set(100).MinCount.set(3).MaxCount.set(3)
SQL.item_loot_template.add(SatchelofResources.ID,tierOneBaseResources[0]).Chance.set(100).MinCount.set(1).MaxCount.set(1)

export let startingResource01 = std.Items.create(MODNAME,'startingresource01',765)
startingResource01.Name.enGB.set('Everlilly')
startingResource01.Quality.setWhite()
startingResource01.MaxStack.set(500)