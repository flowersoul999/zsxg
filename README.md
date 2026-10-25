# 琢石寻光社会实践团官网

基于 **Vue 3 + TypeScript + Vite + Tailwind CSS** 构建的社会实践团官方网站，承载团队展示、实践记录与文化传播。

## 功能模块

| 页面 | 说明 |
|------|------|
| 首页 `HomePage` | 团队形象与视觉主视觉展示 |
| 寻光团队 `TeamPage` | 团队成员与组织架构介绍 |
| 琢石纪事 `ChroniclesPage` | 社会实践活动记录 |
| 灵石文化 `CulturePage` | 文化传承相关内容 |
| 山海传音 `VoicePage` | 团队声音 / 感悟分享 |

## 技术栈

- Vue 3（Composition API）
- TypeScript
- Vite
- Vue Router
- Tailwind CSS
- 支持明暗主题切换（`composables/useTheme.ts`）

## 本地开发

```bash
npm install
npm run dev      # 开发服务器
npm run build    # 生产构建
```

部署通过 `.github/workflows/deploy.yml` 的 GitHub Actions 自动完成。

> 早期单页版本见 [`zhuoshixunguang`](https://github.com/flowersoul999/zhuoshixunguang)。
