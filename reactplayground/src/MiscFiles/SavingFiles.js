// Function to create and save a file
function createAndSaveFile(content, filename, mimeType) {
    // Create a Blob with the file content
    const blob = new Blob([content], { type: mimeType });
  
    // Create a Blob URL for the blob data
    const blobUrl = window.URL.createObjectURL(blob);
  
    // Create a link element
    const link = document.createElement('a');
  
    // Set the href attribute of the link to the Blob URL
    link.href = blobUrl;
  
    // Set the download attribute to specify the filename
    link.download = filename;
  
    // Append the link to the document
    document.body.appendChild(link);
  
    // Trigger a click on the link to start the download
    link.click();
  
    // Remove the link from the document
    document.body.removeChild(link);
  
    // Release the Blob URL
    window.URL.revokeObjectURL(blobUrl);
  }
  
  // Example usage
  const fileContent = JSON.stringify(rows);
  const fileName = 'example.txt';
  const mimeType = 'text/plain';
  
  createAndSaveFile(fileContent, fileName, mimeType);