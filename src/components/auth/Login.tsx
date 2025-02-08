"use client"
import { useRouter } from '@/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Button from '../buttons/Button';
import MobileNumberInput from '../inputs/MobileNumberInput';
import PasswordInput from '../inputs/PasswordInput';

const Login = () => {
    const router = useRouter();
      const t = useTranslations("login_signup");
      const schema = z.object({
        mobile: z
          .string()
          .length(11, t("invalid_phone"))
          .regex(/^01[3-9]\d{8}$/, t("invalid_phone")),
        password: z.string().min(6, t("min_pass")),
      });
      
    
      type FormData = z.infer<typeof schema>;
      const {
        handleSubmit,
        formState: { errors },
        register,
      } = useForm<FormData>({
        resolver: zodResolver(schema),
      });
    
      const handleForgotPasswordClick = () => {
        router.push("/auth/forget-password");
      };
    
      const handleLogin = (data: FormData) => {
        console.log("Form submitted:", data);
        router.push("/");
      }
  return (
    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            {t("login")}
          </h2>
          <form onSubmit={handleSubmit(handleLogin)} className="mt-6">
            <MobileNumberInput
              name="mobile"
              error={errors.mobile}
              label={t("phone")}
              register={register}
              isRequired
              placeholder={t("phone_placeholder")}
            />

            <PasswordInput
              name="password"
              error={errors.password}
              register={register}
              label={t("password")}
              isRequired
              placeholder={t("password_placeholder")}
            />
            <div className="flex justify-between items-center mt-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                {t("remember")}
              </label>
              <span
                onClick={handleForgotPasswordClick}
                className="text-primary cursor-pointer"
              >
                {t("forget")}
              </span>
            </div>
            <Button type="submit" theme="primary" isWidthFull className="mt-4">
              {t("login")}
            </Button>
            <p className="text-sm text-center mt-4 text-gray-500 cursor-pointer">
              {t("access")}
            </p>
          </form>
        </div>
  )
}

export default Login
