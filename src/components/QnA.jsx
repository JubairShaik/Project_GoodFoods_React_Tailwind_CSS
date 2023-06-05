import { useState } from "react";
 
const title = () => {
  const [selectedType, setSelectedType] = useState("");
  const exploreData = [
    {
      id:0,
      question: "Do you offer vegetarian options?",
      answer:"Yes, we have a variety of vegetarian dishes available on our menu.",
      type: "cuisines",
    },
    {
      id: 1,
      question: "Do you offer takeout or delivery services?",
      answer: "Yes, we offer both takeout and delivery services. You can place your order online or by calling our restaurant.",
      type: "deliverys",

    },
    {
      id: 2,
      question: "What are your operating hours?",
      type: "hours",
      answer: "We are open from [opening time] to [closing time] every day of the week.",
    },
    {
      id: 3,      type: "menu",

      question: "Do you have a kids' menu?",
      answer: "Yes, we have a dedicated kids' menu with a variety of options suitable for children.",
    },
    {
      id: 4,
      type: " reqss",

      question: "Can I make special dietary requests?",
      answer: "Absolutely! We accommodate special dietary requests to the best of our abilities. Please inform our staff about your requirements when placing your order.",
    },
    {
      id: 5,
      type: "credit",
      question: "Do you accept credit cards?",
      answer: "Yes, we accept major credit cards for payment.",
    },
  ];
  return (
    <>

    <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="600">
    <div  className=" sm:mt-[4rem] sm:mx-[4rem] ">
    <h1 className="sm:text-[2.6rem] text-[1.4rem] font-bold font-poppins text-center  text-slate-200 ">Frequently <span className="text-orange-500">Asked </span> Questions</h1>


    <div className="footer-accordian-container my-10">
      {exploreData.map((data, index) => {
        return (
          <div className="footer-accordian border-slate-500  border-[90%] border-b-[1px] " key={index}>
            <div
              className=" flex items-center justify-between bg-transparent"
              onClick={() =>
                selectedType === data.type
                  ? setSelectedType("")
                  : setSelectedType(data.type)
              }
            >
              <h2 className=" text-[1.1rem] sm:text-[1.5rem] font-bold font-poppins text-slate-300">{data.question}</h2>



              {selectedType === data.type ? 
                <div className="text-slate-500 text-[1.7rem] font-bold ">x</div>
                : <div className="text-slate-500 text-[1.7rem]  font-bold ">+</div>
              }
             </div>

             <div
             className={`overflow-hidden   transition-all duration-500 ${
               selectedType === data.type ? "max-h-[27rem]  mt-3" : "max-h-0"
             }`}
             >
             <span className=" text-[1rem] sm:text-[1.3rem]  opacity-90 text-slate-400 font-poppins">{data.answer}</span>
           </div>
             
              </div>
             
              );
            })}
         
    </div>
    
  </div>
    
   </div>
      

    </>
  );
};

export default title;




 