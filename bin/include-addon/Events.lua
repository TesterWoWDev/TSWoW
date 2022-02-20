--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
EventHolder = __TS__Class()
EventHolder.name = "EventHolder"
function EventHolder.prototype.____constructor(self)
    self.events = {}
    self.messageEvents = {}
    self.registeredAddonMessage = false
    self.registeredBufferedMessage = false
end
eventHolders = {}
messageHolders = {}
function addEvent(frame, name, callback)
    if eventHolders[frame:GetName()] == nil then
        local holder = (function(o, i, v)
            o[i] = v
            return v
        end)(
            eventHolders,
            frame:GetName(),
            __TS__New(EventHolder)
        )
        frame:SetScript(
            "OnEvent",
            function(frameInner, eventName, ...)
                local args = {...}
                for ____, event in ipairs(holder.events[eventName]) do
                    event(
                        __TS__Unpack(args)
                    )
                end
            end
        )
    end
    local holder = eventHolders[frame:GetName()]
    if holder.events[name] == nil then
        holder.events[name] = {}
    end
    frame:RegisterEvent(name)
    __TS__ArrayPush(holder.events[name], callback)
end
Events = {
    AchievementInfo = {
        OnAchievementEarned = function(self, frame, callback)
            addEvent(frame, "ACHIEVEMENT_EARNED", callback)
        end,
        OnCriteriaUpdate = function(self, frame, callback)
            addEvent(frame, "CRITERIA_UPDATE", callback)
        end,
        OnInspectAchievementReady = function(self, frame, callback)
            addEvent(frame, "INSPECT_ACHIEVEMENT_READY", callback)
        end,
        OnReceivedAchievementList = function(self, frame, callback)
            addEvent(frame, "RECEIVED_ACHIEVEMENT_LIST", callback)
        end,
        OnReceivedAchievementMemberList = function(self, frame, callback)
            addEvent(frame, "RECEIVED_ACHIEVEMENT_MEMBER_LIST", callback)
        end,
        OnTrackedAchievementUpdate = function(self, frame, callback)
            addEvent(frame, "TRACKED_ACHIEVEMENT_UPDATE", callback)
        end
    },
    ActionBar = {
        OnActionbarHidegrid = function(self, frame, callback)
            addEvent(frame, "ACTIONBAR_HIDEGRID", callback)
        end,
        OnActionbarPageChanged = function(self, frame, callback)
            addEvent(frame, "ACTIONBAR_PAGE_CHANGED", callback)
        end,
        OnActionbarShowgrid = function(self, frame, callback)
            addEvent(frame, "ACTIONBAR_SHOWGRID", callback)
        end,
        OnActionbarSlotChanged = function(self, frame, callback)
            addEvent(frame, "ACTIONBAR_SLOT_CHANGED", callback)
        end,
        OnActionbarUpdateCooldown = function(self, frame, callback)
            addEvent(frame, "ACTIONBAR_UPDATE_COOLDOWN", callback)
        end,
        OnActionbarUpdateState = function(self, frame, callback)
            addEvent(frame, "ACTIONBAR_UPDATE_STATE", callback)
        end,
        OnActionbarUpdateUsable = function(self, frame, callback)
            addEvent(frame, "ACTIONBAR_UPDATE_USABLE", callback)
        end,
        OnPetBarUpdate = function(self, frame, callback)
            addEvent(frame, "PET_BAR_UPDATE", callback)
        end,
        OnUpdateBonusActionbar = function(self, frame, callback)
            addEvent(frame, "UPDATE_BONUS_ACTIONBAR", callback)
        end,
        OnUpdateExtraActionbar = function(self, frame, callback)
            addEvent(frame, "UPDATE_EXTRA_ACTIONBAR", callback)
        end,
        OnUpdateMultiCastActionbar = function(self, frame, callback)
            addEvent(frame, "UPDATE_MULTI_CAST_ACTIONBAR", callback)
        end
    },
    AddOns = {
        OnAddonLoaded = function(self, frame, callback)
            addEvent(frame, "ADDON_LOADED", callback)
        end
    },
    ArtifactUI = {
        OnArtifactUpdate = function(self, frame, callback)
            addEvent(frame, "ARTIFACT_UPDATE", callback)
        end
    },
    AuctionHouse = {
        OnAuctionHouseClosed = function(self, frame, callback)
            addEvent(frame, "AUCTION_HOUSE_CLOSED", callback)
        end,
        OnAuctionHouseDisabled = function(self, frame, callback)
            addEvent(frame, "AUCTION_HOUSE_DISABLED", callback)
        end,
        OnAuctionHouseNewBidReceived = function(self, frame, callback)
            addEvent(frame, "AUCTION_HOUSE_NEW_BID_RECEIVED", callback)
        end,
        OnAuctionHouseShow = function(self, frame, callback)
            addEvent(frame, "AUCTION_HOUSE_SHOW", callback)
        end,
        OnAuctionMultisellFailure = function(self, frame, callback)
            addEvent(frame, "AUCTION_MULTISELL_FAILURE", callback)
        end,
        OnAuctionMultisellStart = function(self, frame, callback)
            addEvent(frame, "AUCTION_MULTISELL_START", callback)
        end,
        OnAuctionMultisellUpdate = function(self, frame, callback)
            addEvent(frame, "AUCTION_MULTISELL_UPDATE", callback)
        end
    },
    Bank = {
        OnBankframeClosed = function(self, frame, callback)
            addEvent(frame, "BANKFRAME_CLOSED", callback)
        end,
        OnBankframeOpened = function(self, frame, callback)
            addEvent(frame, "BANKFRAME_OPENED", callback)
        end,
        OnPlayerbankbagslotsChanged = function(self, frame, callback)
            addEvent(frame, "PLAYERBANKBAGSLOTS_CHANGED", callback)
        end,
        OnPlayerbankslotsChanged = function(self, frame, callback)
            addEvent(frame, "PLAYERBANKSLOTS_CHANGED", callback)
        end
    },
    BarberShop = {
        OnBarberShopAppearanceApplied = function(self, frame, callback)
            addEvent(frame, "BARBER_SHOP_APPEARANCE_APPLIED", callback)
        end,
        OnBarberShopClose = function(self, frame, callback)
            addEvent(frame, "BARBER_SHOP_CLOSE", callback)
        end,
        OnBarberShopOpen = function(self, frame, callback)
            addEvent(frame, "BARBER_SHOP_OPEN", callback)
        end
    },
    BattlePet = {
        OnPetBattleClose = function(self, frame, callback)
            addEvent(frame, "PET_BATTLE_CLOSE", callback)
        end,
        OnPetBattleFinalRound = function(self, frame, callback)
            addEvent(frame, "PET_BATTLE_FINAL_ROUND", callback)
        end,
        OnPetBattleOver = function(self, frame, callback)
            addEvent(frame, "PET_BATTLE_OVER", callback)
        end,
        OnPetBattlePetChanged = function(self, frame, callback)
            addEvent(frame, "PET_BATTLE_PET_CHANGED", callback)
        end,
        OnPetBattleXpChanged = function(self, frame, callback)
            addEvent(frame, "PET_BATTLE_XP_CHANGED", callback)
        end
    },
    Calendar = {
        OnCalendarActionPending = function(self, frame, callback)
            addEvent(frame, "CALENDAR_ACTION_PENDING", callback)
        end,
        OnCalendarCloseEvent = function(self, frame, callback)
            addEvent(frame, "CALENDAR_CLOSE_EVENT", callback)
        end,
        OnCalendarEventAlarm = function(self, frame, callback)
            addEvent(frame, "CALENDAR_EVENT_ALARM", callback)
        end,
        OnCalendarNewEvent = function(self, frame, callback)
            addEvent(frame, "CALENDAR_NEW_EVENT", callback)
        end,
        OnCalendarOpenEvent = function(self, frame, callback)
            addEvent(frame, "CALENDAR_OPEN_EVENT", callback)
        end,
        OnCalendarUpdateError = function(self, frame, callback)
            addEvent(frame, "CALENDAR_UPDATE_ERROR", callback)
        end,
        OnCalendarUpdateEvent = function(self, frame, callback)
            addEvent(frame, "CALENDAR_UPDATE_EVENT", callback)
        end,
        OnCalendarUpdateEventList = function(self, frame, callback)
            addEvent(frame, "CALENDAR_UPDATE_EVENT_LIST", callback)
        end,
        OnCalendarUpdateGuildEvents = function(self, frame, callback)
            addEvent(frame, "CALENDAR_UPDATE_GUILD_EVENTS", callback)
        end,
        OnCalendarUpdateInviteList = function(self, frame, callback)
            addEvent(frame, "CALENDAR_UPDATE_INVITE_LIST", callback)
        end,
        OnCalendarUpdatePendingInvites = function(self, frame, callback)
            addEvent(frame, "CALENDAR_UPDATE_PENDING_INVITES", callback)
        end
    },
    ChatInfo = {
        OnChannelCountUpdate = function(self, frame, callback)
            addEvent(frame, "CHANNEL_COUNT_UPDATE", callback)
        end,
        OnChannelFlagsUpdated = function(self, frame, callback)
            addEvent(frame, "CHANNEL_FLAGS_UPDATED", callback)
        end,
        OnChannelInviteRequest = function(self, frame, callback)
            addEvent(frame, "CHANNEL_INVITE_REQUEST", callback)
        end,
        OnChannelPasswordRequest = function(self, frame, callback)
            addEvent(frame, "CHANNEL_PASSWORD_REQUEST", callback)
        end,
        OnChannelRosterUpdate = function(self, frame, callback)
            addEvent(frame, "CHANNEL_ROSTER_UPDATE", callback)
        end,
        OnChannelUiUpdate = function(self, frame, callback)
            addEvent(frame, "CHANNEL_UI_UPDATE", callback)
        end,
        OnChatMsgAchievement = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_ACHIEVEMENT", callback)
        end,
        OnChatMsgAddon = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_ADDON", callback)
        end,
        OnChatMsgAfk = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_AFK", callback)
        end,
        OnChatMsgBgSystemAlliance = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_BG_SYSTEM_ALLIANCE", callback)
        end,
        OnChatMsgBgSystemHorde = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_BG_SYSTEM_HORDE", callback)
        end,
        OnChatMsgBgSystemNeutral = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_BG_SYSTEM_NEUTRAL", callback)
        end,
        OnChatMsgBn = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_BN", callback)
        end,
        OnChatMsgBnInlineToastAlert = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_BN_INLINE_TOAST_ALERT", callback)
        end,
        OnChatMsgBnInlineToastBroadcast = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_BN_INLINE_TOAST_BROADCAST", callback)
        end,
        OnChatMsgBnInlineToastBroadcastInform = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_BN_INLINE_TOAST_BROADCAST_INFORM", callback)
        end,
        OnChatMsgBnInlineToastConversation = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_BN_INLINE_TOAST_CONVERSATION", callback)
        end,
        OnChatMsgBnWhisper = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_BN_WHISPER", callback)
        end,
        OnChatMsgBnWhisperInform = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_BN_WHISPER_INFORM", callback)
        end,
        OnChatMsgBnWhisperPlayerOffline = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_BN_WHISPER_PLAYER_OFFLINE", callback)
        end,
        OnChatMsgChannel = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_CHANNEL", callback)
        end,
        OnChatMsgChannelJoin = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_CHANNEL_JOIN", callback)
        end,
        OnChatMsgChannelLeave = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_CHANNEL_LEAVE", callback)
        end,
        OnChatMsgChannelList = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_CHANNEL_LIST", callback)
        end,
        OnChatMsgChannelNotice = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_CHANNEL_NOTICE", callback)
        end,
        OnChatMsgChannelNoticeUser = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_CHANNEL_NOTICE_USER", callback)
        end,
        OnChatMsgCombatFactionChange = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_COMBAT_FACTION_CHANGE", callback)
        end,
        OnChatMsgCombatHonorGain = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_COMBAT_HONOR_GAIN", callback)
        end,
        OnChatMsgCombatMiscInfo = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_COMBAT_MISC_INFO", callback)
        end,
        OnChatMsgCombatXpGain = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_COMBAT_XP_GAIN", callback)
        end,
        OnChatMsgCurrency = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_CURRENCY", callback)
        end,
        OnChatMsgDnd = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_DND", callback)
        end,
        OnChatMsgEmote = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_EMOTE", callback)
        end,
        OnChatMsgFiltered = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_FILTERED", callback)
        end,
        OnChatMsgGuild = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_GUILD", callback)
        end,
        OnChatMsgGuildAchievement = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_GUILD_ACHIEVEMENT", callback)
        end,
        OnChatMsgIgnored = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_IGNORED", callback)
        end,
        OnChatMsgLoot = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_LOOT", callback)
        end,
        OnChatMsgMoney = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_MONEY", callback)
        end,
        OnChatMsgMonsterEmote = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_MONSTER_EMOTE", callback)
        end,
        OnChatMsgMonsterParty = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_MONSTER_PARTY", callback)
        end,
        OnChatMsgMonsterSay = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_MONSTER_SAY", callback)
        end,
        OnChatMsgMonsterWhisper = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_MONSTER_WHISPER", callback)
        end,
        OnChatMsgMonsterYell = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_MONSTER_YELL", callback)
        end,
        OnChatMsgOfficer = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_OFFICER", callback)
        end,
        OnChatMsgOpening = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_OPENING", callback)
        end,
        OnChatMsgParty = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_PARTY", callback)
        end,
        OnChatMsgPartyLeader = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_PARTY_LEADER", callback)
        end,
        OnChatMsgPetInfo = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_PET_INFO", callback)
        end,
        OnChatMsgRaid = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_RAID", callback)
        end,
        OnChatMsgRaidBossEmote = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_RAID_BOSS_EMOTE", callback)
        end,
        OnChatMsgRaidBossWhisper = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_RAID_BOSS_WHISPER", callback)
        end,
        OnChatMsgRaidLeader = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_RAID_LEADER", callback)
        end,
        OnChatMsgRaidWarning = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_RAID_WARNING", callback)
        end,
        OnChatMsgRestricted = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_RESTRICTED", callback)
        end,
        OnChatMsgSay = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_SAY", callback)
        end,
        OnChatMsgSkill = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_SKILL", callback)
        end,
        OnChatMsgSystem = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_SYSTEM", callback)
        end,
        OnChatMsgTargeticons = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_TARGETICONS", callback)
        end,
        OnChatMsgTextEmote = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_TEXT_EMOTE", callback)
        end,
        OnChatMsgTradeskills = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_TRADESKILLS", callback)
        end,
        OnChatMsgWhisper = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_WHISPER", callback)
        end,
        OnChatMsgWhisperInform = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_WHISPER_INFORM", callback)
        end,
        OnChatMsgYell = function(self, frame, callback)
            addEvent(frame, "CHAT_MSG_YELL", callback)
        end,
        OnChatServerDisconnected = function(self, frame, callback)
            addEvent(frame, "CHAT_SERVER_DISCONNECTED", callback)
        end,
        OnChatServerReconnected = function(self, frame, callback)
            addEvent(frame, "CHAT_SERVER_RECONNECTED", callback)
        end,
        OnClearBossEmotes = function(self, frame, callback)
            addEvent(frame, "CLEAR_BOSS_EMOTES", callback)
        end,
        OnLanguageListChanged = function(self, frame, callback)
            addEvent(frame, "LANGUAGE_LIST_CHANGED", callback)
        end,
        OnRaidBossEmote = function(self, frame, callback)
            addEvent(frame, "RAID_BOSS_EMOTE", callback)
        end,
        OnRaidBossWhisper = function(self, frame, callback)
            addEvent(frame, "RAID_BOSS_WHISPER", callback)
        end,
        OnRaidInstanceWelcome = function(self, frame, callback)
            addEvent(frame, "RAID_INSTANCE_WELCOME", callback)
        end,
        OnUpdateChatColor = function(self, frame, callback)
            addEvent(frame, "UPDATE_CHAT_COLOR", callback)
        end,
        OnUpdateChatColorNameByClass = function(self, frame, callback)
            addEvent(frame, "UPDATE_CHAT_COLOR_NAME_BY_CLASS", callback)
        end,
        OnUpdateChatWindows = function(self, frame, callback)
            addEvent(frame, "UPDATE_CHAT_WINDOWS", callback)
        end,
        OnUpdateFloatingChatWindows = function(self, frame, callback)
            addEvent(frame, "UPDATE_FLOATING_CHAT_WINDOWS", callback)
        end
    },
    Cinematic = {
        OnCinematicStart = function(self, frame, callback)
            addEvent(frame, "CINEMATIC_START", callback)
        end,
        OnCinematicStop = function(self, frame, callback)
            addEvent(frame, "CINEMATIC_STOP", callback)
        end,
        OnPlayMovie = function(self, frame, callback)
            addEvent(frame, "PLAY_MOVIE", callback)
        end
    },
    CombatLog = {
        OnCombatLogEvent = function(self, frame, callback)
            addEvent(frame, "COMBAT_LOG_EVENT", callback)
        end,
        OnCombatLogEventUnfiltered = function(self, frame, callback)
            addEvent(frame, "COMBAT_LOG_EVENT_UNFILTERED", callback)
        end,
        OnCombatTextUpdate = function(self, frame, callback)
            addEvent(frame, "COMBAT_TEXT_UPDATE", callback)
        end
    },
    Commentator = {
        OnCommentatorEnterWorld = function(self, frame, callback)
            addEvent(frame, "COMMENTATOR_ENTER_WORLD", callback)
        end,
        OnCommentatorMapUpdate = function(self, frame, callback)
            addEvent(frame, "COMMENTATOR_MAP_UPDATE", callback)
        end,
        OnCommentatorPlayerUpdate = function(self, frame, callback)
            addEvent(frame, "COMMENTATOR_PLAYER_UPDATE", callback)
        end
    },
    CompactUnitFrames = {
        OnCompactUnitFrameProfilesLoaded = function(self, frame, callback)
            addEvent(frame, "COMPACT_UNIT_FRAME_PROFILES_LOADED", callback)
        end
    },
    Console = {
        OnCvarUpdate = function(self, frame, callback)
            addEvent(frame, "CVAR_UPDATE", callback)
        end
    },
    Container = {
        OnBagClosed = function(self, frame, callback)
            addEvent(frame, "BAG_CLOSED", callback)
        end,
        OnBagOpen = function(self, frame, callback)
            addEvent(frame, "BAG_OPEN", callback)
        end,
        OnBagUpdate = function(self, frame, callback)
            addEvent(frame, "BAG_UPDATE", callback)
        end,
        OnBagUpdateCooldown = function(self, frame, callback)
            addEvent(frame, "BAG_UPDATE_COOLDOWN", callback)
        end,
        OnInventorySearchUpdate = function(self, frame, callback)
            addEvent(frame, "INVENTORY_SEARCH_UPDATE", callback)
        end,
        OnItemLockChanged = function(self, frame, callback)
            addEvent(frame, "ITEM_LOCK_CHANGED", callback)
        end,
        OnItemLocked = function(self, frame, callback)
            addEvent(frame, "ITEM_LOCKED", callback)
        end,
        OnItemUnlocked = function(self, frame, callback)
            addEvent(frame, "ITEM_UNLOCKED", callback)
        end
    },
    CurrencyInfo = {
        OnCurrencyDisplayUpdate = function(self, frame, callback)
            addEvent(frame, "CURRENCY_DISPLAY_UPDATE", callback)
        end,
        OnPlayerMoney = function(self, frame, callback)
            addEvent(frame, "PLAYER_MONEY", callback)
        end
    },
    Cursor = {
        OnCursorUpdate = function(self, frame, callback)
            addEvent(frame, "CURSOR_UPDATE", callback)
        end
    },
    DeathInfo = {
        OnAreaSpiritHealerInRange = function(self, frame, callback)
            addEvent(frame, "AREA_SPIRIT_HEALER_IN_RANGE", callback)
        end,
        OnAreaSpiritHealerOutOfRange = function(self, frame, callback)
            addEvent(frame, "AREA_SPIRIT_HEALER_OUT_OF_RANGE", callback)
        end,
        OnConfirmXpLoss = function(self, frame, callback)
            addEvent(frame, "CONFIRM_XP_LOSS", callback)
        end,
        OnCorpseInInstance = function(self, frame, callback)
            addEvent(frame, "CORPSE_IN_INSTANCE", callback)
        end,
        OnCorpseInRange = function(self, frame, callback)
            addEvent(frame, "CORPSE_IN_RANGE", callback)
        end,
        OnCorpseOutOfRange = function(self, frame, callback)
            addEvent(frame, "CORPSE_OUT_OF_RANGE", callback)
        end,
        OnPlayerAlive = function(self, frame, callback)
            addEvent(frame, "PLAYER_ALIVE", callback)
        end,
        OnPlayerDead = function(self, frame, callback)
            addEvent(frame, "PLAYER_DEAD", callback)
        end,
        OnPlayerSkinned = function(self, frame, callback)
            addEvent(frame, "PLAYER_SKINNED", callback)
        end,
        OnPlayerUnghost = function(self, frame, callback)
            addEvent(frame, "PLAYER_UNGHOST", callback)
        end,
        OnRequestCemeteryListResponse = function(self, frame, callback)
            addEvent(frame, "REQUEST_CEMETERY_LIST_RESPONSE", callback)
        end,
        OnResurrectRequest = function(self, frame, callback)
            addEvent(frame, "RESURRECT_REQUEST", callback)
        end,
        OnSelfResSpellChanged = function(self, frame, callback)
            addEvent(frame, "SELF_RES_SPELL_CHANGED", callback)
        end
    },
    DuelInfo = {
        OnDuelFinished = function(self, frame, callback)
            addEvent(frame, "DUEL_FINISHED", callback)
        end,
        OnDuelInbounds = function(self, frame, callback)
            addEvent(frame, "DUEL_INBOUNDS", callback)
        end,
        OnDuelOutofbounds = function(self, frame, callback)
            addEvent(frame, "DUEL_OUTOFBOUNDS", callback)
        end,
        OnDuelRequested = function(self, frame, callback)
            addEvent(frame, "DUEL_REQUESTED", callback)
        end
    },
    EncounterInfo = {
        OnDisableLowLevelRaid = function(self, frame, callback)
            addEvent(frame, "DISABLE_LOW_LEVEL_RAID", callback)
        end,
        OnEnableLowLevelRaid = function(self, frame, callback)
            addEvent(frame, "ENABLE_LOW_LEVEL_RAID", callback)
        end,
        OnInstanceLockStart = function(self, frame, callback)
            addEvent(frame, "INSTANCE_LOCK_START", callback)
        end,
        OnInstanceLockStop = function(self, frame, callback)
            addEvent(frame, "INSTANCE_LOCK_STOP", callback)
        end,
        OnInstanceLockWarning = function(self, frame, callback)
            addEvent(frame, "INSTANCE_LOCK_WARNING", callback)
        end,
        OnRaidTargetUpdate = function(self, frame, callback)
            addEvent(frame, "RAID_TARGET_UPDATE", callback)
        end,
        OnUpdateInstanceInfo = function(self, frame, callback)
            addEvent(frame, "UPDATE_INSTANCE_INFO", callback)
        end
    },
    EncounterJournal = {
        OnEjLootDataRecieved = function(self, frame, callback)
            addEvent(frame, "EJ_LOOT_DATA_RECIEVED", callback)
        end
    },
    EquipmentSet = {
        OnEquipmentSetsChanged = function(self, frame, callback)
            addEvent(frame, "EQUIPMENT_SETS_CHANGED", callback)
        end,
        OnEquipmentSwapFinished = function(self, frame, callback)
            addEvent(frame, "EQUIPMENT_SWAP_FINISHED", callback)
        end,
        OnEquipmentSwapPending = function(self, frame, callback)
            addEvent(frame, "EQUIPMENT_SWAP_PENDING", callback)
        end,
        OnWearEquipmentSet = function(self, frame, callback)
            addEvent(frame, "WEAR_EQUIPMENT_SET", callback)
        end
    },
    FriendList = {
        OnBnBlockFailedTooMany = function(self, frame, callback)
            addEvent(frame, "BN_BLOCK_FAILED_TOO_MANY", callback)
        end,
        OnBnBlockListUpdated = function(self, frame, callback)
            addEvent(frame, "BN_BLOCK_LIST_UPDATED", callback)
        end,
        OnBnChatWhisperUndeliverable = function(self, frame, callback)
            addEvent(frame, "BN_CHAT_WHISPER_UNDELIVERABLE", callback)
        end,
        OnBnConnected = function(self, frame, callback)
            addEvent(frame, "BN_CONNECTED", callback)
        end,
        OnBnCustomMessageChanged = function(self, frame, callback)
            addEvent(frame, "BN_CUSTOM_MESSAGE_CHANGED", callback)
        end,
        OnBnCustomMessageLoaded = function(self, frame, callback)
            addEvent(frame, "BN_CUSTOM_MESSAGE_LOADED", callback)
        end,
        OnBnDisconnected = function(self, frame, callback)
            addEvent(frame, "BN_DISCONNECTED", callback)
        end,
        OnBnFriendAccountOffline = function(self, frame, callback)
            addEvent(frame, "BN_FRIEND_ACCOUNT_OFFLINE", callback)
        end,
        OnBnFriendAccountOnline = function(self, frame, callback)
            addEvent(frame, "BN_FRIEND_ACCOUNT_ONLINE", callback)
        end,
        OnBnFriendInfoChanged = function(self, frame, callback)
            addEvent(frame, "BN_FRIEND_INFO_CHANGED", callback)
        end,
        OnBnFriendInviteAdded = function(self, frame, callback)
            addEvent(frame, "BN_FRIEND_INVITE_ADDED", callback)
        end,
        OnBnFriendInviteListInitialized = function(self, frame, callback)
            addEvent(frame, "BN_FRIEND_INVITE_LIST_INITIALIZED", callback)
        end,
        OnBnFriendInviteRemoved = function(self, frame, callback)
            addEvent(frame, "BN_FRIEND_INVITE_REMOVED", callback)
        end,
        OnBnFriendListSizeChanged = function(self, frame, callback)
            addEvent(frame, "BN_FRIEND_LIST_SIZE_CHANGED", callback)
        end,
        OnBnRequestFofSucceeded = function(self, frame, callback)
            addEvent(frame, "BN_REQUEST_FOF_SUCCEEDED", callback)
        end,
        OnFriendlistUpdate = function(self, frame, callback)
            addEvent(frame, "FRIENDLIST_UPDATE", callback)
        end,
        OnIgnorelistUpdate = function(self, frame, callback)
            addEvent(frame, "IGNORELIST_UPDATE", callback)
        end,
        OnMutelistUpdate = function(self, frame, callback)
            addEvent(frame, "MUTELIST_UPDATE", callback)
        end,
        OnWhoListUpdate = function(self, frame, callback)
            addEvent(frame, "WHO_LIST_UPDATE", callback)
        end
    },
    GMTicketInfo = {
        OnGmPlayerInfo = function(self, frame, callback)
            addEvent(frame, "GM_PLAYER_INFO", callback)
        end,
        OnItemRestorationButtonStatus = function(self, frame, callback)
            addEvent(frame, "ITEM_RESTORATION_BUTTON_STATUS", callback)
        end,
        OnPetitionClosed = function(self, frame, callback)
            addEvent(frame, "PETITION_CLOSED", callback)
        end,
        OnPetitionShow = function(self, frame, callback)
            addEvent(frame, "PETITION_SHOW", callback)
        end,
        OnPlayerReportSubmitted = function(self, frame, callback)
            addEvent(frame, "PLAYER_REPORT_SUBMITTED", callback)
        end,
        OnQuickTicketSystemStatus = function(self, frame, callback)
            addEvent(frame, "QUICK_TICKET_SYSTEM_STATUS", callback)
        end,
        OnQuickTicketThrottleChanged = function(self, frame, callback)
            addEvent(frame, "QUICK_TICKET_THROTTLE_CHANGED", callback)
        end
    },
    GossipInfo = {
        OnGossipClosed = function(self, frame, callback)
            addEvent(frame, "GOSSIP_CLOSED", callback)
        end,
        OnGossipConfirm = function(self, frame, callback)
            addEvent(frame, "GOSSIP_CONFIRM", callback)
        end,
        OnGossipConfirmCancel = function(self, frame, callback)
            addEvent(frame, "GOSSIP_CONFIRM_CANCEL", callback)
        end,
        OnGossipEnterCode = function(self, frame, callback)
            addEvent(frame, "GOSSIP_ENTER_CODE", callback)
        end,
        OnGossipShow = function(self, frame, callback)
            addEvent(frame, "GOSSIP_SHOW", callback)
        end
    },
    GuildBank = {
        OnGuildbankItemLockChanged = function(self, frame, callback)
            addEvent(frame, "GUILDBANK_ITEM_LOCK_CHANGED", callback)
        end,
        OnGuildbankTextChanged = function(self, frame, callback)
            addEvent(frame, "GUILDBANK_TEXT_CHANGED", callback)
        end,
        OnGuildbankUpdateMoney = function(self, frame, callback)
            addEvent(frame, "GUILDBANK_UPDATE_MONEY", callback)
        end,
        OnGuildbankUpdateTabs = function(self, frame, callback)
            addEvent(frame, "GUILDBANK_UPDATE_TABS", callback)
        end,
        OnGuildbankUpdateText = function(self, frame, callback)
            addEvent(frame, "GUILDBANK_UPDATE_TEXT", callback)
        end,
        OnGuildbankUpdateWithdrawmoney = function(self, frame, callback)
            addEvent(frame, "GUILDBANK_UPDATE_WITHDRAWMONEY", callback)
        end,
        OnGuildbankbagslotsChanged = function(self, frame, callback)
            addEvent(frame, "GUILDBANKBAGSLOTS_CHANGED", callback)
        end,
        OnGuildbankframeClosed = function(self, frame, callback)
            addEvent(frame, "GUILDBANKFRAME_CLOSED", callback)
        end,
        OnGuildbankframeOpened = function(self, frame, callback)
            addEvent(frame, "GUILDBANKFRAME_OPENED", callback)
        end,
        OnGuildbanklogUpdate = function(self, frame, callback)
            addEvent(frame, "GUILDBANKLOG_UPDATE", callback)
        end
    },
    GuildInfo = {
        OnCloseTabardFrame = function(self, frame, callback)
            addEvent(frame, "CLOSE_TABARD_FRAME", callback)
        end,
        OnDisableDeclineGuildInvite = function(self, frame, callback)
            addEvent(frame, "DISABLE_DECLINE_GUILD_INVITE", callback)
        end,
        OnEnableDeclineGuildInvite = function(self, frame, callback)
            addEvent(frame, "ENABLE_DECLINE_GUILD_INVITE", callback)
        end,
        OnGuildChallengeCompleted = function(self, frame, callback)
            addEvent(frame, "GUILD_CHALLENGE_COMPLETED", callback)
        end,
        OnGuildChallengeUpdated = function(self, frame, callback)
            addEvent(frame, "GUILD_CHALLENGE_UPDATED", callback)
        end,
        OnGuildEventLogUpdate = function(self, frame, callback)
            addEvent(frame, "GUILD_EVENT_LOG_UPDATE", callback)
        end,
        OnGuildInviteCancel = function(self, frame, callback)
            addEvent(frame, "GUILD_INVITE_CANCEL", callback)
        end,
        OnGuildInviteRequest = function(self, frame, callback)
            addEvent(frame, "GUILD_INVITE_REQUEST", callback)
        end,
        OnGuildMotd = function(self, frame, callback)
            addEvent(frame, "GUILD_MOTD", callback)
        end,
        OnGuildNewsUpdate = function(self, frame, callback)
            addEvent(frame, "GUILD_NEWS_UPDATE", callback)
        end,
        OnGuildPartyStateUpdated = function(self, frame, callback)
            addEvent(frame, "GUILD_PARTY_STATE_UPDATED", callback)
        end,
        OnGuildRanksUpdate = function(self, frame, callback)
            addEvent(frame, "GUILD_RANKS_UPDATE", callback)
        end,
        OnGuildRecipeKnownByMembers = function(self, frame, callback)
            addEvent(frame, "GUILD_RECIPE_KNOWN_BY_MEMBERS", callback)
        end,
        OnGuildRegistrarClosed = function(self, frame, callback)
            addEvent(frame, "GUILD_REGISTRAR_CLOSED", callback)
        end,
        OnGuildRegistrarShow = function(self, frame, callback)
            addEvent(frame, "GUILD_REGISTRAR_SHOW", callback)
        end,
        OnGuildRenameRequired = function(self, frame, callback)
            addEvent(frame, "GUILD_RENAME_REQUIRED", callback)
        end,
        OnGuildRewardsList = function(self, frame, callback)
            addEvent(frame, "GUILD_REWARDS_LIST", callback)
        end,
        OnGuildRosterUpdate = function(self, frame, callback)
            addEvent(frame, "GUILD_ROSTER_UPDATE", callback)
        end,
        OnGuildTradeskillUpdate = function(self, frame, callback)
            addEvent(frame, "GUILD_TRADESKILL_UPDATE", callback)
        end,
        OnGuildtabardUpdate = function(self, frame, callback)
            addEvent(frame, "GUILDTABARD_UPDATE", callback)
        end,
        OnOpenTabardFrame = function(self, frame, callback)
            addEvent(frame, "OPEN_TABARD_FRAME", callback)
        end,
        OnPlayerGuildUpdate = function(self, frame, callback)
            addEvent(frame, "PLAYER_GUILD_UPDATE", callback)
        end,
        OnRequiredGuildRenameResult = function(self, frame, callback)
            addEvent(frame, "REQUIRED_GUILD_RENAME_RESULT", callback)
        end,
        OnTabardCansaveChanged = function(self, frame, callback)
            addEvent(frame, "TABARD_CANSAVE_CHANGED", callback)
        end,
        OnTabardSavePending = function(self, frame, callback)
            addEvent(frame, "TABARD_SAVE_PENDING", callback)
        end
    },
    InstanceEncounter = {
        OnInstanceEncounterEngageUnit = function(self, frame, callback)
            addEvent(frame, "INSTANCE_ENCOUNTER_ENGAGE_UNIT", callback)
        end
    },
    Item = {
        OnBindEnchant = function(self, frame, callback)
            addEvent(frame, "BIND_ENCHANT", callback)
        end,
        OnConfirmBeforeUse = function(self, frame, callback)
            addEvent(frame, "CONFIRM_BEFORE_USE", callback)
        end,
        OnDeleteItemConfirm = function(self, frame, callback)
            addEvent(frame, "DELETE_ITEM_CONFIRM", callback)
        end,
        OnEndBoundTradeable = function(self, frame, callback)
            addEvent(frame, "END_BOUND_TRADEABLE", callback)
        end,
        OnGetItemInfoReceived = function(self, frame, callback)
            addEvent(frame, "GET_ITEM_INFO_RECEIVED", callback)
        end,
        OnReplaceEnchant = function(self, frame, callback)
            addEvent(frame, "REPLACE_ENCHANT", callback)
        end,
        OnTradeReplaceEnchant = function(self, frame, callback)
            addEvent(frame, "TRADE_REPLACE_ENCHANT", callback)
        end,
        OnUseBindConfirm = function(self, frame, callback)
            addEvent(frame, "USE_BIND_CONFIRM", callback)
        end
    },
    ItemSocketInfo = {
        OnSocketInfoAccept = function(self, frame, callback)
            addEvent(frame, "SOCKET_INFO_ACCEPT", callback)
        end,
        OnSocketInfoClose = function(self, frame, callback)
            addEvent(frame, "SOCKET_INFO_CLOSE", callback)
        end,
        OnSocketInfoSuccess = function(self, frame, callback)
            addEvent(frame, "SOCKET_INFO_SUCCESS", callback)
        end,
        OnSocketInfoUpdate = function(self, frame, callback)
            addEvent(frame, "SOCKET_INFO_UPDATE", callback)
        end
    },
    ItemText = {
        OnItemTextBegin = function(self, frame, callback)
            addEvent(frame, "ITEM_TEXT_BEGIN", callback)
        end,
        OnItemTextClosed = function(self, frame, callback)
            addEvent(frame, "ITEM_TEXT_CLOSED", callback)
        end,
        OnItemTextReady = function(self, frame, callback)
            addEvent(frame, "ITEM_TEXT_READY", callback)
        end,
        OnItemTextTranslation = function(self, frame, callback)
            addEvent(frame, "ITEM_TEXT_TRANSLATION", callback)
        end
    },
    KeyBindings = {
        OnModifierStateChanged = function(self, frame, callback)
            addEvent(frame, "MODIFIER_STATE_CHANGED", callback)
        end,
        OnUpdateBindings = function(self, frame, callback)
            addEvent(frame, "UPDATE_BINDINGS", callback)
        end
    },
    KnowledgeBase = {
        OnKnowledgeBaseArticleLoadFailure = function(self, frame, callback)
            addEvent(frame, "KNOWLEDGE_BASE_ARTICLE_LOAD_FAILURE", callback)
        end,
        OnKnowledgeBaseArticleLoadSuccess = function(self, frame, callback)
            addEvent(frame, "KNOWLEDGE_BASE_ARTICLE_LOAD_SUCCESS", callback)
        end,
        OnKnowledgeBaseQueryLoadFailure = function(self, frame, callback)
            addEvent(frame, "KNOWLEDGE_BASE_QUERY_LOAD_FAILURE", callback)
        end,
        OnKnowledgeBaseQueryLoadSuccess = function(self, frame, callback)
            addEvent(frame, "KNOWLEDGE_BASE_QUERY_LOAD_SUCCESS", callback)
        end,
        OnKnowledgeBaseServerMessage = function(self, frame, callback)
            addEvent(frame, "KNOWLEDGE_BASE_SERVER_MESSAGE", callback)
        end,
        OnKnowledgeBaseSetupLoadFailure = function(self, frame, callback)
            addEvent(frame, "KNOWLEDGE_BASE_SETUP_LOAD_FAILURE", callback)
        end,
        OnKnowledgeBaseSetupLoadSuccess = function(self, frame, callback)
            addEvent(frame, "KNOWLEDGE_BASE_SETUP_LOAD_SUCCESS", callback)
        end,
        OnKnowledgeBaseSystemMotdUpdated = function(self, frame, callback)
            addEvent(frame, "KNOWLEDGE_BASE_SYSTEM_MOTD_UPDATED", callback)
        end
    },
    LFGInfo = {
        OnLfgBootProposalUpdate = function(self, frame, callback)
            addEvent(frame, "LFG_BOOT_PROPOSAL_UPDATE", callback)
        end,
        OnLfgCompletionReward = function(self, frame, callback)
            addEvent(frame, "LFG_COMPLETION_REWARD", callback)
        end,
        OnLfgInvalidErrorMessage = function(self, frame, callback)
            addEvent(frame, "LFG_INVALID_ERROR_MESSAGE", callback)
        end,
        OnLfgLockInfoReceived = function(self, frame, callback)
            addEvent(frame, "LFG_LOCK_INFO_RECEIVED", callback)
        end,
        OnLfgOfferContinue = function(self, frame, callback)
            addEvent(frame, "LFG_OFFER_CONTINUE", callback)
        end,
        OnLfgOpenFromGossip = function(self, frame, callback)
            addEvent(frame, "LFG_OPEN_FROM_GOSSIP", callback)
        end,
        OnLfgProposalFailed = function(self, frame, callback)
            addEvent(frame, "LFG_PROPOSAL_FAILED", callback)
        end,
        OnLfgProposalShow = function(self, frame, callback)
            addEvent(frame, "LFG_PROPOSAL_SHOW", callback)
        end,
        OnLfgProposalSucceeded = function(self, frame, callback)
            addEvent(frame, "LFG_PROPOSAL_SUCCEEDED", callback)
        end,
        OnLfgProposalUpdate = function(self, frame, callback)
            addEvent(frame, "LFG_PROPOSAL_UPDATE", callback)
        end,
        OnLfgQueueStatusUpdate = function(self, frame, callback)
            addEvent(frame, "LFG_QUEUE_STATUS_UPDATE", callback)
        end,
        OnLfgRoleCheckHide = function(self, frame, callback)
            addEvent(frame, "LFG_ROLE_CHECK_HIDE", callback)
        end,
        OnLfgRoleCheckRoleChosen = function(self, frame, callback)
            addEvent(frame, "LFG_ROLE_CHECK_ROLE_CHOSEN", callback)
        end,
        OnLfgRoleCheckShow = function(self, frame, callback)
            addEvent(frame, "LFG_ROLE_CHECK_SHOW", callback)
        end,
        OnLfgRoleCheckUpdate = function(self, frame, callback)
            addEvent(frame, "LFG_ROLE_CHECK_UPDATE", callback)
        end,
        OnLfgRoleUpdate = function(self, frame, callback)
            addEvent(frame, "LFG_ROLE_UPDATE", callback)
        end,
        OnLfgUpdate = function(self, frame, callback)
            addEvent(frame, "LFG_UPDATE", callback)
        end,
        OnLfgUpdateRandomInfo = function(self, frame, callback)
            addEvent(frame, "LFG_UPDATE_RANDOM_INFO", callback)
        end,
        OnUpdateLfgList = function(self, frame, callback)
            addEvent(frame, "UPDATE_LFG_LIST", callback)
        end
    },
    LFGuildInfo = {
        OnLfGuildBrowseUpdated = function(self, frame, callback)
            addEvent(frame, "LF_GUILD_BROWSE_UPDATED", callback)
        end,
        OnLfGuildMembershipListChanged = function(self, frame, callback)
            addEvent(frame, "LF_GUILD_MEMBERSHIP_LIST_CHANGED", callback)
        end,
        OnLfGuildMembershipListUpdated = function(self, frame, callback)
            addEvent(frame, "LF_GUILD_MEMBERSHIP_LIST_UPDATED", callback)
        end,
        OnLfGuildPostUpdated = function(self, frame, callback)
            addEvent(frame, "LF_GUILD_POST_UPDATED", callback)
        end,
        OnLfGuildRecruitListChanged = function(self, frame, callback)
            addEvent(frame, "LF_GUILD_RECRUIT_LIST_CHANGED", callback)
        end,
        OnLfGuildRecruitsUpdated = function(self, frame, callback)
            addEvent(frame, "LF_GUILD_RECRUITS_UPDATED", callback)
        end
    },
    Loot = {
        OnCancelLootRoll = function(self, frame, callback)
            addEvent(frame, "CANCEL_LOOT_ROLL", callback)
        end,
        OnConfirmDisenchantRoll = function(self, frame, callback)
            addEvent(frame, "CONFIRM_DISENCHANT_ROLL", callback)
        end,
        OnConfirmLootRoll = function(self, frame, callback)
            addEvent(frame, "CONFIRM_LOOT_ROLL", callback)
        end,
        OnItemPush = function(self, frame, callback)
            addEvent(frame, "ITEM_PUSH", callback)
        end,
        OnLootBindConfirm = function(self, frame, callback)
            addEvent(frame, "LOOT_BIND_CONFIRM", callback)
        end,
        OnLootClosed = function(self, frame, callback)
            addEvent(frame, "LOOT_CLOSED", callback)
        end,
        OnLootOpened = function(self, frame, callback)
            addEvent(frame, "LOOT_OPENED", callback)
        end,
        OnLootSlotChanged = function(self, frame, callback)
            addEvent(frame, "LOOT_SLOT_CHANGED", callback)
        end,
        OnLootSlotCleared = function(self, frame, callback)
            addEvent(frame, "LOOT_SLOT_CLEARED", callback)
        end,
        OnOpenMasterLootList = function(self, frame, callback)
            addEvent(frame, "OPEN_MASTER_LOOT_LIST", callback)
        end,
        OnStartLootRoll = function(self, frame, callback)
            addEvent(frame, "START_LOOT_ROLL", callback)
        end,
        OnTrialCapReachedMoney = function(self, frame, callback)
            addEvent(frame, "TRIAL_CAP_REACHED_MONEY", callback)
        end,
        OnUpdateMasterLootList = function(self, frame, callback)
            addEvent(frame, "UPDATE_MASTER_LOOT_LIST", callback)
        end
    },
    LossOfControl = {
        OnPlayerControlGained = function(self, frame, callback)
            addEvent(frame, "PLAYER_CONTROL_GAINED", callback)
        end,
        OnPlayerControlLost = function(self, frame, callback)
            addEvent(frame, "PLAYER_CONTROL_LOST", callback)
        end
    },
    Macro = {
        OnExecuteChatLine = function(self, frame, callback)
            addEvent(frame, "EXECUTE_CHAT_LINE", callback)
        end,
        OnUpdateMacros = function(self, frame, callback)
            addEvent(frame, "UPDATE_MACROS", callback)
        end
    },
    Mail = {
        OnCloseInboxItem = function(self, frame, callback)
            addEvent(frame, "CLOSE_INBOX_ITEM", callback)
        end,
        OnMailClosed = function(self, frame, callback)
            addEvent(frame, "MAIL_CLOSED", callback)
        end,
        OnMailFailed = function(self, frame, callback)
            addEvent(frame, "MAIL_FAILED", callback)
        end,
        OnMailInboxUpdate = function(self, frame, callback)
            addEvent(frame, "MAIL_INBOX_UPDATE", callback)
        end,
        OnMailLockSendItems = function(self, frame, callback)
            addEvent(frame, "MAIL_LOCK_SEND_ITEMS", callback)
        end,
        OnMailSendInfoUpdate = function(self, frame, callback)
            addEvent(frame, "MAIL_SEND_INFO_UPDATE", callback)
        end,
        OnMailSendSuccess = function(self, frame, callback)
            addEvent(frame, "MAIL_SEND_SUCCESS", callback)
        end,
        OnMailShow = function(self, frame, callback)
            addEvent(frame, "MAIL_SHOW", callback)
        end,
        OnMailSuccess = function(self, frame, callback)
            addEvent(frame, "MAIL_SUCCESS", callback)
        end,
        OnMailUnlockSendItems = function(self, frame, callback)
            addEvent(frame, "MAIL_UNLOCK_SEND_ITEMS", callback)
        end,
        OnSendMailCodChanged = function(self, frame, callback)
            addEvent(frame, "SEND_MAIL_COD_CHANGED", callback)
        end,
        OnSendMailMoneyChanged = function(self, frame, callback)
            addEvent(frame, "SEND_MAIL_MONEY_CHANGED", callback)
        end,
        OnUpdatePendingMail = function(self, frame, callback)
            addEvent(frame, "UPDATE_PENDING_MAIL", callback)
        end
    },
    Map = {
        OnZoneChanged = function(self, frame, callback)
            addEvent(frame, "ZONE_CHANGED", callback)
        end,
        OnZoneChangedIndoors = function(self, frame, callback)
            addEvent(frame, "ZONE_CHANGED_INDOORS", callback)
        end,
        OnZoneChangedNewArea = function(self, frame, callback)
            addEvent(frame, "ZONE_CHANGED_NEW_AREA", callback)
        end
    },
    MerchantFrame = {
        OnMerchantClosed = function(self, frame, callback)
            addEvent(frame, "MERCHANT_CLOSED", callback)
        end,
        OnMerchantShow = function(self, frame, callback)
            addEvent(frame, "MERCHANT_SHOW", callback)
        end,
        OnMerchantUpdate = function(self, frame, callback)
            addEvent(frame, "MERCHANT_UPDATE", callback)
        end
    },
    Minimap = {
        OnMinimapPing = function(self, frame, callback)
            addEvent(frame, "MINIMAP_PING", callback)
        end,
        OnMinimapUpdateTracking = function(self, frame, callback)
            addEvent(frame, "MINIMAP_UPDATE_TRACKING", callback)
        end,
        OnMinimapUpdateZoom = function(self, frame, callback)
            addEvent(frame, "MINIMAP_UPDATE_ZOOM", callback)
        end
    },
    PaperDollInfo = {
        OnCharacterPointsChanged = function(self, frame, callback)
            addEvent(frame, "CHARACTER_POINTS_CHANGED", callback)
        end,
        OnCombatRatingUpdate = function(self, frame, callback)
            addEvent(frame, "COMBAT_RATING_UPDATE", callback)
        end,
        OnDisableXpGain = function(self, frame, callback)
            addEvent(frame, "DISABLE_XP_GAIN", callback)
        end,
        OnEnableXpGain = function(self, frame, callback)
            addEvent(frame, "ENABLE_XP_GAIN", callback)
        end,
        OnEquipBindConfirm = function(self, frame, callback)
            addEvent(frame, "EQUIP_BIND_CONFIRM", callback)
        end,
        OnInspectHonorUpdate = function(self, frame, callback)
            addEvent(frame, "INSPECT_HONOR_UPDATE", callback)
        end,
        OnInspectReady = function(self, frame, callback)
            addEvent(frame, "INSPECT_READY", callback)
        end,
        OnMasteryUpdate = function(self, frame, callback)
            addEvent(frame, "MASTERY_UPDATE", callback)
        end,
        OnPetSpellPowerUpdate = function(self, frame, callback)
            addEvent(frame, "PET_SPELL_POWER_UPDATE", callback)
        end,
        OnPlayerEquipmentChanged = function(self, frame, callback)
            addEvent(frame, "PLAYER_EQUIPMENT_CHANGED", callback)
        end,
        OnUpdateFaction = function(self, frame, callback)
            addEvent(frame, "UPDATE_FACTION", callback)
        end,
        OnUpdateInventoryAlerts = function(self, frame, callback)
            addEvent(frame, "UPDATE_INVENTORY_ALERTS", callback)
        end,
        OnUpdateInventoryDurability = function(self, frame, callback)
            addEvent(frame, "UPDATE_INVENTORY_DURABILITY", callback)
        end
    },
    PartyInfo = {
        OnEnteredDifferentInstanceFromParty = function(self, frame, callback)
            addEvent(frame, "ENTERED_DIFFERENT_INSTANCE_FROM_PARTY", callback)
        end,
        OnInstanceBootStart = function(self, frame, callback)
            addEvent(frame, "INSTANCE_BOOT_START", callback)
        end,
        OnInstanceBootStop = function(self, frame, callback)
            addEvent(frame, "INSTANCE_BOOT_STOP", callback)
        end,
        OnPartyInviteCancel = function(self, frame, callback)
            addEvent(frame, "PARTY_INVITE_CANCEL", callback)
        end,
        OnPartyInviteRequest = function(self, frame, callback)
            addEvent(frame, "PARTY_INVITE_REQUEST", callback)
        end,
        OnPartyLeaderChanged = function(self, frame, callback)
            addEvent(frame, "PARTY_LEADER_CHANGED", callback)
        end,
        OnPartyLfgRestricted = function(self, frame, callback)
            addEvent(frame, "PARTY_LFG_RESTRICTED", callback)
        end,
        OnPartyLootMethodChanged = function(self, frame, callback)
            addEvent(frame, "PARTY_LOOT_METHOD_CHANGED", callback)
        end,
        OnPartyMemberDisable = function(self, frame, callback)
            addEvent(frame, "PARTY_MEMBER_DISABLE", callback)
        end,
        OnPartyMemberEnable = function(self, frame, callback)
            addEvent(frame, "PARTY_MEMBER_ENABLE", callback)
        end,
        OnPlayerDifficultyChanged = function(self, frame, callback)
            addEvent(frame, "PLAYER_DIFFICULTY_CHANGED", callback)
        end,
        OnPlayerRolesAssigned = function(self, frame, callback)
            addEvent(frame, "PLAYER_ROLES_ASSIGNED", callback)
        end,
        OnRaidRosterUpdate = function(self, frame, callback)
            addEvent(frame, "RAID_ROSTER_UPDATE", callback)
        end,
        OnReadyCheck = function(self, frame, callback)
            addEvent(frame, "READY_CHECK", callback)
        end,
        OnReadyCheckConfirm = function(self, frame, callback)
            addEvent(frame, "READY_CHECK_CONFIRM", callback)
        end,
        OnReadyCheckFinished = function(self, frame, callback)
            addEvent(frame, "READY_CHECK_FINISHED", callback)
        end,
        OnRoleChangedInform = function(self, frame, callback)
            addEvent(frame, "ROLE_CHANGED_INFORM", callback)
        end,
        OnRolePollBegin = function(self, frame, callback)
            addEvent(frame, "ROLE_POLL_BEGIN", callback)
        end,
        OnVoteKickReasonNeeded = function(self, frame, callback)
            addEvent(frame, "VOTE_KICK_REASON_NEEDED", callback)
        end
    },
    PetInfo = {
        OnPetAttackStart = function(self, frame, callback)
            addEvent(frame, "PET_ATTACK_START", callback)
        end,
        OnPetAttackStop = function(self, frame, callback)
            addEvent(frame, "PET_ATTACK_STOP", callback)
        end,
        OnPetBarHidegrid = function(self, frame, callback)
            addEvent(frame, "PET_BAR_HIDEGRID", callback)
        end,
        OnPetBarShowgrid = function(self, frame, callback)
            addEvent(frame, "PET_BAR_SHOWGRID", callback)
        end,
        OnPetBarUpdateCooldown = function(self, frame, callback)
            addEvent(frame, "PET_BAR_UPDATE_COOLDOWN", callback)
        end,
        OnPetDismissStart = function(self, frame, callback)
            addEvent(frame, "PET_DISMISS_START", callback)
        end,
        OnPetForceNameDeclension = function(self, frame, callback)
            addEvent(frame, "PET_FORCE_NAME_DECLENSION", callback)
        end,
        OnPetUiClose = function(self, frame, callback)
            addEvent(frame, "PET_UI_CLOSE", callback)
        end,
        OnRaisedAsGhoul = function(self, frame, callback)
            addEvent(frame, "RAISED_AS_GHOUL", callback)
        end
    },
    PetJournal = {
        OnCompanionLearned = function(self, frame, callback)
            addEvent(frame, "COMPANION_LEARNED", callback)
        end,
        OnCompanionUnlearned = function(self, frame, callback)
            addEvent(frame, "COMPANION_UNLEARNED", callback)
        end,
        OnCompanionUpdate = function(self, frame, callback)
            addEvent(frame, "COMPANION_UPDATE", callback)
        end
    },
    PvP = {
        OnArenaOpponentUpdate = function(self, frame, callback)
            addEvent(frame, "ARENA_OPPONENT_UPDATE", callback)
        end,
        OnArenaSeasonWorldState = function(self, frame, callback)
            addEvent(frame, "ARENA_SEASON_WORLD_STATE", callback)
        end,
        OnBattlefieldQueueTimeout = function(self, frame, callback)
            addEvent(frame, "BATTLEFIELD_QUEUE_TIMEOUT", callback)
        end,
        OnBattlefieldsClosed = function(self, frame, callback)
            addEvent(frame, "BATTLEFIELDS_CLOSED", callback)
        end,
        OnBattlefieldsShow = function(self, frame, callback)
            addEvent(frame, "BATTLEFIELDS_SHOW", callback)
        end,
        OnPlayerEnteringBattleground = function(self, frame, callback)
            addEvent(frame, "PLAYER_ENTERING_BATTLEGROUND", callback)
        end,
        OnPvpRatedStatsUpdate = function(self, frame, callback)
            addEvent(frame, "PVP_RATED_STATS_UPDATE", callback)
        end,
        OnPvpRewardsUpdate = function(self, frame, callback)
            addEvent(frame, "PVP_REWARDS_UPDATE", callback)
        end,
        OnPvpTypesEnabled = function(self, frame, callback)
            addEvent(frame, "PVP_TYPES_ENABLED", callback)
        end,
        OnPvpqueueAnywhereShow = function(self, frame, callback)
            addEvent(frame, "PVPQUEUE_ANYWHERE_SHOW", callback)
        end,
        OnPvpqueueAnywhereUpdateAvailable = function(self, frame, callback)
            addEvent(frame, "PVPQUEUE_ANYWHERE_UPDATE_AVAILABLE", callback)
        end,
        OnUpdateBattlefieldScore = function(self, frame, callback)
            addEvent(frame, "UPDATE_BATTLEFIELD_SCORE", callback)
        end,
        OnUpdateBattlefieldStatus = function(self, frame, callback)
            addEvent(frame, "UPDATE_BATTLEFIELD_STATUS", callback)
        end,
        OnWargameRequested = function(self, frame, callback)
            addEvent(frame, "WARGAME_REQUESTED", callback)
        end
    },
    QuestLog = {
        OnQuestAccepted = function(self, frame, callback)
            addEvent(frame, "QUEST_ACCEPTED", callback)
        end,
        OnQuestAutocomplete = function(self, frame, callback)
            addEvent(frame, "QUEST_AUTOCOMPLETE", callback)
        end,
        OnQuestComplete = function(self, frame, callback)
            addEvent(frame, "QUEST_COMPLETE", callback)
        end,
        OnQuestDetail = function(self, frame, callback)
            addEvent(frame, "QUEST_DETAIL", callback)
        end,
        OnQuestLogUpdate = function(self, frame, callback)
            addEvent(frame, "QUEST_LOG_UPDATE", callback)
        end,
        OnQuestPoiUpdate = function(self, frame, callback)
            addEvent(frame, "QUEST_POI_UPDATE", callback)
        end,
        OnQuestWatchUpdate = function(self, frame, callback)
            addEvent(frame, "QUEST_WATCH_UPDATE", callback)
        end
    },
    QuestOffer = {
        OnQuestAcceptConfirm = function(self, frame, callback)
            addEvent(frame, "QUEST_ACCEPT_CONFIRM", callback)
        end,
        OnQuestFinished = function(self, frame, callback)
            addEvent(frame, "QUEST_FINISHED", callback)
        end,
        OnQuestGreeting = function(self, frame, callback)
            addEvent(frame, "QUEST_GREETING", callback)
        end,
        OnQuestItemUpdate = function(self, frame, callback)
            addEvent(frame, "QUEST_ITEM_UPDATE", callback)
        end,
        OnQuestProgress = function(self, frame, callback)
            addEvent(frame, "QUEST_PROGRESS", callback)
        end
    },
    ResearchInfo = {
        OnArchaeologyClosed = function(self, frame, callback)
            addEvent(frame, "ARCHAEOLOGY_CLOSED", callback)
        end,
        OnArchaeologyToggle = function(self, frame, callback)
            addEvent(frame, "ARCHAEOLOGY_TOGGLE", callback)
        end,
        OnResearchArtifactComplete = function(self, frame, callback)
            addEvent(frame, "RESEARCH_ARTIFACT_COMPLETE", callback)
        end,
        OnResearchArtifactDigSiteUpdated = function(self, frame, callback)
            addEvent(frame, "RESEARCH_ARTIFACT_DIG_SITE_UPDATED", callback)
        end,
        OnResearchArtifactHistoryReady = function(self, frame, callback)
            addEvent(frame, "RESEARCH_ARTIFACT_HISTORY_READY", callback)
        end
    },
    RestrictedActions = {
        OnAddonActionBlocked = function(self, frame, callback)
            addEvent(frame, "ADDON_ACTION_BLOCKED", callback)
        end,
        OnAddonActionForbidden = function(self, frame, callback)
            addEvent(frame, "ADDON_ACTION_FORBIDDEN", callback)
        end,
        OnMacroActionBlocked = function(self, frame, callback)
            addEvent(frame, "MACRO_ACTION_BLOCKED", callback)
        end,
        OnMacroActionForbidden = function(self, frame, callback)
            addEvent(frame, "MACRO_ACTION_FORBIDDEN", callback)
        end
    },
    SkillInfo = {
        OnSkillLinesChanged = function(self, frame, callback)
            addEvent(frame, "SKILL_LINES_CHANGED", callback)
        end
    },
    Sound = {
        OnSoundDeviceUpdate = function(self, frame, callback)
            addEvent(frame, "SOUND_DEVICE_UPDATE", callback)
        end
    },
    SpecializationInfo = {
        OnActiveTalentGroupChanged = function(self, frame, callback)
            addEvent(frame, "ACTIVE_TALENT_GROUP_CHANGED", callback)
        end,
        OnConfirmTalentWipe = function(self, frame, callback)
            addEvent(frame, "CONFIRM_TALENT_WIPE", callback)
        end,
        OnPlayerTalentUpdate = function(self, frame, callback)
            addEvent(frame, "PLAYER_TALENT_UPDATE", callback)
        end,
        OnTalentsInvoluntarilyReset = function(self, frame, callback)
            addEvent(frame, "TALENTS_INVOLUNTARILY_RESET", callback)
        end
    },
    SpellActivationOverlay = {
        OnSpellActivationOverlayGlowHide = function(self, frame, callback)
            addEvent(frame, "SPELL_ACTIVATION_OVERLAY_GLOW_HIDE", callback)
        end,
        OnSpellActivationOverlayGlowShow = function(self, frame, callback)
            addEvent(frame, "SPELL_ACTIVATION_OVERLAY_GLOW_SHOW", callback)
        end,
        OnSpellActivationOverlayHide = function(self, frame, callback)
            addEvent(frame, "SPELL_ACTIVATION_OVERLAY_HIDE", callback)
        end
    },
    SpellBook = {
        OnCurrentSpellCastChanged = function(self, frame, callback)
            addEvent(frame, "CURRENT_SPELL_CAST_CHANGED", callback)
        end,
        OnLearnedSpellInTab = function(self, frame, callback)
            addEvent(frame, "LEARNED_SPELL_IN_TAB", callback)
        end,
        OnMaxSpellStartRecoveryOffsetChanged = function(self, frame, callback)
            addEvent(frame, "MAX_SPELL_START_RECOVERY_OFFSET_CHANGED", callback)
        end,
        OnPlayerTotemUpdate = function(self, frame, callback)
            addEvent(frame, "PLAYER_TOTEM_UPDATE", callback)
        end,
        OnSpellFlyoutUpdate = function(self, frame, callback)
            addEvent(frame, "SPELL_FLYOUT_UPDATE", callback)
        end,
        OnSpellPushedToActionbar = function(self, frame, callback)
            addEvent(frame, "SPELL_PUSHED_TO_ACTIONBAR", callback)
        end,
        OnSpellUpdateCooldown = function(self, frame, callback)
            addEvent(frame, "SPELL_UPDATE_COOLDOWN", callback)
        end,
        OnSpellUpdateUsable = function(self, frame, callback)
            addEvent(frame, "SPELL_UPDATE_USABLE", callback)
        end,
        OnSpellsChanged = function(self, frame, callback)
            addEvent(frame, "SPELLS_CHANGED", callback)
        end,
        OnStartAutorepeatSpell = function(self, frame, callback)
            addEvent(frame, "START_AUTOREPEAT_SPELL", callback)
        end,
        OnStopAutorepeatSpell = function(self, frame, callback)
            addEvent(frame, "STOP_AUTOREPEAT_SPELL", callback)
        end,
        OnUnitSpellcastSent = function(self, frame, callback)
            addEvent(frame, "UNIT_SPELLCAST_SENT", callback)
        end,
        OnUpdateShapeshiftCooldown = function(self, frame, callback)
            addEvent(frame, "UPDATE_SHAPESHIFT_COOLDOWN", callback)
        end,
        OnUpdateShapeshiftForm = function(self, frame, callback)
            addEvent(frame, "UPDATE_SHAPESHIFT_FORM", callback)
        end,
        OnUpdateShapeshiftForms = function(self, frame, callback)
            addEvent(frame, "UPDATE_SHAPESHIFT_FORMS", callback)
        end,
        OnUpdateShapeshiftUsable = function(self, frame, callback)
            addEvent(frame, "UPDATE_SHAPESHIFT_USABLE", callback)
        end
    },
    StableInfo = {
        OnPetStableClosed = function(self, frame, callback)
            addEvent(frame, "PET_STABLE_CLOSED", callback)
        end,
        OnPetStableShow = function(self, frame, callback)
            addEvent(frame, "PET_STABLE_SHOW", callback)
        end,
        OnPetStableUpdate = function(self, frame, callback)
            addEvent(frame, "PET_STABLE_UPDATE", callback)
        end,
        OnPetStableUpdatePaperdoll = function(self, frame, callback)
            addEvent(frame, "PET_STABLE_UPDATE_PAPERDOLL", callback)
        end
    },
    System = {
        OnDisableTaxiBenchmark = function(self, frame, callback)
            addEvent(frame, "DISABLE_TAXI_BENCHMARK", callback)
        end,
        OnEnableTaxiBenchmark = function(self, frame, callback)
            addEvent(frame, "ENABLE_TAXI_BENCHMARK", callback)
        end,
        OnLogoutCancel = function(self, frame, callback)
            addEvent(frame, "LOGOUT_CANCEL", callback)
        end,
        OnPlayerCamping = function(self, frame, callback)
            addEvent(frame, "PLAYER_CAMPING", callback)
        end,
        OnPlayerEnteringWorld = function(self, frame, callback)
            addEvent(frame, "PLAYER_ENTERING_WORLD", callback)
        end,
        OnPlayerLeavingWorld = function(self, frame, callback)
            addEvent(frame, "PLAYER_LEAVING_WORLD", callback)
        end,
        OnPlayerLogin = function(self, frame, callback)
            addEvent(frame, "PLAYER_LOGIN", callback)
        end,
        OnPlayerLogout = function(self, frame, callback)
            addEvent(frame, "PLAYER_LOGOUT", callback)
        end,
        OnPlayerQuiting = function(self, frame, callback)
            addEvent(frame, "PLAYER_QUITING", callback)
        end,
        OnSysmsg = function(self, frame, callback)
            addEvent(frame, "SYSMSG", callback)
        end,
        OnTimePlayedMsg = function(self, frame, callback)
            addEvent(frame, "TIME_PLAYED_MSG", callback)
        end,
        OnUiErrorMessage = function(self, frame, callback)
            addEvent(frame, "UI_ERROR_MESSAGE", callback)
        end,
        OnUiInfoMessage = function(self, frame, callback)
            addEvent(frame, "UI_INFO_MESSAGE", callback)
        end,
        OnVariablesLoaded = function(self, frame, callback)
            addEvent(frame, "VARIABLES_LOADED", callback)
        end,
        OnWowMouseNotFound = function(self, frame, callback)
            addEvent(frame, "WOW_MOUSE_NOT_FOUND", callback)
        end
    },
    TaxiMap = {
        OnTaximapClosed = function(self, frame, callback)
            addEvent(frame, "TAXIMAP_CLOSED", callback)
        end,
        OnTaximapOpened = function(self, frame, callback)
            addEvent(frame, "TAXIMAP_OPENED", callback)
        end
    },
    TradeInfo = {
        OnPlayerTradeCurrency = function(self, frame, callback)
            addEvent(frame, "PLAYER_TRADE_CURRENCY", callback)
        end,
        OnPlayerTradeMoney = function(self, frame, callback)
            addEvent(frame, "PLAYER_TRADE_MONEY", callback)
        end,
        OnTradeAcceptUpdate = function(self, frame, callback)
            addEvent(frame, "TRADE_ACCEPT_UPDATE", callback)
        end,
        OnTradeClosed = function(self, frame, callback)
            addEvent(frame, "TRADE_CLOSED", callback)
        end,
        OnTradeCurrencyChanged = function(self, frame, callback)
            addEvent(frame, "TRADE_CURRENCY_CHANGED", callback)
        end,
        OnTradeMoneyChanged = function(self, frame, callback)
            addEvent(frame, "TRADE_MONEY_CHANGED", callback)
        end,
        OnTradePlayerItemChanged = function(self, frame, callback)
            addEvent(frame, "TRADE_PLAYER_ITEM_CHANGED", callback)
        end,
        OnTradePotentialBindEnchant = function(self, frame, callback)
            addEvent(frame, "TRADE_POTENTIAL_BIND_ENCHANT", callback)
        end,
        OnTradeRequest = function(self, frame, callback)
            addEvent(frame, "TRADE_REQUEST", callback)
        end,
        OnTradeRequestCancel = function(self, frame, callback)
            addEvent(frame, "TRADE_REQUEST_CANCEL", callback)
        end,
        OnTradeShow = function(self, frame, callback)
            addEvent(frame, "TRADE_SHOW", callback)
        end,
        OnTradeTargetItemChanged = function(self, frame, callback)
            addEvent(frame, "TRADE_TARGET_ITEM_CHANGED", callback)
        end,
        OnTradeUpdate = function(self, frame, callback)
            addEvent(frame, "TRADE_UPDATE", callback)
        end
    },
    TradeSkillUI = {
        OnTradeSkillClose = function(self, frame, callback)
            addEvent(frame, "TRADE_SKILL_CLOSE", callback)
        end,
        OnTradeSkillNameUpdate = function(self, frame, callback)
            addEvent(frame, "TRADE_SKILL_NAME_UPDATE", callback)
        end,
        OnTradeSkillShow = function(self, frame, callback)
            addEvent(frame, "TRADE_SKILL_SHOW", callback)
        end,
        OnUpdateTradeskillRecast = function(self, frame, callback)
            addEvent(frame, "UPDATE_TRADESKILL_RECAST", callback)
        end
    },
    Trainer = {
        OnTrainerClosed = function(self, frame, callback)
            addEvent(frame, "TRAINER_CLOSED", callback)
        end,
        OnTrainerDescriptionUpdate = function(self, frame, callback)
            addEvent(frame, "TRAINER_DESCRIPTION_UPDATE", callback)
        end,
        OnTrainerShow = function(self, frame, callback)
            addEvent(frame, "TRAINER_SHOW", callback)
        end,
        OnTrainerUpdate = function(self, frame, callback)
            addEvent(frame, "TRAINER_UPDATE", callback)
        end
    },
    Transmog = {
        OnTransmogrifyClose = function(self, frame, callback)
            addEvent(frame, "TRANSMOGRIFY_CLOSE", callback)
        end,
        OnTransmogrifyOpen = function(self, frame, callback)
            addEvent(frame, "TRANSMOGRIFY_OPEN", callback)
        end,
        OnTransmogrifySuccess = function(self, frame, callback)
            addEvent(frame, "TRANSMOGRIFY_SUCCESS", callback)
        end,
        OnTransmogrifyUpdate = function(self, frame, callback)
            addEvent(frame, "TRANSMOGRIFY_UPDATE", callback)
        end
    },
    Tutorial = {
        OnTutorialTrigger = function(self, frame, callback)
            addEvent(frame, "TUTORIAL_TRIGGER", callback)
        end
    },
    UI = {
        OnUiScaleChanged = function(self, frame, callback)
            addEvent(frame, "UI_SCALE_CHANGED", callback)
        end
    },
    Vehicle = {
        OnPlayerGainsVehicleData = function(self, frame, callback)
            addEvent(frame, "PLAYER_GAINS_VEHICLE_DATA", callback)
        end,
        OnPlayerLosesVehicleData = function(self, frame, callback)
            addEvent(frame, "PLAYER_LOSES_VEHICLE_DATA", callback)
        end,
        OnUnitEnteredVehicle = function(self, frame, callback)
            addEvent(frame, "UNIT_ENTERED_VEHICLE", callback)
        end,
        OnUnitEnteringVehicle = function(self, frame, callback)
            addEvent(frame, "UNIT_ENTERING_VEHICLE", callback)
        end,
        OnUnitExitedVehicle = function(self, frame, callback)
            addEvent(frame, "UNIT_EXITED_VEHICLE", callback)
        end,
        OnUnitExitingVehicle = function(self, frame, callback)
            addEvent(frame, "UNIT_EXITING_VEHICLE", callback)
        end,
        OnVehicleAngleShow = function(self, frame, callback)
            addEvent(frame, "VEHICLE_ANGLE_SHOW", callback)
        end,
        OnVehiclePassengersChanged = function(self, frame, callback)
            addEvent(frame, "VEHICLE_PASSENGERS_CHANGED", callback)
        end,
        OnVehiclePowerShow = function(self, frame, callback)
            addEvent(frame, "VEHICLE_POWER_SHOW", callback)
        end,
        OnVehicleUpdate = function(self, frame, callback)
            addEvent(frame, "VEHICLE_UPDATE", callback)
        end
    },
    VideoOptions = {
        OnDisplaySizeChanged = function(self, frame, callback)
            addEvent(frame, "DISPLAY_SIZE_CHANGED", callback)
        end,
        OnScreenshotFailed = function(self, frame, callback)
            addEvent(frame, "SCREENSHOT_FAILED", callback)
        end,
        OnScreenshotSucceeded = function(self, frame, callback)
            addEvent(frame, "SCREENSHOT_SUCCEEDED", callback)
        end
    },
    VoidStorageInfo = {
        OnVoidDepositWarning = function(self, frame, callback)
            addEvent(frame, "VOID_DEPOSIT_WARNING", callback)
        end,
        OnVoidStorageClose = function(self, frame, callback)
            addEvent(frame, "VOID_STORAGE_CLOSE", callback)
        end,
        OnVoidStorageContentsUpdate = function(self, frame, callback)
            addEvent(frame, "VOID_STORAGE_CONTENTS_UPDATE", callback)
        end,
        OnVoidStorageDepositUpdate = function(self, frame, callback)
            addEvent(frame, "VOID_STORAGE_DEPOSIT_UPDATE", callback)
        end,
        OnVoidStorageOpen = function(self, frame, callback)
            addEvent(frame, "VOID_STORAGE_OPEN", callback)
        end,
        OnVoidStorageUpdate = function(self, frame, callback)
            addEvent(frame, "VOID_STORAGE_UPDATE", callback)
        end,
        OnVoidTransferDone = function(self, frame, callback)
            addEvent(frame, "VOID_TRANSFER_DONE", callback)
        end
    },
    WorldStateInfo = {
        OnStartTimer = function(self, frame, callback)
            addEvent(frame, "START_TIMER", callback)
        end,
        OnWorldStateTimerStart = function(self, frame, callback)
            addEvent(frame, "WORLD_STATE_TIMER_START", callback)
        end,
        OnWorldStateTimerStop = function(self, frame, callback)
            addEvent(frame, "WORLD_STATE_TIMER_STOP", callback)
        end
    },
    Unit = {
        OnAutofollowBegin = function(self, frame, callback)
            addEvent(frame, "AUTOFOLLOW_BEGIN", callback)
        end,
        OnAutofollowEnd = function(self, frame, callback)
            addEvent(frame, "AUTOFOLLOW_END", callback)
        end,
        OnCancelSummon = function(self, frame, callback)
            addEvent(frame, "CANCEL_SUMMON", callback)
        end,
        OnConfirmBinder = function(self, frame, callback)
            addEvent(frame, "CONFIRM_BINDER", callback)
        end,
        OnConfirmSummon = function(self, frame, callback)
            addEvent(frame, "CONFIRM_SUMMON", callback)
        end,
        OnIncomingResurrectChanged = function(self, frame, callback)
            addEvent(frame, "INCOMING_RESURRECT_CHANGED", callback)
        end,
        OnKnownTitlesUpdate = function(self, frame, callback)
            addEvent(frame, "KNOWN_TITLES_UPDATE", callback)
        end,
        OnLocalplayerPetRenamed = function(self, frame, callback)
            addEvent(frame, "LOCALPLAYER_PET_RENAMED", callback)
        end,
        OnMirrorTimerPause = function(self, frame, callback)
            addEvent(frame, "MIRROR_TIMER_PAUSE", callback)
        end,
        OnMirrorTimerStart = function(self, frame, callback)
            addEvent(frame, "MIRROR_TIMER_START", callback)
        end,
        OnMirrorTimerStop = function(self, frame, callback)
            addEvent(frame, "MIRROR_TIMER_STOP", callback)
        end,
        OnPetBarUpdateUsable = function(self, frame, callback)
            addEvent(frame, "PET_BAR_UPDATE_USABLE", callback)
        end,
        OnPetUiUpdate = function(self, frame, callback)
            addEvent(frame, "PET_UI_UPDATE", callback)
        end,
        OnPlayerDamageDoneMods = function(self, frame, callback)
            addEvent(frame, "PLAYER_DAMAGE_DONE_MODS", callback)
        end,
        OnPlayerEnterCombat = function(self, frame, callback)
            addEvent(frame, "PLAYER_ENTER_COMBAT", callback)
        end,
        OnPlayerFarsightFocusChanged = function(self, frame, callback)
            addEvent(frame, "PLAYER_FARSIGHT_FOCUS_CHANGED", callback)
        end,
        OnPlayerFlagsChanged = function(self, frame, callback)
            addEvent(frame, "PLAYER_FLAGS_CHANGED", callback)
        end,
        OnPlayerFocusChanged = function(self, frame, callback)
            addEvent(frame, "PLAYER_FOCUS_CHANGED", callback)
        end,
        OnPlayerLeaveCombat = function(self, frame, callback)
            addEvent(frame, "PLAYER_LEAVE_COMBAT", callback)
        end,
        OnPlayerLevelUp = function(self, frame, callback)
            addEvent(frame, "PLAYER_LEVEL_UP", callback)
        end,
        OnPlayerPvpKillsChanged = function(self, frame, callback)
            addEvent(frame, "PLAYER_PVP_KILLS_CHANGED", callback)
        end,
        OnPlayerPvpRankChanged = function(self, frame, callback)
            addEvent(frame, "PLAYER_PVP_RANK_CHANGED", callback)
        end,
        OnPlayerRegenDisabled = function(self, frame, callback)
            addEvent(frame, "PLAYER_REGEN_DISABLED", callback)
        end,
        OnPlayerRegenEnabled = function(self, frame, callback)
            addEvent(frame, "PLAYER_REGEN_ENABLED", callback)
        end,
        OnPlayerTargetChanged = function(self, frame, callback)
            addEvent(frame, "PLAYER_TARGET_CHANGED", callback)
        end,
        OnPlayerUpdateResting = function(self, frame, callback)
            addEvent(frame, "PLAYER_UPDATE_RESTING", callback)
        end,
        OnPlayerXpUpdate = function(self, frame, callback)
            addEvent(frame, "PLAYER_XP_UPDATE", callback)
        end,
        OnRunePowerUpdate = function(self, frame, callback)
            addEvent(frame, "RUNE_POWER_UPDATE", callback)
        end,
        OnUnitAttack = function(self, frame, callback)
            addEvent(frame, "UNIT_ATTACK", callback)
        end,
        OnUnitAttackPower = function(self, frame, callback)
            addEvent(frame, "UNIT_ATTACK_POWER", callback)
        end,
        OnUnitAttackSpeed = function(self, frame, callback)
            addEvent(frame, "UNIT_ATTACK_SPEED", callback)
        end,
        OnUnitAura = function(self, frame, callback)
            addEvent(frame, "UNIT_AURA", callback)
        end,
        OnUnitClassificationChanged = function(self, frame, callback)
            addEvent(frame, "UNIT_CLASSIFICATION_CHANGED", callback)
        end,
        OnUnitCombat = function(self, frame, callback)
            addEvent(frame, "UNIT_COMBAT", callback)
        end,
        OnUnitConnection = function(self, frame, callback)
            addEvent(frame, "UNIT_CONNECTION", callback)
        end,
        OnUnitDamage = function(self, frame, callback)
            addEvent(frame, "UNIT_DAMAGE", callback)
        end,
        OnUnitDefense = function(self, frame, callback)
            addEvent(frame, "UNIT_DEFENSE", callback)
        end,
        OnUnitDisplaypower = function(self, frame, callback)
            addEvent(frame, "UNIT_DISPLAYPOWER", callback)
        end,
        OnUnitHealPrediction = function(self, frame, callback)
            addEvent(frame, "UNIT_HEAL_PREDICTION", callback)
        end,
        OnUnitHealth = function(self, frame, callback)
            addEvent(frame, "UNIT_HEALTH", callback)
        end,
        OnUnitInventoryChanged = function(self, frame, callback)
            addEvent(frame, "UNIT_INVENTORY_CHANGED", callback)
        end,
        OnUnitLevel = function(self, frame, callback)
            addEvent(frame, "UNIT_LEVEL", callback)
        end,
        OnUnitMana = function(self, frame, callback)
            addEvent(frame, "UNIT_MANA", callback)
        end,
        OnUnitMaxhealth = function(self, frame, callback)
            addEvent(frame, "UNIT_MAXHEALTH", callback)
        end,
        OnUnitModelChanged = function(self, frame, callback)
            addEvent(frame, "UNIT_MODEL_CHANGED", callback)
        end,
        OnUnitNameUpdate = function(self, frame, callback)
            addEvent(frame, "UNIT_NAME_UPDATE", callback)
        end,
        OnUnitPhase = function(self, frame, callback)
            addEvent(frame, "UNIT_PHASE", callback)
        end,
        OnUnitPortraitUpdate = function(self, frame, callback)
            addEvent(frame, "UNIT_PORTRAIT_UPDATE", callback)
        end,
        OnUnitPowerBarHide = function(self, frame, callback)
            addEvent(frame, "UNIT_POWER_BAR_HIDE", callback)
        end,
        OnUnitPowerBarShow = function(self, frame, callback)
            addEvent(frame, "UNIT_POWER_BAR_SHOW", callback)
        end,
        OnUnitPowerBarTimerUpdate = function(self, frame, callback)
            addEvent(frame, "UNIT_POWER_BAR_TIMER_UPDATE", callback)
        end,
        OnUnitPowerFrequent = function(self, frame, callback)
            addEvent(frame, "UNIT_POWER_FREQUENT", callback)
        end,
        OnUnitPowerUpdate = function(self, frame, callback)
            addEvent(frame, "UNIT_POWER_UPDATE", callback)
        end,
        OnUnitQuestLogChanged = function(self, frame, callback)
            addEvent(frame, "UNIT_QUEST_LOG_CHANGED", callback)
        end,
        OnUnitRangedAttackPower = function(self, frame, callback)
            addEvent(frame, "UNIT_RANGED_ATTACK_POWER", callback)
        end,
        OnUnitRangeddamage = function(self, frame, callback)
            addEvent(frame, "UNIT_RANGEDDAMAGE", callback)
        end,
        OnUnitResistances = function(self, frame, callback)
            addEvent(frame, "UNIT_RESISTANCES", callback)
        end,
        OnUnitSpellcastChannelStart = function(self, frame, callback)
            addEvent(frame, "UNIT_SPELLCAST_CHANNEL_START", callback)
        end,
        OnUnitSpellcastChannelStop = function(self, frame, callback)
            addEvent(frame, "UNIT_SPELLCAST_CHANNEL_STOP", callback)
        end,
        OnUnitSpellcastChannelUpdate = function(self, frame, callback)
            addEvent(frame, "UNIT_SPELLCAST_CHANNEL_UPDATE", callback)
        end,
        OnUnitSpellcastDelayed = function(self, frame, callback)
            addEvent(frame, "UNIT_SPELLCAST_DELAYED", callback)
        end,
        OnUnitSpellcastFailed = function(self, frame, callback)
            addEvent(frame, "UNIT_SPELLCAST_FAILED", callback)
        end,
        OnUnitSpellcastFailedQuiet = function(self, frame, callback)
            addEvent(frame, "UNIT_SPELLCAST_FAILED_QUIET", callback)
        end,
        OnUnitSpellcastInterrupted = function(self, frame, callback)
            addEvent(frame, "UNIT_SPELLCAST_INTERRUPTED", callback)
        end,
        OnUnitSpellcastInterruptible = function(self, frame, callback)
            addEvent(frame, "UNIT_SPELLCAST_INTERRUPTIBLE", callback)
        end,
        OnUnitSpellcastNotInterruptible = function(self, frame, callback)
            addEvent(frame, "UNIT_SPELLCAST_NOT_INTERRUPTIBLE", callback)
        end,
        OnUnitSpellcastStart = function(self, frame, callback)
            addEvent(frame, "UNIT_SPELLCAST_START", callback)
        end,
        OnUnitSpellcastStop = function(self, frame, callback)
            addEvent(frame, "UNIT_SPELLCAST_STOP", callback)
        end,
        OnUnitSpellcastSucceeded = function(self, frame, callback)
            addEvent(frame, "UNIT_SPELLCAST_SUCCEEDED", callback)
        end,
        OnUnitStats = function(self, frame, callback)
            addEvent(frame, "UNIT_STATS", callback)
        end,
        OnUnitTarget = function(self, frame, callback)
            addEvent(frame, "UNIT_TARGET", callback)
        end,
        OnUnitTargetableChanged = function(self, frame, callback)
            addEvent(frame, "UNIT_TARGETABLE_CHANGED", callback)
        end,
        OnUnitThreatListUpdate = function(self, frame, callback)
            addEvent(frame, "UNIT_THREAT_LIST_UPDATE", callback)
        end,
        OnUnitThreatSituationUpdate = function(self, frame, callback)
            addEvent(frame, "UNIT_THREAT_SITUATION_UPDATE", callback)
        end,
        OnUpdateExhaustion = function(self, frame, callback)
            addEvent(frame, "UPDATE_EXHAUSTION", callback)
        end,
        OnUpdateMouseoverUnit = function(self, frame, callback)
            addEvent(frame, "UPDATE_MOUSEOVER_UNIT", callback)
        end,
        OnUpdateStealth = function(self, frame, callback)
            addEvent(frame, "UPDATE_STEALTH", callback)
        end,
        OnVehicleAngleUpdate = function(self, frame, callback)
            addEvent(frame, "VEHICLE_ANGLE_UPDATE", callback)
        end
    },
    NonBlizzard_documented = {
        OnPlaytimeChanged = function(self, frame, callback)
            addEvent(frame, "PLAYTIME_CHANGED", callback)
        end,
        OnTrialCapReachedLevel = function(self, frame, callback)
            addEvent(frame, "TRIAL_CAP_REACHED_LEVEL", callback)
        end
    }
}
