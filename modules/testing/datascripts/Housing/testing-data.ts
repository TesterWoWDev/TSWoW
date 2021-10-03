import { std } from "tswow-stdlib";
import { DBC, SQL } from "wotlkdata";
import { Spell } from "tswow-stdlib/Spell/Spell";
import { all_objects, baseHousingItem } from "./copied_objects";

let startIndex = 100000;

for(let i=0;i<all_objects.length;i++){
    let curObjects = all_objects[i]
    for (let j = 0; j < curObjects.length; j++) {
        let curObject = curObjects[j]

        let model = curObject.model;
        let icon = curObject.icon;
        let idString = curObject.idString;
        let name = curObject.name;

        // set display info
        let dinfo = addToGameObjectDisplayDBC(model)
        // set game object template
        let tmp = addToGameObjectTemplate(dinfo.ID.get(),name)
        // create the spell to be used when you attempt to place the item
        let spl = createHousingSpell(dinfo.ID.get(),idString,name,icon)
        // create the actual item
        let item = createHousingItem(spl,idString,name,icon)
    }
}

function addToGameObjectDisplayDBC(model:string){
    let dbcLine = DBC.GameObjectDisplayInfo.add(startIndex++).ModelName.set(model);
    return dbcLine
}

function addToGameObjectTemplate(DBCDisplayID:number,name:string){
    let sqlLine = SQL.gameobject_template.add(DBCDisplayID)
        .displayId.set(DBCDisplayID)
        .type.set(5)
        .size.set(1)
        .Data0.set(0)
        .Data1.set(0)
        .name.set(name);
    return sqlLine
}

function createHousingSpell(gobID: number,idString:string,name:string,icon:string){
    let spl = std.Spells.create("TLRHousing", "housing-spell-"+ idString, 61031);
        spl.Name.enGB.set("Housing Spell: "+name)
        .Icon.set(icon)
        .Effects.get(0).EffectType.setTransDoor().GameObjectTemplate.set(gobID)
    return spl
}

function createHousingItem(spl: Spell,idString:string,name:string,icon:string){
    let item = std.Items.create("TLRHousing", "housing-item-"+ idString, baseHousingItem.ID)
        .Name.enGB.set("Housing Item: "+name)
        .DisplayInfo.Icon.set(icon).end
        .Spells.add(spl.ID).end
    return item
}

