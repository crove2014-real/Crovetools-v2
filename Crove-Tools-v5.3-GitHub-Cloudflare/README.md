# Crove Tools v5.3 — GitHub + Cloudflare Pages

## 1. GitHub
解压 ZIP 后，把里面所有文件上传到仓库根目录。

必须看到：
- index.html
- app.js
- style.css
- manifest.webmanifest
- sw.js
- functions/api/convert.js
- functions/api/health.js

## 2. Cloudflare Pages
Create application → Pages → Connect to Git。

设置：
- Framework preset: None
- Build command: 留空
- Build output directory: `.`
- Root directory: 留空

## 3. 配置转换 API
Cloudflare Pages → Settings → Environment variables。

添加：
- `CONVERTER_API` = 你的文档转换 API 地址
- `CONVERTER_API_KEY` = API 密钥（如果服务要求）

保存后重新部署。

## 4. 测试
打开：
`/api/health`

应该看到：
`{"ok":true,"service":"Crove Tools v5.3","converterConfigured":true}`

## 5. 重要
Crove Tools 本身不保存用户文件；文件通过 `/api/convert` 转发给你配置的转换服务。
Word/Excel/PPT 的真正格式转换由外部转换引擎完成。
