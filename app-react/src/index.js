import './public-path'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let root = null;
function render(props = {}) {
    let { container } = props
    root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log('react app bootstraped');
}
export async function mount(props) {
    console.log('react props from main framework', props);
    render(props);
}
export async function unmount() {
    root.unmount();
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
