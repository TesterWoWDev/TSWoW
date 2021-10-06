import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"


export let ShivanFeather = std.Items.create(MODNAME,'shivanfeather',43465)
ShivanFeather.Name.enGB.set('Shivan Feather')
ShivanFeather.DisplayInfo.copyFrom(37877)
ShivanFeather.Quality.setPurple()
ShivanFeather.Spells.clear(0)
ShivanFeather.Spells.add(52870,undefined,undefined,-1).Trigger.set(0)
ShivanFeather.RequiredLevel.set(0)


export let LurkerCord = std.Items.create(MODNAME,'lurkercord',30675)
LurkerCord.Quality.setBlue()
LurkerCord.RequiredLevel.set(9)
export let LurkerGrasp = std.Items.create(MODNAME,'lurkergrasp',30676)
LurkerGrasp.Quality.setBlue()
LurkerGrasp.RequiredLevel.set(9)
export let LurkerBelt = std.Items.create(MODNAME,'lurkerbelt',30677)
LurkerBelt.Quality.setBlue()
LurkerBelt.RequiredLevel.set(9)
export let LurkerGirdle = std.Items.create(MODNAME,'lurkergirdle',30678)
LurkerGirdle.Quality.setBlue()
LurkerGirdle.RequiredLevel.set(9)
export let RavagerCuff = std.Items.create(MODNAME,'ravagercuff',30684)
RavagerCuff.Quality.setBlue()
RavagerCuff.RequiredLevel.set(9)
export let RavagerWrap = std.Items.create(MODNAME,'ravagerwrap',30685)
RavagerWrap.Quality.setBlue()
RavagerWrap.RequiredLevel.set(9)
export let Ravagerband = std.Items.create(MODNAME,'ravagerband',30686)
Ravagerband.Quality.setBlue()
Ravagerband.RequiredLevel.set(9)
export let Ravagerbracer = std.Items.create(MODNAME,'ravagerbracer',30687)
Ravagerbracer.Quality.setBlue()
Ravagerbracer.RequiredLevel.set(9)
export let Gliderwrap = std.Items.create(MODNAME,'gliderwrap',30680)
Gliderwrap.Quality.setBlue()
Gliderwrap.RequiredLevel.set(9)
export let Gliderboots = std.Items.create(MODNAME,'gliderboots',30681)
Gliderboots.Quality.setBlue()
Gliderboots.RequiredLevel.set(9)
export let Glidersabatons = std.Items.create(MODNAME,'glidersabatons',30682)
Glidersabatons.Quality.setBlue()
Glidersabatons.RequiredLevel.set(9)
export let Glidergreaves = std.Items.create(MODNAME,'glidergreaves',30683)
Glidergreaves.Quality.setBlue()
Glidergreaves.RequiredLevel.set(9)
export let LostTreads = std.Items.create(MODNAME,'losttreads',30674)
LostTreads.Quality.setBlue()
LostTreads.RequiredLevel.set(9)

export let Commendation = std.Items.create(MODNAME,'commendation',34473)
Commendation.Quality.setBlue()
Commendation.RequiredLevel.set(11)
export let Contempt = std.Items.create(MODNAME,'contempt',34472)
Contempt.Quality.setBlue()
Contempt.RequiredLevel.set(11)
export let FocusingCrystal = std.Items.create(MODNAME,'focusingcrystal',34470)
FocusingCrystal.Quality.setBlue()
FocusingCrystal.RequiredLevel.set(11)
export let SunwellVial = std.Items.create(MODNAME,'sunwellvial',34471)
SunwellVial.Quality.setBlue()
SunwellVial.RequiredLevel.set(11)


//Special Items
export let chancePower1C = std.Spells.create(MODNAME,'chancepower1c-spell',67672) //caster
chancePower1C.Name.enGB.set('Elusive Power')
chancePower1C.Description.enGB.set('Your attacks and abilties have the chance to increase spellpower by 590.')
chancePower1C.Duration.set(-1,0,-1)
chancePower1C.Effects.get(0).TriggerSpell.set(67669)

export let VolatilePower = std.Items.create(MODNAME,'volatilepower',19145)
VolatilePower.Quality.setBlue()
VolatilePower.RequiredLevel.set(9)
VolatilePower.Description.enGB.set('This robe contains the power to randomly increase spellpower by 590 when attacking enemies.')

export let DragonscaleBlade = std.Items.create(MODNAME,'dragonscaleblade',34614)
DragonscaleBlade.Quality.setBlue()
DragonscaleBlade.RequiredLevel.set(9)
DragonscaleBlade.Description.enGB.set('Contained within this blade is the power to summon infinite whelps.')
DragonscaleBlade.Spells.clearAll()
DragonscaleBlade.Spells.add(13049,0,2,0,2,0,0)


export let ChainHealTest = std.Spells.create(MODNAME,'chainhealtest-spell',70425)
ChainHealTest.Effects.get(0).BasePoints.set(645)
ChainHealTest.Effects.get(0).DieSides.set(128)
export let chanceChainHeal = std.Spells.create(MODNAME,'chancechainheal-spell',67672) //caster
chanceChainHeal.Name.enGB.set('Infinite Life')
chanceChainHeal.Description.enGB.set('Your attacks and abilties have the chance to heal all nearby friendly units.')
chanceChainHeal.Duration.set(-1,0,-1)
chanceChainHeal.Effects.get(0).TriggerSpell.set(ChainHealTest.ID)


export let MiseryMace = std.Items.create(MODNAME,'miserymace',34176)
MiseryMace.Quality.setBlue()
MiseryMace.RequiredLevel.set(9)
MiseryMace.Description.enGB.set('Contained within this blade is the power to grant eternal life.')
MiseryMace.Spells.clearAll()
MiseryMace.Spells.add(13049,0,2,0,2,0,0)
export let HeartPit = std.Items.create(MODNAME,'heartpit',34179)
HeartPit.Quality.setBlue()
HeartPit.RequiredLevel.set(9)
HeartPit.Description.enGB.set('Contained within this blade is the power to grant eternal life.')
HeartPit.Spells.clearAll()
HeartPit.Spells.add(13049,0,2,0,2,0,0)

