import React, { Component } from "react";
import { View, Text, Modal } from "react-native";
import { toggleEditScreen } from "../../store/actions/Modal";
import { connect } from "react-redux";
import WatchListDrag from "./WatchListDraggable/WatchListDrag";
import { Constants } from "../../common/constants";

class EditWatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleScreen = () => {
    this.props.toggleEditScreen();
  };

  render() {
    return (
      <Modal
        animationType="none"
        transparent={false}
        visible={this.props.EditScreenVisible}
        onRequestClose={() => {
          this.toggleScreen();
        }}
      >
        <View style={{ flex: 1, marginTop: 22 * Constants.vh }}>
          <WatchListDrag
            toggleScreen={this.toggleScreen}
            watchList={this.props.watchList[0]}
          />
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modalVisible: state.modal.modalVisible,
  EditScreenVisible: state.modal.EditScreenVisible,
  watchList: state.watchList.watchList,
  currentWatchList: state.watchList.currentWatchList
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  toggleEditScreen: () => dispatch(toggleEditScreen())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditWatchList);
