import { View, Flex } from "@aws-amplify/ui-react";
import React from "react";
import {
  PostCardCollection,
  PostCreateForm,
  PostUpdateForm,
} from "./ui-components";
import Modal from "./components/Modal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [post, setPost] = React.useState({});

  return (
    <View width="100%">
      <Flex justifyContent="center" alignItems="center" direction="column">
        <View>
          <Flex justifyContent="center" alignItems="center" direction="column">
            <View width="32rem">
              <PostCreateForm />
            </View>
          </Flex>
          <View marginTop="32px">
            <PostCardCollection
              overrideItems={({ item }) => {
                return {
                  overrides: {
                    Button36852910: {
                      onClick: () => {
                        setIsModalOpen(true);
                        setPost(item);
                      },
                    },
                  },
                };
              }}
            />
          </View>
        </View>
      </Flex>

      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title="Edit Post"
      >
        {post.id && <PostUpdateForm id={post.id} />}
      </Modal>
    </View>
  );
}
