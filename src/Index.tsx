import ReactDOM from 'react-dom/client'
import App from './App';

const rootElement = document.getElementById('root')
let root: ReactDOM.Root | null = null;

if (rootElement !== null) {
    root = ReactDOM.createRoot(rootElement);

    root.render(App());

} else {
    throw new Error('no root element found, check if the elements id is correct')
}

