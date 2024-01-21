from flask import Flask, render_template
from main_ops import fileToText, textToGPT

app= Flask(__name__)
@app.route('/')
def index():
    return("Hello, it's my flask API")
@app.route('/api/ocrupload')
def renderText(filename):
    return fileToText(filename)
@app.route('/api/generategpt')
def generateText(textFile):
    return textToGPT(textFile)
if __name__=='__main__':
    app.run()
