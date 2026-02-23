import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router";

export function Logout() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    navigate("/");
  }

  return (
    <div className="flex justify-end">
      <Button variant="outline" size="icon" onClick={handleLogout} aria-label="Logout">
        <LogOut className="h-4 w-4" />
      </Button>
    </div>
  );
}
