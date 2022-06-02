import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { RootTabScreenProps } from "../types";
import { Formik } from "formik";
import { useAppDispatch } from "../store/hooks";
import { characterAdded } from "../features/characters/characterSlice";
import * as yup from "yup";
import NavigationService from "../services/NavigationService";

export default function AddScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const dispatch = useAppDispatch();
  const initialFormValues = {
    character: "",
    characterDirection: "",
    quote: "",
    image: "",
  };

  const handleSubmit = (values: any) => {
    dispatch(characterAdded(values));
    NavigationService.navigate("Home");
  };

  const schema = yup.object().shape({
    character: yup.string().required("*This field is required."),
    characterDirection: yup.string().required("*This field is required."),
    quote: yup.string().required("*This field is required."),
    image: yup.string().required("*This field is required."),
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isValid,
          touched,
          errors,
        }) => (
          <View style={styles.formContainer}>
            <View style={styles.fieldContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.fieldTitle}>{"Name Surname:"}</Text>
                {touched.character && errors.character && (
                  <Text style={styles.errorText}>{errors.character}</Text>
                )}
              </View>
              <TextInput
                style={[styles.field, { height: 40 }]}
                onChangeText={handleChange("character")}
                onBlur={handleBlur("character")}
                value={values.character}
              />
            </View>
            <View style={styles.fieldContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.fieldTitle}>{"Job Title:"}</Text>
                {touched.characterDirection && errors.characterDirection && (
                  <Text style={styles.errorText}>{errors.characterDirection}</Text>
                )}
              </View>
              <TextInput
                style={[styles.field, { height: 40 }]}
                onChangeText={handleChange("characterDirection")}
                onBlur={handleBlur("characterDirection")}
                value={values.characterDirection}
              />
            </View>
            <View style={styles.fieldContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.fieldTitle}>{"About Him/Her:"}</Text>
                {touched.quote && errors.quote && (
                  <Text style={styles.errorText}>{errors.quote}</Text>
                )}
              </View>
              <TextInput
                style={[styles.field, { height: 80 }]}
                onChangeText={handleChange("quote")}
                onBlur={handleBlur("quote")}
                value={values.quote}
              />
            </View>
            <View style={styles.fieldContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.fieldTitle}>{"Image image:"}</Text>
                {touched.image && errors.image && (
                  <Text style={styles.errorText}>{errors.image}</Text>
                )}
              </View>
              <TextInput
                style={[styles.field, { height: 40 }]}
                onChangeText={handleChange("image")}
                onBlur={handleBlur("image")}
                value={values.image}
              />
            </View>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit as (values: any) => void}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Add Character</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  formContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 5,
  },
  fieldContainer: {
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 5,
  },
  fieldTitle: {
    fontSize: 16,
    fontWeight: "400",
  },
  field: {
    marginTop: 2,
    paddingLeft: 5,
    marginHorizontal: 7,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
  },
  submitButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "blue",
    alignSelf: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 10,
  },
});
