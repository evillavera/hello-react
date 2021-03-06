import {useState} from 'react'
import logo from './logo.svg';
import dog from './dog.jpeg'
import Header from './components/Header.js'
import Title from './components/Title.js'
import Info from './components/Info.js'
import Comments from './components/Comments.js'
import CommentForm from './components/CommentForm.js'
import monka from './img/MonkaSSS.jpg'
import restaurant_pic from './img/Restaurant_Pic.png'
import map from './img/map.png'
import './App.css';
import {Button} from '@material-ui/core'

import ClosureInfo from './components/Closure_Info.js'

function App() {
  const [showAddComment, setShowAddComment] = useState(false)

  return (
    <div className=''>
      <Header />
      <Button variant="contained"> What's Up </Button>
      <Title />
      <Info mapInfo={map}/>
      <Comments onShow={() => setShowAddComment(!showAddComment)}
          showAddComment={showAddComment} dog = {dog}/>
      {showAddComment && <CommentForm />}
      <ClosureInfo restaurant_pic={restaurant_pic} mapInfo={map}/>
    </div>  
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={dog} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
