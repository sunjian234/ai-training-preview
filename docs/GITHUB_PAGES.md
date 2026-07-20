# GitHub Pages 部署说明

## 当前状态

V0.1.0 只完成本地开发与检查。尚未创建远程仓库、尚未推送、尚未启用 GitHub Pages。

## 推送前强制确认点

执行任何 GitHub 远程操作前，必须向用户展示并获得明确确认：

1. GitHub 当前登录用户名。
2. 拟创建仓库名称。
3. 仓库公开状态（规划为 Public）。
4. 预计 GitHub Pages 地址。
5. 待上传文件列表。
6. 敏感信息检查结果。
7. 是否确认继续创建、推送和启用 Pages。

如果账号、权限、仓库状态或登录身份异常，应立即停止。

## 仓库名称规则

首选：

```text
ai-training-preview
```

如果已存在：

```text
ai-training-preview-v1
```

## 预计访问地址

首选仓库对应：

```text
https://<GitHub用户名>.github.io/ai-training-preview/
```

备用仓库对应：

```text
https://<GitHub用户名>.github.io/ai-training-preview-v1/
```

## 用户确认后的命令参考

以下命令只作部署说明，**当前版本未执行**。需先安装并登录 GitHub CLI，确认用户身份后才能使用。

```powershell
git init
git branch -M main
git add .
git commit -m "release: V0.1.0 principal preview"
gh auth status
gh repo create ai-training-preview --public --source . --remote origin --push
```

如果仓库名已存在，应先确认改用 `ai-training-preview-v1`，不得擅自覆盖已有仓库。

## 启用 GitHub Pages

可在仓库网页中操作：

1. 打开仓库 **Settings**。
2. 选择 **Pages**。
3. 在 **Build and deployment** 中选择 `Deploy from a branch`。
4. Branch 选择 `main`，目录选择 `/(root)`。
5. 保存并等待发布。
6. 通过 GitHub 显示的地址访问，确认 HTTPS 可用。

也可在确认后使用 GitHub API 或 CLI 配置，但必须先核验账号与仓库。

## 部署后验收

- 首页返回 HTTP 200，标题和首屏正常显示。
- 页面通过 HTTPS 访问，不出现混合内容警告。
- 顶部导航全部可跳转。
- 手机宽度下菜单可展开、关闭，内容无横向溢出。
- 表单不会发出提交请求。
- 页面底部显示 `V0.1.0 校长预览版`。
- 仓库中不存在密钥、隐私文件、原始学校方案 PDF 或 Hermes 内部文件。
