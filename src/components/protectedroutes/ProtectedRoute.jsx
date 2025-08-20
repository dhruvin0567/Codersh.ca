import { usePassword } from "../../context/authContext/PasswordContext";
import PasswordPrompt from "../authenticationmodal/PasswordPrompt";

const ProtectedRoute = ({ children }) => {
  const { hasAccess } = usePassword();

  if (!hasAccess) {
    return <PasswordPrompt />;
  }

  return children;
};

export default ProtectedRoute;
