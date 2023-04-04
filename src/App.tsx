import { lazy } from 'react';

const Routing = lazy(async () => await import('./view/routing'));

function App() {

  const currentUrl = window.location.pathname.split('/');
  if (currentUrl.every(elem => elem === '')) window.location.assign("Home")

  return (
    <main className="App">
      <Routing />
    </main>
  )
}

export default App
