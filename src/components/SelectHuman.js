import { Box } from "@twilio-paste/box";
import { Select, Option } from "@twilio-paste/select";
import { useSelector, useDispatch } from "react-redux";

const SelectHuman = ({ task }) => {
  const humans = useSelector((state) => state.humans);
  const dispatch = useDispatch();
  return (
    <Box marginRight="space40" width="100%">
      <Select
        className="SelectHuman"
        value={task.assignedTo}
        onChange={(event) => {
          dispatch(dispatch({ type: "IMPLEMENT_ME" }));
        }}
      >
        <Option>(Unassigned)</Option>
        {humans.map((human) => (
          <Option value={human.id} key={human.id}>
            {human.name}
          </Option>
        ))}
      </Select>
    </Box>
  );
};

export default SelectHuman;
