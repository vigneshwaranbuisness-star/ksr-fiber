import { createContext, useContext, useMemo, useState } from 'react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [items, setItems] = useState([]);

  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setItems((current) => [...current, { id, message, type }]);

    setTimeout(() => {
      setItems((current) => current.filter((item) => item.id !== id));
    }, 3000);
  };

  const value = useMemo(() => ({ showToast }), []);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed right-5 top-5 z-50 space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className={`rounded-xl border px-4 py-3 text-sm shadow-soft ${
              item.type === 'error'
                ? 'border-rose-500/40 bg-rose-500/10 text-rose-200'
                : 'border-accent/40 bg-card text-white'
            }`}
          >
            {item.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used inside ToastProvider');
  }
  return context;
}
