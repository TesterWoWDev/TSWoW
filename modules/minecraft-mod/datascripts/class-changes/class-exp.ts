import { SQL } from "wotlkdata";

SQL.player_xp_for_level.filter({}).forEach((value, index, array) => {
    if (index <= 20) value.Experience.set(value.Experience.get() * 3.25);
});
