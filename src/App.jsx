import { View, Flex } from "@aws-amplify/ui-react";
import React from "react";
import { PostCardCollection, PostCreateForm } from './ui-components'

export default function App() {
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
            <PostCardCollection overrideItems={({item}) => {
              return {
                overrides: {
                  Button36852910: {
                    onClick: () => {
                      console.log(item)
                    }
                  }
                }
              }
            }} />
          </View>
        </View>
      </Flex>

      {/* Post Modal: Update form */}
    </View>
  );
}
