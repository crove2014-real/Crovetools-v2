const DATA=[
["⭐ 常用工具",[
["JSON 格式化","格式化、压缩 JSON","json"],["Base64","UTF-8 Base64 编解码","base64"],["URL 编解码","URL Encode / Decode","url"],["二维码","生成二维码","qr"],["UUID","生成 UUID","uuid"],["密码生成","安全随机密码","password"],["时间戳","Unix 时间戳","timestamp"],["Hash","SHA-1 / SHA-256 / SHA-512","hash"]]],
["📝 文本工具",[
["字数统计","字符、词语、行数、字节","text"],["文本去重","按行去重","dedupe"],["文本排序","按字母/数字排序","sort"],["空白清理","清除多余空格和空行","trim"],["大小写转换","大小写、首字母转换","case"],["文本反转","反转字符或行","reverse"],["查找替换","批量查找替换","replace"],["正则测试","测试 JavaScript 正则","regex"],["Markdown","Markdown 简易预览","markdown"],["Lorem Ipsum","生成占位文本","lorem"]]],
["💻 开发工具",[
["JSON 转 YAML","JSON 转简单 YAML","jsonyaml"],["HTML 转义","HTML Escape / Unescape","html"],["XML 转义","XML 实体处理","xml"],["Unicode","Unicode 编解码","unicode"],["ASCII","ASCII 编码/解码","ascii"],["JWT 查看","解析 JWT Payload","jwt"],["CSS 压缩","简单 CSS 压缩","mincss"],["JS/HTML 压缩","基础文本压缩","mintext"],["颜色转换","HEX / RGB / HSL","color"],["进制转换","2/8/10/16 进制","base"],["数字转字节","Bytes / KB / MB / GB","bytes"],["时间 ISO","日期与 ISO 时间","iso"],["Cron 说明","常见 Cron 格式参考","cron"]]],
["🔐 加密与安全",[
["Hash","SHA-1/256/512","hash"],["HMAC","HMAC-SHA256","hmac"],["密码强度","检测密码强度","strength"],["随机字符串","生成随机字符串","randomstr"],["随机数","安全随机整数","random"],["OTP","生成 TOTP 验证码","otp"]]],
["🖼️ 图片工具",[
["图片 Base64","图片转 Data URL","img64"],["图片信息","尺寸、类型、大小","imginfo"],["图片预览","本地图片预览","imgpreview"],["图片压缩","浏览器端 JPEG 压缩","compress"],["图片尺寸","缩放图片","resize"]]],
["🌐 网络工具",[
["IP 查询","查询当前公网 IP","ip"],["DNS 查询","A/AAAA/MX/TXT","dns"],["HTTP Header","查看当前请求 Header","headers"],["CIDR 计算","IPv4 网段计算","cidr"],["URL 解析","拆解 URL 各部分","urlparse"],["IPv4 转整数","IPv4 与整数互转","ipint"],["User-Agent","查看浏览器 UA","ua"],["我的网络信息","浏览器网络信息","netinfo"]]],
["☁️ Cloudflare",[
["CF IP 测试","测试指定 Cloudflare IP","cfip"],["CF Trace","查看当前 Cloudflare Trace","trace"],["CF Headers","查看 Cloudflare 请求信息","cfheaders"]]],
["🧮 计算工具",[
["科学计算器","基础数学表达式","calc"],["日期计算","两个日期相差天数","date"],["百分比","百分比计算","percent"],["平均值","平均数/总和/中位数","average"],["BMI","BMI 计算","bmi"],["利息计算","简单利息","interest"],["面积计算","常见图形面积","area"],["温度转换","摄氏/华氏/开尔文","temp"],["长度转换","常见长度单位","length"],["重量转换","常见重量单位","weight"],["数据换算","bit/Byte/KB/MB/GB","dataconv"]]],
["🛠️ 实用工具",[
["文本转文件","下载 TXT 文件","txtfile"],["文件信息","查看文件名/类型/大小","fileinfo"],["时间倒计时","倒计时到指定时间","countdown"],["秒表","浏览器秒表","stopwatch"],["颜色选择器","选择颜色并复制值","picker"],["网页分享","生成当前页面分享链接","share"],["设备信息","屏幕、语言、平台信息","device"],["在线存储说明","LocalStorage 查看器","storage"]]]
];

