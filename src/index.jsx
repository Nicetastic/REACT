import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyA5dfPEg3PK7jtFYIAfg68tmRIqwEdXtI4",
  authDomain: "azulsys-react.firebaseapp.com",
  projectId: "azulsys-react",
  storageBucket: "azulsys-react.appspot.com",
  messagingSenderId: "1095194012302",
  appId: "1:1095194012302:web:b9314b7f9d1b74213b37df"
}

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)