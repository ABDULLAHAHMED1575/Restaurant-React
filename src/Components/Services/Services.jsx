import React from "react";
import Img2 from "../../assets/biryani.png"
import Img3 from "../../assets/Chicken.png"
import Img4 from "../../assets/Burger.png"

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Burger",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita temporibus, rem labore unde cumque eius, maiores veniam perspiciatis quidem dicta ipsa distinctio voluptate voluptatem sapiente doloremque saepe doloribus. Eaque, aperiam.",
  },
  {
    id: 2,
    img: Img3,
    name: "Biryani",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita temporibus, rem labore unde cumque eius, maiores veniam perspiciatis quidem dicta ipsa distinctio voluptate voluptatem sapiente doloremque saepe doloribus. Eaque, aperiam.",
  },
  {
    id: 3,
    img: Img4,
    name: "Crispy Chicken",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita temporibus, rem labore unde cumque eius, maiores veniam perspiciatis quidem dicta ipsa distinctio voluptate voluptatem sapiente doloremque saepe doloribus. Eaque, aperiam.",
  },
];

export const Services = () => {
  return (
    <>
      <div className="py-10 ">
        <div className="container">
          <div
            className="text-center mb-20 max-w-[400px]
            mx-auto
            "
          >
            <p
              className="text-sm bg-clip-text text-transparent bg-gradient-to-r
                from-primary to-secondary  
                "
            >
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400 ">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur libero ipsam quasi vitae nulla quo repudiandae minus,
              labore corporis itaque consectetur ut laborum autem possimus
              tempore earum, blanditiis rerum asperiores!
            </p>
          </div>
          {/*Card section*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map(({id,img,name,description})=>{
                return(
                    <>
                        <div key = {id} 
                        className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800
                        hover:bg-primary hover:text-white duration-300 p-4 shadow-xl
                        "
                        >
                            <div className="h-[100px]" >
                                <img src={img} alt="" className="max-w-[200px] mx-auto
                                block transform -translate-y-14 group-hover:rotate-6 
                                duration-300
                                "/>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">{name}</h1>
                            <p className="text-gray-500 text-sm line-clamp-2 ">{description}</p>
                        </div>
                    </>
                    
                )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
