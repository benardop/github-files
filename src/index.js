import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
import './index.css';

const FileList = ({files}) => (
  <table className='filelist'>
    <tbody>
      {files.map(file => (
        <FileListItem  key={file.id} file={file}/>
      ))}
    </tbody>
  </table>
);

FileList.propTypes = {
  files:PropTypes.array
};

const FileListItem = ({file}) => (
  <tr className='filelist-item'>
    {getFileName(file)}
</tr>
);

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
}

function FileIcon({file}) {
  let icon = 'fa-file-text-o';
  if(file.type === 'folder'){
    icon = 'fa-folder';
  }
  return (
    <td className='file-icon'>
       <i className={`fa ${icon}`}></i>
    </td>
  )
}

FileIcon.propTypes = {
  file: PropTypes.object.isRequired
};

function getFileName(file) {
  return [
    <FileIcon file={file} key={0}/>,
    <td className='file-name' key={1}>{file.name}</td>
  ];
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