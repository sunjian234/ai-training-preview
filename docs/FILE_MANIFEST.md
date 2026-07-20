# 项目文件清单

版本：V0.1.0 校长预览版

| 文件 | 用途 | 是否计划上传 |
|---|---|---|
| `.gitignore` | 忽略系统与编辑器临时文件 | 是 |
| `index.html` | 网站全部页面内容与语义结构 | 是 |
| `styles.css` | 视觉设计、布局、交互状态与响应式规则 | 是 |
| `script.js` | 移动菜单、导航状态和安全表单提示 | 是 |
| `README.md` | 项目用途、维护与升级说明 | 是 |
| `CHANGELOG.md` | 版本记录 | 是 |
| `docs/SITE_STRUCTURE.md` | 网站信息架构与交互说明 | 是 |
| `docs/GITHUB_PAGES.md` | GitHub Pages 部署与确认流程 | 是 |
| `docs/COMPLIANCE_REPORT.md` | 内容合规自查 | 是 |
| `docs/MOBILE_TEST_REPORT.md` | 手机与平板适配检查 | 是 |
| `docs/FUNCTION_TEST_REPORT.md` | 页面功能和表单安全测试 | 是 |
| `docs/FILE_MANIFEST.md` | 项目文件清单 | 是 |
| `docs/LOCAL_PREVIEW.md` | 本地预览和截图说明 | 是 |

## 明确不包含

- Hermes 内部源代码、配置、密钥、日志或私有资料。
- 原始学校方案 PDF 或用户隐私文件。
- API 密钥、账号令牌、浏览器凭据或系统密钥。
- 真实报名数据、身份证、银行卡或支付信息。
- 第三方 Logo、受限图片或未授权合作单位材料。
- 依赖目录、构建产物、数据库或后端服务。

最终远程推送前应以实际 `git status` / `git ls-files` 输出重新生成待上传文件列表，并再次完成敏感信息扫描。
