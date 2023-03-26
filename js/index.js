const MODEL_URL = './models/';

async function detectFaces() {
  await faceapi.loadSsdMobilenetv1Model(MODEL_URL);
  await faceapi.loadFaceLandmarkModel(MODEL_URL);
  await faceapi.loadFaceRecognitionModel(MODEL_URL);
  const input = document.getElementById('myImage');
  let fullFaceDescriptions = await faceapi.detectAllFaces(input).withFaceLandmarks().withFaceDescriptors();
  fullFaceDescriptions = faceapi.resizeResults(fullFaceDescriptions);
  console.log(fullFaceDescriptions);
  faceapi.draw.drawDetections(canvas, fullFaceDescriptions)
  faceapi.draw.drawLandmarks(canvas, fullFaceDescriptions)
}

detectFaces();
