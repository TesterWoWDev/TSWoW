import { SQL } from "wotlkdata/sql/SQLFiles"

SQL.playercreateinfo.filter({}).forEach((value,index,arr)=>{
    if(value.class.get() == 6){
        value.map.set(723)
        value.position_x.set(-8750.45)
        value.position_y.set(-74.6418)
        value.position_z.set(31.1351)
        value.orientation.set(2.88658)
    }else{
        value.map.set(723)
        value.position_x.set(-8750.45)
        value.position_y.set(-74.6418)
        value.position_z.set(31.1351)
        value.orientation.set(2.88658)
    }
})