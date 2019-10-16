import React from "react"
import Seo from "./Seo"
import Sns from "./Sns"
import Footer from "./Footer"

export default ({ children }) => (
  <div>
    <Seo />
    {children}
    <Sns />
    <Footer />  
  </div>
)