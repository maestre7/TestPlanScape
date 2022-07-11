
import React from "react";
import { SafeAreaView, Text, View, StyleSheet, TextInput, Button, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";

import axios from "axios";
import md5 from "md5";

import googleLogo from "../../assets/img/logoGoogle.svg";


/* MSG Error */
const errorMessages = {
  required: "This field is required",
  min: (n) => `Must have a minimum of ${n} characters`,
  pass: "The password must have at least one uppercase, one lowercase and one number.",
};

/* Field Verification */
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;


function Login( { navigation } ) {
    // set of functions for handling the form and its checks
    const { control, reset, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            user: '',
            password: ''
        }
    });

    //const navigate = useNavigate();

    const onSubmit = async (data) => {
        await axios.post("http://localhost:3003/login/",
                {"userLogin": data.user,
                "userPass": md5(data.password)})
            .then((res) => {
                reset()
                if (res.status === 200) {
                    //navigate("/1");
                    navigation.navigate("Tap", {tap: "1"})
                } else {
                    //navigate("/register");
                    navigation.navigate("Register")
                } 
        })
    }; 

    return (
        <SafeAreaView style={styles.login}>
            <Image 
                style={styles.imgStars}
                source={{ uri: googleLogo, }} 
                />
            <View style={styles.form}>
                <Controller
                    control={control}
                    rules={{
                        required: { value: true, message: errorMessages.required },
                        minLength: { value: 4, message: errorMessages.min(4) },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="User"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />)}
                    name="user"
                    />
                    {errors.user?.message && 
                        <Text>
                            {errors.user?.message} 
                        </Text>
                    }

                <Controller
                    control={control}
                    rules={{ 
                        required: { value: true, message: errorMessages.required },
                        minLength: { value: 8, message: errorMessages.min(8) }, 
                        pattern: { value: passwordRegex, message: errorMessages.pass },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        secureTextEntry
                    />)}
                    name="password"
                    />
                    {errors.password?.message && 
                        <Text> 
                            {errors.password?.message} 
                        </Text>
                    }

                <Button 
                    title="Login" 
                    style={styles.primaryButton}
                    onPress={handleSubmit(onSubmit)} 
                    />
            </View>

            <Button 
                title="Register" 
                style={styles.primaryButton} 
                onPress={() => navigation.navigate("Register")} 
                />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    login: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    imgStars: {
        width: "90%",
        zIndex: 0,
    },
    form: {
        width: "200px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "15px",
    },
    input: {
        height: "20px",
        margin: "5px",
        paddingLeft: "10px",
        borderWidth: "1px",
        borderRadius: "25px",
        fontWeight: "bold",
    },
    primaryButton: {
        height: "30px",
        width: "110px",
        marginTop: "5px",
        marginLeft: "35px",
        borderRadius: "5px",
        fontWeight : "bold",
    }
})

export default Login;