# Queries

## Query photos

```js
import React from "react"
import Img from "gatsby-image"
import {graphql} from "gatsby"

export default ({data: {allGooglePhotosPhoto}}) => {
    return allGooglePhotosPhoto.nodes.map((photoNode) => (
        <div style={{width: 500}}>
            <Img fluid={photoNode.photo.childImageSharp.fluid} />
        </div>
    ))
}

export const pageQuery = graphql`
    query {
        allGooglePhotosPhoto {
            nodes {
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
```

## Query albums

```js
import React from "react"
import Img from "gatsby-image"
import {graphql} from "gatsby"

export default ({data: {allGooglePhotosAlbum}}) => {
    return allGooglePhotosAlbum.nodes.map((albumNode) => (
        <>
            <h2>{albumNode.title}</h2>
            <div style={{width: 500}}>
                <Img fluid={albumNode.cover.photo.childImageSharp.fluid} />
            </div>
            <div>{"Photos:"}</div>
            {albumNode.photos.map((photoNode) => (
                <div style={{width: 500}}>
                    <Img fluid={photoNode.photo.childImageSharp.fluid} />
                </div>
            ))}
        </>
    ))
}

export const pageQuery = graphql`
    query {
        allGooglePhotosAlbum {
            nodes {
                title
                cover {
                    photo {
                        childImageSharp {
                            fluid(maxWidth: 500, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
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
    }
`
```
