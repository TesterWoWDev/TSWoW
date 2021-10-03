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
        curClass.Stats.MeleeCrit.set((old,index)=>0)                // Controls Main Stat to Crit Rating
        curClass.Stats.MeleeCritBase.set((old,index)=>0)            // Controls Crit per Level
        curClass.Stats.CombatRatings.set((old,index)=>5)            // Controls Secondary Stats (primarily Critical Strike)
        curClass.Stats.CombatRatingsScalar.set((old,index)=>0.1)    // Controls Secondary Stats (primarily haste)
        curClass.Stats.SpellCrit.set((old,index)=>0)                // Controls Main Stat to Crit Rating
        curClass.Stats.SpellCritBase.set((old,index)=>0)            // Controls Crit per Level
        curClass.StartGear.Chest.clear()
        curClass.StartGear.Back.clear()
        curClass.StartGear.Feet.clear()
        curClass.StartGear.Hands.clear()
        curClass.StartGear.Head.clear()
        curClass.StartGear.Legs.clear()
        curClass.StartGear.Shoulder.clear()
        curClass.StartGear.Waist.clear()
        curClass.StartGear.Wrists.clear()
})