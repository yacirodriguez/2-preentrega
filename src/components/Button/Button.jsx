const Button = ({ label, callback, color }) => {
  return (
    <button
      onClick={callback}
      className={`w-36 rounded-md p-2 border border-gray-400 text-black ${color} hover:bg-gray-200 hover:border-gray-500 transition duration-300 ease-in-out`}
      style={{ boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}
    >
      {label}
    </button>
  );
};

export default Button;
