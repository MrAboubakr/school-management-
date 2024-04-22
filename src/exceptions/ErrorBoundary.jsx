import React from 'react';

// Replace this with your actual error logging implementation
const logErrorToMyService = (error, errorInfo) => {
  // Example: log the error and errorInfo to the console
  console.error('Error:', error);
  console.error('Error Info:', errorInfo);
  // You can send the error to a logging service here
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error using your custom logging function
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          {/* Log the error and error info in the UI for debugging */}
          <p>Error: {JSON.stringify(this.state.error)}</p>
          <p>Error Info: {JSON.stringify(this.state.errorInfo)}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
