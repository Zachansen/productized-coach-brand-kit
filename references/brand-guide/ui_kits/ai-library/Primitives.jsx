/* AI Library — Buttons, Inputs, GoldRule, HeroLogoBlock, Eyebrow */

const { useState, useRef, useEffect } = React;

function GoldRule({ width, style }) {
  return <hr className="gold-rule" style={{ width, ...style }} />;
}

function Eyebrow({ children, style }) {
  return <div className="label-eyebrow" style={style}>{children}</div>;
}

function HeroLogoBlock({ icon = 'PenTool', variant = 'dark' }) {
  return (
    <div className={`hero-block${variant === 'ok' ? ' ok' : ''}`}>
      <Icon name={icon} size={32} />
    </div>
  );
}

function PrimaryButton({ children, onClick, icon, iconRight, type = 'button', disabled }) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className="btn btn-primary">
      {icon && <Icon name={icon} size={16} />}
      {children}
      {iconRight && <Icon name={iconRight} size={18} />}
    </button>
  );
}

function OutlineButton({ children, onClick, icon }) {
  return (
    <button onClick={onClick} className="btn btn-outline">
      {icon && <Icon name={icon} size={16} />}
      {children}
    </button>
  );
}

function DarkButton({ children, onClick, icon }) {
  return (
    <button onClick={onClick} className="btn btn-dark">
      {icon && <Icon name={icon} size={16} />}
      {children}
    </button>
  );
}

function GhostButton({ children, onClick }) {
  return <button onClick={onClick} className="btn btn-ghost">{children}</button>;
}

function IconButton({ name, onClick, size = 20, ariaLabel, className = 'icon-btn' }) {
  return (
    <button onClick={onClick} aria-label={ariaLabel} className={className}>
      <Icon name={name} size={size} />
    </button>
  );
}

function TextInput({ value, onChange, placeholder, autoFocus }) {
  return (
    <input
      className="input"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
  );
}

function TextArea({ value, onChange, placeholder, rows = 4, autoFocus, withVoice = false, onKeyDown, fwdRef }) {
  return (
    <div className="field-wrap">
      <textarea
        ref={fwdRef}
        className="textarea"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        autoFocus={autoFocus}
        onKeyDown={onKeyDown}
        style={{ paddingRight: withVoice ? 56 : undefined }}
      />
      {withVoice && (
        <button className="voice" aria-label="Voice input">
          <Icon name="Mic" size={18} />
        </button>
      )}
    </div>
  );
}

window.GoldRule = GoldRule;
window.Eyebrow = Eyebrow;
window.HeroLogoBlock = HeroLogoBlock;
window.PrimaryButton = PrimaryButton;
window.OutlineButton = OutlineButton;
window.DarkButton = DarkButton;
window.GhostButton = GhostButton;
window.IconButton = IconButton;
window.TextInput = TextInput;
window.TextArea = TextArea;
