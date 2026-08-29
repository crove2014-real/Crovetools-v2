const tools=[
["📝 文本工具",[["字数统计","字符、词语、行数","text"],["文本去重","按行去重","dedupe"],["正则测试","测试 JavaScript 正则","regex"],["Markdown","简单 Markdown 预览","markdown"]]],
["💻 开发工具",[["JSON 格式化","格式化 / 压缩 JSON","json"],["Base64","UTF-8 Base64 编解码","base64"],["URL 编解码","URL Encode / Decode","url"],["UUID","生成 UUID","uuid"],["时间戳","Unix 时间戳","timestamp"],["Hash","SHA-1 / SHA-256 / SHA-512","hash"],["密码生成","随机密码","password"],["进制转换","二进制 / 十进制 / 十六进制","base"]]],
["🖼️ 图片工具",[["二维码","生成二维码","qr"],["图片 Base64","图片转 Base64","img64"],["图片信息","查看尺寸和大小","imginfo"]]],
["🌐 网络工具",[["IP 查询","查询当前公网 IP","ip"],["DNS 查询","DNS 记录查询","dns"],["HTTP Header","查看请求 Header","headers"],["CIDR 计算","IPv4 网段计算","cidr"]]],
["☁️ Cloudflare",[["CF IP 测试","测试 Cloudflare IP","cfip"]]],
["🧮 计算工具",[["科学计算器","基础表达式计算","calc"],["日期计算","日期相差天数","date"],["随机数","指定范围随机数","random"]]]
];

const templates={
text:`<textarea id="x" placeholder="输入文本…"></textarea><div class="stats"><div class="stat"><b id="c">0</b>字符</div><div class="stat"><b id="w">0</b>词</div><div class="stat"><b id="l">0</b>行</div></div>`,
dedupe:`<textarea id="x" placeholder="每行输入一项…"></textarea><button class="primary" id="go">去重</button><div class="out" id="o"></div>`,
regex:`<input id="p" placeholder="正则，例如 ^[A-Z]+$"><input id="t" placeholder="测试文本"><button class="primary" id="go">测试</button><div class="out" id="o"></div>`,
markdown:`<textarea id="x" placeholder="# Crove Tools\n\n输入 Markdown…"></textarea><div class="out" id="o"></div>`,
json:`<textarea id="x" placeholder='{"hello":"Crove"}'></textarea><div class="row"><button class="primary" id="fmt">格式化</button><button id="min">压缩</button></div><div class="out" id="o"></div>`,
base64:`<textarea id="x"></textarea><div class="row"><button class="primary" id="enc">编码</button><button id="dec">解码</button></div><div class="out" id="o"></div>`,
url:`<textarea id="x"></textarea><div class="row"><button class="primary" id="enc">编码</button><button id="dec">解码</button></div><div class="out" id="o"></div>`,
uuid:`<button class="primary" id="go">生成 UUID</button><div class="out" id="o"></div>`,
timestamp:`<button class="primary" id="now">当前时间戳</button><input id="x" placeholder="输入 Unix 时间戳"><button id="conv">转为日期</button><div class="out" id="o"></div>`,
hash:`<textarea id="x"></textarea><select id="alg"><option>SHA-256</option><option>SHA-1</option><option>SHA-512</option></select><button class="primary" id="go">计算 Hash</button><div class="out" id="o"></div>`,
password:`<input id="n" type="number" value="20" min="6" max="128"><button class="primary" id="go">生成密码</button><div class="out" id="o"></div>`,
qr:`<input id="x" placeholder="输入网址或文字"><button class="primary" id="go">生成二维码</button><div id="o"></div>`,
img64:`<input id="f" type="file" accept="image/*"><div class="out" id="o"></div>`,
imginfo:`<input id="f" type="file" accept="image/*"><div class="out" id="o"></div>`,
ip:`<button class="primary" id="go">查询公网 IP</button><div class="out" id="o"></div>`,
dns:`<input id="x" value="cloudflare.com"><select id="type"><option>A</option><option>AAAA</option><option>MX</option><option>TXT</option></select><button class="primary" id="go">查询 DNS</button><div class="out" id="o"></div>`,
headers:`<button class="primary" id="go">查看 Header</button><div class="out" id="o"></div>`,
cidr:`<input id="x" value="192.168.1.0/24"><button class="primary" id="go">计算</button><div class="out" id="o"></div>`,
cfip:`<input id="x" placeholder="输入 Cloudflare IP，例如 104.16.0.1"><button class="primary" id="go">测试</button><div class="out" id="o"></div>`,
calc:`<input id="x" placeholder="例如 (12+5)*3/2"><button class="primary" id="go">计算</button><div class="out" id="o"></div>`,
date:`<div class="row"><input id="a" type="date"><input id="b" type="date"></div><button class="primary" id="go">计算天数</button><div class="out" id="o"></div>`,
random:`<div class="row"><input id="a" type="number" value="1"><input id="b" type="number" value="100"></div><button class="primary" id="go">生成</button><div class="out" id="o"></div>`
};

