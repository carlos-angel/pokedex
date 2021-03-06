import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { user, userDetails } from '../../utils/userDB';
import { useAuth } from '../../hooks/useAuth';

export default function LoginForm() {
  const [error, setError] = useState('');
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (values) => {
      const { username, password } = values;
      setError('');
      if (username !== user.username || password !== user.password) {
        setError('invalid credentials');
      } else {
        login(userDetails);
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder='username'
        autoCapitalize='none'
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        style={styles.input}
        placeholder='password'
        autoCapitalize='none'
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Button title='Login' onPress={formik.handleSubmit} />

      {formik.errors && (
        <>
          <Text style={styles.error}>{formik.errors.username}</Text>
          <Text style={styles.error}>{formik.errors.password}</Text>
        </>
      )}
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

function initialValues() {
  return { username: 'poke-user', password: 'password' };
}

function validationSchema() {
  return {
    username: Yup.string().required('username is required'),
    password: Yup.string().required('password is required'),
  };
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    marginTop: 20,
  },
});
