document.getElementById('run-simulation').addEventListener('click', function() {
    // Collect input values
    const geometry = {
        shape: document.getElementById('geometry-shape').value,
        dimensions: document.getElementById('geometry-dimensions').value,
        position: document.getElementById('geometry-position').value
    };
    const boundaryConditions = {
        inletVelocity: document.getElementById('inlet-velocity').value,
        outletPressure: document.getElementById('outlet-pressure').value,
        wallCondition: document.getElementById('wall-condition').value
    };
    const model = document.getElementById('model-select').value;

    console.log('Running simulation with the following parameters:');
    console.log('Geometry:', geometry);
    console.log('Boundary Conditions:', boundaryConditions);
    console.log('Turbulence Model:', model);

    // Visualization
    const canvas = document.getElementById('visualization-canvas');
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a simple geometry for visualization
    const geometryObj = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometryObj, material);
    scene.add(cube);

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
});
