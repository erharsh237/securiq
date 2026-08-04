import React from 'react';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';
import './ErrorBoundary.css';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Unhandled React Error Boundary Caught:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-wrapper">
          <div className="error-boundary-card">
            <div className="error-icon-badge">
              <AlertTriangle size={32} color="#ef4444" />
            </div>
            
            <span className="error-pill-tag">500 APPLICATION CRASH</span>
            <h1 className="error-title">Something Went Wrong</h1>
            <p className="error-desc">
              Securiq encountered an unhandled runtime exception. Don't worry, your data and infrastructure remain 100% secure.
            </p>

            {this.state.error && (
              <div className="error-log-snippet">
                <code>{this.state.error.toString()}</code>
              </div>
            )}

            <div className="error-actions-row">
              <button className="btn-error-reload" onClick={this.handleReload}>
                <RefreshCw size={16} />
                <span>Reload App</span>
              </button>

              <button className="btn-error-home" onClick={this.handleGoHome}>
                <Home size={16} />
                <span>Go to Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
