const tools=[
["📝 文本工具",[
["字数统计","统计字符、单词、行数","text"],
["文本去重","按行去除重复内容","dedupe"],
["正则测试","快速测试 JavaScript 正则","regex"],
["Markdown","实时 Markdown 预览","markdown"]
]],
["💻 开发工具",[
["JSON 格式化","格式化或压缩 JSON","json"],
["Base64","Base64 编解码","base64"],
["URL 编解码","URL encode / decode","url"],
["UUID","生成 UUID","uuid"],
["时间戳","Unix 时间戳转换","timestamp"],
["Hash","MD5 / SHA-1 / SHA-256 / SHA-512","hash"],
["密码生成","生成随机高强度密码","password"],
["进制转换","二进制 / 十进制 / 十六进制","base"],
]],
["🖼️ 图片工具",[
["二维码","输入文字生成二维码","qr"],
["图片 Base64","图片转 Base64","img64"],
["图片信息","查看尺寸、类型、大小","imginfo"]
]],
["🌐 网络工具",[
["IP 查询","查询当前公网 IP","ip"],
["DNS 查询","在线 DNS 查询","dns"],
["HTTP Header","查看请求 Header","headers"],
["CIDR 计算","计算 IPv4 网段","cidr"]
]],
["☁️ Cloudflare",[
["CF IP 测试","测试 Cloudflare IP 延迟","cfip"]
]],
["🧮 计算工具",[
["科学计算器","基础数学表达式计算","calc"],
["日期计算","计算两个日期相差天数","date"],
["随机数","生成指定范围随机数","random"]
]]
];

const $=s=>document.querySelector(s);
const modal=$("#modal"),app=$("#app"),title=$("#title");
function render(filter=""){
 $("#categories").innerHTML=tools.map(([cat,items])=>{
   const a=items.filter(x=>(x[0]+x[1]).toLowerCase().includes(filter.toLowerCase()));
   if(!a.length)return "";
   return `<section class="category"><h2>${cat}</h2><div class="grid">${a.map(x=>`<button class="tool" data-tool="${x[2]}"><b>${x[0]}</b><span>${x[1]}</span></button>`).join("")}</div></section>`;
 }).join("");
 document.querySelectorAll(".tool").forEach(b=>b.onclick=()=>openTool(b.dataset.tool,b.querySelector("b").textContent));
}
$("#search").oninput=e=>render(e.target.value);
$("#theme").onclick=()=>{document.documentElement.style.setProperty("--bg",getComputedStyle(document.documentElement).getPropertyValue("--bg").trim()==="#0b0d12"?"#f5f7fb":"#0b0d12");document.documentElement.style.setProperty("--text",getComputedStyle(document.documentElement).getPropertyValue("--text").trim()==="#f5f7fb"?"#10131a":"#f5f7fb");};
$("#close").onclick=()=>modal.classList.add("hidden");modal.onclick=e=>{if(e.target===modal)modal.classList.add("hidden")};

