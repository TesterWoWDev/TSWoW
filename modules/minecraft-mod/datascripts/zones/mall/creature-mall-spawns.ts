import { addWaypoint, addWaypoints, removeQuests, setFaction, setLevel, setName, spawnMultipleNPCs, spawnNPC } from "../../functions/spawning-functions"

spawnNPC(6367,0,0,[-8265.167,-116.997,0.901,3.106])//crazy cat lady
    setFaction(6367,35)
spawnMultipleNPCs(2442,5,0,[[-8263.618,-130.911,0.292,3.539],[-8266.467,-137.773,0.342,2.008]])//crazy cat lady cows
spawnMultipleNPCs(6368,10,0,[[-8277.286,-116.715,0.340,1.084],[-8276.010,-132.329,0.779,1.050],[-8264.912,-135.450,0.312,0.733],[-8251.872,-124.874,2.546,1.889],[-8258.828,-108.123,0.274,2.270],[-8276.425,-107.866,1.566,5.680]])//crazy cat lady cats
spawnNPC(23754,0,0,[-8373.211,-166.998,0.017,0.698])//murloc
    setName(23754,'Remmy \\"The Murky Murloc\\" Jones')
spawnNPC(3561,0,0,[-8297.441,-261.479,-5.098,3.122])// Poison Supplies
    setFaction(3561,35)
    setLevel(3561,20)
//start zone vendors
spawnNPC(1213,0,0,[-8702.677,-64.117,31.134,1.227])
    setFaction(1213,35)
spawnNPC(190,0,0,[-8692.114,-63.498,31.134,2.118])
    setFaction(190,35)
spawnNPC(152,0,0,[-8695.802,-63.248,31.134,1.568])
    setFaction(152,35)
spawnNPC(78,0,0,[-8699.836,-63.277,31.134,1.627])
    setFaction(78,35)
//end start zone vendors
//trainers
spawnNPC(17252,0,0,[-8501.809,-198.425,-6.026,4.009])//Warlock
    setFaction(17252,35)
    setLevel(17252,20)
spawnNPC(9980,0,0,[-8448.728,-197.267,0.722,0.0435]) //Stable Master
    setFaction(9980,35)
    setLevel(9980,20)
spawnNPC(2878,0,0,[-8328.205,-33.192,0.540,3.521])//Pet Trainer
    setFaction(2787,35)
    setLevel(2787,20)
spawnNPC(1231,0,0,[-8333.356,-39.987,0.547,0.330]) //Hunter
    setFaction(1231,35)
    setLevel(1231,20)
spawnNPC(3599,0,0,[-8284.079,-261.396,-5.097,3.968])//Rogue
    setFaction(3599,35)
    setLevel(3599,20)
spawnNPC(23128,0,0,[-8402.127,-153.164,0.805,4.701]) //Paladin
    setFaction(23128,35)
    setLevel(23128,20)
spawnNPC(376,0,0,[-8209.984,-204.098,3.408,3.175]) //Priest
    setFaction(376,35)
    setLevel(376,20)
spawnNPC(3036,0,0,[-8278.701,83.673,0.122,5.192]) //Druid
    setFaction(3036,35)
    setLevel(3036,20)
spawnNPC(1228,0,0,[-8298.356,26.519,12.764,5.507]) //Mage
    setFaction(1228,35)
    setLevel(1228,20)
spawnNPC(4565,0,0,[-8499.998,-195.186,-6.026,4.293]) //Warlock
    setFaction(4565,35)
    setLevel(4565,20)
spawnNPC(3353,0,0,[-8431.496,-285.787,12.884,1.567]) //Warrior
    setFaction(3353,35)
    setLevel(3353,20)
spawnNPC(20407,0,0,[-8366.640,-265.466,10.033,1.447]) //Shaman
    setFaction(20407,35)
    setLevel(20407,20)
//end of trainers
spawnNPC(6735,0,0,[-8484.953,-201.464,1.141,0.114])//innkeeper
    setFaction(6735,35)
    removeQuests(6735)
spawnMultipleNPCs(32545,0,0,[[-8448.821,-290.646,12.556,1.241673],[-8454.936,-288.826,12.604,1.247980],[-8460.871,-286.662,12.489,1.232272],[-8468.846,-284.679,11.540,1.614707],[-8467.742,-285.981,11.810,1.599000],[-8469.701,-286.037,11.320,1.599000]])//training dummy
    setLevel(32545,1)
spawnMultipleNPCs(385,10,0,[[-8247.038,-161.718,0.689,3.551],[-8257.065,-178.713,0.597,1.783],[-8264.946,-92.037,0.242,2.670]])//horse
spawnMultipleNPCs(905,10,0,[[-8368.467,-177.513,-7.155,3.55],[-8370.414,-185.265,-8.868,3.621],[-8374.633,-181.112,-4.493,3.147],[-8374.742,-164.985,-4.493,3.147],[-8366.719,-179.946,-6.378,3.171],[-8373.545,-189.623,-7.256,1.964],[-8379.233,-177.452,-4.29,5.787],[-8370.930,-183.825,-12.522,1.770],[-8363.018,-184.564,-5.241,2.410]])//sharptooth frenzy
    setLevel(905,3)
    setFaction(905,32)
spawnMultipleNPCs(26816,0,0,[[-8260.887,2.013,9.905,5.782],[-8256.459,8.896,9.851,5.711],[-8255.001953,2.961,9.627,5.719]])//focus wizard
    setLevel(26816,20)
    setFaction(26816,35)
spawnNPC(31454,0,0,[-8300.252,16.922,47.169,0.924])//bound water elemental
    setFaction(31454,475)
    setLevel(31454,12)
    setName(31454,'Bound Water Elemental')
 spawnMultipleNPCs(1889,5,0,[[-8298.559,19.434,47.136,0.970],[-8298.939,41.677,47.233,5.132],[-8310.538,25.416,47.227,0]])//Dalaran Wizard
    setFaction(1889,35)
spawnNPC(5794,0,0,[-8210.519,-198.697,3.408,4.088])//Thurmonde the Devout
    setFaction(5794,35)
spawnMultipleNPCs(14284,0,0,[[-8285.886,-203.843,0.828,1.543],[-8298.244,-203.508,0.760,1.543]])//Stormpike Battleguard
    setLevel(14284,20)
    setFaction(14284,35)
