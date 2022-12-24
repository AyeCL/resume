import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Header from './components/Header';
import Education from './components/Education';
import Technologies from './components/Technologies';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import RelevantCoursework from './components/RelevantCoursework';
import LeadershipExperience from './components/LeadershipExperience';
import Footer from './components/Footer';
import useLocalStorage from 'use-local-storage'

library.add(fas, fab);

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  return (
    <div className='App' data-theme={theme}>
      <Header />
      <Education theme={theme} setTheme={setTheme} />
      <Technologies />
      <WorkExperience />
      <Projects />
      {/* <RelevantCoursework /> */}
      <LeadershipExperience />
      <Footer />
    </div>
  );
}

export default App;
