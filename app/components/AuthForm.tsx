'use client';

import {useCallback, useState} from "react";
import {useForm, FieldValues, SubmitHandler} from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import AuthSocialButton from "./AuthSocialButton";
import {BsGithub, BsGoogle} from 'react-icons/bs';
type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'REGISTER') {
      // axios register
    }

    if (variant === 'LOGIN') {
      // nextauth signin
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    //next auth social sign in
  };

  const toggleVariant = useCallback(() => {
    setVariant(variant === 'LOGIN' ? 'REGISTER' : 'LOGIN');
  }, [variant]);

  return (
    <div
      className="
    mt-8
    sm:mx-auto
    sm:w-full
    sm:max-w-md
    "
    >
      <div
        className="
        bg-white
        px-4
        py-8
        shadow
        sm:rounded-lg
        sm:px-10
        "
      >
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {variant === 'REGISTER' && (
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
            />
          )}


          <Input
            id="email"
            label="Email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />

          <Input
            id="password"
            type="password"
            label="Password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />

          <Button type="submit"
            disabled={isLoading}
            fullWidth
          >
            {variant === 'LOGIN' ? 'Sign in' : 'Register'}
          </Button>

          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300">
              </div>
            </div>
            <div className="relative flex justify-center text-sm text-gray-500">
              <span className="bg-white px-2">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction('github')}
            />

            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction('google')}
            />
          </div>
          <div
            className="
            flex 
            gap-2 
            justify-center 
            text-sm 
            mt-6 
            px-2 
            text-gray-500
          "
          >
            <div>
              {variant === 'LOGIN' ? 'New to Messenger?' : 'Already have an account?'}
            </div>
            <div
              onClick={toggleVariant}
              className="underline cursor-pointer"
            >
              {variant === 'LOGIN' ? 'Create an account' : 'Login'}
            </div>
          </div>

        </form>
      </div >
    </div >
  );
};

export default AuthForm;