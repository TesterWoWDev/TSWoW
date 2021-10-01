import { SQL } from "wotlkdata/sql/SQLFiles";
import { startingQuest01, startingQuest02, startingQuest03, startingQuest04, startingQuest05, startingQuest06, startingQuest07 } from "./(Zone-0)Walk-of-Heroes/starting-zone-quests";
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

 SQL.quest_template_addon.add(startingQuest01.ID).NextQuestID.set(startingQuest02.ID).PrevQuestID.set(0).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest02.ID).NextQuestID.set(startingQuest03.ID).PrevQuestID.set(startingQuest01.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest03.ID).NextQuestID.set(startingQuest04.ID).PrevQuestID.set(startingQuest02.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest04.ID).NextQuestID.set(startingQuest05.ID).PrevQuestID.set(startingQuest03.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest05.ID).NextQuestID.set(startingQuest06.ID).PrevQuestID.set(startingQuest04.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest06.ID).NextQuestID.set(startingQuest07.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)



 // Class Quest Zone
 SQL.quest_template_addon.add(DeathknightQuest01.ID).NextQuestID.set(DeathknightQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(DruidQuest01.ID).NextQuestID.set(DruidQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(HunterQuest01.ID).NextQuestID.set(HunterQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(MageQuest01.ID).NextQuestID.set(MageQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(PaladinQuest01.ID).NextQuestID.set(PaladinQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(PriestQuest01.ID).NextQuestID.set(PriestQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(RogueQuest01.ID).NextQuestID.set(RogueQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(ShamanQuest01.ID).NextQuestID.set(ShamanQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(WarlockQuest01.ID).NextQuestID.set(WarlockQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(WarriorQuest01.ID).NextQuestID.set(WarriorQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
