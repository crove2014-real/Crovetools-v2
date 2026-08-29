export async function onRequest({request}) {
  const cf=request.cf||{};
  return new Response(JSON.stringify({ip:request.headers.get("CF-Connecting-IP")||"unknown",country:cf.country||null,city:cf.city||null,colo:cf.colo||null,asn:cf.asn||null},null,2),{headers:{"content-type":"application/json;charset=UTF-8"}});
}
