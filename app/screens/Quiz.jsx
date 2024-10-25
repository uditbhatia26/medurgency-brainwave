import { Pressable, View } from "react-native";
import { Text } from "react-native";
import { useState } from "react";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import * as Progess from "react-native-progress";
import { useEffect } from "react";

export default function Quiz({ navigation }) {
  useEffect(() => {
    setSelectedOptions([]);
  }, [questionNumber]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  // console.log(selectedAnswers);
  const styled = StyleSheet.create({
    mainContainer: {
      height: Dimensions.get("screen").height,
      backgroundColor: "black",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  const [questionNumber, setQuestionNumber] = useState(0);
  // console.log(questionNumber);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [progress, setProgress] = useState(0.25);
  // console.log(selectedOptions);
  const questions = [
    {
      type: "image-recognition",
      title: "Spell the given image:",
      image: require("../assets/frog.png"),
      options: ["R", "E", "Q", "F", "G", "O"],
      correct_answer: "FROG",
    },
    {
      type: "match-the-correct-word",
      title: "Match the correct word:",
      images: [require("../assets/loose.png"), require("../assets/lose.png")],
      options: ["loose", "lose"],
      correct_answer: ["loose", "lose"],
    },
    {
      type: "image-recognition",
      title: "Spell the given image:",
      image: require("../assets/bear.png"),
      options: ["E", "R", "E", "G", "B", "A"],
      correct_answer: "BEAR",
    },
    {
      type: "match-the-correct-word",
      title: "Match the correct word:",
      images: [
        require("../assets/mountains.png"),
        require("../assets/peek.png"),
      ],
      options: ["peek", "peak"],
      correct_answer: ["peak", "peek"],
    },
  ];
  return (
    <View style={styled.mainContainer}>
      <Progess.Bar
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: 10,
          position: "absolute",
          top: 80,
        }}
        width={Dimensions.get("window").width * 0.6}
        height={10}
        progress={progress}
      />
      <Text
        style={{
          textAlign: "center",
          color: "white",
          margin: 10,
          fontSize: 20,
          position: "absolute",
          marginRight: "auto",
          marginLeft: "auto",
          top: 100,
        }}
      >
        {console.log(questionNumber)}
        {questions[questionNumber].title}
      </Text>
      {questions[questionNumber].type == "image-recognition" && (
        <View>
          <Image
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              height: 200,
              width: 200,
            }}
            source={questions[questionNumber].image}
          />
          <View
            id="answer-underline"
            style={{
              height: 100,
              width: "fit-content",
              borderBottomWidth: 2,
              borderBottomColor: "white",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
            }}
          >
            {selectedOptions.map((options) => {
              return (
                <Pressable
                  onPress={() => {
                    let filteredArray = selectedOptions.filter(
                      (x) => x != options
                    );
                    setSelectedOptions(filteredArray);
                  }}
                  style={{
                    height: 80,
                    width: 80,
                    margin: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 2,
                    borderColor: "white",
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 30,
                    }}
                  >
                    {options}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <View
            style={{
              height: 300,
              width: 400,
              // backgroundColor:"red",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 10,
              display: "grid",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
            id="options"
          >
            {questions[questionNumber].options.map((option) => {
              if (!selectedOptions.includes(option)) {
                return (
                  <Pressable
                    onPress={() => {
                      questions[questionNumber].correct_answer.length >
                        selectedOptions.length &&
                        setSelectedOptions((prev) => [...prev, option]);
                    }}
                    style={{
                      height: 80,
                      width: 80,
                      // backgroundColor:"blue",
                      margin: 10,
                      display: "flex",

                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 2,
                      borderColor: "white",
                      borderRadius: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 30,
                        color: "white",
                      }}
                    >
                      {option}
                    </Text>
                  </Pressable>
                );
              }
            })}
          </View>
        </View>
      )}
      {questions[questionNumber].type == "match-the-correct-word" && (
        <View>
          <View
            style={{
              height: 400,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 0,
                width: Dimensions.get("screen").width * 0.5,
                height: "100%",
              }}
            >
              {questions[questionNumber].images.map((image) => {
                return (
                  <Image
                    style={{
                      height: 200,
                      width: 200,
                    }}
                    source={image}
                  />
                );
              })}
            </View>
            <View
              style={{
                width: Dimensions.get("screen").width * 0.5,
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              {selectedOptions[0] != undefined && (
                <View
                  style={{
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Pressable
                    onPress={() => {
                      let filteredArray = selectedOptions.filter(
                        (x) => x != selectedOptions[0]
                      );
                      setSelectedOptions(filteredArray);
                    }}
                    style={{
                      margin: 10,
                      borderWidth: 2,
                      borderColor: "white",
                      borderRadius: 10,
                      width: 100,
                      padding: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",

                        fontSize: 20,
                        textAlign: "center",
                      }}
                    >
                      {selectedOptions[0]}
                    </Text>
                  </Pressable>
                </View>
              )}
              {selectedOptions[1] != undefined && (
                <View
                  style={{
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Pressable
                    onPress={() => {
                      let filteredArray = selectedOptions.filter(
                        (x) => x != selectedOptions[1]
                      );
                      setSelectedOptions(filteredArray);
                    }}
                    style={{
                      margin: 10,
                      borderWidth: 2,
                      borderColor: "white",
                      borderRadius: 10,
                      width: 100,
                      padding: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        textAlign: "center",
                      }}
                    >
                      {selectedOptions[1]}
                    </Text>
                  </Pressable>
                </View>
              )}
            </View>
          </View>
          <View
            style={{
              width: Dimensions.get("screen").width,
              height: 100,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              margin: 10,
            }}
          >
            {questions[questionNumber].options.map((option) => {
              if (!selectedOptions.includes(option)) {
                return (
                  <Pressable
                    style={{
                      margin: 10,
                      borderWidth: 2,
                      borderColor: "white",
                      borderRadius: 10,
                      width: 100,
                      padding: 10,
                    }}
                    onPress={() => {
                      setSelectedOptions((prev) => [...prev, option]);
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        textAlign: "center",
                      }}
                    >
                      {option}
                    </Text>
                  </Pressable>
                );
              }
            })}
          </View>
        </View>
      )}
      <Pressable
        id="next-button"
        style={{
          marginBottom: 100,
          position: "absolute",
          bottom: 30,
          backgroundColor: "#008BFF",
          padding: 10,
          width: 100,
          borderRadius: 10,
        }}
        onPress={() => {
          // console.log("clicked");
          switch (questions[questionNumber].type) {
            case "image-recognition":
              // console.log(selectedOptions.join(""));
              const option = selectedOptions.join("");
              setSelectedAnswers([...selectedAnswers, option]);
            case "match-the-correct-word":
              setSelectedAnswers((prev) => [...prev, selectedOptions]);
          }
          // console.log("these are the selected answers:", selectedAnswers);
          if (questionNumber === 3) {
            navigation.navigate("QuizCompletion");
          }
          if (questionNumber <= 2) {
            setQuestionNumber((prev) => prev + 1);
            setProgress((prev) => prev + 0.25);
            setSelectedOptions([]);
          }
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Next
        </Text>
      </Pressable>
    </View>
  );
}
