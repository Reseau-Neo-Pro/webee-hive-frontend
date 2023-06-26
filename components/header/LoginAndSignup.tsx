import { Box } from "@mui/material";

const LoginAndSignup = () => {
  return (
    <Box className="flex gap-8 text-2xl" sx={{ color: "text.main" }}>
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
    </Box>
  );
};
export default LoginAndSignup;
