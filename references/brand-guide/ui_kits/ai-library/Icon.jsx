/* AI Library — Lucide icon registry. Renders icons by name as inline SVG.
   Subset of lucide-react used in the product UI. */

const I = (paths, opts = {}) => ({ paths, ...opts });

const ICONS = {
  // sidebar / nav
  Home: I([['m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'], ['polyline:9 22 9 12 15 12 15 22']]),
  Wrench: I([['M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z']]),
  FolderOpen: I([['m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2']]),
  Brain: I([['M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z'], ['M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z'], ['M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4'], ['M17.599 6.5a3 3 0 0 0 .399-1.375'], ['M6.003 5.125A3 3 0 0 0 6.401 6.5'], ['M3.477 10.896a4 4 0 0 1 .585-.396'], ['M19.938 10.5a4 4 0 0 1 .585.396'], ['M6 18a4 4 0 0 1-1.967-.516'], ['M19.967 17.484A4 4 0 0 1 18 18']]),
  User: I([['M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'], ['circle:12,7,4']]),
  LogOut: I([['M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'], ['polyline:16 17 21 12 16 7'], ['line:21,12,9,12']]),

  // common
  ArrowLeft: I([['line:19,12,5,12'], ['polyline:12 19 5 12 12 5']]),
  ArrowRight: I([['line:5,12,19,12'], ['polyline:12 5 19 12 12 19']]),
  ChevronRight: I([['polyline:9 18 15 12 9 6']]),
  ChevronDown: I([['polyline:6 9 12 15 18 9']]),
  Plus: I([['line:12,5,12,19'], ['line:5,12,19,12']]),
  Send: I([['M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z'], ['path:m21.854 2.147-10.94 10.939']]),
  Mic: I([['rect:9,2,6,11,2'], ['path:M19 10v2a7 7 0 0 1-14 0v-2'], ['line:12,19,12,22']]),
  Loader: I([['line:12,2,12,6'], ['line:12,18,12,22'], ['line:4.93,4.93,7.76,7.76'], ['line:16.24,16.24,19.07,19.07'], ['line:2,12,6,12'], ['line:18,12,22,12'], ['line:4.93,19.07,7.76,16.24'], ['line:16.24,7.76,19.07,4.93']]),
  Check: I([['polyline:20 6 9 17 4 12']]),
  Sparkles: I([['path:M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z']]),

  // tools / dashboard
  Star: I([['polygon:12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2']]),
  Dna: I([['path:M2 15c6.667-6 13.333 0 20-6'], ['path:M9 22c1.798-1.998 2.518-3.995 2.807-5.993'], ['path:M15 2c-1.798 1.998-2.518 3.995-2.807 5.993'], ['path:m17 6-2.5-2.5'], ['path:m14 8-1-1'], ['path:m7 18 2.5 2.5'], ['path:m10 16 1 1'], ['path:m22 9-3 3'], ['path:m5 12-3 3']]),
  FileText: I([['path:M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'], ['polyline:14 2 14 8 20 8'], ['line:16,13,8,13'], ['line:16,17,8,17']]),
  Sunrise: I([['path:M17 18a5 5 0 0 0-10 0'], ['line:12,2,12,9'], ['line:4.22,10.22,5.64,11.64'], ['line:1,18,3,18'], ['line:21,18,23,18'], ['line:18.36,11.64,19.78,10.22'], ['line:23,22,1,22'], ['polyline:8 6 12 2 16 6']]),
  ShoppingCart: I([['circle:8,21,1'], ['circle:19,21,1'], ['path:M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12']]),
  PenTool: I([['path:M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z'], ['path:m18 13-1.375-6.874a1 1 0 0 0-.748-.774L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.642a1 1 0 0 0 .774.748L13 17.625'], ['path:m2.3 2.3 7.286 7.286'], ['circle:11,11,2']]),
  MessageCircle: I([['path:M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z']]),
  Stethoscope: I([['path:M11 2v2'], ['path:M5 2v2'], ['path:M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1'], ['path:M8 15a6 6 0 0 0 12 0v-3'], ['circle:20,10,2']]),
  CheckCircle: I([['path:M22 11.08V12a10 10 0 1 1-5.93-9.14'], ['polyline:22 4 12 14.01 9 11.01']]),
  Compass: I([['circle:12,12,10'], ['polygon:16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76']]),
  Users: I([['path:M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'], ['circle:9,7,4'], ['path:M22 21v-2a4 4 0 0 0-3-3.87'], ['path:M16 3.13a4 4 0 0 1 0 7.75']]),
  Network: I([['rect:16,16,6,6,1'], ['rect:2,16,6,6,1'], ['rect:9,2,6,6,1'], ['path:M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3'], ['path:M12 12V8']]),
  ClipboardList: I([['rect:8,2,8,4,1'], ['path:M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'], ['path:M12 11h4'], ['path:M12 16h4'], ['path:M8 11h.01'], ['path:M8 16h.01']]),
  Crosshair: I([['circle:12,12,10'], ['line:22,12,18,12'], ['line:6,12,2,12'], ['line:12,6,12,2'], ['line:12,22,12,18']]),
  Megaphone: I([['path:m3 11 18-5v12L3 14v-3z'], ['path:M11.6 16.8a3 3 0 1 1-5.8-1.6']]),
  Mail: I([['rect:2,4,20,16,2'], ['path:m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7']]),
  Search: I([['circle:11,11,8'], ['line:21,21,16.65,16.65']]),

  // misc
  Type: I([['polyline:4 7 4 4 20 4 20 7'], ['line:9,20,15,20'], ['line:12,4,12,20']]),
  Share2: I([['circle:18,5,3'], ['circle:6,12,3'], ['circle:18,19,3'], ['line:8.59,13.51,15.42,17.49'], ['line:15.41,6.51,8.59,10.49']]),
  Heart: I([['path:M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z']]),
  Eye: I([['path:M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z'], ['circle:12,12,3']]),
  Layout: I([['rect:3,3,18,18,2'], ['line:3,9,21,9'], ['line:9,21,9,9']]),
  CreditCard: I([['rect:2,5,20,14,2'], ['line:2,10,22,10']]),
  ArrowUpRight: I([['line:7,17,17,7'], ['polyline:7 7 17 7 17 17']]),
  Video: I([['polygon:23 7 16 12 23 17 23 7'], ['rect:1,5,15,14,2']]),
};

