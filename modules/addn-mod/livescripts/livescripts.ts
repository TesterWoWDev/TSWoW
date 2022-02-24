import { Atlas } from "./atlas";
import { customQuest } from "./custom-quest";

export function Main(events: TSEvents) {
    Atlas(events);
    customQuest(events);
}
