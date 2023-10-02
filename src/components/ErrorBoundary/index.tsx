import { NotFound } from "../../pages";
import { Component, ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error | null, info: ErrorInfo): void {
    this.setState({ hasError: true });
    console.log(error, info);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <NotFound />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
