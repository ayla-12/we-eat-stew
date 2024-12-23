import React, { Component, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

// ErrorBoundary 컴포넌트의 상태와 props 타입 정의
interface State {
	hasError: boolean;
}

interface Props {
	children: ReactNode; // 자식 요소는 ReactNode 타입으로 정의
}

class ErrorBoundary extends Component<Props, State> {
	state: State = { hasError: false };

	// getDerivedStateFromError에서 반환할 타입을 명시적으로 정의
	static getDerivedStateFromError(_: Error): State {
		return { hasError: true };
	}

	// componentDidCatch의 error와 info 타입 정의
	componentDidCatch(error: Error, info: React.ErrorInfo): void {
		console.log('ErrorBoundary caught an error:', error, info);
	}

	render() {
		if (this.state.hasError) {
			// 모든 오류는 /unexpected-error 페이지로 리다이렉트
			return <Navigate to="/unexpected-error" />;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
