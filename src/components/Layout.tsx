import React from "react"
import Seo from "./seo"
import Sns from "./Sns"
import Footer from "./Footer"

interface LayoutProps {
    children?: React.ReactNode
}

export default ({ children } : LayoutProps) => (
  <div>
    <Seo />
    {children}
    <Sns />
    <Footer />  
  </div>
)