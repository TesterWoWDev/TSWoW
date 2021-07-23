import { MODNAME } from "quests-mod"
import { std } from "tswow-stdlib"

export let AgathasLockbox = std.Items.create(MODNAME,'agathaslockbox',159)
AgathasLockbox.Quality.setBlue()
AgathasLockbox.Bonding.setQuestItem()