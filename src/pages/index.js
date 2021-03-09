import * as React from "react"
import Button from '@material-ui/core/Button'

// styles
const buttonStyle = {
  color: "#ffffff",
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
}

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Button style ={buttonStyle}> Hello </Button>
    </main>
  )
}

export default IndexPage
