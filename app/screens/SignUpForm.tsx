import React from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const SignUpForm: React.FC = () => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm<{
    name: string;
    email: string;
    dob: string;
    password: string;
    phone: string;
    address: string;
    city: string;
    country: string;
  }>();

  const onSubmit = (data: any) => {
    Alert.alert('Form Submitted', JSON.stringify(data, null, 2));
  };

  return (
    <View className="flex-1 bg-gray-100 p-6 justify-center">

      <Text className="text-2xl font-bold text-center mb-4">User Registration</Text>

      <View className="bg-white shadow-md rounded-lg p-6">

        <Controller
          control={control}
          name="name"
          rules={{ required: 'Name is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="border border-gray-300 rounded-md p-3 mb-4"
              placeholder="Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        {
          errors.name && <Text className="text-red-500">{errors.name.message}</Text>
        }

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
          name="dob"
          rules={{ required: 'Date of Birth is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="border border-gray-300 rounded-md p-3 mb-4"
              placeholder="Date of Birth (YYYY-MM-DD)"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        {
          errors.dob && <Text className="text-red-500">{errors.dob.message}</Text>
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

        <Controller
          control={control}
          name="phone"
          rules={{ required: 'Phone number is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="border border-gray-300 rounded-md p-3 mb-4"
              placeholder="Phone Number"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="phone-pad"
            />
          )}
        />

        {
          errors.phone && <Text className="text-red-500">{errors.phone.message}</Text>
        }

        <Controller
          control={control}
          name="address"
          rules={{ required: 'Address is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="border border-gray-300 rounded-md p-3 mb-4"
              placeholder="Address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        {
          errors.address && <Text className="text-red-500">{errors.address.message}</Text>
        }

        <Controller
          control={control}
          name="city"
          rules={{ required: 'City is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="border border-gray-300 rounded-md p-3 mb-4"
              placeholder="City"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        {
          errors.city && <Text className="text-red-500">{errors.city.message}</Text>
        }


        <Controller
          control={control}
          name="country"
          rules={{ required: 'Country is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="border border-gray-300 rounded-md p-3 mb-4"
              placeholder="Country"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        {
          errors.country && <Text className="text-red-500">{errors.country.message}
          </Text>
        }

        <Button title="Submit" onPress={handleSubmit(onSubmit)} color="#4A90E2" />

        <Button title="Reset" onPress={() => reset()} color="#FF6B6B" style={{ marginTop: 10 }} />

      </View>

    </View>

  );
};

export default SignUpForm;
