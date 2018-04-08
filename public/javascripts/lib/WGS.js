var WGS = function(target,store){
    this.isNeedRefresh = true;
    this.container = target;
    this.store=Object.assign({
        renderer:new THREE.WebGLRenderer(),
        scene:new THREE.Scene(),
        camera:null,
        _3dObjects:[]
    },store);

    var self = this;
    this.store =  new Proxy(this.store, {
        set: function(obj, prop, value) {
            console.log(`${prop} is being set to ${value}`);
            obj[prop] = value;
            self.isNeedRefresh = true;
        }
    });

    window.onresize = ()=>{
        var width = this.container.clientWidth;
        var height = this.container.clientHeight;
        this.store.camera.aspect = width/height;
        this.isNeedRefresh = true;
    };


    this.render=function(animattionFun){
        //console.time("render");
        const {renderer,scene,camera,_3dObjects} = this.store;
        var width = this.container.clientWidth;
        var height = this.container.clientHeight;
        if(this.isNeedRefresh){ 
            renderer.setSize( width, height );
            this.container.appendChild( renderer.domElement );
            scene.children = [];
            camera.updateProjectionMatrix();
            scene.add(camera);
            _3dObjects.forEach(element => {
                scene.add(element);
            });
            this.isNeedRefresh = false;
        }
        if(animattionFun)animattionFun.bind(this)();
        renderer.render(scene,camera);
        requestAnimationFrame(arguments.callee.bind(this,animattionFun));
        //console.timeEnd("render");
    }
}