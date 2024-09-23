
import './App.css';

import {Routes, Route, Switch} from 'react-router-dom';
import Started from './loginComp/index.js';
import Created from "./Create/index.js"
import HomePage from './Home/index.js';
import TryIt from './Component/index.js';
import NoteState from './Context/noteState.js';
import MyNetwork from './Network/MyNetwork.js';
import Jobs from './Business/Jobs.js';
import Message from './Messages/Message.js';
import Notifications from './Notify/Notifications.js';
import ForBusiness from './BusinessGroup/ForBusiness.js';
import SignUp from './Signlog/SignUp.js';
import SignIn from './Signlog/SignIn.js';
import Emoji from './Home/Emoji.js';
import MediumCom from './comp/MediumCom.js';
import Focus from './comp/Group/JoinGroup/Focus/Focus.js';
import Create from './comp/Group/Create/Create.js';

function App() {
  const styles = {
    postWrapper: {
      'backgroundColor':'gainsboro'
    }
  }
  return (
    <div className="App" style={styles.postWrapper}>
      <noteContext >
    <NoteState>
      {/* <Switch> */}
    <Routes>
      <Route  path='/' element={<Started/>}>
      </Route>
      <Route path='/layout' element={<HomePage/>}></Route>
      <Route path='/group' element={<Focus/>}></Route>
      {/* <Route path='/addpost' element={<AddPost/>}></Route> */}
      <Route path='/emo' element={<Emoji/>}></Route>
      <Route path='/create' element={<Create/>}></Route>      
      <Route path='/layouts' element={<MediumCom/>}></Route>
      <Route path='/people' element={<MyNetwork/>}></Route>
      <Route path='/more' element={<Jobs/>}></Route>
      <Route path='/message' element={<Message/>}></Route>
      <Route path='/notify' element={<Notifications/>}></Route>
      <Route path='/business' element={<ForBusiness/>}></Route>
      <Route path='/signU' element={<SignUp/>}></Route>
      <Route path='/signIn' element={<SignIn/>}></Route>
      {/* <Route path='/comment' element={<Comments/>}></Route> */}

     
      <Route path='/check' element={<TryIt/>}></Route>

     
    </Routes>  
    {/* </Switch> */}
    </NoteState>
    </noteContext>
      </div>
  );
};

export default App;
