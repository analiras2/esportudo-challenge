import React from 'react';
import {Modal, StatusBar} from 'react-native';
import AppBar from '../appBar';
import * as St from './styles';

interface Props {
  children: JSX.Element | JSX.Element[];
  modalChildren?: JSX.Element;
  title: string;
  onBackPress?: () => void;
  onRightPress?: () => void;
  paddingVertical?: boolean;
  modalVisible?: boolean;
  setModalVisible?: (newStatus: boolean) => void;
}

const BaseContainer: React.FC<Props> = ({
  children,
  title,
  onBackPress,
  onRightPress,
  paddingVertical = true,
  modalVisible,
  setModalVisible,
  modalChildren,
}): JSX.Element => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <St.Container>
        <AppBar
          title={title}
          onBackPress={onBackPress}
          onRightPress={onRightPress}
        />
        <St.Body paddingVertical={paddingVertical}>{children}</St.Body>
        {modalVisible && (
          <Modal
            animationType="fade"
            transparent
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible && setModalVisible(!modalVisible);
            }}>
            <St.ModalContainer
              activeOpacity={1}
              onPress={() => setModalVisible && setModalVisible(!modalVisible)}>
              {modalChildren}
            </St.ModalContainer>
          </Modal>
        )}
      </St.Container>
    </>
  );
};

export default BaseContainer;
