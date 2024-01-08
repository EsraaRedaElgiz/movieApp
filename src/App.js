import { BrowserRouter } from 'react-router-dom';
import Router from './routing/Routes';
import { useSelector } from 'react-redux';
function App() {
  const language = useSelector(state => state.changeLanguage.language)
  return (
    <div className={`${language === "en" ? "text-left" : "text-right"}`} dir={`${language === "en" ? "ltr" : "rtl"}`}  >
      <BrowserRouter>
        <div >
          <div>
            <Router />
          </div>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
