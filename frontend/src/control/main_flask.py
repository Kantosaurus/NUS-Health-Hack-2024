from flask import Flask, request, jsonify
from flask_cors import CORS
import os
#from main_ops import fileToText, textToGPT

app= Flask(__name__)
CORS(app)
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok= True)
#for privacy reasons remove this but as an added feature
@app.route('/upload', methods = ['POST'])
def upload_image():
    #return("Hello, it's my flask API")
    if 'image' not in request.files:
        return jsonify({'error': 'No file part', "code": 400})
    file = request.files['image']

    # If the file is empty or no file was received
    if file.filename == '' :
        return jsonify({'error' : "No file received", "code": 400})
    
    if file:
        #optionally add file validation, but already added in the upload jsx
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(filepath)
        return jsonify({'message': 'File received successfully',"code":200})
if __name__ == '__main__':
    app.run(debug=True)