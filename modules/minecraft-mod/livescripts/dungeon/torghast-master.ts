import { spellChoiceID, spellChoice, spellChoices } from "../../shared/Messages"

const baseSpells: TSArray<TSArray<uint32>> = <TSArray<TSArray<uint32>>>[//spellID,rarity,learnType(0 passive stacking, 1 passive non stack, 2 learn spell)
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increaseddamage1-spell"), 2, 0],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increasedsp1-spell"), 2, 0],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increasedap1-spell"), 3, 0],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increasedstamina1-spell"), 4, 0],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increasedstrength1-spell"), 1, 0],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increasedintellect1-spell"), 2, 0],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increasedagility1-spell"), 3, 0],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increasedcrit1-spell"), 4, 0],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increasedresist1-spell"), 1, 0],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "rangedattackspeed1-spell"), 2, 1],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "critchance-spell"), 3, 0],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "critdamage-spell"), 4, 0],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "grapple-spell"), 4, 2],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "immortalityheal-spell"), 3, 0],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "immortalitymana-spell"), 3, 0],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "chanceformana-spell"), 3, 0],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "chanceforhealth-spell"), 5, 1],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "chanceroarspell-spell"), 4, 1],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "reflectiveshell-spell"), 3, 0],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "movementspeed-spell"), 3, 0],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "reducedcrits-spell"), 3, 0],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "necromancersumm-spell"), 5, 1],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "shadowyfigure-spell"), 3, 1],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increasedhealth1-spell"), 1, 0],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "fortunatespell-spell"), 5, 1],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "chanceformana02-spell"), 3, 1],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "butterstick-spell"), 5, 1],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "reap-spell"), 5, 1],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "furyofodin-spell"), 5, 1],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "stoned-spell"), 5, 1],
]
const baseSpellDescriptions = [
    "Total Damage dealt increased by 15%.",
    "Total Spell Power increased by 10%.",
    "Total Attack Power increased by 10%.",
    "Stamina increased by 50.",
    "Strength increased by 50.",
    "Intellect increased by 50.",
    "Agility increased by 50.",
    "Critical Strike increased by 50.",
    "All resistances increased by 10.",
    "Increases ranged attack speed by 25%. Does not stack.",
    "Increases spell crit chance by 10%.",
    "Increases crit damage by 10%.",
    "Teaches you Grapple. Grapple allows you to grapple to a nearby location.",
    "Allows you to regenrate 2% hp every 5 seconds.",
    "Allows you to retain 50% mana regen while casting.",
    "Every 5 seconds, returns 50 mana to everyone within 30 yards of the mana conduit.",
    "Attacks and spells have a chance to leech 1000-1700 health from the enemy and transfer it to the caster.",
    "Attacks and spells have a chance to cast an echoing roar, knocking back all enemies in a 15 yard cone and dealing substantial damage..",
    "Reflects 10% of all spell damage to attackers and deals 130 damage on melee attacks recieved. This effect stacks.",
    "Increases movement speed by 3%. This effect stacks.",
    "Reduces chance to suffer a critical hit by 10%. This effect stacks.",
    "Attacks and spells have a chance to summon reanimated weaponry to assist you in battle.",
    "Reduces damage taken by area of effect attacks by 30%. This effect stacks.",
    "Increases the total health value of your character by 15%. This effect stacks.",
    "Attacks and spells have a chance to generate additional Torghast Inside Tokens which can be used to purchase additional items in the store.",
    "Attacks and spells have a chance to restore 1000-1700 mana.",
    "Coat yourself in a stick of butter, increasing your ability to dodge incoming attacks by 15%.",
    "Attacks and spells have a chance to reap the life from your target, instantly destroying their soul and generating an anima power.",
    "Attacks and spells have a chance to incur the fury of Odin, dealing 1400 to 2918 damage to up to 5 enemies.",
    "Attacks and spells have a chance to petrify the enemy in stone, stunning them for 10 seconds and preventing attacks.",
]

