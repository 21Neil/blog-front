import { Modal, Stack, Text, Title } from '@mantine/core';

const NoticeModal = ({ opened, close, data }) => {
  console.log(data)
  return (
    <Modal
      opened={opened}
      onClose={close}
      withCloseButton={false}
      centered
      size='xs'
      p={0}
    >
      <Stack h={150} justify='center' align='center'>
        <Title order={2} size={24}>
          {data.title}
        </Title>
        {data.msg && <Text>{data.msg}</Text>}
      </Stack>
    </Modal>
  );
};

export default NoticeModal;
