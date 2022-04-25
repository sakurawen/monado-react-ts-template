import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import components from '@/components/mdx';
import { Provider } from 'react-redux';
import store from '@/store';
import App from '@/App';
import '@/index.css';
import './i18n';

const container = document.querySelector('#root') as Element;
const root = createRoot(container);
root.render(
	<StrictMode>
		<MDXProvider components={components}>
			<Provider store={store}>
				<Router>
					<App />
				</Router>
			</Provider>
		</MDXProvider>
	</StrictMode>
);
