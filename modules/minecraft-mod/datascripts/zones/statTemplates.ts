import { std } from "tswow-stdlib"
import { ItemTemplate } from "tswow-stdlib/Item/ItemTemplate"
import { MODNAME } from "../modname"

var manaTemplate = [0,5]
var healthTemplate = [1,3]
var agilityTemplate = [3,1]
var strengthTemplate = [4,1]
var intellectTemplate = [5,1]
var spiritTemplate = [6,2]
var staminaTemplate = [7,2]
var critTemplate = [32,1]
var hasteTemplate = [36,1]
var attackPowerTemplate = [38,1]
var spellPowerTemplate = [45,1]

var stamIntTemplate = join([staminaTemplate,intellectTemplate],1)
var stamAgiTemplate = join([staminaTemplate,agilityTemplate],1)

var item = std.Items.load(25)
useStatTemplates(item,1,[stamIntTemplate,stamAgiTemplate])

function join(statTemplates:number[][], modifier: number){
    statTemplates.forEach((val,index,arr)=>{
        val[1] *= modifier
    })
    return statTemplates
}

function useStatTemplates(item: ItemTemplate, modifier: number, templateArray: number[][][]):number[] {    
    var idString = item.Name.enGB.get()
    var itemID = item.ID
    var IDs: number[] = []  
    templateArray.forEach((v,i,arr)=>{
        var allStats = v
        var curItem = std.Items.create(MODNAME,idString+i,itemID)
        curItem.Stats.clearAll()
        allStats.forEach((value,index,arrray)=>{
            var oneStat = value
            oneStat[1] *= modifier
            switch(oneStat[0]) { 
                case 0: { 
                    curItem.Stats.addMana(oneStat[1])
                   break; 
                } 
                case 1: { 
                    curItem.Stats.addHealth(oneStat[1])
                   break; 
                } 
                case 3: { 
                    curItem.Stats.addAgility(oneStat[1])
                   break; 
                } 
                case 4: { 
                    curItem.Stats.addStrength(oneStat[1])
                   break; 
                } 
                case 5: { 
                    curItem.Stats.addIntellect(oneStat[1])
                    break; 
                 } 
                 case 6: { 
                    curItem.Stats.addSpirit(oneStat[1])
                    break; 
                 } 
                 case 7: { 
                    curItem.Stats.addStamina(oneStat[1])
                    break; 
                 } 
                 case 32: { 
                    curItem.Stats.addCritRating(oneStat[1])
                    break; 
                 } 
                 case 36: { 
                    curItem.Stats.addHasteRating(oneStat[1])
                    break; 
                 }
                 case 38: { 
                    curItem.Stats.addAttackPower(oneStat[1])
                    break; 
                 }
                 case 45: { 
                    curItem.Stats.addSpellPower(oneStat[1])
                    break; 
                 }
             }  
        })
        IDs.push(curItem.ID)
    })
    return IDs
}