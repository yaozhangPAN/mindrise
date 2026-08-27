# 万物友灵 Web Product UI Design System

> Version 1.0 · July 2026  
> 适用于万物友灵学校版、教师端、学生端、家长端、校长端及品牌官网。

## 1. Design Foundation

### 1.1 品牌表达

万物友灵的UI应同时表达：

- **东方生命观**：沉静、留白、自然生长、尊重个体。
- **AI未来感**：智能被唤醒、连接、反馈、创造与持续进化。
- **教育可信度**：专业、克制、安全、清晰，适合学校、教师、学生、家长和政府项目。

核心设计原则：

1. **静态沉静，动态点亮**：基础界面以万物青和中性背景构建；灵芽绿只用于正在发生的关键行为。
2. **清晰优先于装饰**：减少无意义卡片、渐变、阴影和复杂图形。
3. **成长可被看见**：进度、反馈、里程碑和下一步行动必须清楚。
4. **AI是伙伴，不是主角**：AI能力应融入任务与学习流程，避免机器人、芯片、电路等直接符号。
5. **让每个角色安心**：学生端亲和，教师端高效，管理端可信，整体保持同一品牌语言。

---

## 2. Core Design Tokens

### 2.1 Brand Colors

| Token | Hex | 角色 | 主要用途 |
|---|---:|---|---|
| `brand-ink` | `#004951` | 万物青 / Wanwu Teal | Logo、标题、主导航、深色背景、主要文字 |
| `brand-sand` | `#E9DECB` | 暖砂白 | 品牌背景、页面分区、人文内容区、空状态 |
| `brand-white` | `#FFFFFF` | 通用白 | 主内容区、表单、数据密集页面 |
| `brand-sprout` | `#B8E43A` | 灵芽绿 | AI激活、主要CTA、成长进度、实时状态、关键数据 |

推荐整体使用比例：

- 万物青：`60%`
- 暖砂白与白色：`30%–35%`
- 灵芽绿：`5%–10%`

### 2.2 Neutral Colors

| Token | Hex | 用途 |
|---|---:|---|
| `ink-900` | `#00383E` | 强调文字、深色悬停状态 |
| `ink-800` | `#004951` | 一级文字、品牌主色 |
| `ink-700` | `#245F65` | 次级标题 |
| `ink-600` | `#50787C` | 正文次级信息 |
| `ink-500` | `#718F92` | 辅助说明、占位文字 |
| `ink-300` | `#B8C8C6` | 边框、分隔线 |
| `ink-200` | `#D7E0DE` | 浅边框、禁用背景 |
| `ink-100` | `#EDF2F0` | 浅色区块背景 |
| `sand-100` | `#F6F2E9` | 暖色浅背景 |
| `sand-50` | `#FBF9F4` | 品牌暖白页面背景 |

### 2.3 Semantic Colors

语义色不替代灵芽绿。灵芽绿表示“激活、成长、正在发生”，语义色用于明确的系统反馈。

| Token | Hex | 用途 |
|---|---:|---|
| `success` | `#2E8B68` | 完成、通过、健康状态 |
| `warning` | `#D99124` | 注意、临近截止、需要确认 |
| `danger` | `#C94B4B` | 错误、高风险、严重预警 |
| `info` | `#3B7DBE` | 系统通知、中性提示 |

心理健康预警必须同时使用文字、图标和等级名称，不能只依赖颜色。

### 2.4 CSS Variables

```css
:root {
  --wanwu-teal: #004951;
  --brand-ink: #004951;
  --brand-sand: #e9decb;
  --brand-white: #ffffff;
  --brand-sprout: #b8e43a;

  --background: #fbf9f4;
  --surface: #ffffff;
  --surface-warm: #f6f2e9;
  --foreground: #00383e;
  --foreground-secondary: #50787c;
  --foreground-muted: #718f92;

  --border: #d7e0de;
  --border-strong: #b8c8c6;

  --primary: #004951;
  --primary-hover: #00383e;
  --primary-foreground: #ffffff;

  --accent: #b8e43a;
  --accent-hover: #a6d02f;
  --accent-foreground: #00383e;

  --success: #2e8b68;
  --warning: #d99124;
  --danger: #c94b4b;
  --info: #3b7dbe;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-xl: 24px;

  --shadow-sm: 0 1px 2px rgba(0, 73, 81, 0.06);
  --shadow-md: 0 8px 24px rgba(0, 73, 81, 0.08);
  --shadow-focus: 0 0 0 3px rgba(184, 228, 58, 0.38);
}
```

