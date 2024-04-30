
import ToggleBtn from './components/ToggleBtn/ToggleBtn';
import Home from './pages/Home/Home/Home';

import { useTheme } from './ThemeProvider/ThemeProvider';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme} app`}>
      <div className="card">
        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <ToggleBtn />
        </div>
        <h1>Toggle Theme App</h1>
        <h4>Dark Mode is {theme === 'dark' ? 'On' : 'Off'}</h4>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
