import { std } from "tswow-stdlib"
import { spawnMultipleNPCWithTimer } from "../../functions/spawning-functions"
import { MODNAME } from "../../modname"

export let C2ClothArmorVendor01 = std.CreatureTemplates.create(MODNAME,'c2clothvendor01-creature',3562)
C2ClothArmorVendor01.Name.enGB.set('Theresa Thatcher')
C2ClothArmorVendor01.FactionTemplate.set(35)
C2ClothArmorVendor01.Models.clearAll()
C2ClothArmorVendor01.Models.addIds(17664)
spawnMultipleNPCWithTimer(C2ClothArmorVendor01.ID,0,0,[
    [-8914.242,172.291,22.407,2.4266]],10)

export let c2ClothItem01 = std.Items.create(MODNAME,'c2clothitem01',33588)
c2ClothItem01.Quality.setBlue()
c2ClothItem01.Price.set(27893,2665521,1)
export let c2ClothItem02 = std.Items.create(MODNAME,'c2clothitem02',33291)
c2ClothItem02.Quality.setBlue()
c2ClothItem02.Price.set(31893,3041262,1)
export let c2ClothItem03 = std.Items.create(MODNAME,'c2clothitem03',33585)
c2ClothItem03.Quality.setBlue()
c2ClothItem03.Price.set(45893,2912152,1)
export let c2ClothItem04 = std.Items.create(MODNAME,'c2clothitem04',33584)
c2ClothItem04.Quality.setBlue()
c2ClothItem04.Price.set(66893,1665952,1)
export let c2ClothItem05 = std.Items.create(MODNAME,'c2clothitem05',28525)
c2ClothItem05.Quality.setBlue()
c2ClothItem05.Price.set(52893,1995652,1)
export let c2ClothItem06 = std.Items.create(MODNAME,'c2clothitem06',28565)
c2ClothItem06.Quality.setBlue()
c2ClothItem06.Price.set(14893,2623121,1)
export let c2ClothItem07 = std.Items.create(MODNAME,'c2clothitem07',28570)
c2ClothItem07.Quality.setBlue()
c2ClothItem07.Price.set(19893,2114455,1)
export let c2ClothItem08 = std.Items.create(MODNAME,'c2clothitem08',28515)
c2ClothItem08.Quality.setBlue()
c2ClothItem08.Price.set(28893,1685953,1)
export let c2ClothItem09 = std.Items.create(MODNAME,'c2clothitem09',28804)
c2ClothItem09.Quality.setBlue()
c2ClothItem09.Price.set(24893,2122332,1)
export let c2ClothItem10 = std.Items.create(MODNAME,'c2clothitem10',28822)
c2ClothItem10.Quality.setBlue()
c2ClothItem10.Price.set(29892,1878522,1)
export let c2ClothItem11 = std.Items.create(MODNAME,'c2clothitem11',28602)
c2ClothItem11.Quality.setBlue()
c2ClothItem11.Price.set(11843,3445652,1)
export let c2ClothItem12 = std.Items.create(MODNAME,'c2clothitem12',28604)
c2ClothItem12.Quality.setBlue()
c2ClothItem12.Price.set(19893,5126232,1)

