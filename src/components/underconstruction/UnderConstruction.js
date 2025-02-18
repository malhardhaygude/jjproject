import { FaTools } from "react-icons/fa";
import { motion } from "framer-motion";



const UnderConstruction = () => {
  return (
    <div className="fixed bottom-4 left-1 sm:left-2 bg-white/90 text-gray-800 p-3 sm:p-4 rounded-lg shadow-md flex items-center space-x-2 scale-75  cursor-pointer">
      <motion.div
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <FaTools className="text-blue-400 text-lg " />
      </motion.div>
      <div>
        <h1 className="text-sm  font-semibold">The website is almost ready!</h1>
       
      </div>
    </div>
  );
};

export default UnderConstruction;
