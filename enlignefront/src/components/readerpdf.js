import React from 'react';
import PDF from 'react-pdf-js';
import mypdf from './test.pdf'

export default class MyPdfViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      pages: 3
    };

    this.onDocumentComplete = this.onDocumentComplete.bind(this);
    this.onPageComplete = this.onPageComplete.bind(this);
  }
 

  onDocumentComplete(pages) {
    this.setState({ page: 1, pages });
  }

  onPageComplete(page) {
    this.setState({ page });
  }

  render() {
    return (
      <div>
        <PDF file={mypdf}/>
        
      </div>
    );
  }
}
 
