
import Quiz from './components/Quiz';
import { jsQuizz } from './components/constants';
function App() {

  return (
    <>
      <div>
          <Quiz questions={jsQuizz.questions }/>
        </div>
    </>
  )
}

export default App
