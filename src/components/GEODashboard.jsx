import { useId, useMemo, useState } from 'react'
import './GEODashboard.css'

/** Expand/collapse wrapper for dashboard sections (shared across tabs). */
function CollapsibleDashboardSection({
  id: sectionId,
  title,
  subtitle,
  children,
  defaultOpen = true,
  className = '',
  headingId,
  headerExtra,
  as: Root = 'section',
}) {
  const [open, setOpen] = useState(defaultOpen)
  const uid = useId()
  const panelId = `cds-panel-${uid}`
  const hid = headingId || `cds-heading-${uid}`

  return (
    <Root
      id={sectionId}
      className={`dashboard-section collapsible-dashboard-section ${className}`.trim()}
      aria-labelledby={hid}
    >
      <div className="collapsible-dashboard-section__header">
        <button
          type="button"
          className="collapsible-dashboard-section__trigger"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`collapsible-dashboard-section__chevron ${open ? 'is-open' : ''}`} aria-hidden="true" />
          <span className="collapsible-dashboard-section__title-block">
            <h2 id={hid} className="collapsible-dashboard-section__h2">
              {title}
            </h2>
            {subtitle != null && subtitle !== false ? (
              <div className="section-subtitle collapsible-dashboard-section__subtitle">{subtitle}</div>
            ) : null}
          </span>
        </button>
        {headerExtra ? <div className="collapsible-dashboard-section__header-extra">{headerExtra}</div> : null}
      </div>
      <div id={panelId} role="region" aria-labelledby={hid} hidden={!open} className="collapsible-dashboard-section__panel">
        {children}
      </div>
    </Root>
  )
}

// ============================================
// SAMPLE DATA
// ============================================

// Topic/Category Research Data
const topicResearchData = {
  selectedTopic: 'Video Conferencing Software',
  topPrompts: [
    { id: 1, prompt: 'What is the best video conferencing software for enterprise?', volume: 28400, trend: 28, competitorMentions: 142, yourMentions: 78, shareOfVoice: 46 },
    { id: 2, prompt: 'Zoom vs Microsoft Teams comparison', volume: 22600, trend: 34, competitorMentions: 198, yourMentions: 112, shareOfVoice: 58 },
    { id: 3, prompt: 'Best video conferencing for remote teams', volume: 19800, trend: 22, competitorMentions: 124, yourMentions: 58, shareOfVoice: 42 },
    { id: 4, prompt: 'Video conferencing software with AI features', volume: 17200, trend: 52, competitorMentions: 98, yourMentions: 38, shareOfVoice: 36 },
    { id: 5, prompt: 'Secure video conferencing for healthcare', volume: 14600, trend: 18, competitorMentions: 76, yourMentions: 48, shareOfVoice: 62 },
    { id: 6, prompt: 'Affordable video conferencing alternatives to Zoom', volume: 12800, trend: 12, competitorMentions: 112, yourMentions: 34, shareOfVoice: 28 },
    { id: 7, prompt: 'Video conferencing with breakout rooms', volume: 11200, trend: 26, competitorMentions: 88, yourMentions: 52, shareOfVoice: 58 },
    { id: 8, prompt: 'Best webinar platform for large events', volume: 9800, trend: 31, competitorMentions: 72, yourMentions: 28, shareOfVoice: 34 },
  ],
  fanOutQueries: [
    { query: 'zoom workplace pricing plans 2024', volume: 8200, sourcePrompt: 'Best video conferencing software' },
    { query: 'microsoft teams vs zoom features comparison', volume: 7600, sourcePrompt: 'Zoom vs Microsoft Teams' },
    { query: 'webex security certifications enterprise', volume: 5400, sourcePrompt: 'Secure video conferencing' },
    { query: 'google meet free limitations', volume: 4800, sourcePrompt: 'Affordable alternatives' },
    { query: 'zoom ai companion features review', volume: 4200, sourcePrompt: 'Video conferencing with AI' },
  ],
  topCitedSites: [
    { site: 'trustradius.com', citations: 12840, percentage: 31, rank: 1, change: 28 },
    { site: 'g2.com', citations: 8240, percentage: 20, rank: 2, change: 8 },
    { site: 'capterra.com', citations: 6120, percentage: 15, rank: 3, change: 14 },
    { site: 'gartner.com', citations: 4980, percentage: 12, rank: 4, change: 11 },
    { site: 'forbes.com', citations: 3840, percentage: 9, rank: 5, change: 6 },
    { site: 'techradar.com', citations: 2960, percentage: 7, rank: 6, change: 22 },
  ],
  /** Topic-level: all prompts combined — share of voice, citations, sentiment vs competitors */
  competitorBenchmark: [
    {
      brand: 'Zoom Workplace',
      shareOfVoice: 46,
      mentions: 186000,
      citations: 8240,
      sentimentScore: 76,
      trCitations: 2640,
      trend: 22,
      color: '#2D8CFF',
      topPerformingPrompt: 'Zoom vs Microsoft Teams comparison',
    },
    {
      brand: 'Microsoft Teams',
      shareOfVoice: 34,
      mentions: 142000,
      citations: 6120,
      sentimentScore: 72,
      trCitations: 1580,
      trend: 14,
      color: '#6264A7',
      topPerformingPrompt: 'Microsoft Teams reviews and pricing',
    },
    {
      brand: 'Google Meet',
      shareOfVoice: 14,
      mentions: 54800,
      citations: 2840,
      sentimentScore: 68,
      trCitations: 620,
      trend: 6,
      color: '#00897B',
      topPerformingPrompt: 'Google Meet vs Zoom for business',
    },
    {
      brand: 'Webex',
      shareOfVoice: 9,
      mentions: 36200,
      citations: 1920,
      sentimentScore: 71,
      trCitations: 420,
      trend: 11,
      color: '#00BCF2',
      topPerformingPrompt: 'Webex enterprise video conferencing',
    },
    {
      brand: 'GoTo Meeting',
      shareOfVoice: 4,
      mentions: 18400,
      citations: 980,
      sentimentScore: 65,
      trCitations: 210,
      trend: 4,
      color: '#FF6900',
      topPerformingPrompt: 'GoTo Meeting alternatives',
    },
  ],
  /** Same brands, metrics scoped to a single tracked prompt (mock variance for prototype). */
  competitorBenchmarkByPrompt: {
    1: [
      {
        brand: 'Zoom Workplace',
        shareOfVoice: 52,
        mentions: 112000,
        citations: 7120,
        sentimentScore: 79,
        trCitations: 2480,
        trend: 26,
        color: '#2D8CFF',
        topPerformingPrompt: 'Enterprise best-of-breed UC',
      },
      {
        brand: 'Microsoft Teams',
        shareOfVoice: 28,
        mentions: 68000,
        citations: 4980,
        sentimentScore: 70,
        trCitations: 1210,
        trend: 11,
        color: '#6264A7',
        topPerformingPrompt: 'Teams bundled with M365',
      },
      {
        brand: 'Google Meet',
        shareOfVoice: 12,
        mentions: 28000,
        citations: 2140,
        sentimentScore: 66,
        trCitations: 480,
        trend: 4,
        color: '#00897B',
        topPerformingPrompt: 'Meet for Workspace shops',
      },
      {
        brand: 'Webex',
        shareOfVoice: 11,
        mentions: 24000,
        citations: 1680,
        sentimentScore: 73,
        trCitations: 380,
        trend: 14,
        color: '#00BCF2',
        topPerformingPrompt: 'Cisco-backed compliance story',
      },
      {
        brand: 'GoTo Meeting',
        shareOfVoice: 3,
        mentions: 12000,
        citations: 620,
        sentimentScore: 62,
        trCitations: 140,
        trend: 2,
        color: '#FF6900',
        topPerformingPrompt: 'SMB-focused mentions',
      },
    ],
    2: [
      {
        brand: 'Zoom Workplace',
        shareOfVoice: 58,
        mentions: 198000,
        citations: 8860,
        sentimentScore: 78,
        trCitations: 2920,
        trend: 28,
        color: '#2D8CFF',
        topPerformingPrompt: 'Head-to-head vs Teams',
      },
      {
        brand: 'Microsoft Teams',
        shareOfVoice: 38,
        mentions: 152000,
        citations: 6840,
        sentimentScore: 74,
        trCitations: 1820,
        trend: 18,
        color: '#6264A7',
        topPerformingPrompt: 'Teams native integrations',
      },
      {
        brand: 'Google Meet',
        shareOfVoice: 11,
        mentions: 42000,
        citations: 2480,
        sentimentScore: 69,
        trCitations: 540,
        trend: 8,
        color: '#00897B',
        topPerformingPrompt: 'Meet pricing narrative',
      },
      {
        brand: 'Webex',
        shareOfVoice: 8,
        mentions: 28000,
        citations: 1760,
        sentimentScore: 70,
        trCitations: 410,
        trend: 9,
        color: '#00BCF2',
        topPerformingPrompt: 'Enterprise telephony bundle',
      },
      {
        brand: 'GoTo Meeting',
        shareOfVoice: 3,
        mentions: 14000,
        citations: 920,
        sentimentScore: 64,
        trCitations: 180,
        trend: 3,
        color: '#FF6900',
        topPerformingPrompt: 'Budget alternatives',
      },
    ],
    3: [
      {
        brand: 'Zoom Workplace',
        shareOfVoice: 44,
        mentions: 148000,
        citations: 5980,
        sentimentScore: 75,
        trCitations: 1980,
        trend: 19,
        color: '#2D8CFF',
        topPerformingPrompt: 'Remote hybrid messaging',
      },
      {
        brand: 'Microsoft Teams',
        shareOfVoice: 36,
        mentions: 118000,
        citations: 5560,
        sentimentScore: 73,
        trCitations: 1490,
        trend: 16,
        color: '#6264A7',
        topPerformingPrompt: 'Teams collaboration hub',
      },
      {
        brand: 'Google Meet',
        shareOfVoice: 18,
        mentions: 72000,
        citations: 3220,
        sentimentScore: 71,
        trCitations: 710,
        trend: 12,
        color: '#00897B',
        topPerformingPrompt: 'Meet for distributed teams',
      },
      {
        brand: 'Webex',
        shareOfVoice: 10,
        mentions: 22000,
        citations: 1840,
        sentimentScore: 72,
        trCitations: 395,
        trend: 10,
        color: '#00BCF2',
        topPerformingPrompt: 'Secure remote meetings',
      },
      {
        brand: 'GoTo Meeting',
        shareOfVoice: 4,
        mentions: 11000,
        citations: 880,
        sentimentScore: 63,
        trCitations: 165,
        trend: 5,
        color: '#FF6900',
        topPerformingPrompt: 'Affordable remote stack',
      },
    ],
  },
}

// TrustRadius specific metrics
const trustRadiusMetrics = {
  totalCitations: 12840,
  citationPercentage: 31,
  siteRank: 1,
  byPageType: [
    { type: 'Product Pages', citations: 4120, percentage: 32, trend: 28 },
    { type: 'Comparison Pages', citations: 3520, percentage: 27, trend: 34 },
    { type: 'Category Pages', citations: 2580, percentage: 20, trend: 22 },
    { type: 'Review Pages', citations: 1680, percentage: 13, trend: 26 },
    { type: 'Alternative Pages', citations: 720, percentage: 5, trend: 18 },
    { type: 'Pricing Pages', citations: 420, percentage: 3, trend: 42 },
  ],
  brandSpecific: {
    totalCitations: 2640,
    percentage: 34,
    rank: 1
  }
}

/** TrustRadius visibility: topic roll-up + per-prompt slices (mentions, TR-linked mentions, citations, pages, mix) */
const trustRadiusShowcaseData = {
  topic: {
    scopeLabel: 'All tracked prompts (topic)',
    mentionVolume: 52800,
    mentionVolumeDeltaPct: 28,
    trLinkedMentions: 31680,
    trLinkedMentionsDeltaPct: 24,
    trLinkedShareOfMentionsPct: 60,
    citationsDriven: 12840,
    citationsDeltaPct: 26,
    shareOfAllAiCitationsPct: 31,
    topPages: [
      { title: 'Zoom Workplace Reviews', path: '/products/zoom-workplace/reviews', citations: 1820, pctOfTr: 14, mentions: 9520 },
      { title: 'Zoom vs Microsoft Teams Comparison', path: '/compare/zoom-vs-microsoft-teams', citations: 1580, pctOfTr: 12, mentions: 8260 },
      { title: 'Video Conferencing Software Category', path: '/categories/video-conferencing', citations: 1240, pctOfTr: 10, mentions: 6480 },
      { title: 'Zoom Alternatives', path: '/products/zoom/alternatives', citations: 860, pctOfTr: 7, mentions: 4480 },
      { title: 'Zoom Workplace Pricing', path: '/products/zoom-workplace/pricing', citations: 620, pctOfTr: 5, mentions: 3220 },
    ],
    breakdown: [
      { id: 'product', label: 'Product pages', citations: 4120, percentage: 32, mentions: 16880 },
      { id: 'category', label: 'Category pages', citations: 2580, percentage: 20, mentions: 10560 },
      { id: 'reviews', label: 'Reviews & ratings pages', citations: 1680, percentage: 13, mentions: 6860 },
      { id: 'alternatives', label: 'Alternatives', citations: 720, percentage: 5, mentions: 2960 },
      { id: 'pricing', label: 'Pricing', citations: 420, percentage: 3, mentions: 1720 },
      { id: 'comparison', label: 'Comparison pages', citations: 3520, percentage: 27, mentions: 14520 },
    ],
  },
  byPrompt: {
    1: {
      scopeLabel: 'Single prompt · enterprise evaluation',
      mentionVolume: 12800,
      mentionVolumeDeltaPct: 22,
      trLinkedMentions: 8000,
      trLinkedMentionsDeltaPct: 19,
      trLinkedShareOfMentionsPct: 62,
      citationsDriven: 3120,
      citationsDeltaPct: 21,
      shareOfAllAiCitationsPct: 28,
      topPages: [
        { title: 'Zoom Workplace Reviews', path: '/products/zoom-workplace/reviews', citations: 1180, pctOfTr: 18, mentions: 6200 },
        { title: 'Video Conferencing Software Category', path: '/categories/video-conferencing', citations: 920, pctOfTr: 14, mentions: 4580 },
        { title: 'Zoom vs Microsoft Teams Comparison', path: '/compare/zoom-vs-microsoft-teams', citations: 740, pctOfTr: 11, mentions: 3820 },
        { title: 'Zoom Workplace Pricing', path: '/products/zoom-workplace/pricing', citations: 380, pctOfTr: 6, mentions: 1980 },
        { title: 'Zoom Alternatives', path: '/products/zoom/alternatives', citations: 260, pctOfTr: 4, mentions: 1420 },
      ],
      breakdown: [
        { id: 'product', label: 'Product pages', citations: 980, percentage: 31, mentions: 3980 },
        { id: 'category', label: 'Category pages', citations: 820, percentage: 26, mentions: 3320 },
        { id: 'reviews', label: 'Reviews & ratings pages', citations: 560, percentage: 18, mentions: 2280 },
        { id: 'alternatives', label: 'Alternatives', citations: 180, percentage: 6, mentions: 720 },
        { id: 'pricing', label: 'Pricing', citations: 120, percentage: 4, mentions: 480 },
        { id: 'comparison', label: 'Comparison pages', citations: 460, percentage: 15, mentions: 1860 },
      ],
    },
    2: {
      scopeLabel: 'Single prompt · head-to-head comparison',
      mentionVolume: 19600,
      mentionVolumeDeltaPct: 34,
      trLinkedMentions: 11200,
      trLinkedMentionsDeltaPct: 28,
      trLinkedShareOfMentionsPct: 57,
      citationsDriven: 4120,
      citationsDeltaPct: 30,
      shareOfAllAiCitationsPct: 35,
      topPages: [
        { title: 'Zoom vs Microsoft Teams Comparison', path: '/compare/zoom-vs-microsoft-teams', citations: 2220, pctOfTr: 22, mentions: 11200 },
        { title: 'Zoom Workplace Reviews', path: '/products/zoom-workplace/reviews', citations: 980, pctOfTr: 10, mentions: 4880 },
        { title: 'Microsoft Teams Reviews', path: '/products/microsoft-teams/reviews', citations: 620, pctOfTr: 6, mentions: 3060 },
        { title: 'Video Conferencing Software Category', path: '/categories/video-conferencing', citations: 540, pctOfTr: 5, mentions: 2680 },
        { title: 'Zoom Alternatives', path: '/products/zoom/alternatives', citations: 380, pctOfTr: 4, mentions: 1880 },
      ],
      breakdown: [
        { id: 'comparison', label: 'Comparison pages', citations: 1680, percentage: 41, mentions: 8240 },
        { id: 'product', label: 'Product pages', citations: 920, percentage: 22, mentions: 4480 },
        { id: 'category', label: 'Category pages', citations: 680, percentage: 17, mentions: 3320 },
        { id: 'reviews', label: 'Reviews & ratings pages', citations: 540, percentage: 13, mentions: 2640 },
        { id: 'alternatives', label: 'Alternatives', citations: 200, percentage: 5, mentions: 980 },
        { id: 'pricing', label: 'Pricing', citations: 100, percentage: 2, mentions: 520 },
      ],
    },
    3: {
      scopeLabel: 'Single prompt · remote & hybrid teams',
      mentionVolume: 16200,
      mentionVolumeDeltaPct: 24,
      trLinkedMentions: 9180,
      trLinkedMentionsDeltaPct: 21,
      trLinkedShareOfMentionsPct: 57,
      citationsDriven: 3520,
      citationsDeltaPct: 24,
      shareOfAllAiCitationsPct: 29,
      topPages: [
        { title: 'Video Conferencing Software Category', path: '/categories/video-conferencing', citations: 1120, pctOfTr: 16, mentions: 5680 },
        { title: 'Zoom Workplace Reviews', path: '/products/zoom-workplace/reviews', citations: 980, pctOfTr: 14, mentions: 4920 },
        { title: 'Best Video Conferencing Guide', path: '/topics/best-video-conferencing', citations: 620, pctOfTr: 9, mentions: 3120 },
        { title: 'Zoom vs Microsoft Teams Comparison', path: '/compare/zoom-vs-microsoft-teams', citations: 520, pctOfTr: 7, mentions: 2620 },
        { title: 'Zoom Alternatives', path: '/products/zoom/alternatives', citations: 280, pctOfTr: 4, mentions: 1420 },
      ],
      breakdown: [
        { id: 'category', label: 'Category pages', citations: 1220, percentage: 35, mentions: 5660 },
        { id: 'product', label: 'Product pages', citations: 880, percentage: 25, mentions: 4080 },
        { id: 'reviews', label: 'Reviews & ratings pages', citations: 620, percentage: 18, mentions: 2880 },
        { id: 'comparison', label: 'Comparison pages', citations: 420, percentage: 12, mentions: 1940 },
        { id: 'alternatives', label: 'Alternatives', citations: 240, percentage: 7, mentions: 1100 },
        { id: 'pricing', label: 'Pricing', citations: 140, percentage: 4, mentions: 640 },
      ],
    },
  },
}

function getTrustRadiusShowcaseView(scope, promptId) {
  if (scope === 'topic') return trustRadiusShowcaseData.topic
  const id = [1, 2, 3].includes(Number(promptId)) ? Number(promptId) : 1
  return trustRadiusShowcaseData.byPrompt[id]
}

/** GEO ROI: funnel-tagged prompts + default modeling assumptions (editable in UI) */
const ROI_FUNNEL_META = {
  top: {
    label: 'Top of funnel (TOF)',
    short: 'TOF',
    color: '#6366f1',
    definition:
      'Buyers are discovering the category and forming an initial consideration set. They are not yet deep in your product—they are deciding who belongs on a short list. GEO “share of voice” here is about whether your brand and narrative show up when buyers ask broad questions (e.g. “best X for enterprise”).',
    buyerJob: 'Form a day-one shortlist and narrow who gets a serious look.',
    trPlays:
      'Category pages, high-level positioning, strong review presence so you appear when AI synthesizes “who matters” in the space.',
    modelInputsUsed: [
      'Share of voice → scales odds of being “seen” and on a shortlist-style path',
      'Sentiment → nudges TOF visitor→lead quality',
      'Monthly GEO visits & citations → volume of opportunity (citations boost effective reach)',
      'Answer win rate → proxy for “winning the answer,” not just appearing',
      'Assumption group: “Top of funnel conversion” + “Shortlist behavior”',
    ],
  },
  mid: {
    label: 'Mid-funnel (MOF)',
    short: 'MOF',
    color: '#0ea5e9',
    definition:
      'Buyers are product-aware: comparing capabilities, reading in-depth reviews, validating fit. Prompts reference specific products, use cases, or proof (security, AI features, remote work). GEO performance here is about depth and trust signals.',
    buyerJob: 'Validate fit and justify moving to serious evaluation or an opportunity.',
    trPlays:
      'Product and reviews & ratings pages, detailed comparisons, technical proof—content AI cites when buyers ask “how does this actually work?”',
    modelInputsUsed: [
      'Share of voice → scales how much of the “product-aware” traffic you capture',
      'Sentiment → multiplies MOF conversion (better tone → higher opp rate)',
      'Citations → more proof surfaces → stronger modeled visit quality',
      'Assumption group: “Mid-funnel conversion”',
    ],
  },
  bottom: {
    label: 'Bottom of funnel (BOF)',
    short: 'BOF',
    color: '#059669',
    definition:
      'Buyers are in evaluative mode: pricing, alternatives, head-to-head comparisons, procurement-style questions. Small movements in visibility or sentiment here map to near-term pipeline.',
    buyerJob: 'Select a vendor, validate price, and drive to purchase or signed opportunity.',
    trPlays:
      'Comparison, pricing, and alternatives pages—the citations buyers see right before they act.',
    modelInputsUsed: [
      'Share of voice → scales evaluative conversion rate',
      'Sentiment → multiplies BOFU conversion (risk and trust at decision time)',
      'Citations → strongest lever for “ready-to-buy” traffic quality',
      'Assumption group: “Bottom of funnel conversion”',
    ],
  },
}

const roiPromptRows = [
  {
    id: 1,
    prompt: 'What is the best video conferencing software for enterprise?',
    funnel: 'top',
    monthlyGeoVisits: 22400,
    monthlyCitations: 892,
    shareOfVoice: 46,
    sentiment: 0.82,
    answerWinRate: 0.18,
  },
  {
    id: 2,
    prompt: 'Zoom vs Microsoft Teams comparison',
    funnel: 'bottom',
    monthlyGeoVisits: 19800,
    monthlyCitations: 1240,
    shareOfVoice: 58,
    sentiment: 0.86,
    answerWinRate: 0.28,
  },
  {
    id: 3,
    prompt: 'Best video conferencing for remote teams',
    funnel: 'mid',
    monthlyGeoVisits: 16800,
    monthlyCitations: 720,
    shareOfVoice: 42,
    sentiment: 0.78,
    answerWinRate: 0.2,
  },
  {
    id: 4,
    prompt: 'Video conferencing software with AI features',
    funnel: 'mid',
    monthlyGeoVisits: 14200,
    monthlyCitations: 580,
    shareOfVoice: 36,
    sentiment: 0.76,
    answerWinRate: 0.15,
  },
  {
    id: 5,
    prompt: 'Secure video conferencing for healthcare',
    funnel: 'mid',
    monthlyGeoVisits: 12800,
    monthlyCitations: 920,
    shareOfVoice: 62,
    sentiment: 0.84,
    answerWinRate: 0.22,
  },
  {
    id: 6,
    prompt: 'Affordable video conferencing alternatives to Zoom',
    funnel: 'bottom',
    monthlyGeoVisits: 11200,
    monthlyCitations: 480,
    shareOfVoice: 32,
    sentiment: 0.72,
    answerWinRate: 0.14,
  },
  {
    id: 7,
    prompt: 'Video conferencing with breakout rooms',
    funnel: 'mid',
    monthlyGeoVisits: 9800,
    monthlyCitations: 640,
    shareOfVoice: 56,
    sentiment: 0.8,
    answerWinRate: 0.19,
  },
  {
    id: 8,
    prompt: 'Best webinar platform for large events',
    funnel: 'top',
    monthlyGeoVisits: 8600,
    monthlyCitations: 520,
    shareOfVoice: 38,
    sentiment: 0.74,
    answerWinRate: 0.16,
  },
]