const classSpells: TSArray<TSArray<TSArray<uint32>>> = <TSArray<TSArray<TSArray<uint32>>>>[//spellID,rarity,learnType(0 passive, 1 learn spell)
    <TSArray<TSArray<uint32>>>[<TSArray<uint32>>[0]],
    <TSArray<TSArray<uint32>>>[//warrior
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "warriorrendincrease-spell"), 1, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "ragegeneration-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "reducedragecost-spell"), 3, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "improvingcleave-spell"), 1, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "thunderingclap-spell"), 5, 1],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "warbringer-spell"), 4, 1],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "terribletrio-spell"), 5, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "blazingspeed-spell"), 5, 1],
    ],
    <TSArray<TSArray<uint32>>>[//paladin
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "judgementmodifier-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "holydamage-spell"), 3, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "sealofjustice-spell"), 3, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "sealoflight-spell"), 3, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "sealofwisdom-spell"), 3, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "divinepower-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "stormingpower-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "crusadermight-spell"), 2, 0],
    ],
    <TSArray<TSArray<uint32>>>[//hunter
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "endurance-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "pierced-spell"), 1, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increasedaimshot-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "arcanepotency-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "volleybuff-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "aimedshotbuff-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "punishingblows-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "arcaneinsurgence-spell"), 5, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "dynamite-spell"), 5, 0],
    ],
    <TSArray<TSArray<uint32>>>[//rogue
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "vigorous-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "sinsitercalling-spell"), 1, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "traitorcalling-spell"), 1, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "opportunity-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "deception-spell"), 3, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "opportunity02-spell"), 5, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "mastertechniques-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "hemostrike-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "sinistercausebleed-spell"), 5, 1],
    ],
    <TSArray<TSArray<uint32>>>[//priest
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "renewheal-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "shadowpower-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "devouringpower-spell"), 3, 0],
    ],
    <TSArray<TSArray<uint32>>>[//dk
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "ancienttechniques-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "unholypower-spell"), 3, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "deadliestcoil-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "rapiddecay-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "deathlydecay-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "bloodierstrike-spell"), 2, 0],
    ],
    <TSArray<TSArray<uint32>>>[//shaman
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "fulmination-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "elementalcall-spell"), 4, 0],
    ],
    <TSArray<TSArray<uint32>>>[//mage
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "polymorphbuff-spell"), 5, 1],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "icepiercing-spell"), 3, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "icelanceuberproc-spell"), 5, 1],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "arcticswirl-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "firepower-spell"), 3, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "frozenhaste-spell"), 3, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "polyhaste-spell"), 3, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "pyrohaste-spell"), 3, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "inferno-spell"), 5, 0],
    ],
    <TSArray<TSArray<uint32>>>[//warlock
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "empoweredcorruption-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "chaoticreach01-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "chaoticreach02-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "echoingshadows-spell"), 3, 1],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "impmother-spell"), 3, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "impoverlord-spell"), 5, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "demotactics-spell"), 2, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "emberstorm-spell"), 3, 0],
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "everlastingflame-spell"), 3, 0],
    ],
    <TSArray<TSArray<uint32>>>[<TSArray<uint32>>[0]],//blank
    <TSArray<TSArray<uint32>>>[//druid
        <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increasedhealth1-spell"), 1, 0],
    ],
]
const classSpellDescriptions = [
    //blank
    ["0blank"],
    //warrior
    [
    "Increases the damage dealt by rend by 50%. Stacks.",
    "Increases Rage generated from attacks by 25%. Stacks.",
    "Reduces the rage cost of your offensive abilities by 3. Stacks.",
    "Increases the damage dealt by your cleave by 100%.",
    "Casting thunder clap now calls down a strike from the heavens, consecrating the area in lightning for 15 seconds.",
    "Your Charge, Intercept and Intervene abilities are now usable while in combat and in any stance.",   
    "Increases damage of rend, thunder clap and heroic strike by 100%.",
    "Every time you cast charge, you increase your movement speed by 1%, stacking up to 75 times.",
    ],
    //paladin
    [
    "Increases the range of your Judgements by 10 yards. Stacks.",
    "All attacks against you have a 10% chance to cause half damage.",
    "Fills the Paladin with the spirit of justice, giving each melee attack a chance to stun.",
    "Fills the Paladin with divine light, giving each melee attack a chance to heal the Paladin.",
    "Fills the Paladin with divine wisdom, giving each melee attack a chance to restore 2% of the paladin's maximum mana.",
    "Increases the damage of your Judgement by 75%.",
    "Increases the damage of your Divine Storm by 75%.",
    "Increases the damage of your Crusader Strike by 75%.",
    ],
    //hunter
    [
    "Increases the health of your pet by 25% and your total health by 5%. Stacks.",
    "Your critical Aimed, Steady and Chimera Shots cause the target to bleed.",
    "Casting steady shot has a chance to grant various proc chances.",
    "Increases the damage of your Arcane Shot by 50%.",
    "Increases the damage of your Volley by 50%.",
    "Increases the damage of your Aimed Shot by 50%.",
    "Increases the damage of your Mongoose Bite and Raptor Strike by 150%.",
    "Arcane Shot now applies a stacking 40 damage dot, while simultaneously increasing the casters damage by 1%.",
    "Increases the damage done by your Explosive Shot, Explosive Trap and Immolation Trap by 50%.",
    ],
    //rogue
    [
    "Increases total energy by 50. Stacks.",
    "Increases damage dealt by Sinister Strike by 50%. Stacks.",
    "Increases damage dealt by Backstab by 50%. Stacks.",
    "Increases damage dealt by Ambush by 50%. Stacks.",
    "Increases the effectiveness of your stealth. Stacks.",
    "Increases damage dealt by Ambush by 150%. Stacks.",
    "Increases damage dealt by Eviscerate by 50%. Stacks.",
    "Increases damage dealt by Rupture by 50%. Stacks.",
    "Your sinister strike now aims for the heart, giving it a chance to automatically apply rupture to the target. Rupture benefits from any modifiers you have.",
    ],
    //priest
    [
    "Increases the healing power of your renew by 50%.",
    "Increases the damage of shadow word pain by 75%.",
    "Increases the damage of devouring plague by 50%.",
    ],
    //dk
    [
    "Increases your maximum runic power by 50.",
    "Increases your critical strike damage bonus by your Plague Strike and Scourge Strike by 50%",
    "Increases the damage and healing of your death coil by 150%.",
    "Decreases the cooldown of your death and decay by 5 seconds.",
    "Increases the damage dealt by your death and decay ability by 50%.",
    "Increases the healing of your death strike by 50%.",
    ],
    //sham
    [
    "Increases the damage done by your Lightning Bolt, Chain Lightning, Thunderstorm, Lava Burst and Shock spells by 30%",
    "Increases the range of your Lightning Bolt, Chain Lightning, Fire Nova, and Lava Burst spells by 5 yards.",
    ],
    //mage
    [
    "Casting Polymorph now applies Master of the Herd which increases all damage dealt by the caster by 50% for 10 seconds.",
    "Increases the damage of all of your frost spells by 50%.",
    "Ice lance has a 5% chance to deal damage to all enemies within 80 yards. Dealing triple damage to frozen targets.",
    "Increases the damage of cone of cold by 100%.",
    "Increases the damage of all of your fire spells by 50%.",
    "Decreases the cast time of your frostbolt by 0.25 seconds.",
    "Decreases the cast time of your polymorph by 0.25 seconds.",
    "Decreases the cast time of your pyroblast by 0.25 seconds.",
    "Increases the damage and cast time of your flamestrike by 500%.",
    ],
    //lock
    [
    "Increases the damage of your corruption spell by 50%.",
    "Increases the range of your shadow bolt spell by 20%.",
    "Increases the range of your immolation spell by 20%.",
    "Casting shadow bolt has a 25% chance to cast a second shadow bolt at the enemy causing 500 Damage.",
    "Increases the damage of your pets firebolt spell by 100%.",
    "Increases the damage of your pets firebolt spell by 1000%.",
    "Increases the critical strike chance of your pets by 15%.",
    "Decreases the cast time of your incinerate ability by 0.3 seconds.",
    "Increases the periodic damage of your immolate spell by 50%.",
    ],
    //blank
    ["10blank"],
    //druid
    [
    "Increases health by 2%",
    ],
]

