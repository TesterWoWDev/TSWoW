UPDATE item_template SET RequiredLevel = 10 WHERE RequiredLevel > 20 AND RequiredLevel < 60;
UPDATE item_template SET RequiredLevel = 15 WHERE RequiredLevel >= 60 AND RequiredLevel < 70;
UPDATE item_template SET RequiredLevel = 20 WHERE RequiredLevel >= 70 AND RequiredLevel < 80;
UPDATE item_template SET RequiredLevel = 30 WHERE RequiredLevel >= 80;
