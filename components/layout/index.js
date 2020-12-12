import Footer from '@components/footer'
import Header from '@components/header'

export const Layout = props => (
  <div className="relative flex flex-col w-screen min-h-screen">
    <Header />
    {props.children}
    <Footer />
  </div>
)
