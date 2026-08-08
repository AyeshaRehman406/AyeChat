function DashboardPage() {
  return (
    <main className="ayechat-dashboard">
      <header className="ayechat-dashboard-header">
        <h1 className="ayechat-dashboard-title">Welcome to AyeChat</h1>

        <p className="ayechat-dashboard-description">
          Your secure workspace for real-time messaging, calls, status updates,
          and group collaboration.
        </p>
      </header>

      <section
        className="ayechat-dashboard-section"
        aria-labelledby="ayechat-dashboard-hub-heading"
      >
        <h2
          id="ayechat-dashboard-hub-heading"
          className="ayechat-dashboard-section-title"
        >
          Communication Hub
        </h2>

        <div className="ayechat-dashboard-grid">
          <article className="ayechat-dashboard-card">
            <h3 className="ayechat-dashboard-card-title">Chats</h3>

            <p className="ayechat-dashboard-card-description">
              Start or continue conversations with your contacts.
            </p>
          </article>

          <article className="ayechat-dashboard-card">
            <h3 className="ayechat-dashboard-card-title">Calls</h3>

            <p className="ayechat-dashboard-card-description">
              Connect through audio and video communication.
            </p>
          </article>

          <article className="ayechat-dashboard-card">
            <h3 className="ayechat-dashboard-card-title">Status</h3>

            <p className="ayechat-dashboard-card-description">
              Share and view temporary status updates.
            </p>
          </article>

          <article className="ayechat-dashboard-card">
            <h3 className="ayechat-dashboard-card-title">Groups</h3>

            <p className="ayechat-dashboard-card-description">
              Communicate and collaborate in group conversations.
            </p>
          </article>
        </div>
      </section>

      <section
        className="ayechat-dashboard-section"
        aria-labelledby="ayechat-dashboard-activity-heading"
      >
        <h2
          id="ayechat-dashboard-activity-heading"
          className="ayechat-dashboard-section-title"
        >
          Recent Activity
        </h2>

        <div className="ayechat-dashboard-empty-state">
          <h3 className="ayechat-dashboard-empty-title">
            No recent activity
          </h3>

          <p className="ayechat-dashboard-empty-description">
            Your conversations, calls, and status updates will appear here
            when activity becomes available.
          </p>
        </div>
      </section>
    </main>
  );
}

export default DashboardPage;