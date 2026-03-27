import { useCart } from '../context/CartContext';

const Toast = () => {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div className={`toast ${toast.type}`}>
      <span className="toast-icon">{toast.type === 'success' ? '✓' : '!'}</span>
      <span className="toast-message">{toast.message}</span>
    </div>
  );
};

export default Toast;