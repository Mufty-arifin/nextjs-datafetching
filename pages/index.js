import { useEffect, useState } from "react"

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
  const data = await res.json()
  return { props: { data } }
}
export default function Home({data}) {
  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users/1")
  //     .then((res) => res.json())
  //     .then(setData)
  // })
  return <div>{JSON.stringify(data)}</div>
}
