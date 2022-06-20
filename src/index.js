import React from "react";
import ReactDOM  from "react-dom";
import './index.css'
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Data/state";
export let rerenderTree = (state) => {
    ReactDOM.render(
          <React.StrictMode>
            <App
              state = {state}
              onPostChange={store.onPostChange.bind(store)} 
              addPost={store.addPost.bind(store)} 
            />
          </React.StrictMode>,
          document.getElementById('root')
          );  
        }
        rerenderTree(store.getState())
    store.subscribe(rerenderTree)

reportWebVitals();
