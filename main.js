import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GroundProjectedSkybox } from 'three/addons/objects/GroundProjectedSkybox.js';

//import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
//import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js';
//import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
//import { SSRPass } from 'three/addons/postprocessing/SSRPass.js';

import * as POSTPROCESSING from "postprocessing";

import { SSAOEffect, SSREffect, SSGIEffect, TRAAEffect, MotionBlurEffect, VelocityDepthNormalPass, HBAOEffect } from "realism-effects"

let isPhone = false;
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  isPhone = true;
}
// Cubemap Generator
let cubeCamera, cubeRenderTarget;

// Scene
THREE.ColorManagement.enabled = true;
const scene = new THREE.Scene();

// Renderer
const renderer = new THREE.WebGLRenderer({
  powerPreference: "high-performance",
	antialias: false,
	stencil: false,
	depth: false,
	alpha: false,
	preserveDrawingBuffer: true
});
renderer.outputColorSpace = THREE.SRGBColorSpace;
//renderer.toneMapping = THREE.CineonToneMapping;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
//renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMappingExposure = 3.2;
renderer.useLegacyLights = false;

let model;
const loader = new GLTFLoader().setPath('assets/');
const rgbeLoader = new RGBELoader().setPath('assets/');
const textureLoader = new THREE.TextureLoader().setPath('assets/')

let skybox;

