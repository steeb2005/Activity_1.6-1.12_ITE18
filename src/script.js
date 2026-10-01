import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import gsap from 'gsap'

/**
 * Base
*/


// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()











/**
 * ACTIVITY 1.7
 * 
*/

// // Object
// // const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2)
// // const sphereGeometry = new THREE.SphereGeometry(1, 40, 40)
// // const material = new THREE.MeshBasicMaterial({ 
// //     color: 0xFFC0CB,
// //     wireframe: true
// // })

// // const mesh1 = new THREE.Mesh(sphereGeometry, material)
// // scene.add(mesh1)

// // Buffer Geometry
// const customGeometry = new THREE.BufferGeometry()

// const count = 30
// const customMaterial = new THREE.MeshBasicMaterial({
//     color: 0xFFC0CB,
//     wireframe: true
// })

// // const positionsArray = new Float32Array(9)
// // 
// // positionsArray[0] = 0
// // positionsArray[1] = 0
// // positionsArray[2] = 0
// // 
// // positionsArray[3] = 0
// // positionsArray[4] = 1
// // positionsArray[5] = 0
// // 
// // positionsArray[6] = 1
// // positionsArray[7] = 0
// // positionsArray[8] = 0

// // const positionsArray = new Float32Array([
// //     0, 0, 0, 
// //     0, 1, 0, 
// //     1, 0, 0 
// // ])

// const positionArray = new Float32Array(count * 3 * 3 )

// for(let i = 0; i < count * 3 * 3 ; i++){
//     positionArray[i] = (Math.random() - 0.5) * 4
// }
// const positionAttribute = new THREE.BufferAttribute(positionArray, 3)
// customGeometry.setAttribute('position', positionAttribute)
// const customMesh = new THREE.Mesh(customGeometry, customMaterial) 
// scene.add(customMesh)









/**
 * ACTIVITY 1.8
*/

// const parameters = {
//     color: 0xff0000,    
//     spin: () => {
//         gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + Math.PI * 2 })
//     },
//     move: () => {
//         gsap.to(mesh.position, {duration: 2, delay: 1, x: 2, repeat: 1, yoyo: true})
//     },
    
// }

// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: parameters.color })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// /**
//  * Debug options
//  */
// gui.add(mesh.position, 'y').min(- 3).max(3).step(0.01).name('elevation')
// gui.add(material, 'wireframe')
// gui.add(mesh, 'visible')
// gui.addColor(parameters, 'color').onChange(() => {
//     material.color.set(parameters.color)
// })
// gui.add(parameters, 'spin')
// gui.add(parameters, 'move')
// gui.add(parameters, 'toCamera')










/**
 * ACTIVITY 1.9
*/

// const loadingManager = new THREE.LoadingManager()
// loadingManager.onStart = () => {
//     console.log('loading started')
// }

// loadingManager.onLoad = () => {
//     console.log('loading finished')
// }

// loadingManager.onProgress = () => {
//     console.log('loading progress')
// }

// loadingManager.onError = () => {
//     console.log('Error')
// }
// const textureLoader = new THREE.TextureLoader(loadingManager)

// const alphaTexture = textureLoader.load('/textures/door/alpha.jpg')
// const heightTexture = textureLoader.load('/textures/door/height.jpg')
// const normalTexture = textureLoader.load('/textures/door/normal.jpg')
// const ambientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
// const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
// const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg')
// // const colorTexture = textureLoader.load('/textures/door/color.jpg')
// // const colorTexture = textureLoader.load('/textures/checkerboard-1024x1024.png')
// // const colorTexture = textureLoader.load('/textures/checkerboard-8x8.png') 
// // const colorTexture = textureLoader.load('/textures/minecraft.png') 
// const colorTexture = textureLoader.load('/textures/Stylized_Ground_002_basecolor.png') 


// // colorTexture.repeat.x = 2
// // colorTexture.repeat.y = 2

// // colorTexture.wrapS = THREE.RepeatWrapping
// // colorTexture.wrapT = THREE.RepeatWrapping

