export default function LoginPage() {
  return (
    <div className="login-page">
      <img className="logo" src="./assets/logo.png" alt="" />
      <input type="number" placeholder="Sua meta de zaps" />
      <div className="deck-buttons">
        <button>
          Praticar JavaScript
          <img src="./assets/next.png" alt="" />
        </button>
        <button>
          Praticar React
          <img src="./assets/next.png" alt="" />
        </button>
      </div>
    </div>
  );
}
