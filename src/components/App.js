import React from "react";
import { Flex } from "@twilio-paste/flex";
import { AllHumans } from "./AllHumans";
import { AllTasks } from "./AllTasks";

const App = () => {
  return (
    <Flex margin="auto" width="600">
      <AllHumans />
      <AllTasks />
    </Flex>
  );
};

export default App;
