import { useEffect, useState } from 'react'
import MediaShowcase from './MediaShowcase'

const challenges = [
  ['01', '招生与品牌', '同质化加剧，学校需要形成可感知、可传播的差异。'],
  ['02', '学生成长', '学习动力、心理支持与个体差异越来越难靠经验覆盖。'],
  ['03', '教师效能', '备课、批改、沟通与管理挤压教师关注学生的时间。'],
  ['04', '学校治理', '数据分散、评价滞后，管理层缺少连续决策依据。'],
]

const paths = [
  ['01', '一个产品切入', '从最需要解决的真实问题开始'],
  ['02', 'AI 赋能教 · 学 · 创', '三个标准化产品入口'],
  ['03', '四个角色协同', '学生、教师、家庭与学校'],
  ['04', '长期资产沉淀', '一生一案 · 一校一魂'],
]

const roleOutcomes = [
  ['学生端', '目标、任务、反馈、复测与认知画像，形成持续更新的个人路径。'],
  ['教师端', '看见班级共性卡点、错因分布与分层干预建议，把时间还给专业判断。'],
  ['家长端', '理解孩子的进度与状态，获得低压力、可执行的陪伴建议。'],
  ['校长端', '查看使用、阶段效果与年级学科画像，为试点扩围提供决策依据。'],
]

const team = [
  ['周剑', 'CTO · 技术架构', '大阪大学 AI 硕士；大模型应用、数据算法架构与 AI 原生系统全栈落地。'],
  ['杨璐', 'COS · 品牌运营', '20 年教育管理经验；曾任 IB PYP 校长、投资人代表，负责组织运营与标杆项目落地。'],
  ['毛婷', '战略顾问', '麻省理工双学位；连续科技创业者与投资人，负责战略增长与商务拓展。'],
]

const pilots = [
  ['A', 'AI 伴学 / AI 提分', '一个学科 · 一个年级 · 4–8 周', '最快验证可衡量的学习价值'],
  ['B', '一生一案', '新生 · 一个年级 · 一批学生', '形成持续更新的成长档案样本'],
  ['C', 'AI 赋能教', '一个备课组 · 备课—评价工作流', '验证教师效能与经验沉淀'],
  ['D', '校园 AI 共创', '智能体 · 知识库 · 创造项目', '从场景应用走向学校长期资产'],
]

const caseStudies = [
  {
    id: '01',
    title: '合作学校 A',
    location: '国内 · K12 · 全校 AI 学习部署',
    metrics: ['注册 1,583 人', '学生活跃率 62%', '任务完成度 92.7%'],
    summary:
      '近 3 个月完成从试点到规模化运行：61 名教师创作 572 门课程、867 个学习任务，九大学科全覆盖。',
    highlights: [
      '644 名活跃学生中 52% 完成至少一个完整任务，累计学习约 2,239 小时',
      'AI 能力测评生成 49,437 份，评估与教学反馈形成规模化闭环',
      {
        before: '基础知识点可托管学习，教师备课从 1–2 天压缩到 5–10 分钟，备课效率提升',
        emphasis: '80%',
        after: '以上。',
      },
      {
        before: '对厌学严重的学生成功启动率',
        emphasis: '100%',
        after: '。',
      },
    ],
  },
  {
    id: '02',
    title: '合作学校 B',
    location: '国内 · 小学 ·「一生一案」新生面对面',
    metrics: ['无试卷测评', 'AI 画像生成', '15 分钟家校对话'],
    summary:
      '入学季通过 AI + 游戏化探索完成首次成长画像，无试卷、无标准答案，重在看见每个孩子的思维方式与兴趣倾向。',
    highlights: [
      '教师观察与「一生一案 × AI 协同系统」融合，十余分钟生成《成长启航手册》',
      '手册含能力雷达图、家长建议、近两周与 1–3 个月成长行动计划',
      '校长与班主任进行 15 分钟一对一倾听，把家庭期待写入协同方案',
    ],
  },
  {
    id: '03',
    title: '合作学校 C',
    location: '国内 · 中学 · 三年成长导航试点',
    metrics: ['多维成长测评', '三年作战图', '成长合伙人机制'],
    summary:
      '中学部新生通过情境模拟与 AI 多维测评，生成《三年成长作战图》，连接学科优势、情绪地图与未来方向。',
    highlights: [
      '结合学科优势、思维模式、性格特质与情绪地图，生成可执行成长路径',
      '报告覆盖学习策略、人际交往、自我管理与家长协同建议',
      '校长、导师与家庭进行 15 分钟「成长合伙人」对话，聚焦青春期定位',
    ],
  },
  {
    id: '04',
    title: '合作学校 D',
    location: '海外 · 院校 · 4 周国际化试点',
    metrics: ['注册 31 人', '学生登录率 85%', '10 门课程 / 34 任务'],
    summary:
      '4 周内 3 名任课教师借助 AI 创建结构化学习内容，85% 注册学生完成冷启动登录，验证跨文化场景下的产品可用性。',
    highlights: [
      '单课 AI 备课约 30 分钟，显著低于传统 3–5 小时',
      {
        before: '经500名学生验证，原本4课时达到的知识掌握度，现在缩短为1个课时即可达到，',
        emphasis: '学习效率提升四倍',
        after: '。',
      },
      '试点识别出手机端体验与课程难度匹配问题，为第二阶段优化提供依据',
    ],
  },
]

