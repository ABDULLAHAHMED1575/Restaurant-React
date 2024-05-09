import React from "react";
import bgImg from "../../assets/bgImage.jpg";
import Food1 from '../../assets/biryani.png'
import Food2 from "../../assets/Burger.png";
import Food3 from "../../assets/Chicken.png";

const ImageList = [
  {
    id: 1,
    img: Food1,
  },
  {
    id: 2,
    img: Food2,
  },
  {
    id: 3,
    img: Food3,
  }
];

const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

export const hero = () => {
  const [imageId, setImage] = React.useState(Food1);
  return (
    <>
      <div
        style={bgImage}
        className="min-h-[550px] sm:min-h-[600px]
            bg-gray-100 dark:bg-gray-950
             dark:text-white duration-200 
             flex justify-center items-center"
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* textContent */}

            <div
              className=" flex flex-col justify-center gap-4 pt-12 
                        sm:pt-0 text-center sm:text-left order-2 sm:order-1
                        "
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black">
                Welcome Foodies
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore iure possimus ratione incidunt pariatur accusamus voluptatem repellat, eveniet ea, reiciendis, quos cum natus laudantium? Commodi nam deleniti earum ducimus fugiat!
              </p>
              <div>
              <button
                className="
                bg-gradient-to-r from-primary
                to-secondary text-white px-2
                py-2 rounded-full hover:scale-105
                duration-200
                "
              >
                Order Now
              </button>
            </div>
            </div>
            <div
            className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px]
          flex justify-center items-center relative
          "
          >
            {/* main Image section */}
            <div className="flex lg:mx-16 justify-center items-center h-[300px] sm:h-[450px]
            overflow-hidden
            ">
              <img
                src={imageId}
                alt=""
                className="w-[300px] sm:w-[450px]
                mx-auto spin"
              />
            </div>
            {/* Image list section */}
            <div className="flex lg:flex-col lg:top-1/2 
            lg: -translate-y-1/2
            lg:py-2 justify-center gap-4 absolute
            bottom-[0px] lg:-right-0 bg-white/30 
            rounded-full
            ">
                {
                    ImageList.map((item) =>(
                        <img
                        key={item.id}
                        src={item.img}
                        className="max-w-[80px] h-[80px]
                        object-contain  inline-block
                        hover:scale-105
                        duration-200
                        "
                        onClick={
                            ()=>{
                                setImage(
                                    item.id === 1? Food1 : 
                                    item.id === 2? Food2 :
                                    Food3
                                )
                            }
                        }
                        />
                    )
                )}
            </div>
          </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default hero;