const tormentAndBlessingSpells: TSArray<TSArray<uint32>> = <TSArray<TSArray<uint32>>>[
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increasedhealth1-spell"), 0],
]

export const prestigeSpell: uint32 = GetID("Spell", "minecraft-mod", "mapprestige-spell")
//end of config
const spellIDToType: TSDictionary<uint32, uint32> = CreateDictionary<uint32, uint32>({
    1: 1
});
class torghastBuffs {
    currentBuffs: TSArray<uint32> = []
    currentBuffsType: TSArray<uint32> = []
    currentBuffsCount: TSArray<uint32> = []

    currentTormentsAndBlessings: TSArray<uint32> = []
    currentTormentsAndBlessingsType: TSArray<uint32> = []
    currentTormentsAndBlessingsCount: TSArray<uint32> = []

    currentChoiceBuffs: TSArray<uint32> = []
}

export function torghastBuffSystem(events: TSEvents) {
    setupTables()
    events.CreatureID.OnCreate(GetID("creature_template", "minecraft-mod", "torghast-orb"), (creature, cancel) => {
        creature.GetCollisions().Add(ModID(), "hungergames-collision", 2, 500, 0, (self,collided,cancel,entry) => {
            if (collided.IsPlayer()) {
                let player = collided.ToPlayer()
                let creature = self.ToCreature()
                if (player.IsInGroup()) {
                    let arr = creature.GetJsonArray('usedBy', new TSJsonArray())
                    for (let i = 0; i < arr.length; i++) {
                        if (arr.GetNumber(i) == player.GetGUIDLow()) {
                            return
                        }
                    }
                    if (givePlayerChoiceOfBuffs(player)) {
                        arr.PushNumber(player.GetGUIDLow())
                        creature.SetJsonArray('usedBy', arr)
                    }
                    if (arr.length == player.GetGroup().GetMembersCount()) {
                        creature.DespawnOrUnsummon(0)
                    }
                } else {
                    if (givePlayerChoiceOfBuffs(player)) {
                        creature.DespawnOrUnsummon(0)
                    }
                }
            }
        })
    })

    events.Player.OnSay((player, msg, type, lang) => {
        if (msg.get().startsWith("#aa")) {
            if (!givePlayerChoiceOfBuffs(player)) {
                player.SendAreaTriggerMessage('Choose your ability first!')
            }
        }
    })

    events.GameObjectID.OnGossipHello(GetID("gameobject_template", "minecraft-mod", "torghast-chest"), (obj, player, cancel) => {
        player.SpawnCreature(GetID("creature_template", "minecraft-mod", "torghast-orb"), obj.GetX(), obj.GetY(), obj.GetZ(), obj.GetO(), 8, 0)
        obj.Despawn()
    })

    events.GameObjectID.OnGossipHello(GetID("gameobject_template", "minecraft-mod", "torghastendobj"), (obj, player, cancel) => {
        player.GossipClearMenu()
        player.GossipMenuAddItem(0, 'Go again', obj.GetGUIDLow(), 0, false, '', 0)
        player.GossipMenuAddItem(0, 'Escape', obj.GetGUIDLow(), 1, false, '', 0)
        player.GossipSendMenu(5, obj, 1)
    })

    events.Player.OnLogout((player) => {
        removePlayerBuffs(player)
    })

    events.Player.OnSay((player, msg,type, lang ) => {
        if (msg.get().startsWith("#1")) {
            playerChoseBuff(player, 2)
            applyPlayerBuffs(player)
        } else if (msg.get().startsWith("#2")) {
            playerChoseBuff(player, 1)
            applyPlayerBuffs(player)
        } else if (msg.get().startsWith("#3")) {
            playerChoseBuff(player, 0)
            applyPlayerBuffs(player)
        }
    })

    events.CustomPacketID.OnReceive(spellChoiceID, (opcode, packet, player) => {
        let pkt = new spellChoice(0)
        pkt.read(packet)
        playerChoseBuff(player, pkt.choice)
        applyPlayerBuffs(player)
    })
}

