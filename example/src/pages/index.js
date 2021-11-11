import {Link, graphql} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import React from "react"

const PageIndex = ({data: {allGooglePhotosAlbum}}) => {
  return (
    <>
      {allGooglePhotosAlbum.nodes.map((albumNode) => (
        <Link key={albumNode.id} to={`/album/${albumNode.id}`}>
          <div>{albumNode.title}</div>
          <div style={{width: 500}}>
            <GatsbyImage image={getImage(albumNode.cover.file)} />
          </div>
        </Link>
      ))}
    </>
  )
}

export default PageIndex

export const pageQuery = graphql`
  query IndexQuery {
    allGooglePhotosAlbum {
      nodes {
        id
        title
        cover {
          file {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
