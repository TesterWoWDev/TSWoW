import { std } from "tswow-stdlib";
const test_bow = std.Items.create("TestModD", "cocaine-bow", 5748)
test_bow.Name.enGB.set("Cocaine Bow")
test_bow.RequiredLevel.set(1)
test_bow.Quality.setPurple()
test_bow.Stats.addAgility(17)
test_bow.Damage.addFire(5,30)
test_bow.Delay.set(5)
console.log(test_bow.ID)



