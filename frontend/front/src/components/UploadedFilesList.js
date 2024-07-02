import React from 'react';
import { useUploadedFiles } from './UploadedFilesContext';

const UploadedFilesList = () => {
    const { uploadedFiles } = useUploadedFiles();



    return (
        <div className="uploaded-files-container" >
            <h2>Uploaded Files</h2>
            <ul>
                 {Array.isArray(uploadedFiles) && uploadedFiles.length > 0 ? (
                    uploadedFiles.map((file, index) => (
                        <li key={index} className='file-info'>
                            <span>{file.nome}</span> {/* Display file name */}
                            <span>{file.data_envio}</span> {/* Display upload date */}
                        </li>
                    ))
                ) : (
                    <li>No files uploaded yet</li>
                )}
            </ul>
        </div>
    );
};

export default UploadedFilesList;




