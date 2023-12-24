export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  const idNyaUsers = users.map((user) => {
    return { params: { userId: user.id.toString() } };
  });
  return {
    paths: idNyaUsers,
    fallback: false,
  };
}
export async function getStaticProps(router) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${router.params.userId}`
  );
  const users = await res.json();
  return { props: { users } };
}

export default function UserDetailPage({ users }) {
  return <div>{JSON.stringify(users)}</div>;
}
