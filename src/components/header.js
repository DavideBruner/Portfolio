import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, color: `lavender` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#000066',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h2 style={{ display: 'inline', margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'lavender',
            
          }}
        >
          {siteTitle}
        </Link>
      </h2>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/cv">CV</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
      
    </div>
  </div>
)

export default Header
