import Footer from '@components/footer'
import Header from '@components/header'

export const Layout = props => (
  <div className="relative flex flex-col min-h-screen">
    <Header />
    {props.children}
    <Footer />
  </div>
)
