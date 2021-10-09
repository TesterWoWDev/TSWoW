UPDATE item_template SET RequiredSkill = 0;
UPDATE item_template SET RequiredSkillRank = 0;
UPDATE item_template SET RequiredReputationFaction = 0;
UPDATE item_template SET RequiredReputationRank = 0;

UPDATE item_template SET RequiredLevel = 10 WHERE RequiredLevel > 20 AND RequiredLevel < 60;
UPDATE item_template SET RequiredLevel = 15 WHERE RequiredLevel >= 60 AND RequiredLevel < 70;
UPDATE item_template SET RequiredLevel = 20 WHERE RequiredLevel >= 70 AND RequiredLevel < 80;
UPDATE item_template SET RequiredLevel = 30 WHERE RequiredLevel >= 80;

UPDATE `item_template` SET `armor` = (armor * 0.25) AND `itemlevel` = (requiredlevel * 8.759) AND `socketcolor_1` = (0) AND `socketcolor_2` = (0) AND `socketcolor_3` = (0) AND `socketbonus` = (0) WHERE `entry` > 0;
UPDATE `item_template` SET `ammo_type` = (2) AND `spellid_5` = (46699) AND `spelltrigger_5` = (1) WHERE `entry` > 0 AND `class` = (2) AND `subclass` = (2);
UPDATE `item_template` SET `ammo_type` = (2) AND `spellid_5` = (46699) AND `spelltrigger_5` = (1)  WHERE `entry` > 0 AND `class` = (2) AND `subclass` = (3);
UPDATE `item_template` SET `ammo_type` = (2) AND `spellid_5` = (46699) AND `spelltrigger_5` = (1)  WHERE `entry` > 0 AND `class` = (2) AND `subclass` = (18);