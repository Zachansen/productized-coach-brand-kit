/* AI Library — Chat components */

function ChatBubble({ from, children }) {
  return (
    <div className={`bubble-row ${from}`}>
      <div className={`bubble ${from}`}>{children}</div>
    </div>
  );
}

function ThinkingBubble() {
  return (
    <div className="bubble-row bot">
      <div className="bubble bot">
        <span className="typing">
          <Icon name="Loader" size={14} />
          Thinking…
        </span>
      </div>
    </div>
  );
}

function ChatComposer({ value, onChange, onSend, placeholder = 'Type your message…', extraRow }) {
  const ref = React.useRef(null);
  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) onSend?.();
    }
  };
  return (
    <div className="chat-composer">
      <div className="inner">
        <TextArea
          fwdRef={ref}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={1}
          onKeyDown={handleKey}
          withVoice
        />
        <IconButton name="Send" ariaLabel="Send" onClick={() => value.trim() && onSend?.()} className="icon-btn send" />
      </div>
      {extraRow && <div className="gen-row">{extraRow}</div>}
    </div>
  );
}

window.ChatBubble = ChatBubble;
window.ThinkingBubble = ThinkingBubble;
window.ChatComposer = ChatComposer;
