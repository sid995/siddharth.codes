import Footer from '@components/footer'
import Header from '@components/header'

export const Layout = props => (
  <div className="relative flex flex-col pt-14 w-screen min-h-screen">
    <Header />
    {props.children}
    <Footer />
  </div>
)