---

## 3. Typography

### 3.1 Font Families

中文首选：

```css
font-family:
  "Source Han Sans SC",
  "Alibaba PuHuiTi",
  "HarmonyOS Sans SC",
  "PingFang SC",
  "Microsoft YaHei",
  sans-serif;
```

英文和数字首选：

```css
font-family: "Inter", "Manrope", "Aptos", sans-serif;
```

### 3.2 Type Scale

| Style | Desktop | Mobile | Weight | 用途 |
|---|---:|---:|---:|---|
| Display | 48/56 | 36/44 | 600 | 官网主标题、重要品牌表达 |
| H1 | 36/44 | 30/38 | 600 | 页面标题 |
| H2 | 28/36 | 24/32 | 600 | 区块标题 |
| H3 | 22/30 | 20/28 | 600 | 卡片或模块标题 |
| Body Large | 18/30 | 17/28 | 400 | 引导说明、重点正文 |
| Body | 16/26 | 16/26 | 400 | 默认正文 |
| Body Small | 14/22 | 14/22 | 400 | 辅助信息 |
| Caption | 12/18 | 12/18 | 400 | 时间、来源、次要标签 |

规则：

- 中文正文不要低于 `14px`。
- 数据表格正文建议 `14–16px`。
- 标题使用万物青，不用纯黑。
- 正文每行中文建议控制在 `28–42` 个汉字。
- 仅使用 `400 / 500 / 600` 三档字重。

---

## 4. Spacing, Grid and Layout

### 4.1 Spacing Scale

使用8px基础栅格：

```text
4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96
```

常用规则：

- 元素内部间距：`8–16px`
- 表单项之间：`20–24px`
- 卡片内边距：`20–24px`
- 页面区块间距：`48–80px`
- 页面左右边距：桌面 `40–64px`，平板 `24–32px`，手机 `16–20px`

### 4.2 Responsive Breakpoints

```text
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1440px
```

### 4.3 Product Shell

桌面端建议：

- 左侧主导航：`240–264px`
- 顶部栏：`64px`
- 内容最大宽度：`1440px`
- 数据密集页面可使用全宽布局
- 阅读和课程内容区建议最大宽度：`960–1120px`

移动端：

- 主导航折叠为底部导航或抽屉
- 底部主要操作必须避开系统安全区
- 不将桌面表格直接压缩；优先转为分组列表或重点字段卡片

---

## 5. Surface and Elevation

页面层级：

1. `background`：暖白或极浅中性色。
2. `surface`：白色内容区。
3. `elevated surface`：弹窗、菜单、浮层。
4. `active surface`：使用浅灵芽绿色或万物青强调。

使用规则：

- 同一视口内避免超过三层卡片嵌套。
- 默认卡片不使用明显阴影，以边框和留白区分。
- 浮层可使用 `shadow-md`。
- 暖砂白适合品牌叙事、学习成长、空状态；数据表格和表单优先白色。

---

## 6. Component Guidelines

### 6.1 Buttons

#### Primary Button

用于提交、发布、开始学习、生成、确认等主要动作。

```text
Background: #004951
Text: #FFFFFF
Hover: #00383E
Height: 44–48px
Radius: 12px
```

#### AI / Growth Action Button

只用于明确的AI激活或成长行为，例如“开始AI共创”“生成学习路径”。

```text
Background: #B8E43A
Text: #00383E
Hover: #A6D02F
```

每个页面主要可视区域最多出现一个灵芽绿高亮按钮。

#### Secondary Button

