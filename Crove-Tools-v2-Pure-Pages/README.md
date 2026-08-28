# Crove Tools v2

一个“一个木函”风格的纯 Cloudflare Pages 在线工具箱。

## 当前内置
- JSON 格式化 / 压缩
- Base64 编解码
- URL 编解码
- UUID
- Unix 时间戳
- MD5 / SHA-1 / SHA-256 / SHA-512
- 密码生成
- 二维码
- 字数统计 / 文本去重
- 正则测试
- 进制转换
- CIDR 计算
- IP 查询
- DNS 查询
- HTTP Header
- Cloudflare IP 延迟测试
- 图片转 Base64
- 图片尺寸 / 信息
- Markdown 预览
- 科学计算器
- 日期计算
- 随机数

## 部署
### Cloudflare Pages
1. 将本项目上传到 GitHub。
2. Pages → Create project → Connect to Git。
3. Framework preset 选择 None。
4. Build command 留空。
5. Build output directory 填 `.`。
6. 部署。

本项目不要求 KV；需要服务端查询的功能放在 `functions/api/`。

## 本地
```bash
npm install
npx wrangler pages dev .
```