function openTool(type,name){title.textContent=name;modal.classList.remove("hidden");app.innerHTML=templates[type]||"<p>开发中</p>";bind(type)}
const templates={
text:`<textarea id="x" placeholder="输入文本…"></textarea><div class="stats"><div class="stat"><b id="c">0</b>字符</div><div class="stat"><b id="w">0</b>词</div><div class="stat"><b id="l">0</b>行</div></div>`,
dedupe:`<textarea id="x" placeholder="每行一项…"></textarea><button class="btn" id="go">去重</button><div class="out" id="o"></div>`,
regex:`<input id="p" placeholder="正则，例如 ^[A-Z]+$"><input id="t" placeholder="测试文本"><button class="btn" id="go">测试</button><div class="out" id="o"></div>`,
json:`<textarea id="x" placeholder='{"hello":"Crove"}'></textarea><div class="row"><button class="btn" id="fmt">格式化</button><button class="btn secondary" id="min">压缩</button></div><div class="out" id="o"></div>`,
base64:`<textarea id="x" placeholder="输入内容…"></textarea><div class="row"><button class="btn" id="enc">编码</button><button class="btn secondary" id="dec">解码</button></div><div class="out" id="o"></div>`,
url:`<textarea id="x"></textarea><div class="row"><button class="btn" id="enc">编码</button><button class="btn secondary" id="dec">解码</button></div><div class="out" id="o"></div>`,
uuid:`<button class="btn" id="go">生成 UUID</button><div class="out" id="o"></div>`,
timestamp:`<button class="btn" id="now">当前时间戳</button><input id="x" placeholder="输入 Unix 时间戳"><button class="btn secondary" id="conv">转换为日期</button><div class="out" id="o"></div>`,
hash:`<textarea id="x"></textarea><select id="alg"><option>SHA-256</option><option>SHA-1</option><option>SHA-512</option></select><button class="btn" id="go">计算 Hash</button><div class="out" id="o"></div>`,
password:`<input id="n" type="number" value="20" min="6" max="128"><button class="btn" id="go">生成密码</button><div class="out" id="o"></div>`,
qr:`<input id="x" placeholder="输入网址或文字"><button class="btn" id="go">生成二维码</button><div id="o"></div>`,
img64:`<input id="f" type="file" accept="image/*"><div class="out" id="o"></div>`,
imginfo:`<input id="f" type="file" accept="image/*"><div class="out" id="o"></div>`,
ip:`<button class="btn" id="go">查询公网 IP</button><div class="out" id="o"></div>`,
dns:`<input id="x" value="cloudflare.com"><select id="type"><option>A</option><option>AAAA</option><option>MX</option><option>TXT</option></select><button class="btn" id="go">查询 DNS</button><div class="out" id="o"></div>`,
headers:`<button class="btn" id="go">查看请求 Header</button><div class="out" id="o"></div>`,
cidr:`<input id="x" value="192.168.1.0/24"><button class="btn" id="go">计算</button><div class="out" id="o"></div>`,
cfip:`<input id="x" placeholder="输入 Cloudflare IP，例如 104.16.0.1"><button class="btn" id="go">测试</button><div class="out" id="o"></div>`,
calc:`<input id="x" placeholder="例如 (12+5)*3/2"><button class="btn" id="go">计算</button><div class="out" id="o"></div>`,
date:`<div class="row"><input id="a" type="date"><input id="b" type="date"></div><button class="btn" id="go">计算天数</button><div class="out" id="o"></div>`,
random:`<div class="row"><input id="a" type="number" value="1"><input id="b" type="number" value="100"></div><button class="btn" id="go">生成</button><div class="out" id="o"></div>`,
markdown:`<textarea id="x" placeholder="# Crove Tools\n\n输入 Markdown…"></textarea><div class="out" id="o"></div>`
};
function bind(t){
 const x=$("#x"),o=$("#o");
 if(t==="text"){x.oninput=()=>{$("#c").textContent=x.value.length;$("#w").textContent=(x.value.trim().match(/\S+/g)||[]).length;$("#l").textContent=x.value?x.value.split(/\n/).length:0}}
 if(t==="dedupe")$("#go").onclick=()=>o.textContent=[...new Set(x.value.split(/\r?\n/))].join("\n");
 if(t==="regex")$("#go").onclick=()=>{try{o.textContent=new RegExp($("#p").value).test($("#t").value)?"匹配成功":"不匹配"}catch(e){o.textContent=e.message}};
 if(t==="json"){fmt.onclick=()=>{try{o.textContent=JSON.stringify(JSON.parse(x.value),null,2)}catch(e){o.textContent=e.message}};min.onclick=()=>{try{o.textContent=JSON.stringify(JSON.parse(x.value))}catch(e){o.textContent=e.message}}}
 if(t==="base64"){enc.onclick=()=>o.textContent=btoa(unescape(encodeURIComponent(x.value)));dec.onclick=()=>{try{o.textContent=decodeURIComponent(escape(atob(x.value)))}catch(e){o.textContent=e.message}}}
 if(t==="url"){enc.onclick=()=>o.textContent=encodeURIComponent(x.value);dec.onclick=()=>o.textContent=decodeURIComponent(x.value)}
 if(t==="uuid")go.onclick=()=>o.textContent=crypto.randomUUID();
 if(t==="timestamp"){now.onclick=()=>o.textContent=Math.floor(Date.now()/1000);conv.onclick=()=>o.textContent=new Date(Number(x.value)*1000).toLocaleString()}
 if(t==="hash")go.onclick=async()=>{const b=await crypto.subtle.digest($("#alg").value,new TextEncoder().encode(x.value));o.textContent=[...new Uint8Array(b)].map(v=>v.toString(16).padStart(2,"0")).join("")}
 if(t==="password")go.onclick=()=>{const n=+$("#n").value,chars="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*";let s="";for(let i=0;i<n;i++)s+=chars[crypto.getRandomValues(new Uint32Array(1))[0]%chars.length];o.textContent=s}
 if(t==="qr")go.onclick=()=>o.innerHTML=`<img class="qr" alt="QR" src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(x.value)}">`;
 if(t==="img64")$("#f").onchange=e=>{const r=new FileReader();r.onload=()=>o.textContent=r.result;r.readAsDataURL(e.target.files[0])};
 if(t==="imginfo")$("#f").onchange=e=>{const f=e.target.files[0],im=new Image();im.onload=()=>o.textContent=`文件：${f.name}\n类型：${f.type}\n大小：${(f.size/1024).toFixed(1)} KB\n尺寸：${im.width} × ${im.height}`;im.src=URL.createObjectURL(f)};
 if(t==="ip")go.onclick=async()=>{o.textContent="查询中…";try{o.textContent=await (await fetch("/api/ip")).text()}catch(e){o.textContent=e.message}};
 if(t==="dns")go.onclick=async()=>{o.textContent="查询中…";o.textContent=await (await fetch(`/api/dns?name=${encodeURIComponent(x.value)}&type=${$("#type").value}`)).text()};
 if(t==="headers")go.onclick=async()=>o.textContent=await (await fetch("/api/headers")).text();
 if(t==="cidr")go.onclick=()=>{try{let [ip,p]=x.value.split("/"),n=ip.split(".").map(Number),mask=32-+p,base=(n[0]*2**24+n[1]*2**16+n[2]*2**8+n[3])>>>0,net=(base & (0xffffffff<<mask))>>>0;let fmt=v=>[(v>>>24)&255,(v>>>16)&255,(v>>>8)&255,v&255].join(".");o.textContent=`网络地址：${fmt(net)}\n掩码：/${p}\n广播地址：${fmt((net+(2**mask-1))>>>0)}\n地址数：${2**mask}`}catch(e){o.textContent="请输入合法 IPv4/CIDR"}};
 if(t==="cfip")go.onclick=async()=>{o.textContent="测试中…";o.textContent=await (await fetch(`/api/cfip?ip=${encodeURIComponent(x.value)}`)).text()};
 if(t==="calc")go.onclick=()=>{try{if(!/^[0-9+\\-*/().%\\s]+$/.test(x.value))throw Error("仅允许数字和基础运算符");o.textContent=Function(`"use strict";return (${x.value})`)()}catch(e){o.textContent=e.message}};
 if(t==="date")go.onclick=()=>o.textContent=Math.abs((new Date($("#b").value)-new Date($("#a").value))/86400000)+" 天";
 if(t==="random")go.onclick=()=>{let a=+$("#a").value,b=+$("#b").value;o.textContent=Math.floor(Math.random()*(b-a+1))+a};
 if(t==="markdown")x.oninput=()=>o.innerHTML=x.value.replace(/^### (.*)$/gm,"<h3>$1</h3>").replace(/^## (.*)$/gm,"<h2>$1</h2>").replace(/^# (.*)$/gm,"<h1>$1</h1>").replace(/\*\*(.*?)\*\*/g,"<b>$1</b>").replace(/\n/g,"<br>");
}
render();