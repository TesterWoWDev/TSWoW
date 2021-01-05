import { std } from "tswow-stdlib";
export const MEGA_BOSS = std.CreatureTemplates.create('testerMod','tester-mega-boss',1501)

MEGA_BOSS.UnitClass.setMage()
MEGA_BOSS.Stats.DamageMod.set(3);
MEGA_BOSS.Stats.HealthMod.set(10)
MEGA_BOSS.Stats.ManaMod.set(7)
MEGA_BOSS.AttackTime.set(100,100,10,10)
MEGA_BOSS.Level.set(80,80)

const bossPhases = MEGA_BOSS.Scripts
//phase 1 setup timers
bossPhases.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,2000,5000,100)
bossPhases.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,7000,10000,100)
bossPhases.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,7000,10000,100)
//phase 1 combat loop
bossPhases.onTimedEventTriggered(0).Target.setClosestEnemy(20,0).Action.setCast(1,0,0)
bossPhases.onTimedEventTriggered(1).Target.setClosestEnemy(20,0).Action.setCast(1,0,0)
bossPhases.onTimedEventTriggered(2).Target.setClosestEnemy(20,0).Action.setCast(1,0,0)
//phase 1 phase close
bossPhases.onHealthPct(60,70,0,0).Action.setRemoveTimedEvent(0)
bossPhases.onHealthPct(60,70,0,0).Action.setRemoveTimedEvent(1)
bossPhases.onHealthPct(60,70,0,0).Action.setRemoveTimedEvent(2)
//phase 2 setup timers
bossPhases.onHealthPct(60,70,0,0).Action.setCreateTimedEvent(3,0,0,2000,5000,100)
bossPhases.onHealthPct(60,70,0,0).Action.setCreateTimedEvent(4,0,0,2000,5000,100)
bossPhases.onHealthPct(60,70,0,0).Action.setCreateTimedEvent(5,0,0,2000,5000,100)
//phase 2 combat loop
bossPhases.onTimedEventTriggered(3).Target.setClosestEnemy(20,0).Action.setCast(1,0,0)
bossPhases.onTimedEventTriggered(4).Target.setClosestEnemy(20,0).Action.setCast(1,0,0)
bossPhases.onTimedEventTriggered(5).Target.setClosestEnemy(20,0).Action.setCast(1,0,0)
//phase 2 phase close
bossPhases.onHealthPct(30,40,0,0).Action.setRemoveTimedEvent(3)
bossPhases.onHealthPct(30,40,0,0).Action.setRemoveTimedEvent(4)
bossPhases.onHealthPct(30,40,0,0).Action.setRemoveTimedEvent(5)
//phase 3 setup timers
bossPhases.onHealthPct(30,40,0,0).Action.setCreateTimedEvent(6,0,0,2000,5000,100)
bossPhases.onHealthPct(30,40,0,0).Action.setCreateTimedEvent(7,0,0,2000,5000,100)
bossPhases.onHealthPct(30,40,0,0).Action.setCreateTimedEvent(8,0,0,2000,5000,100)
//phase 3 combat loop
bossPhases.onTimedEventTriggered(6).Target.setClosestEnemy(20,0).Action.setCast(1,0,0)
bossPhases.onTimedEventTriggered(7).Target.setClosestEnemy(20,0).Action.setCast(1,0,0)
bossPhases.onTimedEventTriggered(8).Target.setClosestEnemy(20,0).Action.setCast(1,0,0)
//phase 3 phase close
bossPhases.onHealthPct(5,8,0,0).Action.setRemoveTimedEvent(6)
bossPhases.onHealthPct(5,8,0,0).Action.setRemoveTimedEvent(7)
bossPhases.onHealthPct(5,8,0,0).Action.setRemoveTimedEvent(8)
//phase 4 setup timers
bossPhases.onHealthPct(5,5,0,0).Action.setCreateTimedEvent(9,0,0,2000,5000,100)
bossPhases.onHealthPct(5,5,0,0).Action.setCreateTimedEvent(10,0,0,2000,5000,100)
bossPhases.onHealthPct(5,5,0,0).Action.setCreateTimedEvent(11,0,0,2000,5000,100)
//phase 4 combat loop
bossPhases.onTimedEventTriggered(9).Target.setClosestEnemy(20,0).Action.setCast(1,0,0)
bossPhases.onTimedEventTriggered(10).Target.setClosestEnemy(20,0).Action.setCast(1,0,0)
bossPhases.onTimedEventTriggered(11).Target.setClosestEnemy(20,0).Action.setCast(1,0,0)
//phase 4 phase close
bossPhases.onDeath().Action.setRemoveTimedEvent(9)
bossPhases.onDeath().Action.setRemoveTimedEvent(10)
bossPhases.onDeath().Action.setRemoveTimedEvent(11)

//combat end fix
bossPhases.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0)
bossPhases.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1)
bossPhases.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2)
bossPhases.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(3)
bossPhases.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(4)
bossPhases.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(5)
bossPhases.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(6)
bossPhases.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(7)
bossPhases.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(8)
bossPhases.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(9)
bossPhases.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(10)
bossPhases.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(11)
