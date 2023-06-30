import React from "react";

function Dashboard() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card border-3 text-center">
            <div className="card-body">
              <h1>100</h1>
              <h3>Total Product</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-3 text-center">
            <div className="card-body">
              <h1>80</h1>
              <h3>Total User</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-3 text-center">
            <div className="card-body">
              <h1>50</h1>
              <h3>Order</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
