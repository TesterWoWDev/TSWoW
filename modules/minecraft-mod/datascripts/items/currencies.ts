import { std } from "wow/wotlk";
import { MODNAME } from "../modname";

export let GoldenBar1G = std.Items.create(MODNAME, "goldenbar1g-item", 3577);
GoldenBar1G.MaxStack.set(500);
GoldenBar1G.Quality.GREEN.set();
GoldenBar1G.Quality.GREEN.set();
GoldenBar1G.Price.set(1, 1.5, 1, 'GOLD');

export let GoldenBar5G = std.Items.create(MODNAME, "goldenbar5g-item", 3577);
GoldenBar5G.MaxStack.set(500);
GoldenBar5G.Quality.GREEN.set();
GoldenBar5G.Price.set(5, 10, 1, 'GOLD');

export let GoldenBar10G = std.Items.create(MODNAME, "goldenbar10g-item", 3577);
GoldenBar10G.MaxStack.set(500);
GoldenBar10G.Quality.GREEN.set();
GoldenBar10G.Price.set(10, 15, 1, 'GOLD');

export let GoldenBar25G = std.Items.create(MODNAME, "goldenbar25g-item", 3577);
GoldenBar25G.MaxStack.set(500);
GoldenBar25G.Quality.GREEN.set();
GoldenBar25G.Price.set(25, 50, 1, 'GOLD');

export let GoldenBar50G = std.Items.create(MODNAME, "goldenbar50g-item", 3577);
GoldenBar50G.MaxStack.set(500);
GoldenBar50G.Quality.GREEN.set();
GoldenBar50G.Price.set(50, 75, 1, 'GOLD');

export let GoldenBar100G = std.Items.create(
    MODNAME,
    "goldenbar100g-item",
    3577
);
GoldenBar100G.MaxStack.set(500);
GoldenBar100G.Quality.GREEN.set();
GoldenBar100G.Price.set(100, 150, 1, 'GOLD');

export let SmallSackofCoinswithBag = std.Items.create(
    MODNAME,
    "coinsinbag-item",
    5335
); // Use this for the Starter Quest as Reward (provides player with an early game bag)
SmallSackofCoinswithBag.MoneyLoot.set(225, 815);
std.SQL.item_loot_template.add(SmallSackofCoinswithBag.ID, 4957).Chance.set(100);
export let SmallSackofCoins = std.Items.create(
    MODNAME,
    "smallcoins-item",
    11966
);
SmallSackofCoins.Name.enGB.set("Small Sack of Coins");
SmallSackofCoins.MoneyLoot.set(750, 2250);
export let LargeSackofCoins = std.Items.create(
    MODNAME,
    "largecoins-item",
    11937
);
LargeSackofCoins.Name.enGB.set("Large Sack of Coins");
LargeSackofCoins.MoneyLoot.set(6235, 18704);
export let MassiveSackofCoins = std.Items.create(
    MODNAME,
    "massivecoins-item",
    11937
);
MassiveSackofCoins.Name.enGB.set("Massive Sack of Coins");
MassiveSackofCoins.MoneyLoot.set(16235, 218704);
