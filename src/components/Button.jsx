export default function Button({ type = 'button', value = '', className = '', disabled, children, onClick, clickable = false }) {

  const handleClick = (e) => {
    // Active state.
    if (clickable) {
      e.target.parentElement.querySelectorAll('.active').forEach(e =>
        e.classList.remove('active')
      );
      e.target.classList.add('active');
    }

    // Trigger external onClick if provided.
    if (onClick) onClick(e);
  };

  return (
    <button
      type={type}
      value={value}
      onClick={handleClick}
      className={className}
      disabled={disabled}
    >
      <span className="pointer-events-none">
        {children}
      </span>
    </button>
  );
}
