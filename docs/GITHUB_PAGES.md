# GitHub Pages 部署说明

## 当前配置

- 仓库：`sunjian234/ai-training-preview`
- 仓库状态：公开
- 发布分支：`main`
- 发布目录：`/(root)`
- 预览地址：<https://sunjian234.github.io/ai-training-preview/>

V0.2.0 为无需构建的静态多页面网站。首页、八个内页和公共资源均使用相对路径，支持 GitHub Pages 的仓库子目录地址。

## 发布命令

在项目目录完成检查后执行：

```powershell
git add .
git commit -m "Upgrade website to V0.2.0 multi-page content architecture"
git push origin main
```

只允许向当前项目的 `origin/main` 推送；不得删除、覆盖或访问其他仓库。

## Pages 设置

如需在网页复核：

1. 打开仓库 **Settings → Pages**。
2. Source 选择 `Deploy from a branch`。
3. Branch 选择 `main`，Folder 选择 `/(root)`。
4. 保存并等待构建完成。

## 部署后验收

- 根路径和八个一级页面均返回 HTTP 200。
- `assets/css/style.css` 与 `assets/js/main.js` 可加载。
- 页面通过 HTTPS 访问，中文显示正常。
- PC 下拉导航和手机折叠菜单可用，无横向溢出。
- 所有相对链接适配 `/ai-training-preview/` 子目录。
- 表单不发送网络请求或写入浏览器存储。
- 页脚显示 `V0.2.0 多页面内容版`。
- 仓库不包含密钥、隐私文件、PDF 或内部平台资料。

部署不需要购买域名、不需要付费服务，也不需要在项目中保存 GitHub 凭据。
