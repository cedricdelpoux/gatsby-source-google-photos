import {graphql} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import React from "react"

const TemplateAlbum = ({data: {googlePhotosAlbum}}) => {
  return (
    <>
      <div>{googlePhotosAlbum.title}</div>
      {googlePhotosAlbum.photos.map((photoNode) => (
        <div key={photoNode.id} style={{width: 1024}}>
          <GatsbyImage image={getImage(photoNode.file)} />
        </div>
      ))}
    </>
  )
}

export default TemplateAlbum

export const pageQuery = graphql`
  query AlbumQuery($id: String!) {
    googlePhotosAlbum(id: {eq: $id}) {
      title
      photos {
        file {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
