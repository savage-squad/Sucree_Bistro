import type { NextPage } from 'next'
import Products from './products'
import Dropdown from './dropdown'



const Home: NextPage = () => {
  return (
    <><div style={{margin:80}}>
      {/* <Dropdown/> */}
      <Products />
    </div>
    </>
  )
}

export default Home
