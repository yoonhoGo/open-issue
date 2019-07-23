import Header from '../pages/components/header'

export default function Layout(props: React.Props<any>) {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}
