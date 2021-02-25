import {useState} from 'react'
import logo from './logo.svg';
import dog from './dog.jpeg'
import Header from './components/Header.js'
import Title from './components/Title.js'
import Info from './components/Info.js'
import Comments from './components/Comments.js'
import CommentForm from './components/CommentForm.js'
import monka from './img/MonkaSSS.jpg'
import map from './img/map.png'
import './App.css';

function App() {
  const [showAddComment, setShowAddComment] = useState(false)

  return (
    <div className=''>
      <Header />
      <Title />
      <Info mapInfo={map}/>
      <Comments onShow={() => setShowAddComment(!showAddComment)}
          showAddComment={showAddComment} dog = {dog}/>
      {showAddComment && <CommentForm />}
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
