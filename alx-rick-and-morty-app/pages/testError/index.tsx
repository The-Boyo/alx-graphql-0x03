import ErrorBoundary from "@/components/ErrorBoundary";
import ErrorProneComponent from "@/components/ErrorProneComponent";

const TestError: React.FC = () => {
	return (
		<ErrorBoundary>
			<ErrorProneComponent />
		</ErrorBoundary>
	);
};

export default TestError;
