import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function Resume() {
  useEffect(() => {
    const documentUrl = '/documents/Biruk Lemma Resume.pdf';
    const link = document.createElement('a');
    link.href = documentUrl;
    link.setAttribute('download', 'Biruk Lemma Resume');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  // Redirect to the homepage immediately after the download starts
  return <Navigate to="/" />;
}

export default Resume;
