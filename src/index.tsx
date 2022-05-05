import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import components from '@/components/mdx';
import App from '@/App';
import '@/index.css';
import './i18n';

const container = document.querySelector('#root') as Element;
const root = createRoot(container);
root.render(
	<StrictMode>
		<MDXProvider components={components}>
			<Router>
				<App />
			</Router>
		</MDXProvider>
	</StrictMode>
);
