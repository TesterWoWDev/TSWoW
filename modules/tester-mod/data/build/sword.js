"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUBBER_SWORD = void 0;
const tswow_stdlib_1 = require("tswow-stdlib");
exports.RUBBER_SWORD = tswow_stdlib_1.std.Items.create('my-mod', 'rubber-sword-item', 2131);
exports.RUBBER_SWORD.Name.set({ enGB: 'Rubber Sword Rename' });
exports.RUBBER_SWORD.Description.set({ enGB: 'Sword made of Rubber', ruRU: 'dsfsdfsdf' });
exports.RUBBER_SWORD.Quality.setBlue();
exports.RUBBER_SWORD.Stats.addAgility(10);
// Remove old damage settings
exports.RUBBER_SWORD.Damage.clearAll();
exports.RUBBER_SWORD.Damage.addPhysical(1337, 1337);
exports.RUBBER_SWORD.Damage.addFire(7331, 7331);
// Set the delay to 10ms. Try hitting a dummy with this
exports.RUBBER_SWORD.Delay.set(10);
//# sourceMappingURL=sword.js.map