rgbeLoader.load('rural_asphalt_road_2k.hdr', function(bgtexture) {
  bgtexture.mapping = THREE.EquirectangularReflectionMapping;

  skybox = new GroundProjectedSkybox( bgtexture );
  skybox.scale.setScalar( 1000 );
  scene.background = bgtexture;
  //scene.environment = bgtexture;
  scene.add( skybox );

  rgbeLoader.load('archviz.ue.test2_denoised_ao.hdr', function(aomap){
    aomap.flipY = false;
    aomap.channel = 1;
    aomap.colroSpace = THREE.SRGBColorSpace;
    console.log('aomap', aomap);
    rgbeLoader.load('archviz.ue.test2_denoised_dir.hdr', function(lightmap) {
    lightmap.flipY = false;
    lightmap.colroSpace = THREE.SRGBColorSpace;
    lightmap.channel = 1;
    console.log('lightmap', lightmap);
    loader.load( 'archviz.compressed.glb', function ( gltf ) {
      console.log('archviz.compressed.glb, aomap', gltf);
      model = gltf.scene.children[0];
      model.children.forEach(obj => {
        const { material } = obj;

        let newMaterial = new THREE.MeshStandardMaterial();

        newMaterial.color = material.color;
        
        if(["CouchFabric", "Floor", "Floor.External", "TableCenter", "Carpet", "PictureFrame.Picture2", "PictureFrame.Picture"].indexOf(material.name) > -1) {
          newMaterial.map = material.map;
          newMaterial.map.colorSpace = THREE.LinearSRGBColorSpace;
          if(material.name == "Floor" || material.name == "Carpet" || material.name == "TableCenter") {
            newMaterial.map.colorSpace = THREE.SRGBColorSpace;
          }
        }

        newMaterial.aoMap = aomap;
        if(["Floor", "Floor.External", "TableCenter", "TableEdge", "TrackingLightRail", "PictureFrame.Inner", "PictureFrame.Picture", "PictureFrame.Picture2"].indexOf(material.name) > -1) {
          newMaterial.aoMapIntensity = 0.95;

          if(material.name.endsWith(".External")) { 
            newMaterial.envMap = bgtexture;
            newMaterial.envMapIntensity = 1.0;
          } else {
            newMaterial.envMap = cubeRenderTarget.texture;
            if(material.name == "TableCenter") {
              newMaterial.envMapIntensity = 1.75;
            } else {
              newMaterial.envMapIntensity = 4.0;
            }

            if(material.name.startsWith("PictureFrame") && material.name != "PictureFrame.Outter") newMaterial.envMapIntensity = 1;
            
            
          }
        } else if (material.name == "CouchFabric") {
          newMaterial.aoMapIntensity = 0.1;
        } else {
          newMaterial.aoMapIntensity = 0.25;
        }
        if(material.name.startsWith("PictureFrame") && material.name != "PictureFrame.Outter") newMaterial.aoMapIntensity = 0.5;
        if(material.name == "TableCenter") newMaterial.aoMapIntensity = 0.0;
        
        newMaterial.lightMap = lightmap; //material.emissiveMap;
        newMaterial.lightMapIntensity = 2.0;    
        if(material.name == "CouchFabric")    newMaterial.lightMapIntensity = 4.0;    
        if(material.roughnessMap) {
          newMaterial.roughnessMap = material.roughnessMap;
          //newMaterial.roughness = 0.01;
        }

        if(["Floor", "Floor.External"].indexOf(material.name) > -1) {
          newMaterial.roughness = 0.15;
        } else {
          newMaterial.roughness = material.roughness * 0.5;
        }
        

        if(material.normalMap) {
          newMaterial.normalMap = material.normalMap;
          if(["Floor.External"].indexOf(material.name) > -1) {
            newMaterial.normalMap.colorSpace = THREE.SRGBColorSpace;
          } else {
            newMaterial.normalMap.colorSpace = THREE.LinearSRGBColorSpace;
          }
          
        }

        //material.emissiveMap = null;
        if(material.name == "TrackingLightLens") {
          newMaterial.map = null;
          newMaterial.lightMap = null;
          newMaterial.aoMap = null;
          newMaterial.emissive = new THREE.Color(255/255, 220/255, 128/255);
          newMaterial.emissiveIntensity = 3.0;
        }

        newMaterial.name = material.name;
        console.log(material)
        obj.material = newMaterial;

        if(obj.material.name.endsWith(".External")) {
          return;
        }

        obj.material.onBeforeCompile = function (shader) {
          shader.uniforms.cubeMapSize = {value: new THREE.Vector3(6,6,4)};
          shader.uniforms.cubeMapPos = {value: new THREE.Vector3(0,1,0)};
          shader.uniforms.flipEnvMap.value = true;

          console.log('uniforms', shader.uniforms)



          //replace shader chunks with box projection chunks
					shader.vertexShader = 'varying vec3 vWorldPosition;\n' + shader.vertexShader;

					shader.vertexShader = shader.vertexShader.replace(
						'#include <worldpos_vertex>',
						worldposReplace2
					);

					//shader.fragmentShader = shader.fragmentShader.replace(
					//	'#include <envmap_pars_fragment>',
					//	envmapParsReplace2
					//);

          shader.fragmentShader = `
          uniform vec3 cubeMapSize;
          uniform vec3 cubeMapPos;
          varying vec3 vWorldPosition;
          
          vec3 parallaxCorrectNormal( vec3 v, vec3 cubeSize, vec3 cubePos ) {

            vec3 nDir = normalize( v );
            vec3 rbmax = (   .5 * ( cubeSize - cubePos ) - vWorldPosition ) / nDir;
            vec3 rbmin = ( - .5 * ( cubeSize - cubePos ) - vWorldPosition ) / nDir;
          
            vec3 rbminmax;
            rbminmax.x = ( nDir.x > 0. ) ? rbmax.x : rbmin.x;
            rbminmax.y = ( nDir.y > 0. ) ? rbmax.y : rbmin.y;
            rbminmax.z = ( nDir.z > 0. ) ? rbmax.z : rbmin.z;
          
            float correction = min( min( rbminmax.x, rbminmax.y ), rbminmax.z );
            vec3 boxIntersection = vWorldPosition + nDir * correction;
          
            return boxIntersection - cubePos;
          }

          `+shader.fragmentShader;

					shader.fragmentShader = shader.fragmentShader.replace(
						'#include <envmap_physical_pars_fragment>',
						envmapPhysicalParsReplace2
					);

          console.log(shader);

        }
        

        console.log(obj.material);
      })
      scene.add( gltf.scene );
      scene.traverse(obj => {
        console.log("scene.obj traverse", obj);
        if(!obj.isMesh) return;
        console.log(obj.material.name);
        if(["TableCenter", "TableEdge", "TableBottom", "TableLegs", "Couch.Feet", "CouchFabric"].indexOf(obj.material.name) > -1) {
          console.log('hiding:', obj.material.name);
          obj.visible = false;
        }
      });
      cubeCamera.update(renderer, scene);
      scene.traverse(obj => {
        console.log("scene.obj traverse", obj);
        if(!obj.isMesh) return;
        if(["TableCenter", "TableEdge", "TableBottom", "TableLegs", "Couch.Feet", "CouchFabric"].indexOf(obj.material.name) > -1) {
          obj.visible = true;
        }
      });
    
      document.getElementById('spinner').remove();

      drawScene();
    }, undefined, function ( error ) {
      console.error( error );
    } );
  });
  }); 
});



