import Link from 'next/link'
import Layout from '../../layouts/default'

function IssueLink(props: { title: string }) {
  return (
    <li>
      <Link href={'/issue/[title]'} as={`/issue/${props.title}`}>{props.title}</Link>
    </li>
  )
}

function Home() {
  return (
    <Layout>
      <p>
        <div>issues</div>
        <ul>
          <IssueLink title='issue1' />
          <IssueLink title='issue2' />
          <IssueLink title='issue3' />
        </ul>
      </p>
      {/* <footer>footer</footer> */}
    </Layout>
  )
}

export default Home
