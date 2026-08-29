export async function onRequestPost({ request, env }) {
  const form = await request.formData();
  const file = form.get("file");
  const type = form.get("type") || "word-to-pdf";

  if (!(file instanceof File)) {
    return new Response(JSON.stringify({ok:false,error:"请上传文件"}), {
      status:400, headers:{"content-type":"application/json;charset=UTF-8"}
    });
  }

  const api = env.CONVERTER_API;
  const key = env.CONVERTER_API_KEY;

  if (!api) {
    return new Response(JSON.stringify({
      ok:false,
      error:"转换服务尚未配置",
      hint:"请在 Cloudflare Pages → Settings → Environment variables 设置 CONVERTER_API 和 CONVERTER_API_KEY"
    }), {status:503,headers:{"content-type":"application/json;charset=UTF-8"}});
  }

  const body = new FormData();
  body.append("file", file, file.name);
  body.append("type", type);

  const headers = {};
  if (key) headers["Authorization"] = `Bearer ${key}`;

  try {
    const r = await fetch(api, {method:"POST",headers,body});
    const ct = r.headers.get("content-type") || "application/octet-stream";
    if (!r.ok) {
      return new Response(JSON.stringify({
        ok:false,error:"转换服务返回错误",status:r.status
      }), {status:502,headers:{"content-type":"application/json;charset=UTF-8"}});
    }
    return new Response(await r.arrayBuffer(), {
      status:200,
      headers:{
        "content-type":ct,
        "content-disposition":`attachment; filename="converted-${Date.now()}.bin"`,
        "cache-control":"no-store"
      }
    });
  } catch(e) {
    return new Response(JSON.stringify({ok:false,error:"无法连接转换服务"}), {
      status:502,headers:{"content-type":"application/json;charset=UTF-8"}
    });
  }
}