```text
Background: transparent
Border: #B8C8C6
Text: #004951
Hover background: #EDF2F0
```

#### Destructive Button

删除、撤销发布等不可逆行为使用危险色，不使用灵芽绿。

### 6.2 Forms

- 输入框高度：`44–48px`
- 边框：`#D7E0DE`
- 聚焦边框：`#004951`
- 聚焦光环：`rgba(184, 228, 58, 0.38)`
- Label必须常驻，不使用placeholder代替字段名称
- 错误信息紧邻字段，并说明修正方式

### 6.3 Cards

基础卡片：

```text
Background: #FFFFFF
Border: 1px solid #D7E0DE
Radius: 16–18px
Padding: 20–24px
Shadow: none or shadow-sm
```

成长卡片可增加一条 `3–4px` 灵芽绿左边线，但不要整张卡片铺成灵芽绿。

### 6.4 Navigation

- 主导航背景优先使用万物青。
- 默认导航文字使用70%–80%白色。
- 当前项使用白色文字和克制的灵芽绿标记。
- 不使用整块高饱和绿色填充所有选中项。
- 一个层级最多显示7个主要入口，次要功能放入“更多”。

### 6.5 Tabs

- 默认文字：`ink-600`
- 激活文字：`brand-ink`
- 激活指示线：`brand-sprout`
- 不使用多个高饱和标签背景。

### 6.6 Badges and Status

Badge必须有明确语义文本：

```text
进行中 · 已完成 · 待确认 · 高风险 · AI生成
```

“AI生成”使用浅灵芽绿背景和万物青文字；不可只用一个绿色圆点表达。

### 6.7 Modals

- 最大宽度：小型 `480px`，标准 `640px`，复杂流程 `800px`
- 标题说明“正在做什么”
- 主要按钮放右侧，取消放左侧或次级位置
- 高风险操作需要明确对象和影响

---

## 7. AI Interaction Patterns

### 7.1 AI状态模型

| 状态 | 视觉表达 |
|---|---|
| 未启动 | 万物青或中性色 |
| 正在思考 | 中心节点灵芽绿轻微呼吸 |
| 正在生成 | 灵芽绿沿单一路径流动，配合进度文字 |
| 需要用户输入 | 灵芽绿聚焦在输入区或下一步按钮 |
| 已完成 | 回归万物青，显示结果与下一步 |
| 失败 | 使用错误色和可恢复操作，不使用持续闪烁 |

### 7.2 AI Content Disclosure

所有AI生成内容必须清晰标记：

- `AI生成`
- 生成时间
- 可编辑状态
- 引用或数据来源（如适用）
- “重新生成”“编辑”“采用”三个动作按场景提供

AI不能自动替用户执行高风险动作，包括：

- 发布成绩或评语
- 发送家长通知
- 触发心理健康干预
- 删除学习档案
- 批量改变学生状态

### 7.3 AI Companion

AI友灵应表现为温和的协作伙伴：

- 建议而不是命令
- 引导思考而不是直接给答案
- 清楚表达不确定性
- 在儿童界面避免制造依赖或情绪操控

---

## 8. Growth and Learning Visualization

### 8.1 Progress

- 灵芽绿用于当前进度，不用于全部历史数据。
- 已完成部分可用万物青或成功色。
- 未完成部分使用`ink-200`。
- 同时显示数值、阶段名称和下一步。

示例：

```text
成长地图 68%
当前阶段：探索者
下一步：完成AI小创始人任务
```

### 8.2 Charts

推荐图表顺序：

1. 万物青：主要数据系列
2. 灵芽绿：当前、目标或需要关注的一个重点系列
3. 柔和青色或中性色：对比系列

不要让所有系列都使用高饱和色。图表必须包含：

- 清晰标题
- 单位
- 时间范围
- 数据来源
- 关键结论
- 键盘与屏幕阅读器可访问的文本摘要

### 8.3 Psychological Health Data

