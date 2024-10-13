// import React from "react";
// import Image from "next/image";
// import TimelineImg from "@/assets/svgs/TimelineImg";

// export default function TimelineComponent() {
//   return (
//     <div className="container mx-auto px-4 py-8 bg-white">
//       <h2 className="text-4xl font-bold mb-8 text-center">
//         <span className="text-black">Adler's</span>{" "}
//         <span className="text-[#FC2D7C]">Timeline</span>
//       </h2>
//       {/* <div className=" mb-8 flex items-center justify-center "> */}
//         <div className=" flex items-center justify-center  relative w-full">
//           {/* <TimelineImg /> */}
          
//           <Image
//             src="/images/timeline.png"
//             alt="Timeline"
//             width={500} // Replace with the actual width of the image
//             height={300} // Replace with the actual height of the image
//             style={{ objectFit: "cover" }} // Apply the objectFit style
//           />
//         </div>
//       </div>
//     // </div>
//   );
// }

import React from "react";
import Image from "next/image";

export default function TimelineComponent() {
  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h2 className="text-4xl font-bold mb-8 text-center">
        <span className="text-black">Adler's</span>{" "}
        <span className="text-[#FC2D7C]">Timeline</span>
      </h2>
      <div className="flex items-center justify-center relative w-full">
        <Image
          src="/images/timeline.png"
          alt="Timeline"
          layout="responsive"
          width={1200} // Adjust width ratio
          height={600} // Adjust height ratio
          style={{ objectFit: "cover" }} // Ensures the image covers the area without distortion
        />
      </div>
    </div>
  );
}
