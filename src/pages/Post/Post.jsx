import { Box, Title } from "@mantine/core";
import { useLoaderData } from "react-router";

const Post = () => {
  const post = useLoaderData();

  console.log(post)

  return (
    <Box component="main" px={24}>
      <Title order={2} my={16}>

      </Title>
    </Box>
  )
};

export default Post;
