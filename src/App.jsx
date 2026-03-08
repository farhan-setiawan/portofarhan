import { useState } from "react"
import Layout from "./components/Layout"
import Intro from "./components/Intro"
import Portfolio from "./components/Portfolio"
import Stack from "./components/Stack"
import Stack2 from "./components/Stack2"
import SocialLinks from "./components/SocialLinks"

function App() {
  const [activeItem, setActiveItem] = useState(null)

  return (
    <>
    <Layout activeItem={activeItem}>
      <Intro />
      <Portfolio />
      <Stack
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <Stack2
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
    </Layout>
    <SocialLinks />
    </>
  )
}

export default App
