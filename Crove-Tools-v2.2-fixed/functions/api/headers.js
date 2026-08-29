export async function onRequest({request}) {
 const obj={}; for(const [k,v] of request.headers)obj[k]=v;
 return new Response(JSON.stringify(obj,null,2),{headers:{"content-type":"application/json;charset=UTF-8"}});
}