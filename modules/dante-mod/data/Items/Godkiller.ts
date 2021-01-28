import { std } from "tswow-stdlib"

const godkiller = std.Items.create('opsword', 'testsword', 36526)
godkiller.Name.enGB.set('Dontes Godkiller')
godkiller.Delay.set(1500)
godkiller.Damage.addPhysical(2740150,3742450)
godkiller.RequiredLevel.set(1)
godkiller.Sheath.setTwoHandedWeapon()
const bloodelf = std.Items.load(42334)
godkiller.Visual.copyFrom(23499);
godkiller.Quality.setPurple()
godkiller.ItemLevel.set(200)







