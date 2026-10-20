/* AI Library — Shell components: Sidebar, Header, MobileNav, ToolCard, DnaCard */

const NAV_ITEMS = [
  { key: 'home',     label: 'Home',     icon: 'Home',       route: 'dashboard' },
  { key: 'tools',    label: 'Tools',    icon: 'Wrench',     route: 'tools' },
  { key: 'history',  label: 'History',  icon: 'FolderOpen', route: 'history' },
  { key: 'memories', label: 'Memories', icon: 'Brain',      route: 'memories' },
  { key: 'profile',  label: 'Profile',  icon: 'User',       route: 'profile' },
];

function Sidebar({ active, onNavigate, onSignOut }) {
  return (
    <aside className="sidebar">
      <div className="brand"><h2>AI Library</h2></div>
      <hr className="gold-rule" />
      <nav>
        {NAV_ITEMS.map(item => (
          <button
            key={item.key}
            className={`nav-item${active === item.route ? ' active' : ''}`}
            onClick={() => onNavigate?.(item.route)}
          >
            <Icon name={item.icon} size={20} />
            {item.label}
          </button>
        ))}
      </nav>
      <div className="signout">
        <button onClick={onSignOut}>
          <Icon name="LogOut" size={20} />
          Sign out
        </button>
      </div>
    </aside>
  );
}

function Header({ userName }) {
  return (
    <header className="app-header">
      <div className="welcome">
        {userName && <>Welcome back, <strong>{userName}</strong></>}
      </div>
    </header>
  );
}

function MobileNav({ active, onNavigate }) {
  return (
    <nav className="mobile-nav">
      {NAV_ITEMS.map(item => (
        <button
          key={item.key}
          className={`item${active === item.route ? ' active' : ''}`}
          onClick={() => onNavigate?.(item.route)}
        >
          <Icon name={item.icon} size={22} />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

function Shell({ active, onNavigate, userName, children }) {
  return (
    <div className="shell">
      <Sidebar active={active} onNavigate={onNavigate} />
      <div className="shell-main">
        <Header userName={userName} />
        <div className="shell-content">{children}</div>
      </div>
    </div>
  );
}

function ToolCard({ name, description, icon, tone = 'green', onClick }) {
  return (
    <a className="tool-card" onClick={onClick} role="button" tabIndex={0}>
      <div className={`icon-tile cap-${tone}`}><Icon name={icon} size={22} strokeWidth={2.2} /></div>
      <div className="body">
        <div className="name">{name}</div>
        <div className="desc">{description}</div>
      </div>
      <Icon name="ChevronRight" size={20} className="chev" />
    </a>
  );
}

function DnaCard({ hasDna = false, onClick }) {
  return (
    <a className="dna-card" onClick={onClick} role="button" tabIndex={0}>
      <div className="icon-tile"><Icon name="Dna" size={24} /></div>
      <div>
        <div className="name">Business DNA</div>
        <div className="desc">{hasDna ? 'Update your business foundation' : 'Set up your foundation first'}</div>
      </div>
    </a>
  );
}

window.Sidebar = Sidebar;
window.Header = Header;
window.MobileNav = MobileNav;
window.Shell = Shell;
window.ToolCard = ToolCard;
window.DnaCard = DnaCard;
window.NAV_ITEMS = NAV_ITEMS;
