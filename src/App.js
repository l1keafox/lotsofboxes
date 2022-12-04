import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const gallery = document.getElementById("gallery");
    window.onmousemove = (e) => {
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

      gallery.animate(
        {
          transform: `translate(${panX}px,${panY}px)`,
        },
        {
          duration: 4000,
          fill: "forwards",
          easing: "ease",
        }
      );
    };
  }, []);

  function doModule(e) {
    console.log(e.target.getAttribute("data-nav"));
  }

  return (
    <div className="App">
      <div id="gallery">
        <div class="tile">
          <img  onClick={doModule} data-nav="1" src="https://images.unsplash.com/photo-1670022326053-74ee3cdc1cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
        </div>
        <div class="tile">
          <img  onClick={doModule} data-nav="2" src="https://images.unsplash.com/photo-1670022326053-74ee3cdc1cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </div>
        <div class="tile">
          <img  onClick={doModule} data-nav="3" src="https://images.unsplash.com/photo-1670022326053-74ee3cdc1cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </div>
        <div class="tile">
          <img  onClick={doModule} data-nav="4" src="https://images.unsplash.com/photo-1669989482567-1590b25adbdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </div>
        <div class="tile">
          <img  onClick={doModule} data-nav="5" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1686&q=80" />
        </div>
        <div class="tile">
          <img  onClick={doModule} data-nav="6" src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        </div>
        <div class="tile">
          <img  onClick={doModule} data-nav="7" src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />
        </div>
        <div class="tile">
          <img  onClick={doModule} data-nav="8" src="https://images.unsplash.com/photo-1670022326053-74ee3cdc1cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </div>
        <div class="tile">
          <img  onClick={doModule} data-nav="9" src="https://images.unsplash.com/photo-1670022326053-74ee3cdc1cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </div>
        {/* <div class="tile">
          <img  onClick={doModule} data-nav="10" src="https://images.unsplash.com/photo-1670022326053-74ee3cdc1cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </div> */}
      </div>
    </div>
  );
}

export default App;
