import React from "react";
import myText from "./control/uploads/output.txt?raw";
import keywords from "./control/keywords.csv?raw";
export default function LoadReport() {
    window.globalNumber = 0;
    const lines = myText.split('\n');
    // Assuming keywords are separated by ~ and potentially wrapped in quotes
    const words = keywords.replaceAll("'", "").replaceAll('"', "").split("~");
    return (
        <div className="flex-col text-center w-full pr-16 leading-loose">
            {lines.map((line, lineIndex) => (
                <p key={lineIndex}> 
                  {/* Process each line to highlight keywords */}
                  {highlightWordsInLine(line, words)}
                </p>
            ))}
        </div>
    );
}

function highlightWordsInLine(line, keywords, bringUpBox) {
    let elements = [];
    let lastIndex = 0; // Track the index of the char of the string we are at
  
    keywords.forEach((keyword, index) => {
      if (index % 2 === 0) { // Assuming you're interested in even-index keywords
        const regex = new RegExp(`(${keyword})`, 'gi');
        let match;
  
        while ((match = regex.exec(line)) !== null) {
          // Add text before the matched keyword
          if (match.index > lastIndex) {
            elements.push(<span key={`text-${lastIndex}`}>{line.substring(lastIndex, match.index)}</span>);
          }
          // Add the keyword wrapped in a mark and button
          let curr_num = window.globalNumber;
          elements.push(
              <mark key={`mark-${index}-${window.globalNumber}`}>
              <button
                id={`${index}`}
                name={`${window.globalNumber}`}
                onClick={(event) => bringUpBox(event, index, curr_num)}>
                {match[0]}
              </button>
            </mark>
          );
          window.globalNumber++;
          lastIndex = match.index + match[0].length; // Update lastIndex to the end of the current match
        }
    }
    });
  
    // Add any remaining text after the last match
    if (lastIndex < line.length) {
      elements.push(<span key={`text-end`}>{line.substring(lastIndex)}</span>);
    }
    return <span>{elements}</span>;
  }
  
// function bringUpBox(

