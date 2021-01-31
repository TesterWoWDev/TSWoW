import { std } from "tswow-stdlib";
import {DEATH_SKILL} from "./Caster"
export const DEATH_BOLT = std.Spells.create('tester-mod','death-bolt',686)
DEATH_BOLT.Name.enGB.set('Death Bolt')
DEATH_BOLT.Description.enGB.set('A bolt of death!');
DEATH_BOLT.SkillLines.add(DEATH_SKILL.ID).setAutolearn();

export const MINION_SUMMON = std.Spells.create('tester-mod','minion-summon',66842)
MINION_SUMMON.Name.enGB.set('Mass Reanimation')
MINION_SUMMON.Description.enGB.set('Simultaneously summon up to 4 minions specified in the totem bar');
MINION_SUMMON.Icon.set(std.Spells.load(12020).Icon.get())
MINION_SUMMON.Power.setMana(120,15)
MINION_SUMMON.Cooldown.Time.set(45000)
MINION_SUMMON.SkillLines.add(DEATH_SKILL.ID).setAutolearn();