export function rewardGroup(player: TSPlayer) {
    despawnMap(player)
    let rewardID: uint32 = player.GetMap().GetUInt('rewardID', GetID("item_template", "minecraft-mod", "torghast-end-currency"))
    let insideID: uint32 = player.GetMap().GetUInt('dropID', GetID("item_template", "minecraft-mod", "torghast-inside-currency"))
    if (player.IsInGroup()) {
        let group = player.GetGroup().GetMembers()
        for (let i = 0; i < group.length; i++) {
            let curPrestige: uint32 = group[i].GetUInt('prestige', 0)
            let rewCount: uint32 = <uint32>(curPrestige * curPrestige) / 5 + curPrestige
            group[i].SendAreaTriggerMessage('You were rewarded with ' + rewCount + ' of anima power for your prowess')
            group[i].AddItem(rewardID, rewCount)
            group[i].SetUInt('prestige', 0)
            group[i].RemoveItemByEntry(insideID, 999999)
            group[i].Teleport(725, -8750.45, -74.64, 31, 0)
        }
    } else {
        let curPrestige: uint32 = player.GetUInt('prestige', 0)
        player.AddItem(rewardID, <uint32>(curPrestige * curPrestige) / 5)
        player.SetUInt('prestige', 0)
        player.RemoveItemByEntry(insideID, 999999)
        player.Teleport(725, -8750.45, -74.64, 31, 0)
    }
}

