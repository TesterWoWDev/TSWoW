import { std } from "tswow-stdlib"
import { MODNAME } from "../database-setup"

export let stringItem = std.Items.create(MODNAME,'string', 2934)
    stringItem.Name.enGB.set('String')
    stringItem.DisplayInfo.setID(58198)
    stringItem.Description.enGB.set('A unique piece of string.')
    
export let stickItem = std.Items.create(MODNAME,'stick', 45190)
    stickItem.Name.enGB.set('Stick')
    stickItem.Quality.setWhite()
    stickItem.Description.enGB.set('A unique stick.')