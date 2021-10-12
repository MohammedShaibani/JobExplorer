import './App.css';
import Jobs from './Jobs'

const mockJobs = [
  {title: 'SWE Job 1', company: 'google'},
  {title: 'SWE Job 1', company: 'facebook'},
  {title: 'SWE Job 1', company: 'apple'},
  {title: 'SWE Job 1', company: 'microsoft'}
]

function App() {
  return (
    <div className="App">
      <Jobs jobs= {mockJobs} />
    </div>
  );
}

export default App;
