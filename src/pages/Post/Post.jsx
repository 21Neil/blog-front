import {
  Box,
  Divider,
  Image,
  LoadingOverlay,
  Space,
  Stack,
  Title,
  Typography,
} from '@mantine/core';
import { useLoaderData, useParams, useRevalidator } from 'react-router';
import { useForm } from '@mantine/form';
import z from 'zod';
import { zod4Resolver } from 'mantine-form-zod-resolver';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import CommentListItem from './Widgets/CommentListItem';
import NoticeModal from './Widgets/NoticeModal';
import CommentForm from './Widgets/CommentForm';

const commentSchema = z.object({
  name: z.string().min(1, { message: '請輸入暱稱' }).trim(),
  content: z.string().min(1, { message: '請輸入留言內容' }).trim(),
});

const Post = () => {
  const { id } = useParams();
  const post = useLoaderData();
  const [loading, setLoading] = useState(false);
  const [modalMsg, setModalMsg] = useState('');
  const [opened, { open, close }] = useDisclosure(false);
  const revalidator = useRevalidator();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      content: '',
    },

    validate: zod4Resolver(commentSchema),
  });

  const handleSubmit = async value => {
    setLoading(true);

    const res = await fetch(
      import.meta.env.VITE_API_BASE_URL + '/posts/' + id + '/comments',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      }
    );
    const result = await res.json();

    setLoading(false);

    if (!res.ok) {
      setModalMsg('留言失敗');
      open();
      throw new Error(result.message || `Server error: ${res.status}`);
    }

    setModalMsg('留言成功');
    open();
    revalidator.revalidate();
  };

  return (
    <Box component='main' px={24}>
      <Title order={2} my={16}>
        {post.title}
      </Title>

      <Box>
        <Image src={post.imageUrl} bdrs={5} mb={16} />

        <Typography>
          <div dangerouslySetInnerHTML={{ __html: post.HTMLContent }} />
        </Typography>
      </Box>

      <Space h={48} />

      <Divider mb={8} />

      <CommentForm {...{ form, handleSubmit }} />

      <Stack gap={14} mb={36}>
        {post.comments.map(comment => (
          <CommentListItem key={comment.id} {...{ comment }} />
        ))}
      </Stack>

      <LoadingOverlay visible={loading} />
      <NoticeModal {...{ opened, close, modalMsg }} />
    </Box>
  );
};

export default Post;
