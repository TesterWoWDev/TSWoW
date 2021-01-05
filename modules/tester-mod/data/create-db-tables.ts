import { SQL } from 'wotlkdata';

SQL.Databases.auth.write('CREATE TABLE IF NOT EXISTS `vip_list` (`accID` int(11) NOT NULL,`multiplier` int(11) NOT NULL,PRIMARY KEY (`accID`))');
