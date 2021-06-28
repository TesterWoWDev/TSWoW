import { std } from "tswow-stdlib"
import { ClassType } from "tswow-stdlib/Class/ClassType"
let classes:ClassType[] = ['WARRIOR','PALADIN','HUNTER','ROGUE','PRIEST','DEATH_KNIGHT','SHAMAN','MAGE','WARLOCK','DRUID']
classes.forEach((value,index,array)=>{
    let curClass = std.Classes.load(value)
        curClass.EquipSkills.Bows.setAuto()
        curClass.EquipSkills.Daggers.setAuto()
        curClass.EquipSkills.FistWeapons.setAuto()
        curClass.EquipSkills.Guns.setAuto()
        curClass.EquipSkills.Maces.setAuto()
        curClass.EquipSkills.OneHandedAxes.setAuto()
        curClass.EquipSkills.OneHandedSwords.setAuto()
        curClass.EquipSkills.Polearms.setAuto()
        curClass.EquipSkills.Shield.setAuto()
        curClass.EquipSkills.Staves.setAuto()
        curClass.EquipSkills.Thrown.setAuto()
        curClass.EquipSkills.TwoHandedAxes.setAuto()
        curClass.EquipSkills.TwoHandedMaces.setAuto()
        curClass.EquipSkills.TwoHandedSwords.setAuto()
        curClass.EquipSkills.Wand.setAuto()
})
