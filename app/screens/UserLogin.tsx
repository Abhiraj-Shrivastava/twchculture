import React from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const UserLogin: React.FC = () => {

  const { control, handleSubmit, formState: { errors } } = useForm<{

    email: string;
    password: string;

  }>();

  const onSubmit = (data: any) => {
    Alert.alert('Login Successful', JSON.stringify(data, null, 2));

  };

  

  return (
    <View className="flex-1 bg-gray-100 p-6 justify-center">

      <Text className="text-2xl font-bold text-center mb-4">User Login</Text>

      <View className="bg-white shadow-md rounded-lg p-6">

        <Controller
          control={control}
          name="email"
          rules={{ required: 'Email is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="border border-gray-300 rounded-md p-3 mb-4"
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
            />
          )}
        />

        {
        errors.email && <Text className="text-red-500">{errors.email.message}</Text>
        }


        <Controller
          control={control}
          name="password"
          rules={{ required: 'Password is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="border border-gray-300 rounded-md p-3 mb-4"
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
        />

        {
        errors.password && <Text className="text-red-500">{errors.password.message}</Text>
        }

        <Button  title="Login"  onPress={handleSubmit(onSubmit)}  color="#4A90E2"/>

       

      </View>

    </View>
  );
};

export default UserLogin;
