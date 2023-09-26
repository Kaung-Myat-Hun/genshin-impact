
type Props = {
  params: {
    id: number;
  }
}

const Page = (props: Props) => {
  console.log(props.params.id)
  return (
    <div>Page</div>
  )
}
export default Page