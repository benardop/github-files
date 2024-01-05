import ReactDOM from 'react-dom/client';
import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const FileList = ({files}) => (
  <table className='filelist'>
    <tbody>
      {files.map(file => (
          <FileListItem key={file.id} file={file}/>
      ))}
    </tbody>
  </table>
);

FileList.propTypes = {
  files: PropTypes.array
}

const FileListItem = ({file}) => (
  <tr className='file-list-item'>
    <td className='file-name'>{file.name}</td>
  </tr>
)

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
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
  <div className='file-items'>
    <FileList files={testFiles} />
  </div>
)
  