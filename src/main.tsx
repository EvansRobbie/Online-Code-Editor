import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // remove the strict mode to avoid the code editor being rendered twive   https://www.heissenberger.at/en/blog/react-components-reder-twice/
  // <React.StrictMode>
    <App />
  
)
