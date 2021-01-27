"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NECROMANCER_TOTEM = void 0;
const tswow_stdlib_1 = require("tswow-stdlib");
const Necromancer_1 = require("./Necromancer");
exports.NECROMANCER_TOTEM = tswow_stdlib_1.std.Items.create('my-mod', 'necro-totem-item', 46978);
exports.NECROMANCER_TOTEM.Name.set({ enGB: "Necromancer's Doll" });
exports.NECROMANCER_TOTEM.Description.set({ enGB: "The doll required to conjure any of a Necromancer's minions" });
exports.NECROMANCER_TOTEM.DisplayID.set(tswow_stdlib_1.std.Items.load(19816).DisplayID.get());
exports.NECROMANCER_TOTEM.Flags.set(exports.NECROMANCER_TOTEM.Flags.get() + 32);
Necromancer_1.NECROMANCER_CLASS.Inventory.add(exports.NECROMANCER_TOTEM.ID, 1);
//# sourceMappingURL=Doll.js.map