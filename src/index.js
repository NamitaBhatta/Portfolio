import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
document.title = "Namita Bhatta"
document.addEventListener("DOMContentLoaded", () => {
  const root = ReactDOM.createRoot(document.getElementById("root"))
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})

const link = document.createElement('link');
link.rel = 'icon';
link.href = './favicon.png'; // Adjust if using another file format like .png
document.head.appendChild(link);
