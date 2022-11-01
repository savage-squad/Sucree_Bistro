import type { NextPage } from 'next'
import SignIn from './login/signin'




const Home: NextPage = () => {
  return (
    <><div style={{ width: "100%" }}>
      
      <SignIn/>
      {/* <NavComponents />
      <CaptionCarouselComponents />
      <ArticleListComponent />
      <AutoPlay/>
      <WithSpeechBubblesComponent />
      <FooterComponents /> */}
    </div>
    </>
  )
}

export default Home
