import { NextPageContext } from 'next'
import { Props } from 'react'
import Layout from '../../layouts/default'

export default function Issue(
  props: {
    title: string
    contents: string
  } & Props<any>,
) {
  return (
    <Layout>
      <h1>{props.title}</h1> <p>{props.contents}</p>
    </Layout>
  )
}

Issue.getInitialProps = async (context: NextPageContext) => {
  const { title } = context.query
  return {
    title,
    contents: 'Hi~~ everyone.',
  }
}
