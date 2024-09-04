import './App.css';
import { User } from './Person';

function App() {

  return (
    <>
      <User name={"Reyna"} age={27} isMarried={false} />
      <User name={"Tine"} age={26} isMarried={false} />
      <User name={"Toffee"} age={3} isMarried={false} />
    </>
  )
}

export default App
