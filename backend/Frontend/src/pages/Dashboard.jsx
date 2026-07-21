import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../api/axiosApi";

const Dashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0,
    overdue: 0,
  });

  const [recentTasks, setRecentTasks] = useState([]);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [statsResponse, tasksResponse] = await Promise.all([
          api.get("/tasks/stats"),
          api.get("/tasks?sort=oldest"),
        ]);

        setStats(statsResponse.data);
        setRecentTasks(tasksResponse.data.tasks.slice(-5).reverse());
      } catch (error) {
        console.error(error);
      }
    };

    loadDashboard();
  }, []);

  return (
    <>
      <Navbar />

      <main className="container">
        <div className="page-heading">
          <div>
            <h1>Dashboard</h1>
            <p>Track your productivity and manage your tasks.</p>
          </div>

          <Link to="/tasks" className="btn btn-primary">
            View All Tasks
          </Link>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <span>Total Tasks</span>
            <strong>{stats.total}</strong>
          </div>

          <div className="stat-card">
            <span>Completed</span>
            <strong>{stats.completed}</strong>
          </div>

          <div className="stat-card">
            <span>Pending</span>
            <strong>{stats.pending}</strong>
          </div>

          <div className="stat-card">
            <span>Overdue</span>
            <strong>{stats.overdue}</strong>
          </div>
        </div>

        <section className="section-card">
          <div className="section-header">
            <h2>Recent Tasks</h2>
            <Link to="/tasks">See all →</Link>
          </div>

          {recentTasks.length === 0 ? (
            <p className="empty-state">No tasks found.</p>
          ) : (
            <div className="task-list">
              {recentTasks.map((task) => (
                <div className="task-row" key={task._id}>
                  <div>
                    <h3>{task.title}</h3>
                    <p>{task.category}</p>
                  </div>

                  <span className={`status status-${task.status}`}>
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Dashboard;
