import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Loader2, 
  Inbox, 
  Lock, 
  ShieldAlert, 
  AlertCircle, 
  CheckCircle2, 
  Info, 
  X, 
  Wifi, 
  Clock 
} from 'lucide-react';
import './UiStateComponents.css';

// 1. Loading Spinner
export function LoadingSpinner({ text = 'Loading Securiq...' }) {
  return (
    <div className="ui-loading-wrapper">
      <Loader2 size={36} className="spinner-icon" />
      <span className="loading-text">{text}</span>
    </div>
  );
}

// 2. Glassmorphism Shimmer Skeleton
export function LoadingSkeleton({ lines = 3, height = 24 }) {
  return (
    <div className="ui-skeleton-box">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="skeleton-line" style={{ height: `${height}px` }} />
      ))}
    </div>
  );
}

// 3. Slow Network Loading (>3 seconds detection)
export function SlowNetworkLoading({ onCancel }) {
  const [isSlow, setIsSlow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSlow(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="ui-loading-wrapper">
      <Loader2 size={36} className="spinner-icon" />
      <span className="loading-text">
        {isSlow ? "Still working on it... checking connection" : "Loading data..."}
      </span>
      {isSlow && (
        <div className="slow-network-hint">
          <Clock size={14} />
          <span>Connection appears slow</span>
        </div>
      )}
    </div>
  );
}

// 4. Empty State
export function EmptyState({ 
  icon: Icon = Inbox, 
  title = 'No Data Available', 
  description = 'There are no active items or records to display at this time.',
  actionText,
  onAction
}) {
  return (
    <div className="ui-empty-wrapper">
      <div className="empty-icon-badge">
        <Icon size={32} color="#475569" />
      </div>
      <h3 className="empty-title">{title}</h3>
      <p className="empty-desc">{description}</p>
      {actionText && onAction && (
        <button className="btn-empty-action" onClick={onAction}>
          {actionText}
        </button>
      )}
    </div>
  );
}

// 5. Permission Denied / Workspace Lockout Overlay
export function PermissionDeniedState({ title = 'Permission Denied', description = 'You do not have administrative access to view or modify this workspace setting.' }) {
  return (
    <div className="ui-permission-wrapper">
      <div className="permission-icon-badge">
        <Lock size={32} color="#ef4444" />
      </div>
      <span className="permission-pill">RESTRICTED ACCESS</span>
      <h3 className="permission-title">{title}</h3>
      <p className="permission-desc">{description}</p>
    </div>
  );
}

// 6. Inline Input Validation Error
export function InlineError({ message }) {
  if (!message) return null;
  return (
    <div className="ui-inline-error">
      <AlertCircle size={14} />
      <span>{message}</span>
    </div>
  );
}

// 7. Floating Glassmorphism Toast Notification
export function ToastNotification({ toast, onDismiss }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(toast.id);
    }, toast.duration || 3200);
    return () => clearTimeout(timer);
  }, [toast, onDismiss]);

  const icons = {
    success: <CheckCircle2 size={18} color="#10b981" />,
    error: <AlertCircle size={18} color="#ef4444" />,
    info: <Info size={18} color="#0284c7" />,
  };

  return (
    <motion.div 
      className={`toast-item toast-${toast.type || 'info'}`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.25 }}
    >
      <div className="toast-icon">
        {icons[toast.type || 'info']}
      </div>
      <span className="toast-msg">{toast.message}</span>
      <button className="toast-close" onClick={() => onDismiss(toast.id)}>
        <X size={14} />
      </button>
    </motion.div>
  );
}
