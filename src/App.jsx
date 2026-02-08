import { useState } from "react"
import Layout from "./components/Layout"
import Intro from "./components/Intro"
import Portfolio from "./components/Portfolio"
import Stack from "./components/Stack"

function App() {
  const [activeItem, setActiveItem] = useState(null)

  return (
    <Layout activeItem={activeItem}>
      <Intro />
      <Portfolio />
      <Stack
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
    </Layout>
  )
}

export default App
