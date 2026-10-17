/* AI Library — Screens. Each screen is a top-level view rendered inside <Shell>
   (or full-bleed for landing/chat/dna). */

const { useState: uS, useEffect: uE, useRef: uR } = React;

/* ========== LANDING ========== */
function LandingScreen({ onSignIn, onSignUp }) {
  return (
    <div className="landing">
      <div className="inner">
        <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
          <img src="../../assets/logo-emblem.png" alt="" style={{ width: 96, height: 96 }} />
        </div>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--fg-strong)' }}>AI Library</h1>
        <p>For productized coaches who want to build leverage, not just content.</p>
        <div className="cta-row">
          <PrimaryButton onClick={onSignIn} iconRight="ArrowRight">Sign in</PrimaryButton>
          <OutlineButton onClick={onSignUp}>Create account</OutlineButton>
        </div>
      </div>
    </div>
  );
}

/* ========== DASHBOARD ========== */
const FAVORITE_TOOLS = [
  { id: 'aizac',       name: 'AI Zac',           description: 'Your strategic coach for productized businesses', icon: 'Compass',  tone: 'violet' },
  { id: 'copy',        name: 'Copy Studio',      description: 'Generate copy that sounds like you',              icon: 'PenTool',  tone: 'rose' },
  { id: 'morning',     name: 'Morning Routine',  description: 'Start your day with focus and clarity',           icon: 'Sunrise',  tone: 'clay' },
];
const ALL_TOOLS = [
  { id: 'copy',        name: 'Copy Studio',         description: 'Generate copy that sounds like you',         icon: 'PenTool',       tone: 'rose',   category: 'content' },
  { id: 'morning',     name: 'Morning Routine',     description: 'Start your day with focus and clarity',      icon: 'Sunrise',       tone: 'clay',   category: 'mindset' },
  { id: 'aizac',       name: 'AI Zac',              description: 'Your strategic coach for productized businesses', icon: 'Compass',  tone: 'violet', category: 'strategy' },
  { id: 'offer',       name: 'Offer Architect',     description: 'Design productized offers your buyers want', icon: 'Layout',        tone: 'sky',    category: 'offers' },
  { id: 'reflect',     name: 'Reflection',          description: 'Think out loud with a thinking partner',     icon: 'MessageCircle', tone: 'spring', category: 'mindset' },
  { id: 'audience',    name: 'Audience Builder',    description: 'Find and define your right-fit clients',     icon: 'Users',         tone: 'green',  category: 'strategy' },
  { id: 'launch',      name: 'Launch Plan',         description: 'A simple plan to ship your next thing',      icon: 'ClipboardList', tone: 'gold',   category: 'offers' },
  { id: 'review',      name: 'Sales Page Audit',    description: 'Eyeball your page like a buyer would',       icon: 'Eye',           tone: 'sky',    category: 'content' },
];

function DashboardScreen({ userFirstName, hasDna, onOpenTool, onSetupDna }) {
  return (
    <div className="page">
      <h1 className="title">{userFirstName ? `Welcome, ${userFirstName}` : 'Welcome'}</h1>
      <p className="subtitle">{hasDna ? 'Pick up where you left off, or try something new.' : 'Set up your business DNA to get started.'}</p>
      <GoldRule width={64} />

      {!hasDna && (
        <>
          <Eyebrow>Get started</Eyebrow>
          <div className="stack">
            <DnaCard hasDna={false} onClick={onSetupDna} />
          </div>
        </>
      )}

      <Eyebrow>Favorites</Eyebrow>
      <div className="stack">
        {FAVORITE_TOOLS.map(t => (
          <ToolCard key={t.id} name={t.name} description={t.description} icon={t.icon} tone={t.tone} onClick={() => onOpenTool?.(t.id)} />
        ))}
      </div>

      <Eyebrow>Recent</Eyebrow>
      <div className="stack">
        {ALL_TOOLS.slice(3, 6).map(t => (
          <ToolCard key={t.id} name={t.name} description={t.description} icon={t.icon} tone={t.tone} onClick={() => onOpenTool?.(t.id)} />
        ))}
      </div>
    </div>
  );
}

/* ========== TOOLS LIST ========== */
const CATEGORIES = [
  { id: 'all',      label: 'All' },
  { id: 'content',  label: 'Content' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'offers',   label: 'Offers' },
  { id: 'mindset',  label: 'Mindset' },
];

