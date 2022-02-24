import { itemCache } from "../shared/Messages";

export function itemCacheRequest()
{
    GameTooltip.HookScript("OnTooltipSetItem", (self) => {
        const itemID = self.GetItem()[1].split(':')[1]
        let p = new itemCache(Number(itemID),0)//eventually add a check if i want a template call?
        p.write().Send()
    });
}