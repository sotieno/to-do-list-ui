// src/components/EditModal.js
import React from 'react';

const EditModal = ({ showModal, handleCloseModal, editedStatus, setEditedStatus, handleSaveEdit }) => {
  console.log(showModal); // Check that showModal is true
  return (
    showModal && (
      <div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Status</h5>
              <button type="button" className="close" onClick={handleCloseModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <label htmlFor="editedStatus">Status:</label>
              <select
                id="editedStatus"
                className="form-control"
                value={editedStatus}
                onChange={(e) => setEditedStatus(e.target.value)}
              >
                <option value="Backlog">Backlog</option>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="In Review">In Review</option>
                <option value="Done">Done</option>
              </select>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary btn-sm" onClick={handleCloseModal}>
                Close
              </button>
              <button type="button" className="btn btn-primary btn-sm" onClick={handleSaveEdit}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default EditModal;
