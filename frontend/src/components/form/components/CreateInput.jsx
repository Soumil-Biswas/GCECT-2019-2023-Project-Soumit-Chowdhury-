export default function CreateInput({label, name, type, placeholder, register, required, error}) {
    return (
        <div className={`flex flex-col sm:flex-row w-full gap-5 items-center ${type == "file" ? "border-4 border-slate-800 rounded-2xl p-5" : null}`}>
            <label className="w-full font-bold">
            {label}<span className="text-red-500">*</span>
            </label>
            <input
            type={type}
            placeholder={placeholder}              
            className=" w-full mt-1 mb-3 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#5b80b0] font-semibold flex"
            {...register(name, { required: required })}
            />
            {error && (
            <p className="text-red-500 text-sm">{error.message}</p>
            )}
        </div>
    )
}