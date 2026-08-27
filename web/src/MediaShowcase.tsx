import { useEffect, useState } from 'react'

type ShowcaseImage = { src: string; alt: string; caption: string }

type ShowcaseGroup = {
  id: string
  label: string
  title: string
  description: string
  images: ShowcaseImage[]
}

const groups: ShowcaseGroup[] = [
  {
    id: 'companion',
    label: 'AI 伴学',
    title: '先理解孩子，再给答案',
    description:
      '把情境任务、过程诊断与即时支架放进同一条学习路径，让系统越来越适合每个孩子。',
    images: [
      {
        src: '/media/learning-coach.webp',
        alt: '物理情境任务与AI学习教练界面',
        caption: '情境任务 · 即时支架',
      },
      {
        src: '/media/learning-task.webp',
        alt: '语文学习任务与AI教练界面',
        caption: '多学科任务 · 过程反馈',
      },
    ],
  },
  {
    id: 'score',
    label: 'AI 提分',
    title: '把有限时间用在最值得修复的卡点上',
    description:
      '从思维诊断到知识地图，再到机会排序、每日任务和复测，形成持续更新的提分闭环。',
    images: [
      {
        src: '/media/knowledge-map.webp',
        alt: '知识地图与薄弱点分析界面',
        caption: '知识地图 · 依赖关系',
      },
      {
        src: '/media/score-plan.webp',
        alt: '个性化提分计划界面',
        caption: '机会排序 · 冲刺计划',
      },
      {
        src: '/media/student-dashboard.webp',
        alt: '学生学习任务与成长看板',
        caption: '任务反馈 · 动态复测',
      },
    ],
  },
  {
    id: 'teaching',
    label: 'AI 赋能教',
    title: '让教师从重复劳动回到专业判断',
    description:
      '教师可以创建专属智能体、沉淀教学经验，并在备课、评价和答疑中持续复用。',
    images: [
      {
        src: '/media/teaching-workflow.webp',
        alt: '教师智能体与教学工作流界面',
        caption: '教师工作流 · 智能体',
      },
      {
        src: '/media/agent-builder.webp',
        alt: 'AI智能体创建界面',
        caption: '经验沉淀 · 全校调用',
      },
    ],
  },
  {
    id: 'assets',
    label: '成长资产',
    title: '从个人成长档案，到学校自己的 AI',
    description:
      '持续积累多角色成长证据、家校协同报告与学校决策视图，形成“一生一案 · 一校一魂”。',
    images: [
      {
        src: '/media/growth-profile.webp',
        alt: '学生多维成长画像',
        caption: '一生一案 · 动态画像',
      },
      {
        src: '/media/growth-report.webp',
        alt: '学生成长报告与家校协同建议',
        caption: '角色建议 · 家校协同',
      },
      {
        src: '/media/school-dashboard.webp',
        alt: '学校AI能力与成长数据驾驶舱',
        caption: '一校一魂 · 决策视图',
      },
    ],
  },
]

function tabFromHash() {
  const hash = window.location.hash.replace('#', '')
  if (hash.startsWith('showcase-')) {
    return hash.slice('showcase-'.length)
  }
  return null
}

export default function MediaShowcase() {
  const [activeId, setActiveId] = useState(groups[0].id)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const active = groups.find((group) => group.id === activeId) ?? groups[0]
  const lightboxImage =
    lightboxIndex === null ? null : active.images[lightboxIndex] ?? null

  useEffect(() => {
    const applyHash = () => {
      const tab = tabFromHash()
      if (tab && groups.some((group) => group.id === tab)) {
        setActiveId(tab)
        setLightboxIndex(null)
      }
    }
    applyHash()
    window.addEventListener('hashchange', applyHash)
    return () => window.removeEventListener('hashchange', applyHash)
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null)
      } else if (event.key === 'ArrowRight') {
        setLightboxIndex((current) =>
          current === null ? 0 : (current + 1) % active.images.length,
        )
      } else if (event.key === 'ArrowLeft') {
        setLightboxIndex((current) =>
          current === null
            ? 0
            : (current - 1 + active.images.length) % active.images.length,
        )
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [lightboxIndex, active.images.length])

  const selectTab = (id: string) => {
    setActiveId(id)
    setLightboxIndex(null)
    window.history.replaceState(null, '', `#showcase-${id}`)
  }

  return (
    <section className="section showcase-section" id="showcase">
      <div className="showcase-tabs" role="tablist" aria-label="产品素材分类">
        {groups.map((group) => (
          <button
            aria-controls={`showcase-panel-${group.id}`}
            aria-selected={active.id === group.id}
            className={active.id === group.id ? 'is-active' : ''}
            id={`tab-${group.id}`}
            key={group.id}
            onClick={() => selectTab(group.id)}
            role="tab"
            type="button"
          >
            {group.label}
          </button>
        ))}
      </div>

      <div className="showcase-copy" key={`${active.id}-copy`}>
        <span>{active.label}</span>
        <h3>{active.title}</h3>
        <p>{active.description}</p>
      </div>

      <div
        aria-labelledby={`tab-${active.id}`}
        className={`showcase-gallery gallery-${active.images.length}`}
        id={`showcase-panel-${active.id}`}
        key={active.id}
        role="tabpanel"
      >
        {active.images.map((image, index) => (
          <figure className={index === 0 ? 'is-featured' : ''} key={image.src}>
            <button
              aria-label={`放大查看：${image.caption}`}
              className="showcase-thumb"
              onClick={() => setLightboxIndex(index)}
              type="button"
            >
              <img loading="lazy" src={image.src} alt={image.alt} />
              <span className="showcase-zoom-hint">点击放大</span>
            </button>
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>

      {lightboxImage && lightboxIndex !== null ? (
        <div
          aria-label="产品界面放大预览"
          aria-modal="true"
          className="lightbox"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
        >
          <div
            className="lightbox-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="lightbox-toolbar">
              <span>
                {active.label} · {lightboxIndex + 1}/{active.images.length}
              </span>
              <button
                aria-label="关闭放大预览"
                className="lightbox-close"
                onClick={() => setLightboxIndex(null)}
                type="button"
              >
                关闭
              </button>
            </div>
            <img src={lightboxImage.src} alt={lightboxImage.alt} />
            <p>{lightboxImage.caption}</p>
            {active.images.length > 1 ? (
              <div className="lightbox-nav">
                <button
                  aria-label="上一张"
                  onClick={() =>
                    setLightboxIndex(
                      (lightboxIndex - 1 + active.images.length) %
                        active.images.length,
                    )
                  }
                  type="button"
                >
                  ← 上一张
                </button>
                <button
                  aria-label="下一张"
                  onClick={() =>
                    setLightboxIndex((lightboxIndex + 1) % active.images.length)
                  }
                  type="button"
                >
                  下一张 →
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  )
}
