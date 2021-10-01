import { std } from "tswow-stdlib"
import { MODNAME } from "../../../modname"


export let OrbofPower = std.Items.create(MODNAME,'powerorb01',43102)
OrbofPower.Name.enGB.set('Orb of Infinite Power')
OrbofPower.Quality.setPurple()
OrbofPower.MaxStack.set(500)
OrbofPower.Price.set(100000,20000000,1)

export let PowerToken = std.Items.load(37711)
PowerToken.Name.enGB.set('Token of Infinite Power')
PowerToken.Description.enGB.set('This token contains incredible power and it can be traded for items that match it\'s esteem.')
PowerToken.Quality.setPurple()
