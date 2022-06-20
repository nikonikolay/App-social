import './App.css';
import Navbar from './COMPONENTS/navbar/navbar';
import Header from './COMPONENTS/header/header';
import Profile from './COMPONENTS/profile/profile';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Dialogs from './COMPONENTS/dialogs/dialogs';
import Friends from './COMPONENTS/friends/friends';
function App(props) {
  return (<>
  <div className='wrapper'>
    <BrowserRouter>
    <Header />
    <Navbar />
    <div className='wrapper-content'>
      <Routes>
        <Route path='/' 
        element={<Profile profilePage={props.state.profilePage} 
        newPostText={props.state.profilePage.newPostText}
        onPostChange={props.onPostChange}
        addPost={props.addPost}/>} />

      <Route path='/profile' 
      element={<Profile profilePage={props.state.profilePage}
      newPostText={props.state.profilePage.newPostText}
      onPostChange={props.onPostChange}
      addPost={props.addPost}/>} />

      <Route path='/dialogs' 
      element={<Dialogs dialogsPage={props.state.dialogsPage}/>} />

      <Route path='/friends' 
      element={<Friends />}/>

      </Routes>
    </div>
    </BrowserRouter>
    </div>

    </>
  );
}

export default App;
