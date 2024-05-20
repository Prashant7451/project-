import React, { useState } from 'react';
import axios from 'axios';

function ProjectForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pdfFile, setPdfFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('pdfFile', pdfFile);

    try {
      const response = await axios.post('/api/projects', formData);
      console.log('Project created:', response.data);
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input type="file" onChange={(e) => setPdfFile(e.target.files[0])} required />
      <button type="submit">Create Project</button>
    </form>
  );
}

export default ProjectForm;
