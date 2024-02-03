#########################
# Censoring PII from text using Azure's PII API
# SETUP GUIDE: https://learn.microsoft.com/en-us/azure/ai-services/language-service/personally-identifiable-information/quickstart?pivots=programming-language-python
#########################

key = "739426f453d44970af2c6b611de35da3"
endpoint = "https://healthhack2024-pii-remover.cognitiveservices.azure.com/"

from azure.ai.textanalytics import TextAnalyticsClient
from azure.core.credentials import AzureKeyCredential

# Authenticate the client using your key and endpoint 
def foo(text_to_clean):
    cleaned_text = pii_recognition_example(client, text_to_clean)
    print("SUCCESSFULLY CLEANED TEXT WITH AZURE API.")
    return cleaned_text

def authenticate_client():
    ta_credential = AzureKeyCredential(key)
    text_analytics_client = TextAnalyticsClient(
            endpoint=endpoint, 
            credential=ta_credential)
    return text_analytics_client

client = authenticate_client()
print("SUCCESSFULLY CONNECTED TO AZURE API.")

# Example method for detecting sensitive information (PII) from text 
def pii_recognition_example(client, input_text):
    documents = [
        input_text
    ]
    response = client.recognize_pii_entities(documents, language="en", domain_filter="phi")
    result = [doc for doc in response if not doc.is_error]
    for doc in result:
        return doc.redacted_text
        # print("Redacted Text: {}".format(doc.redacted_text))
        # for entity in doc.entities:
        #     print("Entity: {}".format(entity.text))
        #     print("\tCategory: {}".format(entity.category))
        #     print("\tConfidence Score: {}".format(entity.confidence_score))
        #     print("\tOffset: {}".format(entity.offset))
        #     print("\tLength: {}".format(entity.length))
    