export function resetGroup(player: TSPlayer, playerSpawnCoords: TSDictionary<string, float>, miniMobSpawnCoords: TSArray<TSDictionary<string, float>>, miniMobIDs: TSArray<uint32>, mobSpawnCoords: TSArray<TSDictionary<string, float>>, mobIDs: TSArray<uint32>, miniBossSpawnCoords: TSArray<TSDictionary<string, float>>, miniBossIDs: TSArray<uint32>, bossSpawnCoords: TSArray<TSDictionary<string, float>>, bossIDs: TSArray<uint32>, vendorSpawnCoords: TSDictionary<string, float>, chestSpawnCoords: TSArray<TSDictionary<string, float>>, vaseSpawnCoords: TSArray<TSDictionary<string, float>>) {
    let map = player.GetMap()
    let prestige = map.GetUInt('prestige', 0) + 1
    map.SetUInt('prestige', prestige)
    if (prestige % 5 == 0) {
        if (player.IsInGroup()) {
            let pGroup = player.GetGroup().GetMembers()
            for (let i = 0; i > pGroup.length; i++) {
                addTormentOrBlessing(pGroup[i])
                applyPlayerBuffs(pGroup[i])
            }
        } else {
            addTormentOrBlessing(player)
            applyPlayerBuffs(player)
        }
    }
    despawnMap(player)
    if (player.IsInGroup()) {
        teleportRandomStart(player.GetGroup().GetMembers(), playerSpawnCoords)
    } else {
        teleportRandomStart([player], playerSpawnCoords)
    }
    spawnMap(map, miniMobSpawnCoords, miniMobIDs, mobSpawnCoords, mobIDs, miniBossSpawnCoords, miniBossIDs, bossSpawnCoords, bossIDs, vendorSpawnCoords, chestSpawnCoords, vaseSpawnCoords)
}

function teleportRandomStart(players: TSPlayer[], playerSpawnCoords: TSDictionary<string, float>) {
    let prestige = players[0].GetMap().GetUInt('prestige', 0)
    for (let i = 0; i < players.length; i++) {
        players[i].SetUInt('prestige', players[i].GetUInt('prestige', 0) + 1)
        if (prestige > 0) {
            players[i].SendAreaTriggerMessage("You are on Prestige " + prestige)
        }
        players[i].Teleport(playerSpawnCoords['m'], playerSpawnCoords['x'], playerSpawnCoords['y'], playerSpawnCoords['z'], playerSpawnCoords['o'])
    }
}

function despawnMap(player: TSPlayer) {
    let creatures = player.GetCreaturesInRange(20000, 0, 0, 0)
    for (let i = 0; i < creatures.length; i++) {
        creatures[i].DespawnOrUnsummon(3000)
    }
    let gobs = player.GetGameObjectsInRange(20000, 0, 0)
    for (let i = 0; i < gobs.length; i++) {
        gobs[i].Despawn()
    }
}

export function spawnMap(map: TSMap, miniMobSpawnCoords: TSArray<TSDictionary<string, float>>, miniMobIDs: TSArray<uint32>, mobSpawnCoords: TSArray<TSDictionary<string, float>>, mobIDs: TSArray<uint32>, miniBossSpawnCoords: TSArray<TSDictionary<string, float>>, miniBossIDs: TSArray<uint32>, bossSpawnCoords: TSArray<TSDictionary<string, float>>, bossIDs: TSArray<uint32>, vendorSpawnCoords: TSDictionary<string, float>, chestSpawnCoords: TSArray<TSDictionary<string, float>>, vaseSpawnCoords: TSArray<TSDictionary<string, float>>,) {
    let c = map.SpawnCreature(GetID("creature_template", "minecraft-mod", "torghast-vendor"), vendorSpawnCoords['x'], vendorSpawnCoords['y'], vendorSpawnCoords['z'], vendorSpawnCoords['o'], 180000)
    //chests
    for (let i = 0; i < chestSpawnCoords.length; i++) {
        c.SummonGameObject(GetID("gameobject_template", "minecraft-mod", "torghast-chest"), chestSpawnCoords[i]['x'], chestSpawnCoords[i]['y'], chestSpawnCoords[i]['z'], chestSpawnCoords[i]['o'], 0)
    }
    //vases
    for (let i = 0; i < vaseSpawnCoords.length; i++) {
        map.SpawnCreature(GetID("creature_template", "minecraft-mod", "torghast-vase"), vaseSpawnCoords[i]['x'], vaseSpawnCoords[i]['y'], vaseSpawnCoords[i]['z'], vaseSpawnCoords[i]['o'], 0)
            .SetScale(Math.random() / 4 + 0.15)
    }
    //minimobs
    for (let i = 0; i < miniMobSpawnCoords.length; i++) {
        for (let j = 0; j < getRandomInt(3); j++) {
            map.SpawnCreature(miniMobIDs[getRandomInt(miniMobIDs.length)], miniMobSpawnCoords[i]['x'], miniMobSpawnCoords[i]['y'], miniMobSpawnCoords[i]['z'], miniMobSpawnCoords[i]['o'], 0).MoveRandom(30)
        }
    }
    //mobs
    for (let i = 0; i < mobSpawnCoords.length; i++) {
        spawnFormation(map, mobSpawnCoords.get(i), mobIDs, mobIDs.length)
    }
    //minibosses
    for (let i = 0; i < miniBossSpawnCoords.length; i++) {
        map.SpawnCreature(miniBossIDs[getRandomInt(miniBossIDs.length)], miniBossSpawnCoords[i]['x'], miniBossSpawnCoords[i]['y'], miniBossSpawnCoords[i]['z'], miniBossSpawnCoords[i]['o'], 0)
    }
    //bosses
    for (let i = 0; i < bossSpawnCoords.length; i++) {
        if (i == bossSpawnCoords.length - 1) {//last boss
            spawnBoss(map, bossIDs[getRandomInt(bossIDs.length)], bossSpawnCoords.get(i), true)
        } else {
            spawnBoss(map, bossIDs[getRandomInt(bossIDs.length)], bossSpawnCoords.get(i), false)
        }
    }
}