// // colorTexture.wrapS = THREE.MirroredRepeatWrapping
// // colorTexture.wrapT = THREE.MirroredRepeatWrapping

// // colorTexture.offset.x = 0.5
// // colorTexture.offset.y = 0.5

// // colorTexture.rotation = Math.PI * 0.25
// // colorTexture.center.x = 0.5
// // colorTexture.center.y = 0.5

// // colorTexture.minFilter = THREE.NearestFilter
// // colorTexture.minFilter = THREE.LinearFilter

// colorTexture.generateMipmaps = false
// colorTexture.magFilter= THREE.NearestFilter
// // const texture = textureLoader.load(
// //     '/textures/door/color.jpg',
// //     // Status callbacks
// //     () => {
// //         console.log('loading finished')
// //     },
// //     () => {
// //         console.log('loading progress')
// //     },
// //     () => {
// //         console.log('Error')
// //     }
// // )

// /**
//  * Object
//  */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// // const geometry = new THREE.SphereGeometry(1, 32, 32)
// // const geometry = new THREE.TorusGeometry(1, 0.35, 32, 100)
// console.log(geometry.attributes.uv)

// const material = new THREE.MeshBasicMaterial({ map: colorTexture })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)









/**
 * Activity 1.10
*/

// const textureLoader = new THREE.TextureLoader()

// const doorColorTexture = textureLoader.load('/textures/door/color.jpg')
// const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg')
// const doorAmbientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
// const doorHeightTexture = textureLoader.load('/textures/door/height.jpg')
// const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg')
// const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
// const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg')
// const matcapTexture = textureLoader.load('/textures/matcaps/8.png')
// // const matcapTexture = textureLoader.load('/textures/Material_01.png')
// const gradientTexture = textureLoader.load('/textures/gradients/5.jpg')


// const cubeTextureLoader = new THREE.CubeTextureLoader()

// const environmentMapTexture = cubeTextureLoader.load([
//  '/textures/environmentMaps/0/px.jpg',
//  '/textures/environmentMaps/0/nx.jpg',
//  '/textures/environmentMaps/0/py.jpg',
//  '/textures/environmentMaps/0/ny.jpg',
//  '/textures/environmentMaps/0/pz.jpg',
//  '/textures/environmentMaps/0/nz.jpg'
// ])


// /**
//  * Objects
// */

// // const material = new THREE.MeshBasicMaterial({
// //     map: doorColorTexture,
// //     color: 0xff0000,
// //     transparent: true,
// //     opacity: 0.5,
// //     alphaMap: doorAlphaTexture,
// //     side: THREE.DoubleSide
// // })


// // const material = new THREE.MeshNormalMaterial({
// //     side: THREE.DoubleSide,
// //     flatShading: true
// // })

// // const material = new THREE.MeshMatcapMaterial({
// //     matcap: matcapTexture,
// //     side: THREE.DoubleSide
// // })

// // const material = new THREE.MeshDepthMaterial({
// //     side: THREE.DoubleSide
// // })

// // const material = new THREE.MeshPhongMaterial({
// //     side: THREE.DoubleSide,
// // })

// // const material = new THREE.MeshLambertMaterial({
// //     side: THREE.DoubleSide,
// //     shininess: 100,
// //     specular: 0x1188ff
// // })

// // const material = new THREE.MeshToonMaterial({
// //     side: THREE.DoubleSide,
// //     gradientMap: gradientTexture
// // })

// // const material = new THREE.MeshStandardMaterial({
// //     side: THREE.DoubleSide,
// //     metalness: 0,
// //     roughness: 1,
// //     aoMapIntensity: 1,
// //     displacementScale: 0.05,
// //     map: doorColorTexture,
// //     aoMap: doorAmbientOcclusionTexture,
// //     displacementMap: doorHeightTexture,
// //     metalnessMap: doorMetalnessTexture,
// //     roughnessMap: doorRoughnessTexture,
// //     normalMap: doorNormalTexture,
// //     normalScale: new THREE.Vector2(0.5, 0.5),
// //     transparent: true,
// //     alphaMap: doorAlphaTexture,
// // })


