import ocr
from ocr_azure import ocr_azure
from cleanup import cleanup
from openai import OpenAI

# ###### 
# # Obtain text from image using ocr.py
# ######
# image_path = 'image.png'
# raw_text = ocr.get_raw_text(image_path)

###### 
# Obtain text from image using Azure API with ocr_azure.py
######
image_url = "https://i.imgur.com/0YqHuBs.png"
raw_text = ocr_azure(image_url)

###### 
# Cleanup PII from text with Azure API using cleanup.py
######
clean_text = cleanup(raw_text)
print('\n===========START OF CLEANED TEXT===========\n' + clean_text + '\n===========END OF CLEANED TEXT===========\n')


###### 
# CHATGPT IMPLEMENTATION
# To obtain keywords and it's definitions
######
print("STARTING CHATGPT API CALL")
client = OpenAI(api_key = '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')

completion = client.chat.completions.create(
  model="gpt-4",
  messages=[
    {"role": "system", "content": 
     """
    You are a medical professional. Your job is to identify medical keywords and phrases that has meaning or nuances that may not be understood by a non-medical professional. This is often due to the use of medical jargon or oft-misunderstood medical terms. 
    Therefore, you are to identify such terms and provide a description in vocabulary understood by consumers who are non-medical professionals. The description should be succinct and also capture the context of the report.
    The description will later be used in a web-based application, in which patients can hover over medical terms to read a description that is understandable by them. Do not reuse the same word when explaining terms.

    The output we require is in the form of a python dictionary {keyphrase1: description, keyphrase2: description}.
    """},

    {"role": "user", "content": clean_text}
  ]
)
print('SUCCESSFULLY OBTAINED CHATGPT OUTPUT.')

chatgpt_output = completion.choices[0].message.content
print(chatgpt_output) 