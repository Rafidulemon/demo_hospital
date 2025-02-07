"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import Button from "@/components/buttons/Button";
import EmailInput from "@/components/inputs/EmailInput";
import Image from "next/image";

const schema = z.object({
  email: z
    .string()
    .email("Invalid email")
    .nonempty({ message: "Email is required" }),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

const SignUpPage = () => {
  const router = useRouter();
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
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-[50%] md:h-fit flex md:flex-row flex-col w-[90%] max-w-[900px] bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="hidden md:w-1/2 bg-primary md:flex flex-col items-center justify-center relative p-6 text-white">
          <span className="mb-6 text-xl">Already have an account?</span>
          <div
            className="bg-gradient-to-br from-blue-300 to-white w-[200px] h-[270px] flex justify-center items-center"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          >
            <Image
              src="/images/sign_up_doctor.png"
              alt="Doctor"
              width={170}
              height={170}
            />
          </div>

          <div
            className="absolute bottom-10 flex flex-col items-center bg-white text-gray-700 p-2 rounded-md shadow-md cursor-pointer"
            onClick={() => router.push("/auth/login")}
          >
            <p className="text-sm font-semibold">Log in</p>
            <p className="text-xs">Click here to Log in</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit(handleLogin)} className="mt-6">
            <EmailInput
              name="email"
              error={errors.email}
              label="Account Name"
              register={register}
              isRequired
              placeholder="company@example.com"
            />
            <Button type="submit" theme="primary" isWidthFull className="mt-4">
              Sign Up
            </Button>
          </form>
        </div>

        <div className="md:hidden bg-primary h-full grid grid-cols-2 gap-6">
          <div className="flex flex-col items-center justify-center p-6 text-white">
            <span className="mb-6 text-xl">Already have an account?</span>
            <Button
              type="button"
              theme="secondary"
              isWidthFull
              className="mt-4"
              onClick={() => router.push("/auth/login")}
            >
              Login
            </Button>
          </div>
          <div className="h-full flex flex-col justify-end">
            <Image
              src="/images/sign_up_doctor.png"
              alt="Doctor"
              width={140}
              height={140}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
