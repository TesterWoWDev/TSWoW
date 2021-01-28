local firstSpells = 
{
	[12] = 
	{
		{1,1},
		{1,2},
		{5,1},
	},
	[13] = 
	{
		{1,1},
		{1,2},
		{5,1},
	},
	[14] = 
	{
		{1,1},
		{1,2},
		{5,1},
	}
}
local SpecIDs = {1,2,3,4,5,6,7,8,9}
local postFifteenSpells = {
	[12] = 
	{
		[SpecIDs[1]] = 
		{
			{16,1},
			{18,1}
		},
		[SpecIDs[2]] = 
		{
			{16,1},
			{18,1}
		},
		[SpecIDs[3]] = 
		{
			{16,1},
			{18,1}
		}
	},
	[13] = 
	{
		[SpecIDs[4]] = 
		{
			{16,1},
			{18,1}
		},
		[SpecIDs[5]] = 
		{
			{16,1},
			{18,1}
		},
		[SpecIDs[6]] = 
		{
			{16,1},
			{18,1}
		}
	},
	[14] = 
	{
		[SpecIDs[7]] = 
		{
			{16,1},
			{18,1}
		},
		[SpecIDs[8]] = 
		{
			{16,1},
			{18,1}
		},
		[SpecIDs[9]] = 
		{
			{16,1},
			{18,1}
		}
	}
}

local function onLevelUp(event,player,oldLevel)
	if(player:GetLevel() < 15)then
		for i,v in pairs(firstSpells[player:GetClass()])do
			if(player:GetLevel() >= v[1])then
				player:LearnSpell(v[2])
			end
		end
	elseif(player:GetLevel() > 15)then
		for i,v in pairs(allSpecTokenItemIDs)do
			if(player:HasItem(v))then
				for x,z in pairs(postFifteenSpells[player:GetClass()][v])do
					if(player:GetLevel() >= z[1])then
					player:LearnSpell(z[2])
					end
				end
			end
		end
	else--player is 15, do something here for specs. AIO stuff
	
	end
end

RegisterPlayerEvent(13,onLevelUp)