import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Image, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { styles } from './registerFormStyles';

const RegisterForm = ({
  control,
  defaultValues,
  errors,
  isError,
  handleSubmit,
  submit,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://media.discordapp.net/attachments/1040409257620799541/1049713538647724154/Logo1.png',
        }}
        style={styles.logo}
      />
      <Text style={styles.registerText}>Ingresa tus datos</Text>
      <View>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{ required: true, maxLength: 25 }}
            render={({ field: { onChange, value } }) => (
              <>
                <TextInput
                  onChangeText={onChange}
                  style={styles.input}
                  value={value}
                  label='Nombre'
                  underlineColor='#fff'
                  activeUnderlineColor='#C83C45'
                />
              </>
            )}
            name='name'
            defaultValue={defaultValues.name}
          />
          {errors.name?.type === 'required' && (
            <Text style={styles.errorMsg}>No olvides colocar tu nombre!</Text>
          )}
          {errors.name?.type === 'maxLength' && (
            <Text style={styles.errorMsg}>nombre maximo 25 caracteres</Text>
          )}
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
                  type='email'
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
                  secureTextEntry={isVisible}
                  right={
                    <TextInput.Icon
                    icon={isVisible ? 'eye' : 'eye-off'}
                    onPress={() => setIsVisible(!isVisible)} />
                  }
                />
              </>
            )}
            name='password'
            defaultValue={defaultValues.password}
          />
          {errors.password?.type === 'required' && (
            <Text style={styles.errorMsg}>
              {' '}
              No olvides colocar tu contraseña!{' '}
            </Text>
          )}
          {errors.password?.type === 'minLength' && (
            <Text style={styles.errorMsg}>Contraseña minimo 8 caracteres</Text>
          )}
          {errors.password?.type === 'maxLength' && (
            <Text style={styles.errorMsg}>Contraseña maximo 25 caracteres</Text>
          )}
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <TextInput
                  onChangeText={onChange}
                  style={styles.input}
                  value={value}
                  label='Repetir Contraseña'
                  underlineColor='#fff'
                  activeUnderlineColor='#C83C45'
                  secureTextEntry={isVisible}
                  right={
                    <TextInput.Icon
                    icon={isVisible ? 'eye' : 'eye-off'}
                    onPress={() => setIsVisible(!isVisible)}
                    />
                  }
                />
              </>
            )}
            name='password2'
            defaultValue={defaultValues.password2}
          />
          {isError && (
            <Text style={styles.errorMsg}>Las contraseñas no coinciden</Text>
          )}
        </View>
        <Button
          mode='contained'
          onPress={handleSubmit(submit)}
          style={styles.button}
        >
          Adherite
        </Button>
      </View>
      <Button mode='Text' textColor='#C83C45' style={styles.buttonText}>
        Ya soy miembro! Quiero iniciar sesión!
      </Button>
    </View>
  );
};

export default RegisterForm;
