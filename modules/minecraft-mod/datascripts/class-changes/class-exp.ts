import { SQL } from "wotlkdata/sql/SQLFiles"

SQL.player_xp_for_level.filter({}).forEach((value,index,array)=>{
    if(index <= 20)
    value.Experience.set(value.Experience.get() * 6.25)
})