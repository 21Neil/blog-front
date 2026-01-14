import { Center, Modal, Title } from "@mantine/core";

const NoticeModal = ({ opened, close, modalMsg }) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      withCloseButton={false}
      centered
      size='xs'
      p={0}
    >
      <Center h={150}>
        <Title order={2} size={24}>
          {modalMsg}
        </Title>
      </Center>
    </Modal>
  );
};

export default NoticeModal;