C2ClothArmorVendor01.addVendorItem(c2ClothItem01.ID,0,0,0)
C2ClothArmorVendor01.addVendorItem(c2ClothItem02.ID,0,0,0)
C2ClothArmorVendor01.addVendorItem(c2ClothItem03.ID,0,0,0)
C2ClothArmorVendor01.addVendorItem(c2ClothItem04.ID,0,0,0)
C2ClothArmorVendor01.addVendorItem(c2ClothItem05.ID,0,0,0)
C2ClothArmorVendor01.addVendorItem(c2ClothItem06.ID,0,0,0)
C2ClothArmorVendor01.addVendorItem(c2ClothItem07.ID,0,0,0)
C2ClothArmorVendor01.addVendorItem(c2ClothItem08.ID,0,0,0)
C2ClothArmorVendor01.addVendorItem(c2ClothItem09.ID,0,0,0)
C2ClothArmorVendor01.addVendorItem(c2ClothItem10.ID,0,0,0)
C2ClothArmorVendor01.addVendorItem(c2ClothItem11.ID,0,0,0)
C2ClothArmorVendor01.addVendorItem(c2ClothItem12.ID,0,0,0)
c2ClothItem01.RequiredLevel.set(7)
c2ClothItem02.RequiredLevel.set(9)
c2ClothItem03.RequiredLevel.set(11)
c2ClothItem04.RequiredLevel.set(10)
c2ClothItem05.RequiredLevel.set(12)
c2ClothItem06.RequiredLevel.set(9)
c2ClothItem07.RequiredLevel.set(9)
c2ClothItem08.RequiredLevel.set(7)
c2ClothItem09.RequiredLevel.set(10)
c2ClothItem10.RequiredLevel.set(12)
c2ClothItem11.RequiredLevel.set(10)
c2ClothItem12.RequiredLevel.set(9)

export let C2LeatherArmorVendor01 = std.CreatureTemplates.create(MODNAME,'c2leathervendor01-creature',3562)
C2LeatherArmorVendor01.Name.enGB.set('Theresa Thatcher')
C2LeatherArmorVendor01.FactionTemplate.set(35)
C2LeatherArmorVendor01.Models.clearAll()
C2LeatherArmorVendor01.Models.addIds(17664)
spawnMultipleNPCWithTimer(C2LeatherArmorVendor01.ID,0,0,[
    [-8961.963,210.574,22.407,5.25]],10)

export let c2LeatherItem01 = std.Items.create(MODNAME,'c2leatheritem01',28600)
c2LeatherItem01.Quality.setBlue()
c2LeatherItem01.Price.set(27893,1785632,1)
export let c2LeatherItem02 = std.Items.create(MODNAME,'c2leatheritem02',28601)
c2LeatherItem02.Quality.setBlue()
c2LeatherItem02.Price.set(31893,2112126,1)
export let c2LeatherItem03 = std.Items.create(MODNAME,'c2leatheritem03',28611)
c2LeatherItem03.Quality.setBlue()
c2LeatherItem03.Price.set(45893,1912132,1)
export let c2LeatherItem04 = std.Items.create(MODNAME,'c2leatheritem04',28606)
c2LeatherItem04.Quality.setBlue()
c2LeatherItem04.Price.set(66893,2326232,1)
export let c2LeatherItem05 = std.Items.create(MODNAME,'c2leatheritem05',28749)
c2LeatherItem05.Quality.setBlue()
c2LeatherItem05.Price.set(52893,1942532,1)
export let c2LeatherItem06 = std.Items.create(MODNAME,'c2leatheritem06',28745)
c2LeatherItem06.Quality.setBlue()
c2LeatherItem06.Price.set(14893,2147563,1)
export let c2LeatherItem07 = std.Items.create(MODNAME,'c2leatheritem07',28764)
c2LeatherItem07.Quality.setBlue()
c2LeatherItem07.Price.set(19893,3112132,1)
export let c2LeatherItem08 = std.Items.create(MODNAME,'c2leatheritem08',28773)
c2LeatherItem08.Quality.setBlue()
c2LeatherItem08.Price.set(28893,2269562,1)
export let c2LeatherItem09 = std.Items.create(MODNAME,'c2leatheritem09',28772)
c2LeatherItem09.Quality.setBlue()
c2LeatherItem09.Price.set(24893,3632362,1)
export let c2LeatherItem10 = std.Items.create(MODNAME,'c2leatheritem10',30886)
c2LeatherItem10.Quality.setBlue()
c2LeatherItem10.Price.set(29892,2269632,1)
export let c2LeatherItem11 = std.Items.create(MODNAME,'c2leatheritem11',30917)
c2LeatherItem11.Quality.setBlue()
c2LeatherItem11.Price.set(11843,2659563,1)
export let c2LeatherItem12 = std.Items.create(MODNAME,'c2leatheritem12',30898)
c2LeatherItem12.Quality.setBlue()
c2LeatherItem12.Price.set(19893,1886532,1)
export let c2LeatherItem13 = std.Items.create(MODNAME,'c2leatheritem12',30901)
c2LeatherItem13.Quality.setBlue()
c2LeatherItem13.Price.set(19893,2015151,1)


