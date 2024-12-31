import React from "react";
import Bottom from "./bottom-button";

const Attachment = () => {
    const handleFileUpload = (event) => {
        const files = event.target.files;
        console.log("Files uploaded:", files);
        // Process files as needed
    };

    return (
        <div className="p-7 border rounded">
            <div>
                <p className="font-bold">Terms and Attachments</p>
                <p className="text-[13px]">Provide detailed information on payment and delivery terms</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {/* Dropdowns */}
                <div className="flex flex-col">
                    <label htmlFor="dropdown1" className="text-sm font-medium">Payment Terms</label>
                    <select id="dropdown1" className="border border-gray-300 rounded-lg py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="option1">Net 30</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="dropdown2" className="text-sm font-medium">Delivery Schedule</label>
                    <select id="dropdown2" className="border border-gray-300 rounded-lg py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="option1">Immediate delivery</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="dropdown3" className="text-sm font-medium">Shipping Method</label>
                    <select id="dropdown3" className="border border-gray-300 rounded-lg py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="option1">Courier Services</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>

                <div className="flex flex-col relative">
                    <label htmlFor="dropdown4" className="text-sm font-medium">Lead time</label>
                    <select id="dropdown4" className="border border-gray-300 rounded-lg py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="option1">10</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <p className="absolute text-[12px] right-7 top-9 bottom-0">Days</p>
                </div>
            </div>

            <div>
                <p className="pt-3 mt-5 font-bold">Attachment</p>
                <p className="text-[13px] pb-5">Attach all necessary files or documents</p>

                <div className="flex items-center">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 max-w-lg w-full text-center bg-white">
                        <div className="flex justify-center mb-3">
                            <div className="w-12 h-12 rounded-full  bg-gray-200 flex items-center justify-center">
                                <img
                                    className=''
                                    src="../images/cloud.png"
                                    alt="Example"
                                    style={{
                                        width: '30px',
                                        height: 'auto',
                                    }}
                                />
                            </div>
                        </div>


                        <div className="text-sm text-gray-500 mb-4">
                            <label htmlFor="file-upload" className="cursor-pointer flex justify-center">
                                <span className="font-medium text-blue-600">Click to upload </span>
                                <p className="pl-2"> or drag and drop</p>
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                className="hidden"
                                onChange={handleFileUpload}
                            />
                            <p>SVG, PNG, JPG, or GIF (max. 800x400px)</p>
                        </div>

                        <div className="flex items-center justify-center my-4">
                            <div className="border-t border-gray-300 w-1/4"></div>
                            <span className="mx-2 text-gray-500 text-sm font-medium">OR</span>
                            <div className="border-t border-gray-300 w-1/4"></div>
                        </div>

                        <label htmlFor="file-upload" className="mt-2 px-4 py-2 text-blue-600 border border-blue-600 text-sm font-medium rounded-lg hover:bg-blue-600 hover:text-white focus:outline-none cursor-pointer">
                            Browse File
                        </label>
                    </div>
                </div>
            </div>
            <Bottom />
        </div>
    );
};

export default Attachment;
