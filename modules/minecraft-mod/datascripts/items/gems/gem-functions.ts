import { CreatureTemplate } from "tswow-stdlib/Creature/CreatureTemplate"
import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"
import { createRecipe } from "../../recipe-functions"

export function createGem(modprefix:string,name:string,displayinfo:number,description:string,gemProp:number,itemlevel:number):number{
    let gem = std.Items.create(MODNAME,modprefix,2934)
        gem.Name.enGB.set(name)
        gem.DisplayInfo.setID(displayinfo)
        gem.Description.enGB.set(description)
        gem.row.GemProperties.set(gemProp)
        gem.ItemLevel.set(itemlevel)
        return gem.ID
}

export function additems(vendor: CreatureTemplate, arg1: number[]) {
    arg1.forEach((value,index,arr)=>{
        vendor.Vendor.addItem(value)
    })
}

export function gemLevelUpPattern(dustID:number,startingGemID:number[],endingGemID:number[]){
    startingGemID.forEach((value,index,array)=>{
        createRecipe([0,dustID,0,dustID,value,dustID,0,dustID,0],[value,dustID,0,0,0,0,0,0,0],[1,4,0,0,0,0,0,0,0],endingGemID[index],1)
    })
}
