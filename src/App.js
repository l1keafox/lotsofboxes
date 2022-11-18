import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const gallery = document.getElementById("gallery");
    window.onmousemove = e =>{
      // get mouse posistion
      const mouseX = e.clientX,
            mouseY = e.clientY;
      // divid by height
      const xDecimal = mouseX / window.innerWidth,
            yDecimal = mouseY / window.innerHeight;
      // multiply by gallery heigh
      const panX = gallery.offsetWidth * xDecimal * -1 * 0.5,
            panY = gallery.offsetHeight * yDecimal * -1 * 0.5;
      // set up translate

      console.log(mouseX,mouseY);
      console.log(panX,panY);
      gallery.style.transform = `translate(${panX}px,${panY}px)`
    }
  },[]);
  return (
    <div className="App">
      <div id="gallery">
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>

      </div>
    </div>
  );
}

export default App;
