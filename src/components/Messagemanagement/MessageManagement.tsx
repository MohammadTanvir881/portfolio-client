import { TMessage } from "@/app/(withDashboardComponent)/dashboard/messagemanagement/page";
import { format } from 'date-fns';
const MessageCard = ({message} : {message : TMessage}) => {
    const timestamp = message.createdAt;
    const formattedDate = format(new Date(timestamp), 'yy-MM-dd HH-mm');
    return (
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Message Container */}
        <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
            {/* Sender Info */}
            <div className="space-y-1">
              <div className="flex flex-col  gap-2">
                <h3 className="text-lg font-semibold text-gray-900">{message.name}</h3>
                {/* <span className="hidden md:inline-block text-gray-400">•</span> */}
                <span className="text-sm text-gray-600">{message.email}</span>
              </div>
              {/* Mobile Email */}
              <span className="md:hidden text-sm text-gray-600">{message.email}</span>
            </div>
  
            {/* Time */}
            <div className="text-sm font-semibold text-gray-500">
              sent at {formattedDate}
            </div>
          </div>
  
          {/* Message Body */}
          <div className="mt-4">
            <p className="text-gray-800 leading-relaxed">
              {message.message}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default MessageCard;
  