export default function Login({ setAuth }) {
  return (
    <button onClick={() => setAuth(true)}>
      Login
    </button>
  );
}
