UPDATE `quest_template_addon` SET `RequiredSkillPoints` = (100) WHERE `RequiredSkillPoints` > (100);
UPDATE `quest_template` SET `StartItemCount` = (0) WHERE `StartItem` > (0) AND StartItemCount > (0);