import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
import './index.css';

const FileList = ({files}) => (
  <table className='filelist'>
    <tbody>
      {files.map(file => (
        <tr className='filelist-item' key={file.id}>
           <td className='file-name'>{file.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

FileList.prototype = {
  files:PropTypes.Array
}

const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: '2023-11-22 21:35:00',
    latestCommit: {
      message: 'initial commit'
    }
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: '2023-11-22 21:35:00',
    latestCommit: {
      message: 'initial commit'
    }
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: '2023-11-22 21:35:00',
    latestCommit: {
      message: 'Add a readme file'
    }
  }


];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FileList files={testFiles}/>
  </React.StrictMode>
);