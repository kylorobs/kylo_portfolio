import React from "react"
import Footer from './Layout/footer';
import Header from './Layout/Header/header';

import { rhythm} from "../utils/typography"

class Layout extends React.Component {
  render() {
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
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
