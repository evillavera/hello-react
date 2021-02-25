import logo from './logo.svg';
import './Closure1.css';

function hello(){
  return(
    <div>
      what's up
    </div>
  );
}

function Closure1(){
  return(
    <div>
      <div>
          <p>
            Hello, World
          </p>
          <p>
            Hello
          </p>
      </div>
      world
      <span>
        dude
      </span>
      <button  onclick="hello()">
        Hello
      </button>
      <p>
        really?
        <a color = '#ff0000'
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer">
        dudeette
        </a>
      </p>
    </div>
  );
}

export default Closure1;
