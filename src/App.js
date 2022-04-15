import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Header from './components/Header';
import Education from './components/Education';
import Technologies from './components/Technologies';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import RelevantCoursework from './components/RelevantCoursework';
import LeadershipExperience from './components/LeadershipExperience';


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
    </>
  );
}

export default App;
