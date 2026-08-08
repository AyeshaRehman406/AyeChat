import { NavLink } from "react-router-dom";

function AppLayout({ children }) {
  return (
    <div className="ayechat-app-layout">
      <aside className="ayechat-app-sidebar">
        <div>
          <div className="ayechat-app-brand">
            <span className="ayechat-app-brand-name">AyeChat</span>
          </div>

          <nav
            className="ayechat-app-nav-primary"
            aria-label="Primary navigation"
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `ayechat-app-nav-button${
                  isActive ? " ayechat-app-nav-button-active" : ""
                }`
              }
            >
              <span className="ayechat-app-nav-label">Chats</span>
            </NavLink>

            <NavLink
              to="/calls"
              className={({ isActive }) =>
                `ayechat-app-nav-button${
                  isActive ? " ayechat-app-nav-button-active" : ""
                }`
              }
            >
              <span className="ayechat-app-nav-label">Calls</span>
            </NavLink>

            <NavLink
              to="/status"
              className={({ isActive }) =>
                `ayechat-app-nav-button${
                  isActive ? " ayechat-app-nav-button-active" : ""
                }`
              }
            >
              <span className="ayechat-app-nav-label">Status</span>
            </NavLink>
          </nav>
        </div>

        <nav
          className="ayechat-app-nav-secondary"
          aria-label="Secondary navigation"
        >
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `ayechat-app-nav-button${
                isActive ? " ayechat-app-nav-button-active" : ""
              }`
            }
          >
            <span className="ayechat-app-nav-label">Settings</span>
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `ayechat-app-nav-button${
                isActive ? " ayechat-app-nav-button-active" : ""
              }`
            }
          >
            <span className="ayechat-app-nav-label">Profile</span>
          </NavLink>
        </nav>
      </aside>

      <div className="ayechat-app-main">
        <header className="ayechat-app-header">
          <h1 className="ayechat-app-header-title">AyeChat</h1>
        </header>

        <main className="ayechat-app-content">{children}</main>
      </div>

      <nav
        className="ayechat-app-mobile-nav"
        aria-label="Mobile navigation"
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `ayechat-app-mobile-nav-button${
              isActive ? " ayechat-app-mobile-nav-button-active" : ""
            }`
          }
        >
          <span className="ayechat-app-mobile-nav-label">Chats</span>
        </NavLink>

        <NavLink
          to="/calls"
          className={({ isActive }) =>
            `ayechat-app-mobile-nav-button${
              isActive ? " ayechat-app-mobile-nav-button-active" : ""
            }`
          }
        >
          <span className="ayechat-app-mobile-nav-label">Calls</span>
        </NavLink>

        <NavLink
          to="/status"
          className={({ isActive }) =>
            `ayechat-app-mobile-nav-button${
              isActive ? " ayechat-app-mobile-nav-button-active" : ""
            }`
          }
        >
          <span className="ayechat-app-mobile-nav-label">Status</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `ayechat-app-mobile-nav-button${
              isActive ? " ayechat-app-mobile-nav-button-active" : ""
            }`
          }
        >
          <span className="ayechat-app-mobile-nav-label">Settings</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `ayechat-app-mobile-nav-button${
              isActive ? " ayechat-app-mobile-nav-button-active" : ""
            }`
          }
        >
          <span className="ayechat-app-mobile-nav-label">Profile</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default AppLayout;