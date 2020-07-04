import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBook = ({ value, language }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={darcula}
    >{value || ''}
    </SyntaxHighlighter>
  )
}

const ImageDom = props => (
  <img {...props} style={{ maxWidth: '100%' }}></img>
)

export default ({ source }) => {
  return (
    <ReactMarkdown renderers={{
      code: CodeBook,
      image: ImageDom
    }}>{source}</ReactMarkdown>
  )
}