const T={
text:`<textarea id="x" placeholder="输入文本…"></textarea><div class="stats"><div class="stat"><b id="c">0</b>字符</div><div class="stat"><b id="w">0</b>词</div><div class="stat"><b id="l">0</b>行</div><div class="stat"><b id="by">0</b>字节</div></div>`,
dedupe:`<textarea id="x" placeholder="每行一项…"></textarea><button class="primary" id="go">去重</button><div class="out" id="o"></div>`,
sort:`<textarea id="x" placeholder="每行一项…"></textarea><div class="row"><button class="primary" id="asc">升序</button><button id="desc">降序</button></div><div class="out" id="o"></div>`,
trim:`<textarea id="x"></textarea><button class="primary" id="go">清理空白</button><div class="out" id="o"></div>`,
case:`<textarea id="x"></textarea><div class="row"><button class="primary" id="upper">大写</button><button id="lower">小写</button><button id="title">首字母</button></div><div class="out" id="o"></div>`,
reverse:`<textarea id="x"></textarea><button class="primary" id="go">反转</button><div class="out" id="o"></div>`,
replace:`<textarea id="x"></textarea><input id="a" placeholder="查找"><input id="b" placeholder="替换为"><button class="primary" id="go">替换全部</button><div class="out" id="o"></div>`,
regex:`<input id="p" placeholder="正则"><input id="t" placeholder="测试文本"><button class="primary" id="go">测试</button><div class="out" id="o"></div>`,
markdown:`<textarea id="x" placeholder="# 标题\n\n**粗体**"></textarea><div class="out" id="o"></div>`,
lorem:`<input id="n" type="number" value="3" min="1" max="20"><button class="primary" id="go">生成段落</button><div class="out" id="o"></div>`,
json:`<textarea id="x" placeholder='{"hello":"Crove"}'></textarea><div class="row"><button class="primary" id="fmt">格式化</button><button id="min">压缩</button></div><div class="out" id="o"></div>`,
base64:`<textarea id="x"></textarea><div class="row"><button class="primary" id="enc">编码</button><button id="dec">解码</button></div><div class="out" id="o"></div>`,
url:`<textarea id="x"></textarea><div class="row"><button class="primary" id="enc">编码</button><button id="dec">解码</button></div><div class="out" id="o"></div>`,
uuid:`<button class="primary" id="go">生成 UUID</button><div class="out" id="o"></div>`,
timestamp:`<button class="primary" id="now">当前时间戳</button><input id="x" placeholder="Unix 时间戳"><button id="conv">转为日期</button><div class="out" id="o"></div>`,
hash:`<textarea id="x"></textarea><select id="alg"><option>SHA-256</option><option>SHA-1</option><option>SHA-512</option></select><button class="primary" id="go">计算</button><div class="out" id="o"></div>`,
password:`<input id="n" type="number" value="20" min="6" max="128"><button class="primary" id="go">生成密码</button><div class="out" id="o"></div>`,
hmac:`<input id="key" placeholder="密钥"><textarea id="x" placeholder="消息"></textarea><button class="primary" id="go">计算 HMAC-SHA256</button><div class="out" id="o"></div>`,
strength:`<input id="x" type="password" placeholder="输入密码"><button class="primary" id="go">检测</button><div class="out" id="o"></div>`,
randomstr:`<input id="n" type="number" value="24"><button class="primary" id="go">生成</button><div class="out" id="o"></div>`,
random:`<div class="row"><input id="a" type="number" value="1"><input id="b" type="number" value="100"></div><button class="primary" id="go">生成</button><div class="out" id="o"></div>`,
otp:`<input id="secret" placeholder="Base32 Secret"><button class="primary" id="go">生成 TOTP</button><div class="out" id="o"></div>`,
jsonyaml:`<textarea id="x"></textarea><button class="primary" id="go">转换</button><div class="out" id="o"></div>`,
html:`<textarea id="x"></textarea><div class="row"><button class="primary" id="enc">转义</button><button id="dec">反转义</button></div><div class="out" id="o"></div>`,
xml:`<textarea id="x"></textarea><button class="primary" id="go">实体转义</button><div class="out" id="o"></div>`,
unicode:`<textarea id="x"></textarea><div class="row"><button class="primary" id="enc">编码</button><button id="dec">解码</button></div><div class="out" id="o"></div>`,
ascii:`<textarea id="x"></textarea><div class="row"><button class="primary" id="enc">ASCII 编码</button><button id="dec">ASCII 解码</button></div><div class="out" id="o"></div>`,
jwt:`<textarea id="x" placeholder="粘贴 JWT"></textarea><button class="primary" id="go">解析 Payload</button><div class="out" id="o"></div>`,
mincss:`<textarea id="x"></textarea><button class="primary" id="go">压缩 CSS</button><div class="out" id="o"></div>`,
mintext:`<textarea id="x"></textarea><button class="primary" id="go">压缩空白</button><div class="out" id="o"></div>`,
color:`<input id="x" value="#6366f1"><input id="picker" type="color" value="#6366f1"><button class="primary" id="go">转换</button><div class="out" id="o"></div>`,
base:`<input id="x" value="255"><select id="from"><option value="10">十进制</option><option value="2">二进制</option><option value="8">八进制</option><option value="16">十六进制</option></select><select id="to"><option value="16">十六进制</option><option value="10">十进制</option><option value="2">二进制</option><option value="8">八进制</option></select><button class="primary" id="go">转换</button><div class="out" id="o"></div>`,
bytes:`<input id="x" value="1024"><select id="u"><option>Byte</option><option>KB</option><option>MB</option><option>GB</option></select><button class="primary" id="go">换算</button><div class="out" id="o"></div>`,
iso:`<button class="primary" id="go">当前 ISO 时间</button><div class="out" id="o"></div>`,
cron:`<div class="out">* * * * * = 每分钟\n*/5 * * * * = 每5分钟\n0 * * * * = 每小时\n0 0 * * * = 每天0点\n0 0 * * 1 = 每周一\n0 0 1 * * = 每月1日</div>`,
img64:`<input id="f" type="file" accept="image/*"><div class="out" id="o"></div>`,
imginfo:`<input id="f" type="file" accept="image/*"><div class="out" id="o"></div>`,
imgpreview:`<input id="f" type="file" accept="image/*"><div id="o"></div>`,
compress:`<input id="f" type="file" accept="image/*"><input id="q" type="number" value="0.8" min="0.1" max="1" step="0.1"><button class="primary" id="go">压缩并下载</button><div class="out" id="o"></div>`,
resize:`<input id="f" type="file" accept="image/*"><div class="row"><input id="w" type="number" placeholder="宽"><input id="h" type="number" placeholder="高"></div><button class="primary" id="go">缩放并下载</button><div class="out" id="o"></div>`,
ip:`<button class="primary" id="go">查询公网 IP</button><div class="out" id="o"></div>`,
dns:`<input id="x" value="cloudflare.com"><select id="type"><option>A</option><option>AAAA</option><option>MX</option><option>TXT</option></select><button class="primary" id="go">查询 DNS</button><div class="out" id="o"></div>`,
headers:`<button class="primary" id="go">查看 Header</button><div class="out" id="o"></div>`,
cidr:`<input id="x" value="192.168.1.0/24"><button class="primary" id="go">计算</button><div class="out" id="o"></div>`,
urlparse:`<input id="x" value="https://example.com:443/path?a=1#top"><button class="primary" id="go">解析</button><div class="out" id="o"></div>`,
ipint:`<input id="x" value="8.8.8.8"><button class="primary" id="go">IPv4 → 整数</button><div class="out" id="o"></div>`,
ua:`<button class="primary" id="go">查看 User-Agent</button><div class="out" id="o"></div>`,
netinfo:`<button class="primary" id="go">查看网络信息</button><div class="out" id="o"></div>`,
cfip:`<input id="x" placeholder="Cloudflare IP"><button class="primary" id="go">测试</button><div class="out" id="o"></div>`,
trace:`<button class="primary" id="go">获取 CF Trace</button><div class="out" id="o"></div>`,
cfheaders:`<button class="primary" id="go">查看 Cloudflare 信息</button><div class="out" id="o"></div>`,
calc:`<input id="x" placeholder="例如 (12+5)*3/2"><button class="primary" id="go">计算</button><div class="out" id="o"></div>`,
date:`<div class="row"><input id="a" type="date"><input id="b" type="date"></div><button class="primary" id="go">计算</button><div class="out" id="o"></div>`,
percent:`<input id="a" type="number" value="20"><input id="b" type="number" value="100"><button class="primary" id="go">计算 A 是 B 的百分比</button><div class="out" id="o"></div>`,
average:`<textarea id="x" placeholder="每行或逗号输入数字"></textarea><button class="primary" id="go">计算</button><div class="out" id="o"></div>`,
bmi:`<input id="h" type="number" placeholder="身高 cm"><input id="w" type="number" placeholder="体重 kg"><button class="primary" id="go">计算 BMI</button><div class="out" id="o"></div>`,
interest:`<input id="p" type="number" placeholder="本金"><input id="r" type="number" placeholder="年利率 %"><input id="y" type="number" placeholder="年数"><button class="primary" id="go">计算</button><div class="out" id="o"></div>`,
area:`<select id="type"><option value="circle">圆</option><option value="rect">矩形</option><option value="tri">三角形</option></select><input id="a" type="number" placeholder="参数1"><input id="b" type="number" placeholder="参数2（矩形/三角形）"><button class="primary" id="go">计算面积</button><div class="out" id="o"></div>`,
temp:`<input id="x" type="number" value="0"><select id="from"><option>C</option><option>F</option><option>K</option></select><select id="to"><option>F</option><option>C</option><option>K</option></select><button class="primary" id="go">转换</button><div class="out" id="o"></div>`,
length:`<input id="x" type="number" value="1"><select id="from"><option>m</option><option>km</option><option>cm</option><option>mm</option><option>in</option><option>ft</option></select><select id="to"><option>m</option><option>km</option><option>cm</option><option>mm</option><option>in</option><option>ft</option></select><button class="primary" id="go">转换</button><div class="out" id="o"></div>`,
weight:`<input id="x" type="number" value="1"><select id="from"><option>kg</option><option>g</option><option>mg</option><option>lb</option></select><select id="to"><option>kg</option><option>g</option><option>mg</option><option>lb</option></select><button class="primary" id="go">转换</button><div class="out" id="o"></div>`,
dataconv:`<input id="x" type="number" value="1"><select id="from"><option>Byte</option><option>KB</option><option>MB</option><option>GB</option></select><select id="to"><option>Byte</option><option>KB</option><option>MB</option><option>GB</option></select><button class="primary" id="go">转换</button><div class="out" id="o"></div>`,
txtfile:`<textarea id="x" placeholder="输入要下载的文本…"></textarea><button class="primary" id="go">下载 TXT</button><div class="out" id="o"></div>`,
fileinfo:`<input id="f" type="file"><div class="out" id="o"></div>`,
countdown:`<input id="d" type="datetime-local"><button class="primary" id="go">开始倒计时</button><div class="out" id="o"></div>`,
stopwatch:`<button class="primary" id="start">开始</button><button id="stop">停止</button><button id="reset">重置</button><div class="out" id="o">0.0 秒</div>`,
picker:`<input id="p" type="color" value="#6366f1"><div class="out" id="o">#6366f1</div>`,
share:`<button class="primary" id="go">分享当前页面</button><div class="out" id="o"></div>`,
device:`<button class="primary" id="go">查看设备信息</button><div class="out" id="o"></div>`,
storage:`<input id="k" placeholder="键名"><input id="v" placeholder="值"><div class="row"><button class="primary" id="save">保存</button><button id="read">读取</button><button id="clear">清空</button></div><div class="out" id="o"></div>`
};

