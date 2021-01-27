import { SQL } from 'wotlkdata';

SQL.Databases.auth.write('CREATE TABLE IF NOT EXISTS `vip_list` (`accID` int(11) NOT NULL,`multiplier` float(0) NOT NULL,PRIMARY KEY (`accID`))');
