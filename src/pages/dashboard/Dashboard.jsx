const Dashboard = () => {
  return (
    <>
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="page-title">Welcome Admin!</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item active">Dashboard</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className="dash-widget-icon text-primary border-primary">
                  <i className="fe fe-users"></i>
                </span>
                <div className="dash-count">
                  <h3>168</h3>
                </div>
              </div>
              <div className="dash-widget-info">
                <h6 className="text-muted">Doctors</h6>
                <div className="progress progress-sm">
                  <div className="progress-bar bg-primary w-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className="dash-widget-icon text-success">
                  <i className="fe fe-credit-card"></i>
                </span>
                <div className="dash-count">
                  <h3>487</h3>
                </div>
              </div>
              <div className="dash-widget-info">
                <h6 className="text-muted">Patients</h6>
                <div className="progress progress-sm">
                  <div className="progress-bar bg-success w-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className="dash-widget-icon text-danger border-danger">
                  <i className="fe fe-money"></i>
                </span>
                <div className="dash-count">
                  <h3>485</h3>
                </div>
              </div>
              <div className="dash-widget-info">
                <h6 className="text-muted">Appointment</h6>
                <div className="progress progress-sm">
                  <div className="progress-bar bg-danger w-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className="dash-widget-icon text-warning border-warning">
                  <i className="fe fe-folder"></i>
                </span>
                <div className="dash-count">
                  <h3>$62523</h3>
                </div>
              </div>
              <div className="dash-widget-info">
                <h6 className="text-muted">Revenue</h6>
                <div className="progress progress-sm">
                  <div className="progress-bar bg-warning w-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
