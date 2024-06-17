from flask import Flask, request, jsonify, render_template
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from flask_cors import CORS
import numpy as np
import os
import logging

app = Flask(__name__)
CORS(app)

logging.basicConfig(level=logging.INFO)


model_path = 'kidney_stone_detection_model.h5'
if not os.path.exists(model_path):
    logging.error(f"Model file {model_path} does not exist.")
else:
    model = load_model(model_path)
    logging.info(f"Model loaded from {model_path}.")

def prepare_image(img_path):
    img = image.load_img(img_path, target_size=(150, 150))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array /= 255.0
    return img_array

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    
    file_path = os.path.join('uploads', file.filename)
    os.makedirs('uploads', exist_ok=True)
    file.save(file_path)
    logging.info(f"File saved to {file_path}")
    
    img_array = prepare_image(file_path)
    
    prediction = model.predict(img_array)
    logging.info(f"Prediction: {prediction}")

    os.remove(file_path)
    logging.info(f"File {file_path} removed after prediction.")
    
    result = 'Kidney Stone Detected.' if prediction[0][0] < 0.6 else 'No Kidney Stone Detected.'
    return jsonify({'prediction': result})

if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    app.run(debug=True)