function spawnBoss(map: TSMap, bossID: number, sPos: TSDictionary<string, number>, lastBoss: boolean) {
    let c = map.SpawnCreature(bossID, sPos['x'], sPos['y'], sPos['z'], sPos['o'], 0)
    if (lastBoss) {
        c.SetUInt('lastBoss', 1)
    } else {
        c.SetUInt('lastBoss', 0)
    }
}

function spawnFormation(map: TSMap, sPos: TSDictionary<string, float>, mobIDs: TSArray<uint32>, mobCount: uint32) {
    //forward is x+cosRad y+sinRad
    //backwards is x-cosRad y-sinRad
    //left is x+sinRad y+cosRad
    //right is x-sinRad y-cosRad
    let cosRad = 3 * Math.cos(sPos['o'])
    let sinRad = 3 * Math.sin(sPos['o'])
    let formationNumber = getRandomInt(10)
    map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'], sPos['y'], sPos['z'], sPos['o'], 0)
    switch (formationNumber) {
        case 0:
            //0x0
            //0x0
            //000
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + cosRad, sPos['y'] + sinRad, sPos['z'], sPos['o'], 0)
            break;
        case 1:
            //000
            //xx0
            //000
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad, sPos['y'] + cosRad, sPos['z'], sPos['o'], 0)
            break;
        case 2:
            //000
            //0xx
            //000
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            break;
        case 3:
            //0x0
            //0x0
            //0x0
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + cosRad, sPos['y'] + sinRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - cosRad, sPos['y'] - sinRad, sPos['z'], sPos['o'], 0)
            break;
        case 4:
            //000
            //xxx
            //000
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad, sPos['y'] + cosRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            break;
        case 5:
            //000
            //0x0
            //x0x
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad - cosRad, sPos['y'] + cosRad - sinRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            break;
        case 6:
            //x0x
            //0x0
            //000
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad + cosRad, sPos['y'] + cosRad + sinRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            break;
        case 7:
            //0x0
            //xxx
            //000
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + cosRad, sPos['y'] + sinRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad, sPos['y'] + cosRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            break;
        case 8:
            //000
            //xxx
            //0x0
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - cosRad, sPos['y'] - sinRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad, sPos['y'] + cosRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            break;
        case 9:
            //x0x
            //xxx
            //000
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad, sPos['y'] + cosRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad + cosRad, sPos['y'] + cosRad + sinRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad + cosRad, sPos['y'] - cosRad + sinRad, sPos['z'], sPos['o'], 0)
            break;
        case 10:
            //000
            //xxx
            //x0x
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad, sPos['y'] + cosRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad - cosRad, sPos['y'] + cosRad - sinRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad - cosRad, sPos['y'] - cosRad - sinRad, sPos['z'], sPos['o'], 0)
            break;
    }
}

