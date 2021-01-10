import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Image from 'next/image'
import { H2, Paragraph } from './typography';

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return (
        <Paragraph>
          {children}
        </Paragraph>
      )
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <H2>{children}</H2>
      )
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return (
        <div className="mb-5">
          <p className="text-3xl font-semibold">
            {children}
          </p>
        </div>
      )
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const {
        data: {
          target: {
            fields: {
              file: {
                url,
                details: {
                  image: {
                    height,
                    width
                  }
                }
              }
            }
          }
        }
      } = node
      return (
        <div className="w-full mt-5 mb-8">
          <Image
            priority={true}
            src={`https:${url}`}
            layout="responsive"
            width={width}
            height={height}
          />
        </div>
      )
    }
  },
  renderMark: {
    [MARKS.UNDERLINE]: text => <span className="text-base underline">{text}</span>,
    [MARKS.BOLD]: text => <span className="text-base font-bold">{text}</span>
  }
}

export const BlogParseRender = (data) => {
  return <>{documentToReactComponents(data, options)}</>
}