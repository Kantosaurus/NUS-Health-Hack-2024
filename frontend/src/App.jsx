import React from "react"
import Navbar from "./components/nav.jsx"
import Footer from "./components/footer.jsx"
import UploadSect from "./components/upload.jsx"
export default function App() {
  return (
      <div>
        <Navbar/>
        <UploadSect/>
        <Footer/>
      </div>
  )
}

