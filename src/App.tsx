import './App.css';
import { User } from './Person';
import { UserProvider } from './UserContextProvider';

function App() {

  return (
    <UserProvider>
      <User name={"Reyna"} age={27} isMarried={false} />
      <User name={"Tine"} age={26} isMarried={false} />
      <User name={"Toffee"} age={3} isMarried={false} />
    </UserProvider>
  )
}

export default App
