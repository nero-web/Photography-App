import { useState, useEffect } from "react";
import { items } from "../components/AllData";
import { useParams } from "react-router-dom";
import Home from "./Home";

const ImagePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const { id } = useParams();

      const item = items.find((item) => item.id === parseInt(id));

      const [image, setImage] = useState(item.imgp);

      const changeImage = (e) => {
        setImage(e.target.src);
      };
    
    return ( 
        <div className="w-full h-screen mb-[-136px] pb-5 px-5 relative lg:mt-[140px] mt-[100px] flex justify-center">
            <div className="container pb-5 px-5 h-auto">
                <div className="w-full flex relative mdi flex-row">
                    <div className="w-[50%] h-full imgps">
                        <div className="w-full h-[70%] flex justify-center">
                            <img src={image} alt="pic" className="w-[75%] h-full object-cover"/>
                        </div>
                        <div className="small-imgs">
                            <img onMouseOver={changeImage} src={item.imgp} alt="pic"/>
                            <img onMouseOver={changeImage} src={item.otherImgs[0]} alt="pic"/>
                            <img onMouseOver={changeImage} src={item.otherImgs[1]} alt="pic"/>
                        </div>
                    </div>
                    <div className="product-right imgps">
                        <h1 className="h11">{item.title}</h1>
                        <p className="product-spec">{item.description}</p>
                    </div>
                </div>
                </div>
                </div>
    )
};

export default ImagePage;