function ToolsScreen({ onOpenTool }) {
  const [cat, setCat] = uS('all');
  const [q, setQ]   = uS('');
  const filtered = ALL_TOOLS.filter(t =>
    (cat === 'all' || t.category === cat) &&
    (q === '' || t.name.toLowerCase().includes(q.toLowerCase()) || t.description.toLowerCase().includes(q.toLowerCase()))
  );
  return (
    <div className="page">
      <h1 className="title">Tools</h1>
      <p className="subtitle">Every tool in the library. One place to think, write, and ship.</p>
      <GoldRule width={64} />

      <div style={{ position: 'relative', marginBottom: 16 }}>
        <input
          className="input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search tools…"
          style={{ paddingLeft: 44 }}
        />
        <div style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--fg-muted)' }}>
          <Icon name="Search" size={18} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
        {CATEGORIES.map(c => (
          <button
            key={c.id}
            onClick={() => setCat(c.id)}
            style={{
              padding: '8px 14px',
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              minHeight: 36,
              border: '1px solid ' + (cat === c.id ? 'var(--accent)' : 'var(--border)'),
              background: cat === c.id ? 'var(--accent)' : '#fff',
              color: cat === c.id ? '#fff' : 'var(--fg)',
              transition: 'all 0.15s',
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="stack">
        {filtered.map(t => (
          <ToolCard key={t.id} name={t.name} description={t.description} icon={t.icon} tone={t.tone} onClick={() => onOpenTool?.(t.id)} />
        ))}
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '32px 0', color: 'var(--fg-muted)' }}>
            No tools match that search.
          </div>
        )}
      </div>
    </div>
  );
}

/* ========== COPY STUDIO MODE-SELECT ========== */
const COPY_MODES = [
  { id: 'long',   icon: 'FileText', label: 'Long-form post',   desc: 'Email, LinkedIn essay, blog. Develop a complete idea.' },
  { id: 'short',  icon: 'Type',     label: 'Short post',       desc: 'A single observation, line, or hook.' },
  { id: 'thread', icon: 'Share2',   label: 'Thread or carousel', desc: 'Walk through an idea in steps.' },
  { id: 'sales',  icon: 'CreditCard', label: 'Sales copy',     desc: 'Page headline, offer block, CTA.' },
];