function svgChild(token) {
  // token is a string, possibly prefixed with "tag:" — defaults to "path:"
  if (Array.isArray(token)) token = token[0];
  let tag = 'path', body = token;
  const idx = token.indexOf(':');
  const known = ['path', 'circle', 'line', 'polyline', 'polygon', 'rect'];
  if (idx > 0 && known.includes(token.slice(0, idx))) {
    tag = token.slice(0, idx); body = token.slice(idx + 1);
  }
  if (tag === 'path') return <path d={body} key={Math.random()} />;
  if (tag === 'circle') { const [cx, cy, r] = body.split(','); return <circle cx={cx} cy={cy} r={r} />; }
  if (tag === 'line')   { const [x1, y1, x2, y2] = body.split(','); return <line x1={x1} y1={y1} x2={x2} y2={y2} />; }
  if (tag === 'rect')   { const [x, y, w, h, rx] = body.split(','); return <rect x={x} y={y} width={w} height={h} rx={rx} />; }
  if (tag === 'polyline') return <polyline points={body} />;
  if (tag === 'polygon')  return <polygon points={body} />;
  return null;
}

function Icon({ name, size = 24, strokeWidth = 2, color, style, className, ...rest }) {
  const def = ICONS[name];
  if (!def) return null;
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke={color || 'currentColor'} strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round"
      style={style} className={className} {...rest}
    >
      {def.paths.map((p, i) => <React.Fragment key={i}>{svgChild(p)}</React.Fragment>)}
    </svg>
  );
}

window.Icon = Icon;
