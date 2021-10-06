import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"


export let ShivanFeather = std.Items.create(MODNAME,'shivanfeather',43465)
ShivanFeather.Name.enGB.set('Shivan Feather')
ShivanFeather.DisplayInfo.copyFrom(37877)
ShivanFeather.Quality.setPurple()
ShivanFeather.Spells.clear(0)
ShivanFeather.Spells.add(52870,undefined,undefined,-1).Trigger.set(0)
ShivanFeather.RequiredLevel.set(0)
