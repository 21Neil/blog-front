import { Box, Button, Image, Textarea, TextInput, Title } from '@mantine/core';
import style from '../Post.module.css';
import sendIcon from '/src/assets/send.svg';

const CommentForm = ({ form, handleSubmit }) => {
  return (
    <Box mb={24}>
      <Title order={3} mb={8}>
        Comments
      </Title>

      <form
        onSubmit={form.onSubmit(handleSubmit)}
        className={style.commentInputContainer}
      >
        <TextInput
          key={form.key('name')}
          {...form.getInputProps('name')}
          placeholder='Name'
          variant='unstyled'
          error={!!form.errors.name}
        />
        <Textarea
          key={form.key('content')}
          {...form.getInputProps('content')}
          placeholder='Write a content'
          variant='unstyled'
          error={!!form.errors.content}
        />
        <Button type='submit'>
          <Image src={sendIcon} />
        </Button>
      </form>
    </Box>
  );
};

export default CommentForm;
