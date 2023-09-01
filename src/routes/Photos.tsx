import mockImage from "../assets/mock.png";
import mockImage2 from "../assets/mock2.jpeg";

function Photos() {
  return (
    <div className="w-full h-full grid grid-rows-[repeat(3,max-content)] grid-cols-3 gap-1 items-start overflow-scroll">
      <div className="flex items-center justify-center aspect-[16/9] overflow-hidden hover:border-[2px] cursor-pointer border-[#FAD800] box-border">
        <img src={mockImage} className="object-cover"></img>
      </div>
      <div className="flex items-center justify-center aspect-[16/9] overflow-hidden hover:border-[2px] cursor-pointer border-[#FAD800] box-border">
        <img src={mockImage2} className="object-cover"></img>
      </div>
      <div className="flex items-center justify-center aspect-[16/9] overflow-hidden hover:border-[2px] cursor-pointer border-[#FAD800] box-border">
        <img src={mockImage} className="object-cover"></img>
      </div>
      <div className="flex items-center justify-center aspect-[16/9] overflow-hidden hover:border-[2px] cursor-pointer border-[#FAD800] box-border">
        <img src={mockImage2} className="object-cover"></img>
      </div>
      <div className="flex items-center justify-center aspect-[16/9] overflow-hidden hover:border-[2px] cursor-pointer border-[#FAD800] box-border">
        <img src={mockImage} className="object-cover"></img>
      </div>
      <div className="flex items-center justify-center aspect-[16/9] overflow-hidden hover:border-[2px] cursor-pointer border-[#FAD800] box-border">
        <img src={mockImage2} className="object-cover"></img>
      </div>
      <div className="flex items-center justify-center aspect-[16/9] overflow-hidden hover:border-[2px] cursor-pointer border-[#FAD800] box-border">
        <img src={mockImage} className="object-cover"></img>
      </div>
      <div className="flex items-center justify-center aspect-[16/9] overflow-hidden hover:border-[2px] cursor-pointer border-[#FAD800] box-border">
        <img src={mockImage2} className="object-cover"></img>
      </div>
    </div>
  );
}

export default Photos;
