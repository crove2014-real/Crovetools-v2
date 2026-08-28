export async function onRequest({request}) {
  const u = new URL(request.url);
  const ip = u.searchParams.get("ip");
  if (!ip) return new Response("请输入 IP",{status:400});
  const url = `https://${ip}/cdn-cgi/trace`;
  const start = performance.now();
  try {
    const r = await fetch(url, {headers:{host:"cloudflare.com"}});
    return new Response(JSON.stringify({
      ip, ok:r.ok, status:r.status, latency_ms:Math.round(performance.now()-start)
    },null,2), {headers:{"content-type":"application/json; charset=utf-8"}});
  } catch(e) {
    return new Response(JSON.stringify({ip,ok:false,error:String(e),latency_ms:Math.round(performance.now()-start)},null,2),
      {headers:{"content-type":"application/json; charset=utf-8"}});
  }
}