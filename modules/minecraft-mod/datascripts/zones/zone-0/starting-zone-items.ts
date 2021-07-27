import { MODNAME } from "quests-mod"
import { std } from "tswow-stdlib"

export let AgathasLockbox = std.Items.create(MODNAME,'agathaslockbox',4632)
AgathasLockbox.Name.enGB.set('Agatha\'s Lockbox')
AgathasLockbox.Quality.setBlue()
AgathasLockbox.Bonding.setQuestItem()
AgathasLockbox.Spells.clearAll()

export let startingResource01 = std.Items.create(MODNAME,'startingresource01',765)
startingResource01.Name.enGB.set('Everlilly')
startingResource01.Quality.setWhite()
startingResource01.MaxStack.set(500)