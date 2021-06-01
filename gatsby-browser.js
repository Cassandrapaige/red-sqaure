import React from "react"
import Layout from "./src/components/layout/layout.component"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