const $=id=>document.getElementById(id);

function render(q=""){
  $("categories").innerHTML="";
  for(const [cat,items] of tools){
    const list=items.filter(x=>(x[0]+" "+x[1]).toLowerCase().includes(q.toLowerCase()));
    if(!list.length) continue;
    const section=document.createElement("section"); section.className="category";
    section.innerHTML=`<h2>${cat}</h2><div class="grid"></div>`;
    const grid=section.querySelector(".grid");
    for(const item of list){
      const b=document.createElement("button"); b.className="tool";
      b.innerHTML=`<b>${item[0]}</b><span>${item[1]}</span>`;
      b.onclick=()=>openTool(item[2],item[0]); grid.appendChild(b);
    }
    $("categories").appendChild(section);
  }
}
function openTool(type,name){
  $("toolTitle").textContent=name;
  $("toolApp").innerHTML=templates[type]||"<div class='out'>开发中</div>";
  $("modal").classList.remove("hidden");
  bind(type);
}
$("search").addEventListener("input",e=>render(e.target.value));
$("closeBtn").onclick=()=>$("modal").classList.add("hidden");
$("modal").onclick=e=>{if(e.target===e.currentTarget)e.currentTarget.classList.add("hidden")};
$("themeBtn").onclick=()=>{
  document.documentElement.classList.toggle("light");
  localStorage.setItem("crove-theme",document.documentElement.classList.contains("light")?"light":"dark");
};
if(localStorage.getItem("crove-theme")==="light") document.documentElement.classList.add("light");

