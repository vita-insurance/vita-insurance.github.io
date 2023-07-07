const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const videoElement = document.getElementById('videoElement');
const captureBtn = document.getElementById('captureBtn');
const cancelBtn = document.getElementById('cancelBtn');
const capturedImage = document.getElementById('capturedImage');
const result = document.getElementById('result');

// Función para abrir el modal y acceder a la cámara web
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            videoElement.srcObject = stream;
        })
        .catch((error) => {
            console.error('Error al acceder a la cámara:', error);
        });
});

// Función para tomar una foto
captureBtn.addEventListener('click', () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    const dataURL = canvas.toDataURL();
    capturedImage.src = dataURL;
    result.style.display = 'block';
    modal.style.display = 'none';
    // Detener el acceso a la cámara
    const stream = videoElement.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
});

// Función para cancelar y cerrar el modal
cancelBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    // Detener el acceso a la cámara
    const stream = videoElement.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
});

//------------------------------

const selectImageButton = document.getElementById('selectImageButton');
const imageContainer = document.getElementById('capturedImage');

selectImageButton.addEventListener('click', () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function () {
                imageContainer.src = reader.result;
            };

            reader.readAsDataURL(file);
        }
    });

    fileInput.click();
});