function givePlayerChoiceOfBuffs(player: TSPlayer): boolean {
    let charItems = player.GetObject<torghastBuffs>("torghastBuffs", new torghastBuffs())
    let spellRarity: TSArray<uint32> = []
    let spellDescs: TSArray<string> = []
    let classID = player.GetClass()
    let allSpells: TSArray<TSArray<uint32>> = classSpells[classID]
    let continueLoop = true
    let count = 0

    if (charItems.currentChoiceBuffs.length > 0) {
        return false
    } else {
        player.SendBroadcastMessage('--- Spell Choices---')
        while (continueLoop == true) {
            const index = Math.floor(Math.random() * allSpells.length)
            let spellInfo: TSArray<uint32> = allSpells[index]
            let c: uint32 = spellInfo[0]
            if (spellIDToType[c] == 0) {
                count++
                player.SendBroadcastMessage('#'+count+': ' + classSpellDescriptions[classID][index])
                charItems.currentChoiceBuffs.push(c)
                spellRarity.push(spellInfo[1])
                spellDescs.push(classSpellDescriptions[classID][index])
                
            } else if (spellIDToType[c] == 1 || spellIDToType[c] == 2) {
                if (!charItems.currentBuffs.includes(c)) {
                    count++
                    player.SendBroadcastMessage('#'+count+': ' + classSpellDescriptions[classID][index])
                    charItems.currentChoiceBuffs.push(c)
                    spellRarity.push(spellInfo[1])
                    spellDescs.push(classSpellDescriptions[classID][index])
                    
                }
            }
            if (count == 3) {
                continueLoop = false
            }
        }
        let pkt = new spellChoices(charItems.currentChoiceBuffs, spellRarity, spellDescs)
        pkt.write().SendToPlayer(player)
        return true
    }
}

function playerChoseBuff(player: TSPlayer, index: uint32) {
    let charItems = player.GetObject<torghastBuffs>("torghastBuffs", new torghastBuffs())
    if (charItems.currentChoiceBuffs.length == 3) {
        let currentChoicesID: TSArray<uint32> = [charItems.currentChoiceBuffs.pop()!, charItems.currentChoiceBuffs.pop()!, charItems.currentChoiceBuffs.pop()!]
        let choice: uint32 = currentChoicesID[index]
        let found: uint32 = -1
        for (let i = 0; i < charItems.currentBuffs.length; i++) {
            if (charItems.currentBuffs[i] == choice) {
                found = i
                break
            }
        }
        if (found == -1) {
            charItems.currentBuffs.push(choice)
            charItems.currentBuffsType.push(spellIDToType[choice])
            charItems.currentBuffsCount.push(1)
        } else {
            charItems.currentBuffsCount[found]++
        }
    }
}

function addTormentOrBlessing(player: TSPlayer) {
    let charItems = player.GetObject<torghastBuffs>("torghastBuffs", new torghastBuffs())
    let continueLoop = true
    while (continueLoop == true) {
        let index = getRandomInt(tormentAndBlessingSpells.length)
        let spellInfo: TSArray<uint32> = tormentAndBlessingSpells[index]
        let spellID = spellInfo[0]
        let spellType = spellInfo[1]
        let found: uint32 = -1

        for (let i = 0; i < charItems.currentTormentsAndBlessings.length; i++) {
            if (charItems.currentTormentsAndBlessings[i] == spellID) {
                found = i
                break
            }
        }
        if (found == -1) {
            charItems.currentTormentsAndBlessings.push(spellID)
            charItems.currentTormentsAndBlessingsType.push(spellType)
            charItems.currentTormentsAndBlessingsCount.push(1)
            continueLoop = false
        } else if (found != -1 && spellType == 0) {//found spell, spell type 0 allows stack
            charItems.currentTormentsAndBlessingsCount[found]++
            continueLoop = false
        }
    }
}

export function applyPlayerBuffs(player: TSPlayer) {
    if (player.IsDead())
        return

    let charItems = player.GetObject<torghastBuffs>("torghastBuffs", new torghastBuffs())
    for (let i = 0; i < charItems.currentBuffs.length; i++) {
        if (charItems.currentBuffsType[i] == 0 || charItems.currentBuffsType[i] == 1) {
            if(player.HasAura(charItems.currentBuffs[i])){
                player.GetAura(charItems.currentBuffs[i]).SetStackAmount(charItems.currentBuffsCount[i])
            }else{
                player.AddAura(charItems.currentBuffs[i], player).SetStackAmount(charItems.currentBuffsCount[i])
            }
            //player.AddAura(charItems.currentBuffs[i], player).SetStackAmount(charItems.currentBuffsCount[i])
        } else if (charItems.currentBuffsType[i] == 2) {
            if(!player.HasSpell(charItems.currentBuffs[i]))
            player.LearnSpell(charItems.currentBuffs[i])
        }
    }
    for (let i = 0; i < charItems.currentTormentsAndBlessings.length; i++) {
        if (charItems.currentTormentsAndBlessingsType[i] == 0 || charItems.currentTormentsAndBlessingsType[i] == 1) {
            if(player.HasAura(charItems.currentTormentsAndBlessings[i])){
                player.GetAura(charItems.currentTormentsAndBlessings[i]).SetStackAmount(charItems.currentTormentsAndBlessingsCount[i])
            }else{
                player.AddAura(charItems.currentTormentsAndBlessings[i], player).SetStackAmount(charItems.currentTormentsAndBlessingsCount[i])
            }
            //player.AddAura(charItems.currentTormentsAndBlessings[i], player).SetStackAmount(charItems.currentTormentsAndBlessingsCount[i])
        } else if (charItems.currentTormentsAndBlessingsType[i] == 2) {
            if(!player.HasSpell(charItems.currentTormentsAndBlessings[i]))
            player.LearnSpell(charItems.currentTormentsAndBlessings[i])
        }
    }
}

