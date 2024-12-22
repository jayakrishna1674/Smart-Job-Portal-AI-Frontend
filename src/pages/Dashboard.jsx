import { Link } from "react-router-dom";
import "./Dashboard.css";
import { useState } from "react";
import { darkTheme, lightTheme } from "../common/Theme/theme";
import GlobalStyles from "../globalStyles";
import { ThemeProvider } from "styled-components";
import Button from "../common/components/Button";

export default function Dashboard() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="container">
          <div className="dashboard-main">
            <h1>Dashboard</h1>
            <Button onClick={toggleTheme}> Toggle Theme</Button>
          </div>
          <main className="switch-option">
            <section className="option">
              <Link className="text" to={"/candidate-portal"}>
                <h4>Candidate Portal</h4>
              </Link>
            </section>
            <section className="option">
              <Link className="text" to={"/admin-panel"}>
                <h4>Admin panel</h4>
              </Link>
            </section>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}
