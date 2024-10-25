import { RadioButton } from "react-native-paper";

function QuestionnaireOptionsItem() {
  return (
    <>
      <RadioButton.Item
        label="Never"
        value="never"
        labelStyle={{
          color: "white",
          marginRight: 150,
          textAlign: "left",
        }}
        position="leading"
      />
      <RadioButton.Item
        label="Rarely"
        value="rarely"
        labelStyle={{
          color: "white",
          marginRight: 150,
          textAlign: "left",
        }}
        position="leading"
      />
      <RadioButton.Item
        label="Sometimes"
        value="sometimes"
        labelStyle={{
          color: "white",
          marginRight: 150,
          textAlign: "left",
        }}
        position="leading"
      />
      <RadioButton.Item
        label="Frequently"
        value="frequently"
        labelStyle={{
          color: "white",
          marginRight: 150,
          textAlign: "left",
        }}
        position="leading"
      />
      <RadioButton.Item
        label="Always"
        value="always"
        labelStyle={{
          color: "white",
          marginRight: 150,
          textAlign: "left",
        }}
        position="leading"
      />
    </>
  );
}

export default QuestionnaireOptionsItem;
