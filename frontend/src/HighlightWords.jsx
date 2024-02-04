import React, { useState } from "react"
//import keywords from "./control/keywords.csv?raw"
export default function HighlightWords() {  
    const text = "'bony contusion'~'bruise on the bone'~'acute fracture'~'recent break or crack in the bone'~'Medial and lateral joint compartment'~'inner and outer sections of the joint'~'retropatellar joint space'~'the area behind the kneecap'~'articular cartilage'~'smooth, white tissue that covers the ends of bones where they come together to form joints'~'degenerative cyst'~'a fluid-filled sac that forms due to wear and tear'~'quadriceps tendon'~'large tendon (connective tissue) that connects the quadriceps muscle to the kneecap'~'intrameniscal signal'~'internal signals within a knee cartilage (meniscus) seen on an MRI scan, which could indicate damage or tear'~'posterior cruciate ligaments'~'ligaments positioned at the back of the knee'~'lateral and medial collateral ligaments'~'ligaments on the outer (lateral) and inner (medial) sides of the knee'~'suprapatellar bursa'~'a small fluid-filled sack located above the kneecap'~'prepatellar bursa'~'a small fluid-filled sack located in front of the kneecap'~'Grade 4 chondromalacia patella'~'severe knee condition where the cartilage under the kneecap is significantly damaged or worn down'~'subchondral cyst formation'~'formation of fluid-filled sac under the cartilage'~'arthroscopic debridement'~'minimally invasive surgical procedure to remove damaged or dead tissue'~'physiologic'~'related to the normal functioning of the body'."
    const lines = (text.replaceAll("'", "").replaceAll('"', "")).split("~");
    return (
        <div className="flex-col text-center w-full">
            {lines.map((item, index) => {
            if (index % 2 == 0) {
               return <p key = {index} className="leading-loose">{item}</p>
            } else {
                return console.log(item)
                    }
                }
            )}
        </div>
    )
}
// function generateAnnotationBox(text) {
//     const Annotation = () => {
//         const [showAnnotation, setShowAnnotation] = useState(false);
//         const [annotationPosition, setAnnotationPosition]

//     }
// }