import React, { Component } from 'react';
import * as THREE from "three";
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'

import objPath1 from '../../objects/obj11/I(leftleft)/untitled.obj'
import mtlPath1 from '../../objects/obj11/I(leftleft)/untitled.mtl'

import objPath2 from '../../objects/obj11/N(left)/untitled.obj'
import mtlPath2 from '../../objects/obj11/N(left)/untitled.mtl'

import objPath3 from '../../objects/obj11/S/untitled.obj'
import mtlPath3 from '../../objects/obj11/S/untitled.mtl'

import objPath4 from '../../objects/obj11/P/untitled.obj'
import mtlPath4 from '../../objects/obj11/P/untitled.mtl'

import objPath5 from '../../objects/obj11/I(left)/untitled.obj'
import mtlPath5 from '../../objects/obj11/I(left)/untitled.mtl'

import objPath6 from '../../objects/obj11/R/untitled.obj'
import mtlPath6 from '../../objects/obj11/R/untitled.mtl'

import objPath7 from '../../objects/obj11/A/untitled.obj'
import mtlPath7 from '../../objects/obj11/A/untitled.mtl'

import objPath8 from '../../objects/obj11/T/untitled.obj'
import mtlPath8 from '../../objects/obj11/T/untitled.mtl'

import objPath9 from '../../objects/obj11/I/untitled.obj'
import mtlPath9 from '../../objects/obj11/I/untitled.mtl'

import objPath10 from '../../objects/obj11/O/untitled.obj'
import mtlPath10 from '../../objects/obj11/O/untitled.mtl'

import objPath11 from '../../objects/obj11/N/untitled.obj'
import mtlPath11 from '../../objects/obj11/N/untitled.mtl'

import objPath12 from '../../objects/obj11/M/untitled.obj'
import mtlPath12 from '../../objects/obj11/M/untitled.mtl'

import objPath13 from '../../objects/obj11/Y/untitled.obj'
import mtlPath13 from '../../objects/obj11/Y/untitled.mtl'

class WordIns extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();

    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.mount.appendChild( renderer.domElement );
    const canvas = renderer.domElement;
    renderer.setSize( canvas.clientWidth, canvas.clientHeight );
    var camera = new THREE.OrthographicCamera(-9.25, 9.25,5, -5, -1000, 1000);

    var AmbientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(AmbientLight);

    var raycaster = new THREE.Raycaster();

    var loader = new MTLLoader();
    var group = new THREE.Group();
    scene.add( group );

    camera.position.z = 5;

    loader.load(mtlPath12, (materials) => {
      materials.preload();
      var objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(objPath12, (object) => {
        scene.add(object);
        object.position.set(-1.2, 2, 0);
        group.add( object );
      });
    });
    loader.load(mtlPath13, (materials) => {
    materials.preload();
    var objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load(objPath13, (object) => {
      scene.add(object);
      object.position.set(1, 2, 0);
      group.add( object );
      });
    });


    loader.load(mtlPath1, (materials) => {
        materials.preload();
        var objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(objPath1, (object) => {
          scene.add(object);
          object.position.set(-7.45, 0, 0);
          group.add( object );
        });
    });
    loader.load(mtlPath2, (materials) => {
        materials.preload();
        var objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(objPath2, (object) => {
          scene.add(object);
          object.position.set(-6.1, 0, 0);
          group.add( object );
        });
    });
    loader.load(mtlPath3, (materials) => {
        materials.preload();
        var objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(objPath3, (object) => {
          scene.add(object);
          object.position.set(-4.75, 0, 0);
          group.add( object );
        });
    });
    loader.load(mtlPath4, (materials) => {
        materials.preload();
        var objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(objPath4, (object) => {
          scene.add(object);
          object.position.set(-3.4, 0, 0);
          group.add( object );
        });
    });
    loader.load(mtlPath5, (materials) => {
        materials.preload();
        var objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(objPath5, (object) => {
          scene.add(object);
          object.position.set(-2.05, 0, 0);
          group.add( object );
        });
    });
    loader.load(mtlPath6, (materials) => {
        materials.preload();
        var objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(objPath6, (object) => {
          scene.add(object);
          object.position.set(-0.65, 0, 0);
          group.add( object );
        });
    });
    loader.load(mtlPath7, (materials) => {
        materials.preload();
        var objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(objPath7, (object) => {
          scene.add(object);
          object.position.set(0.7, 0, 0);
          group.add( object );
        });
    });
    loader.load(mtlPath8, (materials) => {
        materials.preload();
        var objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(objPath8, (object) => {
          scene.add(object);
          object.position.set(2.05, 0, 0);
          group.add( object );
        });
    });
    loader.load(mtlPath9, (materials) => {
        materials.preload();
        var objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(objPath9, (object) => {
          scene.add(object);
          object.position.set(3.35, 0, 0);
          group.add( object );
        });
    });
    loader.load(mtlPath10, (materials) => {
        materials.preload();
        var objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(objPath10, (object) => {
          object.scale.multiplyScalar( 1 );
          object.position.set(4.7, 0, 0);
          group.add( object );
        });
    });
    loader.load(mtlPath11, (materials) => {
      materials.preload();
      var objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(objPath11, (object) => {
        object.scale.multiplyScalar( 1 );
        object.position.set(6, 0, 0);
        group.add( object );
      });
    });
    loader.load(mtlPath3, (materials) => {
      materials.preload();
      var objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(objPath3, (object) => {
        object.scale.multiplyScalar( 1 );
        object.position.set(7.3, 0, 0);
        group.add( object );
      });
    });

    var selectedObject = null;
    var x = new Boolean(false);

		function onDocumentMouseMove( event ) {
			event.preventDefault();
			if ( selectedObject ) {
                // exit
                x = false;
				selectedObject = null;
			}
			var intersects = getIntersects( event.layerX, event.layerY );
			if ( intersects.length > 0 ) {

				var res = intersects.filter( function ( res ) {
					return res && res.object;

                } )[ 0 ];
                
				if ( res && res.object ) {
                selectedObject = res.object;
                // enter
                x = true;
				}
			}
		}
		var raycaster = new THREE.Raycaster();
		var mouseVector = new THREE.Vector3();

		function getIntersects( x, y ) {
      const canvas = renderer.domElement;
			x = ( x / canvas.clientWidth ) * 2 - 1;
			y = - ( y / canvas.clientHeight ) * 2 + 1;

			mouseVector.set( x, y, 0.5 );
			raycaster.setFromCamera( mouseVector, camera );
      
			return raycaster.intersectObject( group, true );

    }
    function resizeCanvasToDisplaySize() {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (canvas.width !== width ||canvas.height !== height) {
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    }
    function animate(time) {
      time *= 0.001;  // seconds
      resizeCanvasToDisplaySize();
    
      requestAnimationFrame(animate);

      //Rotate selected object
      if(x == true){
        selectedObject.rotation.y -= 0.2;
      }
      renderer.setClearColor (0xfff, 0);
      renderer.render( scene, camera );
    }
    animate();
	  window.addEventListener( "mousemove", onDocumentMouseMove, false );
  }
  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }
}
    
export default WordIns;