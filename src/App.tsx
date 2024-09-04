import './App.css';
import { User, Countries } from './Person';
import { UserProvider } from './UserContextProvider';

function App() {

  return (
    <UserProvider>
      <User name={"Reyna"} age={27} isMarried={false} country={Countries.Philippines} />
      <User name={"Tine"} age={26} isMarried={false} country={Countries.UnitedStates}/>
      <User name={"Toffee"} age={3} isMarried={false} country={Countries.France} />
    </UserProvider>
  )
}

export default App
