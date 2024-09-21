import { NextResponse } from "next/server";

const rateLimitCache = new Map<
  string,
  { requests: number; timestamp: number }
>();

export async function middleware(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "127.0.0.1";

  const currentTime = Date.now();
  const rateLimitData = rateLimitCache.get(ip) || {
    requests: 0,
    timestamp: currentTime,
  };

  const timePassed = currentTime - rateLimitData.timestamp;
  const requestLimit = 100;
  const timeWindow = 15 * 60 * 1000; // 15 minutes

  if (timePassed > timeWindow) {
    rateLimitData.requests = 0; // reset requests if time window has passed
    rateLimitData.timestamp = currentTime;
  }

  if (rateLimitData.requests >= requestLimit) {
    return new NextResponse("Too many requests, please try again later.", {
      status: 429,
    });
  }

  rateLimitData.requests += 1;
  rateLimitCache.set(ip, rateLimitData);

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*", // Apply to API routes
};
