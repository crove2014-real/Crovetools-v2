export async function onRequest({request}) {
  const u=new URL(request.url),name=u.searchParams.get("name"),type=u.searchParams.get("type")||"A";
  if(!name)return new Response("missing name",{status:400});
  const r=await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}`,{headers:{accept:"application/dns-json"}});
  return new Response(await r.text(),{headers:{"content-type":"application/json;charset=UTF-8"}});
}
