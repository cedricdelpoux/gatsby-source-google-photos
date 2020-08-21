import React from "react"
import Img from "gatsby-image"
import {graphql} from "gatsby"

export default ({data: {googlePhotosAlbum}}) => {
  return (
    <>
      <div>{googlePhotosAlbum.title}</div>
      {googlePhotosAlbum.photos.map((photoNode) => (
        <div key={photoNode.id} style={{width: 500}}>
          <Img fluid={photoNode.photo.childImageSharp.fluid} />
        </div>
      ))}
    </>
  )
}

export const pageQuery = graphql`
  query AlbumQuery($id: String!) {
    googlePhotosAlbum(id: {eq: $id}) {
      title
      photos {
        photo {
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
