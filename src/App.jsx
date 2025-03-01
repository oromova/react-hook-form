import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">React Hook Form</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Ismingiz */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Ismingiz:</label>
            <input
              {...register("firstName", {
                required: "To'ldirilishi shart",
                minLength: {
                  value: 3,
                  message: "3ta harfdan kam bo'lmasin",
                },
              })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ismingizni kiriting"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          {/* Familiyangiz */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Familiyangiz:</label>
            <input
              {...register("lastName", {
                required: "To'ldirilishi shart",
                minLength: {
                  value: 3,
                  message: "3ta harfdan kam bo'lmasin",
                },
              })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Familiyangizni kiriting"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>

          {/* Telefon raqamingiz */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Telefon raqamingiz:</label>
            <input
              type="tel"
              {...register("phoneNumber", {
                required: "Telefon raqam kiritilishi shart",
                pattern: {
                  value: /^[0-9]{9,12}$/,
                  message: "To'g'ri telefon raqamini kiriting",
                },
              })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="998901234567"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
            )}
          </div>

          {/* Xabar (Textarea) */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Xabar:</label>
            <textarea
              {...register("message", {
                required: "Xabar kiritilishi shart",
                minLength: {
                  value: 10,
                  message: "Kamida 10ta harf bo‘lishi kerak",
                },
              })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Xabaringizni kiriting..."
              rows="4"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
