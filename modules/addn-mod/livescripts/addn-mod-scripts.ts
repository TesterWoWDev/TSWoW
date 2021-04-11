
import { Atlas } from "./atlas";
import { Scrapper } from "./scrapper";

export function Main(events: TSEventHandlers) {
    Atlas(events)
    Scrapper(events)
}