C2LeatherArmorVendor01.addVendorItem(c2LeatherItem01.ID,0,0,0)
C2LeatherArmorVendor01.addVendorItem(c2LeatherItem02.ID,0,0,0)
C2LeatherArmorVendor01.addVendorItem(c2LeatherItem03.ID,0,0,0)
C2LeatherArmorVendor01.addVendorItem(c2LeatherItem04.ID,0,0,0)
C2LeatherArmorVendor01.addVendorItem(c2LeatherItem05.ID,0,0,0)
C2LeatherArmorVendor01.addVendorItem(c2LeatherItem06.ID,0,0,0)
C2LeatherArmorVendor01.addVendorItem(c2LeatherItem07.ID,0,0,0)
C2LeatherArmorVendor01.addVendorItem(c2LeatherItem08.ID,0,0,0)
C2LeatherArmorVendor01.addVendorItem(c2LeatherItem09.ID,0,0,0)
C2LeatherArmorVendor01.addVendorItem(c2LeatherItem10.ID,0,0,0)
C2LeatherArmorVendor01.addVendorItem(c2LeatherItem11.ID,0,0,0)
C2LeatherArmorVendor01.addVendorItem(c2LeatherItem12.ID,0,0,0)
C2LeatherArmorVendor01.addVendorItem(c2LeatherItem13.ID,0,0,0)
c2LeatherItem01.RequiredLevel.set(7)
c2LeatherItem02.RequiredLevel.set(9)
c2LeatherItem03.RequiredLevel.set(11)
c2LeatherItem04.RequiredLevel.set(10)
c2LeatherItem05.RequiredLevel.set(12)
c2LeatherItem06.RequiredLevel.set(9)
c2LeatherItem07.RequiredLevel.set(9)
c2LeatherItem08.RequiredLevel.set(7)
c2LeatherItem09.RequiredLevel.set(10)
c2LeatherItem10.RequiredLevel.set(12)
c2LeatherItem11.RequiredLevel.set(10)
c2LeatherItem12.RequiredLevel.set(9)
c2LeatherItem13.RequiredLevel.set(7)

export let C2PlateArmorVendor01 = std.CreatureTemplates.create(MODNAME,'c2platevendor01-creature',3562)
C2PlateArmorVendor01.Name.enGB.set('Theresa Thatcher')
C2PlateArmorVendor01.FactionTemplate.set(35)
C2PlateArmorVendor01.Models.clearAll()
C2PlateArmorVendor01.Models.addIds(17664)
spawnMultipleNPCWithTimer(C2PlateArmorVendor01.ID,0,0,[
    [-8970.884,159.149,18.494,4.727]],10)

