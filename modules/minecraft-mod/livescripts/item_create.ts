let ids = [
    //class,subclass,invTypeb
    //cloth
    [4, 1, 1], 
    [4, 1, 3],
    [4, 1, 5],
    [4, 1, 6],
    [4, 1, 7],
    [4, 1, 8],
    [4, 1, 9],
    [4, 1, 10],

    //leather
    [4, 2, 1], 
    [4, 2, 3],
    [4, 2, 5],
    [4, 2, 6],
    [4, 2, 7],
    [4, 2, 8],
    [4, 2, 9],
    [4, 2, 10],

    //mail
    [4, 3, 1], 
    [4, 3, 3],
    [4, 3, 5],
    [4, 3, 6],
    [4, 3, 7],
    [4, 3, 8],
    [4, 3, 9],
    [4, 3, 10],

    //extras
    [4, 0, 2],
    [4, 0, 11],
    [4, 0, 12],
    [4, 1, 16],
];



export function itemCreate(events: TSEvents) {
    events.Player.OnCommand((player,command,found)=>{
        let cmd = command.get().split(' ')
        if(cmd[0] == 'createitem'){
            found.set(true)
            let templateItemID = 25
            let temp:TSItemTemplate = CreateItem(templateItemID,1).GetTemplateCopy()
            //make changes
            let entry = getOpenID()
            temp.SetEntry(entry)
            let itemLevel:uint32 = player.GetLevel()/4
            temp.SetItemLevel(itemLevel);//playerlevel
            let qualityCheck = Math.floor(Math.random()*100)
            if(qualityCheck <= 50){//uncommon
                temp.SetQuality(2)
            }else if(qualityCheck <= 80){//rare
                temp.SetQuality(3)
            }else if(qualityCheck <= 95){//epic
                temp.SetQuality(4)
            }else{//legendary
                temp.SetQuality(5)
            }
            temp.SetStatCount(temp.GetQuality()-1)
            if (temp.GetClass() == 4)//if armorb
            {
                let armor:int32 = (((25 - 1) / 10) +1)*itemLevel;
                temp.SetArmor(armor)
            }


            //save
            temp.SaveItemTemplate()
            //apply
            ReloadSingleItemTemplateObject(temp)
            //add
            player.AddItem(entry,1)
            //cache//not needed with exe mod?
            player.SendItemQueryPacketWithTemplate(temp)
        }
    })
}

function getOpenID():uint32
{
    let id = 200000//we start our custom items at 200k
    let q = QueryCharacters('SELECT MAX(entry) FROM custom_item_template')
    while(q.GetRow()) {
        id = q.GetUInt32(0)+1
        if(id < 200000)
            id = 200000
    }
    return id;
}