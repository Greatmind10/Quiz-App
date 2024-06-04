
import Quiz from './component/Quiz';
import { jsQuizz } from './component/constants';
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