// Camera
let cameraFovValue = isPhone ? 85.0 : 45.0;

const camera = new THREE.PerspectiveCamera(cameraFovValue, window.innerWidth / window.innerHeight, 0.1, 2000);
camera.position.set(2.27, 1, -0.76);
camera.lookAt(0, 1.5, 0);

// Cubemap Probe
cubeRenderTarget = new THREE.WebGLCubeRenderTarget(512);
cubeRenderTarget.texture.type = THREE.HalfFloatType;
cubeCamera = new THREE.CubeCamera(0.01, 1000, cubeRenderTarget);
cubeCamera.renderTarget.texture.generateMipmaps = true;
cubeCamera.renderTarget.minFilter = THREE.LinearMipMapLinearFilter;
cubeCamera.renderTarget.mapping = THREE.CubeReflectionMapping;
cubeCamera.position.set(0, 1, 0);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);

const resizeViewport = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(3, window.devicePixelRatio));
}
resizeViewport();
addEventListener('resize', resizeViewport);
addEventListener('wheel', e => {
  if(e.shiftKey) {
    cameraFovValue += (e.wheelDeltaY / 120.0);
    camera.fov = cameraFovValue;
    camera.updateProjectionMatrix();
  }
}, { passive: false });

const composer = new POSTPROCESSING.EffectComposer(renderer);
const renderPass = new POSTPROCESSING.RenderPass(scene, camera);
composer.addPass(renderPass);

const velocityDepthNormalPass = new VelocityDepthNormalPass(scene, camera)
composer.addPass(velocityDepthNormalPass)


const hbaoOptions = {
  resolutionScale: 1,
  spp: 32,
  distance: 0.21,
  distancePower: 10,
  power: 4,
  bias: 16,
  thickness: 0.01,
  color: 0,
  useNormalPass: false,
  velocityDepthNormalPass: null,
  normalTexture: null,
  iterations: 1,
  radius: 10,
  samples: 5
}

//const ssaoEffect = new SSAOEffect(composer, camera, scene, hbaoOptions);

/*const ssrEffect = new SSREffect(scene, camera, velocityDepthNormalPass, {
  enabled: true,
		resolutionScale: 0.5,
		velocityResolutionScale: 1,
		correctionRadius: 1,
		blend: 0.95,
		correction: 0.1,
		blur: 0,
		blurSharpness: 10,
		blurKernel: 1,
		distance: 10,
		intensity: 1,
		exponent: 1.75,
		maxRoughness: 0.99,
		jitter: 0,
		jitterRoughness: 2,
		roughnessFade: 1,
		fade: 1.03,
		thickness: 3.5,
		ior: 1.75,
		fade: 0,
		steps: 5,
		refineSteps: 6,
		maxDepthDifference: 10,
		missedRays: false

});
//const effectPass = new POSTPROCESSING.EffectPass(camera, hbaoEffect, ssrEffect);
const effectPass = new POSTPROCESSING.EffectPass(camera, ssrEffect, motionBlurEffect, hbaoEffect);*/
let effectPass;

const motionBlurEffect = new MotionBlurEffect(velocityDepthNormalPass)

let traaEffect, hbaoEffect, bloomEffect;

