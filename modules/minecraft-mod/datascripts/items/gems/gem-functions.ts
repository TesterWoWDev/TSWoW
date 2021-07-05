import { CreatureTemplate } from "tswow-stdlib/Creature/CreatureTemplate"
import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"
import { createRecipe } from "../../functions/recipe-functions"

export let redColorCode = '|cffDC9415'
export let greenColorCode = '|cff278916'
export let blueColorCode = '|cff2EBEF0'
export let purpleColorCode = '|cff8802CA'
export let yellowColorCode = '|cffB9AC09'
export let orangeColorCode = '|cffffa500'

export function createGem(quality:number,modprefix:string,name:string,displayinfo:number,description:string,gemProp:number,itemlevel:number,BagFamily:number):number{
    let gem = std.Items.create(MODNAME,modprefix,2934)
        gem.Name.enGB.set(name)
        gem.DisplayInfo.setID(displayinfo)
        gem.Description.enGB.set(description)
        gem.row.GemProperties.set(gemProp)
        gem.ItemLevel.set(itemlevel)
        return gem.ID
}

export function additems(vendor: CreatureTemplate, allGems: number[][]) {
    allGems.forEach((value,index,arr)=>{
        value.forEach((gem)=>{
            vendor.Vendor.addItem(gem)
        })
    })
}

export function gemLevelUpPattern(dustID:number,startingGemID:number[],endingGemID:number[]){
    startingGemID.forEach((value,index,array)=>{
        createRecipe([0,dustID,0,dustID,value,dustID,0,dustID,0],[value,dustID,0,0,0,0,0,0,0],[1,4,0,0,0,0,0,0,0],endingGemID[index],1)
    })
}

export function createAllUndiscoverGems(gemCount: number, gemName: string, gemDisplayID: any):number[] {
    let allGemIDs = []
    for(let i=0;i<gemCount;i++){
        let gem = std.Items.create(MODNAME,gemName.toLowerCase().replace(' ','-') + '-'+i,2934)
        gem.Name.enGB.set('Unrefined '+gemName)
        gem.DisplayInfo.setID(gemDisplayID)
        allGemIDs.push(gem.ID)
    }
    return allGemIDs
}