const $=id=>document.getElementById(id);
function render(q=""){const box=$("categories");box.innerHTML="";for(const [cat,items] of DATA){const list=items.filter(x=>(x[0]+" "+x[1]).toLowerCase().includes(q.toLowerCase()));if(!list.length)continue;const s=document.createElement("section");s.className="category";s.innerHTML=`<h2>${cat}</h2><div class="grid"></div>`;const g=s.querySelector(".grid");for(const [n,d,t] of list){const b=document.createElement("button");b.className="tool";b.innerHTML=`<b>${n}</b><span>${d}</span>`;b.onclick=()=>openTool(t,n);g.appendChild(b)}box.appendChild(s)}}
$("search").oninput=e=>render(e.target.value);
$("closeBtn").onclick=()=>$("modal").classList.add("hidden");
$("modal").onclick=e=>{if(e.target===e.currentTarget)e.currentTarget.classList.add("hidden")};
$("themeBtn").onclick=()=>{document.documentElement.classList.toggle("light");localStorage.setItem("crove-theme",document.documentElement.classList.contains("light")?"light":"dark")};
if(localStorage.getItem("crove-theme")==="light")document.documentElement.classList.add("light");

function openTool(t,n){$("toolTitle").textContent=n;$("toolApp").innerHTML=T[t]||"<div class='out'>开发中</div>";$("modal").classList.remove("hidden");bind(t)}

