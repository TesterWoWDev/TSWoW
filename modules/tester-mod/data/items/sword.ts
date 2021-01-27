import { std } from "tswow-stdlib";

export const RUBBER_SWORD = std.Items.create('my-mod', 'rubber-sword-item',2131)
RUBBER_SWORD.Name.set({enGB:'Rubber Sword Rename'})
RUBBER_SWORD.Description.set({enGB:'Sword made of Rubber',ruRU:'dsfsdfsdf'})
RUBBER_SWORD.Quality.setBlue();
RUBBER_SWORD.Stats.addAgility(10);
// Remove old damage settings
RUBBER_SWORD.Damage.clearAll();
RUBBER_SWORD.Damage.addPhysical(1337,1337);
RUBBER_SWORD.Damage.addFire(7331,7331);
// Set the delay to 10ms. Try hitting a dummy with this
RUBBER_SWORD.Delay.set(10)