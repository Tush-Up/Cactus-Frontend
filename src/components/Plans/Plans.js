import React, { useState } from "react";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useAuth } from "../../auth-context";
import Logo from "../../assets/brown-black-logo.png";

const Plans = () => {
  const { authState } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [percent, setPercent] = useState(null);
  const [premium, setPremium] = useState(null);
  const [plan, setPlan] = useState("");
  const salary = 100000;

  //Function to calculate premium
  const calcPremium = (num, percent) => {
    const prem = (num / 100) * percent;
    setPremium(prem);
  };

  //Fluterwave payment configuration
  const config = {
    public_key: process.env.REACT_APP_PAYMENT_KEY,
    tx_ref: Date.now(),
    amount: premium,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    redirect_url: "https://tushup-cactus.herokuapp.com/handle-flutterwave-payment",
    customer: {
      email: authState?.email,
      phonenumber: authState?.phone,
      name: authState?.name,
    },
    customizations: {
      title: "Cactus Insurance Premium Payment",
      description: `Payment for Cactus Insurance ${plan} premium plan`,
      logo: Logo,
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <>
      <div className="px-10 py-10">
        <div className="max-w-7xl m-auto">
          <section id="plan" className="">
            <header className="text-center w-full flex justify-center">
              <div className="max-w-[700px]">
                <h3 className="text-3xl font-bold mb-5 text-black">Choose Flexible Premium Plan For Yourself</h3>
                <p className="text-xl text-cactus-gray mb-2">
                  Make good deal just for you to take your experience to the next level
                </p>
                <br />
                <button className="text-lg font-medium bg-cactus-brown text-white px-10 py-3 rounded-lg">
                  Monthly
                </button>
                {/* <button className="text-lg px-3 font-bold text-gray-500">
                Annual saves 30%
              </button> */}
              </div>
            </header>
            <div className="flex flex-col mt-10 mx-5 space-y-5 md:space-y-0 md:flex-row md:space-x-5 md:mx-0 justify-between">
              <div className="flex-1x">
                <div className="bg-white p-10 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-bold  text-black mb-3">Lite</h4>

                      <h4 className="text-base font-medium text-black">Premium: 2% of monthly income</h4>
                    </div>
                  </div>

                  <hr className="mt-5" />
                  {/* start list section */}
                  <div className="mt-10">
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className="bg-[#30D158] rounded-full p-1">
                          {/* <AiOutlineCheck size="1.5em" /> */}
                          <svg
                            className="flex-shrink-0 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Get paid 40% of your salary in the event of a job loss
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className=" bg-[#c4c4c4] rounded-full p-1">
                          {/* <AiOutlineCheck size="1.5em" /> */}
                          <svg
                            className="flex-shrink-0 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="ml-3 text-base text-gray-900">View job vacancies</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#c4c4c4] rounded-full p-1">
                          {/* <AiOutlineCheck size="1.5em" /> */}
                          <svg
                            className="flex-shrink-0 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="ml-3 text-base text-gray-900">Hiring companies see your resume</span>
                      </li>
                    </ul>
                  </div>
                  {/* end of list section */}
                  <div className="mt-10">
                    <button
                      onClick={() => {
                        onOpen();
                        setPercent(2);
                        calcPremium(salary, 2);
                        setPlan("Lite");
                      }}
                      className="text-lg font-medium bg-white border-2 border-cactus-brown text-cactus-brown hover:bg-cactus-brown hover:text-white w-60 py-3 rounded-lg"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex-1x hover:mb-5">
                <div className="bg-white p-10 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-bold  text-black mb-3">Basic</h4>

                      <h4 className="text-base font-medium text-black">Premium: 4% of monthly income</h4>
                    </div>
                  </div>

                  <hr className="text-gray-100 mt-5" />
                  {/* start list section */}
                  <div className="mt-10">
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className="bg-[#30D158] rounded-full p-1">
                          {/* <AiOutlineCheck size="1.5em" /> */}
                          <svg
                            className="flex-shrink-0 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Get paid 50% of your salary in the event of a job loss
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#30D158] rounded-full p-1">
                          {/* <AiOutlineCheck size="1.5em" className="bg-white" /> */}
                          <svg
                            className="flex-shrink-0 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="ml-3 text-base font-medium text-gray-900">View job vacancies</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#c4c4c4] rounded-full p-1">
                          {/* <AiOutlineClose size="1.5em" /> */}
                          <svg
                            className="flex-shrink-0 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="ml-3 text-base text-gray-900">Hiring Companies see your resume</span>
                      </li>
                    </ul>
                  </div>
                  {/* end of list section */}
                  <div className="mt-10">
                    <button
                      onClick={() => {
                        onOpen();
                        setPercent(4);
                        calcPremium(salary, 4);
                        setPlan("Basic");
                      }}
                      className="text-lg font-medium bg-white border-2 border-cactus-brown text-cactus-brown hover:bg-cactus-brown hover:text-white w-60 py-3 rounded-lg"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex-1x hover:mb-5">
                <div className="bg-white p-10 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-bold  text-black mb-3">Plus</h4>
                      <h4 className="text-base font-medium text-black">Premium: 6% of monthly income</h4>{" "}
                    </div>
                  </div>

                  <hr className="text-gray-100 mt-5" />
                  {/* start list section */}
                  <div className="mt-10">
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className="bg-[#30D158] rounded-full p-1">
                          {/* <AiOutlineCheck size="1.5em" /> */}
                          <svg
                            className="flex-shrink-0 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Get paid 75% of your salary in the event of a job loss
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className=" bg-[#30D158] rounded-full p-1">
                          {/* <AiOutlineClose size="1.5em" /> */}
                          <svg
                            className="flex-shrink-0 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="ml-3 text-base font-medium text-gray-900">View job vacancies</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#30D158] rounded-full p-1">
                          {/* <AiOutlineClose size="1.5em" /> */}
                          <svg
                            className="flex-shrink-0 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Hiring Companies see your resume
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* end of list section */}
                  <div className="mt-10">
                    <button
                      onClick={() => {
                        onOpen();
                        setPercent(6);
                        calcPremium(salary, 6);
                        setPlan("Plus");
                      }}
                      className="text-lg font-medium bg-white border-2 border-cactus-brown text-cactus-brown hover:bg-cactus-brown hover:text-white w-60 py-3 rounded-lg"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <h3>Payment Summary ({plan})</h3>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h3 className="mb-3">
              You are about to pay <span className="font-bold">N{premium}</span> as premium for the month.
            </h3>

            <p>
              Note: Your premium is calculated as <span className="font-bold">{percent}%</span> of your salary, <span className="font-bold">N{salary}</span>.
            </p>
          </ModalBody>

          <div className="w-full flex justify-center items-center my-5">
            <Button
              onClick={() => {
                handleFlutterPayment({
                  callback: (response) => {
                    console.log(response);
                    closePaymentModal(); // this will close the modal programmatically
                  },
                  onClose: () => {},
                });
              }}
              type="submit"
              variant="solid"
              color="#ffffff"
              bg="brand.100"
              _hover={{ bg: "brand.300" }}
              mr={3}
            >
              Proceed to pay
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Plans;
