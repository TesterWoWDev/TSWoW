import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"

export let GoldenBar1G = std.Items.create(MODNAME,'goldenbar1g-item',3577)
GoldenBar1G.MaxStack.set(500)
GoldenBar1G.Quality.setGreen()
GoldenBar1G.Price.set(10000,15000,1)

export let GoldenBar5G = std.Items.create(MODNAME,'goldenbar5g-item',3577)
GoldenBar5G.MaxStack.set(500)
GoldenBar5G.Quality.setGreen()
GoldenBar5G.Price.set(50000,100000,1)

export let GoldenBar10G = std.Items.create(MODNAME,'goldenbar10g-item',3577)
GoldenBar10G.MaxStack.set(500)
GoldenBar10G.Quality.setGreen()
GoldenBar10G.Price.set(100000,150000,1)

export let GoldenBar25G = std.Items.create(MODNAME,'goldenbar25g-item',3577)
GoldenBar25G.MaxStack.set(500)
GoldenBar25G.Quality.setGreen()
GoldenBar25G.Price.set(250000,500000,1)

export let GoldenBar50G = std.Items.create(MODNAME,'goldenbar50g-item',3577)
GoldenBar50G.MaxStack.set(500)
GoldenBar50G.Quality.setGreen()
GoldenBar50G.Price.set(500000,750000,1)

export let GoldenBar100G = std.Items.create(MODNAME,'goldenbar100g-item',3577)
GoldenBar100G.MaxStack.set(500)
GoldenBar100G.Quality.setGreen()
GoldenBar100G.Price.set(1000000,1500000,1)

export let SmallSackofCoinswithBag = std.Items.create(MODNAME,'coinsinbag-item',5335) // Use this for the Starter Quest as Reward (provides player with an early game bag)
SmallSackofCoinswithBag.MoneyLoot.set(225,815)
export let SmallSackofCoins = std.Items.create(MODNAME,'smallcoins-item',11966)
SmallSackofCoins.Name.enGB.set('Small Sack of Coins')
SmallSackofCoins.MoneyLoot.set(750,2250)
export let LargeSackofCoins = std.Items.create(MODNAME,'largecoins-item',11937)
LargeSackofCoins.Name.enGB.set('Large Sack of Coins')
LargeSackofCoins.MoneyLoot.set(6235,18704)
export let MassiveSackofCoins = std.Items.create(MODNAME,'massivecoins-item',11937)
MassiveSackofCoins.Name.enGB.set('Massive Sack of Coins')
MassiveSackofCoins.MoneyLoot.set(16235,218704)
