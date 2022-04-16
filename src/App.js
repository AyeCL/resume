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

library.add(fas, fab);

function App() {
  return (
    <>
      <Header />
      <Education />
      <Technologies />
      <WorkExperience />
      <Projects />
      <RelevantCoursework />
      <LeadershipExperience />
      <Footer />
    </>
  );
}

export default App;
