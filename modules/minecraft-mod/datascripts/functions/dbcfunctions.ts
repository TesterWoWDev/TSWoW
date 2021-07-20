import { DBC_ItemExtendedCost } from "wotlkdata/dbc/types/ItemExtendedCost";


export function addDBCItemExtendedCost(index:number, reqHonor: number, reqArena:number, ArenaSlotID: number, reqItems:number[], reqItemCount:number[],PersonalRating:number) {
    DBC_ItemExtendedCost.add(index).HonorPoints.set(reqHonor).ArenaPoints.set(reqArena).ArenaBracket.set(ArenaSlotID).ItemID.set(reqItems).ItemCount.set(reqItemCount).RequiredArenaRating.set(PersonalRating)
}
