import { Flex, Stack, Text, Title } from '@mantine/core';

const CommentListItem = ({ comment }) => {
  const date = new Date(comment.date);

  return (
    <Stack gap={0}>
      <Flex gap={14} align='baseline'>
        <Title order={4} fz={14}>
          {comment.name}
        </Title>
        <Text fz={12}>
          {date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate()}
        </Text>
      </Flex>

      <Text fz={14}>{comment.content}</Text>
    </Stack>
  );
};

export default CommentListItem;
