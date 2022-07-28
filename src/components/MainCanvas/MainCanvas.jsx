import React, { useEffect } from 'react'
import './MainCanvas.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import gsap from 'gsap'

const MainCanvas = () => {

  useEffect(() => {
    /**
     * Base
     */
    // Canvas
    const canvas = document.querySelector('canvas.webgl')

    // Scene
    const scene = new THREE.Scene()
    scene.background = null

    /**
     * Model
     */
    const gltfLoader = new GLTFLoader()
    gltfLoader.load('https://proyecto-acg.s3.amazonaws.com/three-models/untels.glb',(model)=> scene.add(model.scene))

    /**
     * Skybox
     */
    let materialArray = []
    let texture_ft = new THREE.TextureLoader().load('https://proyecto-acg.s3.amazonaws.com/skybox/yonder_ft.jpg')
    let texture_bk = new THREE.TextureLoader().load('https://proyecto-acg.s3.amazonaws.com/skybox/yonder_bk.jpg')
    let texture_up = new THREE.TextureLoader().load('https://proyecto-acg.s3.amazonaws.com/skybox/yonder_up.jpg')
    let texture_dn = new THREE.TextureLoader().load('https://proyecto-acg.s3.amazonaws.com/skybox/yonder_dn.jpg')
    let texture_rt = new THREE.TextureLoader().load('https://proyecto-acg.s3.amazonaws.com/skybox/yonder_rt.jpg')
    let texture_lf = new THREE.TextureLoader().load('https://proyecto-acg.s3.amazonaws.com/skybox/yonder_lf.jpg')

    materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}))

    for(let i=0; i<6; i++) materialArray[i].side = THREE.BackSide

    let skyboxGeo = new THREE.BoxGeometry(100,100,100)
    let skybox = new THREE.Mesh(skyboxGeo,materialArray)
    skybox.position.y -= 20
    skybox.rotation.y += Math.PI
    scene.add(skybox)
    /**
     * Lights
     */
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
    scene.add(directionalLight)

    /**
     * Sizes
     */
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    window.addEventListener('resize', () =>{
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
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
    camera.position.set(9, 3, 14)
    scene.add(camera)

    const tl = gsap.timeline()

    let animation1 = false
    let animation2 = false
    let animation3 = false
    let animation4 = false
    let prevScrollHeight = window.scrollY
    let postScrollHeight = 0

    window.addEventListener('scroll', (e)=>{
        postScrollHeight = e.composedPath()[1].scrollY
        if(prevScrollHeight < postScrollHeight ){
            if(window.scrollY > 850 && !animation1){
                animation1 = true
                tl.to(camera.position, {
                    x: -4,
                    y: 3,
                    z: 17,
                    duration: 1.5,
                    ease: 'none'
                }).to(camera.position, {
                    x: -15.6,
                    y: 0.8,
                    z: 14.2,
                    duration: 1.5,
                    ease: 'none'
                })
            }
        
            if(window.scrollY > 1700 && !animation2){
                animation2 = true
                tl.to(camera.position,{
                    x: -25,
                    y: 4.6,
                    z: 6.4,
                    duration: 3,
                    onUpdate: () => {
                        gsap.to(controls.target,{
                            x:-16,
                            y:2.25,
                            z:-0.2,
                            duration: 1
                        })
                    }
                })
            }
        
            if(window.scrollY > 2550 && !animation3){
                animation3 = true
                tl.to(camera.position,{
                    x: -13.7,
                    y: 4,
                    z: -16.6,
                    duration: 3,
                    ease: 'none',
                    onUpdate: () => {
                        gsap.to(controls.target,{
                            x:-2.7,
                            y:3.5,
                            z:-5,
                            duration: 1
                        })
                    }
                })
            }

            if(window.scrollY > 3400 && !animation4){
                animation4 = true
                tl.to(camera.position,{
                    x: 1.7,
                    y: 16.1,
                    z: -2.25,
                    duration: 1.5,
                    ease: 'none',
                    onUpdate: () => {
                        gsap.to(controls.target,{
                            x: 6,
                            y: 3.2,
                            z: 8,
                            duration: 1
                        })
                    }
                }).to(camera.position,{
                    x: 20.9,
                    y: 1.66,
                    z: 18,
                    duration: 2,
                    ease: 'none',
                    onUpdate: () => {
                        gsap.to(controls.target,{
                            x: 6,
                            y: 3.2,
                            z: 5,
                            duration: 1
                        })
                    }
                })
            }
        }else{    
            if(window.scrollY < 2720 && animation3){
                animation3 = false
                tl.to(camera.position,{
                    x: 1.7,
                    y: 16.1,
                    z: -2.25,
                    duration: 2,
                    ease: 'none',
                    onUpdate: () => {
                        gsap.to(controls.target,{
                            x: 6,
                            y: 3.2,
                            z: 8,
                            duration: 1
                        })
                    }
                }).to(camera.position,{
                    x: -13.7,
                    y: 4,
                    z: -16.6,
                    duration: 1.5,
                    ease: 'none',
                    onUpdate: () => {
                        gsap.to(controls.target,{
                            x: 6,
                            y: 3.2,
                            z: 8,
                            duration: 1
                        })
                    }
                })
            }

            if(window.scrollY < 2040 && animation2){
                animation2= false
                tl.to(camera.position,{
                    x: -25,
                    y: 4.6,
                    z: 6.4,
                    duration: 3,
                    onUpdate: () => {
                        gsap.to(controls.target,{
                            x:-16,
                            y:2.25,
                            z:-0.2,
                            duration: 1
                        })
                    }
                })
            }

            if(window.scrollY < 1360 && animation1){
                animation1 = false
                tl.to(camera.position, {
                    x: -15.6,
                    y: 0.8,
                    z: 14.2,
                    duration: 1.5,
                    ease: 'none',
                    onUpdate: () =>{
                        gsap.to(controls.target,{
                            x: -3,
                            y: 3,
                            z: 13,
                            duration: 1
                        })
                    }
                })
            }

            if(window.scrollY < 680 && animation4){
                animation4 = false
                tl.to(camera.position, {
                    x: -4,
                    y: 3,
                    z: 17,
                    duration: 1.5,
                    ease: 'none'
                }).to(camera.position,{
                    x: 9,
                    y: 3,
                    z: 14,
                    duration: 1.5,
                    ease: 'none'
                })
            }
        }
        prevScrollHeight = window.scrollY
    })

    // Controls
    const controls = new OrbitControls(camera, canvas)
    controls.target = new THREE.Vector3(-3,3,13)

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true
    })
    renderer.setClearColor( 0xffffff, 0 )
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    /**
     * Animate
     */
    const clock = new THREE.Clock()

    const tick = () =>{
        // Update controls
        controls.update(clock.getDelta())

        // Render
        renderer.render(scene, camera)

        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    }

    tick()
  }, [])
  

  return (
    <canvas className="webgl" style={{position: 'fixed'}}></canvas>
  )
}

export default MainCanvas