function bind(t){
 const x=$("x"),o=$("o");
 if(t==="text") x.oninput=()=>{$("c").textContent=x.value.length;$("w").textContent=(x.value.trim().match(/\S+/g)||[]).length;$("l").textContent=x.value?x.value.split(/\n/).length:0};
 if(t==="dedupe") $("go").onclick=()=>o.textContent=[...new Set(x.value.split(/\r?\n/))].join("\n");
 if(t==="regex") $("go").onclick=()=>{try{o.textContent=new RegExp($("p").value).test($("t").value)?"匹配成功":"不匹配"}catch(e){o.textContent=e.message}};
 if(t==="markdown") x.oninput=()=>o.innerHTML=x.value.replace(/^### (.*)$/gm,"<h3>$1</h3>").replace(/^## (.*)$/gm,"<h2>$1</h2>").replace(/^# (.*)$/gm,"<h1>$1</h1>").replace(/\*\*(.*?)\*\*/g,"<b>$1</b>").replace(/\n/g,"<br>");
 if(t==="json"){$("fmt").onclick=()=>{try{o.textContent=JSON.stringify(JSON.parse(x.value),null,2)}catch(e){o.textContent=e.message}};$("min").onclick=()=>{try{o.textContent=JSON.stringify(JSON.parse(x.value))}catch(e){o.textContent=e.message}}}
 if(t==="base64"){$("enc").onclick=()=>o.textContent=btoa(unescape(encodeURIComponent(x.value)));$("dec").onclick=()=>{try{o.textContent=decodeURIComponent(escape(atob(x.value)))}catch(e){o.textContent=e.message}}}
 if(t==="url"){$("enc").onclick=()=>o.textContent=encodeURIComponent(x.value);$("dec").onclick=()=>{try{o.textContent=decodeURIComponent(x.value)}catch(e){o.textContent=e.message}}}
 if(t==="uuid")$("go").onclick=()=>o.textContent=crypto.randomUUID();
 if(t==="timestamp"){$("now").onclick=()=>o.textContent=Math.floor(Date.now()/1000);$("conv").onclick=()=>o.textContent=new Date(Number(x.value)*1000).toLocaleString()}
 if(t==="hash")$("go").onclick=async()=>{const b=await crypto.subtle.digest($("alg").value,new TextEncoder().encode(x.value));o.textContent=[...new Uint8Array(b)].map(v=>v.toString(16).padStart(2,"0")).join("")};
 if(t==="password")$("go").onclick=()=>{const n=+$("n").value,chars="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*";const a=new Uint32Array(n);crypto.getRandomValues(a);o.textContent=[...a].map(v=>chars[v%chars.length]).join("")};
 if(t==="qr")$("go").onclick=()=>o.innerHTML=`<img style="display:block;max-width:260px;margin:15px auto" src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(x.value)}">`;
 if(t==="img64")$("f").onchange=e=>{const r=new FileReader();r.onload=()=>o.textContent=r.result;r.readAsDataURL(e.target.files[0])};
 if(t==="imginfo")$("f").onchange=e=>{const f=e.target.files[0],im=new Image();im.onload=()=>o.textContent=`文件：${f.name}\n类型：${f.type}\n大小：${(f.size/1024).toFixed(1)} KB\n尺寸：${im.width} × ${im.height}`;im.src=URL.createObjectURL(f)};
 if(t==="ip")$("go").onclick=async()=>{o.textContent="查询中…";try{o.textContent=await(await fetch("/api/ip")).text()}catch(e){o.textContent=e.message}};
 if(t==="dns")$("go").onclick=async()=>{o.textContent="查询中…";try{o.textContent=await(await fetch(`/api/dns?name=${encodeURIComponent(x.value)}&type=${$("type").value}`)).text()}catch(e){o.textContent=e.message}};
 if(t==="headers")$("go").onclick=async()=>{o.textContent=await(await fetch("/api/headers")).text()};
 if(t==="cidr")$("go").onclick=()=>{try{const [ip,p]=x.value.split("/");const n=ip.split(".").map(Number);if(n.length!==4||n.some(v=>v<0||v>255)||+p<0||+p>32)throw Error();const v=((n[0]<<24)|(n[1]<<16)|(n[2]<<8)|n[3])>>>0,bits=+p,mask=bits===0?0:(0xffffffff<<(32-bits))>>>0,net=(v&mask)>>>0,fmt=v=>[(v>>>24)&255,(v>>>16)&255,(v>>>8)&255,v&255].join(".");o.textContent=`网络地址：${fmt(net)}\n广播地址：${fmt((net+2**(32-bits)-1)>>>0)}\n掩码：/${bits}\n地址数：${2**(32-bits)}`}catch(e){o.textContent="请输入合法 IPv4/CIDR"}};
 if(t==="cfip")$("go").onclick=async()=>{o.textContent="测试中…";try{o.textContent=await(await fetch(`/api/cfip?ip=${encodeURIComponent(x.value)}`)).text()}catch(e){o.textContent=e.message}};
 if(t==="calc")$("go").onclick=()=>{try{if(!/^[0-9+\-*/().%\s]+$/.test(x.value))throw Error("仅允许数字和基础运算符");o.textContent=Function('"use strict";return ('+x.value+')')()}catch(e){o.textContent=e.message}};
 if(t==="date")$("go").onclick=()=>{if(!$("a").value||!$("b").value){o.textContent="请选择两个日期";return}o.textContent=Math.abs(new Date($("b").value)-new Date($("a").value))/86400000+" 天"};
 if(t==="random")$("go").onclick=()=>{const a=+$("a").value,b=+$("b").value;o.textContent=Math.floor(Math.random()*(b-a+1))+a};
}
render();
