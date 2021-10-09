import { SQL } from "wotlkdata/sql/SQLFiles";
import { startingQuest01, startingQuest02, startingQuest03, startingQuest04, startingQuest05, startingQuest06, startingQuest07, startingQuest08, startingQuest09, startingQuest10, startingQuest11 } from "./(Zone-0)Walk-of-Heroes/starting-zone-quests";
import { BagQuest01, ExpTestQuest01 } from "./(Zone-1)Bramblewood/zone-1-quests";
import { DeathknightQuest01, DeathknightQuest02 } from "./(Zone-5)Mall/ClassQuests/DeathKnightClassQuest";
import { DruidQuest01, DruidQuest02 } from "./(Zone-5)Mall/ClassQuests/DruidClassQuest";
import { HunterQuest01, HunterQuest02 } from "./(Zone-5)Mall/ClassQuests/HunterClassQuest";
import { MageQuest01, MageQuest02 } from "./(Zone-5)Mall/ClassQuests/MageClassQuest";
import { PaladinQuest01, PaladinQuest02 } from "./(Zone-5)Mall/ClassQuests/PaladinClassQuest";
import { PriestQuest01, PriestQuest02 } from "./(Zone-5)Mall/ClassQuests/PriestClassQuest";
import { RogueQuest01, RogueQuest02 } from "./(Zone-5)Mall/ClassQuests/RogueClassQuest";
import { ShamanQuest01, ShamanQuest02 } from "./(Zone-5)Mall/ClassQuests/ShamanClassQuest";
import { WarlockQuest01, WarlockQuest02 } from "./(Zone-5)Mall/ClassQuests/WarlockClassQuest";
import { WarriorQuest01, WarriorQuest02 } from "./(Zone-5)Mall/ClassQuests/WarriorClassQuest";
import { OpenWorldQuest01, OpenWorldQuest02, OpenWorldQuest03 } from "./open-world-dungeon-01";

 SQL.quest_template_addon.add(startingQuest01.ID).NextQuestID.set(startingQuest02.ID).PrevQuestID.set(0).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest02.ID).NextQuestID.set(startingQuest03.ID).PrevQuestID.set(startingQuest01.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest03.ID).NextQuestID.set(startingQuest04.ID).PrevQuestID.set(startingQuest02.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest04.ID).NextQuestID.set(startingQuest05.ID).PrevQuestID.set(startingQuest03.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest05.ID).NextQuestID.set(startingQuest06.ID).PrevQuestID.set(startingQuest04.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest06.ID).NextQuestID.set(startingQuest07.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest07.ID).NextQuestID.set(startingQuest08.ID).PrevQuestID.set(startingQuest06.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest08.ID).NextQuestID.set(startingQuest09.ID).PrevQuestID.set(startingQuest07.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest09.ID).NextQuestID.set(startingQuest10.ID).PrevQuestID.set(startingQuest08.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest10.ID).NextQuestID.set(startingQuest11.ID).PrevQuestID.set(startingQuest09.ID).ExclusiveGroup.set(0)



 // Class Quest Zone
 SQL.quest_template_addon.add(DeathknightQuest01.ID).NextQuestID.set(DeathknightQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).AllowableClasses.set(32)
 SQL.quest_template_addon.add(DruidQuest01.ID).NextQuestID.set(DruidQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).AllowableClasses.set(1024)
 SQL.quest_template_addon.add(HunterQuest01.ID).NextQuestID.set(HunterQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).AllowableClasses.set(4)
 SQL.quest_template_addon.add(MageQuest01.ID).NextQuestID.set(MageQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).AllowableClasses.set(128)
 SQL.quest_template_addon.add(PaladinQuest01.ID).NextQuestID.set(PaladinQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).AllowableClasses.set(2)
 SQL.quest_template_addon.add(PriestQuest01.ID).NextQuestID.set(PriestQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).AllowableClasses.set(16)
 SQL.quest_template_addon.add(RogueQuest01.ID).NextQuestID.set(RogueQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).AllowableClasses.set(8)
 SQL.quest_template_addon.add(ShamanQuest01.ID).NextQuestID.set(ShamanQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).AllowableClasses.set(64)
 SQL.quest_template_addon.add(WarlockQuest01.ID).NextQuestID.set(WarlockQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).AllowableClasses.set(256)
 SQL.quest_template_addon.add(WarriorQuest01.ID).NextQuestID.set(WarriorQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).AllowableClasses.set(1)

 SQL.quest_template_addon.add(DeathknightQuest02.ID).NextQuestID.set(0).PrevQuestID.set(DeathknightQuest01.ID).ExclusiveGroup.set(0).AllowableClasses.set(32).SpecialFlags.set(1)
 SQL.quest_template_addon.add(DruidQuest02.ID).NextQuestID.set(0).PrevQuestID.set(DruidQuest01.ID).ExclusiveGroup.set(0).AllowableClasses.set(1024).SpecialFlags.set(1)
 SQL.quest_template_addon.add(HunterQuest02.ID).NextQuestID.set(0).PrevQuestID.set(HunterQuest01.ID).ExclusiveGroup.set(0).AllowableClasses.set(4).SpecialFlags.set(1)
 SQL.quest_template_addon.add(MageQuest02.ID).NextQuestID.set(0).PrevQuestID.set(MageQuest01.ID).ExclusiveGroup.set(0).AllowableClasses.set(128).SpecialFlags.set(1)
 SQL.quest_template_addon.add(PaladinQuest02.ID).NextQuestID.set(0).PrevQuestID.set(PaladinQuest01.ID).ExclusiveGroup.set(0).AllowableClasses.set(2).SpecialFlags.set(1)
 SQL.quest_template_addon.add(PriestQuest02.ID).NextQuestID.set(0).PrevQuestID.set(PriestQuest01.ID).ExclusiveGroup.set(0).AllowableClasses.set(16).SpecialFlags.set(1)
 SQL.quest_template_addon.add(RogueQuest02.ID).NextQuestID.set(0).PrevQuestID.set(RogueQuest01.ID).ExclusiveGroup.set(0).AllowableClasses.set(8).SpecialFlags.set(1)
 SQL.quest_template_addon.add(ShamanQuest02.ID).NextQuestID.set(0).PrevQuestID.set(ShamanQuest01.ID).ExclusiveGroup.set(0).AllowableClasses.set(64).SpecialFlags.set(1)
 SQL.quest_template_addon.add(WarlockQuest02.ID).NextQuestID.set(0).PrevQuestID.set(WarlockQuest01.ID).ExclusiveGroup.set(0).AllowableClasses.set(256).SpecialFlags.set(1)
 SQL.quest_template_addon.add(WarriorQuest02.ID).NextQuestID.set(0).PrevQuestID.set(WarriorQuest01.ID).ExclusiveGroup.set(0).AllowableClasses.set(1).SpecialFlags.set(1)

 //Side Quests
 SQL.quest_template_addon.add(BagQuest01.ID).NextQuestID.set(0).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).SpecialFlags.set(1)
 SQL.quest_template_addon.add(ExpTestQuest01.ID).NextQuestID.set(0).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).SpecialFlags.set(1)
 SQL.quest_template_addon.add(OpenWorldQuest01.ID).NextQuestID.set(0).PrevQuestID.set(startingQuest09.ID).ExclusiveGroup.set(0).SpecialFlags.set(1)
 SQL.quest_template_addon.add(OpenWorldQuest02.ID).NextQuestID.set(0).PrevQuestID.set(startingQuest09.ID).ExclusiveGroup.set(0).SpecialFlags.set(1)
 SQL.quest_template_addon.add(OpenWorldQuest03.ID).NextQuestID.set(0).PrevQuestID.set(startingQuest09.ID).ExclusiveGroup.set(0)
