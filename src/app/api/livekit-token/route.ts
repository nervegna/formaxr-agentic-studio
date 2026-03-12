import { AccessToken, RoomServiceClient, AgentDispatchClient } from "livekit-server-sdk";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { industry, lang } = await req.json();

  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;
  const wsUrl = process.env.LIVEKIT_URL;

  if (!apiKey || !apiSecret || !wsUrl) {
    return NextResponse.json(
      { error: "LiveKit not configured" },
      { status: 500 }
    );
  }

  // HTTP URL for API calls
  const httpUrl = wsUrl.replace("wss://", "https://");

  const roomName = `formaxr-demo-${Date.now()}`;
  const participantName = `visitor-${Math.random().toString(36).slice(2, 8)}`;

  // 1. Create room first
  const roomService = new RoomServiceClient(httpUrl, apiKey, apiSecret);
  await roomService.createRoom({ name: roomName, emptyTimeout: 300 });

  // 2. Dispatch the agent to the room
  const agentDispatch = new AgentDispatchClient(httpUrl, apiKey, apiSecret);
  await agentDispatch.createDispatch(roomName, "Hayden-bc5", {
    metadata: JSON.stringify({ industry, lang }),
  });

  // 3. Generate participant token
  const token = new AccessToken(apiKey, apiSecret, {
    identity: participantName,
    name: participantName,
    metadata: JSON.stringify({ industry, lang }),
  });

  token.addGrant({
    room: roomName,
    roomJoin: true,
    canPublish: true,
    canSubscribe: true,
  });

  const jwt = await token.toJwt();

  return NextResponse.json({
    token: jwt,
    url: wsUrl,
    roomName,
  });
}
