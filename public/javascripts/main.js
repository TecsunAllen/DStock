var ThreeApp = (function () {

    window.onload = () => {
        var appContainer =  document.querySelector("#appContainer");
        var meshes = (()=>{
            var geometry = new THREE.BoxGeometry( 1, 1, 1 );
            var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            var cube = new THREE.Mesh( geometry, material );
            return [cube];
        })();
        
        var camera = (()=>{
            var camera =  new THREE.PerspectiveCamera( 75, innerWidth / innerHeight, 0.1, 1000 );
            camera.position.z = 5;
            return camera;
        })();
        
        
        
        var wgs = new WGS(appContainer,{
            camera,   
            meshes
        });
        
        wgs.render(function(){
            var mesh =  meshes[0];
            mesh.rotation.x +=0.1;
            mesh.rotation.y +=0.1;
        });
    };
}());