function downloadBlob(blob,name){const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function b64enc(s){return btoa(unescape(encodeURIComponent(s)))}function b64dec(s){return decodeURIComponent(escape(atob(s)))}
function hex8(v){return v.toString(16).padStart(8,"0")}
async function digest(algo,s){const b=await crypto.subtle.digest(algo,new TextEncoder().encode(s));return [...new Uint8Array(b)].map(v=>v.toString(16).padStart(2,"0")).join("")}

function bind(t){
 const x=$("x"),o=$("o");
 if(t==="text")x.oninput=()=>{$("c").textContent=x.value.length;$("w").textContent=(x.value.trim().match(/\S+/g)||[]).length;$("l").textContent=x.value?x.value.split(/\n/).length:0;$("by").textContent=new Blob([x.value]).size};
 if(t==="dedupe")$("go").onclick=()=>o.textContent=[...new Set(x.value.split(/\r?\n/))].join("\n");
 if(t==="sort"){asc.onclick=()=>o.textContent=x.value.split(/\r?\n/).sort((a,b)=>a.localeCompare(b,"zh-CN")).join("\n");desc.onclick=()=>o.textContent=x.value.split(/\r?\n/).sort((a,b)=>b.localeCompare(a,"zh-CN")).join("\n")}
 if(t==="trim")$("go").onclick=()=>o.textContent=x.value.split(/\r?\n/).map(v=>v.trim()).filter(Boolean).join("\n");
 if(t==="case"){upper.onclick=()=>o.textContent=x.value.toUpperCase();lower.onclick=()=>o.textContent=x.value.toLowerCase();title.onclick=()=>o.textContent=x.value.toLowerCase().replace(/\b\w/g,m=>m.toUpperCase())}
 if(t==="reverse")$("go").onclick=()=>o.textContent=x.value.split("\n").map(v=>[...v].reverse().join("")).reverse().join("\n");
 if(t==="replace")$("go").onclick=()=>o.textContent=x.value.split($("a").value).join($("b").value);
 if(t==="regex")$("go").onclick=()=>{try{const r=new RegExp($("p").value,"g"),m=x?null:null;const z=[...$("t").value.matchAll(r)].map(v=>v[0]);o.textContent=`${z.length} 个匹配\n${z.join("\n")}`}catch(e){o.textContent=e.message}};
 if(t==="markdown")x.oninput=()=>o.innerHTML=x.value.replace(/^### (.*)$/gm,"<h3>$1</h3>").replace(/^## (.*)$/gm,"<h2>$1</h2>").replace(/^# (.*)$/gm,"<h1>$1</h1>").replace(/\*\*(.*?)\*\*/g,"<b>$1</b>").replace(/`(.*?)`/g,"<code>$1</code>").replace(/\n/g,"<br>");
 if(t==="lorem")$("go").onclick=()=>{const p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.";o.textContent=Array.from({length:+$("n").value},()=>p).join("\n\n")};
 if(t==="json"){$("fmt").onclick=()=>{try{o.textContent=JSON.stringify(JSON.parse(x.value),null,2)}catch(e){o.textContent=e.message}};$("min").onclick=()=>{try{o.textContent=JSON.stringify(JSON.parse(x.value))}catch(e){o.textContent=e.message}}}
 if(t==="base64"){$("enc").onclick=()=>o.textContent=b64enc(x.value);$("dec").onclick=()=>{try{o.textContent=b64dec(x.value)}catch(e){o.textContent=e.message}}}
 if(t==="url"){$("enc").onclick=()=>o.textContent=encodeURIComponent(x.value);$("dec").onclick=()=>{try{o.textContent=decodeURIComponent(x.value)}catch(e){o.textContent=e.message}}}
 if(t==="uuid")$("go").onclick=()=>o.textContent=crypto.randomUUID();
 if(t==="timestamp"){$("now").onclick=()=>o.textContent=Math.floor(Date.now()/1000);$("conv").onclick=()=>o.textContent=new Date(Number(x.value)*1000).toLocaleString()}
 if(t==="hash")$("go").onclick=async()=>o.textContent=await digest($("alg").value,x.value);
 if(t==="password")$("go").onclick=()=>{const n=+$("n").value,c="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*";const a=new Uint32Array(n);crypto.getRandomValues(a);o.textContent=[...a].map(v=>c[v%c.length]).join("")};
 if(t==="hmac")$("go").onclick=async()=>{const k=await crypto.subtle.importKey("raw",new TextEncoder().encode($("key").value),{name:"HMAC",hash:"SHA-256"},false,["sign"]);const b=await crypto.subtle.sign("HMAC",k,new TextEncoder().encode(x.value));o.textContent=[...new Uint8Array(b)].map(v=>v.toString(16).padStart(2,"0")).join("")};
 if(t==="strength")$("go").onclick=()=>{const s=x.value,score=(s.length>=12)+(s.length>=16)+(/[a-z]/.test(s))+( /[A-Z]/.test(s))+( /\d/.test(s))+( /[^A-Za-z0-9]/.test(s));o.textContent=`强度：${["很弱","弱","一般","一般偏强","强","很强","极强"][score]}\n长度：${s.length}`};
 if(t==="randomstr")$("go").onclick=()=>{const n=+$("n").value,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";const a=new Uint32Array(n);crypto.getRandomValues(a);o.textContent=[...a].map(v=>c[v%c.length]).join("")};
 if(t==="random")$("go").onclick=()=>{const a=+$("a").value,b=+$("b").value;const z=new Uint32Array(1);crypto.getRandomValues(z);o.textContent=Math.floor((z[0]/4294967296)*(b-a+1))+a};
 if(t==="otp")$("go").onclick=()=>o.textContent="TOTP 需要按 RFC 6238 使用 Base32 密钥与时间步长计算；本版提供密钥输入界面，建议后续接入独立实现。";
 if(t==="jsonyaml")$("go").onclick=()=>{try{const obj=JSON.parse(x.value);o.textContent=Object.entries(obj).map(([k,v])=>`${k}: ${typeof v==="object"?JSON.stringify(v):v}`).join("\n")}catch(e){o.textContent=e.message}};
 if(t==="html"){$("enc").onclick=()=>o.textContent=x.value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");$("dec").onclick=()=>{const d=document.createElement("textarea");d.innerHTML=x.value;o.textContent=d.value}};
 if(t==="xml")$("go").onclick=()=>o.textContent=x.value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");
 if(t==="unicode"){$("enc").onclick=()=>o.textContent=[...x.value].map(c=>"\\u"+c.codePointAt(0).toString(16).padStart(4,"0")).join("");$("dec").onclick=()=>{try{o.textContent=x.value.replace(/\\u([0-9a-f]{4})/gi,(_,h)=>String.fromCharCode(parseInt(h,16)))}catch(e){o.textContent=e.message}}}
 if(t==="ascii"){$("enc").onclick=()=>o.textContent=[...x.value].map(c=>c.charCodeAt(0)).join(" ");$("dec").onclick=()=>o.textContent=x.value.trim().split(/\s+/).map(v=>String.fromCharCode(+v)).join("")}
 if(t==="jwt")$("go").onclick=()=>{try{o.textContent=JSON.stringify(JSON.parse(b64dec(x.value.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"))),null,2)}catch(e){o.textContent="JWT Payload 解析失败："+e.message}};
 if(t==="mincss")$("go").onclick=()=>o.textContent=x.value.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\s+/g," ").replace(/\s*([{}:;,])\s*/g,"$1").trim();
 if(t==="mintext")$("go").onclick=()=>o.textContent=x.value.replace(/\s+/g," ").trim();
 if(t==="color"){$("picker").oninput=()=>x.value=$("picker").value;$("go").onclick=()=>{let h=x.value.replace("#","");if(h.length===3)h=h.split("").map(c=>c+c).join("");const n=parseInt(h,16),r=n>>16&255,g=n>>8&255,b=n&255;o.textContent=`HEX #${h}\nRGB rgb(${r}, ${g}, ${b})`}}
 if(t==="base")$("go").onclick=()=>{try{o.textContent=parseInt(x.value,+$("from").value).toString(+$("to").value).toUpperCase()}catch(e){o.textContent="请输入合法数字"}};
 if(t==="bytes"||t==="dataconv")$("go").onclick=()=>{const units=["Byte","KB","MB","GB"],v=+$("x").value,n=1024**units.indexOf($("from").value),m=1024**units.indexOf($("to").value);o.textContent=(v*n/m).toString()};
 if(t==="iso")$("go").onclick=()=>o.textContent=new Date().toISOString();
 if(t==="img64")$("f").onchange=e=>{const r=new FileReader();r.onload=()=>o.textContent=r.result;r.readAsDataURL(e.target.files[0])};
 if(t==="imginfo")$("f").onchange=e=>{const f=e.target.files[0],im=new Image();im.onload=()=>o.textContent=`文件：${f.name}\n类型：${f.type}\n大小：${(f.size/1024).toFixed(1)} KB\n尺寸：${im.width} × ${im.height}`;im.src=URL.createObjectURL(f)};
 if(t==="imgpreview")$("f").onchange=e=>{const u=URL.createObjectURL(e.target.files[0]);o.innerHTML=`<img class="preview" src="${u}">`};
 if(t==="compress")$("go").onclick=async()=>{const f=$("f").files[0];if(!f){o.textContent="请选择图片";return}const im=new Image();im.onload=()=>{const c=document.createElement("canvas");c.width=im.width;c.height=im.height;c.getContext("2d").drawImage(im,0,0);c.toBlob(b=>{downloadBlob(b,"crove-compressed.jpg");o.textContent=`原始：${(f.size/1024).toFixed(1)} KB\n已生成压缩 JPEG`},"image/jpeg",+$("q").value)};im.src=URL.createObjectURL(f)};
 if(t==="resize")$("go").onclick=()=>{const f=$("f").files[0],w=+$("w").value,h=+$("h").value;if(!f||!w||!h){o.textContent="请填写文件和尺寸";return}const im=new Image();im.onload=()=>{const c=document.createElement("canvas");c.width=w;c.height=h;c.getContext("2d").drawImage(im,0,0,w,h);c.toBlob(b=>{downloadBlob(b,"crove-resized.png");o.textContent="已生成缩放图片"},"image/png")};im.src=URL.createObjectURL(f)};
 if(t==="ip")$("go").onclick=async()=>{o.textContent=await(await fetch("/api/ip")).text()};
 if(t==="dns")$("go").onclick=async()=>{o.textContent=await(await fetch(`/api/dns?name=${encodeURIComponent(x.value)}&type=${$("type").value}`)).text()};
 if(t==="headers")$("go").onclick=async()=>{o.textContent=await(await fetch("/api/headers")).text()};
 if(t==="cidr")$("go").onclick=()=>{try{const [ip,p]=x.value.split("/"),n=ip.split(".").map(Number),bits=+p;if(n.length!==4||n.some(v=>v<0||v>255)||bits<0||bits>32)throw Error();const v=((n[0]<<24)|(n[1]<<16)|(n[2]<<8)|n[3])>>>0,mask=bits===0?0:(0xffffffff<<(32-bits))>>>0,net=(v&mask)>>>0,fmt=v=>[(v>>>24)&255,(v>>>16)&255,(v>>>8)&255,v&255].join(".");o.textContent=`网络：${fmt(net)}\n广播：${fmt((net+2**(32-bits)-1)>>>0)}\n前缀：/${bits}\n地址数：${2**(32-bits)}`}catch(e){o.textContent="请输入合法 IPv4/CIDR"}};
 if(t==="urlparse")$("go").onclick=()=>{try{const u=new URL(x.value);o.textContent=`协议：${u.protocol}\n主机：${u.hostname}\n端口：${u.port||"默认"}\n路径：${u.pathname}\n查询：${u.search}\nHash：${u.hash}`}catch(e){o.textContent=e.message}};
 if(t==="ipint")$("go").onclick=()=>{try{o.textContent=x.value.split(".").reduce((a,v)=>(a*256)+(+v),0)}catch(e){o.textContent="错误"}};
 if(t==="ua")$("go").onclick=()=>o.textContent=navigator.userAgent;
 if(t==="netinfo")$("go").onclick=()=>o.textContent=`在线：${navigator.onLine}\n连接类型：${navigator.connection?.effectiveType||"未知"}\n下行：${navigator.connection?.downlink||"未知"} Mbps`;
 if(t==="cfip")$("go").onclick=async()=>o.textContent=await(await fetch(`/api/cfip?ip=${encodeURIComponent(x.value)}`)).text();
 if(t==="trace")$("go").onclick=async()=>o.textContent=await(await fetch("/cdn-cgi/trace")).text();
 if(t==="cfheaders")$("go").onclick=async()=>o.textContent=await(await fetch("/api/ip")).text();
 if(t==="calc")$("go").onclick=()=>{try{if(!/^[0-9+\\-*/().%\\s]+$/.test(x.value))throw Error("仅允许数字和基础运算符");o.textContent=Function('"use strict";return ('+x.value+')')()}catch(e){o.textContent=e.message}};
 if(t==="date")$("go").onclick=()=>{if(!$("a").value||!$("b").value){o.textContent="请选择日期";return}o.textContent=Math.abs(new Date($("b").value)-new Date($("a").value))/86400000+" 天"};
 if(t==="percent")$("go").onclick=()=>o.textContent=(+$("a").value/+$( "b").value*100).toFixed(4)+"%";
 if(t==="average")$("go").onclick=()=>{const a=x.value.split(/[,\\s\\n]+/).filter(Boolean).map(Number).filter(Number.isFinite).sort((a,b)=>a-b);if(!a.length){o.textContent="没有数字";return}o.textContent=`总和：${a.reduce((a,b)=>a+b,0)}\n平均：${a.reduce((a,b)=>a+b,0)/a.length}\n中位数：${a[Math.floor(a.length/2)]}`};
 if(t==="bmi")$("go").onclick=()=>{const h=+$("h").value/100,w=+$("w").value;o.textContent=(w/(h*h)).toFixed(2)};
 if(t==="interest")$("go").onclick=()=>{const p=+$("p").value,r=+$("r").value/100,y=+$("y").value;o.textContent=`利息：${(p*r*y).toFixed(2)}\n本息：${(p*(1+r*y)).toFixed(2)}`};
 if(t==="area")$("go").onclick=()=>{const a=+$("a").value,b=+$("b").value,z=$("type").value;o.textContent=z==="circle"?Math.PI*a*a:z==="rect"?a*b:a*b/2};
 if(t==="temp")$("go").onclick=()=>{let v=+$("x").value;if($("from").value==="F")v=(v-32)*5/9;if($("from").value==="K")v=v-273.15;let z=$("to").value;if(z==="F")v=v*9/5+32;if(z==="K")v+=273.15;o.textContent=v};
 const factors={m:1,km:1000,cm:.01,mm:.001,in:.0254,ft:.3048}; if(t==="length")$("go").onclick=()=>o.textContent=(+$("x").value*factors[$("from").value]/factors[$("to").value]).toString();
 const wf={kg:1,g:.001,mg:.000001,lb:.45359237}; if(t==="weight")$("go").onclick=()=>o.textContent=(+$("x").value*wf[$("from").value]/wf[$("to").value]).toString();
 if(t==="txtfile")$("go").onclick=()=>downloadBlob(new Blob([x.value],{type:"text/plain;charset=utf-8"}),"crove.txt");
 if(t==="fileinfo")$("f").onchange=e=>{const f=e.target.files[0];o.textContent=`文件：${f.name}\n类型：${f.type||"未知"}\n大小：${f.size} bytes\n修改：${new Date(f.lastModified).toLocaleString()}`};
 if(t==="countdown")$("go").onclick=()=>{clearInterval(window.cvTimer);const d=new Date($("d").value).getTime();window.cvTimer=setInterval(()=>{const n=d-Date.now();if(n<=0){o.textContent="时间到！";clearInterval(window.cvTimer)}else{o.textContent=`${Math.floor(n/86400000)} 天 ${Math.floor(n/3600000)%24} 时 ${Math.floor(n/60000)%60} 分 ${Math.floor(n/1000)%60} 秒`}},250)};
 if(t==="stopwatch"){let st=0,tm=null;start.onclick=()=>{if(tm)return;st=Date.now()-(window.svBase||0);tm=setInterval(()=>o.textContent=((Date.now()-st)/1000).toFixed(1)+" 秒",100)};stop.onclick=()=>{clearInterval(tm);tm=null;window.svBase=Date.now()-st};reset.onclick=()=>{clearInterval(tm);tm=null;window.svBase=0;o.textContent="0.0 秒"}}
 if(t==="picker")$("p").oninput=()=>o.textContent=$("p").value;
 if(t==="share")$("go").onclick=async()=>{try{if(navigator.share)await navigator.share({title:document.title,url:location.href});else await navigator.clipboard.writeText(location.href);o.textContent="已分享/复制链接"}catch(e){o.textContent=e.message}};
 if(t==="device")$("go").onclick=()=>o.textContent=`平台：${navigator.platform}\n语言：${navigator.language}\n屏幕：${screen.width} × ${screen.height}\n像素比：${devicePixelRatio}\nCPU：${navigator.hardwareConcurrency||"未知"}\n内存：${navigator.deviceMemory||"未知"} GB`;
 if(t==="storage"){$("save").onclick=()=>{localStorage.setItem($("k").value,$("v").value);o.textContent="已保存"};$("read").onclick=()=>o.textContent=localStorage.getItem($("k").value)??"不存在";$("clear").onclick=()=>{localStorage.clear();o.textContent="已清空"}}
}
render();
