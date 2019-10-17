import React from "react"
import Footer from './Footer/footer';
import Header from './Header/header';

import { rhythm} from "../../utils/typography";

class Layout extends React.Component {
  render() {
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: '100%',
          padding: '1em 3em',
          // maxWidth: rhythm(24),
          // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header {...this.props}/>
        <main>{this.props.children}</main>
        <Footer />
      </div>
    )
  }
}

export default Layout
