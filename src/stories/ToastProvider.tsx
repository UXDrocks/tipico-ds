import React, { useCallback, useState } from 'react';

import { ToastStack } from './ToastStack';

import type { ToastItem, ToastVariant } from './ToastStack';

export interface ToastOptions {
  variant?: ToastVariant;
  message: string;
  duration?: number;
}

interface ToastContextValue {
  addToast: (options: ToastOptions) => void;
  toasts: ToastItem[];
  dismiss: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextValue | null>(null);

let idCounter = 0;
function nextId() {
  return `toast-${++idCounter}`;
}

export interface ToastProviderProps {
  children: React.ReactNode;
  /** Max toasts shown at once */
  max?: number;
  /** Distance from bottom (e.g. "1.5rem") */
  bottom?: string;
}

/** Provides toast stack and useToast(); wrap your app (or story) to get real-time feedback from actions. */
export function ToastProvider({
  children,
  max = 5,
  bottom = 'var(--space-6)',
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    ({ variant = 'neutral', message, duration = 5000 }: ToastOptions) => {
      const id = nextId();
      setToasts((prev) => [...prev, { id, variant, message, duration }]);
    },
    []
  );

  const value: ToastContextValue = { addToast, toasts, dismiss };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastStack toasts={toasts} onDismiss={dismiss} max={max} bottom={bottom} />
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const ctx = React.useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return ctx;
}
