CREATE TABLE IF NOT EXISTS `invasions_spawners` (`entry` int(11) DEFAULT NULL,`x` float DEFAULT NULL,`y` float DEFAULT NULL,`z` float DEFAULT NULL,`o` float DEFAULT NULL);
CREATE TABLE IF NOT EXISTS `invasions_bosses` (`tier` int(11) DEFAULT NULL,`entry` int(11) DEFAULT NULL);
CREATE TABLE IF NOT EXISTS `invasions` (`eventID` int(11) DEFAULT NULL,`isCreature` int(11) DEFAULT NULL,`entry` int(11) DEFAULT NULL,`x` float DEFAULT NULL,`y` float DEFAULT NULL,`z` float DEFAULT NULL,`o` float DEFAULT NULL);
CREATE TABLE IF NOT EXISTS `minecraft_recipes` (`pos1` int(11) DEFAULT NULL,`pos2` int(11) DEFAULT NULL,`pos3` int(11) DEFAULT NULL,`pos4` int(11) DEFAULT NULL,`pos5` int(11) DEFAULT NULL,`pos6` int(11) DEFAULT NULL,`pos7` int(11) DEFAULT NULL,`pos8` int(11) DEFAULT NULL,`pos9` int(11) DEFAULT NULL,`req1` int(11) DEFAULT NULL,`cnt1` int(11) DEFAULT NULL,`req2` int(11) DEFAULT NULL,`cnt2` int(11) DEFAULT NULL,`req3` int(11) DEFAULT NULL,`cnt3` int(11) DEFAULT NULL,`req4` int(11) DEFAULT NULL,`cnt4` int(11) DEFAULT NULL,`req5` int(11) DEFAULT NULL,`cnt5` int(11) DEFAULT NULL,`req6` int(11) DEFAULT NULL,`cnt6` int(11) DEFAULT NULL,`req7` int(11) DEFAULT NULL,`cnt7` int(11) DEFAULT NULL,`req8` int(11) DEFAULT NULL,`cnt8` int(11) DEFAULT NULL,`req9` int(11) DEFAULT NULL,`cnt9` int(11) DEFAULT NULL,`craftID` int(11) DEFAULT NULL, `craftCount` int(11) DEFAULT NULL);