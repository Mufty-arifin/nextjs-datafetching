export async function getServerSideProps(router) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${router.params.postId}`
  );
  const postId = await res.json();
  return { props: { postId } };
}

export default function Homepage({ postId }) {
  return <div>{JSON.stringify(postId)}</div>;
}