const ROI_FUNNEL_ORDER = ['top', 'mid', 'bottom']

/** Group tracked ROI prompts by funnel with volume-weighted SoV and sentiment rollups. */
function buildRoiFunnelRollupMap(promptRows) {
  const map = {
    top: { key: 'top', prompts: [] },
    mid: { key: 'mid', prompts: [] },
    bottom: { key: 'bottom', prompts: [] },
  }
  for (const row of promptRows) {
    if (map[row.funnel]) map[row.funnel].prompts.push(row)
  }
  for (const k of ROI_FUNNEL_ORDER) {
    const prompts = map[k].prompts
    const vol = prompts.reduce((s, p) => s + p.monthlyGeoVisits, 0)
    map[k].promptCount = prompts.length
    map[k].totalVolume = vol
    map[k].weightedSoV =
      vol > 0
        ? Math.round((prompts.reduce((s, p) => s + p.shareOfVoice * p.monthlyGeoVisits, 0) / vol) * 10) / 10
        : 0
    map[k].weightedSentiment = vol > 0 ? prompts.reduce((s, p) => s + p.sentiment * p.monthlyGeoVisits, 0) / vol : 0
  }
  return map
}

const roiFunnelRollupMap = buildRoiFunnelRollupMap(roiPromptRows)

function formatRoiCurrency(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

/**
 * Simplified pipeline + revenue: demand from GEO visits, citations, SoV, sentiment, answer-win;
 * stage-specific avg conversion → pipeline $ and pipeline → revenue $. TR share applied for TR-attributed ROI.
 */
function computeRoiForPrompt(row, a) {
  const sovNorm = Math.min(1.2, Math.max(0.15, row.shareOfVoice / 100))
  const sentAdj = 1 + a.sentimentLiftK * (row.sentiment - a.sentimentBaseline)
  const winLift = 0.65 + 0.35 * Math.min(1, row.answerWinRate * 4)
  const ref = a.citationVolumeRef || 500
  const mc = row.monthlyCitations ?? ref * 0.6
  const citationBoost = 0.72 + 0.28 * Math.min(1, mc / ref)
  const effectiveVisits = row.monthlyGeoVisits * citationBoost

  let pipelineConv = a.midPipelineConv
  let revenueConv = a.midRevenueConv
  if (row.funnel === 'top') {
    pipelineConv = a.topPipelineConv
    revenueConv = a.topRevenueConv
  } else if (row.funnel === 'bottom') {
    pipelineConv = a.bottomPipelineConv
    revenueConv = a.bottomRevenueConv
  }

  const demandFactor = effectiveVisits * sovNorm * sentAdj * winLift
  const pipelineUsd = (demandFactor * pipelineConv * a.avgDealSize) / 100000
  const revenueUsd = pipelineUsd * revenueConv
  const trAttributedPipelineUsd = pipelineUsd * a.trAttributedFraction
  const trAttributedRevenueUsd = revenueUsd * a.trAttributedFraction

  return {
    monthlyUnits: demandFactor / 1000,
    unitLabel: 'demand index (k)',
    pipelineUsd,
    revenueUsd,
    trAttributedPipelineUsd,
    trAttributedRevenueUsd,
    sentAdj,
    citationBoost,
    effectiveVisits,
    pipelineConv,
    revenueConv,
  }
}

function computeRoiScenario(rows, assumptions) {
  return rows.map((r) => ({
    row: r,
    base: computeRoiForPrompt(r, assumptions),
  }))
}

function applyRoiImprovement(row, assumptions) {
  const improved = {
    ...row,
    shareOfVoice: Math.min(100, row.shareOfVoice * (1 + assumptions.scenarioSovPct / 100)),
    sentiment: Math.min(0.98, row.sentiment + assumptions.scenarioSentimentPts),
    monthlyCitations: row.monthlyCitations == null
      ? undefined
      : Math.round(row.monthlyCitations * (1 + assumptions.scenarioCitationPct / 100)),
  }
  return computeRoiForPrompt(improved, assumptions)
}

const defaultRoiAssumptions = {
  avgDealSize: 125000,
  sentimentBaseline: 0.62,
  sentimentLiftK: 0.12,
  citationVolumeRef: 520,
  topPipelineConv: 0.028,
  topRevenueConv: 0.18,
  midPipelineConv: 0.042,
  midRevenueConv: 0.22,
  bottomPipelineConv: 0.065,
  bottomRevenueConv: 0.28,
  trAttributedFraction: 0.42,
  scenarioSovPct: 10,
  scenarioSentimentPts: 0.05,
  scenarioCitationPct: 12,
}

/** Baseline TR-influenced (attributed) monthly pipeline shown in the ROI view ($). */
const TR_INFLUENCED_PIPELINE_USD = 100000

// Customer Selected Prompts (for monitoring)
const selectedPrompts = [
  { 
    id: 1, 
    prompt: 'What is the best video conferencing software for enterprise?',
    isTracking: true,
    metrics: {
      shareOfVoice: 48,
      totalCitations: 428,
      trCitations: 142,
      trPercentage: 33,
      weeklyChange: 18,
      monthlyChange: 28
    },
    aiTools: [
      { name: 'ChatGPT', mentioned: true, citations: 12, position: 2 },
      { name: 'Perplexity', mentioned: true, citations: 18, position: 1 },
      { name: 'Claude', mentioned: true, citations: 8, position: 3 },
      { name: 'Gemini', mentioned: false, citations: 0, position: null },
    ],
    trPagesCited: [
      { page: 'Zoom Workplace Reviews', type: 'Product', citations: 15, frequency: '34%' },
      { page: 'Zoom vs Teams Comparison', type: 'Comparison', citations: 12, frequency: '28%' },
      { page: 'Video Conferencing Category', type: 'Category', citations: 8, frequency: '19%' },
      { page: 'Zoom Alternatives', type: 'Alternatives', citations: 3, frequency: '7%' },
    ]
  },
  { 
    id: 2, 
    prompt: 'Zoom vs Microsoft Teams comparison',
    isTracking: true,
    metrics: {
      shareOfVoice: 64,
      totalCitations: 582,
      trCitations: 198,
      trPercentage: 34,
      weeklyChange: 24,
      monthlyChange: 36
    },
    aiTools: [
      { name: 'ChatGPT', mentioned: true, citations: 28, position: 1 },
      { name: 'Perplexity', mentioned: true, citations: 32, position: 1 },
      { name: 'Claude', mentioned: true, citations: 18, position: 2 },
      { name: 'Gemini', mentioned: true, citations: 12, position: 2 },
    ],
    trPagesCited: [
      { page: 'Zoom vs Teams Comparison', type: 'Comparison', citations: 45, frequency: '58%' },
      { page: 'Zoom Workplace Reviews', type: 'Product', citations: 18, frequency: '23%' },
      { page: 'Microsoft Teams Reviews', type: 'Product', citations: 12, frequency: '15%' },
    ]
  },
  { 
    id: 3, 
    prompt: 'Best video conferencing for remote teams',
    isTracking: true,
    metrics: {
      shareOfVoice: 46,
      totalCitations: 312,
      trCitations: 86,
      trPercentage: 28,
      weeklyChange: 14,
      monthlyChange: 22
    },
    aiTools: [
      { name: 'ChatGPT', mentioned: true, citations: 8, position: 3 },
      { name: 'Perplexity', mentioned: true, citations: 12, position: 2 },
      { name: 'Claude', mentioned: false, citations: 0, position: null },
      { name: 'Gemini', mentioned: true, citations: 3, position: 4 },
    ],
    trPagesCited: [
      { page: 'Video Conferencing Category', type: 'Category', citations: 12, frequency: '52%' },
      { page: 'Zoom Workplace Reviews', type: 'Product', citations: 8, frequency: '35%' },
      { page: 'Best Video Conferencing Guide', type: 'Content', citations: 3, frequency: '13%' },
    ]
  },
]

/** Default shape for TR execution metadata merged onto selected prompts */
const DEFAULT_TR_EXECUTION_META = {
  hasCustomQuestions: false,
  customQuestionCount: 0,
  reviewAnswersForCustomQuestions: 0,
  surfaces: [],
  kpiShareFromExecution: { mentionsPct: 0, shareOfVoicePct: 0, citationsPct: 0 },
}

/**
 * TrustRadius execution coverage per tracked prompt (mock).
 * Surfaces = where TR publishes custom questions + synthesis (buyer pages, synthesis modules, or dedicated TR pages).
 * kpiShareFromExecution = estimated % of that prompt’s mentions / SoV / citations attributable to those TR execution surfaces.
 */
const promptTrExecutionByPromptId = {
  1: {
    hasCustomQuestions: true,
    customQuestionCount: 6,
    reviewAnswersForCustomQuestions: 42,
    surfaces: [
      {
        label: 'Enterprise UC · Q&A & synthesis block',
        href: 'https://www.trustradius.com/products/zoom-workplace/reviews',
        kind: 'buyer_page',
      },
      {
        label: 'Dedicated insights page',
        href: 'https://www.trustradius.com/products/zoom-workplace/features',
        kind: 'dedicated_page',
      },
    ],
    kpiShareFromExecution: { mentionsPct: 34, shareOfVoicePct: 29, citationsPct: 41 },
  },
  2: {
    hasCustomQuestions: true,
    customQuestionCount: 4,
    reviewAnswersForCustomQuestions: 28,
    surfaces: [
      {
        label: 'Zoom vs Teams · comparison + synthesis',
        href: 'https://www.trustradius.com/compare/zoom-vs-microsoft-teams',
        kind: 'buyer_page',
      },
    ],
    kpiShareFromExecution: { mentionsPct: 42, shareOfVoicePct: 38, citationsPct: 48 },
  },
  3: {
    hasCustomQuestions: false,
    customQuestionCount: 0,
    reviewAnswersForCustomQuestions: 0,
    surfaces: [],
    kpiShareFromExecution: { mentionsPct: 0, shareOfVoicePct: 0, citationsPct: 0 },
  },
}

/** Topic-level TR surfaces (category synthesis + primary buyer hub) — rolled up story for the whole program */
const topicTrExecutionSurfaces = [
  {
    label: 'Category synthesis & comparisons',
    href: 'https://www.trustradius.com/categories/video-conferencing',
    kind: 'synthesis_module',
  },
  {
    label: 'Zoom Workplace buyer hub',
    href: 'https://www.trustradius.com/products/zoom-workplace/reviews',
    kind: 'buyer_page',
  },
]

function computeTopicExecutionKpiShare(trRows) {
  const eligible = trRows.filter((r) => r.hasCustomQuestions)
  if (!eligible.length) return { mentionsPct: 0, shareOfVoicePct: 0, citationsPct: 0 }
  let wSum = 0
  let wm = 0
  let ws = 0
  let wc = 0
  for (const r of eligible) {
    const vol = getResearchVolumeForPrompt(r.id) || 1
    const k = r.kpiShareFromExecution
    wm += k.mentionsPct * vol
    ws += k.shareOfVoicePct * vol
    wc += k.citationsPct * vol
    wSum += vol
  }
  if (!wSum) return { mentionsPct: 0, shareOfVoicePct: 0, citationsPct: 0 }
  return {
    mentionsPct: Math.round(wm / wSum),
    shareOfVoicePct: Math.round(ws / wSum),
    citationsPct: Math.round(wc / wSum),
  }
}

function trSurfaceKindShort(kind) {
  if (kind === 'buyer_page') return 'Buyer page'
  if (kind === 'synthesis_module') return 'Synthesis'
  if (kind === 'dedicated_page') return 'Dedicated page'
  return 'TrustRadius'
}

// Competitors for tracking
const trackedCompetitors = [
  { id: 1, name: 'Microsoft Teams', logo: 'MT', color: '#6264A7', selected: true },
  { id: 2, name: 'Google Meet', logo: 'GM', color: '#00897B', selected: true },
  { id: 3, name: 'Webex', logo: 'WX', color: '#00BCF2', selected: true },
  { id: 4, name: 'GoTo Meeting', logo: 'GT', color: '#FF6900', selected: false },
  { id: 5, name: 'RingCentral', logo: 'RC', color: '#FF8200', selected: false },
]

// Crawl Volume Data (Cloudflare)
const crawlVolumeData = {
  totalCrawls: 2840000,
  weeklyChange: 28,
  monthlyChange: 42,
  yearlyChange: 186,
  byCrawler: [
    { crawler: 'GPTBot (OpenAI)', volume: 1048000, percentage: 37, weeklyChange: 32, color: '#10A37F' },
    { crawler: 'Anthropic-AI', volume: 712000, percentage: 25, weeklyChange: 48, color: '#D4A574' },
    { crawler: 'Google-Extended', volume: 542000, percentage: 19, weeklyChange: 22, color: '#4285F4' },
    { crawler: 'PerplexityBot', volume: 368000, percentage: 13, weeklyChange: 42, color: '#20B2AA' },
    { crawler: 'CCBot (Common Crawl)', volume: 176000, percentage: 7, weeklyChange: 12, color: '#6B7280' },
  ],
  byPageType: [
    { pageType: 'Product Pages', volume: 412345, percentage: 33, trend: 24 },
    { pageType: 'Review Pages', volume: 287654, percentage: 23, trend: 18 },
    { pageType: 'Comparison Pages', volume: 224567, percentage: 18, trend: 32 },
    { pageType: 'Category Pages', volume: 187234, percentage: 15, trend: 12 },
    { pageType: 'Alternative Pages', volume: 87456, percentage: 7, trend: 28 },
    { pageType: 'Pricing Pages', volume: 48576, percentage: 4, trend: 45 },
  ],
  byProduct: [
    { product: 'Zoom Workplace', volume: 89234, weeklyChange: 15 },
    { product: 'Microsoft Teams', volume: 76543, weeklyChange: 8 },
    { product: 'Salesforce CRM', volume: 65432, weeklyChange: 12 },
    { product: 'HubSpot', volume: 54321, weeklyChange: 22 },
    { product: 'Slack', volume: 43210, weeklyChange: -3 },
  ],
  timeline: [
    { period: 'Week 1', volume: 285000 },
    { period: 'Week 2', volume: 298000 },
    { period: 'Week 3', volume: 312000 },
    { period: 'Week 4', volume: 352832 },
  ]
}

// Historical trend data
const trendData = {
  weekly: [
    { period: 'Mon', shareOfVoice: 48, citations: 812 },
    { period: 'Tue', shareOfVoice: 50, citations: 884 },
    { period: 'Wed', shareOfVoice: 49, citations: 856 },
    { period: 'Thu', shareOfVoice: 54, citations: 968 },
    { period: 'Fri', shareOfVoice: 52, citations: 924 },
    { period: 'Sat', shareOfVoice: 50, citations: 888 },
    { period: 'Sun', shareOfVoice: 52, citations: 912 },
  ],
  monthly: [
    { period: 'Jan', shareOfVoice: 42, citations: 18420 },
    { period: 'Feb', shareOfVoice: 45, citations: 20120 },
    { period: 'Mar', shareOfVoice: 48, citations: 21840 },
    { period: 'Apr', shareOfVoice: 52, citations: 24200 },
  ]
}

// AI Tool icons
const aiToolIcons = {
  'ChatGPT': '🤖',
  'Perplexity': '🔍',
  'Claude': '🧠',
  'Gemini': '✨',
  'Google': '🔎'
}

const chartColors = ['#0066FF', '#6366F1', '#3B82F6', '#93C5FD', '#FBBF24', '#10B981']

const MONITORING_AI_PLATFORMS = ['ChatGPT', 'Perplexity', 'Claude', 'Gemini']

/** Full calendar year for monthly monitoring series (tables / expanded panels). */
const MONTHLY_PERIOD_LABELS_FULL = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const WEEKLY_PERIOD_LABELS = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8']

/** Rolling calendar years shown as buckets (not multi-year “trend” copy on cards). */
const YEARLY_PERIOD_LABELS = ['2023', '2024', '2025', '2026']

/**
 * Monitoring metrics: mentions, share of voice, citations, sentiment by AI platform + series.
 * Keys: scope `topic` | `all` | prompt id number; period `weekly` | `monthly` | `quarterly` | `yearly`
 */
function buildMonitoringSlice(overrides = {}) {
  const n = (overrides.periodLabels || MONTHLY_PERIOD_LABELS_FULL).length || 12
  const defaults = {
    periodLabels: overrides.periodLabels || [],
    mentions: {
      overall: 128400,
      deltaPct: 14,
      byPlatform: MONITORING_AI_PLATFORMS.map((name, i) => ({
        platform: name,
        count: [45200, 36100, 29800, 17300][i],
        series:
          overrides.mentionSeries?.[i] ||
          Array.from({ length: n }, (_, j) => 28000 + j * 420 + i * 360),
      })),
    },
    shareOfVoice: {
      overall: 52,
      deltaPct: 18,
      byPlatform: MONITORING_AI_PLATFORMS.map((name, i) => ({
        platform: name,
        pct: [48, 56, 46, 40][i],
        series:
          overrides.sovSeries?.[i] ||
          Array.from({ length: n }, (_, j) => Math.min(98, 38 + j * 1.05 + i * 1.8)),
      })),
    },
    citations: {
      overall: 842,
      deltaPct: 24,
      byPlatform: MONITORING_AI_PLATFORMS.map((name, i) => ({
        platform: name,
        count: [312, 248, 186, 96][i],
        series:
          overrides.citSeries?.[i] ||
          Array.from({ length: n }, (_, j) => 320 + j * 42 + i * 28),
      })),
    },
    sentiment: {
      score: 0.79,
      label: 'Mostly positive',
      delta: 0.09,
      byPlatform: MONITORING_AI_PLATFORMS.map((name, i) => ({
        platform: name,
        score: [0.82, 0.78, 0.76, 0.7][i],
        positivePct: [88, 84, 82, 76][i],
        series:
          overrides.sentSeries?.[i] ||
          Array.from({ length: n }, (_, j) =>
            Math.min(0.95, 0.58 + j * 0.017 + i * 0.015)
          ),
      })),
    },
  }
  const o = { ...defaults, ...overrides, periodLabels: overrides.periodLabels || defaults.periodLabels }
  o.mentions = {
    ...defaults.mentions,
    ...overrides.mentions,
    byPlatform: overrides.mentions?.byPlatform || defaults.mentions.byPlatform,
  }
  o.shareOfVoice = {
    ...defaults.shareOfVoice,
    ...overrides.shareOfVoice,
    byPlatform: overrides.shareOfVoice?.byPlatform || defaults.shareOfVoice.byPlatform,
  }
  o.citations = {
    ...defaults.citations,
    ...overrides.citations,
    byPlatform: overrides.citations?.byPlatform || defaults.citations.byPlatform,
  }
  o.sentiment = {
    ...defaults.sentiment,
    ...overrides.sentiment,
    byPlatform: overrides.sentiment?.byPlatform || defaults.sentiment.byPlatform,
  }
  return o
}

const monitoringMetrics = {
  topic: {
    weekly: buildMonitoringSlice({
      periodLabels: WEEKLY_PERIOD_LABELS,
      mentions: { overall: 32100, deltaPct: 6 },
    }),
    monthly: buildMonitoringSlice({
      periodLabels: MONTHLY_PERIOD_LABELS_FULL,
    }),
    quarterly: buildMonitoringSlice({
      periodLabels: ['Q1', 'Q2', 'Q3', 'Q4'],
      shareOfVoice: {
        overall: 50,
        deltaPct: 16,
        byPlatform: MONITORING_AI_PLATFORMS.map((name, i) => ({
          platform: name,
          pct: [36, 42, 34, 30][i],
          series: [32, 34, 36, 38][i] ? [32 + i, 34 + i, 36 + i, 38 + i] : [32, 34, 36, 38],
        })),
      },
      citations: {
        overall: 4820,
        deltaPct: 28,
        byPlatform: MONITORING_AI_PLATFORMS.map((name, i) => ({
          platform: name,
          count: [712, 548, 382, 198][i],
          series: [420, 480, 520, 580][i] ? [400 + i * 40, 450 + i * 40, 500 + i * 40, 560 + i * 40] : [400, 450, 500, 560],
        })),
      },
      sentiment: {
        score: 0.77,
        label: 'Mostly positive',
        delta: 0.1,
        byPlatform: MONITORING_AI_PLATFORMS.map((name, i) => ({
          platform: name,
          score: [0.72, 0.66, 0.65, 0.58][i],
          positivePct: [79, 73, 71, 64][i],
          series: [0.58, 0.62, 0.65, 0.68],
        })),
      },
    }),
    yearly: buildMonitoringSlice({
      periodLabels: YEARLY_PERIOD_LABELS,
      mentions: { overall: 1480000, deltaPct: 11 },
      shareOfVoice: {
        overall: 38,
        deltaPct: 11,
        byPlatform: MONITORING_AI_PLATFORMS.map((name, i) => ({
          platform: name,
          pct: [35, 40, 33, 28][i],
          series: [30, 32, 34, 36],
        })),
      },
      citations: {
        overall: 6240,
        deltaPct: 34,
        byPlatform: MONITORING_AI_PLATFORMS.map((name, i) => ({
          platform: name,
          count: [2410, 1890, 1280, 660][i],
          series: [4800, 5200, 5800, 6240],
        })),
      },
      sentiment: {
        score: 0.66,
        label: 'Mostly positive',
        delta: 0.09,
        byPlatform: MONITORING_AI_PLATFORMS.map((name, i) => ({
          platform: name,
          score: [0.7, 0.64, 0.63, 0.55][i],
          positivePct: [77, 71, 70, 61][i],
          series: [0.58, 0.61, 0.64, 0.66],
        })),
      },
    }),
  },
}

monitoringMetrics.all = {
  weekly: buildMonitoringSlice({
    periodLabels: WEEKLY_PERIOD_LABELS,
    mentions: { overall: 33500, deltaPct: 7 },
  }),
  monthly: buildMonitoringSlice({ periodLabels: MONTHLY_PERIOD_LABELS_FULL }),
  quarterly: buildMonitoringSlice({
    periodLabels: ['Q1', 'Q2', 'Q3', 'Q4'],
    shareOfVoice: {
      overall: 51,
      deltaPct: 15,
      byPlatform: MONITORING_AI_PLATFORMS.map((name, i) => ({
        platform: name,
        pct: [37, 43, 35, 31][i],
        series: [33, 35, 37, 39],
      })),
    },
    citations: {
      overall: 5280,
      deltaPct: 26,
      byPlatform: MONITORING_AI_PLATFORMS.map((name, i) => ({
        platform: name,
        count: [798, 612, 448, 244][i],
        series: [480, 520, 580, 640],
      })),
    },
    sentiment: {
      score: 0.7,
      label: 'Mostly positive',
      delta: 0.05,
      byPlatform: MONITORING_AI_PLATFORMS.map((name, i) => ({
        platform: name,
        score: [0.73, 0.67, 0.66, 0.6][i],
        positivePct: [80, 75, 73, 66][i],
        series: [0.6, 0.63, 0.66, 0.69],
      })),
    },
  }),
  yearly: buildMonitoringSlice({
    periodLabels: YEARLY_PERIOD_LABELS,
    mentions: { overall: 1520000, deltaPct: 10 },
    shareOfVoice: { overall: 39, deltaPct: 10 },
  }),
}

monitoringMetrics.prompts = {
  1: {
    weekly: buildMonitoringSlice({
      periodLabels: WEEKLY_PERIOD_LABELS,
      mentions: { overall: 8420, deltaPct: 8 },
      shareOfVoice: { overall: 54, deltaPct: 5 },
    }),
    monthly: buildMonitoringSlice({
      periodLabels: MONTHLY_PERIOD_LABELS_FULL,
      shareOfVoice: {
        overall: 54,
        deltaPct: 16,
        byPlatform: MONITORING_AI_PLATFORMS.map((name, i) => ({
          platform: name,
          pct: [50, 56, 48, 42][i],
          series: [36, 38, 40, 41, 42, 44, 45, 46, 48, 50, 52, 54].map((v) => v + i),
        })),
      },
      citations: {
        overall: 428,
        deltaPct: 28,
        byPlatform: MONITORING_AI_PLATFORMS.map((name, i) => ({
          platform: name,
          count: [142, 118, 96, 72][i],
          series: [220, 245, 268, 290, 302, 318, 332, 350, 372, 390, 410, 428].map((v) => v + i * 12),
        })),
      },
      sentiment: {
        score: 0.82,
        label: 'Positive',
        delta: 0.08,
        byPlatform: MONITORING_AI_PLATFORMS.map((name, i) => ({
          platform: name,
          score: [0.84, 0.8, 0.78, 0.72][i],
          positivePct: [90, 86, 84, 78][i],
          series: [0.66, 0.68, 0.7, 0.71, 0.72, 0.74, 0.75, 0.76, 0.78, 0.79, 0.81, 0.82].map((v) =>
            Math.min(0.95, v + i * 0.008)
          ),
        })),
      },
    }),
    quarterly: buildMonitoringSlice({
      periodLabels: ['Q1', 'Q2', 'Q3', 'Q4'],
      shareOfVoice: { overall: 43, deltaPct: 6 },
    }),
    yearly: buildMonitoringSlice({
      periodLabels: YEARLY_PERIOD_LABELS,
      mentions: { overall: 412000, deltaPct: 9 },
      shareOfVoice: { overall: 41, deltaPct: 9 },
    }),
  },
  2: {
    weekly: buildMonitoringSlice({
      periodLabels: WEEKLY_PERIOD_LABELS,
      mentions: { overall: 9600, deltaPct: 11 },
    }),
    monthly: buildMonitoringSlice({
      periodLabels: MONTHLY_PERIOD_LABELS_FULL,
      shareOfVoice: { overall: 62, deltaPct: 22 },
      citations: { overall: 582, deltaPct: 34 },
      sentiment: { score: 0.81, label: 'Mostly positive', delta: 0.1 },
    }),
    quarterly: buildMonitoringSlice({ periodLabels: ['Q1', 'Q2', 'Q3', 'Q4'] }),
    yearly: buildMonitoringSlice({ periodLabels: YEARLY_PERIOD_LABELS }),
  },
  3: {
    weekly: buildMonitoringSlice({
      periodLabels: WEEKLY_PERIOD_LABELS,
      mentions: { overall: 5100, deltaPct: 5 },
    }),
    monthly: buildMonitoringSlice({
      periodLabels: MONTHLY_PERIOD_LABELS_FULL,
      shareOfVoice: { overall: 48, deltaPct: 14 },
      citations: { overall: 312, deltaPct: 24 },
      sentiment: { score: 0.76, label: 'Mostly positive', delta: 0.08 },
    }),
    quarterly: buildMonitoringSlice({ periodLabels: ['Q1', 'Q2', 'Q3', 'Q4'] }),
    yearly: buildMonitoringSlice({ periodLabels: YEARLY_PERIOD_LABELS }),
  },
}

function getMonitoringSlice(scope, promptId, period) {
  if (scope === 'topic') return monitoringMetrics.topic[period]
  if (scope === 'all') return monitoringMetrics.all[period]
  const pid = promptId || 1
  return monitoringMetrics.prompts[pid]?.[period] || monitoringMetrics.prompts[1][period]
}

/** Monthly GEO demand volume from research topic data (matches GEO Research tab). */
function getResearchVolumeForPrompt(promptId) {
  const tp = topicResearchData.topPrompts.find((x) => x.id === promptId)
  return tp?.volume ?? 0
}

function formatPlatformSeriesRange(periodLabels, series, formatVal) {
  if (!periodLabels?.length || !series?.length) return null
  const last = series.length - 1
  const li = Math.min(last, periodLabels.length - 1)
  return `${periodLabels[0]} ${formatVal(series[0])} → ${periodLabels[li]} ${formatVal(series[last])}`
}

/** Merge TR page citations across all tracked prompts (topic-level view). */
function aggregateTopicCitedPages() {
  const map = new Map()
  for (const p of selectedPrompts) {
    for (const pg of p.trPagesCited || []) {
      const prev = map.get(pg.page) || { title: pg.page, type: pg.type, citations: 0 }
      prev.citations += pg.citations
      map.set(pg.page, prev)
    }
  }
  return [...map.values()].sort((a, b) => b.citations - a.citations)
}

/**
 * Domains AI assistants cite most often for this monitoring scope (mock).
 * Topic uses GEO research top sites; prompt skews toward that prompt’s citation mix.
 */
function getMonitoringTopCitedSources(scope, promptId) {
  const baseSites = topicResearchData.topCitedSites.map((s) => ({
    label: s.site,
    citations: s.citations,
    pct: s.percentage,
  }))
  if (scope === 'topic') return baseSites.slice(0, 7)
  if (scope === 'all') {
    return baseSites.map((row, i) => ({
      ...row,
      citations: Math.round(row.citations * 1.06),
      pct: Math.min(100, row.pct + (i === 0 ? 1 : 0)),
    }))
  }
  const pr = selectedPrompts.find((x) => x.id === promptId)
  if (!pr) return baseSites.slice(0, 5)
  const tc = pr.metrics?.totalCitations ?? 400
  const tr = pr.metrics?.trCitations ?? 120
  return [
    { label: 'trustradius.com', citations: tr * 6, pct: Math.round((tr / tc) * 100) },
    { label: 'g2.com', citations: Math.round(tc * 0.19), pct: 19 },
    { label: 'capterra.com', citations: Math.round(tc * 0.14), pct: 14 },
    { label: 'gartner.com', citations: Math.round(tc * 0.11), pct: 11 },
    { label: 'techradar.com', citations: Math.round(tc * 0.08), pct: 8 },
    { label: 'forbes.com', citations: Math.round(tc * 0.07), pct: 7 },
  ]
}

/** Page titles most often linked in AI answers for this scope (mock + tracked prompt pages). */
function getMonitoringTopCitedPages(scope, promptId) {
  if (scope === 'prompt') {
    const pr = selectedPrompts.find((x) => x.id === promptId)
    return (pr?.trPagesCited || []).map((pg) => ({
      title: pg.page,
      type: pg.type,
      citations: pg.citations,
      shareLabel: pg.frequency,
    }))
  }
  const merged = aggregateTopicCitedPages()
  if (scope === 'all') {
    return merged.map((row) => ({
      title: row.title,
      type: row.type,
      citations: Math.round(row.citations * 1.05),
    }))
  }
  return merged.map((row) => ({
    title: row.title,
    type: row.type,
    citations: row.citations,
  }))
}

function buildMonitoringInsights(slice, scopeLabel, periodLabel) {
  const topSov = [...slice.shareOfVoice.byPlatform].sort((a, b) => b.pct - a.pct)[0]
  const topCit = [...slice.citations.byPlatform].sort((a, b) => b.count - a.count)[0]
  const topMen = [...slice.mentions.byPlatform].sort((a, b) => b.count - a.count)[0]
  const topSent = [...slice.sentiment.byPlatform].sort((a, b) => b.score - a.score)[0]
  const sentDeltaNote =
    slice.sentiment.delta >= 0
      ? `Sentiment ticked up vs the prior period; best platform score is ${topSent.platform} at ${(topSent.score * 100).toFixed(0)}/100.`
      : `Sentiment softened vs the prior period; ${topSent.platform} still shows the highest scores (${(topSent.score * 100).toFixed(0)}/100)—worth diagnosing weak narratives.`
  return [
    `What matters in this ${periodLabel} view (${scopeLabel}): ${topMen.platform} generates the most mentions (${topMen.count.toLocaleString()}), while ${topCit.platform} delivers the most citations (${topCit.count.toLocaleString()}). Share-of-voice leadership is concentrated on ${topSov.platform} (${topSov.pct}% SoV).`,
    `TrustRadius — custom questions: Where SoV trails that leader, add TrustRadius custom questions and structured Q&A that mirror real buyer language so TR surfaces answers models can reuse—this closes content gaps before competitors own the narrative.`,
    `TrustRadius — reviews & UGC: Run a review campaign to pull fresh user proof onto TrustRadius; peer evidence is what models cite when comparison and category answers need verifiable detail. ${sentDeltaNote}`,
    `TrustRadius — buyer pages: Feed that proof into your TrustRadius product, comparison, and category buyer pages so mentions and citations consolidate into scannable claims buyers (and models) see first.`,
  ]
}

/**
 * Parse natural language to update dashboard state (template-friendly commands).
 * Returns a user-facing message when something was applied, or null.
 */
function applyGeoDashboardIntent(question, h) {
  const q = question.toLowerCase().trim()
  const out = []
  const has = (re) => re.test(q)

  if (has(/\b(go to|open|show|switch to)\b.*\b(geo )?research\b/) || has(/\bresearch tab\b/)) {
    h.setActiveTab('research')
    out.push('Switched to **GEO Research**.')
  }
  if (has(/\b(go to|open|show|switch to)\b.*\b(prompt )?setup\b/) || has(/\bsetup tab\b/)) {
    h.setActiveTab('setup')
    out.push('Switched to **Prompt Setup**.')
  }
  if (has(/\b(go to|open|show|switch to)\b.*\bmonitoring\b/) || has(/\bmonitoring( &| and)? competitive\b/)) {
    h.setActiveTab('monitoring')
    out.push('Switched to **Monitoring & Competitive**.')
  }
  if (has(/\b(go to|open|show|switch to)\b.*\b(roi|pipeline)\b/) || has(/\broi (calculator|tab)\b/)) {
    h.setActiveTab('roi')
    out.push('Switched to **ROI calculator**.')
  }
  if (has(/\b(go to|open|show|switch to)\b.*\bcrawl\b/) || has(/\bcrawl analytics\b/)) {
    h.setActiveTab('crawl')
    out.push('Switched to **Crawl Analytics**.')
  }

  const monitoringIntent =
    h.activeTab === 'monitoring' || q.includes('monitoring') || q.includes('competitive dashboard')

  if (monitoringIntent) {
    if (q.includes('monitoring') && /\bweekly\b/.test(q)) {
      h.setActiveTab('monitoring')
      h.setMonitoringPeriod('weekly')
      out.push('Opened Monitoring with **Weekly** period.')
    }
    if (q.includes('monitoring') && /\b(quarterly|quarter)\b/.test(q)) {
      h.setActiveTab('monitoring')
      h.setMonitoringPeriod('quarterly')
      out.push('Opened Monitoring with **Quarterly** period.')
    }
    if (q.includes('monitoring') && /\b(monthly|each month)\b/.test(q)) {
      h.setActiveTab('monitoring')
      h.setMonitoringPeriod('monthly')
      out.push('Opened Monitoring with **Monthly** period.')
    }
    if (q.includes('monitoring') && /\b(yearly|annual)\b/.test(q)) {
      h.setActiveTab('monitoring')
      h.setMonitoringPeriod('yearly')
      out.push('Opened Monitoring with **Yearly** period.')
    }
    if (has(/\bweekly\b/) && has(/\b(period|view|timeframe|granularity|switch|set|use)\b/)) {
      h.setMonitoringPeriod('weekly')
      out.push('Monitoring period: **Weekly**.')
    }
    if (has(/\b(monthly|each month|per month)\b/) && has(/\b(period|view|timeframe|granularity|switch|set|use)\b/)) {
      h.setMonitoringPeriod('monthly')
      out.push('Monitoring period: **Monthly**.')
    }
    if (has(/\b(quarterly|by quarter|each quarter)\b/) && has(/\b(period|view|timeframe|granularity|switch|set|use)\b/)) {
      h.setMonitoringPeriod('quarterly')
      out.push('Monitoring period: **Quarterly**.')
    }
    if (has(/\b(yearly|annual|each year|by year)\b/) && has(/\b(period|view|timeframe|granularity|switch|set|use)\b/)) {
      h.setMonitoringPeriod('yearly')
      out.push('Monitoring period: **Yearly**.')
    }
    if (has(/\btopic (roll|level|view|scope)\b/) || (q.includes('scope') && q.includes('topic'))) {
      h.setMonitoringScope('topic')
      out.push('Monitoring scope: **Topic** (all selected prompts).')
    }
    if (q.includes('all tracked') || q.includes('all prompts')) {
      h.setMonitoringScope('all')
      out.push('Monitoring scope: **All tracked prompts**.')
    }
    if (has(/\b(single|one) prompt\b/) || has(/\bby prompt\b/)) {
      h.setMonitoringScope('prompt')
      out.push('Monitoring scope: **By prompt** (use the prompt dropdown).')
    }
    if (q.includes('competitive') && has(/\b(by|per) prompt\b/) && has(/\b(compare|comparison|benchmark)\b/)) {
      h.setSovComparisonScope('prompt')
      out.push('Competitive **Share of voice comparison** is set to **By prompt**.')
    }
    if (q.includes('topic') && has(/\b(compare|comparison|benchmark|whole)\b/) && q.includes('all prompt')) {
      h.setSovComparisonScope('topic')
      out.push('Competitive comparison is set to **Topic (all prompts)**.')
    }
  }

  if (h.activeTab === 'crawl' || q.includes('crawl')) {
    if (has(/\bweekly\b/) && has(/\b(period|view|timeframe|switch|set|use)\b/)) {
      h.setSelectedTimeframe('weekly')
      out.push('Crawl timeframe: **Weekly**.')
    }
    if (has(/\bmonthly\b/) && has(/\b(period|view|timeframe|switch|set|use)\b/) && !q.includes('crawl volume')) {
      h.setSelectedTimeframe('monthly')
      out.push('Crawl timeframe: **Monthly**.')
    }
    if (has(/\b(yearly|annual)\b/) && has(/\b(period|view|timeframe|switch|set|use)\b/)) {
      h.setSelectedTimeframe('yearly')
      out.push('Crawl timeframe: **Yearly**.')
    }
  }

  if (out.length === 0) return null
  return [...new Set(out)].join(' ')
}

/** Fallback assistant answers when MCP hook is not mounted — tab-aware + monitoring metrics. */
function geoAssistantFallbackAnswer(question, ctx) {
  const q = question.toLowerCase()
  const tab = ctx.activeTab

  if (/\b(summarize|overview|what matters|key points|executive)\b/.test(q)) {
    if (tab === 'research') {
      return `**Research (${ctx.research.topic})** — ${ctx.research.promptCount} prompts in view with ~${ctx.research.totalVolume.toLocaleString()} monthly buyer queries. Your modeled share of voice is **${ctx.research.blendedSoVPct}%**; TrustRadius is the **#1** cited property for this topic. Lead with high-volume prompts where you already win mentions, then close gaps on competitor-led comparisons.`
    }
    if (tab === 'setup') {
      return `**Setup** — You are configuring **Zoom Workplace** with **${ctx.setup.trackedPrompts}** tracked prompts and **3** active competitors. Finish by saving to connect this configuration to Monitoring and ROI views.`
    }
    if (tab === 'monitoring') {
      return `**Monitoring** — ${ctx.periodLabel} · ${ctx.scopeLabel}. Mentions **${ctx.slice.mentions.overall.toLocaleString()}** (${ctx.slice.mentions.deltaPct >= 0 ? '+' : ''}${ctx.slice.mentions.deltaPct}% vs prior period); share of voice **${ctx.slice.shareOfVoice.overall}%**; citations **${ctx.slice.citations.overall.toLocaleString()}**; sentiment **${(ctx.slice.sentiment.score * 100).toFixed(0)}** (${ctx.slice.sentiment.label}). Leading platform by mentions: **${ctx.slice.mentions.byPlatform[0].platform}**.`
    }
    if (tab === 'roi') {
      return `**ROI** — Base TR-influenced pipeline **${ctx.roi.baseTrPipeline}** vs scenario **${ctx.roi.scenarioTrPipeline}** (${ctx.roi.deltaTrPipeline} vs base). Uplift is driven by your global scenario knobs (SoV, sentiment, citations). Tighten conversion assumptions in Global if the model should reflect your sales cycle.`
    }
    if (tab === 'crawl') {
      return `**Crawl analytics** — **${ctx.crawl.totalCrawls}** total crawls in the sample window; top bot **${ctx.crawl.topCrawler}** (${ctx.crawl.topCrawlerPct}% of volume). Review page types with the highest growth to align with where LLMs pull evidence.`
    }
  }

  if (tab === 'monitoring' || q.includes('sov') || q.includes('share of voice')) {
    if ((q.includes('sov') || q.includes('share')) && tab !== 'research') {
      return `In this view (${ctx.scopeLabel}, **${ctx.periodLabel}**), overall share of voice is **${ctx.slice.shareOfVoice.overall}%** (**${ctx.slice.shareOfVoice.deltaPct >= 0 ? '+' : ''}${ctx.slice.shareOfVoice.deltaPct}%** vs prior period). **${ctx.slice.shareOfVoice.byPlatform[0].platform}** shows the highest SoV among LLMs.`
    }
    if (tab === 'research' && (q.includes('sov') || q.includes('share of voice'))) {
      return `In **Research**, your modeled topic share of voice is **${ctx.research.blendedSoVPct}%** (see overview stats). Compare per-prompt SoV in the table — prioritize high-volume prompts where you lead or can close a gap.`
    }
  }
  if (q.includes('citation')) {
    if (tab === 'research') {
      return `In **Research**, TrustRadius is ranked **#1** among cited sites for this topic. Align fan-out queries and product pages with the domains buyers see most in AI answers.`
    }
    return `Citations (Monitoring scope): **${ctx.slice.citations.overall.toLocaleString()}** total (**${ctx.slice.citations.deltaPct >= 0 ? '+' : ''}${ctx.slice.citations.deltaPct}%** vs prior). Peak platform: **${ctx.slice.citations.byPlatform[0].platform}**.`
  }
  if (q.includes('sentiment')) {
    if (tab === 'research') {
      return `Research surfaces **per-prompt** share of voice and mention mix — open **Monitoring** for blended **sentiment by LLM** on your configured scope.`
    }
    return `Blended sentiment: **${(ctx.slice.sentiment.score * 100).toFixed(0)}/100** (${ctx.slice.sentiment.label}). Best-scoring platform: **${ctx.slice.sentiment.byPlatform[0].platform}**.`
  }
  if (q.includes('pipeline') || q.includes('revenue') || q.includes('roi')) {
    return `**ROI view** — TR-influenced pipeline is **${ctx.roi.baseTrPipeline}** in the base case. Scenario pipeline: **${ctx.roi.scenarioTrPipeline}** (**${ctx.roi.deltaTrPipeline}** change). Use Global assumptions to align deal size and conversion with your business.`
  }
  if (q.includes('crawl') || q.includes('bot') || q.includes('crawler')) {
    return `Crawl sample: **${ctx.crawl.totalCrawls}** requests; **${ctx.crawl.topCrawler}** leads share. Page-type mix suggests where to invest in structured, citable content.`
  }

  return `I am using the **${ctx.tabLabel}** context (${ctx.contextLine}). Ask for a **summary**, or about **share of voice**, **citations**, **sentiment**, **ROI / pipeline**, or **crawlers**. You can also say e.g. “**open monitoring** and set **quarterly**” to shape the dashboard. For production, connect \`window.__GEO_CONDUCTOR_MCP__\` for tool-backed answers.`
}

/** Optional host hook: `window.__GEO_CONDUCTOR_MCP__({ question, context })` for richer answers. */
async function askConductorMcp(question, context) {
  if (typeof window !== 'undefined' && typeof window.__GEO_CONDUCTOR_MCP__ === 'function') {
    return window.__GEO_CONDUCTOR_MCP__({ question, context })
  }
  return { answer: geoAssistantFallbackAnswer(question, context) }
}

function renderAssistantSegments(text) {
  if (!text) return null
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    const m = part.match(/^\*\*([^*]+)\*\*$/)
    if (m) return <strong key={i}>{m[1]}</strong>
    return <span key={i}>{part}</span>
  })
}