function CopyStudioScreen({ onBack, onPickMode }) {
  return (
    <div className="page">
      <button onClick={onBack} className="btn-ghost btn" style={{ marginLeft: -12, marginBottom: 8 }}>
        <Icon name="ArrowLeft" size={16} /> Back
      </button>
      <h1 className="title">Copy Studio</h1>
      <p className="subtitle">What are we writing today?</p>
      <GoldRule width={64} />
      <div className="stack" style={{ gap: 12 }}>
        {COPY_MODES.map(m => (
          <button key={m.id} className="mode-card" onClick={() => onPickMode?.(m.id)}>
            <div className="icon-tile"><Icon name={m.icon} size={22} /></div>
            <div>
              <div className="name">{m.label}</div>
              <div className="desc">{m.desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ========== AI ZAC CHAT ========== */
function AIZacScreen({ onBack }) {
  const [input, setInput] = uS('');
  const [messages, setMessages] = uS([]);
  const [thinking, setThinking] = uS(false);
  const feedRef = uR(null);

  uE(() => {
    if (feedRef.current) feedRef.current.scrollTop = feedRef.current.scrollHeight;
  }, [messages, thinking]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages(m => [...m, { from: 'user', text }]);
    setInput('');
    setThinking(true);
    setTimeout(() => {
      setThinking(false);
      setMessages(m => [...m, { from: 'bot', text: pickReply(text) }]);
    }, 1100);
  };

  const isEmpty = messages.length === 0;

  return (
    <div className="chat-shell">
      <div className="chat-header">
        <div className="inner">
          <div className="left">
            <IconButton name="ArrowLeft" ariaLabel="Back" onClick={onBack} />
            <Icon name="Compass" size={22} color="var(--accent)" />
            <div className="title" style={{ fontFamily: 'var(--font-heading)' }}>AI Zac</div>
          </div>
          <div className="right">
            <IconButton name="Plus" ariaLabel="New chat" onClick={() => setMessages([])} />
          </div>
        </div>
      </div>
      <div className="chat-feed" ref={feedRef}>
        <div className="inner">
          {isEmpty ? (
            <div className="chat-empty">
              <div className="blob"><Icon name="Compass" size={28} /></div>
              <h2>What are you working on?</h2>
              <p>Tell me where you're stuck. I'll think out loud with you.</p>
            </div>
          ) : (
            <>
              {messages.map((m, i) => <ChatBubble key={i} from={m.from}>{m.text}</ChatBubble>)}
              {thinking && <ThinkingBubble />}
            </>
          )}
        </div>
      </div>
      <ChatComposer
        value={input}
        onChange={setInput}
        onSend={send}
        placeholder="Ask AI Zac anything…"
      />
    </div>
  );
}

function pickReply(prompt) {
  const lower = prompt.toLowerCase();
  if (lower.includes('offer') || lower.includes('product')) {
    return "Let's start with the buyer. Who is this for, and what's the one job they hire it to do? If you can answer that in one sentence, the offer almost designs itself.";
  }
  if (lower.includes('audience') || lower.includes('client')) {
    return "Right-fit clients aren't a demographic — they're a worldview. What does your best-fit client believe that most people in your category don't?";
  }
  if (lower.includes('stuck') || lower.includes('block')) {
    return "Being stuck usually means you're trying to skip a step. What's the smallest version of this you could ship by Friday and learn from?";
  }
  return "Good question. Tell me a little more — what's the goal, and what have you tried so far?";
}

/* ========== DNA INTAKE ========== */
const DNA_STEPS = [
  { eyebrow: 'Step 1 of 4 · Your business', q: 'What does your business help people do?',
    placeholder: 'In one sentence: who do you help, and what changes for them?' },
  { eyebrow: 'Step 2 of 4 · Your buyer',    q: "Who is your right-fit buyer?",
    placeholder: 'A real person or composite. Their context, not just their demographics.' },
  { eyebrow: 'Step 3 of 4 · Your voice',    q: 'How would you describe your voice?',
    placeholder: 'Three adjectives + a sentence about what you sound like at your best.' },
  { eyebrow: 'Step 4 of 4 · Your edge',     q: 'What do you believe that most people in your category don\'t?',
    placeholder: 'Your point of view. The thing you say that makes some people lean in and others bounce.' },
];

function DNAScreen({ onBack, onComplete }) {
  const [step, setStep] = uS(0);
  const [answers, setAnswers] = uS(['', '', '', '']);
  const isLast = step === DNA_STEPS.length - 1;
  const canAdvance = answers[step].trim().length > 4;

  const next = () => {
    if (isLast) onComplete?.(answers);
    else setStep(step + 1);
  };

  const prev = () => {
    if (step === 0) onBack?.();
    else setStep(step - 1);
  };

  const update = (v) => {
    const a = [...answers];
    a[step] = v;
    setAnswers(a);
  };

  const s = DNA_STEPS[step];

  return (
    <div style={{ minHeight: '100dvh', background: 'var(--bg)' }}>
      <div className="chat-header">
        <div className="inner">
          <div className="left">
            <IconButton name="ArrowLeft" ariaLabel="Back" onClick={prev} />
            <div className="title" style={{ fontFamily: 'var(--font-heading)' }}>Business DNA</div>
          </div>
          <div className="right" style={{ color: 'var(--fg-muted)', fontSize: 13 }}>{step + 1} / {DNA_STEPS.length}</div>
        </div>
        <div style={{ maxWidth: 640, margin: '12px auto 0' }}>
          <div className="progress"><div style={{ width: `${((step + 1) / DNA_STEPS.length) * 100}%` }} /></div>
        </div>
      </div>

      <div className="dna-step">
        <div className="step-eyebrow"><Eyebrow>{s.eyebrow}</Eyebrow></div>
        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--fg-strong)', fontWeight: 700 }}>{s.q}</h2>
        <TextArea value={answers[step]} onChange={update} placeholder={s.placeholder} rows={6} withVoice autoFocus />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24 }}>
          <GhostButton onClick={prev}>Back</GhostButton>
          <PrimaryButton onClick={next} disabled={!canAdvance} iconRight={isLast ? 'Check' : 'ArrowRight'}>
            {isLast ? 'Save DNA' : 'Continue'}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

window.LandingScreen = LandingScreen;
window.DashboardScreen = DashboardScreen;
window.ToolsScreen = ToolsScreen;
window.CopyStudioScreen = CopyStudioScreen;
window.AIZacScreen = AIZacScreen;
window.DNAScreen = DNAScreen;
