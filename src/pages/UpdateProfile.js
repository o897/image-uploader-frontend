import React, { useState } from "react";

export default function UpdateProfile({ isOpen, onClose, user, onSave }) {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    bio: user?.bio || "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Edit Profile</h2>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              required
            />
          </div>

          <div className="form-group">
            <label>Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="btn cancel"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className="btn save">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