/** Mini bar chart for a single KPI across period buckets (selected granularity). */
function MonitoringKpiBarStrip({ label, periodLabels, values, formatVal, color }) {
  const nums = (values || []).map(Number)
  if (!nums.length) return null
  const max = Math.max(...nums, 1)
  return (
    <div className="monitoring-kpi-bar-strip">
      <div className="monitoring-kpi-bar-strip-head">
        <span className="monitoring-kpi-bar-strip-title">{label}</span>
      </div>
      <div className="monitoring-kpi-bars" role="img" aria-label={label}>
        {periodLabels.map((lab, i) => (
          <div key={lab} className="monitoring-kpi-bar-slot">
            <div
              className="monitoring-kpi-bar-fill"
              style={{ height: `${(nums[i] / max) * 100}%`, background: color }}
              title={`${lab}: ${formatVal(nums[i])}`}
            />
            <span className="monitoring-kpi-bar-x">{lab}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function SectionInsightCallout({ heading, items }) {
  if (!items?.length) return null
  return (
    <aside className="section-insight-callout" aria-label={heading}>
      <div className="section-insight-callout-head">
        <span className="section-insight-icon" aria-hidden="true">
          ✦
        </span>
        <span className="section-insight-heading">{heading}</span>
      </div>
      <ul className="section-insight-list">
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </aside>
  )
}

// ============================================
// COMPONENT
// ============================================

function GEODashboard() {
  const [activeNav, setActiveNav] = useState('geo-visibility')
  const [activeTab, setActiveTab] = useState('research')
  const [selectedTimeframe, setSelectedTimeframe] = useState('monthly')
  const [monitoringScope, setMonitoringScope] = useState('topic')
  const [monitoringPromptId, setMonitoringPromptId] = useState(1)
  const [monitoringPeriod, setMonitoringPeriod] = useState('monthly')
  const [conductorQuestion, setConductorQuestion] = useState('')
  const [conductorMessages, setConductorMessages] = useState([])
  const [conductorBusy, setConductorBusy] = useState(false)
  const [sovComparisonScope, setSovComparisonScope] = useState('topic')
  const [sovComparisonPromptId, setSovComparisonPromptId] = useState(1)
  const [trShowcaseScope, setTrShowcaseScope] = useState('topic')
  const [trShowcasePromptId, setTrShowcasePromptId] = useState(1)
  const [roiAssumptions, setRoiAssumptions] = useState(() => ({ ...defaultRoiAssumptions }))

  const totalPromptVolume = useMemo(
    () => topicResearchData.topPrompts.reduce((sum, p) => sum + p.volume, 0),
    []
  )
  const roiBundle = useMemo(() => {
    const rowsRaw = computeRoiScenario(roiPromptRows, roiAssumptions)
    const rawBaseTrPipeline = rowsRaw.reduce((s, x) => s + x.base.trAttributedPipelineUsd, 0)
    const trInfluenceScale = rawBaseTrPipeline > 0 ? TR_INFLUENCED_PIPELINE_USD / rawBaseTrPipeline : 1

    const rows = rowsRaw.map(({ row, base }) => ({
      row,
      base: {
        ...base,
        trAttributedPipelineUsd: base.trAttributedPipelineUsd * trInfluenceScale,
        trAttributedRevenueUsd: base.trAttributedRevenueUsd * trInfluenceScale,
      },
    }))

    const basePipeline = rowsRaw.reduce((s, x) => s + x.base.pipelineUsd, 0)
    const baseRevenue = rowsRaw.reduce((s, x) => s + x.base.revenueUsd, 0)
    const baseTrPipeline = TR_INFLUENCED_PIPELINE_USD
    const baseTrRevenue = rowsRaw.reduce((s, x) => s + x.base.trAttributedRevenueUsd, 0) * trInfluenceScale
    const scenarioPipeline = roiPromptRows.reduce(
      (s, r) => s + applyRoiImprovement(r, roiAssumptions).pipelineUsd,
      0
    )
    const scenarioRevenue = roiPromptRows.reduce(
      (s, r) => s + applyRoiImprovement(r, roiAssumptions).revenueUsd,
      0
    )
    const rawScenarioTrPipeline = roiPromptRows.reduce(
      (s, r) => s + applyRoiImprovement(r, roiAssumptions).trAttributedPipelineUsd,
      0
    )
    const rawScenarioTrRevenue = roiPromptRows.reduce(
      (s, r) => s + applyRoiImprovement(r, roiAssumptions).trAttributedRevenueUsd,
      0
    )
    const scenarioTrPipeline = rawScenarioTrPipeline * trInfluenceScale
    const scenarioTrRevenue = rawScenarioTrRevenue * trInfluenceScale
    return {
      rows,
      trInfluenceScale,
      basePipeline,
      baseRevenue,
      baseTrPipeline,
      baseTrRevenue,
      scenarioPipeline,
      scenarioRevenue,
      scenarioTrPipeline,
      scenarioTrRevenue,
      deltaPipeline: scenarioPipeline - basePipeline,
      deltaRevenue: scenarioRevenue - baseRevenue,
      deltaTrPipeline: scenarioTrPipeline - baseTrPipeline,
      deltaTrRevenue: scenarioTrRevenue - baseTrRevenue,
    }
  }, [roiAssumptions])

  const roiFunnelDrillWithTr = useMemo(() => {
    return ROI_FUNNEL_ORDER.map((funnelKey) => {
      const rollup = roiFunnelRollupMap[funnelKey]
      const rowBundle = roiBundle.rows.filter(({ row }) => row.funnel === funnelKey)
      const trPipeline = rowBundle.reduce((s, x) => s + x.base.trAttributedPipelineUsd, 0)
      const trRevenue = rowBundle.reduce((s, x) => s + x.base.trAttributedRevenueUsd, 0)
      return { funnelKey, rollup, rowBundle, trPipeline, trRevenue }
    })
  }, [roiBundle])

  const roiFunnelTrackedTotals = useMemo(() => {
    const rows = roiBundle.rows
    const vol = rows.reduce((s, x) => s + x.row.monthlyGeoVisits, 0)
    const weightedSoV =
      vol > 0
        ? Math.round((rows.reduce((s, x) => s + x.row.shareOfVoice * x.row.monthlyGeoVisits, 0) / vol) * 10) / 10
        : 0
    const weightedSentiment =
      vol > 0 ? rows.reduce((s, x) => s + x.row.sentiment * x.row.monthlyGeoVisits, 0) / vol : 0
    const trPipeline = rows.reduce((s, x) => s + x.base.trAttributedPipelineUsd, 0)
    const trRevenue = rows.reduce((s, x) => s + x.base.trAttributedRevenueUsd, 0)
    return {
      promptCount: rows.length,
      totalVolume: vol,
      weightedSoV,
      weightedSentiment,
      trPipeline,
      trRevenue,
    }
  }, [roiBundle])

  const monitoringSlice = useMemo(() => {
    const pid = monitoringScope === 'prompt' ? monitoringPromptId : null
    return getMonitoringSlice(monitoringScope === 'prompt' ? 'prompt' : monitoringScope, pid, monitoringPeriod)
  }, [monitoringScope, monitoringPromptId, monitoringPeriod])

  const monitoringContextLabel = useMemo(() => {
    if (monitoringScope === 'topic') return `Topic: ${topicResearchData.selectedTopic}`
    if (monitoringScope === 'all') return 'All tracked prompts'
    const p = selectedPrompts.find((x) => x.id === monitoringPromptId)
    return p ? `Prompt: ${p.prompt}` : 'Single prompt'
  }, [monitoringScope, monitoringPromptId])

  const roiMonitoringFeed = useMemo(
    () => ({
      scopeLabel: monitoringContextLabel,
      shareOfVoicePct: monitoringSlice.shareOfVoice.overall,
      sentimentScore: monitoringSlice.sentiment.score,
      sentimentLabel: monitoringSlice.sentiment.label,
      sentimentDelta: monitoringSlice.sentiment.delta,
      citationsTotal: monitoringSlice.citations.overall,
      citationsDeltaPct: monitoringSlice.citations.deltaPct,
    }),
    [monitoringContextLabel, monitoringSlice]
  )

  const monitoringInsights = useMemo(
    () =>
      buildMonitoringInsights(
        monitoringSlice,
        monitoringContextLabel,
        monitoringPeriod === 'weekly'
          ? 'week'
          : monitoringPeriod === 'monthly'
            ? 'month'
            : monitoringPeriod === 'quarterly'
              ? 'quarter'
              : 'year'
      ),
    [monitoringSlice, monitoringContextLabel, monitoringPeriod]
  )

  const periodLabelPretty =
    monitoringPeriod === 'weekly'
      ? 'Weekly'
      : monitoringPeriod === 'monthly'
        ? 'Monthly'
        : monitoringPeriod === 'quarterly'
          ? 'Quarterly'
          : 'Yearly'

  const priorPeriodPhrase =
    monitoringPeriod === 'weekly'
      ? 'prior week'
      : monitoringPeriod === 'monthly'
        ? 'prior month'
        : monitoringPeriod === 'quarterly'
          ? 'prior quarter'
          : 'prior year'

  const tabLabels = {
    research: 'GEO Research',
    setup: 'Prompt Setup',
    monitoring: 'Monitoring & Competitive',
    roi: 'ROI calculator',
    crawl: 'Crawl Analytics',
  }

  const geoAssistantContextLine = useMemo(() => {
    switch (activeTab) {
      case 'research':
        return `${topicResearchData.selectedTopic} · ${topicResearchData.topPrompts.length} prompts · ~${totalPromptVolume.toLocaleString()} mo. queries`
      case 'setup':
        return `Zoom Workplace · ${selectedPrompts.length} prompts · 3 competitors selected`
      case 'monitoring':
        return `${periodLabelPretty} · ${monitoringContextLabel}`
      case 'roi':
        return `${monitoringContextLabel} · base TR pipeline ${formatRoiCurrency(roiBundle.baseTrPipeline)}`
      case 'crawl':
        return `${selectedTimeframe} · ${crawlVolumeData.totalCrawls.toLocaleString()} crawls (sample month)`
      default:
        return ''
    }
  }, [
    activeTab,
    totalPromptVolume,
    periodLabelPretty,
    monitoringContextLabel,
    roiBundle.baseTrPipeline,
    selectedTimeframe,
  ])

  /** Topic row + per-prompt rows: volume, mentions, SoV, citations, sentiment with prior-period change */
  const monitoringSnapshotTable = useMemo(() => {
    const period = monitoringPeriod
    const topicSlice = getMonitoringSlice('topic', null, period)
    const topicMonthlyVol = selectedPrompts.reduce((sum, p) => sum + getResearchVolumeForPrompt(p.id), 0)

    const rowFromSlice = (slice, key, kind, title, monthlyVolume, promptId) => ({
      key,
      kind,
      title,
      promptId,
      monthlyVolume,
      mentions: slice.mentions.overall,
      mentionsDeltaPct: slice.mentions.deltaPct,
      shareOfVoice: slice.shareOfVoice.overall,
      sovDeltaPct: slice.shareOfVoice.deltaPct,
      citations: slice.citations.overall,
      citDeltaPct: slice.citations.deltaPct,
      sentimentScore: slice.sentiment.score,
      sentDelta: slice.sentiment.delta,
    })

    const promptRows = selectedPrompts.map((p) => {
      const slice = getMonitoringSlice('prompt', p.id, period)
      return rowFromSlice(slice, `snapshot-p-${p.id}`, 'prompt', p.prompt, getResearchVolumeForPrompt(p.id), p.id)
    })
    const topicRow = rowFromSlice(
      topicSlice,
      'snapshot-topic',
      'topic',
      topicResearchData.selectedTopic,
      topicMonthlyVol,
      null
    )
    const rows = [topicRow, ...promptRows]
    const maxVol = Math.max(...rows.map((r) => r.monthlyVolume), 1)
    return { rows, maxVol }
  }, [selectedPrompts, monitoringPeriod])

  const monitoringKpiMatrix = useMemo(() => {
    const pid = monitoringScope === 'prompt' ? monitoringPromptId : null
    const sc = monitoringScope === 'prompt' ? 'prompt' : monitoringScope
    return (['weekly', 'monthly', 'quarterly', 'yearly']).map((p) => {
      const sl = getMonitoringSlice(sc, pid, p)
      return {
        key: p,
        label: p === 'weekly' ? 'Weekly' : p === 'monthly' ? 'Monthly' : p === 'quarterly' ? 'Quarterly' : 'Yearly',
        slice: sl,
        mentions: sl.mentions.overall,
        mDelta: sl.mentions.deltaPct,
        sov: sl.shareOfVoice.overall,
        sovDelta: sl.shareOfVoice.deltaPct,
        cit: sl.citations.overall,
        citDelta: sl.citations.deltaPct,
        sent: sl.sentiment.score,
        sentDelta: sl.sentiment.delta,
      }
    })
  }, [monitoringScope, monitoringPromptId])

  const researchInsightItems = useMemo(
    () => ({
      overview: [
        `What matters: aggregate buyer demand in this topic is ~${totalPromptVolume.toLocaleString()} monthly queries—the scale shows where GEO investment either compounds or leaks if you are absent from high-intent prompts.`,
        'TrustRadius — custom questions: Inventory prompts where your share of voice is under 40% and brief TrustRadius on the exact buyer jobs-to-be-done; custom Q&A on TR closes gaps so models find authoritative answers tied to your pages.',
        'TrustRadius — reviews & buyer pages: Run review campaigns for the highest-volume intents, then surface that UGC on TrustRadius product and comparison buyer pages so growth in demand maps to visible, citable peer proof.',
      ],
      prompts: [
        `What matters: the top prompt by volume (“${topicResearchData.topPrompts[0].prompt.slice(0, 68)}…”) concentrates demand—winning or losing here disproportionately moves citations and pipeline narratives.`,
        'TrustRadius — buyer pages & UGC: Publish decisive comparison and proof modules on your TrustRadius buyer pages, then run a review sprint so fresh UGC backs the claims buyers compare first.',
      ],
      fanout: [
        'What matters: fan-out queries reveal how crawlers stitch intent—phrases that repeat are gaps between what buyers ask and what your pages explicitly answer.',
        'TrustRadius — custom questions & pages: Encode those phrases into TrustRadius custom questions and align titles on TR comparison, pricing, and alternatives pages so fan-out clusters resolve on properties you control.',
      ],
      landscape: [
        'What matters: citation share clusters on a handful of domains—whoever supplies structured, quotable proof earns the narrative in AI answers.',
        'TrustRadius — showcase on buyer pages: Prioritize TrustRadius comparison and product buyer pages with peer proof and specs competitors cannot copy overnight; pair with review campaigns so UGC density matches enterprise vs SMB intents you track.',
      ],
      trVisibility: [
        'What matters: TrustRadius citations concentrate on pages that combine category authority with product-level proof—reviews and comparisons carry most of the lift.',
        'TrustRadius — full loop: Use monitoring gaps to define custom TR questions, launch targeted review collection for UGC, then spotlight outcomes on TR buyer journeys so mentions convert into cited, buyer-ready evidence.',
      ],
    }),
    [totalPromptVolume]
  )

  const setupInsightItems = useMemo(
    () => [
      'What matters: the prompts and competitors you lock here become the spine for Monitoring, ROI, and what TrustRadius prioritizes for GEO content and buyer-page updates.',
      'TrustRadius — custom questions: Finalize prompts that represent real revenue conversations so TR can script custom questions and page templates around those intents—not generic keywords.',
      'TrustRadius — UGC & buyer pages: Plan which products need review velocity and which TrustRadius buyer pages (product, compare, category) will showcase that proof first once tracking is live.',
    ],
    []
  )

  const roiInsightItems = useMemo(
    () => [
      `What matters: modeled TR-influenced pipeline is ${formatRoiCurrency(roiBundle.baseTrPipeline)} with ${formatRoiCurrency(roiBundle.deltaTrPipeline)} upside in the “better GEO” scenario—the gap shows how sensitive revenue is to visibility, not just traffic.`,
      'TrustRadius — custom questions & pages: Use funnel-tagged prompts with weak modeled contribution to define TR custom Q&A and buyer-page refreshes; that tightens citation-backed pipeline before you change discounting.',
      'TrustRadius — UGC: Allocate review campaigns to prompts that drive the largest TR-attributed revenue swing so peer proof matches the dollars this model attributes to TrustRadius-influenced journeys.',
    ],
    [roiBundle.baseTrPipeline, roiBundle.deltaTrPipeline]
  )

  const crawlInsightItems = useMemo(
    () => ({
      overview: [
        `What matters: ~${crawlVolumeData.totalCrawls.toLocaleString()} crawls in the window shows how often bots refresh evidence—${crawlVolumeData.byCrawler[0].crawler} leads share, so pages in its path need crisp structure and up-to-date proof.`,
        'TrustRadius — buyer pages: Keep TrustRadius product, comparison, and category buyer pages metadata-complete and aligned to monitored prompts so crawlers retrieve stable, quotable modules.',
      ],
      bots: [
        'What matters: bots skew toward page types they can parse quickly—when comparison or review surfaces spike, models are likely rebuilding answer bundles for those intents.',
        'TrustRadius — UGC & questions: Pair crawl-heavy page types with review campaigns and custom TrustRadius questions so new UGC lands where bots already visit; surface winners prominently on TR buyer pages.',
      ],
    }),
    []
  )

  const monitoringHeroInsights = useMemo(
    () => [
      `What matters (${periodLabelPretty}, ${monitoringContextLabel}): ${monitoringSlice.mentions.overall.toLocaleString()} mentions (${monitoringSlice.mentions.deltaPct >= 0 ? '+' : ''}${monitoringSlice.mentions.deltaPct}% vs ${priorPeriodPhrase}), ${monitoringSlice.shareOfVoice.overall}% share of voice, and ${monitoringSlice.citations.overall.toLocaleString()} citations—this triad is the early warning for whether models keep seeing fresh, defensible proof about you.`,
      'TrustRadius — custom questions: Where citations or SoV dip vs your targets, brief TrustRadius on new custom questions and page-level answers that match how buyers ask—fill the gap before competitors own the snippet.',
      'TrustRadius — reviews & buyer pages: Pair mention growth with a review push for UGC on TrustRadius, then feature that proof on product and comparison buyer pages so AI-driven visibility converts into trusted claims buyers actually read.',
    ],
    [periodLabelPretty, priorPeriodPhrase, monitoringSlice, monitoringContextLabel]
  )

  const trExecutionRows = useMemo(
    () =>
      selectedPrompts.map((p) => {
        const raw = promptTrExecutionByPromptId[p.id]
        const ex = raw ? { ...DEFAULT_TR_EXECUTION_META, ...raw } : { ...DEFAULT_TR_EXECUTION_META }
        return { ...p, ...ex }
      }),
    []
  )

  const topicExecutionKpiRollup = useMemo(() => computeTopicExecutionKpiShare(trExecutionRows), [trExecutionRows])

  const trExecutionTopicSummary = useMemo(() => {
    const n = trExecutionRows.length
    const withCQ = trExecutionRows.filter((r) => r.hasCustomQuestions).length
    const totalCQ = trExecutionRows.reduce((s, r) => s + r.customQuestionCount, 0)
    const totalRA = trExecutionRows.reduce((s, r) => s + r.reviewAnswersForCustomQuestions, 0)
    return { n, withCQ, withoutCQ: n - withCQ, totalCQ, totalRA }
  }, [trExecutionRows])

  const competitiveBenchmarkRows = useMemo(() => {
    if (sovComparisonScope === 'topic') return topicResearchData.competitorBenchmark
    const by = topicResearchData.competitorBenchmarkByPrompt
    return by[sovComparisonPromptId] || by[1]
  }, [sovComparisonScope, sovComparisonPromptId])

  const sovComparisonPromptLabel = useMemo(() => {
    const p = selectedPrompts.find((x) => x.id === sovComparisonPromptId)
    return p?.prompt ?? ''
  }, [sovComparisonPromptId])

  const trShowcaseView = useMemo(
    () => getTrustRadiusShowcaseView(trShowcaseScope, trShowcasePromptId),
    [trShowcaseScope, trShowcasePromptId]
  )

  const trShowcasePromptLabel = useMemo(() => {
    const p = selectedPrompts.find((x) => x.id === trShowcasePromptId)
    return p?.prompt ?? ''
  }, [trShowcasePromptId])

  const handleGeoAssistantSubmit = async (e) => {
    e.preventDefault()
    const q = conductorQuestion.trim()
    if (!q) return
    setConductorBusy(true)
    setConductorMessages((m) => [...m, { role: 'user', text: q }])
    setConductorQuestion('')
    try {
      const intentReply = applyGeoDashboardIntent(q, {
        activeTab,
        setActiveTab,
        setMonitoringPeriod,
        setMonitoringScope,
        setSelectedTimeframe,
        setSovComparisonScope,
      })

      const ctx = {
        activeTab,
        tabLabel: tabLabels[activeTab] || activeTab,
        contextLine: geoAssistantContextLine,
        scope: monitoringScope,
        scopeLabel: monitoringContextLabel,
        period: monitoringPeriod,
        periodLabel: periodLabelPretty,
        slice: monitoringSlice,
        research: {
          topic: topicResearchData.selectedTopic,
          promptCount: topicResearchData.topPrompts.length,
          totalVolume: totalPromptVolume,
          blendedSoVPct: 38,
        },
        setup: {
          trackedPrompts: selectedPrompts.length,
        },
        roi: {
          baseTrPipeline: formatRoiCurrency(roiBundle.baseTrPipeline),
          scenarioTrPipeline: formatRoiCurrency(roiBundle.scenarioTrPipeline),
          deltaTrPipeline: formatRoiCurrency(roiBundle.deltaTrPipeline),
        },
        crawl: {
          totalCrawls: crawlVolumeData.totalCrawls.toLocaleString(),
          topCrawler: crawlVolumeData.byCrawler[0]?.crawler ?? '—',
          topCrawlerPct: crawlVolumeData.byCrawler[0]?.percentage ?? 0,
        },
      }

      const res = await askConductorMcp(q, ctx)
      const body = res.answer || res.text || String(res)
      const combined = intentReply ? `**Dashboard:** ${intentReply}\n\n${body}` : body
      setConductorMessages((m) => [...m, { role: 'assistant', text: combined }])
    } catch (err) {
      setConductorMessages((m) => [...m, { role: 'assistant', text: `Assistant error: ${err.message}` }])
    } finally {
      setConductorBusy(false)
    }
  }

  return (
    <div className="geo-dashboard">
      {/* Sidebar */}
      <aside className="geo-sidebar">
        <div className="sidebar-brand">
          <div className="brand-logo">
            <span className="logo-icon">TR</span>
          </div>
          <span className="brand-text">TrustRadius</span>
          <button className="collapse-btn">‹</button>
        </div>

        <div className="product-selector">
          <div className="product-icon">Z</div>
          <span className="product-name">Zoom Workplace</span>
          <span className="dropdown-arrow">▼</span>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">🏠</span>
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">📦</span>
                <span>Product Profile</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">⭐</span>
                <span>Reviews</span>
                <span className="badge new">NEW</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">👥</span>
                <span>Buyer Activity</span>
              </a>
            </li>
            
            <li className="nav-section">
              <span className="section-label">Analytics</span>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">📊</span>
                <span>Profile Activity</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">🎯</span>
                <span>Competitors</span>
              </a>
            </li>
            <li className={`nav-item ${activeNav === 'geo-visibility' ? 'active' : ''}`}>
              <a href="#" className="nav-link" onClick={() => setActiveNav('geo-visibility')}>
                <span className="nav-icon">🔮</span>
                <span>GEO Visibility</span>
                <span className="badge beta">BETA</span>
              </a>
            </li>
            
            <li className="nav-section">
              <span className="section-label">Tools</span>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">📈</span>
                <span>Market Intelligence</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">🔗</span>
                <span>Integrations</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">💰</span>
                <span>ROI</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <a href="#" className="nav-link">
            <span className="nav-icon">⚙️</span>
            <span>Account</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="geo-main">
        {/* Top Header */}
        <header className="geo-header">
          <div className="header-left">
            <div className="product-context">
              <div className="product-icon-small">Z</div>
              <span>Zoom Workplace</span>
              <span className="dropdown-arrow">▼</span>
            </div>
          </div>
          <div className="header-right">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Quick nav..." />
            </div>
            <button className="header-btn">📤</button>
            <button className="header-btn">📅</button>
            <button className="header-btn">❓</button>
            <button className="header-btn notification">🔔</button>
            <div className="user-avatar">G</div>
          </div>
        </header>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'research' ? 'active' : ''}`}
            onClick={() => setActiveTab('research')}
          >
            <span className="tab-icon">🔬</span>
            GEO Research
          </button>
          <button 
            className={`tab-btn ${activeTab === 'setup' ? 'active' : ''}`}
            onClick={() => setActiveTab('setup')}
          >
            <span className="tab-icon">⚙️</span>
            Prompt Setup
          </button>
          <button 
            className={`tab-btn ${activeTab === 'monitoring' ? 'active' : ''}`}
            onClick={() => setActiveTab('monitoring')}
          >
            <span className="tab-icon">📊</span>
            {'Monitoring & Competitive'}
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'roi' ? 'active' : ''}`}
            onClick={() => setActiveTab('roi')}
          >
            <span className="tab-icon">💰</span>
            ROI calculator
          </button>
          <button 
            className={`tab-btn ${activeTab === 'crawl' ? 'active' : ''}`}
            onClick={() => setActiveTab('crawl')}
          >
            <span className="tab-icon">🤖</span>
            Crawl Analytics
          </button>
        </div>

        {/* Main workspace + GEO Assistant (right rail, IDE-style) */}
        <div className="geo-workspace">
          <div className="geo-main-scroll">
            <div className="geo-content">
          {/* ==================== RESEARCH TAB ==================== */}
          {activeTab === 'research' && (
            <>
              <section className="page-header-section">
                <div className="page-header-content">
                  <h1 className="page-title">GEO Research Dashboard</h1>
                  <p className="page-subtitle">Research the GEO landscape across topics you want to compete in and identify high-value prompts for your strategy.</p>
                </div>
                <div className="page-actions">
                  <select className="topic-selector">
                    <option>Video Conferencing Software</option>
                    <option>UCaaS Platforms</option>
                    <option>Webinar Software</option>
                  </select>
                  <button className="btn-primary">Export Report</button>
                </div>
              </section>

              {/* Overview Stats */}
              <div className="stats-grid four-col">
                <div className="stat-card">
                  <span className="stat-label">Total Prompts Tracked</span>
                  <div className="stat-value">{topicResearchData.topPrompts.length}</div>
                  <div className="stat-sublabel">in this topic</div>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Monthly Query Volume</span>
                  <div className="stat-value">{totalPromptVolume.toLocaleString()}</div>
                  <div className="stat-change up">
                    <span>↑ +18%</span> vs last month
                  </div>
                </div>
                <div className="stat-card highlight">
                  <span className="stat-label">Your Share of Voice</span>
                  <div className="stat-value">38%</div>
                  <div className="stat-change up">
                    <span>↑ +5%</span> vs last month
                  </div>
                </div>
                <div className="stat-card">
                  <span className="stat-label">TrustRadius Site Rank</span>
                  <div className="stat-value">#1</div>
                  <div className="stat-sublabel">for citations in topic</div>
                </div>
              </div>

              <SectionInsightCallout heading="Insights · Topic overview" items={researchInsightItems.overview} />

              {/* Prompt Volume & Identification */}
              <CollapsibleDashboardSection
                title="Prompt Volume & Identification"
                subtitle="Discover which prompts buyers ask most frequently to prioritize your GEO strategy."
                headerExtra={
                  <div className="section-actions">
                    <select className="filter-select">
                      <option>All Prompts</option>
                      <option>High Volume</option>
                      <option>Trending Up</option>
                      <option>Low Share of Voice</option>
                    </select>
                  </div>
                }
              >
                <SectionInsightCallout heading="Insights · Prompt prioritization" items={researchInsightItems.prompts} />

                <div className="prompts-table-container">
                  <table className="data-table prompts-table">
                    <thead>
                      <tr>
                        <th>Prompt / Question</th>
                        <th>Monthly Volume</th>
                        <th>Trend</th>
                        <th>Your Mentions</th>
                        <th>Share of Voice</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topicResearchData.topPrompts.map((prompt) => (
                        <tr key={prompt.id}>
                          <td className="prompt-cell">
                            <span className="prompt-text">{prompt.prompt}</span>
                          </td>
                          <td className="volume-cell">
                            <span className="volume-value">{prompt.volume.toLocaleString()}</span>
                            <div className="volume-bar">
                              <div 
                                className="volume-fill" 
                                style={{ width: `${(prompt.volume / topicResearchData.topPrompts[0].volume) * 100}%` }}
                              ></div>
                            </div>
                          </td>
                          <td className={`trend-cell ${prompt.trend >= 0 ? 'up' : 'down'}`}>
                            <span>{prompt.trend >= 0 ? '↑' : '↓'} {prompt.trend >= 0 ? '+' : ''}{prompt.trend}%</span>
                          </td>
                          <td className="mentions-cell">
                            <span className="mentions-count">{prompt.yourMentions}</span>
                            <span className="mentions-total">/ {prompt.competitorMentions + prompt.yourMentions}</span>
                          </td>
                          <td className="sov-cell">
                            <div className="sov-container">
                              <div className="sov-bar">
                                <div 
                                  className={`sov-fill ${prompt.shareOfVoice >= 40 ? 'high' : prompt.shareOfVoice >= 25 ? 'medium' : 'low'}`}
                                  style={{ width: `${prompt.shareOfVoice}%` }}
                                ></div>
                              </div>
                              <span className="sov-value">{prompt.shareOfVoice}%</span>
                            </div>
                          </td>
                          <td className="actions-cell">
                            <button className="btn-small btn-outline">Track</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CollapsibleDashboardSection>

              {/* Fan-out Queries */}
              <CollapsibleDashboardSection
                title="Fan-out Queries"
                subtitle="See the follow-up searches AI crawlers make to find semantically relevant content."
              >
                <SectionInsightCallout heading="Insights · Crawler fan-out" items={researchInsightItems.fanout} />

                <div className="fanout-grid">
                  {topicResearchData.fanOutQueries.map((query, index) => (
                    <div key={index} className="fanout-card">
                      <div className="fanout-query">"{query.query}"</div>
                      <div className="fanout-meta">
                        <span className="fanout-volume">{query.volume.toLocaleString()} monthly searches</span>
                        <span className="fanout-source">From: {query.sourcePrompt}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CollapsibleDashboardSection>

              <SectionInsightCallout heading="Insights · Sources & competitors" items={researchInsightItems.landscape} />

              {/* Two Column: Top Sites + Competitor Benchmark */}
              <div className="two-column-grid">
                {/* Top Cited Sites */}
                <CollapsibleDashboardSection title="Top Cited Sites">
                  <div className="sites-list">
                    {topicResearchData.topCitedSites.map((site, index) => (
                      <div key={site.site} className={`site-row ${site.site === 'trustradius.com' ? 'highlight' : ''}`}>
                        <div className="site-rank">#{site.rank}</div>
                        <div className="site-info">
                          <span className="site-name">{site.site}</span>
                          <div className="site-bar">
                            <div 
                              className="site-bar-fill" 
                              style={{ width: `${site.percentage}%`, backgroundColor: chartColors[index] }}
                            ></div>
                          </div>
                        </div>
                        <div className="site-stats">
                          <span className="site-citations">{site.citations.toLocaleString()}</span>
                          <span className={`site-change ${site.change >= 0 ? 'up' : 'down'}`}>
                            {site.change >= 0 ? '+' : ''}{site.change}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CollapsibleDashboardSection>

                {/* Competitor Benchmark */}
                <CollapsibleDashboardSection title="Competitor Share of Voice">
                  <div className="competitor-chart">
                    {topicResearchData.competitorBenchmark.map((competitor, index) => (
                      <div key={competitor.brand} className="competitor-row">
                        <div className="competitor-info">
                          <div className="competitor-logo" style={{ backgroundColor: competitor.color }}>
                            {competitor.brand.charAt(0)}
                          </div>
                          <span className="competitor-name">{competitor.brand}</span>
                        </div>
                        <div className="competitor-bar-container">
                          <div 
                            className="competitor-bar" 
                            style={{ width: `${competitor.shareOfVoice}%`, backgroundColor: competitor.color }}
                          ></div>
                          <span className="competitor-sov">{competitor.shareOfVoice}%</span>
                        </div>
                        <div className={`competitor-trend ${competitor.trend >= 0 ? 'up' : 'down'}`}>
                          {competitor.trend >= 0 ? '↑' : '↓'} {competitor.trend}%
                        </div>
                      </div>
                    ))}
                  </div>
                </CollapsibleDashboardSection>
              </div>

              {/* TrustRadius Metrics */}
              <CollapsibleDashboardSection
                className="tr-metrics-section"
                title="TrustRadius Visibility Metrics"
                subtitle="How TrustRadius helps you show up for prompts in this topic."
              >
                <SectionInsightCallout heading="Insights · TrustRadius visibility" items={researchInsightItems.trVisibility} />

                <div className="tr-metrics-grid">
                  <div className="tr-metric-card main">
                    <div className="tr-metric-header">
                      <span className="tr-badge">TrustRadius</span>
                      <span className="tr-rank">#1 Cited Site</span>
                    </div>
                    <div className="tr-metric-stats">
                      <div className="tr-stat">
                        <span className="tr-stat-value">{trustRadiusMetrics.totalCitations.toLocaleString()}</span>
                        <span className="tr-stat-label">Total Citations</span>
                      </div>
                      <div className="tr-stat">
                        <span className="tr-stat-value">{trustRadiusMetrics.citationPercentage}%</span>
                        <span className="tr-stat-label">of All Citations</span>
                      </div>
                      <div className="tr-stat">
                        <span className="tr-stat-value">{trustRadiusMetrics.brandSpecific.totalCitations}</span>
                        <span className="tr-stat-label">Brand Citations</span>
                      </div>
                    </div>
                  </div>

                  <div className="tr-metric-card">
                    <h4>Citations by Page Type</h4>
                    <div className="page-type-list">
                      {trustRadiusMetrics.byPageType.map((pt) => (
                        <div key={pt.type} className="page-type-row">
                          <span className="pt-name">{pt.type}</span>
                          <div className="pt-bar">
                            <div className="pt-fill" style={{ width: `${pt.percentage}%` }}></div>
                          </div>
                          <span className="pt-value">{pt.citations.toLocaleString()}</span>
                          <span className={`pt-trend ${pt.trend >= 0 ? 'up' : 'down'}`}>
                            {pt.trend >= 0 ? '+' : ''}{pt.trend}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CollapsibleDashboardSection>
            </>
          )}

          {/* ==================== SETUP TAB ==================== */}
          {activeTab === 'setup' && (
            <>
              <section className="page-header-section">
                <h1 className="page-title">GEO Profile Setup</h1>
                <p className="page-subtitle">Configure your brand, select prompts to track, and choose competitors for benchmarking.</p>
              </section>

              <SectionInsightCallout heading="Insights · Setup checklist" items={setupInsightItems} />

              {/* Brand Selection */}
              <CollapsibleDashboardSection
                className="setup-section"
                title="Brand Selection"
                headerExtra={<span className="setup-step">Step 1 of 3</span>}
              >
                <p className="setup-description">Select the brand/product to focus on for your GEO dashboards.</p>
                
                <div className="brand-selector-grid">
                  <div className="brand-card selected">
                    <div className="brand-logo">Z</div>
                    <div className="brand-info">
                      <h4>Zoom Workplace</h4>
                      <span>Video Conferencing</span>
                    </div>
                    <span className="check-icon">✓</span>
                  </div>
                  <div className="brand-card">
                    <div className="brand-logo secondary">ZP</div>
                    <div className="brand-info">
                      <h4>Zoom Phone</h4>
                      <span>VoIP Phone System</span>
                    </div>
                  </div>
                  <div className="brand-card add-new">
                    <span className="add-icon">+</span>
                    <span>Add Product</span>
                  </div>
                </div>
              </CollapsibleDashboardSection>

              {/* Prompt Selection */}
              <CollapsibleDashboardSection
                className="setup-section"
                title="Prompt Selection"
                headerExtra={<span className="setup-step">Step 2 of 3</span>}
              >
                <p className="setup-description">Select prompts to track for GEO Monitoring and Execution. TrustRadius will optimize content for these prompts.</p>
                
                <div className="prompt-input-section">
                  <div className="prompt-input-row">
                    <input 
                      type="text" 
                      placeholder="Enter a prompt to track (e.g., 'Best video conferencing for enterprise')"
                      className="prompt-input"
                    />
                    <button className="btn-primary">Add Prompt</button>
                  </div>
                  <p className="input-hint">Or select from recommended prompts below based on your topic research.</p>
                </div>

                <div className="selected-prompts">
                  <h4>Selected Prompts ({selectedPrompts.length})</h4>
                  <div className="selected-prompts-list">
                    {selectedPrompts.map((p) => (
                      <div key={p.id} className="selected-prompt-item">
                        <span className="prompt-text">{p.prompt}</span>
                        <div className="prompt-meta">
                          <span className="prompt-volume">{topicResearchData.topPrompts.find(tp => tp.prompt === p.prompt)?.volume?.toLocaleString() || '8,500'} monthly</span>
                          <button className="btn-icon remove">×</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="recommended-prompts">
                  <h4>Recommended Prompts</h4>
                  <div className="recommended-list">
                    {topicResearchData.topPrompts.slice(3, 8).map((p) => (
                      <div key={p.id} className="recommended-prompt-item">
                        <div className="prompt-info">
                          <span className="prompt-text">{p.prompt}</span>
                          <span className="prompt-volume">{p.volume.toLocaleString()} monthly</span>
                        </div>
                        <button className="btn-small btn-outline">+ Add</button>
                      </div>
                    ))}
                  </div>
                </div>
              </CollapsibleDashboardSection>

              {/* Competitor Selection */}
              <CollapsibleDashboardSection
                className="setup-section"
                title="Competitor Selection"
                headerExtra={<span className="setup-step">Step 3 of 3</span>}
              >
                <p className="setup-description">Select 3-5 competitors to track and benchmark your performance against.</p>

                <div className="competitor-selector">
                  <div className="competitors-grid">
                    {trackedCompetitors.map((comp) => (
                      <div key={comp.id} className={`competitor-card ${comp.selected ? 'selected' : ''}`}>
                        <div className="competitor-logo" style={{ backgroundColor: comp.color }}>{comp.logo}</div>
                        <span className="competitor-name">{comp.name}</span>
                        {comp.selected && <span className="check-icon">✓</span>}
                      </div>
                    ))}
                    <div className="competitor-card add-new">
                      <span className="add-icon">+</span>
                      <span>Add Competitor</span>
                    </div>
                  </div>
                  <p className="selection-count">3 of 5 competitors selected</p>
                </div>

                <div className="setup-actions">
                  <button className="btn-secondary">Save as Draft</button>
                  <button className="btn-primary">Save & Start Tracking</button>
                </div>
              </CollapsibleDashboardSection>
            </>
          )}

          {/* ==================== MONITORING TAB ==================== */}
          {activeTab === 'monitoring' && (
            <>
              <section className="page-header-section">
                <div className="page-header-content">
                  <h1 className="page-title">{'Monitoring & Competitive Dashboard'}</h1>
                  <p className="page-subtitle">
                    Track your GEO performance across prompts and AI platforms, then benchmark against competitors and citation sources.
                  </p>
                </div>
                <div className="page-actions page-actions-mc">
                  <div className="timeframe-selector">
                    <button
                      type="button"
                      className={`tf-btn ${monitoringPeriod === 'weekly' ? 'active' : ''}`}
                      onClick={() => setMonitoringPeriod('weekly')}
                    >
                      Weekly
                    </button>
                    <button
                      type="button"
                      className={`tf-btn ${monitoringPeriod === 'monthly' ? 'active' : ''}`}
                      onClick={() => setMonitoringPeriod('monthly')}
                    >
                      Monthly
                    </button>
                    <button
                      type="button"
                      className={`tf-btn ${monitoringPeriod === 'quarterly' ? 'active' : ''}`}
                      onClick={() => setMonitoringPeriod('quarterly')}
                    >
                      Quarterly
                    </button>
                    <button
                      type="button"
                      className={`tf-btn ${monitoringPeriod === 'yearly' ? 'active' : ''}`}
                      onClick={() => setMonitoringPeriod('yearly')}
                    >
                      Yearly
                    </button>
                  </div>
                  <button type="button" className="btn-outline">Edit competitors</button>
                  <button type="button" className="btn-primary">Export report</button>
                </div>
              </section>

              <div className="geo-mc-section-heading">
                <h2 className="geo-mc-h2">Monitoring</h2>
                <p className="geo-mc-teaser">
                  Mentions, share of voice, citations, and sentiment by AI platform, with <strong>change vs the previous period</strong> for the
                  granularity you choose (weekly through yearly). Compare KPIs across all four timeframes in the matrix below; bar charts reflect the{' '}
                  <strong>selected</strong> period only. Use <strong>GEO Assistant</strong> for natural-language navigation; connect{' '}
                  <code className="monitoring-code">window.__GEO_CONDUCTOR_MCP__</code> for tool-backed answers.
                </p>
              </div>

              <div className="monitoring-toolbar dashboard-section">
                <div className="monitoring-toolbar-row">
                  <span className="monitoring-toolbar-label">Scope</span>
                  <div className="monitoring-scope-toggle">
                    <button
                      type="button"
                      className={monitoringScope === 'topic' ? 'active' : ''}
                      onClick={() => setMonitoringScope('topic')}
                    >
                      Topic
                    </button>
                    <button
                      type="button"
                      className={monitoringScope === 'all' ? 'active' : ''}
                      onClick={() => setMonitoringScope('all')}
                    >
                      All tracked prompts
                    </button>
                    <button
                      type="button"
                      className={monitoringScope === 'prompt' ? 'active' : ''}
                      onClick={() => setMonitoringScope('prompt')}
                    >
                      By prompt
                    </button>
                  </div>
                  {monitoringScope === 'prompt' && (
                    <select
                      className="monitoring-prompt-select"
                      value={monitoringPromptId}
                      onChange={(e) => setMonitoringPromptId(Number(e.target.value))}
                      aria-label="Tracked prompt"
                    >
                      {selectedPrompts.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.prompt.length > 72 ? `${p.prompt.slice(0, 72)}…` : p.prompt}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                <p className="monitoring-toolbar-context">
                  <strong>{periodLabelPretty}</strong> · {monitoringContextLabel}
                </p>
              </div>

              <SectionInsightCallout heading="Insights · Performance snapshot" items={monitoringHeroInsights} />

              <CollapsibleDashboardSection
                className="tr-execution-section"
                title="TrustRadius · execution coverage"
                subtitle="TrustRadius surfaces your custom questions and synthesized answers on buyer pages, category synthesis modules, and dedicated TR pages—then ties that execution back to GEO lift."
              >
                <p className="tr-execution-topic-line">
                  <span className="tr-execution-topic-label">Topic</span> {topicResearchData.selectedTopic}
                  <span className="tr-execution-topic-prompts">
                    · {trExecutionTopicSummary.n} tracked prompts in this program
                  </span>
                </p>
                <ul className="tr-execution-topic-surfaces" aria-label="Topic-level TrustRadius surfaces">
                  {topicTrExecutionSurfaces.map((s) => (
                    <li key={s.href}>
                      <a className="tr-execution-surface-link" href={s.href} target="_blank" rel="noopener noreferrer">
                        {s.label}
                      </a>
                      <span className="tr-execution-surface-kind">{trSurfaceKindShort(s.kind)}</span>
                    </li>
                  ))}
                </ul>
                <p className="tr-execution-program-note">
                  Custom questions and review-backed answers roll into on-page Q&amp;A, comparison synthesis, and optional net-new TR pages. KPI lift
                  below is an estimate of how much of each prompt’s mentions, share of voice, and citations are influenced by that live content.
                </p>
                <div className="tr-execution-summary" role="group" aria-label="Custom questions and review answers summary">
                  <div className="tr-execution-stat">
                    <span className="tr-execution-stat-label">Prompts with custom questions</span>
                    <span className="tr-execution-stat-value">
                      {trExecutionTopicSummary.withCQ} of {trExecutionTopicSummary.n}
                    </span>
                  </div>
                  <div className="tr-execution-stat">
                    <span className="tr-execution-stat-label">Custom questions live (total)</span>
                    <span className="tr-execution-stat-value">{trExecutionTopicSummary.totalCQ}</span>
                  </div>
                  <div className="tr-execution-stat">
                    <span className="tr-execution-stat-label">Review answers on custom questions</span>
                    <span className="tr-execution-stat-value">{trExecutionTopicSummary.totalRA.toLocaleString()}</span>
                  </div>
                  <div
                    className={`tr-execution-stat ${trExecutionTopicSummary.withoutCQ > 0 ? 'tr-execution-stat--warn' : ''}`}
                  >
                    <span className="tr-execution-stat-label">Prompts without custom questions</span>
                    <span className="tr-execution-stat-value">{trExecutionTopicSummary.withoutCQ}</span>
                  </div>
                </div>

                <div className="tr-execution-cta-row" role="group" aria-label="TrustRadius execution actions">
                  <button
                    type="button"
                    className="btn-primary tr-execution-cta-btn"
                    onClick={() => window.open('https://www.trustradius.com/', '_blank', 'noopener,noreferrer')}
                  >
                    Create new custom questions
                  </button>
                  <button
                    type="button"
                    className="btn-outline tr-execution-cta-btn"
                    onClick={() => window.open('https://www.trustradius.com/', '_blank', 'noopener,noreferrer')}
                  >
                    Start a review campaign
                  </button>
                  <a
                    className="btn-outline tr-execution-cta-btn tr-execution-cta-link"
                    href="mailto:hello@trustradius.com?subject=Premium%20content%20assets%20%7C%20GEO%20execution&body=Hi%20TrustRadius%2C%0A%0AWe%20would%20like%20to%20discuss%20premium%20content%20assets%20to%20support%20our%20GEO%20program%20and%20tracked%20prompts.%0A%0AThanks%2C%0A"
                  >
                    Reach out for premium content assets
                  </a>
                </div>
                <p className="tr-execution-cta-hint">
                  Buttons open TrustRadius experiences (demo links). Premium assets route through TrustRadius to scope comparison guides, category
                  narratives, and buyer-page upgrades aligned to your prompts.
                </p>

                <div className="tr-execution-table-wrap">
                  <table className="data-table tr-execution-table">
                    <thead>
                      <tr>
                        <th scope="col">Tracked prompt</th>
                        <th scope="col">Custom questions</th>
                        <th scope="col">Review answers</th>
                        <th scope="col">Where it lives on TrustRadius</th>
                        <th scope="col">
                          KPI lift from execution
                          <span className="tr-execution-th-hint">Est. % of mentions · SoV · citations</span>
                        </th>
                        <th scope="col">Execution status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trExecutionRows.map((row) => {
                        const k = row.kpiShareFromExecution
                        return (
                          <tr key={row.id}>
                            <td className="tr-execution-prompt-cell">{row.prompt}</td>
                            <td>
                              {row.hasCustomQuestions ? (
                                <div className="tr-execution-cell-stack">
                                  <span className="tr-execution-badge tr-execution-badge--yes">Configured</span>
                                  <span className="tr-execution-sub">{row.customQuestionCount} live</span>
                                </div>
                              ) : (
                                <div className="tr-execution-cell-stack">
                                  <span className="tr-execution-badge tr-execution-badge--no">Not set up</span>
                                  <span className="tr-execution-sub">0 live</span>
                                </div>
                              )}
                            </td>
                            <td>
                              {row.hasCustomQuestions ? (
                                <>
                                  <div className="tr-execution-metric">{row.reviewAnswersForCustomQuestions.toLocaleString()}</div>
                                  <span className="tr-execution-metric-hint">On custom questions</span>
                                </>
                              ) : (
                                <span className="tr-execution-sub">—</span>
                              )}
                            </td>
                            <td className="tr-execution-surfaces-cell">
                              {row.surfaces?.length ? (
                                <ul className="tr-execution-surfaces-list">
                                  {row.surfaces.map((s) => (
                                    <li key={s.href}>
                                      <a className="tr-execution-surface-link" href={s.href} target="_blank" rel="noopener noreferrer">
                                        {s.label}
                                      </a>
                                      <span className="tr-execution-surface-kind">{trSurfaceKindShort(s.kind)}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <span className="tr-execution-sub">TR will place content once custom questions exist</span>
                              )}
                            </td>
                            <td className="tr-execution-kpi-lift-cell">
                              {row.hasCustomQuestions ? (
                                <div className="tr-execution-kpi-lift">
                                  <span title="Estimated share of mentions driven by TR execution surfaces">M {k.mentionsPct}%</span>
                                  <span title="Estimated share of share-of-voice driven by TR execution surfaces">SoV {k.shareOfVoicePct}%</span>
                                  <span title="Estimated share of citations driven by TR execution surfaces">Cit {k.citationsPct}%</span>
                                </div>
                              ) : (
                                <span className="tr-execution-sub">—</span>
                              )}
                            </td>
                            <td>
                              {row.hasCustomQuestions ? (
                                <span className="tr-execution-status tr-execution-status--ok">
                                  Live on TR — compare to Topic &amp; prompt metrics for full KPI context
                                </span>
                              ) : (
                                <span className="tr-execution-status tr-execution-status--gap">
                                  Blocked until custom questions exist
                                </span>
                              )}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </CollapsibleDashboardSection>

              <CollapsibleDashboardSection
                className="monitoring-kpi-matrix-section"
                headingId="monitoring-kpi-matrix-heading"
                title="KPIs by timeframe"
                subtitle={
                  <>
                    Same scope ({monitoringContextLabel.slice(0, 96)}
                    {monitoringContextLabel.length > 96 ? '…' : ''}) — numbers are comparable roll-ups for each grain (weekly = last 8 weeks, monthly =
                    last 12 months, etc.). Change is vs the <strong>previous</strong> bucket for that grain.
                  </>
                }
              >
                <div className="monitoring-kpi-matrix-wrap">
                  <table className="data-table monitoring-kpi-matrix-table">
                    <thead>
                      <tr>
                        <th scope="col">Timeframe</th>
                        <th scope="col">Mentions</th>
                        <th scope="col">Δ vs prior</th>
                        <th scope="col">Share of voice</th>
                        <th scope="col">Δ vs prior</th>
                        <th scope="col">Citations</th>
                        <th scope="col">Δ vs prior</th>
                        <th scope="col">Sentiment</th>
                        <th scope="col">Δ vs prior</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monitoringKpiMatrix.map((row) => (
                        <tr key={row.key} className={row.key === monitoringPeriod ? 'monitoring-kpi-matrix-row--active' : ''}>
                          <th scope="row">{row.label}</th>
                          <td>{row.mentions.toLocaleString()}</td>
                          <td className={row.mDelta >= 0 ? 'trend up' : 'trend down'}>
                            {row.mDelta >= 0 ? '↑' : '↓'} {Math.abs(row.mDelta)}%
                          </td>
                          <td>{row.sov}%</td>
                          <td className={row.sovDelta >= 0 ? 'trend up' : 'trend down'}>
                            {row.sovDelta >= 0 ? '↑' : '↓'} {Math.abs(row.sovDelta)}%
                          </td>
                          <td>{row.cit.toLocaleString()}</td>
                          <td className={row.citDelta >= 0 ? 'trend up' : 'trend down'}>
                            {row.citDelta >= 0 ? '↑' : '↓'} {Math.abs(row.citDelta)}%
                          </td>
                          <td>{(row.sent * 100).toFixed(0)}</td>
                          <td className={row.sentDelta >= 0 ? 'trend up' : 'trend down'}>
                            {row.sentDelta >= 0 ? '↑' : '↓'} {Math.abs(row.sentDelta * 100).toFixed(1)} pts
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CollapsibleDashboardSection>

              <CollapsibleDashboardSection
                className="monitoring-period-charts-section"
                headingId="monitoring-period-charts-heading"
                title={`Charts · ${periodLabelPretty} buckets`}
                subtitle={
                  <>
                    One strip per KPI using the same scope as the toolbar. Bars are values per bucket; headline KPIs and the topic table use{' '}
                    <strong>change vs {priorPeriodPhrase}</strong>. Visual breakdown for{' '}
                    <strong>{monitoringContextLabel.slice(0, 80)}</strong>
                    {monitoringContextLabel.length > 80 ? '…' : ''}.
                  </>
                }
              >
                <div className="monitoring-period-charts-grid">
                  <MonitoringKpiBarStrip
                    label="Mentions (brand appearances)"
                    periodLabels={monitoringSlice.periodLabels}
                    values={monitoringSlice.mentions.byPlatform[0]?.series ?? []}
                    formatVal={(v) => Number(v).toLocaleString()}
                    color="#6366f1"
                  />
                  <MonitoringKpiBarStrip
                    label="Share of voice %"
                    periodLabels={monitoringSlice.periodLabels}
                    values={monitoringSlice.shareOfVoice.byPlatform[0]?.series ?? []}
                    formatVal={(v) => `${Math.round(v)}%`}
                    color="#00a6a6"
                  />
                  <MonitoringKpiBarStrip
                    label="Citations"
                    periodLabels={monitoringSlice.periodLabels}
                    values={monitoringSlice.citations.byPlatform[0]?.series ?? []}
                    formatVal={(v) => Number(v).toLocaleString()}
                    color="#2563eb"
                  />
                  <MonitoringKpiBarStrip
                    label="Sentiment score"
                    periodLabels={monitoringSlice.periodLabels}
                    values={(monitoringSlice.sentiment.byPlatform[0]?.series ?? []).map((v) => (v <= 1 ? v * 100 : v))}
                    formatVal={(v) => `${Number(v).toFixed(0)}`}
                    color="#a855f7"
                  />
                </div>
              </CollapsibleDashboardSection>

              <CollapsibleDashboardSection
                className="monitoring-topic-prompt-section"
                title="Topic & prompt metrics"
                subtitle={
                  <>
                    One place for topic roll-up and each tracked prompt. Values respect <strong>Weekly · Monthly · Quarterly · Yearly</strong> above. The{' '}
                    <strong>TR execution lift</strong> column links to TrustRadius surfaces and shows how much of each row’s KPIs are estimated to come from
                    custom-question and synthesis content—same signals as <strong>TrustRadius · execution coverage</strong> above. Expand a row for{' '}
                    <strong>LLM breakdown</strong>, <strong>most cited domains</strong>, and <strong>most cited pages</strong>.
                  </>
                }
              >
                <div className="monitoring-metric-rows-wrap">
                  <div className="monitoring-metric-rows-headings" aria-hidden="true">
                    <span className="monitoring-metric-rows-heading-spacer" />
                    <span>Topic / prompt</span>
                    <span>Monthly volume</span>
                    <span>Mentions</span>
                    <span>Share of voice</span>
                    <span>Citations</span>
                    <span>Sentiment</span>
                    <span className="monitoring-metric-heading-tr-lift">TR execution lift</span>
                  </div>
                  {monitoringSnapshotTable.rows.map((row) => {
                    const { maxVol } = monitoringSnapshotTable
                    const trLiftMeta =
                      row.kind === 'topic'
                        ? { kpi: topicExecutionKpiRollup, surfaces: topicTrExecutionSurfaces }
                        : (() => {
                            const e = trExecutionRows.find((r) => r.id === row.promptId)
                            return {
                              kpi: e?.kpiShareFromExecution ?? DEFAULT_TR_EXECUTION_META.kpiShareFromExecution,
                              surfaces: e?.surfaces ?? [],
                            }
                          })()
                    const rowSlice =
                      row.kind === 'topic'
                        ? getMonitoringSlice('topic', null, monitoringPeriod)
                        : getMonitoringSlice('prompt', row.promptId, monitoringPeriod)
                    const rowSources =
                      row.kind === 'topic'
                        ? getMonitoringTopCitedSources('topic', 1)
                        : getMonitoringTopCitedSources('prompt', row.promptId)
                    const rowPages =
                      row.kind === 'topic'
                        ? getMonitoringTopCitedPages('topic', 1)
                        : getMonitoringTopCitedPages('prompt', row.promptId)

                    return (
                      <details
                        key={row.key}
                        className={`monitoring-metric-row ${row.kind === 'topic' ? 'monitoring-metric-row--topic' : ''}`}
                      >
                        <summary className="monitoring-metric-row-summary">
                          <span className="monitoring-metric-row-chevron" aria-hidden="true" />
                          <div className="monitoring-metric-row-label">
                            {row.kind === 'topic' ? (
                              <>
                                <span className="monitoring-snapshot-scope-badge">Topic</span>
                                <span className="prompt-text">{row.title}</span>
                                <span className="monitoring-snapshot-scope-sub">All selected prompts ({selectedPrompts.length})</span>
                              </>
                            ) : (
                              <span className="prompt-text">{row.title}</span>
                            )}
                          </div>
                          <div className="monitoring-metric-row-cell monitoring-metric-row-cell--vol">
                            <span className="volume-value">{row.monthlyVolume.toLocaleString()}</span>
                            <div className="volume-bar">
                              <div
                                className="volume-fill"
                                style={{ width: `${(row.monthlyVolume / maxVol) * 100}%` }}
                              />
                            </div>
                          </div>
                          <div className="monitoring-metric-row-cell monitoring-snapshot-metric-cell">
                            <span className="monitoring-snapshot-metric-value">{row.mentions.toLocaleString()}</span>
                          </div>
                          <div className="monitoring-metric-row-cell monitoring-snapshot-metric-cell">
                            <span className="monitoring-snapshot-metric-value">{row.shareOfVoice}%</span>
                          </div>
                          <div className="monitoring-metric-row-cell monitoring-snapshot-metric-cell">
                            <span className="monitoring-snapshot-metric-value">{row.citations.toLocaleString()}</span>
                          </div>
                          <div className="monitoring-metric-row-cell monitoring-snapshot-metric-cell">
                            <span className="monitoring-snapshot-metric-value">
                              {(row.sentimentScore * 100).toFixed(0)}
                              <span className="monitoring-snapshot-metric-inline"> / 100</span>
                            </span>
                          </div>
                          <div className="monitoring-metric-row-cell monitoring-tr-lift-cell">
                            <div className="monitoring-tr-lift-kpis">
                              <span className="monitoring-tr-lift-pill" title="Estimated share of mentions from TR execution content">
                                M {trLiftMeta.kpi.mentionsPct}%
                              </span>
                              <span className="monitoring-tr-lift-pill" title="Estimated share of share of voice from TR execution content">
                                SoV {trLiftMeta.kpi.shareOfVoicePct}%
                              </span>
                              <span className="monitoring-tr-lift-pill" title="Estimated share of citations from TR execution content">
                                Cit {trLiftMeta.kpi.citationsPct}%
                              </span>
                            </div>
                            {trLiftMeta.surfaces?.length ? (
                              <ul className="monitoring-tr-lift-links">
                                {trLiftMeta.surfaces.slice(0, 2).map((s) => (
                                  <li key={`${row.key}-${s.href}`}>
                                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="monitoring-tr-lift-link">
                                      {s.label.length > 42 ? `${s.label.slice(0, 42)}…` : s.label}
                                    </a>
                                  </li>
                                ))}
                                {trLiftMeta.surfaces.length > 2 ? (
                                  <li className="monitoring-tr-lift-more">+{trLiftMeta.surfaces.length - 2} more on TR</li>
                                ) : null}
                              </ul>
                            ) : (
                              <span className="monitoring-tr-lift-empty">No TR surfaces yet</span>
                            )}
                          </div>
                        </summary>
                        <div className="monitoring-metric-row-panel">
                          <p className="monitoring-metric-row-panel-intro">
                            <strong>{row.kind === 'topic' ? 'Topic' : 'Prompt'}</strong> · {periodLabelPretty} ·{' '}
                            {row.kind === 'topic' ? topicResearchData.selectedTopic : row.title}
                            {' · '}
                            <span className="monitoring-metric-row-panel-tr-note">
                              TR execution lift matches the coverage table; open links to see custom questions and synthesis on TrustRadius.
                            </span>
                          </p>
                          <div className="monitoring-metrics-deep-dive monitoring-metrics-deep-dive--nested">
                            <h3 className="monitoring-deep-dive-heading">Breakdown by LLM</h3>
                            <div className="monitoring-pillars monitoring-pillars--in-card">
                              <section className="dashboard-section monitoring-pillar monitoring-pillar--nested">
                                <div className="section-header">
                                  <div>
                                    <h3 className="monitoring-pillar-heading-nested">Share of voice</h3>
                                    <p className="section-subtitle">By AI platform for this row&apos;s scope.</p>
                                  </div>
                                  <div className="monitoring-pillar-kpi">
                                    <span className="monitoring-pillar-value">{rowSlice.shareOfVoice.overall}%</span>
                                    <span
                                      className={`monitoring-pillar-delta ${rowSlice.shareOfVoice.deltaPct >= 0 ? 'up' : 'down'}`}
                                    >
                                      {rowSlice.shareOfVoice.deltaPct >= 0 ? '↑' : '↓'}{' '}
                                      {Math.abs(rowSlice.shareOfVoice.deltaPct)}% vs prior {periodLabelPretty.toLowerCase()}
                                    </span>
                                  </div>
                                </div>
                                <h4 className="monitoring-subheading">By LLM</h4>
                                <div className="monitoring-platform-table-wrap">
                                  <table className="data-table monitoring-platform-table">
                                    <thead>
                                      <tr>
                                        <th>LLM / platform</th>
                                        <th>Share of voice</th>
                                        <th>Buckets ({periodLabelPretty})</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {rowSlice.shareOfVoice.byPlatform.map((plat) => (
                                        <tr key={plat.platform}>
                                          <td>
                                            <span className="monitoring-plat-icon">{aiToolIcons[plat.platform]}</span>{' '}
                                            {plat.platform}
                                          </td>
                                          <td>
                                            <strong>{plat.pct}%</strong>
                                          </td>
                                          <td className="monitoring-series-text">
                                            {formatPlatformSeriesRange(rowSlice.periodLabels, plat.series, (v) =>
                                              `${Math.round(v)}%`
                                            ) || '—'}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </section>

                              <section className="dashboard-section monitoring-pillar monitoring-pillar--nested">
                                <div className="section-header">
                                  <div>
                                    <h3 className="monitoring-pillar-heading-nested">Mentions</h3>
                                    <p className="section-subtitle">Brand appearances in AI-generated answers for this row&apos;s scope.</p>
                                  </div>
                                  <div className="monitoring-pillar-kpi">
                                    <span className="monitoring-pillar-value">{rowSlice.mentions.overall.toLocaleString()}</span>
                                    <span
                                      className={`monitoring-pillar-delta ${rowSlice.mentions.deltaPct >= 0 ? 'up' : 'down'}`}
                                    >
                                      {rowSlice.mentions.deltaPct >= 0 ? '↑' : '↓'}{' '}
                                      {Math.abs(rowSlice.mentions.deltaPct)}% vs prior {periodLabelPretty.toLowerCase()}
                                    </span>
                                  </div>
                                </div>
                                <h4 className="monitoring-subheading">By LLM</h4>
                                <div className="monitoring-platform-table-wrap">
                                  <table className="data-table monitoring-platform-table">
                                    <thead>
                                      <tr>
                                        <th>LLM / platform</th>
                                        <th>Mentions</th>
                                        <th>Buckets ({periodLabelPretty})</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {rowSlice.mentions.byPlatform.map((plat) => (
                                        <tr key={plat.platform}>
                                          <td>
                                            <span className="monitoring-plat-icon">{aiToolIcons[plat.platform]}</span>{' '}
                                            {plat.platform}
                                          </td>
                                          <td>
                                            <strong>{plat.count.toLocaleString()}</strong>
                                          </td>
                                          <td className="monitoring-series-text">
                                            {formatPlatformSeriesRange(rowSlice.periodLabels, plat.series, (v) =>
                                              Number(v).toLocaleString()
                                            ) || '—'}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </section>

                              <section className="dashboard-section monitoring-pillar monitoring-pillar--nested">
                                <div className="section-header">
                                  <div>
                                    <h3 className="monitoring-pillar-heading-nested">Citations</h3>
                                    <p className="section-subtitle">By AI platform for this row&apos;s scope.</p>
                                  </div>
                                  <div className="monitoring-pillar-kpi">
                                    <span className="monitoring-pillar-value">{rowSlice.citations.overall.toLocaleString()}</span>
                                    <span
                                      className={`monitoring-pillar-delta ${rowSlice.citations.deltaPct >= 0 ? 'up' : 'down'}`}
                                    >
                                      {rowSlice.citations.deltaPct >= 0 ? '↑' : '↓'}{' '}
                                      {Math.abs(rowSlice.citations.deltaPct)}% vs prior {periodLabelPretty.toLowerCase()}
                                    </span>
                                  </div>
                                </div>
                                <h4 className="monitoring-subheading">By LLM</h4>
                                <div className="monitoring-platform-table-wrap">
                                  <table className="data-table monitoring-platform-table">
                                    <thead>
                                      <tr>
                                        <th>LLM / platform</th>
                                        <th>Citations</th>
                                        <th>Buckets ({periodLabelPretty})</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {rowSlice.citations.byPlatform.map((plat) => (
                                        <tr key={plat.platform}>
                                          <td>
                                            <span className="monitoring-plat-icon">{aiToolIcons[plat.platform]}</span>{' '}
                                            {plat.platform}
                                          </td>
                                          <td>
                                            <strong>{plat.count.toLocaleString()}</strong>
                                          </td>
                                          <td className="monitoring-series-text">
                                            {formatPlatformSeriesRange(rowSlice.periodLabels, plat.series, (v) =>
                                              Number(v).toLocaleString()
                                            ) || '—'}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </section>

                              <section className="dashboard-section monitoring-pillar monitoring-pillar--nested">
                                <div className="section-header">
                                  <div>
                                    <h3 className="monitoring-pillar-heading-nested">Sentiment</h3>
                                    <p className="section-subtitle">By AI platform for this row&apos;s scope.</p>
                                  </div>
                                  <div className="monitoring-pillar-kpi">
                                    <span className="monitoring-pillar-value">{(rowSlice.sentiment.score * 100).toFixed(0)}</span>
                                    <span className="monitoring-pillar-unit">/100</span>
                                    <span className="monitoring-sentiment-label">{rowSlice.sentiment.label}</span>
                                    <span
                                      className={`monitoring-pillar-delta ${rowSlice.sentiment.delta >= 0 ? 'up' : 'down'}`}
                                    >
                                      {rowSlice.sentiment.delta >= 0 ? '↑' : '↓'}{' '}
                                      {Math.abs(rowSlice.sentiment.delta * 100).toFixed(0)} pts
                                    </span>
                                  </div>
                                </div>
                                <h4 className="monitoring-subheading">By LLM</h4>
                                <div className="monitoring-platform-table-wrap">
                                  <table className="data-table monitoring-platform-table">
                                    <thead>
                                      <tr>
                                        <th>LLM / platform</th>
                                        <th>Score</th>
                                        <th>Positive %</th>
                                        <th>Buckets ({periodLabelPretty})</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {rowSlice.sentiment.byPlatform.map((plat) => (
                                        <tr key={plat.platform}>
                                          <td>
                                            <span className="monitoring-plat-icon">{aiToolIcons[plat.platform]}</span>{' '}
                                            {plat.platform}
                                          </td>
                                          <td>
                                            <strong>{(plat.score * 100).toFixed(0)}</strong>
                                          </td>
                                          <td>{plat.positivePct}%</td>
                                          <td className="monitoring-series-text">
                                            {formatPlatformSeriesRange(rowSlice.periodLabels, plat.series, (v) =>
                                              `${(v <= 1 ? v * 100 : v).toFixed(0)}`
                                            ) || '—'}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </section>
                            </div>

                            <div className="monitoring-citation-insights">
                              <div className="monitoring-citation-insights-col">
                                <h4 className="monitoring-insights-subheading">Most commonly cited sources</h4>
                                <p className="monitoring-insights-desc">
                                  Domains referenced most often in AI answers for{' '}
                                  {row.kind === 'topic' ? 'this topic (all selected prompts)' : 'this prompt'}.
                                </p>
                                <ul className="monitoring-cited-list">
                                  {rowSources.map((src, idx) => (
                                    <li key={`${row.key}-src-${src.label}`} className="monitoring-cited-item">
                                      <span className="monitoring-cited-rank">{idx + 1}</span>
                                      <div className="monitoring-cited-main">
                                        <span className="monitoring-cited-label">{src.label}</span>
                                        <span className="monitoring-cited-meta">
                                          {src.citations.toLocaleString()} cites · {src.pct}% est. share
                                        </span>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="monitoring-citation-insights-col">
                                <h4 className="monitoring-insights-subheading">Most commonly cited pages</h4>
                                <p className="monitoring-insights-desc">
                                  {row.kind === 'topic'
                                    ? 'Destination pages aggregated across your tracked prompts for this topic.'
                                    : 'Pages most linked for this prompt’s tracked citations.'}
                                </p>
                                <ul className="monitoring-cited-list">
                                  {rowPages.map((pg, idx) => (
                                    <li
                                      key={`${row.key}-pg-${pg.title}-${idx}`}
                                      className="monitoring-cited-item monitoring-cited-item--page"
                                    >
                                      <span className="monitoring-cited-rank">{idx + 1}</span>
                                      <div className="monitoring-cited-main">
                                        <span className="monitoring-cited-label">{pg.title}</span>
                                        {pg.type ? <span className="monitoring-cited-type">{pg.type}</span> : null}
                                        <span className="monitoring-cited-meta">
                                          {pg.citations.toLocaleString()} cites
                                          {pg.shareLabel ? ` · ${pg.shareLabel} of prompt cites` : ''}
                                        </span>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </details>
                    )
                  })}
                </div>
              </CollapsibleDashboardSection>

              <CollapsibleDashboardSection
                className="tr-showcase-section"
                headingId="tr-showcase-heading"
                title="TrustRadius visibility"
                subtitle={
                  <>
                    How TrustRadius content shows up in AI answers: total mentions, TR-linked mentions, citations we drive, top pages, and mix by page
                    type—at <strong>topic</strong> level or for a <strong>single tracked prompt</strong>.
                  </>
                }
              >
                <SectionInsightCallout
                  heading="Insights · TR in AI answers"
                  items={[
                    'What matters: TR-linked mention share vs total mentions shows when models treat TrustRadius as evidence—not just a namecheck—while citation share shows up in answers that drive consideration.',
                    'TrustRadius — custom questions: For prompts with strong demand but weak TR-linked mentions, add custom TR questions and structured answers that cover the exact gap so models can lift your buyer pages into evidence.',
                    'TrustRadius — UGC: Where comparison or review page types lead the breakdown, run a review campaign to stack fresh UGC that matches those prompts, then keep it current on the TR pages that already earn cites.',
                    'TrustRadius — buyer pages: Re-stage product, category, and comparison buyer pages on TrustRadius so the proof hierarchy matches how this table ranks pages—put the most-cited stories above the fold for buyers and crawlers.',
                  ]}
                />

                <div className="comparison-scope-toolbar tr-showcase-scope-toolbar">
                  <span className="comparison-scope-label">Scope</span>
                  <div className="comparison-scope-toggle">
                    <button
                      type="button"
                      className={trShowcaseScope === 'topic' ? 'active' : ''}
                      onClick={() => setTrShowcaseScope('topic')}
                    >
                      Topic (all prompts)
                    </button>
                    <button
                      type="button"
                      className={trShowcaseScope === 'prompt' ? 'active' : ''}
                      onClick={() => setTrShowcaseScope('prompt')}
                    >
                      By prompt
                    </button>
                  </div>
                  {trShowcaseScope === 'prompt' && (
                    <select
                      className="comparison-prompt-select"
                      value={trShowcasePromptId}
                      onChange={(e) => setTrShowcasePromptId(Number(e.target.value))}
                      aria-label="Prompt for TrustRadius visibility"
                    >
                      {selectedPrompts.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.prompt.length > 64 ? `${p.prompt.slice(0, 64)}…` : p.prompt}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                {trShowcaseScope === 'prompt' && (
                  <p className="comparison-scope-context">
                    TR metrics below reflect AI answers for: <strong>{trShowcasePromptLabel}</strong>
                  </p>
                )}

                <div className="tr-showcase-kpis">
                  <div className="tr-showcase-kpi">
                    <span className="tr-showcase-kpi-label">AI mention volume</span>
                    <span className="tr-showcase-kpi-value">{trShowcaseView.mentionVolume.toLocaleString()}</span>
                    <span className={`tr-showcase-kpi-delta ${trShowcaseView.mentionVolumeDeltaPct >= 0 ? 'up' : 'down'}`}>
                      {trShowcaseView.mentionVolumeDeltaPct >= 0 ? '↑' : '↓'}{' '}
                      {Math.abs(trShowcaseView.mentionVolumeDeltaPct)}% vs prior period
                    </span>
                    <span className="tr-showcase-kpi-hint">Times your brand or TrustRadius surfaced in model outputs (this scope)</span>
                  </div>
                  <div className="tr-showcase-kpi">
                    <span className="tr-showcase-kpi-label">TR-linked mentions</span>
                    <span className="tr-showcase-kpi-value">{trShowcaseView.trLinkedMentions.toLocaleString()}</span>
                    <span className={`tr-showcase-kpi-delta ${trShowcaseView.trLinkedMentionsDeltaPct >= 0 ? 'up' : 'down'}`}>
                      {trShowcaseView.trLinkedMentionsDeltaPct >= 0 ? '↑' : '↓'}{' '}
                      {Math.abs(trShowcaseView.trLinkedMentionsDeltaPct)}% vs prior period
                    </span>
                    <span className="tr-showcase-kpi-hint">
                      {trShowcaseView.trLinkedShareOfMentionsPct}% of mentions in this view included TrustRadius as supporting evidence
                    </span>
                  </div>
                  <div className="tr-showcase-kpi tr-showcase-kpi--accent">
                    <span className="tr-showcase-kpi-label">Citations TrustRadius is driving</span>
                    <span className="tr-showcase-kpi-value">{trShowcaseView.citationsDriven.toLocaleString()}</span>
                    <span className={`tr-showcase-kpi-delta ${trShowcaseView.citationsDeltaPct >= 0 ? 'up' : 'down'}`}>
                      {trShowcaseView.citationsDeltaPct >= 0 ? '↑' : '↓'}{' '}
                      {Math.abs(trShowcaseView.citationsDeltaPct)}% vs prior period
                    </span>
                    <span className="tr-showcase-kpi-hint">
                      {trShowcaseView.shareOfAllAiCitationsPct}% of all AI citations in this {trShowcaseScope === 'topic' ? 'topic' : 'prompt view'}
                    </span>
                  </div>
                </div>

                <div className="tr-showcase-grid">
                  <div className="tr-showcase-panel">
                    <h3 className="tr-showcase-subheading">TR pages driving visibility</h3>
                    <p className="tr-showcase-panel-desc">Highest-cited TrustRadius destinations, with related mention volume in this scope.</p>
                    <div className="tr-showcase-pages">
                      {trShowcaseView.topPages.map((pg) => (
                        <div key={pg.path} className="tr-showcase-page-row">
                          <div className="tr-showcase-page-main">
                            <span className="tr-showcase-page-title">{pg.title}</span>
                            <span className="tr-showcase-page-path">{pg.path}</span>
                          </div>
                          <div className="tr-showcase-page-stats">
                            <span className="tr-showcase-page-cit">{pg.citations.toLocaleString()} cit.</span>
                            <span className="tr-showcase-page-mentions">{pg.mentions.toLocaleString()} ment.</span>
                            <span className="tr-showcase-page-pct">{pg.pctOfTr}% of TR cites</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="tr-showcase-panel">
                    <h3 className="tr-showcase-subheading">Breakdown by page type</h3>
                    <p className="tr-showcase-panel-desc">
                      Share of TR citations and mentions attributed to product, category, reviews &amp; ratings, alternatives, pricing, and comparison
                      experiences.
                    </p>
                    <div className="tr-showcase-breakdown">
                      {trShowcaseView.breakdown.map((row) => (
                        <div key={row.id} className="tr-showcase-breakdown-row">
                          <div className="tr-showcase-breakdown-label">{row.label}</div>
                          <div className="tr-showcase-breakdown-bar-wrap">
                            <div
                              className="tr-showcase-breakdown-bar"
                              style={{ width: `${row.percentage}%` }}
                            />
                          </div>
                          <div className="tr-showcase-breakdown-meta">
                            <span className="tr-showcase-breakdown-pct">{row.percentage}%</span>
                            <span className="tr-showcase-breakdown-cit">{row.citations.toLocaleString()} cit.</span>
                            <span className="tr-showcase-breakdown-mentions">{row.mentions.toLocaleString()} ment.</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CollapsibleDashboardSection>

              <CollapsibleDashboardSection
                className="monitoring-insights-section"
                title="Generated insights"
                subtitle="Auto-generated from the current scope and period."
              >
                <ul className="monitoring-insights-list">
                  {monitoringInsights.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </CollapsibleDashboardSection>

              <div className="geo-mc-divider" role="separator" aria-labelledby="geo-mc-competitive-heading">
                <span className="geo-mc-divider-line" aria-hidden="true" />
                <h2 id="geo-mc-competitive-heading" className="geo-mc-divider-title">Competitive analysis</h2>
                <span className="geo-mc-divider-line" aria-hidden="true" />
              </div>
              <p className="geo-mc-divider-sub">
                Benchmark share of voice, brand mentions, AI citations, and sentiment—at <strong>topic level</strong> or <strong>per tracked prompt</strong>—plus
                TrustRadius citations and leading narrative.
              </p>

              {/* Competitor comparison: topic vs per-prompt */}
              <CollapsibleDashboardSection
                title="Share of voice comparison"
                subtitle={
                  <>
                    Compare brands on <strong>share of voice</strong>, <strong>category AI mentions</strong>, <strong>total AI citations</strong>, and{' '}
                    <strong>blended sentiment</strong> (0–100). Switch between <strong>whole topic</strong> (all prompts in this category) or a{' '}
                    <strong>single tracked prompt</strong> to see how positioning shifts.
                  </>
                }
              >
                <div className="comparison-scope-toolbar">
                  <span className="comparison-scope-label">View</span>
                  <div className="comparison-scope-toggle">
                    <button
                      type="button"
                      className={sovComparisonScope === 'topic' ? 'active' : ''}
                      onClick={() => setSovComparisonScope('topic')}
                    >
                      Topic (all prompts)
                    </button>
                    <button
                      type="button"
                      className={sovComparisonScope === 'prompt' ? 'active' : ''}
                      onClick={() => setSovComparisonScope('prompt')}
                    >
                      By prompt
                    </button>
                  </div>
                  {sovComparisonScope === 'prompt' && (
                    <select
                      className="comparison-prompt-select"
                      value={sovComparisonPromptId}
                      onChange={(e) => setSovComparisonPromptId(Number(e.target.value))}
                      aria-label="Prompt for competitive comparison"
                    >
                      {selectedPrompts.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.prompt.length > 64 ? `${p.prompt.slice(0, 64)}…` : p.prompt}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                {sovComparisonScope === 'prompt' && (
                  <p className="comparison-scope-context">
                    Metrics below reflect AI answers for: <strong>{sovComparisonPromptLabel}</strong>
                  </p>
                )}

                <SectionInsightCallout
                  heading="Insights · Competitive comparison"
                  items={[
                    'What matters: topic-level leadership can hide prompt-level losses—if mentions or TR citations trail on a high-volume intent, competitors may own the answer snippet buyers see before they reach your site.',
                    'TrustRadius — custom questions: Where TR citations or leading narrative lag behind Share of voice, script TrustRadius custom Q&A that tackles that storyline directly so TR-owned pages become the cited authority.',
                    'TrustRadius — reviews & buyer pages: Match competitor-winning intents with a review and UGC push on TrustRadius, then surface those stories on the TR comparison and product buyer pages tied to that prompt.',
                  ]}
                />

                <div className="comparison-table-container">
                  <table className="data-table comparison-table">
                    <thead>
                      <tr>
                        <th>Brand</th>
                        <th>Share of voice</th>
                        <th>Mentions</th>
                        <th>Citations</th>
                        <th>Sentiment</th>
                        <th>TR citations</th>
                        <th>Trend</th>
                        <th>Leading narrative</th>
                      </tr>
                    </thead>
                    <tbody>
                      {competitiveBenchmarkRows.map((comp, idx) => (
                        <tr key={`${sovComparisonScope}-${sovComparisonPromptId}-${comp.brand}`} className={idx === 0 ? 'your-brand' : ''}>
                          <td>
                            <div className="brand-cell">
                              <div className="brand-logo" style={{ backgroundColor: comp.color }}>
                                {comp.brand.charAt(0)}
                              </div>
                              <span>{comp.brand}</span>
                              {idx === 0 && <span className="you-badge">You</span>}
                            </div>
                          </td>
                          <td>
                            <div className="sov-cell-large">
                              <span className="sov-value">{comp.shareOfVoice}%</span>
                              <div className="sov-bar">
                                <div
                                  className={`sov-fill ${idx === 0 ? 'high' : ''}`}
                                  style={{ width: `${comp.shareOfVoice}%`, backgroundColor: comp.color }}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="comparison-metric-em">{comp.mentions.toLocaleString()}</td>
                          <td className="comparison-metric-em">{comp.citations.toLocaleString()}</td>
                          <td className="comparison-sentiment-cell">
                            <span className="comparison-sentiment-value">{comp.sentimentScore}</span>
                            <span className="comparison-sentiment-max"> / 100</span>
                            <div className="comparison-sentiment-bar" aria-hidden="true">
                              <div
                                className="comparison-sentiment-fill"
                                style={{
                                  width: `${comp.sentimentScore}%`,
                                  backgroundColor: comp.color,
                                }}
                              />
                            </div>
                          </td>
                          <td>{comp.trCitations.toLocaleString()}</td>
                          <td className={`trend ${comp.trend >= 0 ? 'up' : 'down'}`}>
                            {comp.trend >= 0 ? '↑' : '↓'} {comp.trend >= 0 ? '+' : ''}
                            {comp.trend}%
                          </td>
                          <td className="top-prompt">{comp.topPerformingPrompt}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CollapsibleDashboardSection>

              {/* Site Citation Analysis */}
              <CollapsibleDashboardSection
                title="Site citation frequency"
                subtitle="Which sites drive the most visibility for your tracked prompts."
              >
                <SectionInsightCallout
                  heading="Insights · Citation sources"
                  items={[
                    'What matters: order in this list approximates where models go for quotable evidence—gaps above the fold are gaps in the proof bundle your GEO program must fill.',
                    'TrustRadius — buyer pages: If TrustRadius leads, double down on comparison, review, and category buyer pages with structured claims and fresh modules; if it trails, diagnose which TR page types are thin versus peers.',
                    'TrustRadius — custom questions & UGC: For domains that outrank you, map their strengths to custom questions and review campaigns on TrustRadius that generate defensible peer proof you can showcase on your TR buyer journeys.',
                  ]}
                />

                <div className="site-analysis-grid">
                  <div className="site-ranking">
                    {topicResearchData.topCitedSites.map((site, idx) => (
                      <div 
                        key={site.site} 
                        className={`site-ranking-row ${site.site === 'trustradius.com' ? 'highlight' : ''}`}
                      >
                        <span className="site-position">#{idx + 1}</span>
                        <div className="site-details">
                          <span className="site-name">{site.site}</span>
                          <div className="site-bar-full">
                            <div 
                              className="site-bar-fill" 
                              style={{ 
                                width: `${(site.citations / topicResearchData.topCitedSites[0].citations) * 100}%`,
                                backgroundColor: site.site === 'trustradius.com' ? '#00A6A6' : chartColors[idx]
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="site-metrics">
                          <span className="site-citations">{site.citations.toLocaleString()}</span>
                          <span className="site-percentage">{site.percentage}%</span>
                          <span className={`site-change ${site.change >= 0 ? 'up' : 'down'}`}>
                            {site.change >= 0 ? '+' : ''}{site.change}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CollapsibleDashboardSection>

              {/* Competitive Insights */}
              <CollapsibleDashboardSection title="Competitive insights">
                <div className="insights-grid">
                  <div className="insight-card positive">
                    <span className="insight-icon">🎯</span>
                    <div className="insight-content">
                      <h4>Where you are winning</h4>
                      <p>
                        <strong>What matters:</strong> you lead in <strong>5 of 8</strong> tracked prompts—concentration in enterprise, comparison, and security
                        intents means those answers are what models most often associate with your brand.
                      </p>
                      <p>
                        <strong>With TrustRadius:</strong> lock in custom questions and buyer-page modules on TR for those prompts so you defend the
                        lead; add review touchpoints to keep UGC fresh where you already win citations.
                      </p>
                    </div>
                  </div>
                  <div className="insight-card positive">
                    <span className="insight-icon">📈</span>
                    <div className="insight-content">
                      <h4>Growth cluster to feed</h4>
                      <p>
                        <strong>What matters:</strong> remote-team and collaboration prompts are up <strong>+26% volume</strong>—rising demand before
                        share of voice stabilizes is the window to own the narrative.
                      </p>
                      <p>
                        <strong>With TrustRadius:</strong> expand custom Q&A and category buyer pages for that cluster, run a UGC review sprint, then
                        showcase quotes and outcomes on TR comparison pages buyers hit during vendor shortlists.
                      </p>
                    </div>
                  </div>
                  <div className="insight-card info">
                    <span className="insight-icon">💡</span>
                    <div className="insight-content">
                      <h4>Citation leverage</h4>
                      <p>
                        <strong>What matters:</strong> TrustRadius comparison and product buyer pages earn roughly <strong>3.1×</strong> more AI citations than
                        the next review site for your brand—proof that structured TR destinations are doing GEO work.
                      </p>
                      <p>
                        <strong>With TrustRadius:</strong> prioritize review campaigns that feed those same page types and keep custom questions aligned
                        to the proof you surface so models keep pulling current, buyer-ready evidence.
                      </p>
                    </div>
                  </div>
                </div>
              </CollapsibleDashboardSection>
            </>
          )}

          {/* ==================== ROI CALCULATOR TAB ==================== */}
          {activeTab === 'roi' && (
            <>
              <section className="page-header-section">
                <div className="page-header-content">
                  <h1 className="page-title">GEO → pipeline ROI</h1>
                  <p className="page-subtitle">
                    Fewer knobs: global deal size and monitoring-fed visibility, stage conversion rates, then TrustRadius-attributed pipeline and revenue.
                  </p>
                </div>
                <div className="page-actions">
                  <button type="button" className="btn-outline" onClick={() => setRoiAssumptions({ ...defaultRoiAssumptions })}>
                    Reset assumptions
                  </button>
                  <button type="button" className="btn-primary">
                    Export model
                  </button>
                </div>
              </section>

              <SectionInsightCallout heading="Insights · Pipeline & revenue readout" items={roiInsightItems} />

              <details className="roi-disclosure dashboard-section">
                <summary className="roi-disclosure-summary">
                  <span className="roi-disclosure-summary-title">How this model works</span>
                  <span className="roi-disclosure-summary-hint">Assumptions, formulas, funnel definitions</span>
                </summary>
                <div className="roi-disclosure-body">
                  <p className="roi-disclosure-lead">
                    Demand per prompt combines GEO visits, AI citations (visit quality), share of voice, sentiment, and answer-win rate. Each funnel stage uses your{' '}
                    <strong>average conversion to pipeline</strong> and <strong>pipeline to revenue</strong> rates. TrustRadius hard ROI applies your attribution % to the
                    modeled pipeline and revenue, then compares base Monitoring metrics to a “better GEO” scenario.
                  </p>
                  <details className="roi-disclosure nested">
                    <summary>Why visibility maps to revenue</summary>
                    <ul className="roi-callout-list">
                      <li>
                        <strong>In GEO, presence is prerequisite.</strong> When your narrative shows up in the answer, you earn consideration; stage tags and conversion rates turn that demand into pipeline and revenue.
                      </li>
                      <li>
                        Mentions, citations, and <strong>winning the answer</strong> behave differently—this model weights them by funnel and your conversion assumptions.
                      </li>
                    </ul>
                  </details>
                  <details className="roi-disclosure nested">
                    <summary>Monitoring &amp; TrustRadius inputs</summary>
                    <p className="roi-disclosure-lead">
                      <strong>Share of voice</strong> and <strong>sentiment</strong> in Global assumptions follow the same scope as the Monitoring tab ({roiMonitoringFeed.scopeLabel}).{' '}
                      <strong>TrustRadius impact</strong> reflects mentions, TR-driven citations, and share of AI citations from your visibility metrics. Per-prompt rows use the same dimensions at prompt granularity.
                    </p>
                  </details>
                  <details className="roi-disclosure nested">
                    <summary>Funnel stages (TOF · MOF · BOF)</summary>
                    <div className="roi-funnel-strip roi-funnel-strip--compact">
                      {(['top', 'mid', 'bottom']).map((key) => {
                        const fm = ROI_FUNNEL_META[key]
                        return (
                          <div key={key} className="roi-funnel-card roi-funnel-card--rich" style={{ borderTopColor: fm.color }}>
                            <span className="roi-funnel-badge" style={{ background: fm.color }}>
                              {fm.short}
                            </span>
                            <h3 className="roi-funnel-card-title">{fm.label}</h3>
                            <p className="roi-funnel-definition">{fm.definition}</p>
                            <p className="roi-funnel-buyerjob">
                              <strong>Buyer job:</strong> {fm.buyerJob}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </details>
                  <details className="roi-disclosure nested">
                    <summary>Core formulas (simplified)</summary>
                    <dl className="roi-mechanics-dl">
                      <dt>Pipeline $ (per prompt)</dt>
                      <dd>
                        <code className="roi-inline-code">visits × citationBoost × SoV × sentimentAdj × winLift × stagePipelineConv × avgDealSize ÷ scale</code>
                      </dd>
                      <dt>Revenue $</dt>
                      <dd>
                        <code className="roi-inline-code">pipeline $ × stageRevenueConv</code>
                      </dd>
                      <dt>TrustRadius-attributed</dt>
                      <dd>
                        <code className="roi-inline-code">pipeline or revenue × TR attribution %</code> — pair attribution with TR citation share from visibility when calibrating.
                      </dd>
                      <dt>Citation boost</dt>
                      <dd>
                        Uses monthly citations per prompt vs reference {roiAssumptions.citationVolumeRef} (tunable under Global → Advanced).
                      </dd>
                    </dl>
                  </details>
                </div>
              </details>

              <CollapsibleDashboardSection
                className="roi-funnel-tracked-section"
                title="Tracked prompts by funnel"
                subtitle={
                  <>
                    Each stage rolls up <strong>estimated monthly prompt volume</strong> (modeled GEO visits), <strong>volume-weighted share of voice</strong>, and{' '}
                    <strong>volume-weighted sentiment</strong>, plus <strong>TR-influenced pipeline and revenue</strong> from the same model as below. Open a
                    stage for prompt-level detail.
                  </>
                }
              >
                <div className="roi-funnel-totals" aria-label="Totals across all funnel stages">
                  <h3 className="roi-funnel-totals-heading">Totals (all stages)</h3>
                  <div className="roi-funnel-totals-grid">
                    <div className="roi-funnel-total-card">
                      <span className="roi-funnel-total-label">Tracked prompts</span>
                      <span className="roi-funnel-total-value">{roiFunnelTrackedTotals.promptCount}</span>
                    </div>
                    <div className="roi-funnel-total-card">
                      <span className="roi-funnel-total-label">Est. volume / mo</span>
                      <span className="roi-funnel-total-value">{roiFunnelTrackedTotals.totalVolume.toLocaleString()}</span>
                    </div>
                    <div className="roi-funnel-total-card">
                      <span className="roi-funnel-total-label">Wtd. share of voice</span>
                      <span className="roi-funnel-total-value">{roiFunnelTrackedTotals.weightedSoV}%</span>
                    </div>
                    <div className="roi-funnel-total-card">
                      <span className="roi-funnel-total-label">Wtd. sentiment</span>
                      <span className="roi-funnel-total-value">{(roiFunnelTrackedTotals.weightedSentiment * 100).toFixed(0)}</span>
                    </div>
                    <div className="roi-funnel-total-card roi-funnel-total-card--accent">
                      <span className="roi-funnel-total-label">TR-influenced pipeline</span>
                      <span className="roi-funnel-total-value">{formatRoiCurrency(roiFunnelTrackedTotals.trPipeline)}</span>
                    </div>
                    <div className="roi-funnel-total-card roi-funnel-total-card--accent">
                      <span className="roi-funnel-total-label">TR-influenced revenue</span>
                      <span className="roi-funnel-total-value">{formatRoiCurrency(roiFunnelTrackedTotals.trRevenue)}</span>
                    </div>
                  </div>
                </div>
                <div className="roi-funnel-drill-list">
                  {roiFunnelDrillWithTr.map(({ funnelKey, rollup, rowBundle, trPipeline, trRevenue }) => {
                    const fm = ROI_FUNNEL_META[funnelKey]
                    return (
                      <details key={funnelKey} className="roi-funnel-drill" defaultOpen={funnelKey === 'top'}>
                        <summary className="roi-funnel-drill-summary">
                          <span className="roi-funnel-drill-badge" style={{ background: fm.color }}>
                            {fm.short}
                          </span>
                          <span className="roi-funnel-drill-title">{fm.label}</span>
                          <span className="roi-funnel-drill-meta">
                            <strong>{rollup.promptCount}</strong> prompts
                          </span>
                          <span className="roi-funnel-drill-metric">
                            <span className="roi-funnel-drill-metric-label">Est. volume / mo</span>
                            <span className="roi-funnel-drill-metric-value">{rollup.totalVolume.toLocaleString()}</span>
                          </span>
                          <span className="roi-funnel-drill-metric">
                            <span className="roi-funnel-drill-metric-label">Wtd. SoV</span>
                            <span className="roi-funnel-drill-metric-value">{rollup.weightedSoV}%</span>
                          </span>
                          <span className="roi-funnel-drill-metric">
                            <span className="roi-funnel-drill-metric-label">Wtd. sentiment</span>
                            <span className="roi-funnel-drill-metric-value">{(rollup.weightedSentiment * 100).toFixed(0)}</span>
                          </span>
                          <span className="roi-funnel-drill-metric roi-funnel-drill-metric--currency">
                            <span className="roi-funnel-drill-metric-label">TR-influenced pipeline</span>
                            <span className="roi-funnel-drill-metric-value">{formatRoiCurrency(trPipeline)}</span>
                          </span>
                          <span className="roi-funnel-drill-metric roi-funnel-drill-metric--currency">
                            <span className="roi-funnel-drill-metric-label">TR-influenced revenue</span>
                            <span className="roi-funnel-drill-metric-value">{formatRoiCurrency(trRevenue)}</span>
                          </span>
                          <span className="roi-funnel-drill-chevron" aria-hidden="true" />
                        </summary>
                        <div className="roi-funnel-drill-body">
                          {rowBundle.length === 0 ? (
                            <p className="roi-funnel-drill-empty">No prompts tagged for this stage.</p>
                          ) : (
                            <div className="comparison-table-container">
                              <table className="data-table roi-funnel-drill-table">
                                <thead>
                                  <tr>
                                    <th>Prompt</th>
                                    <th>Est. volume / mo</th>
                                    <th>Share of voice</th>
                                    <th>Sentiment</th>
                                    <th>TR-influenced pipeline</th>
                                    <th>TR-influenced revenue</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {rowBundle.map(({ row, base }) => (
                                    <tr key={row.id}>
                                      <td className="roi-prompt-cell">{row.prompt}</td>
                                      <td>{row.monthlyGeoVisits.toLocaleString()}</td>
                                      <td>{row.shareOfVoice}%</td>
                                      <td>{(row.sentiment * 100).toFixed(0)}</td>
                                      <td className="roi-tr-pipe-cell">{formatRoiCurrency(base.trAttributedPipelineUsd)}</td>
                                      <td className="roi-tr-pipe-cell">{formatRoiCurrency(base.trAttributedRevenueUsd)}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
                      </details>
                    )
                  })}
                </div>
              </CollapsibleDashboardSection>

              <CollapsibleDashboardSection
                className="roi-assumptions-section"
                title="Model inputs & assumptions"
                subtitle="Deal size, monitoring-fed visibility, funnel conversion rates, TR attribution, and GEO scenario lifts."
              >
                <details className="roi-disclosure">
                  <summary className="roi-disclosure-summary">
                    <span className="roi-disclosure-summary-title">Model inputs &amp; assumptions</span>
                    <span className="roi-disclosure-summary-hint">
                      Expand to edit deal size, monitoring-fed fields, funnel conversion %, TR attribution, and GEO scenario lifts
                    </span>
                  </summary>
                  <div className="roi-disclosure-body">
                    <p className="section-subtitle roi-disclosure-lead">
                      Global economics and monitoring-fed visibility, then one pair of conversion rates per funnel stage. Percentages use whole numbers (e.g. 2.8 = 2.8%).
                    </p>

                <div className="roi-assumption-block roi-assumption-block--numbered">
                  <h3 className="roi-assumption-block-title">
                    <span className="roi-step-badge">1</span> Global assumptions
                  </h3>
                  <p className="roi-assumption-block-desc">
                    Deal size is editable. Share of voice, sentiment, and citation volume mirror your current <strong>Monitoring</strong> scope:{' '}
                    <em>{roiMonitoringFeed.scopeLabel}</em>.
                  </p>
                  <div className="roi-monitoring-feed">
                    <div className="roi-monitoring-feed-item">
                      <span className="roi-monitoring-feed-label">Share of voice (monitoring)</span>
                      <span className="roi-monitoring-feed-value">{roiMonitoringFeed.shareOfVoicePct}%</span>
                    </div>
                    <div className="roi-monitoring-feed-item">
                      <span className="roi-monitoring-feed-label">Sentiment (monitoring)</span>
                      <span className="roi-monitoring-feed-value">
                        {(roiMonitoringFeed.sentimentScore * 100).toFixed(0)} <span className="roi-monitoring-feed-sub">{roiMonitoringFeed.sentimentLabel}</span>
                      </span>
                    </div>
                    <div className="roi-monitoring-feed-item">
                      <span className="roi-monitoring-feed-label">AI citations (period)</span>
                      <span className="roi-monitoring-feed-value">
                        {roiMonitoringFeed.citationsTotal.toLocaleString()}
                        <span className={`roi-monitoring-feed-delta ${roiMonitoringFeed.citationsDeltaPct >= 0 ? 'up' : 'down'}`}>
                          {roiMonitoringFeed.citationsDeltaPct >= 0 ? '↑' : '↓'} {Math.abs(roiMonitoringFeed.citationsDeltaPct)}% vs prior
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="roi-assumptions-grid roi-assumptions-grid--deal">
                    <label className="roi-field">
                      <span>Average deal size ($)</span>
                      <span className="roi-field-hint">Used to turn modeled demand into pipeline dollars.</span>
                      <input
                        type="number"
                        min={5000}
                        step={1000}
                        value={roiAssumptions.avgDealSize}
                        onChange={(e) =>
                          setRoiAssumptions((p) => ({ ...p, avgDealSize: Number(e.target.value) || 0 }))
                        }
                      />
                    </label>
                  </div>

                  <div className="roi-assumption-block roi-assumption-block--nested">
                    <h4 className="roi-assumption-block-title">TrustRadius impact</h4>
                    <p className="roi-assumption-block-desc">
                      How TrustRadius shows up in AI answers (same story as <strong>TrustRadius visibility</strong> + citation share). Use attribution to say what fraction of outcomes you credit to TR-influenced journeys.
                    </p>
                    <div className="roi-bridge-stats roi-bridge-stats--roi">
                      <div className="roi-bridge-stat">
                        <span className="roi-bridge-stat-label">TR mention volume</span>
                        <span className="roi-bridge-stat-value">{trustRadiusShowcaseData.topic.mentionVolume.toLocaleString()}</span>
                      </div>
                      <div className="roi-bridge-stat">
                        <span className="roi-bridge-stat-label">Citations TR drives</span>
                        <span className="roi-bridge-stat-value">{trustRadiusShowcaseData.topic.citationsDriven.toLocaleString()}</span>
                      </div>
                      <div className="roi-bridge-stat">
                        <span className="roi-bridge-stat-label">Share of AI citations (topic)</span>
                        <span className="roi-bridge-stat-value">{trustRadiusShowcaseData.topic.shareOfAllAiCitationsPct}%</span>
                      </div>
                    </div>
                    <div className="roi-assumptions-grid">
                      <label className="roi-field">
                        <span>TR attribution (% of modeled pipeline &amp; revenue)</span>
                        <span className="roi-field-hint">Align with TR citation share when calibrating (topic share is {trustRadiusShowcaseData.topic.shareOfAllAiCitationsPct}%).</span>
                        <input
                          type="number"
                          min={0}
                          max={100}
                          step={1}
                          value={Math.round(roiAssumptions.trAttributedFraction * 1000) / 10}
                          onChange={(e) =>
                            setRoiAssumptions((p) => ({
                              ...p,
                              trAttributedFraction: Math.min(1, Math.max(0, (Number(e.target.value) || 0) / 100)),
                            }))
                          }
                        />
                      </label>
                    </div>
                  </div>

                  <details className="roi-disclosure nested roi-disclosure--inline">
                    <summary>Advanced calibration (sentiment &amp; citations)</summary>
                    <div className="roi-assumptions-grid">
                      <label className="roi-field">
                        <span>Sentiment baseline (0–1)</span>
                        <input
                          type="number"
                          step={0.01}
                          min={0}
                          max={1}
                          value={roiAssumptions.sentimentBaseline}
                          onChange={(e) =>
                            setRoiAssumptions((p) => ({ ...p, sentimentBaseline: Number(e.target.value) }))
                          }
                        />
                      </label>
                      <label className="roi-field">
                        <span>Sentiment lift (k)</span>
                        <input
                          type="number"
                          step={0.02}
                          value={roiAssumptions.sentimentLiftK}
                          onChange={(e) =>
                            setRoiAssumptions((p) => ({ ...p, sentimentLiftK: Number(e.target.value) }))
                          }
                        />
                      </label>
                      <label className="roi-field">
                        <span>Citation volume reference / mo</span>
                        <input
                          type="number"
                          min={50}
                          step={10}
                          value={roiAssumptions.citationVolumeRef}
                          onChange={(e) =>
                            setRoiAssumptions((p) => ({ ...p, citationVolumeRef: Number(e.target.value) || 500 }))
                          }
                        />
                      </label>
                    </div>
                  </details>
                </div>

                <div className="roi-assumption-block roi-assumption-block--numbered">
                  <h3 className="roi-assumption-block-title">
                    <span className="roi-step-badge">2</span> Top of funnel
                  </h3>
                  <p className="roi-assumption-block-desc">Applies to TOF-tagged prompts (category / discovery questions).</p>
                  <div className="roi-assumptions-grid">
                    <label className="roi-field">
                      <span>Avg. conversion to pipeline (%)</span>
                      <span className="roi-field-hint">Share of modeled demand that becomes pipeline $ this period.</span>
                      <input
                        type="number"
                        min={0}
                        max={100}
                        step={0.1}
                        value={Math.round(roiAssumptions.topPipelineConv * 10000) / 100}
                        onChange={(e) =>
                          setRoiAssumptions((p) => ({
                            ...p,
                            topPipelineConv: Math.min(1, Math.max(0, (Number(e.target.value) || 0) / 100)),
                          }))
                        }
                      />
                    </label>
                    <label className="roi-field">
                      <span>Avg. conversion pipeline → revenue (%)</span>
                      <span className="roi-field-hint">Portion of pipeline $ recognized as revenue for this rollup.</span>
                      <input
                        type="number"
                        min={0}
                        max={100}
                        step={0.1}
                        value={Math.round(roiAssumptions.topRevenueConv * 10000) / 100}
                        onChange={(e) =>
                          setRoiAssumptions((p) => ({
                            ...p,
                            topRevenueConv: Math.min(1, Math.max(0, (Number(e.target.value) || 0) / 100)),
                          }))
                        }
                      />
                    </label>
                  </div>
                </div>

                <div className="roi-assumption-block roi-assumption-block--numbered">
                  <h3 className="roi-assumption-block-title">
                    <span className="roi-step-badge">3</span> Mid-funnel
                  </h3>
                  <p className="roi-assumption-block-desc">Applies to MOF prompts (fit, features, proof).</p>
                  <div className="roi-assumptions-grid">
                    <label className="roi-field">
                      <span>Avg. conversion to pipeline (%)</span>
                      <input
                        type="number"
                        min={0}
                        max={100}
                        step={0.1}
                        value={Math.round(roiAssumptions.midPipelineConv * 10000) / 100}
                        onChange={(e) =>
                          setRoiAssumptions((p) => ({
                            ...p,
                            midPipelineConv: Math.min(1, Math.max(0, (Number(e.target.value) || 0) / 100)),
                          }))
                        }
                      />
                    </label>
                    <label className="roi-field">
                      <span>Avg. conversion pipeline → revenue (%)</span>
                      <input
                        type="number"
                        min={0}
                        max={100}
                        step={0.1}
                        value={Math.round(roiAssumptions.midRevenueConv * 10000) / 100}
                        onChange={(e) =>
                          setRoiAssumptions((p) => ({
                            ...p,
                            midRevenueConv: Math.min(1, Math.max(0, (Number(e.target.value) || 0) / 100)),
                          }))
                        }
                      />
                    </label>
                  </div>
                </div>

                <div className="roi-assumption-block roi-assumption-block--numbered">
                  <h3 className="roi-assumption-block-title">
                    <span className="roi-step-badge">4</span> Bottom of funnel
                  </h3>
                  <p className="roi-assumption-block-desc">Applies to BOF prompts (compare, pricing, alternatives).</p>
                  <div className="roi-assumptions-grid">
                    <label className="roi-field">
                      <span>Avg. conversion to pipeline (%)</span>
                      <input
                        type="number"
                        min={0}
                        max={100}
                        step={0.1}
                        value={Math.round(roiAssumptions.bottomPipelineConv * 10000) / 100}
                        onChange={(e) =>
                          setRoiAssumptions((p) => ({
                            ...p,
                            bottomPipelineConv: Math.min(1, Math.max(0, (Number(e.target.value) || 0) / 100)),
                          }))
                        }
                      />
                    </label>
                    <label className="roi-field">
                      <span>Avg. conversion pipeline → revenue (%)</span>
                      <input
                        type="number"
                        min={0}
                        max={100}
                        step={0.1}
                        value={Math.round(roiAssumptions.bottomRevenueConv * 10000) / 100}
                        onChange={(e) =>
                          setRoiAssumptions((p) => ({
                            ...p,
                            bottomRevenueConv: Math.min(1, Math.max(0, (Number(e.target.value) || 0) / 100)),
                          }))
                        }
                      />
                    </label>
                  </div>
                </div>

                <div className="roi-scenario-row">
                  <div className="roi-scenario-intro">
                    <strong>Scenario: improved GEO</strong>
                    <span className="roi-scenario-intro-sub">Relative bumps applied to each tracked prompt to simulate stronger visibility.</span>
                  </div>
                  <label>
                    +SoV (% rel.)
                    <input
                      type="number"
                      value={roiAssumptions.scenarioSovPct}
                      onChange={(e) =>
                        setRoiAssumptions((p) => ({ ...p, scenarioSovPct: Number(e.target.value) }))
                      }
                    />
                  </label>
                  <label>
                    +Sentiment (pts 0–1)
                    <input
                      type="number"
                      step={0.01}
                      value={roiAssumptions.scenarioSentimentPts}
                      onChange={(e) =>
                        setRoiAssumptions((p) => ({ ...p, scenarioSentimentPts: Number(e.target.value) }))
                      }
                    />
                  </label>
                  <label>
                    +Citations (% rel.)
                    <input
                      type="number"
                      value={roiAssumptions.scenarioCitationPct}
                      onChange={(e) =>
                        setRoiAssumptions((p) => ({ ...p, scenarioCitationPct: Number(e.target.value) }))
                      }
                    />
                  </label>
                </div>
                  </div>
                </details>
              </CollapsibleDashboardSection>
            </>
          )}

          {/* ==================== CRAWL ANALYTICS TAB ==================== */}
          {activeTab === 'crawl' && (
            <>
              <section className="page-header-section">
                <div className="page-header-content">
                  <h1 className="page-title">AI Crawl Analytics</h1>
                  <p className="page-subtitle">See how often AI crawlers visit your TrustRadius profile pages and content.</p>
                </div>
                <div className="page-actions">
                  <div className="timeframe-selector">
                    <button 
                      className={`tf-btn ${selectedTimeframe === 'weekly' ? 'active' : ''}`}
                      onClick={() => setSelectedTimeframe('weekly')}
                    >Weekly</button>
                    <button 
                      className={`tf-btn ${selectedTimeframe === 'monthly' ? 'active' : ''}`}
                      onClick={() => setSelectedTimeframe('monthly')}
                    >Monthly</button>
                    <button 
                      className={`tf-btn ${selectedTimeframe === 'yearly' ? 'active' : ''}`}
                      onClick={() => setSelectedTimeframe('yearly')}
                    >Yearly</button>
                  </div>
                  <button className="btn-primary">Download Data</button>
                </div>
              </section>

              {/* Crawl Volume Stats */}
              <div className="stats-grid four-col">
                <div className="stat-card highlight-crawl">
                  <span className="stat-label">Total Crawl Volume</span>
                  <div className="stat-value">{crawlVolumeData.totalCrawls.toLocaleString()}</div>
                  <div className="stat-sublabel">This month</div>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Weekly Change</span>
                  <div className="stat-value change up">+{crawlVolumeData.weeklyChange}%</div>
                  <div className="stat-sublabel">vs last week</div>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Monthly Change</span>
                  <div className="stat-value change up">+{crawlVolumeData.monthlyChange}%</div>
                  <div className="stat-sublabel">vs last month</div>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Yearly Change</span>
                  <div className="stat-value change up">+{crawlVolumeData.yearlyChange}%</div>
                  <div className="stat-sublabel">vs last year</div>
                </div>
              </div>

              <SectionInsightCallout heading="Insights · Crawl health" items={crawlInsightItems.overview} />

              {/* Crawl by AI Crawler */}
              <CollapsibleDashboardSection
                title="Volume by AI Crawler"
                subtitle="Breakdown of crawl activity by major AI bots from Cloudflare logs."
              >
                <div className="crawler-breakdown">
                  {crawlVolumeData.byCrawler.map((crawler) => (
                    <div key={crawler.crawler} className="crawler-card">
                      <div className="crawler-header">
                        <div className="crawler-icon" style={{ backgroundColor: crawler.color }}>
                          {crawler.crawler.charAt(0)}
                        </div>
                        <div className="crawler-info">
                          <span className="crawler-name">{crawler.crawler}</span>
                          <span className="crawler-percentage">{crawler.percentage}% of total</span>
                        </div>
                      </div>
                      <div className="crawler-volume">{crawler.volume.toLocaleString()}</div>
                      <div className="crawler-bar">
                        <div 
                          className="crawler-bar-fill" 
                          style={{ 
                            width: `${(crawler.volume / crawlVolumeData.byCrawler[0].volume) * 100}%`,
                            backgroundColor: crawler.color 
                          }}
                        ></div>
                      </div>
                      <div className={`crawler-trend ${crawler.weeklyChange >= 0 ? 'up' : 'down'}`}>
                        {crawler.weeklyChange >= 0 ? '↑' : '↓'} {Math.abs(crawler.weeklyChange)}% this week
                      </div>
                    </div>
                  ))}
                </div>
              </CollapsibleDashboardSection>

              <SectionInsightCallout heading="Insights · Bots & page focus" items={crawlInsightItems.bots} />

              {/* Two Column: Page Type + Product */}
              <div className="two-column-grid">
                {/* By Page Type */}
                <CollapsibleDashboardSection title="Volume by Page Type">
                  <div className="page-type-crawl-list">
                    {crawlVolumeData.byPageType.map((pt, idx) => (
                      <div key={pt.pageType} className="page-type-crawl-row">
                        <div className="pt-info">
                          <span className="pt-color" style={{ backgroundColor: chartColors[idx] }}></span>
                          <span className="pt-name">{pt.pageType}</span>
                        </div>
                        <div className="pt-bar-container">
                          <div className="pt-bar">
                            <div 
                              className="pt-bar-fill" 
                              style={{ 
                                width: `${pt.percentage}%`,
                                backgroundColor: chartColors[idx]
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="pt-stats">
                          <span className="pt-volume">{pt.volume.toLocaleString()}</span>
                          <span className={`pt-trend ${pt.trend >= 0 ? 'up' : 'down'}`}>
                            {pt.trend >= 0 ? '+' : ''}{pt.trend}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CollapsibleDashboardSection>

                {/* By Product */}
                <CollapsibleDashboardSection title="Top Products by Crawl Volume">
                  <div className="product-crawl-list">
                    {crawlVolumeData.byProduct.map((product, idx) => (
                      <div key={product.product} className="product-crawl-row">
                        <span className="product-rank">#{idx + 1}</span>
                        <span className="product-name">{product.product}</span>
                        <span className="product-volume">{product.volume.toLocaleString()}</span>
                        <span className={`product-trend ${product.weeklyChange >= 0 ? 'up' : 'down'}`}>
                          {product.weeklyChange >= 0 ? '↑' : '↓'} {Math.abs(product.weeklyChange)}%
                        </span>
                      </div>
                    ))}
                  </div>
                </CollapsibleDashboardSection>
              </div>

              {/* Timeline Chart */}
              <CollapsibleDashboardSection title="Crawl Volume Over Time">
                <div className="timeline-chart">
                  <div className="timeline-bars">
                    {crawlVolumeData.timeline.map((point, idx) => (
                      <div key={idx} className="timeline-bar-group">
                        <div 
                          className="timeline-bar" 
                          style={{ height: `${(point.volume / crawlVolumeData.timeline[3].volume) * 150}px` }}
                        >
                          <span className="bar-value">{(point.volume / 1000).toFixed(0)}K</span>
                        </div>
                        <span className="timeline-label">{point.period}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CollapsibleDashboardSection>

              {/* Data Source Note */}
              <div className="data-source-note">
                <span className="note-icon">ℹ️</span>
                <span>Data sourced from Cloudflare CDN logs. Updates daily. Last updated: April 6, 2026, 8:00 AM PST</span>
              </div>
            </>
          )}

            </div>
          </div>

          <aside className="geo-assistant-rail" aria-labelledby="geo-assistant-heading">
            <div className="geo-assistant-rail-inner">
              <header className="geo-assistant-rail-header">
                <h2 id="geo-assistant-heading" className="geo-assistant-rail-title">
                  GEO Assistant
                </h2>
                <p className="geo-assistant-rail-subtitle">
                  Natural language shapes the main view—switch tabs, scope, and period, or ask about the data in context.
                </p>
              </header>

              <div className="geo-assistant-rail-scroll">
                <p className="geo-assistant-lead geo-assistant-lead--rail">
                  Ground questions in the active tab. Recognized commands update the dashboard; optional{' '}
                  <code className="monitoring-code">window.__GEO_CONDUCTOR_MCP__</code> powers tool-backed replies.
                </p>
                <p className="geo-assistant-context" role="status">
                  <span className="geo-assistant-context-label">Context · </span>
                  {geoAssistantContextLine}
                </p>
                <div className="geo-assistant-templates" role="group" aria-label="Suggested prompts">
                  <span className="geo-assistant-templates-label">Try · </span>
                  {[
                    { label: 'Summarize this tab', q: 'Summarize key points for this tab' },
                    { label: 'Monitoring · Quarterly', q: 'Open monitoring and set quarterly period view' },
                    { label: 'Citation drivers', q: 'What influences citations in this view?' },
                    { label: 'ROI takeaway', q: 'What should leadership know about TR pipeline vs scenario?' },
                  ].map((chip) => (
                    <button
                      key={chip.label}
                      type="button"
                      className="geo-assistant-chip"
                      onClick={() => setConductorQuestion(chip.q)}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
                <div className="monitoring-conductor-chat geo-assistant-chat geo-assistant-chat--rail" role="log" aria-live="polite">
                  {conductorMessages.length === 0 ? (
                    <p className="monitoring-conductor-empty">
                      Messages appear here. Try a chip or ask to jump to ROI, set monitoring to yearly, or summarize this tab.
                    </p>
                  ) : (
                    conductorMessages.map((msg, i) => (
                      <div key={i} className={`monitoring-conductor-msg monitoring-conductor-msg--${msg.role}`}>
                        {msg.role === 'assistant' ? renderAssistantSegments(msg.text) : msg.text}
                      </div>
                    ))
                  )}
                </div>
              </div>

              <footer className="geo-assistant-rail-footer">
                <form className="monitoring-conductor-form geo-assistant-form geo-assistant-form--rail" onSubmit={handleGeoAssistantSubmit}>
                  <input
                    type="text"
                    className="monitoring-conductor-input"
                    placeholder="Ask about this dashboard…"
                    value={conductorQuestion}
                    onChange={(e) => setConductorQuestion(e.target.value)}
                    disabled={conductorBusy}
                    aria-label="Ask GEO Assistant"
                  />
                  <button type="submit" className="btn-primary" disabled={conductorBusy}>
                    {conductorBusy ? '…' : 'Send'}
                  </button>
                </form>
              </footer>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

export default GEODashboard
