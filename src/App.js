import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import getData from './store/Actions';

function App() {

  const dispatch = useDispatch()
  const store = useSelector(state => state.app)
  const store2 = useSelector(state => state.auth)
  const update_data = () => {
    dispatch(getData())
  }
  console.log("store====>", store)
  return (
    <div className="App">
      <h1>{store.user}</h1>
      <h2>{store2.email}</h2>
      <button onClick={update_data}>Update Data</button>
      <button onClick={() => dispatch({ type: "UPDATE", new_user: "Tayyab Hussain" })}>Update Name</button>
    </div>
  );
}

export default App;
