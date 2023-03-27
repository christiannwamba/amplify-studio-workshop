import { View, Flex } from "@aws-amplify/ui-react";
import React from "react";


export default function App() {
  return (
    <View width="100%">
      <Flex justifyContent="center" alignItems="center" direction="column">
        <View>
          <Flex justifyContent="center" alignItems="center" direction="column">
            <View width="32rem">{/* Post: Create form */}</View>
          </Flex>
          <View marginTop="32px">{/* Post: Collection */}</View>
        </View>
      </Flex>

      {/* Post Modal: Update form */}
    </View>
  );
}
