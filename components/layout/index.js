import Footer from '../footer'
import Header from '../header'

export const Layout = props => (
  <div className="relative flex flex-col pt-16 w-screen min-h-screen">
    <Header />
    {props.children}
    <Footer />
  </div>
)