const setupPostProcessing = () => {
  if(isPhone) {
    console.log('is phone');
    //const smaaEffect = new POSTPROCESSING.SMAAEffect();
    //effectPass = new POSTPROCESSING.EffectPass(camera, motionBlurEffect, smaaEffect);
    effectPass = new POSTPROCESSING.EffectPass(camera, motionBlurEffect);
    composer.addPass(effectPass);
    composer.addPass(new POSTPROCESSING.EffectPass(camera, new POSTPROCESSING.BloomEffect({
      radius: 1.0,
      intensity: 2.0,
    })));
  } else {
    console.log('not phone');
    hbaoEffect = new HBAOEffect(composer, camera, scene, hbaoOptions);
    effectPass = new POSTPROCESSING.EffectPass(camera, motionBlurEffect, hbaoEffect);
    composer.addPass(effectPass);
    composer.addPass(new POSTPROCESSING.EffectPass(camera, new POSTPROCESSING.BloomEffect({
      radius: 2.0,
      intensity: 2.0,
    })));
    traaEffect = new TRAAEffect(scene, camera, velocityDepthNormalPass);
    const traaPass = new POSTPROCESSING.EffectPass(camera, traaEffect);
    composer.addPass(traaPass);
  }
}

setupPostProcessing();




//const traaEffect = new TRAAEffect(scene, camera, velocityDepthNormalPass);
//const traaPass = new POSTPROCESSING.EffectPass(camera, traaEffect);
//composer.addPass(traaPass);


//const composer = new EffectComposer( renderer );
//const ssaoPass = new SSAOPass( scene, camera, window.innerWidth, window.innerHeight);
//ssaoPass.kernelRadius = 0.3;
//ssaoPass.minDistance = 0.00001;
//ssaoPass.maxDistance = 0.0010;
//ssaoPass.output = 0;
//composer.addPass( ssaoPass );

//const ssrPass = new SSRPass();


//const hbaoEffect = new HBAOEffect(composer, camera, scene);

//const outputPass = new OutputPass();
//composer.addPass( outputPass );

document.body.appendChild(renderer.domElement);

const drawScene = () => {
    //model.rotation.x += 0.01;
    //model.rotation.z += 0.01;
  //cubeCamera.position.set(camera.position.x, 0.01, camera.position.z);
  //cubeCamera.update(renderer, scene);
  requestAnimationFrame(drawScene);
  composer.render();
  //renderer.render(scene, camera);
}


var worldposReplace = `
#define BOX_PROJECTED_ENV_MAP

#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )

  vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );

  #ifdef BOX_PROJECTED_ENV_MAP

    vWorldPosition = worldPosition.xyz;

  #endif

#endif
`

var worldposReplace2 = `
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

  vWorldPosition = worldPosition.xyz;

#endif
`;

var envmapParsReplace = `
#define BOX_PROJECTED_ENV_MAP

#if defined( USE_ENVMAP ) || defined( PHYSICAL )

  uniform float reflectivity;
  uniform float envMapIntensity;

#endif

#ifdef USE_ENVMAP

  #ifdef BOX_PROJECTED_ENV_MAP

    uniform vec3 cubeMapSize;
    uniform vec3 cubeMapPos;
    varying vec3 vWorldPosition;

    vec3 parallaxCorrectNormal( vec3 v, vec3 cubeSize, vec3 cubePos ) {

      vec3 nDir = normalize( v );
      vec3 rbmax = (   .5 * ( cubeSize - cubePos ) - vWorldPosition ) / nDir;
      vec3 rbmin = ( - .5 * ( cubeSize - cubePos ) - vWorldPosition ) / nDir;

      vec3 rbminmax;
      rbminmax.x = ( nDir.x > 0. ) ? rbmax.x : rbmin.x;
      rbminmax.y = ( nDir.y > 0. ) ? rbmax.y : rbmin.y;
      rbminmax.z = ( nDir.z > 0. ) ? rbmax.z : rbmin.z;

      float correction = min( min( rbminmax.x, rbminmax.y ), rbminmax.z );
      vec3 boxIntersection = vWorldPosition + nDir * correction;

      return boxIntersection - cubePos;
    }

  #endif

  #if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )

    varying vec3 vWorldPosition;

  #endif

  #ifdef ENVMAP_TYPE_CUBE

    uniform samplerCube envMap;

  #else

    uniform sampler2D envMap;

  #endif

  uniform float flipEnvMap;
  uniform int maxMipLevel;

  #if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )

    uniform float refractionRatio;

  #else

    varying vec3 vReflect;

  #endif

#endif
`;

