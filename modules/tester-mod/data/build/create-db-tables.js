"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wotlkdata_1 = require("wotlkdata");
wotlkdata_1.SQL.Databases.auth.write('CREATE TABLE IF NOT EXISTS `vip_list` (`accID` int(11) NOT NULL,`multiplier` float(0) NOT NULL,PRIMARY KEY (`accID`))');
//# sourceMappingURL=create-db-tables.js.map