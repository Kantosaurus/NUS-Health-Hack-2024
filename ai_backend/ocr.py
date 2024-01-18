#########################
# Uses easyOCR for image-based OCR
#########################
import easyocr

def get_raw_text(path_to_image):
    ### this needs to run once to load model into memory, takes some time to run
    reader = easyocr.Reader(['en']) # add flag gpu=False for no/low-memory GPUs.

    list_result = reader.readtext(path_to_image, paragraph = True) # detail = 0 removes the probability.
    result = []
    coordinates =[]
    for i in list_result:
        result.append(i[1]) 
        coordinates.append(i[0])
    
    text = ''
    for j in result:
        text += j + ' '
    print("SUCCESSFULLY CONVERTED IMAGE TO TEXT USING OCR.")
    return text

#########################
# FOR DEBUGGING
#########################
# image_path = 'image.png'
# raw_text = get_raw_text(image_path)
# print(raw_text)



