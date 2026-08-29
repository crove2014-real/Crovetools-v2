export async function onRequest({env}) {
  return new Response(JSON.stringify({
    ok:true,
    service:"Crove Tools v5.3",
    converterConfigured:!!env.CONVERTER_API
  }),{headers:{"content-type":"application/json;charset=UTF-8","cache-control":"no-store"}});
}