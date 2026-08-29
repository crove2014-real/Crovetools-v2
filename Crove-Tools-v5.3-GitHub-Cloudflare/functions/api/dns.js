export async function onRequest({request}) {
 const u=new URL(request.url),name=u.searchParams.get("name"),type=(u.searchParams.get("type")||"A").toUpperCase();
 if(!name)return new Response(JSON.stringify({ok:false,error:"name required"}),{status:400,headers:{"content-type":"application/json"}});
 const r=await fetch("https://cloudflare-dns.com/dns-query?name="+encodeURIComponent(name)+"&type="+type,{headers:{accept:"application/dns-json"}});
 return new Response(await r.text(),{status:r.status,headers:{"content-type":"application/json;charset=UTF-8","cache-control":"no-store"}});
}