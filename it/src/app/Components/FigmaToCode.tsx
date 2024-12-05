import Image from "next/image"
import { Eye, Heart } from 'lucide-react';

const FigmaToCode = () => {
    return (
        <div>
            <div className="flex justify-start items-center p-2 gap-4">
            <div className="bg-[#F6F6F6] border border-red-600 w-[268px] h-[432px] rounded-lg mb-5 mt-20">
                <div className="flex justify-end p-5 w-full">
                    <Heart />
                </div>
                <div className="flex justify-center">
                    <Image src="/iphone14.png" alt="ProductOne" width={200} height={200} />
                </div>

                <h3 className="text-center pt-4 font-medium text-base">
                    Apple iPhone 14 Pro Max 128GB Deep Purple
                </h3>

                <div className="flex justify-center">
                    <button className="rounded-lg pt-3 mt-5 pb-3 bg-black text-white w-[183px] h-12">
                        Buy Now
                    </button>
                </div>


            </div>
            
            <div className="bg-[#F5F5F5] border border-blue-600 w-[300px] h-[370px] rounded-lg">
                <div className="flex justify-end p-5 w-fill">
                    <Heart />
                </div>
                <div className="flex justify-end pr-5  w-fill">
                    <Eye />
                </div>
                <div className="flex justify-around">
                    <Image src="/Camera.png" alt="ProductOne" width={190} height={180} />
                </div>

                <div className="flex justify-center">
                    <button className="bg-[#000000] rounded-lg pt-3 mt-5 pb-3 bg-black text-white w-[300px] h-[41]">
                        Add To Cart
                    </button>
                
                </div>
                <h3 className="text-center pt-4 font-medium text-base width={208} height={24}">
                    CANON EOS DSLR Camera
                </h3>

                <div className="flex justify-center items-center space-x-4">
  <div className="text-center pt-4 font-medium text-base , flex items-center space-x-1">
    <div>$360</div>
    
      
      <div>
        </div>
      <div className="text-yellow-500">&#9733;</div>
      <div className="text-yellow-500">&#9733;</div>
      <div className="text-yellow-500">&#9733;</div>
      <div className="text-gray-300">&#9733;</div>
      <div className="text-gray-300">&#9733;</div>
    
  </div>
  </div>
  
</div>

            </div>
        </div>
        
    )
}

export default FigmaToCode