- 默认使用中性、克制的可视化。
- 不把学生称为“异常”“危险学生”。
- 使用“需要关注”“建议进一步了解”等专业表达。
- 风险提示必须说明依据、时效和建议行动。
- 不将灵芽绿用于“安全/无风险”的唯一判断，以免与AI激活状态混淆。

---

## 9. Motion System

### 9.1 Motion Principle

动效表达“能量被唤醒、流动、点亮、回归沉静”。

推荐时长：

| 动效 | 时长 |
|---|---:|
| Hover / Press | 120–180ms |
| Dropdown / Tooltip | 160–220ms |
| Card transition | 200–280ms |
| Page transition | 240–360ms |
| AI生成状态 | 按实际过程，不制造虚假完成感 |
| 动态Logo | 2.5–3.0s，只播放一次 |

Easing：

```css
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
--ease-enter: cubic-bezier(0, 0, 0.2, 1);
--ease-exit: cubic-bezier(0.4, 0, 1, 1);
```

### 9.2 Dynamic Logo Sequence

1. 万物青Logo静置。
2. 中心节点以灵芽绿亮起。
3. 能量沿枝干向上流动。
4. 三片叶子依次短暂变为灵芽绿。
5. Logo回到万物青，中心节点可保留极小灵芽绿光点。
6. 字标淡入并稳定。

禁止：

- 持续闪烁
- 弹跳式卡通动画
- 高频旋转
- 全屏荧光绿色脉冲
- 用动效掩盖实际加载时间

必须支持：

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Iconography

- 使用圆角、简洁、2px线宽的线性图标。
- 默认图标使用万物青或`ink-600`。
- 激活状态可增加一个灵芽绿节点，不把整套图标变成绿色。
- 图标必须配文字标签，尤其是教师、家长和管理端。
- 不混用拟物、3D、实心彩色和线性图标。

建议使用统一图标库，如Lucide，并限制自定义图标数量。

---

## 11. Imagery and Illustration

### 11.1 Photography

摄影方向：

- 真实学习、真实创造、真实协作
- 自然光、温暖但不过度泛黄
- 学习者处于主动状态
- 展示过程，而非只展示“开心使用设备”

避免：

- 过度摆拍的课堂照片
- 蓝色全息屏、机器人教师等陈旧AI视觉
- 只表现技术设备、不表现人与创造
- 对儿童进行情绪标签化

### 11.2 Illustration

- 使用简洁、柔和、具有生命感的形态。
- 五行友灵角色可以更活泼，但UI基础层保持克制。
- 角色资产不进入数据密集区域。
- 背景优先使用暖砂白、浅中性色和少量生长曲线。

---

## 12. Accessibility

最低要求：

- 正文和背景对比度达到WCAG AA。
- 不依赖颜色传达唯一信息。
- 可交互元素具备清楚的Focus状态。
- 点击目标不小于`44 × 44px`。
- 支持键盘完成核心流程。
- 图片提供有意义的alt文本。
- 图表提供文本摘要。
- 表单错误与字段建立程序化关联。
- 动效支持`prefers-reduced-motion`。

灵芽绿`#B8E43A`不适合承载白色正文。其上的文字使用万物青的深色可读变体`#00383E`。

---

## 13. Role-based Product Expression

### 学生端

- 更强的任务感和进度反馈
- 灵芽绿可稍多，但不超过页面视觉的10%
- 使用鼓励性语言，不以排名制造焦虑

### 教师端

- 强调批量效率、可编辑性和证据
- 默认万物青、白色和中性色
- AI建议与教师最终决定明确区分

### 家长端

- 优先呈现趋势、建议和下一步
- 避免堆叠专业指标
- 心理与成长信息采用谨慎、非诊断性表达

### 校长与管理端

- 强调全局视角、风险分层、资源配置与可追溯性
- 图表使用克制色彩
- 灵芽绿只标记关键变化或行动入口

---

