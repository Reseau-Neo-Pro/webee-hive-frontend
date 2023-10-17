const LoginAndSignup = () => {
  return (
    <div className="flex gap-8 text-2xl">
      <div
        className="cursor-pointer transition hover:text-yellow-400"
        data-testid="login-link"
      >
        Connection
      </div>
      <div
        className="cursor-pointer transition hover:text-yellow-400"
        data-testid="signup-link"
      >
        Inscription
      </div>
    </div>
  );
};
export default LoginAndSignup;
