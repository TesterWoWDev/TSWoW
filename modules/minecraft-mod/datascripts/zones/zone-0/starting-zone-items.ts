import { MODNAME } from "quests-mod"
import { std } from "tswow-stdlib"

export let AgathasLockbox = std.Items.create(MODNAME,'agathaslockbox',4632)
AgathasLockbox.Name.enGB.set('Agatha\'s Lockbox')
AgathasLockbox.Quality.setBlue()
AgathasLockbox.Bonding.setQuestItem()
AgathasLockbox.Spells.clearAll()
