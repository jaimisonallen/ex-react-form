import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
};

export const UserForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "Jaimison",
      email: "allen@globo.com",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data));

  console.log(watch("email")); // watch input value by passing the name of it
  console.log("Error:", {
    errors,
  }); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        placeholder="Name"
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 4,
            message: "Name shoud be more than 8 characters",
          },
        })}
      />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        placeholder="Email"
        {...register("email", { required: "Email is required" })}
      />
      {/* errors will return when field validation fails  */}
      {errors.name && <span>{errors.name.message}</span>}
      {errors.email && <span>{errors.email.message} </span>}

      <input type="submit" />
    </form>
  );
};
