import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // Ei method-ta kono error hole state update kore
  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  // Ei method-ta error details log korar jonne
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    // Jodi error hoy...
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', border: '2px solid red', margin: '20px' }}>
          <h2>Oops! Kichu ekta crash koreche.</h2>
          <p>Error Message:</p>
          <pre style={{ color: 'red', background: '#f0f0f0', padding: '10px' }}>
            {this.state.error && this.state.error.toString()}
          </pre>
        </div>
      );
    }

    // Jodi kono error na thake, tahole normal-vabei 'children'-ke dekhabe
    return this.props.children;
  }
}

export default ErrorBoundary;
