
from openai import OpenAI
import csv
import os
import sys
from dotenv import load_dotenv

# set path back to current path (due to change by main_flask.py which calls main.py)
parent_directory = os.path.abspath('')
sys.path.append(parent_directory)
from ocr_azure import ocr_azure
from cleanup import cleanup

###### 
# Obtain text from image using Azure API with ocr_azure.py
######
# FOR TESTING: image_url = "https://i.imgur.com/0YqHuBs.png"
###### 
# Cleanup PII from text with Azure API using cleanup.py
######
def fileToText(image_url):
  raw_text = ocr_azure(image_url)
  clean_text = cleanup(raw_text)
  print('\n===========START OF CLEANED TEXT===========\n' + clean_text + '\n===========END OF CLEANED TEXT===========\n')
  return clean_text

###### 
# CHATGPT IMPLEMENTATION
# To obtain keywords and it's definitions
######
def textToGPT(text):
  # retrieve keys from .env file
  load_dotenv()
  OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
  print("STARTING CHATGPT API CALL")
  client = OpenAI(api_key = OPENAI_API_KEY)
  completion = client.chat.completions.create(
    model="gpt-4",
    messages=[
      {"role": "system", "content": 
      """
      You are a medical professional. Your job is to identify medical keywords and phrases that has meaning or nuances that may not be understood by a non-medical professional. This is often due to the use of medical jargon or oft-misunderstood medical terms. 
      Therefore, you are to identify such terms and provide a description in vocabulary understood by consumers who are non-medical professionals. The description should be succinct and also capture the context of the report.
      The description will later be used in a web-based application, in which patients can hover over medical terms to read a description that is understandable by them. Do not reuse the same word when explaining terms.

      The output we require is in the form: 'first keyphrase'~'description of first keyphrase'~'second keyphrase2'~'description of second keyphrase' which will then be written to a csv file.
      """},

      {"role": "user", "content": text}
    ],
    seed=1337 # to fix the seed to get a semi-deterministic output
  )
  print('SUCCESSFULLY OBTAINED CHATGPT OUTPUT.')

  chatgpt_output = completion.choices[0].message.content
  print(chatgpt_output) 

  ###### 
  # Sets the relative file path so that it can find keywords.csv
  ######
  abspath = os.path.abspath(__file__)
  dname = os.path.dirname(abspath)
  os.chdir(dname)

  ###### 
  # Write ChatGPT output to keywords.csv
  ######
  with open('keywords.csv', 'w') as csv_file:
      writer = csv.writer(csv_file, quoting=csv.QUOTE_ALL)
      writer.writerow([chatgpt_output])
  print("WROTE OUTPUT TO keywords.csv")
  print("=====END OF OPERATION (main.py)=====")
