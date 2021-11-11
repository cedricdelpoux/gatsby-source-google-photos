# Queries

## Query photos

```js
import React from "react"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import {graphql} from "gatsby"

export default ({data: {allGooglePhotosPhoto}}) => {
    return allGooglePhotosPhoto.nodes.map((photoNode) => (
        <div style={{width: 500}}>
            <GatsbyImage image={getImage(photoNode.file)} />
        </div>
    ))
}

export const pageQuery = graphql`
    query {
        allGooglePhotosPhoto {
            nodes {
                file {
                    childImageSharp {
                        gatsbyImageData
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
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import {graphql} from "gatsby"

export default ({data: {allGooglePhotosAlbum}}) => {
    return allGooglePhotosAlbum.nodes.map((albumNode) => (
        <>
            <h2>{albumNode.title}</h2>
            <div style={{width: 500}}>
                <GatsbyImage image={getImage(albumNode.cover.file)} />
            </div>
            <div>{"Photos:"}</div>
            {albumNode.photos.map((photoNode) => (
                <div style={{width: 500}}>
                    <GatsbyImage image={getImage(photoNode.file)} />
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
                    file {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
                photos {
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
```