// const material = new THREE.MeshStandardMaterial({
//     side: THREE.DoubleSide,
//     metalness: 0.7,
//     roughness: 0.2,
//     envMap: environmentMapTexture
// })

// gradientTexture.generateMipmaps = false
// gradientTexture.minFilter = THREE.NearestFilter
// gradientTexture.magFilter= THREE.NearestFilter

// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
// scene.add(ambientLight)
// const pointLight = new THREE.PointLight(0xffffff, 0.5)
// pointLight.position.set(2, 3, 4)
// scene.add(pointLight)

// const sphere = new THREE.Mesh(
//     new THREE.SphereGeometry(0.5, 64, 64),
//     material
// )
// sphere.position.x = -1.5
// sphere.geometry.setAttribute('uv2', new THREE.BufferAttribute(sphere.geometry.attributes.uv.array, 2))

// const plane = new THREE.Mesh(
//     new THREE.PlaneGeometry(1, 1, 100, 100),
//     material
// )
// plane.geometry.setAttribute('uv2', new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2))

// const torus = new THREE.Mesh(
//     new THREE.TorusGeometry(0.3, 0.2, 64, 128),
//     material
// )
// torus.geometry.setAttribute('uv2', new THREE.BufferAttribute(torus.geometry.attributes.uv.array, 2))



// torus.position.x = 1.5

// scene.add(sphere, plane, torus)


// /**
//  * Debug 
// */
// gui.add(material, 'roughness').min(0).max(1).step(0.0001)
// gui.add(material, 'metalness').min(0).max(1).step(0.0001)









/**
 * ACTIVITY 1.11
*/

/**
 * Textures
*/

const textureLoader = new THREE.TextureLoader()
const matcapTexture = textureLoader.load('textures/matcaps/7.png')

/**
 * Fonts
*/
const fontLoader = new FontLoader() 

fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) => {
        const textGeometry = new TextGeometry(
            'Absolute Bisaya',
            {
                font: font,
                size: 0.5,
                height: 0.2,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }
        )
        const material = new THREE.MeshMatcapMaterial({
            matcap: matcapTexture
        })
        const text = new THREE.Mesh(textGeometry, material)
        scene.add(text)
        textGeometry.computeBoundingBox()
        console.log(textGeometry.boundingBox)

        textGeometry.translate(
            - (textGeometry.boundingBox.max.x * 0.02) * 0.5,
            - (textGeometry.boundingBox.max.y * 0.02) * 0.5,
            - (textGeometry.boundingBox.max.z * 0.03) * 0.5,
        )

        textGeometry.center()

        const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45)

        for(let i = 0; i < 100; i++){
            const donut = new THREE.Mesh(donutGeometry, material)
            donut.position.x = (Math.random() - 0.5) * 10
            donut.position.y = (Math.random() - 0.5) * 10
            donut.position.z = (Math.random() - 0.5) * 10
            donut.rotation.x = Math.random() * Math.PI
            donut.rotation.y = Math.random() * Math.PI
            const scale = Math.random()
            donut.scale.set(scale, scale, scale)
            scene.add(donut)
        }


    }
)


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // sphere.rotation.y = 0.1 * elapsedTime
    // plane.rotation.y = 0.1 * elapsedTime
    // torus.rotation.y = 0.1 * elapsedTime

    // sphere.rotation.x = 0.15 * elapsedTime
    // plane.rotation.x = 0.15 * elapsedTime
    // torus.rotation.x = 0.15 * elapsedTime


    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}


window.addEventListener('dblclick', () => {
    if(!document.fullscreenElement){
        // Requests fullscreen
        canvas.requestFullscreen()
    }else{
        // Exits fullscreen
        document.exitFullscreen()
    }
    console.log('double clicked')
})

tick()