// 导入组件
import Vue from 'vue';
import store from './vueAppStore.js';
import router from './routes.js';

var app = new Vue({
    name:'AppContainee',
    router,
    el: '#AppContainer',
    store,
    template: '<router-view></router-view>'
});

store.commit("initData");

/*var ThreeApp = (function () {

    window.onload = () => {
        var appContainer =  document.querySelector("#appContainer");

        var _3dObjects = (()=>{         
            var ambientLight = new THREE.AmbientLight( 0x222222 );
            var pointLight = new THREE.PointLight( 0xffffff, 1, 200 );
            pointLight.position.set( 2, 0, 80 );


            var sphereSize = 1;
            var pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );

            var geometry = new THREE.SphereGeometry( 50, 20, 20 );;
            var material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
            var cube = new THREE.Mesh( geometry, material );
            return [cube,ambientLight,pointLight,pointLightHelper];
        })();
        
        var camera = (()=>{
            var camera =  new THREE.PerspectiveCamera( 75, innerWidth / innerHeight, 0.1, 1000 );
            camera.position.z = 200;
            return camera;
        })();
        
           
        var wgs = new WGS(appContainer,{
            camera,   
            _3dObjects
        });
        
        wgs.render((function(){
            var count = 0;
            _3dObjects[2].position.x = -100;
            return ()=>{
                _3dObjects[2].position.x+=Math.sin(count+=0.01);
            }
        }()));
    };
}());*/