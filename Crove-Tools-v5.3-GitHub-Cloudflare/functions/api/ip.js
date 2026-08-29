export async function onRequest({request}) {
 const h=request.headers;
 return new Response(JSON.stringify({ip:h.get("CF-Connecting-IP")||h.get("x-forwarded-for")||"unknown",country:h.get("CF-IPCountry")||"unknown",city:request.cf?.city||"unknown",colo:request.cf?.colo||"unknown",asn:request.cf?.asn||"unknown"},null,2),{headers:{"content-type":"application/json;charset=UTF-8","cache-control":"no-store"}});
}