const navItems = [
  { href: '#about', id: 'about', label: '我们是谁' },
  { href: '#showcase', id: 'showcase', label: '产品能力' },
  { href: '#proof', id: 'proof', label: '落地验证' },
  { href: '#founder', id: 'founder', label: '团队实力' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [activeNav, setActiveNav] = useState('about')

  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText('WWYLAIjia')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  useEffect(() => {
    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>('video'))
    const onPlay = (event: Event) => {
      videos.forEach((video) => {
        if (video !== event.target) video.pause()
      })
    }
    videos.forEach((video) => video.addEventListener('play', onPlay))
    return () => videos.forEach((video) => video.removeEventListener('play', onPlay))
  }, [])

  useEffect(() => {
    const ids = navItems.map((item) => item.id)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveNav(visible.target.id)
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0.1, 0.25, 0.5] },
    )
    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#about">跳到主要内容</a>
      <header className="site-header">
        <a className="brand-link" href="#top" aria-label="万物友灵首页">
          <img src="/brand/logo-horizontal.png" alt="万物友灵" />
        </a>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? '关闭导航菜单' : '打开导航菜单'}
          className="menu-toggle"
          onClick={() => setMenuOpen((value) => !value)}
          type="button"
        >
          <span>{menuOpen ? '×' : '☰'}</span>
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="主导航">
          {navItems.map((item) => (
            <a
              aria-current={activeNav === item.id ? 'location' : undefined}
              className={activeNav === item.id ? 'is-current' : undefined}
              href={item.href}
              key={item.id}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            预约交流 <span aria-hidden="true">→</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="hero-content">
            <div className="eyebrow"><span className="eyebrow-dot" />AI 驱动成长型学校</div>
            <h1>一生一案 · 一校一魂<span>帮助学校完成 AI 时代的教育转型</span></h1>
            <p className="hero-lead">
              万物友灵以 AI 为引擎、以成长为目标。从一个真实问题切入，
              连接学生、教师、家庭与学校，把洞察变成行动，把行动沉淀为长期能力。
            </p>
            <div className="hero-actions">
              <a className="button button-accent" href="#contact">预约学校 AI 启动建议 <span>→</span></a>
              <a className="button button-secondary" href="#showcase">先看产品如何切入</a>
            </div>
            <div className="hero-promise">从一个学科或一批学生开始，验证后再扩展为学校能力</div>
          </div>
          <div className="hero-visual">
            <div className="visual-label"><span>AI 伴学</span><span className="live-mark">真实产品界面</span></div>
            <img src="/media/learning-coach.webp" alt="AI伴学情境任务与学习教练界面" />
            <div className="visual-note">
              <span className="note-icon">AI</span>
              <div><strong>先理解孩子，再给答案</strong><span>诊断思维卡点，生成下一步建议</span></div>
            </div>
          </div>
        </section>

        <section className="identity-strip" aria-label="万物友灵定位">
          <div><span>公司定位</span><strong>AI 时代学校转型伙伴</strong></div>
          <div><span>核心产品</span><strong>教育成长智能系统</strong></div>
          <div><span>价值结果</span><strong>理解 · 支持 · 沉淀成长</strong></div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading split-heading">
            <div><span className="section-kicker">我们是谁</span><h2>连接四个角色，让成长持续发生</h2></div>
            <p>我们服务学校、家庭、教育机构与教育个体，让成长可理解、可支持、可追踪，并沉淀为个人与组织的长期能力。</p>
          </div>
          <div className="role-network">
            <div className="network-line" aria-hidden="true" />
            {['学生', '教师'].map((role) => <div className="role-node" key={role}><span className="role-glyph">{role[0]}</span><span>{role}</span></div>)}
            <div className="network-center"><img src="/brand/symbol-sprout.png" alt="" /><span>成长智能</span></div>
            {['家庭', '学校'].map((role) => <div className="role-node" key={role}><span className="role-glyph">{role[0]}</span><span>{role}</span></div>)}
          </div>
        </section>

        <section className="section challenge-section">
          <div className="section-heading">
            <span className="section-kicker">学校真正面对的问题</span>
            <h2>今天学校面对的，不只是一个 AI 问题</h2>
            <p>如果 AI 只增加工具和账号，它会制造新的负担；只有解决真实问题，才会成为学校能力。</p>
          </div>
          <div className="challenge-grid">
            {challenges.map(([index, title, text]) => (
              <article className="challenge-item" key={index}>
                <span className="challenge-index">{index}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section path-section">
          <div className="section-heading split-heading">
            <div><span className="section-kicker">我们如何合作</span><h2>从一个产品切入，建立学校自己的 AI 能力</h2></div>
            <p>不先卖一个大系统，而是从真实问题与标准化产品切入，连接四个角色，最终沉淀学校自己的长期资产。</p>
          </div>
          <div className="path-track">
            {paths.map(([index, title, text]) => (
              <div className="path-step" key={index}><span>{index}</span><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </section>

        <MediaShowcase />

        <section className="product-film">
          <div className="product-film-device">
            <video
              controls
              playsInline
              poster="/media/product-demo-poster.jpg"
              preload="metadata"
              src="/media/product-demo.mp4"
            >
              您的浏览器暂不支持视频播放。
            </video>
          </div>
          <div className="product-film-copy">
            <span className="section-kicker">产品如何被使用</span>
            <h2>一段真实操作，胜过一页功能清单</h2>
            <p>从创建内容、调整任务到推送给学生，产品演示呈现教师如何把 AI 纳入日常工作流。</p>
            <ul><li>教师自主创建与编辑</li><li>内容生成后仍由教师判断</li><li>任务可直接进入真实学习场景</li></ul>
          </div>
        </section>

        <section className="section role-outcomes-section">
          <div className="section-heading split-heading">
            <div>
              <span className="section-kicker">一个产品，连接四个角色</span>
              <h2>先让学生获得价值，再把洞察转化为学校行动</h2>
            </div>
            <p>产品不是孤立的学生工具。学习过程中的信号会转化为教师干预、家庭陪伴与学校复盘，让同一份成长信息服务不同角色。</p>
          </div>
          <div className="role-outcomes-grid">
            {roleOutcomes.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="proof-block" id="proof">
          <div className="field-film">
            <div className="field-film-copy">
              <span className="section-kicker light-kicker">落地现场</span>
              <h2>技术真正进入教育现场，改变从共同参与开始</h2>
              <p>教师培训、需求共创、课堂实践与角色协同，让学校不只“使用一个工具”，而是逐步建立自己的 AI 能力。</p>
              <div className="film-meta"><span>真实学校现场</span><span>教师共创</span><span>双语字幕</span></div>
            </div>
            <div className="field-film-player">
              <video
                controls
                playsInline
                poster="/media/school-story-poster.jpg"
                preload="metadata"
                src="/media/school-story.mp4"
              >
                您的浏览器暂不支持视频播放。
              </video>
            </div>
          </div>

          <div className="section proof-section">
            <div className="section-heading">
              <span className="section-kicker">合作学校验证</span>
              <h2>从单点试用，走到可扩围的学校能力</h2>
              <p>以下为匿名合作学校样本，展示不同切入路径已经进入真实教育现场。</p>
            </div>
            <div className="case-visual-grid">
              <figure className="case-visual">
                <img loading="lazy" src="/media/case-workshop.webp" alt="新生面对面项目现场" />
                <figcaption><strong>入学季现场</strong><span>AI 探索 · 成长画像 · 家校对话</span></figcaption>
              </figure>
              <figure className="case-visual">
                <img loading="lazy" src="/media/case-report.webp" alt="一生一案成长报告实物" />
                <figcaption><strong>成长启航手册</strong><span>画像、雷达图与可行动建议</span></figcaption>
              </figure>
              <figure className="case-visual">
                <img loading="lazy" src="/media/case-partnership.webp" alt="学校 AI 转型共创实践" />
                <figcaption><strong>学校共创</strong><span>从单点场景到校本能力</span></figcaption>
              </figure>
            </div>
            <div className="case-summary-grid case-summary-grid-4">
              {caseStudies.map((item) => (
                <article key={item.id}>
                  <span>{item.id}</span>
                  <h3>{item.title}</h3>
                  <p>{item.location}</p>
                  <div className="case-metrics">
                    {item.metrics.map((metric) => (
                      <b key={metric}>{metric}</b>
                    ))}
                  </div>
                  <p className="case-summary">{item.summary}</p>
                  <ul className="case-highlights">
                    {item.highlights.map((point, index) => (
                      <li key={typeof point === 'string' ? point : `${item.id}-highlight-${index}`}>
                        {typeof point === 'string' ? (
                          point
                        ) : (
                          <>
                            {point.before}
                            <strong className="case-highlight-em">{point.emphasis}</strong>
                            {point.after}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="source-note">案例内容来自公司项目材料；对外展示已隐去真实校名、人员姓名与可识别标识，正式公开以最新确认口径为准。</p>
          </div>
        </section>

        <section className="section founder-section" id="founder">
          <div className="founder-copy">
            <span className="section-kicker">创始人</span>
            <p className="founder-role">万物友灵创始人</p>
            <h2>潘耀章 · Fiona Pan</h2>
            <div className="founder-badges">
              <span>工信部国家级海外高层次人才</span>
              <span>苏州金鸡湖领军人才</span>
              <span className="founder-badge-em">Shopee/GoTo 前技术高管</span>
            </div>
            <ul className="founder-credentials">
              <li>哈尔滨工业大学电子工程本科与硕士</li>
              <li>新加坡国立大学电子与计算机工程博士（人工智能方向）</li>
              <li>A*STAR 脑机接口（BCI）与神经信号分析科研经历</li>
            </ul>
            <p className="founder-bio">
              工信部国家级海外高层次人才、苏州金鸡湖领军人才，Shopee/GoTo
              前技术高管。曾任 Tokopedia 首席数据官，在 Shopee、Grab
              负责数据与 AI 核心业务；主导亿级用户产品的数据与算法体系建设，带领
              300–400 人级别团队。
            </p>

            <div className="founder-columns">
              <div className="founder-block">
                <h3>她为什么创立万物友灵？</h3>
                <ul>
                  <li>看见孩子成长中真正需要的，不只是成绩提升，而是长期陪伴与因材施教</li>
                  <li>相信 AI 不应只是效率工具，更应成为理解个体、支持成长的温暖力量</li>
                  <li>希望连接学校、家庭与技术，打造「一生一案」的成长守护新范式</li>
                </ul>
              </div>
              <div className="founder-block">
                <h3>她能带来什么？</h3>
                <ul>
                  <li>国家级与苏州领军人才项目支持</li>
                  <li>脑科学与认知科学方法论</li>
                  <li>亿级用户产品经营与大型 AI 项目生产经营</li>
                  <li>300–400 人级别团队管理经验</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="founder-visual">
            <img
              loading="lazy"
              src="/media/founder-portrait.webp?v=2"
              alt="万物友灵创始人潘耀章 Fiona Pan"
            />
          </div>
        </section>

        <section className="section team-section">
          <div className="section-heading split-heading">
            <div>
              <span className="section-kicker">核心团队</span>
              <h2>既能研发产品，也懂学校真实问题</h2>
            </div>
            <p>团队覆盖脑科学与 AI、系统工程、K12 教育管理、品牌运营和战略增长，能把方案从产品做进学校组织。</p>
          </div>
          <div className="team-grid">
            {team.map(([name, role, bio], index) => (
              <article key={name}>
                <span>0{index + 1}</span>
                <h3>{name}</h3>
                <strong>{role}</strong>
                <p>{bio}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section technology-section">
          <div className="technology-copy">
            <span className="section-kicker">技术与科研背书</span>
            <h2>从脑机接口研究，到面向真实学习认知状态的智能学习引擎</h2>
            <p>核心专利方向为「基于分层学习状态引擎的 AI 自适应辅导系统及方法」：针对个体差异，动态诊断思维卡点与认知习惯，支持路径规划、练习反馈与持续更新。</p>
            <div className="technology-facts">
              <span>脑科学与 BCI 科研积累</span>
              <span>亿级用户 AI 产品经验</span>
              <span>分层学习状态引擎</span>
            </div>
            <small>专利与人才信息以正式证书和公开登记为准。</small>
          </div>
          <div className="technology-visual"><img loading="lazy" src="/media/patent.webp" alt="万物友灵核心技术专利文件" /></div>
        </section>

        <section className="section pilot-section" id="start">
          <div className="section-heading split-heading">
            <div>
              <span className="section-kicker">从哪里开始</span>
              <h2>先用一个可控试点证明价值，再决定如何扩围</h2>
            </div>
            <p>不需要一次部署全部能力。根据学校当前最重要的问题，选择一个人群、一个学科或一个工作流开始。</p>
          </div>
          <div className="pilot-grid">
            {pilots.map(([index, title, scope, result]) => (
              <article key={index}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{scope}</p>
                <strong>{result}</strong>
              </article>
            ))}
          </div>
          <p className="pilot-note">建议优先从 AI 伴学 / AI 提分或「一生一案」切入；验证价值后，再扩展到教、创与校本资产。</p>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-symbol" aria-hidden="true"><img src="/brand/symbol-sprout.png" alt="" /></div>
          <div className="contact-copy">
            <span className="section-kicker light-kicker">如何开始</span>
            <h2>把第一次交流，推进为一份清晰的学校 AI 启动建议</h2>
            <p>带来学校现状、关键痛点、目标人群与可用资源。我们共同确认场景优先级、试点范围、成功标准与下一步。</p>
            <ol className="start-steps">
              <li><span>01</span><strong>学校带来</strong><p>现状、痛点、目标人群与可用资源</p></li>
              <li><span>02</span><strong>共同完成</strong><p>场景优先级、试点范围与成功标准</p></li>
              <li><span>03</span><strong>会后获得</strong><p>一页启动建议：切入口、周期与下一步</p></li>
            </ol>
          </div>
          <div className="contact-action">
            <img className="contact-qr" src="/media/wechat-qr.webp" alt="万物友灵联系微信二维码" />
            <span>联系微信</span><strong>WWYLAIjia</strong>
            <button type="button" onClick={copyWechat}>{copied ? '已复制' : '复制微信号'}</button>
            <small>获取公司与产品演示、学校 AI 需求诊断与试点方案</small>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><img src="/brand/logo-horizontal.png" alt="万物友灵" /><p>让成长被看见，让学校生长出自己的教育灵魂。</p></div>
        <div className="footer-links"><a href="#about">我们是谁</a><a href="#showcase">产品能力</a><a href="#proof">落地验证</a><a href="#founder">团队实力</a><a href="#start">试点选择</a><a href="#contact">预约交流</a></div>
        <p className="copyright">© {new Date().getFullYear()} 苏州万物友灵人工智能科技有限责任公司</p>
      </footer>
    </div>
  )
}
