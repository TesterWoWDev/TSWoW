import { Atlas } from "./atlas";
import { Letters } from "./letters";
import { Scrapper } from "./scrapper";

export function Main(events: TSEventHandlers) {
    Atlas(events)
    Scrapper(events)
    Letters(events)
}