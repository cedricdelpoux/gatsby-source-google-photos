import React from "react"
import Img from "gatsby-image"
import {graphql, Link} from "gatsby"

export default ({data: {allGooglePhotosAlbum}}) => {
  return (
    <>
      {allGooglePhotosAlbum.nodes.map((albumNode) => (
        <Link key={albumNode.id} to={`/album/${albumNode.id}`}>
          <div>{albumNode.title}</div>
          <div style={{width: 500}}>
            <Img fluid={albumNode.cover.childImageSharp.fluid} />
          </div>
        </Link>
      ))}
    </>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allGooglePhotosAlbum {
      nodes {
        id
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
