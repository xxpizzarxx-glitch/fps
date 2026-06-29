local Players = game:GetService("Players")
local RunService = game:GetService("RunService")
local UserInputService = game:GetService("UserInputService")

local LocalPlayer = Players.LocalPlayer
local Camera = workspace.CurrentCamera

-- Config
local hitboxEnabled = false
local debugAimEnabled = false
local targetPart = "Head"

local hub = Instance.new("ScreenGui")
hub.Name = "DebugHub"
hub.Parent = LocalPlayer:WaitForChild("PlayerGui")

local frame = Instance.new("Frame")
frame.Size = UDim2.new(0, 250, 0, 200)
frame.Position = UDim2.new(0, 50, 0, 50)
frame.BackgroundColor3 = Color3.fromRGB(35,35,35)
frame.Parent = hub

local corner = Instance.new("UICorner")
corner.Parent = frame

-- Botão Hitbox
local hitboxButton = Instance.new("TextButton")
hitboxButton.Size = UDim2.new(0, 200, 0, 40)
hitboxButton.Position = UDim2.new(0, 25, 0, 20)
hitboxButton.Text = "Hitbox OFF"
hitboxButton.Parent = frame

-- Botão Debug Aim
local aimButton = Instance.new("TextButton")
aimButton.Size = UDim2.new(0, 200, 0, 40)
aimButton.Position = UDim2.new(0, 25, 0, 80)
aimButton.Text = "Debug Aim OFF"
aimButton.Parent = frame

-- Sistema de Highlight
local function createHighlight(character)
	if character:FindFirstChild("DebugHighlight") then return end
	
	local highlight = Instance.new("Highlight")
	highlight.Name = "DebugHighlight"
	highlight.FillColor = Color3.fromRGB(255,0,0)
	highlight.FillTransparency = 0.5
	highlight.OutlineColor = Color3.fromRGB(255,255,255)
	highlight.Parent = character
end

local function removeHighlight(character)
	local highlight = character:FindFirstChild("DebugHighlight")
	if highlight then
		highlight:Destroy()
	end
end

-- Toggle Hitbox
hitboxButton.MouseButton1Click:Connect(function()
	hitboxEnabled = not hitboxEnabled
	hitboxButton.Text = hitboxEnabled and "Hitbox ON" or "Hitbox OFF"
end)

-- Toggle Debug Aim
aimButton.MouseButton1Click:Connect(function()
	debugAimEnabled = not debugAimEnabled
	aimButton.Text = debugAimEnabled and "Debug Aim ON" or "Debug Aim OFF"
end)

-- Encontrar alvo mais próximo
local function getClosestTarget()
	local closest = nil
	local shortestDistance = math.huge

	for _, player in ipairs(Players:GetPlayers()) do
		if player ~= LocalPlayer and player.Character and player.Character:FindFirstChild(targetPart) then
			local part = player.Character[targetPart]
			local distance = (part.Position - Camera.CFrame.Position).Magnitude

			if distance < shortestDistance then
				shortestDistance = distance
				closest = part
			end
		end
	end

	return closest
end

RunService.RenderStepped:Connect(function()
	for _, player in ipairs(Players:GetPlayers()) do
		if player ~= LocalPlayer and player.Character then
			if hitboxEnabled then
				createHighlight(player.Character)
			else
				removeHighlight(player.Character)
			end
		end
	end

	-- Debug camera tracking (para testes)
	if debugAimEnabled then
		local target = getClosestTarget()
		if target then
			Camera.CFrame = CFrame.lookAt(
				Camera.CFrame.Position,
				target.Position
			)
		end
	end
end)
