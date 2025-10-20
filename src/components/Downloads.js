import React, { useState } from 'react';
import './Downloads.css';

const Downloads = () => {
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success', leaving: false });

  const showNotification = (message, type = 'success') => {
    // Show and reset leaving state
    setNotification({ show: true, message, type, leaving: false });

    // Start hide animation shortly before unmount
    setTimeout(() => {
      setNotification(prev => ({ ...prev, leaving: true }));
    }, 3400);

    // Remove from DOM after animation completes
    setTimeout(() => {
      setNotification({ show: false, message: '', type: 'success', leaving: false });
    }, 4200);
  };

  const downloadFiles = [
    {
      id: 1,
      title: 'Service Overview (English)',
      description: 'Complete service overview and capabilities in English',
      language: 'English',
      size: '2.5 MB',
      icon: 'fas fa-file-pdf',
      filename: 'Service Overview(English).pdf'
    },
    {
      id: 2,
      title: 'Service Overview (Serbian)',
      description: 'Kompletan pregled usluga i mogućnosti na srpskom jeziku',
      language: 'Serbian',
      size: '2.3 MB',
      icon: 'fas fa-file-pdf',
      filename: 'Service Overview(Serbian).pdf'
    }
  ];

  const handleDownload = (filename, event) => {
    // Find the clicked button
    const button = event.target.closest('.download-btn');
    
    if (!button) return;
    
    // Add animation classes
    button.classList.add('clicked', 'downloading');
    
    try {
      // Create download link with proper path
      const link = document.createElement('a');
      link.href = `/pdf_files/${filename}`;
      link.download = filename;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.style.display = 'none';
      
      // Add to DOM and trigger download
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      setTimeout(() => {
        if (document.body.contains(link)) {
          document.body.removeChild(link);
        }
        
        // Remove animation classes after completion
        setTimeout(() => {
          button.classList.remove('clicked', 'downloading');
        }, 1000);
      }, 100);
      
      // Show success notification
      showNotification(`Download started for ${filename}`, 'success');
    } catch (error) {
      console.error('Download failed:', error);
      showNotification(`Failed to download ${filename}. Please try again.`, 'error');
      
      // Remove animation classes on error
      setTimeout(() => {
        button.classList.remove('clicked', 'downloading');
      }, 500);
    }
  };

  return (
    <section id="downloads" className="downloads">
      <div className="container">
        <div className="section-header">
          <h2>Service Documentation</h2>
          <p>Download our detailed service overviews to learn more about our virtual tour development capabilities</p>
        </div>
        
        <div className="downloads-grid">
          {downloadFiles.map((file) => (
            <div key={file.id} className="download-card">
              <div className="download-card-header">
                <div className="download-icon">
                  <i className={file.icon}></i>
                </div>
                <div className="download-info">
                  <h3>{file.title}</h3>
                  <p className="download-description">{file.description}</p>
                </div>
              </div>
              
              <div className="download-card-body">
                <div className="download-meta">
                  <div className="meta-item">
                    <i className="fas fa-globe"></i>
                    <span>{file.language}</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-weight-hanging"></i>
                    <span>{file.size}</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-file-pdf"></i>
                    <span>PDF</span>
                  </div>
                </div>
              </div>
              
              <div className="download-card-footer">
                <button 
                  className="download-btn"
                  onClick={(e) => handleDownload(file.filename, e)}
                >
                  <i className="fas fa-download download-icon-animated"></i>
                  <span className="download-text">Download PDF</span>
                  <div className="download-progress"></div>
                </button>
              </div>
              
              <div className="download-card-overlay">
                <div className="overlay-content">
                  <i className="fas fa-download overlay-icon-animated"></i>
                  <span>Click to Download</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="downloads-note">
          <div className="note-content">
            <i className="fas fa-info-circle"></i>
            <p>These documents contain detailed information about our virtual tour development services, pricing, and process. Feel free to download and review them at your convenience.</p>
          </div>
        </div>
      </div>

      {/* Notification */}
      {notification.show && (
        <div className={`notification notification-${notification.type} ${notification.leaving ? 'notification-leaving' : ''}`}>
          <div className="notification-content">
            <i className={`fas ${notification.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
            <span>{notification.message}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Downloads;
