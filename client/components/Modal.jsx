import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    // };
    // this.thumbClick = this.thumbClick.bind(this);
  }

  onClose() {
    const { onClose } = this.props;
    if (onClose) {
      onClose();
    }
  }

  render() {
    const { modal } = this.props;
    if (!modal) {
      return null;
    }
    return (
      <div className="modalBackground">
        <div>hi</div>
      </div>
    )
  }

}
export default Modal;