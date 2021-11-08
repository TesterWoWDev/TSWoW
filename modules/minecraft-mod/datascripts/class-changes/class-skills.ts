import { std } from "tswow-stdlib"
import { ClassType } from "tswow-stdlib/Class/ClassType"

let classes:ClassType[] = ['WARRIOR','PALADIN','HUNTER','ROGUE','PRIEST','DEATH_KNIGHT','SHAMAN','MAGE','WARLOCK','DRUID']
classes.forEach((value,index,array)=>{
    std.EquipSkills.Bows.enableAutolearn(value)
    std.EquipSkills.Daggers.enableAutolearn(value)
    //std.EquipSkills.FistWeapons.enableAutolearn(value)
    std.EquipSkills.Guns.enableAutolearn(value)
    std.EquipSkills.Maces1H.enableAutolearn(value)
    std.EquipSkills.Axes1H.enableAutolearn(value)
    std.EquipSkills.Swords1H.enableAutolearn(value)
    std.EquipSkills.Polearms.enableAutolearn(value)
    std.EquipSkills.Shields.enableAutolearn(value)
    std.EquipSkills.Staves.enableAutolearn(value)
    std.EquipSkills.Thrown.enableAutolearn(value)
    std.EquipSkills.Maces2H.enableAutolearn(value)
    std.EquipSkills.Axes2H.enableAutolearn(value)
    std.EquipSkills.Swords2H.enableAutolearn(value)
    std.EquipSkills.Wands.enableAutolearn(value)
    let curClass = std.Classes.load(value)
    curClass.Stats.MeleeCrit.set((old,index)=>0)                // Controls Main Stat to Crit Rating
    curClass.Stats.MeleeCritBase.set((old,index)=>0)            // Controls Crit per Level
    curClass.Stats.CombatRatings.set((old,index)=>5)            // Controls Secondary Stats (primarily Critical Strike)
    curClass.Stats.CombatRatingsScalar.set((old,index)=>0.1)    // Controls Secondary Stats (primarily haste)
    curClass.Stats.SpellCrit.set((old,index)=>0)                // Controls Main Stat to Crit Rating
    curClass.Stats.SpellCritBase.set((old,index)=>0)            // Controls Crit per Level
    curClass.Races.forEach(x=>{
        x.Outfits.both(y=>y.Items.clearAll())
    })
})