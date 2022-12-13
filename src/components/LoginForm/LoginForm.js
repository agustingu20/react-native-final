import React from 'react';
import { Controller } from 'react-hook-form';
import { Image, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { styles } from './loginFormStyles';

const LoginForm = ({
  control,
  defaultValues,
  errors,
  handleBenefitNavigate,
  handleSubmit,
  submit,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://media.discordapp.net/attachments/1040409257620799541/1049713538647724154/Logo1.png',
        }}
        style={styles.logo}
      />
      <Text style={styles.logInText}>Iniciar Sesión</Text>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput
                onChangeText={onChange}
                style={styles.input}
                value={value}
                label='Email'
                underlineColor='#fff'
                activeUnderlineColor='#C83C45'
              />
            </>
          )}
          name='email'
          defaultValue={defaultValues.email}
        />
        {errors.email?.type === 'pattern' && (
          <Text style={styles.errorMsg}>Ingresa un mail válido</Text>
        )}
        {errors.email?.type === 'required' && (
          <Text style={styles.errorMsg}>No olvides colocar tu email!</Text>
        )}
        <Controller
          control={control}
          rules={{ required: true, maxLength: 25, minLength: 8 }}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput
                onChangeText={onChange}
                style={styles.input}
                value={value}
                label='Contraseña'
                underlineColor='#fff'
                activeUnderlineColor='#C83C45'
                secureTextEntry={true}
              />
            </>
          )}
          name='password'
          defaultValue={defaultValues.password}
        />
        {errors.password?.type === 'required' && (
          <Text style={styles.errorMsg}>No olvides colocar tu contraseña.</Text>
        )}
        {errors.password?.type === 'minLength' && (
          <Text style={styles.errorMsg}>Contraseña minimo 8 caracteres</Text>
        )}
        {errors.password?.type === 'maxLength' && (
          <Text style={styles.errorMsg}>Contraseña maximo 25 caracteres</Text>
        )}
      </View>
      <Button mode='Text' textColor='#C83C45'>
        Olvidaste tu contraseña? Toca aquí!
      </Button>
      <View>
        <Button
          mode='contained'
          style={styles.button}
          onPress={handleSubmit(submit)}
        >
          Iniciar sesión
        </Button>
      </View>
      <Button mode='Text' textColor='#C83C45' onPress={handleBenefitNavigate}>
        No tienes cuenta? Registrate!
      </Button>
    </View>
  );
};

export default LoginForm;