var envmapParsReplace2 = `
uniform vec3 cubeMapSize;
uniform vec3 cubeMapPos;
varying vec3 vWorldPosition;

vec3 parallaxCorrectNormal( vec3 v, vec3 cubeSize, vec3 cubePos ) {

  vec3 nDir = normalize( v );
  vec3 rbmax = (   .5 * ( cubeSize - cubePos ) - vWorldPosition ) / nDir;
  vec3 rbmin = ( - .5 * ( cubeSize - cubePos ) - vWorldPosition ) / nDir;

  vec3 rbminmax;
  rbminmax.x = ( nDir.x > 0. ) ? rbmax.x : rbmin.x;
  rbminmax.y = ( nDir.y > 0. ) ? rbmax.y : rbmin.y;
  rbminmax.z = ( nDir.z > 0. ) ? rbmax.z : rbmin.z;

  float correction = min( min( rbminmax.x, rbminmax.y ), rbminmax.z );
  vec3 boxIntersection = vWorldPosition + nDir * correction;

  return boxIntersection - cubePos;
}

#ifdef USE_ENVMAP
	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`; 

var envmapPhysicalParsReplace = `
#if defined( USE_ENVMAP ) && defined( PHYSICAL )

  vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
    vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
    #ifdef ENVMAP_TYPE_CUBE

      vec3 worldNormalFinal = worldNormal;

    #ifdef BOX_PROJECTED_ENV_MAP

      worldNormalFinal = parallaxCorrectNormal( worldNormal, cubeMapSize, cubeMapPos );

    #endif

    vec3 queryVec = vec3( flipEnvMap * worldNormalFinal.x, worldNormalFinal.yz );

    #ifdef TEXTURE_LOD_EXT

      vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );

    #else

      vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );

    #endif

      envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

    #elif defined( ENVMAP_TYPE_CUBE_UV )

      vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
      vec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );

    #else

      vec4 envMapColor = vec4( 0.0 );

    #endif

    return PI * envMapColor.rgb * envMapIntensity;
  }

  float getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {
    float maxMIPLevelScalar = float( maxMIPLevel );
    float desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );
    return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
  }

  vec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {

    #ifdef ENVMAP_MODE_REFLECTION

      vec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );

    #else

      vec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );

    #endif

    reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
    float specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );

    #ifdef ENVMAP_TYPE_CUBE

      vec3 reflectVecFinal = reflectVec;

    #ifdef BOX_PROJECTED_ENV_MAP

     reflectVecFinal = parallaxCorrectNormal( reflectVec, cubeMapSize, cubeMapPos );

    #endif

    vec3 queryReflectVec = vec3( flipEnvMap * reflectVecFinal.x, reflectVecFinal.yz );

    #ifdef TEXTURE_LOD_EXT

      vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );

    #else

      vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );

    #endif

    envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

    #elif defined( ENVMAP_TYPE_CUBE_UV )

      vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
      vec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));

    #elif defined( ENVMAP_TYPE_EQUIREC )

      vec2 sampleUV;
      sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
      sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;

      #ifdef TEXTURE_LOD_EXT

        vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );

      #else

        vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );

      #endif

      envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
    #elif defined( ENVMAP_TYPE_SPHERE )

      vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );

      #ifdef TEXTURE_LOD_EXT

        vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );

      #else

        vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );

      #endif

      envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

    #endif

    return envMapColor.rgb * envMapIntensity;
  }
#endif
`;

var envmapPhysicalParsReplace2 = `
#ifdef USE_ENVMAP

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

      worldNormal = parallaxCorrectNormal( worldNormal, cubeMapSize, cubeMapPos );

			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}


	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

      reflectVec = parallaxCorrectNormal( reflectVec, cubeMapSize, cubeMapPos );

			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	#ifdef USE_ANISOTROPY

		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

			#ifdef ENVMAP_TYPE_CUBE_UV

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

#endif
`;