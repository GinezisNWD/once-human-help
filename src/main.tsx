import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'normalize.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { setupStore } from './store/store.ts'

const store = setupStore()

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
