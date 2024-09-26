export default function Button({ type = 'button', value = '', className = '', disabled, children, onClick }) {
  return (
    <button
      type={type}
      value={value}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
