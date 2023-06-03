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
      type: "cuisines",

    },
    {
      id: 2,
      question: "What are your operating hours?",
      type: "cuisines",
      answer: "We are open from [opening time] to [closing time] every day of the week.",
    },
    {
      id: 3,      type: "cuisines",

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
    <div  className="  ">
    <h1 className="text-[3rem] font-bold font-poppins text-orange-500 ">Explore options near me</h1>
    <div className="footer-accordian-container">
      {exploreData.map((data, index) => {
        return (
          <div className="footer-accordian" key={index}>
            <div
              className="footer-listitem-header"
              onClick={() =>
                selectedType === data.type
                  ? setSelectedType("")
                  : setSelectedType(data.type)
              }
            >
              <h2 className="text-[1.5rem] font-bold font-poppins text-orange-800">{data.question}</h2>
              {selectedType === data.type ? 
                <div className="text-orange-600 text-[1.7rem] font-bold ">x</div>
                : <div className="text-orange-600 text-[1.7rem]  font-bold ">+</div>
              }
            </div>

            {selectedType === data.type && (
              <div className="footer-listitem-container">

                  <span className="footer-listitem" key={index}>{data.answer}</span>
               
              </div>
            )}
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
