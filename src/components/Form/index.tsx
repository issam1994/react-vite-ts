import { useForm } from "react-hook-form";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };
  const intialValues = {
    firstName: "bill",
    lastName: "luo",
    email: "bluebill1049@hotmail.com",
    age: -1,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* name  */}
      <label htmlFor="lastName">Name</label>
      <input
        defaultValue={intialValues.lastName}
        placeholder="luo"
        {...register("lastName", {
          validate: (value: string) => value.length > 3,
        })}
      />
      {errors.lastName && <p>Your last name is less than 3 characters</p>}
      {/* email  */}
      <label htmlFor="email">Email</label>
      <input
        defaultValue={intialValues.email}
        placeholder="bluebill1049@hotmail.com"
        type="email"
        {...register("email", {
          required: true,
          pattern:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
      />
      {errors.email && errors.email.type === "required" && (
        <p>Email is required</p>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <p>Please enter a valid email</p>
      )}
      {/* age  */}
      <label htmlFor="age">Age</label>
      <input
        defaultValue={intialValues.age}
        placeholder="0"
        type="text"
        {...register("age", {
          validate: {
            positiveNumber: (value: string) => parseFloat(value) > 0,
            lessThanHundred: (value: string) => parseFloat(value) < 200,
          },
        })}
      />
      {errors.age && errors.age.type === "positiveNumber" && (
        <p>Your age is invalid</p>
      )}
      {errors.age && errors.age.type === "lessThanHundred" && (
        <p>Your age should be greater than 200</p>
      )}

      <input type="submit" />
    </form>
  );
};
