# Wanwu Youling Brand AI Kit v1.0

万物友灵用于 ChatGPT、Claude、Gemini 及其他商业大模型的统一品牌执行包。

本套文件把品牌原则拆成三层：

1. **品牌事实层**：品牌名称、定位、颜色、Logo与禁用规则；
2. **制作规则层**：文档与PPT的版式、字体、图表和信息密度；
3. **执行控制层**：可直接作为系统提示词使用的AI指令与交付检查表。

## 推荐使用方式

### 方式一：完整上传

向模型上传整个压缩包，并发送：

> 请先读取 `AI-INSTRUCTIONS.md`，再读取 `BRAND.md`、`brand-tokens.json` 以及与本任务对应的制作规范和模板。严格按优先级执行，不得自行改变品牌色、Logo、字体层级和页面比例。

### 方式二：按任务上传

- 制作文档：上传 `AI-INSTRUCTIONS.md`、`BRAND.md`、`brand-tokens.json`、`document-style.md` 和 Word 模板。
- 制作PPT：上传 `AI-INSTRUCTIONS.md`、`BRAND.md`、`brand-tokens.json`、`presentation-style.md` 和 PowerPoint 模板。
- 制作网页产品：在以上基础上补充 `reference/design.md`。

## 文件说明

| 文件 | 用途 |
|---|---|
| `AI-INSTRUCTIONS.md` | 可复制到不同大模型的统一系统指令 |
| `BRAND.md` | 品牌身份、颜色、Logo与表达原则 |
| `brand-tokens.json` | 机器可读的颜色、字体、比例和版式Token |
| `document-style.md` | Word、报告、方案和正式文件规范 |
| `presentation-style.md` | PPT、路演和汇报材料规范 |
| `PROMPT-TEMPLATE.md` | 每次创建内容时填写的任务模板 |
| `CHECKLIST.md` | 输出前的品牌合规检查 |
| `templates/` | 可直接复用的Word和PowerPoint模板 |
| `assets/` | Logo与品牌视觉资产 |
| `reference/` | 完整品牌手册和产品UI规范 |
| `examples/` | 正确与错误的执行示例 |

## 版本

- Version: 1.0
- Date: July 2026
- Core color: 万物青 / Wanwu Teal `#004951`
- Digital accent: 灵芽绿 `#B8E43A`

