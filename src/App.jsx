import { View, Flex } from "@aws-amplify/ui-react";
import React from "react";
import { PostCardCollection } from './ui-components'

export default function App() {
  return (
    <View width="100%">
      <Flex justifyContent="center" alignItems="center" direction="column">
        <View>
          <Flex justifyContent="center" alignItems="center" direction="column">
            <View width="32rem">{/* Post: Create form */}</View>
          </Flex>
          <View marginTop="32px">
            <PostCardCollection />
          </View>
        </View>
      </Flex>

      {/* Post Modal: Update form */}
    </View>
  );
}