export let c2PlateItem01 = std.Items.create(MODNAME,'c2plateitem01',32232)
c2PlateItem01.Quality.setBlue()
c2PlateItem01.Price.set(27893,1998563,1)
export let c2PlateItem02 = std.Items.create(MODNAME,'c2plateitem02',32243)
c2PlateItem02.Quality.setBlue()
c2PlateItem02.Price.set(31893,2152321,1)
export let c2PlateItem03 = std.Items.create(MODNAME,'c2plateitem03',32236)
c2PlateItem03.Quality.setBlue()
c2PlateItem03.Price.set(45893,1415232,1)
export let c2PlateItem04 = std.Items.create(MODNAME,'c2plateitem04',32250)
c2PlateItem04.Quality.setBlue()
c2PlateItem04.Price.set(66893,1759632,1)
export let c2PlateItem05 = std.Items.create(MODNAME,'c2plateitem05',32279)
c2PlateItem05.Quality.setBlue()
c2PlateItem05.Price.set(52893,2885232,1)
export let c2PlateItem06 = std.Items.create(MODNAME,'c2plateitem06',32280)
c2PlateItem06.Quality.setBlue()
c2PlateItem06.Price.set(14893,3014151,1)
export let c2PlateItem07 = std.Items.create(MODNAME,'c2plateitem07',32512)
c2PlateItem07.Quality.setBlue()
c2PlateItem07.Price.set(19893,2996232,1)
export let c2PlateItem08 = std.Items.create(MODNAME,'c2plateitem08',32348)
c2PlateItem08.Quality.setBlue()
c2PlateItem08.Price.set(28893,5269562,1)
export let c2PlateItem09 = std.Items.create(MODNAME,'c2plateitem09',32341)
c2PlateItem09.Quality.setBlue()
c2PlateItem09.Price.set(24893,3632362,1)
export let c2PlateItem10 = std.Items.create(MODNAME,'c2plateitem10',32335)
c2PlateItem10.Quality.setBlue()
c2PlateItem10.Price.set(29892,2523262,1)
export let c2PlateItem11 = std.Items.create(MODNAME,'c2plateitem11',32365)
c2PlateItem11.Quality.setBlue()
c2PlateItem11.Price.set(11843,2162321,1)
export let c2PlateItem12 = std.Items.create(MODNAME,'c2plateitem12',32505)
c2PlateItem12.Quality.setBlue()
c2PlateItem12.Price.set(19893,1915232,1)
export let c2PlateItem13 = std.Items.create(MODNAME,'c2plateitem12',32483)
c2PlateItem13.Quality.setBlue()
c2PlateItem13.Price.set(19893,1756532,1)


C2PlateArmorVendor01.addVendorItem(c2PlateItem01.ID,0,0,0)
C2PlateArmorVendor01.addVendorItem(c2PlateItem02.ID,0,0,0)
C2PlateArmorVendor01.addVendorItem(c2PlateItem03.ID,0,0,0)
C2PlateArmorVendor01.addVendorItem(c2PlateItem04.ID,0,0,0)
C2PlateArmorVendor01.addVendorItem(c2PlateItem05.ID,0,0,0)
C2PlateArmorVendor01.addVendorItem(c2PlateItem06.ID,0,0,0)
C2PlateArmorVendor01.addVendorItem(c2PlateItem07.ID,0,0,0)
C2PlateArmorVendor01.addVendorItem(c2PlateItem08.ID,0,0,0)
C2PlateArmorVendor01.addVendorItem(c2PlateItem09.ID,0,0,0)
C2PlateArmorVendor01.addVendorItem(c2PlateItem10.ID,0,0,0)
C2PlateArmorVendor01.addVendorItem(c2PlateItem11.ID,0,0,0)
C2PlateArmorVendor01.addVendorItem(c2PlateItem12.ID,0,0,0)
C2PlateArmorVendor01.addVendorItem(c2PlateItem13.ID,0,0,0)
c2PlateItem01.RequiredLevel.set(7)
c2PlateItem02.RequiredLevel.set(9)
c2PlateItem03.RequiredLevel.set(11)
c2PlateItem04.RequiredLevel.set(10)
c2PlateItem05.RequiredLevel.set(12)
c2PlateItem06.RequiredLevel.set(9)
c2PlateItem07.RequiredLevel.set(9)
c2PlateItem08.RequiredLevel.set(7)
c2PlateItem09.RequiredLevel.set(10)
c2PlateItem10.RequiredLevel.set(12)
c2PlateItem11.RequiredLevel.set(10)
c2PlateItem12.RequiredLevel.set(9)
c2PlateItem13.RequiredLevel.set(7)