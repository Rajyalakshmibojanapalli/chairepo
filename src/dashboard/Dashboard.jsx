import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Admin Dashboard Component
const AdminDashboard = ({ userData }) => {
  const [applications, setApplications] = useState([]);
  const [allApplications, setAllApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(false); // New state for filter loading
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [lastId, setLastId] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const fetchApplications = async (resetPagination = false) => {
    setLoading(true);
    try {
      const startAfter = resetPagination ? null : lastId;

      const response = await axios.get(
        "https://api-prxc6of3fa-uc.a.run.app/admin/applications",
        {
          params: {
            limit: 10,
            startAfter,
          },
        }
      );

      const fetchedApplications = response.data.applications;

      if (resetPagination) {
        setAllApplications(fetchedApplications);
        setCurrentPage(1);
      } else {
        setAllApplications((prev) => [...prev, ...fetchedApplications]);
      }

      // Apply any existing filter to the fetched data
      applyStatusFilter(fetchedApplications, statusFilter);

      setLastId(response.data.pagination.lastId);
      setHasMore(response.data.pagination.hasMore);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching applications:", err);
      setError("Failed to load applications. Please try again.");
      setLoading(false);
    }
  };

  // Function to apply status filter without triggering a new fetch
  const applyStatusFilter = (data, status) => {
    if (!data || data.length === 0) return;

    setFilterLoading(true); // Show filter loading indicator

    setTimeout(() => {
      // Wrap in setTimeout to ensure state update and UI refresh
      if (status === "All") {
        setApplications(data);
      } else {
        const filteredRecords = data.filter((item) => item.status === status);
        setApplications(filteredRecords);
      }
      setFilterLoading(false);
    }, 300); // Small delay to make the loading state visible
  };

  // Initial data fetch
  useEffect(() => {
    fetchApplications(true);
  }, []);

  // Apply filter whenever statusFilter changes or when allApplications changes
  useEffect(() => {
    applyStatusFilter(allApplications, statusFilter);
  }, [statusFilter, allApplications]);

  const handleStatusChange = (e) => {
    const selectedStatus = e.target.value;
    setStatusFilter(selectedStatus);
  };

  const handleRefresh = () => {
    setStatusFilter("All");
    fetchApplications(true);
  };

  const loadNextPage = () => {
    if (hasMore && !loading) {
      setCurrentPage((prev) => prev + 1);
      fetchApplications();
    }
  };

  const loadPrevPage = () => {
    if (currentPage > 1) {
      // Implementation would need to store previous page IDs
      // This is a simplified version
      setCurrentPage((prev) => prev - 1);
      // For a complete implementation, you would need to track page history
    }
  };

  const updateApplicationStatus = async (applicationId, newStatus) => {
    setIsUpdating(true);
    try {
      await axios.post(
        "https://api-prxc6of3fa-uc.a.run.app/applications/update-status",
        {
          applicationId,
          status: newStatus,
        }
      );

      // Update both the filtered and full application lists
      setApplications((apps) =>
        apps.map((app) =>
          app.id === applicationId ? { ...app, status: newStatus } : app
        )
      );

      setAllApplications((apps) =>
        apps.map((app) =>
          app.id === applicationId ? { ...app, status: newStatus } : app
        )
      );

      setIsUpdating(false);
    } catch (err) {
      console.error("Error updating status:", err);
      alert("Failed to update application status");
      setIsUpdating(false);
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "waitlisted":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Student Applications
        </h1>

        <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-4">
          <div className="relative inline-block">
            <select
              value={statusFilter}
              onChange={handleStatusChange}
              disabled={loading || filterLoading} // Disable during loading
              className={`block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                loading || filterLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <option value="All">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="waitlisted">Waitlisted</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              {filterLoading ? (
                <div className="animate-spin h-4 w-4 border-t-2 border-blue-500 rounded-full"></div>
              ) : (
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              )}
            </div>
          </div>

          <button
            onClick={handleRefresh}
            disabled={loading || filterLoading} // Disable during loading
            className={`bg-[#404040] text-white px-5 py-2 rounded-md hover:bg-[#333333] transition-all duration-300 ${
              loading || filterLoading ? "opacity-90 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading...
              </span>
            ) : (
              "Refresh Data"
            )}
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Show loading spinner for both initial load and filtering */}
      {(loading && applications.length === 0) || filterLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <p className="mt-4 text-gray-500">
              {filterLoading
                ? "Applying filters..."
                : "Loading applications..."}
            </p>
          </div>
        </div>
      ) : applications.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-500 text-lg">No applications found</p>
          <p className="text-gray-400 mt-1">
            Try changing your filter or check back later
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          {/* Overlay for filtering */}
          {filterLoading && applications.length > 0 && (
            <div className="absolute inset-0 bg-white bg-opacity-60 flex justify-center items-center z-10">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                <p className="mt-4 text-gray-700 font-medium">
                  Filtering applications...
                </p>
              </div>
            </div>
          )}

          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Student
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Program Details
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Quiz Score
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Submitted
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody
              className={`bg-white divide-y divide-gray-200 ${
                filterLoading ? "opacity-50" : ""
              }`}
            >
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {app.name}
                    </div>
                    <div className="text-sm text-gray-500">{app.email}</div>
                    <div className="text-sm text-gray-500">{app.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {app.destination}
                    </div>
                    <div className="text-sm text-gray-500">{app.program}</div>
                    <div className="text-sm text-gray-500">
                      Intake: {app.intakeDate}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {app.quizScore ? (
                        <span
                          className={
                            app.quizScore >= 70
                              ? "text-green-600"
                              : "text-red-600"
                          }
                        >
                          {app.quizScore.toFixed(1)}%
                        </span>
                      ) : (
                        "Not taken"
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(
                        app.status
                      )}`}
                    >
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(app.submittedAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex flex-col space-y-2">
                      <button
                        onClick={() =>
                          updateApplicationStatus(app.id, "approved")
                        }
                        disabled={
                          app.status === "approved" ||
                          isUpdating ||
                          filterLoading
                        }
                        className={`${
                          app.status === "approved" ||
                          isUpdating ||
                          filterLoading
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-green-600 hover:bg-green-700"
                        } text-white text-xs px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition`}
                      >
                        {isUpdating ? "Updating..." : "Approve"}
                      </button>
                      <button
                        onClick={() =>
                          updateApplicationStatus(app.id, "rejected")
                        }
                        disabled={
                          app.status === "rejected" ||
                          isUpdating ||
                          filterLoading
                        }
                        className={`${
                          app.status === "rejected" ||
                          isUpdating ||
                          filterLoading
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-red-600 hover:bg-red-700"
                        } text-white text-xs px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 transition`}
                      >
                        {isUpdating ? "Updating..." : "Reject"}
                      </button>
                      <button
                        onClick={() =>
                          updateApplicationStatus(app.id, "waitlisted")
                        }
                        disabled={
                          app.status === "waitlisted" ||
                          isUpdating ||
                          filterLoading
                        }
                        className={`${
                          app.status === "waitlisted" ||
                          isUpdating ||
                          filterLoading
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                        } text-white text-xs px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                      >
                        {isUpdating ? "Updating..." : "Waitlist"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-700">
          {applications.length > 0 ? `Showing page ${currentPage}` : ""}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={loadPrevPage}
            disabled={currentPage === 1 || loading || filterLoading}
            className={`${
              currentPage === 1 || loading || filterLoading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
            } px-4 py-2 rounded text-sm font-medium transition`}
          >
            Previous
          </button>
          <button
            onClick={loadNextPage}
            disabled={!hasMore || loading || filterLoading}
            className={`${
              !hasMore || loading || filterLoading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            } px-4 py-2 rounded text-sm font-medium transition`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

// Student Dashboard Component
const StudentDashboard = ({ userData }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const email = userData?.email;

  const fetchUserProfile = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://api-prxc6of3fa-uc.a.run.app/user/profile",
        { email },
        { validateStatus: (status) => status >= 200 && status < 300 } // Treat non-2xx as errors
      );

      setProfile(response.data.profile);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching profile:", err);

      if (err.response && err.response.status === 404) {
        // We'll handle the 404 case in the rendering logic
        setError("404");
      } else if (err.response) {
        // Server responded with a non-2xx status other than 404
        setError(err.response.data.message || "Unable to load your profile.");
      } else if (err.request) {
        // Request was made but no response received
        setError("Server did not respond. Please try again later.");
      } else {
        // Something else went wrong
        setError("Something went wrong. Please try again later.");
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    if (email) {
      fetchUserProfile();
    } else {
      setLoading(false);
      setError("Please log in to view your profile.");
    }
  }, [userData?.email]);

  const formatDate = (dateString) => {
    if (!dateString) return "Not yet submitted";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      pending: "bg-yellow-100 text-yellow-800 border-yellow-300",
      approved: "bg-green-100 text-green-800 border-green-300",
      rejected: "bg-red-100 text-red-800 border-red-300",
      waitlisted: "bg-blue-100 text-blue-800 border-blue-300",
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium border ${
          statusStyles[status] || "bg-gray-100 text-gray-800 border-gray-300"
        }`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getNextStepMessage = (nextStep) => {
    const messages = {
      personal: "Let's start by filling out your personal information.",
      quiz: "You're ready to take the qualification quiz (70% to pass).",
      intake: "Great job! Now submit your program preferences.",
      complete: "All done! We'll review your application soon.",
    };
    return messages[nextStep] || "Please contact support for next steps.";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Special handling for 404 error (profile not found)
  if (error === "404") {
    return (
      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-lg">
        <div className="flex flex-col items-center">
          <p className="text-sm text-yellow-700 mb-4">
            No profile found. Let's get started with your application!
          </p>
          <button
            onClick={() => navigate("/elgibility-test")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Start Application
          </button>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-lg">
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-red-600 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-sm text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-lg">
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-yellow-600 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-sm text-yellow-700">
            Let's get started! Begin your application by adding your personal
            information.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header with Progress */}
      <div className="bg-blue-600 px-6 py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Your Application Dashboard
            </h1>
            <p className="text-blue-100 mt-2">
              Status: {getStatusBadge(profile.status)}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex items-center">
              <div className="text-right mr-4">
                <span className="text-blue-100 text-sm">Progress</span>
                <p className="text-white font-bold">{profile.progress}%</p>
              </div>
              <div className="w-32 bg-blue-800 rounded-full h-3">
                <div
                  className="bg-blue-300 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${profile.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Step Guidance */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
          What's Next?
        </h2>
        <p className="mt-1 text-gray-800 font-medium">
          {getNextStepMessage(profile.nextStep)}
        </p>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h2 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
              <svg
                className="w-5 h-5 mr-2 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              Personal Information
              {profile.personal && (
                <svg
                  className="w-5 h-5 ml-2 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </h2>
            {profile.personal ? (
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500">Full Name</p>
                    <p className="font-medium">{`${profile.personal.firstName} ${profile.personal.lastName}`}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Email</p>
                    <p className="font-medium">{profile.personal.email}</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500">Phone</p>
                  <p className="font-medium">
                    {profile.personal.phone || "N/A"}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-gray-500 mb-4">
                  Add your personal details to begin.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Add Personal Info
                </button>
              </div>
            )}
          </div>

          {/* Qualification Quiz */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h2 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
              <svg
                className="w-5 h-5 mr-2 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              Qualification Quiz
              {profile.quizPassed && (
                <svg
                  className="w-5 h-5 ml-2 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </h2>
            {profile.quizScore !== null ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Your Score</span>
                  <span
                    className={`text-lg font-bold ${
                      profile.quizPassed ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {profile.quizScore.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${
                      profile.quizPassed ? "bg-green-600" : "bg-red-600"
                    }`}
                    style={{ width: `${profile.quizScore}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0%</span>
                  <span className="text-blue-600 font-medium">70% to pass</span>
                  <span>100%</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Attempts Used</span>
                    <span className="font-medium">
                      {profile.quizAttempts}/3
                    </span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-500">Last Attempt</span>
                    <span className="font-medium">
                      {formatDate(profile.lastQuizAttempt)}
                    </span>
                  </div>
                  {!profile.quizPassed && (
                    <div className="mt-4">
                      <button
                        className={`w-full py-2 px-4 rounded-lg text-white font-medium transition ${
                          profile.canRetakeQuiz
                            ? "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                            : "bg-gray-400 cursor-not-allowed"
                        }`}
                        disabled={!profile.canRetakeQuiz}
                      >
                        {profile.canRetakeQuiz
                          ? "Try Quiz Again"
                          : "Retake Available in 7 Days"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-gray-500 mb-4">
                  Take the quiz to move forward.
                </p>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={!profile.personal}
                  onClick={() => navigate("/elgibility-test")}
                >
                  {profile.personal
                    ? "Start Quiz"
                    : "Complete Personal Info First"}
                </button>
              </div>
            )}
          </div>

          {/* Program Preferences */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h2 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
              <svg
                className="w-5 h-5 mr-2 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Program Preferences
              {profile.intake && (
                <svg
                  className="w-5 h-5 ml-2 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </h2>
            {profile.intake ? (
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-500">Destination</p>
                  <p className="font-medium">{profile.intake.destination}</p>
                </div>
                <div>
                  <p className="text-gray-500">Program</p>
                  <p className="font-medium">{profile.intake.program}</p>
                </div>
                <div>
                  <p className="text-gray-500">Intake Date</p>
                  <p className="font-medium">{profile.intake.intakeDate}</p>
                </div>
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-gray-500 mb-4">
                  Choose your program to complete this step.
                </p>
                <button
                  className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    !profile.quizPassed ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={!profile.quizPassed}
                  onClick={() => navigate("/elgibility-test")}
                >
                  {profile.quizPassed ? "Add Preferences" : "Pass Quiz First"}
                </button>
              </div>
            )}
          </div>

          {/* Application Status */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h2 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
              <svg
                className="w-5 h-5 mr-2 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
              Application Status
            </h2>
            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Current Status</span>
                {getStatusBadge(profile.status)}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Submitted On</span>
                <span className="font-medium">
                  {formatDate(profile.submittedAt)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Last Updated</span>
                <span className="font-medium">
                  {formatDate(profile.updatedAt)}
                </span>
              </div>
              {/* <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="ml-3 text-sm text-gray-700">
                    {profile.status === "approved"
                      ? "Fantastic! Your application is approved. Check your email for next steps."
                      : profile.status === "rejected"
                      ? "We're sorry, your application wasn't approved this time. Reach out to support for feedback."
                      : profile.status === "waitlisted"
                      ? "You're on the waitlist. We'll notify you if a spot opens up."
                      : "Your application is under review. We'll keep you updated!"}
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Documents */}
          {/* <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm lg:col-span-2">
            <h2 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
              <svg
                className="w-5 h-5 mr-2 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                  clipRule="evenodd"
                />
              </svg>
              Required Documents
            </h2>
            {profile.documents && profile.documents.length > 0 ? (
              <div className="space-y-3">
                {profile.documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium">{doc.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      Uploaded: {formatDate(doc.uploadedAt)}
                    </span>
                  </div>
                ))}
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Add More Documents
                </button>
              </div>
            ) : (
              <div className="text-center py-6 border-2 border-dashed border-gray-200 rounded-lg">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="mt-2 text-gray-500 font-medium">
                  No documents uploaded yet
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Upload your documents to finalize your application.
                </p>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Upload Documents
                </button>
              </div>
            )}
          </div> */}
        </div>
        <div className=" mt-4 flex justify-center items-center w-full bg-white border border-gray-200 rounded-lg p-5 shadow-sm lg:col-span-2 ">
          <div className="flex items-start">
            <svg
              className="h-5 w-5 text-blue-600 mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <p className="ml-3 text-sm text-gray-700">
              {profile.status === "approved"
                ? "Fantastic! Your application is approved. Check your email for next steps."
                : profile.status === "rejected"
                ? "We're sorry, your application wasn't approved this time. Reach out to support for feedback."
                : profile.status === "waitlisted"
                ? "You're on the waitlist. We'll notify you if a spot opens up."
                : "Your application is under review. We'll keep you updated!"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const userData = useSelector((state) => state.authSlice.user);
  const dispatch = useDispatch();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user is an admin
    axios
      .post("https://api-prxc6of3fa-uc.a.run.app/check-admin", {
        email: userData.email,
      })
      .then((res) => {
        setIsAdmin(res.data.isAdmin);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error checking admin status:", err);
        setLoading(false);
      });
  }, [userData.email]);

  if (loading) {
    return (
      <div className="pt-[120px] text-center min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="pt-[120px] px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            {isAdmin ? "Admin Dashboard" : "Student Dashboard"}
          </h1>
          <p className="text-gray-600">Welcome back, {userData.name}</p>
        </div>
        <button
          className="bg-[#404040] text-white px-5 py-2 rounded-full hover:bg-[#333333] transition-all duration-300"
          onClick={() => dispatch(logoutUser())}
        >
          Logout
        </button>
      </div>

      {isAdmin ? (
        <AdminDashboard userData={userData} />
      ) : (
        <StudentDashboard userData={userData} />
      )}
    </div>
  );
};

export default Dashboard;