## 14. Tailwind Token Mapping

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#004951",
          sand: "#E9DECB",
          sprout: "#B8E43A",
          white: "#FFFFFF",
        },
        ink: {
          900: "#00383E",
          800: "#004951",
          700: "#245F65",
          600: "#50787C",
          500: "#718F92",
          300: "#B8C8C6",
          200: "#D7E0DE",
          100: "#EDF2F0",
        },
        sand: {
          100: "#F6F2E9",
          50: "#FBF9F4",
        },
        semantic: {
          success: "#2E8B68",
          warning: "#D99124",
          danger: "#C94B4B",
          info: "#3B7DBE",
        },
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "18px",
        xl: "24px",
      },
      boxShadow: {
        brandSm: "0 1px 2px rgba(0, 73, 81, 0.06)",
        brandMd: "0 8px 24px rgba(0, 73, 81, 0.08)",
        brandFocus: "0 0 0 3px rgba(184, 228, 58, 0.38)",
      },
    },
  },
};
```

---

## 15. Reference Component Styles

```css
.btn-primary {
  min-height: 44px;
  padding: 0 20px;
  border-radius: 12px;
  border: 0;
  background: var(--primary);
  color: var(--primary-foreground);
  font-weight: 500;
  transition:
    background-color 160ms var(--ease-standard),
    transform 160ms var(--ease-standard);
}

.btn-primary:hover {
  background: var(--primary-hover);
}

.btn-primary:active {
  transform: translateY(1px);
}

.btn-ai {
  background: var(--accent);
  color: var(--accent-foreground);
}

.btn-ai:hover {
  background: var(--accent-hover);
}

.field {
  min-height: 46px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  color: var(--foreground);
}

.field:focus-visible {
  border-color: var(--brand-ink);
  outline: none;
  box-shadow: var(--shadow-focus);
}

.card {
  border: 1px solid var(--border);
  border-radius: 18px;
  background: var(--surface);
  padding: 24px;
}

.card-growth {
  border-left: 4px solid var(--brand-sprout);
}
```

---

## 16. UI Copy Principles

文案应：

- 清楚说明正在发生什么
- 给出下一步
- 避免技术术语堆叠
- 尊重学生与教师的主体性
- AI表达建议而非权威结论

推荐：

```text
AI已生成学习建议，你可以继续编辑。
根据最近3次任务表现，建议先复习“分数应用”。
发现需要进一步关注的变化，请结合教师观察确认。
```

避免：

```text
AI已为你做出最佳决定。
该学生心理异常。
生成失败。
```

“生成失败”应改为：

```text
暂时无法生成。你的内容已保存，请稍后重试。
```

---

## 17. Do / Don't

### Do

- 用万物青建立秩序与可信度。
- 用暖砂白建立东方留白与人文温度。
- 用灵芽绿标记唯一重点。
- 让进度、反馈和下一步清楚可见。
- 用自然缓动表达生长和连接。

### Don't

- 不使用大面积灵芽绿页面背景。
- 不使用金属渐变、拟物高光或复杂阴影。
- 不给Logo增加叶脉、描边和装饰。
- 不把AI视觉等同于机器人、芯片或蓝色电路。
- 不用颜色作为风险等级的唯一表达。
- 不把所有内容都放进卡片。

---

## 18. Pre-release Design Checklist

发布前检查：

- [ ] 灵芽绿是否控制在视觉面积的5%–10%？
- [ ] 页面是否只有一个最重要的高亮动作？
- [ ] 标题、正文和辅助信息是否有清楚层级？
- [ ] 是否避免了卡片嵌套和无意义阴影？
- [ ] AI内容是否标明来源、状态和可编辑性？
- [ ] 成长进度是否同时显示数值、阶段和下一步？
- [ ] 心理健康信息是否避免诊断式和标签化表达？
- [ ] 键盘、Focus、对比度和点击区域是否合格？
- [ ] 动效是否支持减少动态效果？
- [ ] 移动端是否经过真实内容和长中文文案测试？

---

## 19. North-star Expression

> 静态是东方的沉静与生命智慧，  
> 动态中出现AI的灵光与未来能量。

所有页面和组件都应服务于这个判断：  
**界面本身保持克制，让成长、创造与AI被唤醒的时刻真正发光。**
