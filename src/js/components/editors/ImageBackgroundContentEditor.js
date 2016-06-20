import React from 'react'
import {getAvailableFileName} from '../../reducers/rootReducer'
import imageBackgroundData from '../../data/imageBackgrounData'

export default class ImageBackgroundContentEditor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title:       this.props.data.get("title"),
      description: this.props.data.get("description"),
      src:         this.props.data.get("src"),
      fileObj:     this.props.data.get("fileObj"),
      fileName:    this.props.data.get("fileName")
    };
  }

  render() {
    return (
      <div>
        <h3 className="editor-name">Image in Background</h3>
        <form>
          <div className="form-group">
            <label htmlFor="editor-input-title">title</label>
            <input id="editor-input-title" type="text" className="form-control" value={this.state.title}  onChange={this.onChangeTitle.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="editor-input-description">description</label>
            <input id="editor-input-description" type="text" className="form-control" value={this.state.description}  onChange={this.onChangeDescription.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="editor-input-description">select image</label>
            <input type="file" accept="image/*"  onChange={this.onChangeImage.bind(this)} />
          </div>
        </form>
      </div>
    );
  }

  contentData() {
    return imageBackgroundData(this.state.title, this.state.description, this.state.src, this.state.fileObj, this.state.fileName );
  }

  onChangeTitle(event) {
    this.setState({title: event.target.value});
  }

  onChangeDescription(event) {
    this.setState({description: event.target.value});
  }

  onChangeImage(domEvent) {
    //store.dispatch(LOAD_IMAGE)
    let fileObj  = domEvent.target.files[0];
    let reader = new FileReader();
    reader.onload = fileEvent => {
      const src = fileEvent.target.result;
      const fileName = getAvailableFileName( this.props.store.getState(), fileObj.name );
      this.setState({src: src, fileObj: fileObj, fileName: fileName});
    }
    reader.readAsDataURL(fileObj);
  }
}