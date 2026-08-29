export async function onRequest({request}) {
 const u=new URL(request.url),ip=u.searchParams.get("ip")||"";
 return new Response(JSON.stringify({ok:true,tested:ip,note:"Cloudflare Pages Functions reached successfully"},null,2),{headers:{"content-type":"application/json;charset=UTF-8"}});
}