export function removePlayerBuffs(player: TSPlayer) {
    let charItems = player.GetObject<torghastBuffs>("torghastBuffs", new torghastBuffs())
    for (let i = 0; i < charItems.currentBuffs.length; i++) {
        if (charItems.currentBuffsType[i] == 0 || charItems.currentBuffsType[i] == 1) {
            player.RemoveAura(charItems.currentBuffs[i])
        } else if (charItems.currentBuffsType[i] == 2) {
            player.RemoveSpell(charItems.currentBuffs[i], false, false)
        }
    }
    for (let i = 0; i < charItems.currentTormentsAndBlessings.length; i++) {
        if (charItems.currentTormentsAndBlessingsType[i] == 0 || charItems.currentTormentsAndBlessingsType[i] == 1) {
            player.RemoveAura(charItems.currentTormentsAndBlessings[i])
        } else if (charItems.currentTormentsAndBlessingsType[i] == 2) {
            player.RemoveSpell(charItems.currentTormentsAndBlessings[i], false, false)
        }
    }
    player.SetObject("torghastBuffs", new torghastBuffs())
}

export function getRandomInt(max: uint32): uint32 {
    return Math.floor(Math.random() * max)
}

function setupTables() {
    //sql query for all spells
    // let query = QueryWorld("SELECT * FROM `torghast_spells`;");
    // while (query.GetRow()) {
    //     let classID = query.GetUInt32(0)
    //     let spellID = query.GetUInt32(1)
    //     let spellRarity = query.GetUInt32(2)
    //     let spellType = query.GetUInt32(3)
    //     let spellDesc = query.GetString(4)
    //     spellIDToType[spellID] = spellType
    //     if(classID == 0){//add spell to all
    //         for (let i = 0; i < classSpells.length; i++) {
    //             if (i != 0 && i != 10) {
    //                 for (let j = 0; j < classSpells[i].length; j++) {
    //                     classSpells[classID].push([spellID,spellRarity,spellType])
    //                     classSpellDescriptions[classID].push(spellDesc)
    //                 }
    //             }
    //         }
    //     }else{//single class
    //         classSpells[classID].push([spellID,spellRarity,spellType])
    //         classSpellDescriptions[classID].push(spellDesc)
    //     }
    // }

    for (let i = 0; i < baseSpells.length; i++) {
        spellIDToType[baseSpells[i][0]] = baseSpells[i][2]
    }
    for (let i = 0; i < classSpells.length; i++) {
        if (i == 0 || i == 10) {

        } else {
            for (let j = 0; j < classSpells[i].length; j++) {
                spellIDToType[classSpells[i][j][0]] = classSpells[i][j][2]
            }
        }
    }

    for (let i = 0; i < classSpells.length; i++) {
        if (i == 0 || i == 10) {

        } else {
            classSpells[i] = classSpells[i].concat(baseSpells)
        }
    } 

    for (let i = 0; i < classSpellDescriptions.length; i++) {
        if (i == 0 || i == 10) {

        } else {
            classSpellDescriptions[i] = classSpellDescriptions[i].concat(baseSpellDescriptions)
        }
    }
}

export function setupLastBossCheck(events: TSEvents, bossID: number) {
    events.CreatureID.OnDeath(bossID, (creature, killer) => {
        if (creature.GetUInt('lastBoss', 0) == 1) {
            killer.SummonGameObject(GetID("gameobject_template", "minecraft-mod", "torghastendobj"), creature.GetX(), creature.GetY(), creature.GetZ()+1, creature.GetO(), 0)
        }
    })
}

