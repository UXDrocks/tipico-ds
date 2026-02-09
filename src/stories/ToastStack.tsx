import React, { useEffect } from 'react';

import { Toast } from './Toast';

import './toast-stack.css';

export type ToastVariant = 'neutral' | 'info' | 'success' | 'error' | 'warning';

export interface ToastItem {
  id: string;
  variant?: ToastVariant;
  message: string;
  showIcon?: boolean;
  /** Auto-dismiss after ms; omit for no auto-dismiss */
  duration?: number;
}

export interface ToastStackProps {
  /** Toasts to show (newest at bottom or top – we show newest at bottom of list so it appears above previous) */
  toasts: ToastItem[];
  /** Remove a toast by id */
  onDismiss: (id: string) => void;
  /** Optional max toasts visible */
  max?: number;
  /** Position from bottom (default 1.5rem) */
  bottom?: string;
  /** Optional class for the stack container */
  className?: string;
}

/** Fixed stack of toasts at bottom-center; each toast animates in from the bottom for real-time feedback. */
export const ToastStack = ({
  toasts,
  onDismiss,
  max = 5,
  bottom = 'var(--space-6)',
  className = '',
}: ToastStackProps) => {
  const visible = max ? toasts.slice(-max) : toasts;

  return (
    <div
      className={`tipico-toast-stack ${className}`.trim()}
      style={{ '--toast-stack-bottom': bottom } as React.CSSProperties}
      role="region"
      aria-label="Notifications"
    >
      {visible.map((toast) => (
        <ToastStackItem
          key={toast.id}
          toast={toast}
          onDismiss={() => onDismiss(toast.id)}
        />
      ))}
    </div>
  );
};

function ToastStackItem({
  toast,
  onDismiss,
}: {
  toast: ToastItem;
  onDismiss: () => void;
}) {
  useEffect(() => {
    if (toast.duration == null || toast.duration <= 0) return;
    const t = setTimeout(onDismiss, toast.duration);
    return () => clearTimeout(t);
  }, [toast.id, toast.duration, onDismiss]);

  return (
    <div className="tipico-toast-stack__item">
      <Toast
        variant={toast.variant ?? 'neutral'}
        message={toast.message}
        showIcon={toast.showIcon ?? true}
        onClose={onDismiss}
        closeLabel="Dismiss"
      />
    </div>
  );
}
