import { Card } from "@twilio-paste/card";
import { Checkbox } from "@twilio-paste/checkbox";
import { Flex } from "@twilio-paste/flex";
import { Label } from "@twilio-paste/label";
import { useSelector, useDispatch } from "react-redux";
import SelectHuman from "./SelectHuman";

const Task = ({ taskId }) => {
  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === taskId)
  );
  const dispatch = useDispatch();

  return (
    <Card>
      <Flex marginBottom="space40">
        <Checkbox
          id={`task-${taskId}`}
          checked={task.complete}
          onChange={(event) => dispatch({ type: "IMPLEMENT_ME" })}
        />
        <Label htmlFor={`task-${taskId}`}>{task.title}</Label>
      </Flex>
      <Flex>
        <SelectHuman task={task} />
      </Flex>
    </Card>
  );
};

export default Task;
